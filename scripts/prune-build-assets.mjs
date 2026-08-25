import { readdir, rm } from "node:fs/promises";

const sourceOnlyImages = [
  "../dist/images/headerImg.png",
  "../dist/images/IngMarcMirnigg.png",
  "../dist/images/mark-alpha-uncropped.png",
  "../dist/images/mark-original-rgb.png",
];

await Promise.all(
  sourceOnlyImages.map((path) =>
    rm(new URL(path, import.meta.url), { force: true }),
  ),
);

async function removeFinderFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const path = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);

      if (entry.isDirectory()) {
        await removeFinderFiles(path);
        return;
      }

      if (entry.name === ".DS_Store") {
        await rm(path, { force: true });
      }
    }),
  );
}

await removeFinderFiles(new URL("../dist/", import.meta.url));
