# better1440.com

The Better1440 landing page: one row per app (Analyze, Launch5, Relationships) with its video, status and next step, plus the waiting-list form.

- **Edit content** (app text, statuses, prices, video IDs, links): `lib.ts`.
- **Waiting list:** the form posts to Relationships (`https://relationships.better1440.com/api/waitlist`). Sign-ups are listed at relationships.better1440.com/waitlist for the owner.
- **Add a video:** put the YouTube video ID in the app's `video` field in `lib.ts`.
- Fonts are bundled from npm (Zilla Slab, Public Sans); no Google Fonts request.

Next.js, static. Deployed on Vercel (project `better1440-site`).
