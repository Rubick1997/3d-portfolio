import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import satori from "satori";
import sharp from "sharp";

const require = createRequire(import.meta.url);
const font = (pkg: string, file: string) => readFile(require.resolve(`${pkg}/files/${file}`));

let fonts: Promise<{ name: string; data: Buffer; weight: 400 | 600; style: "normal" }[]> | undefined;
const loadFonts = () =>
  (fonts ??= Promise.all([
    font("@fontsource/ibm-plex-sans", "ibm-plex-sans-latin-400-normal.woff").then((data) => ({ name: "Plex", data, weight: 400 as const, style: "normal" as const })),
    font("@fontsource/ibm-plex-sans", "ibm-plex-sans-latin-600-normal.woff").then((data) => ({ name: "Plex", data, weight: 600 as const, style: "normal" as const })),
    font("@fontsource/ibm-plex-mono", "ibm-plex-mono-latin-400-normal.woff").then((data) => ({ name: "PlexMono", data, weight: 400 as const, style: "normal" as const })),
  ]));

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra: Record<string, unknown> = {}): Node => ({
  type,
  props: { style, children, ...extra },
});

// 1200×630 PNG in the site's dark tokens. Flexbox only (Satori).
export async function ogPng({ kicker, title, photo }: { kicker: string; title: string; photo?: string }) {
  const width = photo ? 1056 - 300 - 64 : 1056;
  const size = photo ? 48 : title.length > 60 ? 54 : 64;
  const text = h("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", width, height: 486 }, [
    h("div", { display: "flex", fontFamily: "PlexMono", fontSize: 24, letterSpacing: 3, textTransform: "uppercase", color: "#f0905f" }, kicker),
    h("div", { display: "flex", fontSize: size, fontWeight: 600, lineHeight: 1.12 }, title),
    h("div", { display: "flex", justifyContent: "space-between", fontSize: 26, color: "#a3acb8" }, [
      h("span", {}, "Rustam Kolumbayev"),
      h("span", { fontFamily: "PlexMono" }, "kolumstack.best"),
    ]),
  ]);
  const children: unknown[] = [text];
  if (photo) {
    children.unshift(
      h("img", { width: 300, height: 300, borderRadius: 9999, objectFit: "cover", marginRight: 64, alignSelf: "center" }, undefined, {
        src: photo,
        width: 300,
        height: 300,
      }),
    );
  }
  const svg = await satori(
    h("div", { width: "100%", height: "100%", display: "flex", padding: 72, background: "#0e1116", color: "#e7e9ec", fontFamily: "Plex" }, children) as never,
    { width: 1200, height: 630, fonts: await loadFonts() },
  );
  return sharp(Buffer.from(svg)).png().toBuffer();
}

export const pngResponse = (buf: Buffer) => new Response(new Uint8Array(buf), { headers: { "Content-Type": "image/png" } });
