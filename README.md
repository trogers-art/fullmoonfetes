# Full Moon Fetes — fullmoonfetes.com

Custom React/Vite site. Managed by Rogers Web Solutions.

## Stack

- React 18 + React Router v6
- Vite 5
- Hosted on IONOS (static file hosting)
- Auto-deploys via GitHub Actions on push to `main`

## Local dev

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. GitHub Actions builds and FTPs `dist/` to IONOS automatically.

Required GitHub repo secrets:
- `FTP_HOST` — IONOS FTP hostname
- `FTP_USER` — IONOS FTP username  
- `FTP_PASS` — IONOS FTP password

## Assets to add

- `src/assets/logo-fmf.png` — Full Moon Fetes logo (provided)
- `src/assets/logo-travel.png` — Travel advisor logo (provided)
- `src/assets/headshot.jpg` — Victoria's headshot (pending)
- `src/assets/gallery/` — Event photos (pending)

## Calendly

Replace `CALENDLY_URL` in `src/pages/Contact.jsx` with Victoria's actual Calendly link.
