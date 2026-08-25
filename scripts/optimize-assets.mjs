import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const outputDir = new URL("../public/images/optimized/", import.meta.url);

await mkdir(outputDir, { recursive: true });

const imageJobs = [
  {
    source: new URL("../public/images/headerImg.png", import.meta.url),
    basename: "header-1280",
    width: 1280,
    withoutEnlargement: true,
    variants: [
      { format: "avif", options: { quality: 55, effort: 6 } },
      { format: "webp", options: { quality: 76, effort: 6 } },
      { format: "jpeg", extension: "jpg", options: { quality: 78, mozjpeg: true } },
    ],
  },
  {
    source: new URL("../public/images/IngMarcMirnigg.png", import.meta.url),
    basename: "mark-320",
    width: 320,
    withoutEnlargement: true,
    variants: [
      { format: "avif", options: { quality: 60, effort: 6 } },
      { format: "webp", options: { quality: 78, effort: 6 } },
      { format: "png", options: { compressionLevel: 9, palette: true } },
    ],
  },
];

for (const job of imageJobs) {
  for (const variant of job.variants) {
    const extension = variant.extension ?? variant.format;
    const output = fileURLToPath(new URL(`${job.basename}.${extension}`, outputDir));

    await sharp(fileURLToPath(job.source))
      .resize({
        width: job.width,
        withoutEnlargement: job.withoutEnlargement,
      })
      .toFormat(variant.format, variant.options)
      .toFile(output);
  }
}
