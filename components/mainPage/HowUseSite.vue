<script setup>
const { locale } = useI18n();

const content = {
  ru: {
    title: "Как пользоваться каталогом",
    intro:
      "Каталог UzGovInfo помогает быстро находить официальные сайты государственных органов Республики Узбекистан.",
    steps: [
      "Выберите нужный раздел на главной странице: центральные органы, министерства, государственные комитеты/агентства или инспекции.",
      "Откройте карточку организации, чтобы перейти на страницу с кратким описанием и ссылкой на официальный сайт.",
      "Переходите по официальной ссылке и получайте актуальную информацию напрямую из первоисточника.",
    ],
    note: "Все ссылки в каталоге ведут на официальные интернет-ресурсы государственных организаций.",
    badge: "Пошагово",
  },
  en: {
    title: "How to use the directory",
    intro:
      "UzGovInfo helps you quickly find official websites of government bodies of the Republic of Uzbekistan.",
    steps: [
      "Choose a section on the main page: central institutions, ministries, state committees/agencies, or inspections.",
      "Open an organization card to view a short description and the link to its official website.",
      "Follow the official link to get up-to-date information directly from primary sources.",
    ],
    note: "All links in the directory lead to official online resources of government institutions.",
    badge: "Step by step",
  },
  uz: {
    title: "Katalogdan qanday foydalaniladi",
    intro:
      "UzGovInfo O‘zbekiston Respublikasi davlat organlarining rasmiy saytlarini tez topishga yordam beradi.",
    steps: [
      "Bosh sahifada kerakli bo‘limni tanlang: markaziy organlar, vazirliklar, davlat qo‘mitalari/agentliklari yoki inspeksiyalar.",
      "Tashkilot kartasini oching — unda qisqa tavsif va rasmiy sayt havolasi beriladi.",
      "Rasmiy havola orqali birlamchi manbadan dolzarb ma’lumotlarni oling.",
    ],
    note: "Katalogdagi barcha havolalar davlat tashkilotlarining rasmiy internet manbalariga olib boradi.",
    badge: "Bosqichma-bosqich",
  },
};

const current = computed(() => content[locale.value] || content.ru);
</script>

<template>
  <section class="how-use-site rounded-2xl p-6 md:p-8">
    <div
      class="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
    >
      {{ current.badge }}
    </div>

    <h2 class="mb-3 text-xl font-bold md:text-2xl">
      {{ current.title }}
    </h2>

    <p class="mb-4 text-sm leading-7 text-[#1F2937] md:text-base">
      {{ current.intro }}
    </p>

    <ol class="mb-4 space-y-2 text-sm leading-7 text-[#2F3A4A] md:text-base">
      <li
        v-for="(step, index) in current.steps"
        :key="index"
        class="flex gap-3"
      >
        <span
          class="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#315EFB] text-xs font-semibold text-white"
        >
          {{ index + 1 }}
        </span>
        <span>{{ step }}</span>
      </li>
    </ol>

    <p class="text-sm font-medium leading-6 text-[#111827] md:text-base">
      {{ current.note }}
    </p>
  </section>
</template>

<style scoped>
.how-use-site {
  background: linear-gradient(135deg, #f8fbff 0%, #eef4ff 100%);
  border: 1px solid #dbe6ff;
}
</style>
