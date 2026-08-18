import type { VercelRequest, VercelResponse } from "@vercel/node";
import { analytics } from "../src/data/profile";

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const slug = analytics.goatcounter;
  if (!slug) {
    return res.status(404).json({ error: "analytics disabled" });
  }

  try {
    const upstream = `https://${slug}.goatcounter.com/counter/TOTAL.json`;
    const response = await fetch(upstream, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      return res.status(502).json({ error: "upstream error" });
    }

    const data = await response.json();

    // Cache for 5 minutes so we don't hammer GoatCounter
    res.setHeader("Cache-Control", "public, s-maxage=300, max-age=300");
    return res.status(200).json(data);
  } catch (err) {
    return res.status(502).json({ error: "failed to fetch count" });
  }
}
