<script setup>
import useHeadquarters from "./data/headquarters";
import useInspections from "./data/inspections";
import useHokimiyats from "./data/hokimiyats";
import useMinistries from "./data/ministries";
import useState from "./data/state";
import useFunds from "./data/funds";
import useCenters from "./data/centers";

const props = defineProps({
  error: Object,
});

const { t, locale } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const categories = [
  { key: "headquarters", data: useHeadquarters().data },
  { key: "ministries", data: useMinistries().data },
  { key: "state", data: useState().data },
  { key: "funds", data: useFunds().data },
  { key: "centers", data: useCenters().data },
  { key: "inspections", data: useInspections().data },
  { key: "hokimiyats", data: useHokimiyats().data },
];

const allOrganizations = computed(() =>
  categories.flatMap((cat) =>
    cat.data.map((item) => ({
      ...item,
      category: cat.key,
    }))
  )
);

function seededShuffle(arr, seed) {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const popularOrganizations = computed(() => {
  const seed =
    route.path.split("").reduce((a, b) => a + b.charCodeAt(0), 0) || 12345;
  return seededShuffle(allOrganizations.value, seed).slice(0, 8);
});

const content = computed(() => {
  const ru = {
    h1: "Страница не найдена",
    text1:
      "К сожалению, страница, которую вы пытаетесь открыть, не существует или была перемещена.",
    text2:
      "Вы можете воспользоваться поиском по сайту или перейти в каталог государственных организаций Республики Узбекистан.",
    popularTitle: "Популярные организации",
    categoriesTitle: "Все категории",
    btnHome: "На главную",
    btnAll: "Все организации",
  };
  const en = {
    h1: "Page not found",
    text1:
      "Unfortunately, the page you are trying to open does not exist or has been moved.",
    text2:
      "You can use the site search or go to the catalog of government organizations of the Republic of Uzbekistan.",
    popularTitle: "Popular organizations",
    categoriesTitle: "All categories",
    btnHome: "Home",
    btnAll: "All organizations",
  };
  const uz = {
    h1: "Sahifa topilmadi",
    text1:
      "Afsuski, siz ochmoqchi bo'lgan sahifa mavjud emas yoki boshqa joyga ko'chirilgan.",
    text2:
      "Sayt qidiruvidan foydalanishingiz yoki O'zbekiston Respublikasi davlat tashkilotlari katalogiga o'tishingiz mumkin.",
    popularTitle: "Mashhur tashkilotlar",
    categoriesTitle: "Barcha kategoriyalar",
    btnHome: "Bosh sahifa",
    btnAll: "Barcha tashkilotlar",
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const is404 = computed(() => props.error?.statusCode === 404);

const categoryLinks = computed(() => [
  { path: "/headquarters", titleKey: "Headquarters.headtitle" },
  { path: "/ministries", titleKey: "Ministries.headtitle" },
  { path: "/state", titleKey: "State.headtitle" },
  { path: "/inspections", titleKey: "Inspections.headtitle" },
  { path: "/funds", titleKey: "Funds.headtitle" },
  { path: "/centers", titleKey: "Centers.headtitle" },
  { path: "/hokimiyats", titleKey: "Khokimiyats.headtitle" },
]);
</script>

<template>
  <div>
    <LayoutHeader />
    <div class="content">
      <div class="site-container">
        <section v-if="is404">
          <div class="border-b border-[#eee] pb-2 mb-4 md:mb-6">
            <h1 class="font-medium text-xl md:text-2xl">
              {{ content.h1 }}
            </h1>
          </div>

          <div class="text-[#4B5563] leading-7 mb-6 space-y-4">
            <p>{{ content.text1 }}</p>
            <p>{{ content.text2 }}</p>
          </div>

          <h2 class="font-semibold text-lg mb-4">
            {{ content.popularTitle }}
          </h2>
          <div
            class="mb-8 grid grid-cols-5 gap-3 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
          >
            <nuxt-link
              v-for="(item, index) in popularOrganizations"
              :key="`${item.category}-${item.slug}-${index}`"
              :to="localePath(`/${item.category}/${item.slug}`)"
              class="link-block"
            >
              <div class="min-w-[64px] h-[64px]">
                <NuxtImg
                  :src="item.img"
                  :alt="t(item.title)"
                  :title="t(item.title)"
                  class="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                  format="webp"
                />
              </div>
              <h3 class="title">
                {{ t(item.title) }}
              </h3>
            </nuxt-link>
          </div>

          <div class="flex gap-3 576:flex-col">
            <NuxtLink
              :to="localePath('/')"
              class="site-btn bg-[#315EFB] text-white hover:opacity-90"
            >
              {{ content.btnHome }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/organizations')"
              class="site-btn bg-[#F3F4F9] text-[#1C335F] hover:bg-[#e5e7eb] text-center"
            >
              {{ content.btnAll }}
            </NuxtLink>
          </div>

          <div class="mt-8 pt-6 border-t border-[#eee]">
            <h2 class="font-semibold text-lg mb-4">
              {{ content.categoriesTitle }}
            </h2>
            <div class="flex gap-3 576:flex-col">
              <NuxtLink
                v-for="cat in categoryLinks"
                :key="cat.path"
                :to="localePath(cat.path)"
                class="site-btn bg-[#F3F4F9] text-[#1C335F] hover:bg-[#e5e7eb] text-center"
              >
                {{ t(cat.titleKey) }}
              </NuxtLink>
            </div>
          </div>
        </section>

        <section v-else class="py-10">
          <h1 class="text-xl font-medium mb-4">{{ content.h1 }}</h1>
          <p class="text-[#4B5563] mb-6">{{ content.text1 }}</p>
          <NuxtLink
            :to="localePath('/')"
            class="site-btn bg-[#315EFB] text-white inline-block"
          >
            {{ content.btnHome }}
          </NuxtLink>
        </section>
      </div>
      <Faq class="mt-8" />
    </div>
    <LayoutFooter />
  </div>
</template>

<style scoped>
.content {
  flex: 1;
}
</style>
