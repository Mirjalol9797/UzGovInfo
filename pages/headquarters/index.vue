<script setup>
import useHeadquarters from "../../data/headquarters";
import CategorySeo from "../../components/Seo/CategorySeo.vue";

const { t, locale } = useI18n();
const headquarters = useHeadquarters();

const introText = computed(() => {
  const ru = [
    "Высшие государственные органы Узбекистана образуют основу системы государственного управления страны, определяют её политическую, правовую и административную структуру, отвечают за разработку и реализацию государственной политики, а также за контроль за соблюдением законов и конституционного порядка.",
    "Система государственной власти Узбекистана построена на принципе разделения властей — законодательной, исполнительной и судебной, которые взаимодействуют для обеспечения эффективного управления и политической стабильности.",
    "К ключевым государственным органам относятся Президент, Олий Мажлис (парламент), Кабинет Министров, высшие судебные органы и органы государственного контроля. Они принимают важнейшие решения, регулируют социально-экономическое развитие, контролируют исполнение законов и защищают права граждан.",
    "На данной странице представлен список основных государственных органов Республики Узбекистан. Здесь вы можете найти ссылки на официальные сайты государственных учреждений, ознакомиться с их функциями и получить доступ к официальной информации о деятельности органов власти.",
  ];
  const en = [
    "The supreme state bodies of Uzbekistan form the foundation of the country's system of public administration, define its political, legal and administrative structure, and are responsible for developing and implementing state policy, as well as monitoring compliance with laws and constitutional order.",
    "The system of state power in Uzbekistan is built on the principle of separation of powers — legislative, executive and judicial — which interact to ensure effective governance and political stability.",
    "Key state bodies include the President, the Oliy Majlis (parliament), the Cabinet of Ministers, higher judicial bodies and state control bodies. They make crucial decisions, regulate socio-economic development, monitor compliance with laws and protect the rights of citizens.",
    "This page presents a list of the main state bodies of the Republic of Uzbekistan. Here you can find links to the official websites of state institutions, learn about their functions and gain access to official information on the activities of government bodies.",
  ];
  const uz = [
    "Oʻzbekistonning oliy davlat organlari mamlakat davlat boshqaruvi tizimining asosini tashkil etadi, uning siyosiy, huquqiy va maʼmuriy tuzilishini belgilaydi, davlat siyosatini ishlab chiqish va amalga oshirish, shuningdek qonunlar va konstitutsiyaviy tartibga rioya qilishni nazorat qilish uchun javobgardir.",
    "Oʻzbekistonda davlat hokimiyati tizimi qonun chiqaruvchi, ijrochi va sud hokimiyatlarini ajratish tamoyiliga asoslangan boʻlib, ular samarali boshqaruv va siyosiy barqarorlikni taʼminlash uchun oʻzaro hamkorlik qiladi.",
    "Asosiy davlat organlariga Prezident, Oliy Majlis (parlament), Vazirlar Mahkamasi, oliy sud organlari va davlat nazorat organlari kiradi. Ular muhim qarorlar qabul qiladi, ijtimoiy-iqtisodiy rivojlanishni tartibga soladi, qonunlar bajarilishini nazorat qiladi va fuqarolar huquqlarini himoya qiladi.",
    "Ushbu sahifada Oʻzbekiston Respublikasining asosiy davlat organlari roʻyxati keltirilgan. Bu yerda davlat muassasalarining rasmiy saytlariga havolalar topishingiz, ularning vazifalari bilan tanishishingiz va davlat organlari faoliyati haqidagi rasmiy maʼlumotlarga kirish imkoniyatiga ega boʻlishingiz mumkin.",
  ];
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const structurePowerText = computed(() => {
  const ru = {
    h2: "Структура государственной власти Республики Узбекистан",
    paragraphs: [
      "Государственная власть Узбекистана организована в соответствии с Конституцией и основана на принципе разделения властей, распределяя полномочия между различными государственными институтами для обеспечения эффективного управления и предотвращения концентрации власти.",
      "Президент Республики Узбекистан является главой государства, определяет основные направления внутренней и внешней политики, представляет государство на международной арене, обеспечивает взаимодействие ветвей власти и выступает гарантом Конституции и прав граждан.",
      "Законодательная власть осуществляется Олий Мажлисом (парламентом) Республики Узбекистан, состоящим из двух палат — Законодательной палаты и Сената. К основным задачам парламента относятся разработка и принятие законов, регулирование важнейших сфер общественной жизни, утверждение государственного бюджета и контроль за деятельностью исполнительной власти.",
      "Исполнительная власть представлена Кабинетом Министров Республики Узбекистан. Правительство обеспечивает реализацию государственной политики, координирует деятельность министерств, государственных комитетов и агентств, отвечает за развитие экономики, социальной сферы и инфраструктуры страны.",
      "Судебная власть играет важную роль в обеспечении законности и правосудия. Судебная система включает Верховный суд и Конституционный суд, которые защищают права граждан и обеспечивают соответствие законов Конституции. Независимость судебной власти является ключевым элементом правового государства.",
      "К другим органам государственного контроля и надзора относятся Генеральная прокуратура, Центральная избирательная комиссия, Центральный банк и Счётная палата. Эти институты выполняют функции по контролю за соблюдением законодательства, обеспечению финансовой стабильности, проведению выборов и эффективному использованию государственных средств.",
    ],
  };
  const en = {
    h2: "Structure of State Power of the Republic of Uzbekistan",
    paragraphs: [
      "State power in Uzbekistan is organized in accordance with the Constitution and is based on the principle of separation of powers, distributing authority among various state institutions to ensure effective governance and prevent concentration of power.",
      "The President of the Republic of Uzbekistan is the head of state, defines the main directions of domestic and foreign policy, represents the state internationally, ensures interaction between branches of government and acts as a guarantor of the Constitution and citizens' rights.",
      "Legislative power is exercised by the Oliy Majlis (parliament) of the Republic of Uzbekistan, consisting of two chambers — the Legislative Chamber and the Senate. The main tasks of parliament include drafting and adopting laws, regulating the most important spheres of public life, approving the state budget and overseeing the activities of the executive branch.",
      "Executive power is represented by the Cabinet of Ministers of the Republic of Uzbekistan. The government ensures the implementation of state policy, coordinates the activities of ministries, state committees and agencies, and is responsible for the development of the economy, social sphere and the country's infrastructure.",
      "The judiciary plays an important role in ensuring legality and justice. The judicial system includes the Supreme Court and the Constitutional Court, which protect the rights of citizens and ensure that laws comply with the Constitution. The independence of the judiciary is a key element of a rule-of-law state.",
      "Other state control and supervisory bodies include the Prosecutor General's Office, the Central Election Commission, the Central Bank and the Accounts Chamber. These institutions perform functions of monitoring compliance with legislation, ensuring financial stability, conducting elections and the efficient use of state funds.",
    ],
  };
  const uz = {
    h2: "Oʻzbekiston Respublikasi davlat hokimiyati tuzilishi",
    paragraphs: [
      "Oʻzbekistonda davlat hokimiyati Konstitutsiyaga muvofiq tashkil etilgan va samarali boshqaruvni taʼminlash va hokimiyatning markazlashishiga yoʻl qoʻymaslik uchun turli davlat institutlari oʻrtasida vakolatlarni taqsimlaydigan hokimiyatlarni ajratish tamoyiliga asoslangan.",
      "Oʻzbekiston Respublikasi Prezidenti davlat rahbari boʻlib, ichki va tashqi siyosatning asosiy yoʻnalishlarini belgilaydi, davlatni xalqaro maydonda vakillik qiladi, hokimiyat tarmoqlari oʻrtasidagi oʻzaro hamkorlikni taʼminlaydi va Konstitutsiya va fuqarolar huquqlarining kafolati hisoblanadi.",
      "Qonun chiqaruvchi hokimiyat Oʻzbekiston Respublikasi Oliy Majlisi (parlamenti) tomonidan amalga oshiriladi, u ikki palatadan — Qonun chiqaruvchi palata va Senatdan iborat. Parlamentning asosiy vazifalari qonunlarni ishlab chiqish va qabul qilish, jamiyat hayotining muhim sohalarini tartibga solish, davlat byudjetini tasdiqlash va ijrochi hokimiyat faoliyatini nazorat qilishni oʻz ichiga oladi.",
      "Ijrochi hokimiyat Oʻzbekiston Respublikasi Vazirlar Mahkamasi tomonidan vakillik qilinadi. Hukumat davlat siyosatini amalga oshirishni taʼminlaydi, vazirliklar, davlat qoʻmitalari va agentliklar faoliyatini muvofiqlashtiradi, iqtisodiyot, ijtimoiy soha va mamlakat infratuzilmasining rivojlanishi uchun javobgardir.",
      "Sud hokimiyati qonuniylik va adolatni taʼminlashda muhim rol oʻynaydi. Sud tizimi Oliy sud va Konstitutsiyaviy sudni oʻz ichiga oladi, ular fuqarolar huquqlarini himoya qiladi va qonunlarning Konstitutsiyaga mosligini taʼminlaydi. Sud hokimiyatining mustaqilligi huquqiy davlatning asosiy elementi hisoblanadi.",
      "Boshqa davlat nazorati va kuzatuv organlariga Bosh prokuratura, Markaziy saylov komissiyasi, Markaziy bank va Hisob palatasi kiradi. Ushbu institutlar qonunchilikka rioya qilishni nazorat qilish, moliyaviy barqarorlikni taʼminlash, saylovlarni oʻtkazish va davlat mablagʻlaridan samarali foydalanish boʻyicha funksiyalarni bajaradi.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const usefulInfoText = computed(() => {
  const ru = {
    h2: "Официальные сайты государственных органов",
    paragraphs: [
      "Официальные сайты государственных органов являются важным источником достоверной информации о деятельности государственных учреждений Республики Узбекистан. На этих интернет-ресурсах публикуются новости, нормативные документы, государственные программы, отчёты о деятельности органов власти и другая важная информация для граждан и организаций.",
      "Использование официальных сайтов позволяет получать актуальные данные непосредственно от государственных учреждений. Это особенно важно для граждан, предпринимателей, исследователей и журналистов, которым необходим доступ к проверенной и официальной информации.",
      "На портале Govinfo собраны ссылки на официальные сайты высших государственных органов Республики Узбекистан. Такой каталог позволяет быстро найти нужный государственный орган и перейти на его официальный интернет-ресурс без необходимости длительного поиска в интернете.",
      "Кроме того, официальные сайты государственных органов часто содержат разделы с государственными услугами, контактной информацией, информацией о руководстве и структуре учреждения, а также открытые данные и отчёты о деятельности органов власти.",
      "Использование централизованного каталога официальных сайтов государственных органов делает поиск информации более удобным и позволяет гражданам быстрее находить необходимые государственные ресурсы.",
    ],
  };
  const en = {
    h2: "Official Websites of Government Agencies",
    paragraphs: [
      "Official websites of government agencies are an important source of reliable information about the activities of state institutions of the Republic of Uzbekistan. These online resources publish news, normative documents, state programs, reports on the activities of government bodies and other important information for citizens and organizations.",
      "The use of official websites allows obtaining up-to-date data directly from state institutions. This is especially important for citizens, entrepreneurs, researchers and journalists who need access to verified and official information.",
      "The Govinfo portal collects links to the official websites of the highest state bodies of the Republic of Uzbekistan. Such a catalog allows you to quickly find the necessary state body and go to its official online resource without the need for a lengthy search on the Internet.",
      "In addition, official websites of government agencies often contain sections with public services, contact information, information about the leadership and structure of the institution, as well as open data and reports on the activities of government bodies.",
      "Using a centralized catalog of official websites of government agencies makes information retrieval more convenient and allows citizens to quickly find the necessary government resources.",
    ],
  };
  const uz = {
    h2: "Davlat organlarining rasmiy saytlari",
    paragraphs: [
      "Davlat organlarining rasmiy saytlari Oʻzbekiston Respublikasi davlat muassasalari faoliyati haqida ishonchli maʼlumotning muhim manbai hisoblanadi. Ushbu internet resurslarda yangiliklar, normativ hujjatlar, davlat dasturlari, davlat organlari faoliyati boʻyicha hisobotlar va fuqarolar va tashkilotlar uchun boshqa muhim maʼlumotlar nashr etiladi.",
      "Rasmiy saytlardan foydalanish davlat muassasalaridan toʻgʻridan-toʻgʻri dolzarb maʼlumotlar olish imkonini beradi. Bu tekshirilgan va rasmiy maʼlumotlarga kirish kerak boʻlgan fuqarolar, tadbirkorlar, tadqiqotchilar va jurnalistlar uchun ayniqsa muhim.",
      "Govinfo portali Oʻzbekiston Respublikasining oliy davlat organlarining rasmiy saytlariga havolalarni toʻplagan. Bunday katalog kerakli davlat organini tezda topish va internetda uzoq qidiruvsiz uning rasmiy internet resursiga oʻtish imkonini beradi.",
      "Bundan tashqari, davlat organlarining rasmiy saytlari koʻpincha davlat xizmatlari, aloqa maʼlumotlari, rahbariyat va muassasa tuzilishi haqida maʼlumotlar, shuningdek ochiq maʼlumotlar va davlat organlari faoliyati boʻyicha hisobotlar boʻlgan boʻlimlarni oʻz ichiga oladi.",
      "Davlat organlarining rasmiy saytlari markazlashtirilgan katalogidan foydalanish maʼlumot qidiruvini qulayroq qiladi va fuqarolarga kerakli davlat resurslarini tezroq topish imkonini beradi.",
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});

const faqText = computed(() => {
  const ru = {
    h2: "Часто задаваемые вопросы",
    items: [
      {
        q: "Какие органы относятся к высшим органам власти Узбекистана?",
        a: "К высшим государственным органам Республики Узбекистан относятся Президент страны, парламент (Олий Мажлис), Кабинет Министров, Конституционный суд, Верховный суд, Генеральная прокуратура, Центральная избирательная комиссия, Центральный банк и Счётная палата.",
      },
      {
        q: "Кто является главой государства в Узбекистане?",
        a: "Главой государства является Президент Республики Узбекистан. Президент определяет основные направления государственной политики и представляет страну на международной арене.",
      },
      {
        q: "Какую роль выполняет парламент Узбекистана?",
        a: "Парламент Узбекистана — Олий Мажлис — является высшим законодательным органом страны. Он принимает законы, утверждает государственный бюджет и осуществляет парламентский контроль.",
      },
      {
        q: "Где можно найти официальные сайты государственных органов Узбекистана?",
        a: "Ссылки на официальные сайты государственных учреждений можно найти на портале Govinfo, где представлен каталог государственных органов Республики Узбекистан.",
      },
      {
        q: "Какие функции выполняет Кабинет Министров?",
        a: "Кабинет Министров является высшим органом исполнительной власти. Он реализует государственную политику, координирует деятельность министерств и обеспечивает социально-экономическое развитие страны.",
      },
      {
        q: "Для чего нужны официальные сайты государственных органов?",
        a: "Официальные сайты публикуют достоверную информацию о деятельности государственных учреждений, нормативные документы, новости и государственные услуги для граждан.",
      },
    ],
  };
  const en = {
    h2: "Frequently Asked Questions",
    items: [
      {
        q: "Which bodies are the supreme bodies of power in Uzbekistan?",
        a: "The supreme state bodies of the Republic of Uzbekistan include the President of the country, the parliament (Oliy Majlis), the Cabinet of Ministers, the Constitutional Court, the Supreme Court, the Prosecutor General's Office, the Central Election Commission, the Central Bank and the Accounts Chamber.",
      },
      {
        q: "Who is the head of state in Uzbekistan?",
        a: "The head of state is the President of the Republic of Uzbekistan. The President defines the main directions of state policy and represents the country on the international arena.",
      },
      {
        q: "What role does the parliament of Uzbekistan play?",
        a: "The parliament of Uzbekistan — the Oliy Majlis — is the supreme legislative body of the country. It adopts laws, approves the state budget and exercises parliamentary control.",
      },
      {
        q: "Where can I find the official websites of government agencies in Uzbekistan?",
        a: "Links to the official websites of state institutions can be found on the Govinfo portal, which presents a catalog of state bodies of the Republic of Uzbekistan.",
      },
      {
        q: "What functions does the Cabinet of Ministers perform?",
        a: "The Cabinet of Ministers is the supreme body of executive power. It implements state policy, coordinates the activities of ministries and ensures the socio-economic development of the country.",
      },
      {
        q: "What are official government websites for?",
        a: "Official websites publish reliable information about the activities of state institutions, normative documents, news and public services for citizens.",
      },
    ],
  };
  const uz = {
    h2: "Tez-tez beriladigan savollar",
    items: [
      {
        q: "Oʻzbekistonda oliy davlat organlariga qaysi organlar kiradi?",
        a: "Oʻzbekiston Respublikasining oliy davlat organlariga mamlakat Prezidenti, parlament (Oliy Majlis), Vazirlar Mahkamasi, Konstitutsiyaviy sud, Oliy sud, Bosh prokuratura, Markaziy saylov komissiyasi, Markaziy bank va Hisob palatasi kiradi.",
      },
      {
        q: "Oʻzbekistonda davlat rahbari kim?",
        a: "Davlat rahbari Oʻzbekiston Respublikasi Prezidentidir. Prezident davlat siyosatining asosiy yoʻnalishlarini belgilaydi va mamlakatni xalqaro maydonda vakillik qiladi.",
      },
      {
        q: "Oʻzbekiston parlamenti qanday rol bajaradi?",
        a: "Oʻzbekiston parlamenti — Oliy Majlis — mamlakatning oliy qonun chiqaruvchi organi hisoblanadi. U qonunlarni qabul qiladi, davlat byudjetini tasdiqlaydi va parlament nazoratini amalga oshiradi.",
      },
      {
        q: "Oʻzbekiston davlat organlarining rasmiy saytlarini qayerda topish mumkin?",
        a: "Davlat muassasalarining rasmiy saytlariga havolalarni Govinfo portali orqali topish mumkin, unda Oʻzbekiston Respublikasi davlat organlari katalogi taqdim etilgan.",
      },
      {
        q: "Vazirlar Mahkamasi qanday funksiyalarni bajaradi?",
        a: "Vazirlar Mahkamasi ijrochi hokimiyatning oliy organi hisoblanadi. U davlat siyosatini amalga oshiradi, vazirliklar faoliyatini muvofiqlashtiradi va mamlakatning ijtimoiy-iqtisodiy rivojlanishini taʼminlaydi.",
      },
      {
        q: "Davlat organlarining rasmiy saytlari nima uchun kerak?",
        a: "Rasmiy saytlar davlat muassasalari faoliyati haqida ishonchli maʼlumotlar, normativ hujjatlar, yangiliklar va fuqarolar uchun davlat xizmatlarini nashr etadi.",
      },
    ],
  };
  const map = { ru, en, uz };
  return map[locale.value] || map.ru;
});
</script>

<template>
  <div>
    <CategorySeo
      title-key="Headquarters.seo.title"
      description-key="Headquarters.seo.description"
    />
    <div class="site-container py-6 md:py-10">
      <section>
        <div class="border-b border-[#eee] pb-2 mb-4 md:mb-6">
          <h1 class="font-medium text-xl md:text-2xl">
            {{ t("Headquarters.headtitle") }}
          </h1>
        </div>

        <div
          class="text-[#4B5563] base-bg leading-7 text-base 768:text-sm mb-6 space-y-2"
        >
          <p v-for="(para, i) in introText" :key="'intro-' + i">
            {{ para }}
          </p>
        </div>

        <div
          class="grid grid-cols-4 gap-4 768:grid-cols-2 768:gap-2 576:!grid-cols-1"
        >
          <nuxt-link
            v-for="(item, index) in headquarters.data"
            :key="index"
            :to="`/headquarters/${item.slug}`"
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
              {{ $t(item.title) }}
            </h3>
          </nuxt-link>
        </div>

        <div class="mt-8 pt-6 border-t border-[#eee]">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ structurePowerText.h2 }}
          </h2>
          <div
            class="text-[#4B5563] base-bg leading-7 text-base 768:text-sm space-y-2"
          >
            <p
              v-for="(para, i) in structurePowerText.paragraphs"
              :key="'structure-' + i"
            >
              {{ para }}
            </p>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-[#eee]">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ usefulInfoText.h2 }}
          </h2>
          <div
            class="text-[#4B5563] base-bg leading-7 text-base 768:text-sm space-y-2"
          >
            <p
              v-for="(para, i) in usefulInfoText.paragraphs"
              :key="'useful-' + i"
            >
              {{ para }}
            </p>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-[#eee]">
          <h2 class="font-semibold text-lg md:text-xl mb-4">
            {{ faqText.h2 }}
          </h2>
          <div
            class="text-[#4B5563] base-bg leading-7 text-base 768:text-sm space-y-4"
          >
            <div
              v-for="(item, i) in faqText.items"
              :key="'faq-' + i"
              class="space-y-1"
            >
              <h3 class="font-medium text-[#111] text-base 768:text-sm">
                {{ item.q }}
              </h3>
              <p class="text-sm">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
