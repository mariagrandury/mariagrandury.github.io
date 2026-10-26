[![Netlify Status](https://api.netlify.com/api/v1/badges/6aec6947-1dc7-4e5d-bed5-641148f67f27/deploy-status)](https://app.netlify.com/sites/mariagrandury/deploys)

# Personal Website

Built with Vite ⚡, Vue ✌️ & Windi CSS 💨.

This website is loosley based on the [Vitesse Template](https://github.com/antfu/vitesse).

## Notes for future me

### Usage

Install dependencies (make sure [`pnpm`](https://pnpm.io) is installed)

```
pnpm install
```

Run development server:

```
pnpm dev
```

Build bundled app:

```
pnpm build
```

### Used libraries/plugins

* vite-ssg (pre-render pages for better SEO)
* vite-plugin-components (auto imports vue components)
* vite-plugin-windicss (windicss support)
* vite-plugin-icons (provides Iconfiy icons as vue components)
* VueUse (collection of composable Vue utilites)

### Useful VS Code extensions

* Volar (Vue language support)
* Windi CSS Intellisense
* Iconify IntelliSense

### Git LFS & Netlify Large Media

* Install [Git LFS](https://github.com/git-lfs/git-lfs/wiki/Installation#debian-and-ubuntu)
* Install Netlify CLI: `npm install netlify-cli -g`
* Set up [Netlify Large Media](https://docs.netlify.com/large-media/setup/)

### CV page (`/cv_overleaf`)

`/cv_overleaf` reproduces the Overleaf CV (YAAC class). Its content lives in `src/data/cv.ts` (copied from the LaTeX sources: `cv_research.tex` for the default view, `publications_apa.tex`, `talks_full.tex`, the internships and `skills.tex` behind the "See more" buttons). The PDF served at `/docs/cv_maria_grandury.pdf` is `cv_research.tex` compiled with `lualatex` (needs the FontAwesome 4 font, e.g. `apt install fonts-font-awesome`). When the CV changes on Overleaf, update both `src/data/cv.ts` and the PDF.
