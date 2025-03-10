import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Arabic To English Translation",
  description: "SelectedPassages Tranlated from Arabic to English",
};

export default function ArabicToEnglish() {
  const navLinks: NavLink[] = [
    { href: "#al-azhar-visit", label: "Sheikh of Al-Azhar" },
    { href: "#king-abdulaziz", label: "King Abdulaziz" },
    { href: "#tawakkol-karman", label: "Tawakkol Karman" },
    { href: "#storm-of-resolve", label: "Storm of Resolve" },
  ];

  return (
    <main className="page-container">
      <div className="content-layout">
        <aside className="sidebar">
          <Navigation links={navLinks} />
        </aside>
        {/* Body Content */}
        <div className="main-content">
          {/* Title */}
          <PageTitle title="Arabic to English Translation" />

          {/* 
  Section: Sheikh of Al-Azhar's Visit to Saudi Arabia
  Optimized TailwindCSS structure with Arabic & English inside the same box.
*/}
          <section id="al-azhar-visit" className="section-content">
            {/* Arabic & English in the Same Box */}
            <div className="flex flex-col justify-center">
              <article className="bg-white p-8 rounded-lg shadow-md border border-gray-200 w-full md:w-4/5 lg:w-11/12 xl:w-full">
                <div dir="rtl">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    شيخ الأزهر يصل للرياض في أول زيارة للسعودية
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-900 text-right">
                    الرياض- حازم الشرقاوي
                    <br />
                    <br />
                    وصل أمس الإمام الأكبر شيخ الأزهر د. أحمد الطيب إلى الرياض في
                    أول زيارة له إلى السعودية منذ أن أصبح شيخاً للأزهر. وكان في
                    استقباله بالصالة الملكية بمطار الملك خالد بالرياض وزير
                    الشئون الإسلامية والأوقاف الشيخ صالح آل الشيخ. وأكد السفير
                    المصري بالسعودية عفيفي عبدالوهاب أن شيخ الأزهر بدأ أمس
                    زيارته للسعودية يلتقي خلالها مع ولي العهد الأمير سلمان بن
                    عبدالعزيز وعدد من كبار المسؤولين.
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-300 my-6"></div>

                <div dir="ltr">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Sheikh of Al-Azhar Arrives in Riyadh on His First Visit to
                    Saudi Arabia
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-900 text-left">
                    Riyadh – Hazem Al-Sharqawi
                    <br />
                    <br />
                    Yesterday, the Grand Imam, Sheikh of Al-Azhar, Dr. Ahmed
                    Al-Tayeb, arrived in Riyadh for his first visit to Saudi
                    Arabia since he assumed the position of Sheikh of Al-Azhar.
                    He was received at the royal hall of King Khalid Airport in
                    Riyadh by the Minister of Islamic Affairs and Endowments,
                    Sheikh Saleh Al-Al Sheikh. The Egyptian Ambassador to Saudi
                    Arabia, Afifi Abdelwahab, confirmed that the Sheikh of
                    Al-Azhar began his visit yesterday, during which he met with
                    Crown Prince Salman bin Abdulaziz and several senior
                    officials.
                  </p>
                </div>
              </article>

              {/* Keywords & Translation Notes in the Same Section */}
              <div className="p-6 space-y-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800">
                  Keywords &amp; Translation Notes
                </h2>

                {/* Keywords Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-lg bg-white shadow-md">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-6 py-3 border border-gray-300 text-left">
                          English
                        </th>
                        <th
                          className="px-6 py-3 border border-gray-300 text-right"
                          dir="rtl"
                        >
                          العربية
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          en: "Minister of Islamic Affairs and Endowment",
                          ar: "وزير الشئون الإسلامية والأوقاف",
                        },
                        { en: "Sheikh of Al-Azhar", ar: "شيخ الأزهر" },
                        { en: "Egyptian Ambassador", ar: "السفير المصري" },
                        { en: "Riyadh", ar: "الرياض" },
                        { en: "during which he meets", ar: "يلتقي خلالها" },
                        {
                          en: "his first visit to Saudi Arabia",
                          ar: "أول زيارة له إلى السعودية",
                        },
                        {
                          en: "since he assumed his position",
                          ar: "منذ أن أصبح شيخاً للأزهر",
                        },
                        { en: "Crown Prince", ar: "ولي العهد" },
                        {
                          en: "top (or senior) officials",
                          ar: "كبار المسؤولين",
                        },
                        { en: "He was received by...", ar: "وكان في استقباله" },
                      ].map((word, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-6 py-3 border border-gray-300">
                            {word.en}
                          </td>
                          <td
                            className="px-6 py-3 border border-gray-300 text-right"
                            dir="rtl"
                          >
                            {word.ar}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Translation Notes */}
                <div className="space-y-4">
                  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-900">
                    <li>
                      <strong>Headline Structure:</strong> The Arabic headline
                      follows the
                      <em> standard journalistic style</em> (جملة اسمية) by
                      avoiding verbs, while the English translation maintains
                      clarity and brevity.
                    </li>
                    <li>
                      <strong>Verb Usage:</strong> In Arabic,{" "}
                      <em>"يصل" (arrives)</em> is used to indicate an ongoing
                      action, while in English, the past tense
                      <em>("arrived")</em> was chosen to align with common
                      English news reporting.
                    </li>
                    <li>
                      <strong>Conciseness & Formality:</strong> Arabic often
                      prefers a<em> formal structure</em> with more context,
                      whereas English journalism
                      <em> tends to be more concise</em>. The translation
                      reflects this by simplifying the airport reception scene.
                    </li>
                    <li>
                      <strong>Names & Titles:</strong> <em>"الإمام الأكبر"</em>{" "}
                      was translated as <em>"Grand Imam"</em> for accuracy, as
                      it is a recognized English equivalent.
                    </li>
                    <li>
                      <strong>Fixed Expressions:</strong> The phrase
                      <em> "في استقباله" (he was received by...)</em> was
                      translated in a way that maintains its natural
                      journalistic tone in English.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* 
  Section: King Abdullah bin Abdulaziz Passes Away
  Optimized TailwindCSS structure with Arabic & English inside the same box.
*/}
          <section id="king-abdulaziz" className="section-content">
            {/* Arabic & English in the Same Box */}
            <div className="flex flex-col justify-center">
              <article className="bg-white p-8 rounded-lg shadow-md border border-gray-200 w-full md:w-4/5 lg:w-11/12 xl:w-full">
                <div dir="rtl">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    وفاة الملك عبدالله بن عبدالعزيز
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-900 text-right">
                    توفي خادم الحرمين الشريفين الملك عبد الله بن عبد العزيز عن
                    عمر يناهز واحدًا وتسعين عامًا. كان الملك عبد الله خامس ملوك
                    المملكة العربية السعودية من أبناء الملك عبد العزيز. عانى
                    الملك الراحل من بعض المتاعب الصحية، خاصةً خلال الخمسة أعوام
                    الأخيرة من حياته.
                    <br />
                    بعد وفاة الملك عبد الله، تولى الملك سلمان بن عبد العزيز
                    الحكم، وتم تعيين الأمير مقرن بن عبد العزيز - وهو أصغر أبناء
                    الملك عبد العزيز الأحياء - وليًا للعهد.
                    <br />
                    شغل الملك سلمان منصب أمير الرياض لمدة خمسين عامًا، استطاع
                    خلالها تحويل العاصمة إلى واحدة من أهم العواصم العالمية.
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-300 my-6"></div>

                <div dir="ltr">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    King Abdullah bin Abdulaziz Passes Away
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-900 text-left">
                    King Abdullah bin Abdulaziz, Custodian of the Two Holy
                    Mosques, passed away at the age of 91. He was the fifth king
                    among King Abdulaziz’s sons.
                    <br />
                    The late king suffered from health complications,
                    particularly during the past five years.
                    <br />
                    After his passing, King Salman bin Abdulaziz assumed power
                    and appointed Prince Muqrin bin Abdulaziz—the youngest
                    surviving son of King Abdulaziz— as Crown Prince.
                    <br />
                    King Salman served as the Emir of Riyadh for fifty years,
                    during which he managed to transform Riyadh into one of the
                    world’s most important capitals.
                  </p>
                </div>
              </article>

              {/* Keywords & Translation Notes in the Same Section */}
              <div className="p-6 space-y-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800">
                  Keywords &amp; Translation Notes
                </h2>

                {/* Keywords Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-lg bg-white shadow-md">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-6 py-3 border border-gray-300 text-left">
                          English Meaning
                        </th>
                        <th
                          className="px-6 py-3 border border-gray-300 text-right"
                          dir="rtl"
                        >
                          الكلمة/التعبير
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          en: "assume/come to/rise to power",
                          ar: "تولى الحكم",
                        },
                        { en: "pass away", ar: "وفاة" },
                        {
                          en: "Custodian of the Two Holy Mosques",
                          ar: "خادم الحرمين الشريفين",
                        },
                        { en: "Crown Prince", ar: "ولي العهد" },
                        { en: "Prince/Emir of Riyadh", ar: "أمير الرياض" },
                        { en: "...of age / at the age of", ar: "عن عمر يناهز" },
                        {
                          en: "one of the most important ...",
                          ar: "إلى واحدة من أهم",
                        },
                        { en: "late king", ar: "الملك الراحل" },
                        { en: "world capitals", ar: "العواصم العالمية" },
                        { en: "health problems", ar: "المتاعب الصحية" },
                      ].map((word, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-6 py-3 border border-gray-300">
                            {word.en}
                          </td>
                          <td
                            className="px-6 py-3 border border-gray-300 text-right"
                            dir="rtl"
                          >
                            {word.ar}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Translation Notes */}
                <div className="space-y-4">
                  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-900">
                    <li>
                      <strong>Headline Structure:</strong> The Arabic headline
                      follows the
                      <em> standard journalistic style</em> (جملة اسمية) by
                      avoiding verbs, while the English translation maintains
                      clarity and brevity.
                    </li>
                    <li>
                      <strong>Verb Usage:</strong> Arabic prefers a
                      <em> verb-first structure</em> for storytelling, so{" "}
                      <em>"توفي" (passed away)</em>
                      appears at the start, while in English, the subject ("King
                      Abdullah bin Abdulaziz") appears first.
                    </li>
                    <li>
                      <strong>Conciseness & Style:</strong> Arabic provides more
                      details (e.g., <em>"المتاعب الصحية"</em>) compared to the
                      English
                      <em>"health complications"</em>, which is a more compact
                      term.
                    </li>
                    <li>
                      <strong>Names & Titles:</strong> The title{" "}
                      <em>"Custodian of the Two Holy Mosques"</em>
                      is commonly translated in English, maintaining its
                      diplomatic recognition.
                    </li>
                    <li>
                      <strong>Fixed Expressions:</strong> The phrase
                      <em> "عن عمر يناهز"</em> was translated as{" "}
                      <em>"at the age of"</em>, aligning with standard English
                      obituaries.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* 
  Section: Tawakkol Karman's Statement on the January Revolution
  Optimized TailwindCSS structure with Arabic & English inside the same box.
*/}
          <section id="tawakkol-karman" className="section-content">
            {/* Arabic & English in the Same Box */}
            <div className="flex flex-col justify-center">
              <article className="bg-white p-8 rounded-lg shadow-md border border-gray-200 w-full md:w-4/5 lg:w-11/12 xl:w-full">
                <div dir="rtl">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    توكل كرمان: ثورة يناير سلمية يجب أن تظل سلمية
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-900 text-right">
                    قالت توكل كرمان، الناشطة السياسية اليمنية التي حصلت على
                    جائزة نوبل للسلام، إنها تنصح المصريين بأن تظل ثورة يناير
                    سليمة، وألا يقابلوا العنف بعنف مثله، لأن الثورات تأتي دائماً
                    للقضاء على العنف ورفض الديكتاتورية المستبدة. وقالت كرمان إنه
                    على الثوار أن يناضلوا حتى تتحقق جميع مطالبهم العادلة، والتي
                    تتمثل في الحصول على الحرية والديمقراطية غير المنقوصة، مشيرة
                    إلى أن الاعتصامات السلمية هي البوابة للوصول إلى أهدافهم
                    النبيلة.
                    <br />
                    وأشارت كرمان إلى أنها تنصح الأحزاب الإسلامية في مصر بأن
                    تحافظ على أن يظل الدستور مدنياً وعدم الانقلاب على مدنية
                    الدولة فور حصولها على الأغلبية النيابية. كما أشادت
                    بالانتخابات البرلمانية التي تميزت بالحيادية والشفافية.
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-300 my-6"></div>

                <div dir="ltr">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Tawakkol Karman: The January Revolution Must Remain Peaceful
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-900 text-left">
                    Tawakkol Karman, the Yemeni political activist and Nobel
                    Peace Prize laureate, urged Egyptians to ensure that the
                    January Revolution remains peaceful. She advised against
                    responding to violence with violence, emphasizing that
                    revolutions are meant to end violence and reject oppressive
                    dictatorship. Karman stressed that revolutionaries must
                    persist until all their legitimate demands are met, which
                    include full freedom and democracy. She highlighted that
                    peaceful sit-ins serve as a crucial gateway to achieving
                    these noble goals.
                    <br />
                    Karman also advised Islamist parties in Egypt to uphold a
                    civil constitution and not to undermine the secular nature
                    of the state once they attain a parliamentary majority.
                    Additionally, she praised the parliamentary elections for
                    being conducted with impartiality and transparency.
                  </p>
                </div>
              </article>

              {/* Keywords & Translation Notes in the Same Section */}
              <div className="p-6 space-y-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800">
                  Keywords &amp; Translation Notes
                </h2>

                {/* Keywords Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-lg bg-white shadow-md">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-6 py-3 border border-gray-300 text-left">
                          English Meaning
                        </th>
                        <th
                          className="px-6 py-3 border border-gray-300 text-right"
                          dir="rtl"
                        >
                          الكلمة/التعبير
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          en: "January Revolution remains peaceful",
                          ar: "تظل ثورة يناير سلمية",
                        },
                        { en: "Political activist", ar: "الناشطة السياسية" },
                        {
                          en: "Nobel Peace Prize winner",
                          ar: "حصلت على جائزة نوبل للسلام",
                        },
                        {
                          en: "Meet violence with similar violence",
                          ar: "يقابلوا العنف بعنف مثله",
                        },
                        {
                          en: "End violence and reject despotic dictatorship",
                          ar: "للقضاء على العنف ورفض الديكتاتورية المستبدة",
                        },
                        { en: "Peaceful sit-ins", ar: "الاعتصامات السلمية" },
                        { en: "Noble goals", ar: "أهدافهم النبيلة" },
                        { en: "Islamist parties", ar: "الأحزاب الإسلامية" },
                        { en: "Civil constitution", ar: "دستور مدني" },
                        {
                          en: "Parliamentary majority",
                          ar: "الأغلبية النيابية",
                        },
                      ].map((word, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-6 py-3 border border-gray-300">
                            {word.en}
                          </td>
                          <td
                            className="px-6 py-3 border border-gray-300 text-right"
                            dir="rtl"
                          >
                            {word.ar}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Translation Notes */}
                <div className="space-y-4">
                  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-900">
                    <li>
                      <strong>Headline Structure:</strong> The Arabic headline
                      follows the
                      <em> standard journalistic style</em> (جملة اسمية) by
                      avoiding verbs, while the English translation maintains
                      clarity and brevity.
                    </li>
                    <li>
                      <strong>Verb Usage:</strong> Arabic uses <em>"تظل"</em>{" "}
                      (remains) to emphasize continuity, whereas English
                      simplifies it with <em>"must remain peaceful"</em>
                      to align with common news phrasing.
                    </li>
                    <li>
                      <strong>Conciseness & Style:</strong> Arabic provides
                      additional context regarding political parties and
                      elections, whereas the English translation condenses it
                      for readability.
                    </li>
                    <li>
                      <strong>Terminology Selection:</strong> "دستور مدني" was
                      translated as
                      <em>"civil constitution"</em> instead of "secular
                      constitution" to maintain the original political nuance.
                    </li>
                    <li>
                      <strong>Fixed Expressions:</strong> The phrase{" "}
                      <em>"يقابلوا العنف بعنف مثله"</em>
                      was translated as{" "}
                      <em>"meet violence with similar violence"</em> instead of
                      "fight violence with violence" to ensure accuracy in
                      meaning.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Storm of Resolve Military Operation Optimized TailwindCSS
        structure with Arabic & English inside the same box. */}
          <section id="storm-of-resolve" className="section-content">
            {/* Arabic & English in the Same Box */}
            <div className="flex flex-col justify-center">
              <article className="bg-white p-8 rounded-lg shadow-md border border-gray-200 w-full md:w-4/5 lg:w-11/12 xl:w-full">
                <div dir="rtl">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    عسيري: عاصفة الحزم بلغت مرحلة "الأهداف المنتقاة"
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-900 text-right">
                    قال المتحدث باسم عملية عاصفة الحزم، العميد أحمد عسيري، إن
                    العاصفة بلغت مرحلة "الأهداف المنتقاة"، وذلك عبر استهداف
                    مناطق تجمعات جماعة الحوثي ومخازن أسلحتها. وأكد أن قوات
                    التحالف ليست مستعجلة في تحقيق أهدافها، وقال إن التحالف يملك
                    الوقت الكافي والإمكانات اللازمة لتحقيق تلك الأهداف.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-900 text-right">
                    وذكر عسيري عدداً من الأهداف التي طالتها غارات التحالف في
                    الساعات الأربع والعشرين الماضية. وأردف عسيري "إن خطة
                    العمليات المشتركة تتكون من مراحل متسلسلة، كل مرحلة تحقق
                    أهدافاً، وتنتهي بمؤشرات تشير إلى بدء المرحلة الثانية، وتبدأ
                    من انتشار القوات إلى عودتها إلى مواقع معسكراتها. أي حملة
                    عسكرية تبدأ بحملة جوية لتحقيق أهداف، منها تحييد الدفاعات
                    الجوية الأرضية، ومنع العدو من استخدام قواته الجوية، والتحكم
                    في المجال الجوي". وأكد على وجود تنسيق على مدار الساعة بين
                    قوات التحالف مع الحكومة اليمنية الشرعية، في جميع العمليات
                    الإنسانية والاستخباراتية والعسكرية.
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-300 my-6"></div>

                <div dir="ltr">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Asiri: "Storm of Resolve" Reaches "Selected Targets" Phase
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-900 text-left">
                    The spokesperson for the "Storm of Resolve" operation,
                    Brigadier General Ahmed Asiri, stated that the operation has
                    reached the "Selected Targets" phase by striking Houthi
                    gathering areas and their arsenals. He emphasized that the
                    coalition forces are not in a hurry to achieve their
                    objectives, adding that they have sufficient time and
                    necessary resources to accomplish their goals.
                    <br />
                    Asiri mentioned several targets that coalition air raids hit
                    in the past twenty-four hours. He added that "the Joint
                    Operations Plan consists of sequential phases, where each
                    phase accomplishes specific objectives and concludes with
                    indicators signaling the start of the next phase. The
                    process begins with the deployment of forces and ends with
                    their return to their base camps. Any military campaign
                    begins with an air offensive to achieve key goals, such as
                    neutralizing ground air defenses, preventing the enemy from
                    utilizing its air forces, and controlling the airspace." He
                    emphasized that continuous coordination exists between the
                    Coalition Forces and the Legitimate Yemeni Government across
                    all humanitarian, intelligence, and military operations.
                  </p>
                </div>
              </article>

              {/* Keywords & Translation Notes in the Same Section */}
              <div className="p-6 space-y-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800">
                  Keywords &amp; Translation Notes
                </h2>

                {/* Keywords Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 text-lg bg-white shadow-md">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-6 py-3 border border-gray-300 text-left">
                          English
                        </th>
                        <th
                          className="px-6 py-3 border border-gray-300 text-right"
                          dir="rtl"
                        >
                          العربية
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { en: "Storm of Resolve", ar: "عاصفة الحزم" },
                        { en: "air raids", ar: "غارات" },
                        { en: "selected targets", ar: "الأهداف المنتقاة" },
                        { en: "spokesperson", ar: "المتحدث" },
                        { en: "arsenals/armouries", ar: "مخازن أسلحتها" },
                        { en: "coalition forces", ar: "قوات التحالف" },
                        {
                          en: "joint operations plan",
                          ar: "خطة العمليات المشتركة",
                        },
                        {
                          en: "neutralizing air defenses",
                          ar: "تحييد الدفاعات الجوية",
                        },
                        { en: "air forces", ar: "قواته الجوية" },
                        { en: "airspace", ar: "المجال الجوي" },
                      ].map((word, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-6 py-3 border border-gray-300">
                            {word.en}
                          </td>
                          <td
                            className="px-6 py-3 border border-gray-300 text-right"
                            dir="rtl"
                          >
                            {word.ar}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Translation Notes */}
                <div className="space-y-4">
                  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-900">
                    <li>
                      <strong>Headline Structure:</strong> The Arabic headline
                      uses a<em> noun-based sentence</em> (جملة اسمية) to
                      maintain clarity and impact, while the English translation
                      ensures journalistic readability.
                    </li>
                    <li>
                      <strong>Spokesperson Translation:</strong> The Arabic term{" "}
                      <em>المتحدث</em> (literally "the one who speaks") is
                      translated as "spokesperson" to align with formal English
                      terminology.
                    </li>
                    <li>
                      <strong>Military Terminology:</strong> "الأهداف المنتقاة"
                      was translated as "selected targets" to convey precision
                      in targeting, a crucial term in military strategy.
                    </li>
                    <li>
                      <strong>Arsenals Translation:</strong> "مخازن أسلحتها"
                      refers to storage locations for weapons, best translated
                      as "arsenals" or "armouries" to maintain specificity.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Balance Div */}
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
