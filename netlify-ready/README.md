# Haythem Idi — Netlify portfolio

English/French portfolio, five project pages, theme controls, filters, and a downloadable CV. This is the source folder prepared for a GitHub-connected Netlify deployment.

## Publish

1. Create a GitHub repository named `portfolio` in your own account.
2. Upload the contents of this folder to the repository root. `package.json`, `netlify.toml`, `src`, `scripts`, and `public` must be at the root.
3. In Netlify, choose **Add new project → Import an existing project → GitHub** and select the repository.
4. Use the **Free** plan. Build command: `npm run build`. Publish directory: `dist`. Leave the base directory empty.
5. Deploy. Netlify provides the `URL` build environment variable; the build uses it for canonical URLs, language alternatives, Open Graph metadata, and the sitemap.
6. If you rename the project address afterward, trigger a new build so metadata uses the new address.
7. If the project starts private, set project visibility to public to let recruiters view it. Verify the URL in a signed-out/private browser window.

Do not set an SPA redirect such as `/* /index.html 200`: this is a multi-page website with a generated 404 page.

Every push to your linked production branch triggers a new deployment.

## Content

Edit `src/content.mjs` to update projects and experience. Both `en` and `fr` translations are kept in each field. Replace `public/Haythem_Idi_CV.pdf` when your CV changes.

## Local development

Requires Node.js 20 or newer. Install development dependencies for the checks:

```sh
npm ci
npm run build
npm run check
npm run dev
```

For local builds, canonical metadata defaults to localhost. On Netlify, `URL` is automatically supplied. Set `SITE_URL` only when you deliberately want to override the canonical domain.

Tests cover generated routes, local links, metadata, accessible names, valid PDF/font files, and key interactions in both languages. Visual browser QA remains outstanding from the original build session.

Plus Jakarta Sans is distributed under the SIL Open Font License in `public/fonts/OFL.txt`.
