# Website improvements for internship & PhD visiting applications

Ranked by impact (for a recruiter or PI who opens the site for 2 minutes) and effort. ✅ = done in the `dev/academic-improvements` PR.

| # | Improvement | Impact | Effort | Status |
|---|---|---|---|---|
| 1 | **One-page academic home** (`/academic`): photo, 2-paragraph bio, interests, "open to internships/visits" banner, latest news, selected publications, service. What PIs expect to see first. | High | Low | ✅ |
| 2 | **Publications page** (`/publications`): grouped by year, first-author badges, filters, BibTeX per paper and "download all". | High | Low | ✅ |
| 3 | **CV one click away** (`/cv_overleaf` + PDF) and linked from the academic home. | High | Low | ✅ (PR #10) |
| 4 | **News list + world map** (`/news`, `/world`). | Medium | Low | ✅ (PR #9) |
| 5 | **SEO basics**: Person JSON-LD with all research profiles, `sitemap.xml`, `robots.txt`, real 404 page. Helps "María Grandury" searches show the site and profiles. | Medium | Low | ✅ |
| 6 | **Make `/academic` the landing page** (swap with `/`), and put "Publications" and "CV" in the navbar. | High | Low | To decide (changes current views) |
| 7 | **Research statement page**: 3 research threads (multicultural evaluation, Spanish NLP, benchmark validity), each with a figure, the key question, and the papers behind it. Reuse it in applications. | High | Medium | Next |
| 8 | **Paper pages / TL;DRs**: one figure + 2-line summary per first-author paper; link slides, posters and talk videos. | High | Medium | Next |
| 9 | **Teaching & mentoring page**: courses (UNAM, CENIA, UNA, UNIA), hours, students, materials, testimonials. Strong signal for PhD visits. | Medium | Low | Next |
| 10 | **Press kit for organizers**: short/long bio (EN/ES), photos, talk topics, past talks with videos. | Medium | Low | Next |
| 11 | **Citation metrics at build time** (Semantic Scholar API) for papers and a total count. | Medium | Medium | Later |
| 12 | **Consistent English-first copy** across pages; persist the EN/ES choice across reloads. | Medium | Low | Later |
| 13 | **Performance**: compress large images (e.g. `231024_bias_everywhere.JPG` is 13.6 MB), `loading="lazy"`, local `og:image` instead of the Twitter CDN. | Medium | Low | Later |
| 14 | **Privacy-friendly analytics** (Plausible / GoatCounter) to see which pages recruiters open. | Low | Low | Later |
| 15 | **RSS feed for news**. | Low | Low | Later |
| 16 | **Upgrade the toolchain** (Vite 2 → 5, `vite-plugin-components`/`vite-plugin-icons` → `unplugin-*`). Both plugins are deprecated. | Low (now) | High | Later |
