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

const agenciesUzarxiv = () => import("./agencies/agencies-uzarxiv.js");
const agenciesCinematography = () =>
  import("./agencies/agencies-cinematography.js");
const agenciesPharmaceutical = () =>
  import("./agencies/agencies-pharmaceutical.js");
const agenciesStateAssets = () => import("./agencies/agencies-state-assets.js");
const agenciesYouthAffairs = () =>
  import("./agencies/agencies-youth-affairs.js");
const agenciesUzbekcosmos = () => import("./agencies/agencies-uzbekcosmos.js");
const agenciesAntidoping = () => import("./agencies/agencies-antidoping.js");
const agenciesUzatom = () => import("./agencies/agencies-uzatom.js");
const agenciesMadaniymeros = () =>
  import("./agencies/agencies-madaniymeros.js");
const agenciesEmdra = () => import("./agencies/agencies-emdra.js");
const agenciesStandart = () => import("./agencies/agencies-standart.js");
const agenciesMigration = () => import("./agencies/agencies-migration.js");
const agenciesUrmon = () => import("./agencies/agencies-urmon.js");
const agenciesDefindustry = () => import("./agencies/agencies-defindustry.js");
const agenciesIma = () => import("./agencies/agencies-ima.js");
const agenciesKarantin = () => import("./agencies/agencies-karantin.js");
const agenciesHydromet = () => import("./agencies/agencies-hydromet.js");
const agenciesUzcaa = () => import("./agencies/agencies-uzcaa.js");
const agenciesInvestmiit = () => import("./agencies/agencies-investmiit.js");
const agenciesUzbmb = () => import("./agencies/agencies-uzbmb.js");
const agenciesKadastr = () => import("./agencies/agencies-kadastr.js");
const agenciesAgrosanoat = () => import("./agencies/agencies-agrosanoat.js");
const agenciesInnovation = () => import("./agencies/agencies-innovation.js");
const agenciesSanitation = () => import("./agencies/agencies-sanitation.js");
const agenciesPersonalization = () =>
  import("./agencies/agencies-personalization.js");
const agenciesSuvobekt = () => import("./agencies/agencies-suvobekt.js");
const agenciesEsma = () => import("./agencies/agencies-esma.js");
const agenciesAdli = () => import("./agencies/agencies-adli.js");
const agenciesKasbiytalim = () => import("./agencies/agencies-kasbiytalim.js");

const ministriesInvestmentTrade = () =>
  import("./ministries/ministries-investment-trade.js");
const ministriesEconomyFinance = () =>
  import("./ministries/ministries-economy-finance.js");
const ministriesMiningGeology = () =>
  import("./ministries/ministries-mining-geology.js");
const ministriesConstructionHousing = () =>
  import("./ministries/ministries-construction-housing.js");
const ministriesEmploymentPoverty = () =>
  import("./ministries/ministries-employment-poverty.js");
const ministriesAttestationCommission = () =>
  import("./ministries/ministries-attestation-commission.js");
const ministriesEducation = () =>
  import("./ministries/ministries-education.js");
const ministriesEcologyClimate = () =>
  import("./ministries/ministries-ecology-climate.js");
const ministriesSports = () => import("./ministries/ministries-sports.js");
const ministriesAgriculture = () =>
  import("./ministries/ministries-agriculture.js");
const ministriesWaterResources = () =>
  import("./ministries/ministries-water-resources.js");
const ministriesDigitalTech = () =>
  import("./ministries/ministries-digital-tech.js");
const ministriesJustice = () => import("./ministries/ministries-justice.js");
const ministriesTransport = () =>
  import("./ministries/ministries-transport.js");
const ministriesCulture = () => import("./ministries/ministries-culture.js");
const ministriesDefense = () => import("./ministries/ministries-defense.js");
const ministriesEnergy = () => import("./ministries/ministries-energy.js");
const ministriesHealth = () => import("./ministries/ministries-health.js");
const ministriesForeignAffairs = () =>
  import("./ministries/ministries-foreign-affairs.js");
const ministriesInternalAffairs = () =>
  import("./ministries/ministries-internal-affairs.js");
const ministriesFvv = () => import("./ministries/ministries-fvv.js");
const stateStatisticsAgency = () =>
  import("./state/state-statistics-agency.js");
const stateTaxCommittee = () => import("./state/state-tax-committee.js");
const stateCustomsCommittee = () =>
  import("./state/state-customs-committee.js");
const stateEcologyClimate = () =>
  import("./state/state-ecology-climate.js");
const stateMiningGeology = () =>
  import("./state/state-mining-geology.js");
const stateLandCadastre = () =>
  import("./state/state-land-cadastre.js");
const stateVeterinaryCommittee = () =>
  import("./state/state-veterinary-committee.js");

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
  "ministries-mining-geology": ministriesMiningGeology,
  "ministries-construction-housing": ministriesConstructionHousing,
  "ministries-employment-poverty": ministriesEmploymentPoverty,
  "ministries-attestation-commission": ministriesAttestationCommission,
  "ministries-education": ministriesEducation,
  "ministries-ecology-climate": ministriesEcologyClimate,
  "ministries-sports": ministriesSports,
  "ministries-agriculture": ministriesAgriculture,
  "ministries-water-resources": ministriesWaterResources,
  "ministries-digital-tech": ministriesDigitalTech,
  "ministries-justice": ministriesJustice,
  "ministries-transport": ministriesTransport,
  "ministries-culture": ministriesCulture,
  "ministries-defense": ministriesDefense,
  "ministries-energy": ministriesEnergy,
  "ministries-health": ministriesHealth,
  "ministries-foreign-affairs": ministriesForeignAffairs,
  "ministries-internal-affairs": ministriesInternalAffairs,
  "ministries-fvv": ministriesFvv,
  "state-statistics-agency": stateStatisticsAgency,
  "state-tax-committee": stateTaxCommittee,
  "state-customs-committee": stateCustomsCommittee,
  "state-ecology-climate": stateEcologyClimate,
  "state-mining-geology": stateMiningGeology,
  "state-land-cadastre": stateLandCadastre,
  "state-veterinary-committee": stateVeterinaryCommittee,
};

export async function getPageContent(slug) {
  const loader = pageContentMap[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
