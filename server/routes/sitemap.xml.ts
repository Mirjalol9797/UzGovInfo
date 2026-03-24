import { defineEventHandler, setHeader } from "h3";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const BASE_URL = "https://govinfo.uz";
const SUPPORTED_LOCALES = ["ru", "en", "uz"] as const;

const localePrefixMap: Record<(typeof SUPPORTED_LOCALES)[number], string> = {
  ru: "",
  en: "/en",
  uz: "/uz",
};

const staticRoutes = ["/", "/about", "/contacts", "/privacy", "/terms", "/organizations"];

function buildLocalizedPath(routePath: string, locale: (typeof SUPPORTED_LOCALES)[number]) {
  const prefix = localePrefixMap[locale];
  return routePath === "/" ? `${prefix || "/"}` : `${prefix}${routePath}`;
}

function extractSlugs(content: string) {
  const pattern = /slug:\s*"([^"]+)"/g;
  const slugs: string[] = [];
  let match = pattern.exec(content);
  while (match) {
    slugs.push(match[1]);
    match = pattern.exec(content);
  }
  return Array.from(new Set(slugs));
}

async function collectDynamicRoutes() {
  const sources = [
    { file: "headquarters.js", prefix: "/headquarters" },
    { file: "ministries.js", prefix: "/ministries" },
    { file: "state.js", prefix: "/state" },
    { file: "agencies.js", prefix: "/agencies" },
    { file: "inspections.js", prefix: "/inspections" },
  ];

  const grouped = await Promise.all(
    sources.map(async ({ file, prefix }) => {
      const content = await readFile(join(process.cwd(), "data", file), "utf-8");
      return extractSlugs(content).map((slug) => `${prefix}/${slug}`);
    }),
  );

  return Array.from(new Set(grouped.flat()));
}

export default defineEventHandler(async (event) => {
  const dynamicRoutes = await collectDynamicRoutes();
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const urls = allRoutes.flatMap((routePath) =>
    SUPPORTED_LOCALES.map((locale) => {
      const locPath = buildLocalizedPath(routePath, locale);
      return `${BASE_URL}${locPath}`;
    }),
  );

  const urlBlocks = urls.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`);

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urlBlocks,
    "</urlset>",
  ].join("\n");

  setHeader(event, "content-type", "application/xml; charset=utf-8");
  return sitemap;
});
