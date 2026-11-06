import type { APIRoute } from "astro";
import sharp from "sharp";
import { resolve } from "node:path";
import { ogPng, pngResponse } from "@/lib/og";

export const GET: APIRoute = async () => {
  const src = resolve("src/assets/avatar.jpg"); // build runs from the project root
  const face = await sharp(src).resize(600, 600).jpeg({ quality: 85 }).toBuffer();
  return pngResponse(
    await ogPng({
      kicker: "AI Product Engineer · Seattle",
      title: "I build AI features end to end, and make sure the AI is actually right.",
      photo: `data:image/jpeg;base64,${face.toString("base64")}`,
    }),
  );
};
