# Valentine Website 💖

A fully interactive, single-page Valentine website with:
- romantic landing screen
- playful "Will you be my Valentine?" flow
- dodging **No** button with cute messages
- celebration screen + delayed date reveal

## Run locally

```bash
python3 -m http.server 4173
```

Open: `http://localhost:4173`

## Use your own photos (offline/local assets)

Replace these files with your own images (keep filenames the same or update `index.html`):
- `assets/photos/photo1.svg`
- `assets/photos/photo2.svg`
- `assets/photos/photo3.svg`
- `assets/photos/photo4.svg`

All stickers/photos are now stored locally in this repo (no internet-hosted media dependencies).

## Deploy free on GitHub Pages

1. Push this repository to GitHub.
2. Ensure your default branch is `main`.
3. In GitHub repo settings, enable **Pages** (if not auto-enabled).
4. The workflow `.github/workflows/deploy-pages.yml` deploys automatically on push to `main`.
5. Share your URL: `https://<username>.github.io/<repo-name>/`


## Use your custom domain (`sushipoo.myforevervalentine.io`)

This repo now includes a `CNAME` file with:

```
sushipoo.myforevervalentine.io
```

To make it live, do this in your domain DNS provider:

1. **If using a subdomain only (recommended):**
   - Create a `CNAME` record
   - **Name/Host:** `sushipoo`
   - **Target/Value:** `<your-github-username>.github.io`
2. In GitHub repo **Settings → Pages**, set **Custom domain** to:
   - `sushipoo.myforevervalentine.io`
3. Enable **Enforce HTTPS** (once certificate is issued).

DNS can take a few minutes to 24 hours to propagate.
