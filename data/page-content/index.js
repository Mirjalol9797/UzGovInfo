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
const agenciesMadaniymeros = () =>
  import("./agencies/agencies-madaniymeros.js");
const agenciesEmdra = () =>
  import("./agencies/agencies-emdra.js");
const agenciesStandart = () =>
  import("./agencies/agencies-standart.js");
const agenciesMigration = () =>
  import("./agencies/agencies-migration.js");
const agenciesUrmon = () =>
  import("./agencies/agencies-urmon.js");
const agenciesDefindustry = () =>
  import("./agencies/agencies-defindustry.js");
const agenciesIma = () => import("./agencies/agencies-ima.js");
const agenciesKarantin = () =>
  import("./agencies/agencies-karantin.js");
const agenciesHydromet = () =>
  import("./agencies/agencies-hydromet.js");
const agenciesUzcaa = () => import("./agencies/agencies-uzcaa.js");
const agenciesInvestmiit = () =>
  import("./agencies/agencies-investmiit.js");
const agenciesUzbmb = () => import("./agencies/agencies-uzbmb.js");
const agenciesKadastr = () => import("./agencies/agencies-kadastr.js");
const agenciesAgrosanoat = () =>
  import("./agencies/agencies-agrosanoat.js");
const agenciesInnovation = () =>
  import("./agencies/agencies-innovation.js");
const agenciesSanitation = () =>
  import("./agencies/agencies-sanitation.js");
const agenciesPersonalization = () =>
  import("./agencies/agencies-personalization.js");
const agenciesSuvobekt = () =>
  import("./agencies/agencies-suvobekt.js");
const agenciesEsma = () => import("./agencies/agencies-esma.js");
const agenciesAdli = () => import("./agencies/agencies-adli.js");
const agenciesKasbiytalim = () =>
  import("./agencies/agencies-kasbiytalim.js");

const ministriesInvestmentTrade = () =>
  import("./ministries/ministries-investment-trade.js");
const ministriesEconomyFinance = () =>
  import("./ministries/ministries-economy-finance.js");

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
  "agencies-madaniymeros": agenciesMadaniymeros,
  "agencies-emdra": agenciesEmdra,
  "agencies-standart": agenciesStandart,
  "agencies-migration": agenciesMigration,
  "agencies-urmon": agenciesUrmon,
  "agencies-defindustry": agenciesDefindustry,
  "agencies-ima": agenciesIma,
  "agencies-karantin": agenciesKarantin,
  "agencies-hydromet": agenciesHydromet,
  "agencies-uzcaa": agenciesUzcaa,
  "agencies-investmiit": agenciesInvestmiit,
  "agencies-uzbmb": agenciesUzbmb,
  "agencies-kadastr": agenciesKadastr,
  "agencies-agrosanoat": agenciesAgrosanoat,
  "agencies-innovation": agenciesInnovation,
  "agencies-sanitation": agenciesSanitation,
  "agencies-personalization": agenciesPersonalization,
  "agencies-suvobekt": agenciesSuvobekt,
  "agencies-esma": agenciesEsma,
  "agencies-adli": agenciesAdli,
  "agencies-kasbiytalim": agenciesKasbiytalim,
  "ministries-investment-trade": ministriesInvestmentTrade,
  "ministries-economy-finance": ministriesEconomyFinance,
};

export async function getPageContent(slug) {
  const loader = pageContentMap[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
