# Haythem Idi — portfolio

The maintained English/French portfolio source is in **`netlify-ready/`**. The folder retains its original name so the existing Netlify deployment can continue serving visitors during migration. GitHub Pages builds the same source independently.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds and checks the static website, then publishes only `netlify-ready/dist`. It runs on relevant pushes to `main` and can be started manually from Actions. Production canonical URLs, social metadata, translated URLs, and the sitemap use `https://haythemidi.dev`.

### One-time setup

1. Open this repository's **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Under **Custom domain**, enter `haythemidi.dev` and save it **before changing DNS**. A DNS warning is expected while Name.com still points at Netlify. For an Actions deployment, a CNAME file is not required; this repository setting controls the custom domain.
4. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**, choose `main`, and wait for the build and deploy jobs to pass.
5. In Name.com DNS, replace the root A record pointing to `75.2.60.5` with these four root A records (leave each Host blank):

   ```text
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

6. Change the `www` CNAME answer from `haythemidi.netlify.app` to `haythemidi02.github.io`. Do not include a scheme or `/portfolio` path. Leave unrelated records unchanged.
7. Allow DNS and the GitHub certificate to become ready. Under **Settings → Pages**, enable **Enforce HTTPS** when available.
8. Check the homepage, French homepage, a case-study page, and CV download using the custom domain. Keep the Netlify project active until the new domain is confirmed working.

The root-relative asset URLs are designed for the custom domain. The temporary `haythemidi02.github.io/portfolio/` address is not the intended final entry point.

GitHub Pages does not inject the Netlify hosting badge. Netlify's badge setting does not affect the source or the GitHub Pages artifact.

## Local development

```sh
cd netlify-ready
npm ci
npm run build
npm run check
npm run dev
```

Set `SITE_URL=https://haythemidi.dev` when building production metadata locally. Content is in `netlify-ready/src/content.mjs`; replace `netlify-ready/public/Haythem_Idi_CV.pdf` to update the downloadable CV.

## References

- [GitHub custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [GitHub custom domain configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
