# JamBox

Public organization site for **JamBox**, an independent app studio in Seoul. Built for `jambox.site` (Vercel) so App Store and Play listings can point at a real company home: apps, address, support, privacy, and terms.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). English is the default. Use **한국어** in the header for Korean.

## Deploy on Vercel

1. Import this folder as a Next.js project (or push it to GitHub and import the repo).
2. Production URL should be public. In the project: **Settings → Deployment Protection** — turn **Vercel Authentication** off. Apple will not accept a login wall.
3. **Settings → Domains** — add `jambox.site` and `www.jambox.site`.

## Point Gabia DNS at Vercel

The domain is registered at [Gabia](https://www.gabia.com) (nameservers `ns.gabia.co.kr`). After Vercel lists the domain, in Gabia DNS add:

| Type  | Host | Value                 |
| ----- | ---- | --------------------- |
| A     | `@`  | `76.76.21.21`         |
| CNAME | `www` | `cname.vercel-dns.com` |

Use the exact values Vercel shows if they differ. Propagation can take a few minutes to a few hours. Then `https://jambox.site` should serve this site with HTTPS.

## App Store notes

This site is meant to satisfy Apple’s organization website check: public, functional, named **JamBox**, with headquarters address, contact, support, and privacy. Apple also prefers a work email on the same domain (for example `hello@jambox.site`) in addition to the mailbox already listed on the site.
