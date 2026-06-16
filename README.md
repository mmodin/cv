# CV website

Static CV website built with Astro and deployed to GitHub Pages. The generated site includes a web CV and a downloadable `cv.pdf` created during the deploy workflow.

## Edit your CV

Update the content in `src/data/cv.ts`. The web page and print/PDF page both read from that file.

## Local development

```sh
npm install
npm run dev
```

Astro will print a local URL, usually `http://localhost:4321`.

## Build locally

```sh
npm run build
```

To generate the PDF locally, install Playwright's Chromium once:

```sh
npm run pdf:install
npm run build
npm run pdf
```

The PDF is written to `dist/cv.pdf`.

## GitHub Pages setup

1. Push this repository to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` or run the workflow manually.

For a project repository, the workflow automatically builds with the repository name as the base path. For a `username.github.io` repository, it builds at the root path.
