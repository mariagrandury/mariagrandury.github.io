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

### Content data

All content lives in `public/data/` and is loaded by the views at runtime:

* `events.csv`: talks, interviews and media (Divulgation, Research, Home)
* `papers.csv`: publications (Research, Home)
* `projects.csv`, `entities.csv`, `profiles.csv`, `bio.md`
* `news.csv`: one line per news item (`/news` list and `/world` map). Columns: `date` (`YYYY`, `YYYY-MM` or `YYYY-MM-DD`), `status` (`highlighted` or empty), `category` (`paper`, `talk`, `media`, `career`, `award`, `service`), `text`, `location`, `lat`, `lng` (empty for remote items) and `link`. Highlighted items are shown in bold in `/news` and as always-visible labels in `/world`; the other items appear on hover.

### Academic views

* `/academic`: one-page academic home (bio, interests, latest news, selected publications, service).
* `/publications`: all papers from `papers.csv`, grouped by year, with first-author filter and BibTeX generated from the CSV (`src/utils/bibtex.ts`).
* `public/sitemap.xml` lists the public routes; add new routes there too.

See `IMPROVEMENTS.md` for the ranked list of next improvements.
