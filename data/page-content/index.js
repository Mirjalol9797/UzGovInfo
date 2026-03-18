/**
 * Сопоставление slug → модуль контента страницы.
 * Добавляйте новые страницы по мере наполнения.
 */
const headquartersPresident = () =>
  import("./headquarters/headquarters-president.js");
const headquartersParliament = () =>
  import("./headquarters/headquarters-parliament.js");
const headquartersSenate = () =>
  import("./headquarters/headquarters-senate.js");
const headquartersGovernment = () =>
  import("./headquarters/headquarters-government.js");
const headquartersConstitutionalCourt = () =>
  import("./headquarters/headquarters-constitutional-court.js");

export const pageContentMap = {
  "headquarters-president": headquartersPresident,
  "headquarters-parliament": headquartersParliament,
  "headquarters-senate": headquartersSenate,
  "headquarters-government": headquartersGovernment,
  "headquarters-constitutional-court": headquartersConstitutionalCourt,
};

export async function getPageContent(slug) {
  const loader = pageContentMap[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
