import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPage = repository.toLowerCase().endsWith(".github.io");
const githubBase =
  process.env.GITHUB_ACTIONS === "true" && repository && !isUserOrOrgPage
    ? `/${repository}`
    : "/";
const base = process.env.BASE_PATH ?? githubBase;
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "your-github-user";
const site = process.env.SITE_URL ?? `https://${owner}.github.io${base}`;

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
});
