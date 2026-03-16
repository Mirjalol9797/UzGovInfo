<script setup>
const { locale } = useI18n();

const content = {
  ru: {
    title: "Каталог официальных сайтов государственных органов Узбекистана",
    lead: "UzGovInfo — информационный каталог официальных сайтов государственных органов Республики Узбекистан.",
    p1: "На платформе собраны ссылки на ключевые министерства, агентства, комитеты, инспекции и другие государственные учреждения.",
    p2: "Цель проекта — помочь пользователям быстро находить проверенные государственные ресурсы и получать достоверную информацию из первоисточников.",
    p3: "Каталог регулярно обновляется, чтобы вы всегда могли перейти на актуальные официальные сайты и воспользоваться нужными онлайн-сервисами.",
    badge: "Официальные источники",
  },
  en: {
    title: "Directory of Official Government Websites of Uzbekistan",
    lead: "UzGovInfo is an informational directory of official websites of the Republic of Uzbekistan’s government bodies.",
    p1: "The platform gathers links to key ministries, agencies, committees, inspections, and other public institutions.",
    p2: "The project helps users quickly find verified government resources and access reliable information from primary sources.",
    p3: "The directory is updated regularly so you can always reach current official websites and use relevant online services.",
    badge: "Official sources",
  },
  uz: {
    title: "O‘zbekiston davlat organlarining rasmiy saytlar katalogi",
    lead: "UzGovInfo — O‘zbekiston Respublikasi davlat organlarining rasmiy saytlariga havolalar jamlangan axborot katalogi.",
    p1: "Platformada vazirliklar, agentliklar, qo‘mitalar, inspeksiyalar va boshqa davlat muassasalarining asosiy manbalari to‘plangan.",
    p2: "Loyihaning maqsadi — foydalanuvchilarga ishonchli davlat resurslarini tez topish va birlamchi manbalardan to‘g‘ri ma’lumot olishga yordam berish.",
    p3: "Katalog muntazam yangilanadi, shuning uchun siz doimo dolzarb rasmiy saytlarga o‘tib, kerakli onlayn xizmatlardan foydalanishingiz mumkin.",
    badge: "Rasmiy manbalar",
  },
};

const current = computed(() => content[locale.value] || content.ru);
</script>

<template>
  <section class="site-description rounded-2xl p-8 768:p-6">
    <h1 class="mb-4 font-bold leading-tight text-3xl 768:text-xl">
      {{ current.title }}
    </h1>

    <div
      class="space-y-3 text-sm leading-7 text-[#2F3A4A] text-base 768:text-sm"
    >
      <h2 class="font-medium text-[#111827] text-base 768:text-sm">
        {{ current.lead }}
      </h2>
      <p>{{ current.p1 }}</p>
      <p>{{ current.p2 }}</p>
      <p>{{ current.p3 }}</p>
    </div>
  </section>
</template>

<style scoped>
.site-description {
  background: linear-gradient(135deg, #f8fbff 0%, #eef4ff 100%);
  border: 1px solid #dbe6ff;
}
</style>
