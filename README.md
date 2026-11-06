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

### Content

Most content lives in CSV files under `public/data/` (one row per line, newest first):

* `papers.csv`: publications (`status`: `highlights` or `published`)
* `events.csv`: talks, interviews and media. `talk`/`organizer` are in English; `talk_es`/`organizer_es` hold the Spanish version and are shown when the site is in Spanish (empty = use English). When `event` starts with the organizer, that part is shown in the current language.
* `entities.csv`: education, affiliations and organizations (About page)
* `projects.csv`: projects

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
