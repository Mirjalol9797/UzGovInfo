import { defineEventHandler, setHeader } from "h3";

import useHeadquarters from "../../data/headquarters";
import useInspections from "../../data/inspections";
import useMinistries from "../../data/ministries";
import useState from "../../data/state";

const BASE_URL = "https://govinfo.uz";
const SUPPORTED_LOCALES = ["ru", "en", "uz"] as const;

const localePrefixMap: Record<(typeof SUPPORTED_LOCALES)[number], string> = {
  ru: "",
  en: "/en",
  uz: "/uz",
};

const staticRoutes = ["/", "/about", "/contacts", "/privacy", "/terms"];

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildLocalizedPath(routePath: string, locale: (typeof SUPPORTED_LOCALES)[number]) {
  const prefix = localePrefixMap[locale];
  return routePath === "/" ? `${prefix || "/"}` : `${prefix}${routePath}`;
}

function collectDynamicRoutes() {
  const headquartersRoutes = useHeadquarters().data.map(
    (item: { slug: string }) => `/headquarters/${item.slug}`,
  );
  const ministriesRoutes = useMinistries().data.map(
    (item: { slug: string }) => `/ministries/${item.slug}`,
  );
  const stateRoutes = useState().data.map((item: { slug: string }) => `/state/${item.slug}`);
  const inspectionsRoutes = useInspections().data.map(
    (item: { slug: string }) => `/inspections/${item.slug}`,
  );

  return Array.from(
    new Set([
      ...headquartersRoutes,
      ...ministriesRoutes,
      ...stateRoutes,
      ...inspectionsRoutes,
    ]),
  );
}

export default defineEventHandler((event) => {
  const allRoutes = [...staticRoutes, ...collectDynamicRoutes()];
  const lastmod = new Date().toISOString().split("T")[0];

  const urlBlocks = allRoutes.flatMap((routePath) => {
    return SUPPORTED_LOCALES.map((locale) => {
      const locPath = buildLocalizedPath(routePath, locale);
      const loc = `${BASE_URL}${locPath}`;

      const alternateLinks = SUPPORTED_LOCALES.map((altLocale) => {
        const href = `${BASE_URL}${buildLocalizedPath(routePath, altLocale)}`;
        return `<xhtml:link rel="alternate" hreflang="${altLocale}" href="${escapeXml(href)}" />`;
      }).join("");

      const xDefault = `${BASE_URL}${buildLocalizedPath(routePath, "ru")}`;

      return [
        "<url>",
        `<loc>${escapeXml(loc)}</loc>`,
        `<lastmod>${lastmod}</lastmod>`,
        alternateLinks,
        `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(xDefault)}" />`,
        "</url>",
      ].join("");
    });
  });

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urlBlocks,
    "</urlset>",
  ].join("");

  setHeader(event, "content-type", "application/xml; charset=utf-8");
  return sitemap;
});
