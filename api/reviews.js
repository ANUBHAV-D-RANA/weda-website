/* ============================================================
   GOOGLE REVIEWS — server-side proxy (Vercel Serverless Function)

   Fetches the live rating, review count and reviews for the official
   WEDA Google Business Profile and hands them to the homepage.

   The API key NEVER reaches the browser: it lives only in this
   function's environment. The browser only ever calls /api/reviews.

   ------------------------------------------------------------
   SETUP — you only need ONE environment variable:

     GOOGLE_MAPS_API_KEY   Google Cloud key with "Places API (New)"
                           enabled. Restrict it to that API.

   Set it with (it prompts for the value - paste it into the prompt,
   it is stored encrypted by Vercel and never enters this repo):

     vercel env add GOOGLE_MAPS_API_KEY production

   OPTIONAL — GOOGLE_PLACE_ID
   If not set, this function resolves the listing itself by searching
   for PLACE_QUERY below and caching the result. Set GOOGLE_PLACE_ID
   explicitly (a ChIJ... string from Google's Place ID Finder) if you
   ever want to pin it and skip the lookup:
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

/* The official listing, exactly as Google names it. Resolved from the
   share link the academy published: share.google/UaB1ukRY7ot2y6hwH
   -> Knowledge Graph id /g/11r3lk68qj */
const PLACE_QUERY = 'The Winning Edge - RIMC, RMS, Sainik School Coaching in Dehradun, Dehradun, Uttarakhand';

/* Warm across invocations on the same container - avoids re-resolving. */
let cachedPlaceId = null;

async function resolvePlaceId(key) {
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID;
  if (cachedPlaceId) return cachedPlaceId;

  const r = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': key,
      'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress',
    },
    body: JSON.stringify({ textQuery: PLACE_QUERY, maxResultCount: 1, languageCode: 'en' }),
  });
  if (!r.ok) throw new Error(`Place lookup failed (${r.status})`);

  const d = await r.json();
  const hit = (d.places || [])[0];
  if (!hit?.id) throw new Error('Could not find the WEDA listing on Google.');

  cachedPlaceId = hit.id;
  return cachedPlaceId;
}

export default async function handler(req, res) {
  const key = process.env.GOOGLE_MAPS_API_KEY;

  // Cache at the CDN edge so we are not hitting Google on every pageview.
  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS * 4}`
  );

  if (!key) {
    // Not configured yet. Say so honestly — the front end then shows the
    // "rating unavailable" state and links to Google. It never invents data.
    return res.status(200).json({
      configured: false,
      reason: 'GOOGLE_MAPS_API_KEY is not set on this deployment.',
      reviews: [],
    });
  }

  try {
    const placeId = await resolvePlaceId(key);
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
