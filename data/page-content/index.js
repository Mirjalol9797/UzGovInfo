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

const agenciesUzarxiv = () =>
  import("./agencies/agencies-uzarxiv.js");
const agenciesCinematography = () =>
  import("./agencies/agencies-cinematography.js");
const agenciesPharmaceutical = () =>
  import("./agencies/agencies-pharmaceutical.js");
const agenciesStateAssets = () =>
  import("./agencies/agencies-state-assets.js");
const agenciesYouthAffairs = () =>
  import("./agencies/agencies-youth-affairs.js");
const agenciesUzbekcosmos = () =>
  import("./agencies/agencies-uzbekcosmos.js");
const agenciesAntidoping = () =>
  import("./agencies/agencies-antidoping.js");
const agenciesUzatom = () =>
  import("./agencies/agencies-uzatom.js");

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
  "agencies-uzarxiv": agenciesUzarxiv,
  "agencies-cinematography": agenciesCinematography,
  "agencies-pharmaceutical": agenciesPharmaceutical,
  "agencies-state-assets": agenciesStateAssets,
  "agencies-youth-affairs": agenciesYouthAffairs,
  "agencies-uzbekcosmos": agenciesUzbekcosmos,
  "agencies-antidoping": agenciesAntidoping,
  "agencies-uzatom": agenciesUzatom,
};

export async function getPageContent(slug) {
  const loader = pageContentMap[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
