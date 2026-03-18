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
const headquartersSupremeCourt = () =>
  import("./headquarters/headquarters-supreme-court.js");
const headquartersProsecutor = () =>
  import("./headquarters/headquarters-prosecutor.js");
const headquartersElectionCommission = () =>
  import("./headquarters/headquarters-election-commission.js");
const headquartersCentralBank = () =>
  import("./headquarters/headquarters-central-bank.js");
const headquartersAccountsChamber = () =>
  import("./headquarters/headquarters-accounts-chamber.js");

export const pageContentMap = {
  "headquarters-president": headquartersPresident,
  "headquarters-parliament": headquartersParliament,
  "headquarters-senate": headquartersSenate,
  "headquarters-government": headquartersGovernment,
  "headquarters-constitutional-court": headquartersConstitutionalCourt,
  "headquarters-supreme-court": headquartersSupremeCourt,
  "headquarters-prosecutor": headquartersProsecutor,
  "headquarters-election-commission": headquartersElectionCommission,
  "headquarters-central-bank": headquartersCentralBank,
  "headquarters-accounts-chamber": headquartersAccountsChamber,
};

export async function getPageContent(slug) {
  const loader = pageContentMap[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
