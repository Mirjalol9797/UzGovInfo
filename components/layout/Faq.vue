<script setup>
const { locale } = useI18n();

const faqData = {
  ru: {
    title: "Часто задаваемые вопросы",
    badge: "FAQ",
    items: [
      {
        q: "Является ли UzGovInfo официальным государственным сайтом?",
        a: "Нет. UzGovInfo — информационный каталог ссылок на официальные сайты государственных органов Республики Узбекистан.",
      },
      {
        q: "Можно ли получить государственные услуги через UzGovInfo?",
        a: "Нет. Платформа не оказывает государственные услуги. Для получения услуг перейдите на официальный сайт соответствующего органа.",
      },
      {
        q: "Откуда берутся ссылки на государственные сайты?",
        a: "Ссылки добавляются на основе официальных интернет-ресурсов государственных организаций Республики Узбекистан.",
      },
      {
        q: "Обновляется ли каталог организаций?",
        a: "Да. Каталог регулярно обновляется и дополняется новыми государственными учреждениями и официальными интернет-ресурсами.",
      },
      {
        q: "Можно ли добавить новую организацию в каталог?",
        a: "Да. Если вы нашли отсутствующий государственный сайт, сообщите об этом через страницу контактов.",
      },
      {
        q: "Бесплатно ли пользоваться каталогом UzGovInfo?",
        a: "Да. Использование каталога полностью бесплатно для всех пользователей.",
      },
    ],
  },
  en: {
    title: "Frequently Asked Questions",
    badge: "FAQ",
    items: [
      {
        q: "Is UzGovInfo an official government website?",
        a: "No. UzGovInfo is an informational directory with links to official websites of government bodies of the Republic of Uzbekistan.",
      },
      {
        q: "Can I get public services through UzGovInfo?",
        a: "No. The platform does not provide government services. To get services, please go to the official website of the relevant authority.",
      },
      {
        q: "Where do the government website links come from?",
        a: "Links are added based on official online resources of government institutions of the Republic of Uzbekistan.",
      },
      {
        q: "Is the organization directory updated?",
        a: "Yes. The directory is updated regularly and expanded with new institutions and official online resources.",
      },
      {
        q: "Can I suggest adding a new organization?",
        a: "Yes. If you notice a missing government website, please report it via the contacts page.",
      },
      {
        q: "Is UzGovInfo free to use?",
        a: "Yes. The directory is completely free for all users.",
      },
    ],
  },
  uz: {
    title: "Ko‘p so‘raladigan savollar",
    badge: "FAQ",
    items: [
      {
        q: "UzGovInfo rasmiy davlat sayti hisoblanadimi?",
        a: "Yo‘q. UzGovInfo — O‘zbekiston Respublikasi davlat organlarining rasmiy saytlariga havolalar jamlangan axborot katalogi.",
      },
      {
        q: "UzGovInfo orqali davlat xizmatlarini olish mumkinmi?",
        a: "Yo‘q. Platforma davlat xizmatlarini ko‘rsatmaydi. Xizmat olish uchun tegishli idoraning rasmiy saytiga o‘ting.",
      },
      {
        q: "Davlat saytlariga havolalar qayerdan olinadi?",
        a: "Havolalar O‘zbekiston Respublikasi davlat tashkilotlarining rasmiy internet manbalari asosida qo‘shiladi.",
      },
      {
        q: "Katalog muntazam yangilanadimi?",
        a: "Ha. Katalog muntazam yangilanadi va yangi davlat muassasalari hamda rasmiy internet-resurslar bilan to‘ldiriladi.",
      },
      {
        q: "Katalogga yangi tashkilot qo‘shish mumkinmi?",
        a: "Ha. Agar katalogda yo‘q davlat saytini topsangiz, kontaktlar sahifasi orqali xabar berishingiz mumkin.",
      },
      {
        q: "UzGovInfo’dan foydalanish bepulmi?",
        a: "Ha. Katalogdan foydalanish barcha foydalanuvchilar uchun mutlaqo bepul.",
      },
    ],
  },
};

const current = computed(() => faqData[locale.value] || faqData.ru);
</script>

<template>
  <section>
    <div class="site-container">
      <div class="faq-block rounded-2xl p-8 768:p-6">
        <div
          class="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
        >
          {{ current.badge }}
        </div>

        <h2 class="mb-5 font-bold text-2xl 768:text-xl">
          {{ current.title }}
        </h2>

        <div class="space-y-3">
          <details
            v-for="(item, index) in current.items"
            :key="index"
            class="faq-item rounded-xl border border-[#dbe6ff] bg-white/80 p-4"
          >
            <summary
              class="cursor-pointer list-none pr-6 text-sm font-semibold text-[#111827] text-base 768:text-sm"
            >
              {{ item.q }}
            </summary>
            <p
              class="mt-2 text-sm leading-7 text-[#2F3A4A] text-base 768:text-sm"
            >
              {{ item.a }}
            </p>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-block {
  background: linear-gradient(135deg, #f8fbff 0%, #eef4ff 100%);
  border: 1px solid #dbe6ff;
  box-shadow: 0 10px 30px rgba(49, 94, 251, 0.08);
}

.faq-item summary::-webkit-details-marker {
  display: none;
}
</style>
