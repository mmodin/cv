import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { createReadStream, existsSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { chromium } from "playwright";

const distDir = resolve("dist");
const outputPath = join(distDir, "cv.pdf");
const basePath = normalizePath(process.env.BASE_PATH ?? "/");
const port = Number(process.env.PDF_PORT ?? 4174);

if (!existsSync(distDir)) {
  throw new Error("Missing dist directory. Run `npm run build` before `npm run pdf`.");
}

const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".pdf", "application/pdf"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
]);

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url ?? "/", `http://127.0.0.1:${port}`);
  let pathname = decodeURIComponent(requestUrl.pathname);

  if (basePath !== "/" && pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length) || "/";
  }

  const filePath = resolveFile(pathname);

  if (!filePath.startsWith(distDir) || !existsSync(filePath)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": mimeTypes.get(extname(filePath)) ?? "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
});

await new Promise((resolveListen) => {
  server.listen(port, "127.0.0.1", resolveListen);
});

const browser = await chromium.launch();

try {
  const page = await browser.newPage();
  const target = `http://127.0.0.1:${port}${joinUrl(basePath, "print/")}`;
  await page.goto(target, { waitUntil: "networkidle" });
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
  });
  await readFile(outputPath);
  console.log(`Generated ${outputPath}`);
} finally {
  await browser.close();
  await new Promise((resolveClose) => server.close(resolveClose));
}

function resolveFile(pathname) {
  const normalizedPath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const relativePath = normalizedPath === "/" ? "index.html" : normalizedPath.slice(1);
  const absolutePath = join(distDir, relativePath);

  if (existsSync(absolutePath) && !absolutePath.endsWith("/")) {
    return absolutePath;
  }

  return join(absolutePath, "index.html");
}

function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return `/${pathname.replace(/^\/|\/$/g, "")}`;
}

function joinUrl(base, path) {
  if (base === "/") {
    return `/${path}`;
  }

  return `${base}/${path}`;
}
