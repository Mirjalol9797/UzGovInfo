<script setup>
const { locale } = useI18n();

const content = {
  ru: {
    title: "Зачем создан UzGovInfo",
    lead: "UzGovInfo создан, чтобы упростить поиск официальных сайтов государственных органов Республики Узбекистан.",
    p1: "В интернете много государственных ресурсов, и пользователям не всегда удобно быстро найти нужный официальный сайт.",
    p2: "Каталог объединяет ссылки на ключевые учреждения, министерства, агентства, комитеты и инспекции в одном месте.",
    p3: "Это помогает быстро перейти на сайт нужной организации и получить достоверную информацию из первоисточников.",
    note: "UzGovInfo не является официальным государственным порталом, а представляет собой информационный каталог ссылок на официальные интернет-ресурсы.",
    badge: "Миссия проекта",
  },
  en: {
    title: "Why UzGovInfo was created",
    lead: "UzGovInfo was created to simplify access to official websites of government bodies of the Republic of Uzbekistan.",
    p1: "There are many public resources online, and it is not always easy for users to quickly find the right official website.",
    p2: "The directory brings links to key institutions, ministries, agencies, committees, and inspections together in one place.",
    p3: "This helps users quickly navigate to the required organization and get reliable information from primary sources.",
    note: "UzGovInfo is not an official government portal; it is an informational directory of links to official online resources.",
    badge: "Project mission",
  },
  uz: {
    title: "UzGovInfo nima uchun yaratilgan",
    lead: "UzGovInfo O‘zbekiston Respublikasi davlat organlarining rasmiy saytlarini topishni soddalashtirish uchun yaratilgan.",
    p1: "Internetda davlat resurslari ko‘p bo‘lgani sababli, foydalanuvchilar uchun kerakli rasmiy saytni tez topish har doim ham oson emas.",
    p2: "Katalog asosiy muassasalar, vazirliklar, agentliklar, qo‘mitalar va inspeksiyalar havolalarini bitta joyda jamlaydi.",
    p3: "Bu foydalanuvchiga kerakli tashkilot saytiga tez o‘tish va birlamchi manbalardan ishonchli ma’lumot olish imkonini beradi.",
    note: "UzGovInfo rasmiy davlat portali emas; u rasmiy internet-resurslarga havolalar jamlangan axborot katalogidir.",
    badge: "Loyiha missiyasi",
  },
};

const current = computed(() => content[locale.value] || content.ru);
</script>

<template>
  <section class="why-site-created rounded-2xl p-6 md:p-8">
    <div
      class="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
    >
      {{ current.badge }}
    </div>

    <h2 class="mb-3 text-xl font-bold md:text-2xl">
      {{ current.title }}
    </h2>

    <div class="space-y-3 text-sm leading-7 text-[#2F3A4A] md:text-base">
      <p class="font-medium text-[#111827]">
        {{ current.lead }}
      </p>
      <p>{{ current.p1 }}</p>
      <p>{{ current.p2 }}</p>
      <p>{{ current.p3 }}</p>
      <p
        class="rounded-xl border border-[#dbe6ff] bg-white/70 p-3 font-medium text-[#111827]"
      >
        {{ current.note }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.why-site-created {
  background: linear-gradient(135deg, #f8fbff 0%, #eef4ff 100%);
  border: 1px solid #dbe6ff;
}
</style>
