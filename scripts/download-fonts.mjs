import { mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const families = [
  {
    family: "Sora",
    weights: "600;700",
    filePrefix: "sora",
  },
  {
    family: "Inter",
    weights: "400;500;600;700",
    filePrefix: "inter",
  },
];

const outputDir = new URL("../public/fonts/", import.meta.url);
const localCssBlocks = [];
const supportedUnicodeRanges = ["U+0000-00FF", "U+0100-02BA"];

await rm(outputDir, { force: true, recursive: true });
await mkdir(outputDir, { recursive: true });

for (const font of families) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    font.family,
  )}:wght@${font.weights}&display=swap&subset=latin,latin-ext`;

  const cssResponse = await fetch(cssUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 AppleWebKit/537.36 Chrome/120 Safari/537.36",
    },
  });

  if (!cssResponse.ok) {
    throw new Error(`Could not fetch Google Fonts CSS for ${font.family}`);
  }

  const css = await cssResponse.text();
  const fontFaceBlocks = css.match(/@font-face\s*{[^}]+}/g) ?? [];

  for (let index = 0; index < fontFaceBlocks.length; index += 1) {
    const block = fontFaceBlocks[index];
    const unicodeRange = block.match(/unicode-range:\s*([^;]+)/)?.[1] ?? "";

    if (!supportedUnicodeRanges.some((range) => unicodeRange.includes(range))) {
      continue;
    }

    const sourceUrl = block.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/)?.[1];
    const weight = block.match(/font-weight:\s*(\d+)/)?.[1] ?? String(index);

    if (!sourceUrl) {
      continue;
    }

    const filename = `${font.filePrefix}-${weight}-${index}.woff2`;
    const fontResponse = await fetch(sourceUrl);

    if (!fontResponse.ok) {
      throw new Error(`Could not fetch font file ${sourceUrl}`);
    }

    await writeFile(
      join(outputDir.pathname, filename),
      Buffer.from(await fontResponse.arrayBuffer()),
    );

    localCssBlocks.push(
      block.replace(
        /url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/,
        `url("/fonts/${filename}")`,
      ).replace(/\s+/g, " "),
    );
  }
}

await writeFile(
  join(outputDir.pathname, "fonts.css"),
  `${localCssBlocks.join("\n\n")}\n`,
);
