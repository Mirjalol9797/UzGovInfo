import { sendRedirect } from "h3";
import slugRedirects from "../utils/slug-redirects";

const CATEGORIES = ["headquarters", "ministries", "state", "inspections"];
const LOCALES = ["en", "uz"];

export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname;

  // Паттерн: /(en|uz)?/(headquarters|ministries|state|inspections)/old-slug
  const parts = path.split("/").filter(Boolean);

  let category: string | null = null;
  let slug: string | null = null;
  let localePrefix = "";

  if (parts.length === 2) {
    // /headquarters/old-slug или /category/slug
    [category, slug] = parts;
  } else if (parts.length === 3 && LOCALES.includes(parts[0])) {
    // /en/headquarters/old-slug
    [localePrefix, category, slug] = parts;
    localePrefix = `/${localePrefix}`;
  } else {
    return;
  }

  if (!CATEGORIES.includes(category) || !slug) return;

  const categoryRedirects = slugRedirects[category as keyof typeof slugRedirects];
  if (!categoryRedirects) return;

  const newSlug = categoryRedirects[slug as keyof typeof categoryRedirects];
  if (!newSlug) return;

  const newPath = `${localePrefix}/${category}/${newSlug}`;
  return sendRedirect(event, newPath, 301);
});
