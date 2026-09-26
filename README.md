# Rally Board Interactive Desktop

Lightweight interactive static web application presenting Rally's board and committees as an interactive desktop interface inspired by macOS.

## Live Website & Hosting Setup

### 1. GitHub Pages (Free Hosting & Custom Domain)

This repository includes an automated GitHub Actions deployment pipeline (`.github/workflows/deploy.yml`).

#### To enable public hosting:
1. Go to your GitHub repository **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Push changes or merge into your main branch.
4. GitHub Pages will automatically build and publish your website live at `https://<your-username>.github.io/<repo-name>/`.

#### To attach a Custom Domain (e.g. `rally.org` or `desktop.rally.org`):
1. In repository **Settings** → **Pages** → **Custom domain**, enter your domain name.
2. In your DNS provider (e.g., Cloudflare, Namecheap, GoDaddy):
   - For apex domain (`rally.org`): Add `A` records pointing to GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
   - For subdomain (`desktop.rally.org`): Add a `CNAME` record pointing to `<your-username>.github.io`.
3. Check **Enforce HTTPS**.

---

### 2. Cloudflare Pages Deployment (Alternative)
1. Log into **Cloudflare Dashboard** → **Workers & Pages**.
2. Click **Create Application** → **Pages** → **Connect to Git**.
3. Select this repository branch.
4. Set **Build command**: *(leave empty)*
5. Set **Build output directory**: `/`
6. Click **Save and Deploy**. Cloudflare Pages will provide an instant `https://<project>.pages.dev` link and free custom domain SSL mapping.

---

## Documentation & Real Data Integration

For instructions on replacing demo content and uploading real member photos/logos, see [`REQUIRED_REAL_DATA.md`](./REQUIRED_REAL_DATA.md).
