/* ============================================================
   GOOGLE REVIEWS — server-side proxy (Vercel Serverless Function)

   Fetches the live rating, review count and reviews for the official
   WEDA Google Business Profile and hands them to the homepage.

   The API key NEVER reaches the browser: it lives only in this
   function's environment. The browser only ever calls /api/reviews.

   ------------------------------------------------------------
   SETUP — two environment variables, both set in Vercel:

     GOOGLE_MAPS_API_KEY   Google Cloud key with "Places API (New)"
                           enabled. Restrict it to that API.
     GOOGLE_PLACE_ID       The Place ID of the official listing:
                           "The Winning Edge - RIMC, RMS, Sainik
                            School Coaching in Dehradun", Dehradun.
                           Find it with Google's Place ID Finder:
                           https://developers.google.com/maps/documentation/places/web-service/place-id
                           It looks like ChIJ....  Do not guess it.

   Set them with:
     vercel env add GOOGLE_MAPS_API_KEY production
     vercel env add GOOGLE_PLACE_ID production

   ------------------------------------------------------------
   LIMITS — worth knowing, and why the page says what it says:
   Google's Places API returns AT MOST 5 reviews per place, and it
   chooses which 5. There is no way to page through all of them, and
   there is no push/real-time feed. New genuine reviews appear here
   when the cache below expires — not instantly. The page therefore
   links out to the full listing for everything else.
   ============================================================ */

const CACHE_SECONDS = 21600; // 6 hours — well inside Google's usage terms

export default async function handler(req, res) {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // Cache at the CDN edge so we are not hitting Google on every pageview.
  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS * 4}`
  );

  if (!key || !placeId) {
    // Not configured yet. Say so honestly — the front end then shows the
    // "rating unavailable" state and links to Google. It never invents data.
    return res.status(200).json({
      configured: false,
      reason: 'GOOGLE_MAPS_API_KEY and/or GOOGLE_PLACE_ID are not set on this deployment.',
      reviews: [],
    });
  }

  try {
    const r = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=en`,
      {
        headers: {
          'X-Goog-Api-Key': key,
          'X-Goog-FieldMask': [
            'id',
            'displayName',
            'rating',
            'userRatingCount',
            'googleMapsUri',
            'reviews',
          ].join(','),
        },
      }
    );

    if (!r.ok) {
      const body = await r.text();
      return res.status(200).json({
        configured: true,
        ok: false,
        reason: `Google Places API returned ${r.status}`,
        detail: body.slice(0, 500),
        reviews: [],
      });
    }

    const d = await r.json();

    return res.status(200).json({
      configured: true,
      ok: true,
      name: d.displayName?.text || null,
      rating: typeof d.rating === 'number' ? d.rating : null,
      total: typeof d.userRatingCount === 'number' ? d.userRatingCount : null,
      mapsUri: d.googleMapsUri || null,
      placeId: d.id || placeId,
      // Pass through only what we render. No editing of review text.
      reviews: (d.reviews || []).map(rv => ({
        author: rv.authorAttribution?.displayName || null,
        photo: rv.authorAttribution?.photoUri || null,
        authorUri: rv.authorAttribution?.uri || null,
        rating: rv.rating ?? null,
        text: rv.originalText?.text || rv.text?.text || '',
        relative: rv.relativePublishTimeDescription || null,
        time: rv.publishTime || null,
      })),
      fetchedAt: new Date().toISOString(),
    });
  } catch (err) {
    return res.status(200).json({
      configured: true,
      ok: false,
      reason: 'Request to Google Places API failed.',
      detail: String(err).slice(0, 300),
      reviews: [],
    });
  }
}
