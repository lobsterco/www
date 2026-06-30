# lobstercomputer.com

The Lobster Computer landing page. Next.js (App Router), statically exported.

GitHub Pages URL: https://lobsterco.github.io/www/

```
npm run dev     # local dev on http://localhost:8731
npm run build   # static export to out/
npm run serve   # serve the built out/ on :8731
```

- `app/` — page, layout, global CSS
- `components/` — team UI: `Credentials`, `Team`, `Member`
- `lib/` — the WebGL foil shader, wordmark ring, portrait keying
- `data/team.ts` — the team
- `public/` — portraits, textures, fonts

`team/` holds the original B&W source photos the portrait cutouts are derived from.
