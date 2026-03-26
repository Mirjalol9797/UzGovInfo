/**
 * Редиректы: старые длинные slug → новые короткие slug
 * Структура нового slug: категория-главное-из-заголовка-доп
 * Используется в server middleware для 301 редиректа
 */
export default {
  headquarters: {
    "official-web-site-of-the-president-of-uzbekistan":
      "headquarters-president",
    "legislative-chamber-of-the-oliy-majlis-of-the-republic-of-uzbekistan":
      "headquarters-parliament",
    "senate-of-the-oliy-majlis-of-the-republic-of-uzbekistan":
      "headquarters-senate",
    "government-of-the-republic-of-uzbekistan": "headquarters-government",
    "constitutional-court-of-the-republic-of-uzbekistan":
      "headquarters-constitutional-court",
    "supreme-court-of-the-republic-of-uzbekistan":
      "headquarters-supreme-court",
    "general-prosecutors-office-of-the-republic-of-uzbekistan":
      "headquarters-prosecutor",
    "central-election-commission": "headquarters-election-commission",
    "central-bank-of-the-republic-of-uzbekistan": "headquarters-central-bank",
    "accounts-chamber-of-the-republic-of-uzbekistan":
      "headquarters-accounts-chamber",
  },
  ministries: {
    "ministry-of-investment-industry-and-trade": "ministries-investment-trade",
    "ministry-of-economy-and-finance": "ministries-economy-finance",
    "ministry-of-mining-industry-and-geology-of-the-republic-of-uzbekistan":
      "ministries-mining-geology",
    "ministry-of-construction-and-housing-and-communal-services":
      "ministries-construction-housing",
    "ministry-of-employment-and-poverty-reduction":
      "ministries-employment-poverty",
    "supreme-attestation-commission-at-the-ministry-of-higher-education-science-and-innovations":
      "ministries-attestation-commission",
    "ministry-of-preschool-and-school-education": "ministries-education",
    "ministry-of-ecology-environmental-protection-and-climate-change":
      "ministries-ecology-climate",
    "ministry-of-sports-of-the-republic-of-uzbekistan": "ministries-sports",
    "ministry-of-agriculture-of-the-republic-of-uzbekistan":
      "ministries-agriculture",
    "ministry-of-water-resources-of-the-republic-of-uzbekistan":
      "ministries-water-resources",
    "ministry-of-digital-technologies": "ministries-digital-tech",
    "ministry-of-justice": "ministries-justice",
    "ministry-of-transport-of-the-republic-of-uzbekistan":
      "ministries-transport",
    "ministry-of-culture-of-the-republic-of-uzbekistan": "ministries-culture",
    "ministry-of-defense-of-the-republic-of-uzbekistan": "ministries-defense",
    "ministry-of-energy-of-the-republic-of-uzbekistan": "ministries-energy",
    "ministry-of-health-of-the-republic-of-uzbekistan": "ministries-health",
    "ministry-of-foreign-affairs-republic-of-uzbekistan":
      "ministries-foreign-affairs",
    "ministry-of-internal-affairs-of-the-republic-of-uzbekistan":
      "ministries-internal-affairs",
    "fvv-of-the-republic-of-uzbekistan": "ministries-fvv",
  },
  state: {
    "statistics-agency-under-the-president-of-the-republic-of-uzbekistan":
      "state-statistics-agency",
    "state-tax-committee-of-the-republic-of-uzbekistan": "state-tax-committee",
    "customs-committee-under-the-ministry-of-economy-and-finance-of-the-republic-of-uzbekistan":
      "state-customs-committee",
    "ministry-of-ecology-environmental-protection-and-climate-change-of-the-republic-of-uzbekistan":
      "state-ecology-climate",
    "ministry-of-mining-industry-and-geology-of-the-republic-of-uzbekistan":
      "state-mining-geology",
    "state-committee-of-the-republic-of-uzbekistan-on-land-resources-geodesy-cartography-and-state-cadastre":
      "state-land-cadastre",
    "state-veterinary-committee-of-the-republic-of-uzbekistan":
      "state-veterinary-committee",
    "state-committee-of-the-republic-of-uzbekistan-for-automobile-roads":
      "state-automobile-roads",
    "state-committee-of-the-republic-of-uzbekistan-for-tourism-development":
      "state-tourism",
  },
  inspections: {
    "state-inspectorate-for-control-over-use-of-drinking-water":
      "inspections-drinking-water",
    "inspections-water-control": "inspections-agro-industrial",
  },
};
