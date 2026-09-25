# ePactive — GitHub Pages Static Export

This folder is a **self-contained static deployment package**. `index.html` is in the folder root, and all visual assets needed by the site are included under `assets/media/`.

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `epactive-site`.
2. Extract this ZIP file and upload **the contents of this folder** to the repository root. Do not upload the ZIP file itself.
3. Commit and push to the `main` branch.
4. In **GitHub → Settings → Pages**, choose **Deploy from a branch**, select `main`, and select the `/(root)` folder. Save.
5. GitHub will publish the site at `https://<github-user>.github.io/<repository-name>/`.

The export uses hash-based internal navigation (for example `#/philosophy`) so all ePactive pages work correctly from a GitHub Pages project URL without server-side route rewrites.

## What is included

- `index.html` — direct GitHub Pages entry point
- `404.html` — fallback document for direct navigation
- `assets/` — bundled JavaScript, CSS, and all local visual media
- `source/` — a snapshot of the React/Vite application source for future editing
- `.nojekyll` — ensures GitHub Pages serves all static files unchanged

## Important deployment note

The current enquiry form is a front-end conversation form and does not send email by itself on GitHub Pages. Connect a form provider, email service, or serverless endpoint before relying on it for production enquiries.
