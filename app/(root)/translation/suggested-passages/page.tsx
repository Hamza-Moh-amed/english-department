import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "SelectedPassages",
  description:
    "SelectedPassages in Arabic and English with key words translations.",
};

export default function SelectedPassages() {
  const navLinks: NavLink[] = [
    { href: "#egypt-malaysia-leaders", label: "Egypt-Malaysia" },
    {
      href: "#prosecutor-release-students",
      label: "Prosecutor Release Students",
    },
    { href: "#al-azhar-visit", label: "Sheikh of Al-Azhar Arrives" },
    { href: "#king-abdulaziz", label: "King Abdulaziz" },
    { href: "#tawakkol-karman", label: "Tawakkol Karman" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* For medium screens and up: Navigation on left and PageTitle centered */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          <div className="flex-grow text-center">
            <PageTitle title="Selected Passages" />
          </div>
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Selected Passages" />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-8 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Passage Container */}

        <section id="egypt-malaysia-leaders" className="space-y-12">
          {/* English Passage */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-center">
              Egypt, Malaysia leaders stress rejection of Palestinian
              displacement
            </h2>
            <article className="prose max-w-none text-left md:text-justify">
              <p className="mt-2 text-lg">
                President Abdel Fattah El-Sisi and Malaysian Prime Minister
                Anwar Ibrahim have emphasized their firm rejection of the
                displacement of Palestinians from their lands so as to not
                liquidate the Palestinian cause. During a phone call on Friday,
                Sisi and Ibrahim discussed Egypt's efforts to implement the
                ceasefire agreement in the Gaza Strip in cooperation with Qatar
                and the United States. The talks also highlighted Egypt’s
                endeavors to deliver humanitarian aid to the Strip to address
                the humanitarian crisis facing the people of Gaza. The Malaysian
                prime minister praised Egypt's tireless efforts to support the
                Palestinian people, stop the bloodshed, and restore calm to the
                region. Meanwhile, both leaders affirmed the need to intensify
                international efforts to establish the Palestinian state along
                the borders of June 4, 1967, with East Jerusalem as its capital.
                They stressed that this objective is the only guarantee for
                achieving lasting peace in the region and ensuring stability and
                prosperity for its peoples. Gaza is currently witnessing a
                relative calm under a ceasefire, brokered by Egypt, Qatar, and
                the US.
              </p>
            </article>
          </div>

          {/* Arabic Translation */}
          <div className="space-y-8" dir="rtl">
            <h2 className="text-2xl font-semibold text-center">
              قادة مصر وماليزيا يشددان على رفض تهجير الفلسطينيين
            </h2>
            <article className="prose max-w-none text-right">
              <p className="mt-2 text-lg">
                أكد الرئيس عبد الفتاح السيسي ورئيس الوزراء الماليزي أنور إبراهيم
                رفضهما القاطع لتهجير الفلسطينيين من أراضيهم، حتى لا يؤدي ذلك إلى
                تصفية القضية الفلسطينية. وخلال مكالمة هاتفية يوم الجمعة، تناول
                السيسي وإبراهيم جهود مصر لتنفيذ اتفاق وقف إطلاق النار في قطاع
                غزة بالتعاون مع دولة قطر والولايات المتحدة. كما سلطت المكالمة
                الضوء على مساعي مصر لتوصيل المساعدات الإنسانية إلى القطاع
                لمواجهة الأزمة التي يعاني منها سكان غزة. وأشاد رئيس الوزراء
                الماليزي بالجهود الدؤوبة التي تبذلها مصر لدعم الشعب الفلسطيني،
                ووقف سفك الدماء، وإعادة الهدوء إلى المنطقة. وفي الوقت نفسه، أكد
                الزعيمان ضرورة تكثيف الجهود الدولية لإقامة الدولة الفلسطينية على
                حدود 4 يونيو عام 1967 وعاصمتها القدس الشرقية. وشددوا على أن هذا
                الهدف هو الضمان الوحيد لتحقيق سلام دائم في المنطقة وضمان
                الاستقرار والازدهار لشعوبها. وتشهد غزة حاليًا هدوءًا نسبيًا تحت
                وقف إطلاق النار الذي تم التوسط فيه من قبل مصر وقطر والولايات
                المتحدة.
              </p>
            </article>
          </div>

          {/* Keywords Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">
              Keywords &amp; Translations / أهم المفردات والتعبيرات
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 border border-gray-300">
                      English
                    </th>
                    <th
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      العربية
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      displacement
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      تهجير
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      ceasefire
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      وقف إطلاق النار
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      humanitarian aid
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      المساعدات الإنسانية
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      bloodshed
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      سفك الدماء
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Palestinian state
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      الدولة الفلسطينية
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      East Jerusalem
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      القدس الشرقية
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      rejection
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      رفض
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="prosecutor-release-students" className="space-y-12">
          {/* English Passage */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-center">
              Prosecutor orders release of 40 Cairo University students detained
              for past 8 months
            </h2>
            <article className="prose max-w-none text-left md:text-justify">
              <p className="mt-2 text-lg">
                The public prosecution has ordered the release of 40 Cairo
                University students held in custody for the past eight months on
                suspicion of involvement in on-campus clashes with security
                forces, the Freedom to the Brave campaign said in a statement
                issued Thursday. The students were reportedly cleared of the
                charges after the prosecution’s investigations showed they had
                no relationship to the violent events that occurred on January
                16, according to the campaign’s statement. The detained students
                faced murder charges for the death of fellow student Sherif
                al-Sawy and the attempted murder of 27 others, as well as
                protesting without permission and vandalizing university
                property. Since their arrest eight months ago, the students’
                detention period was repeatedly extended, and their case was
                never referred to trial.
              </p>
            </article>
          </div>

          {/* Arabic Translation */}
          <div className="space-y-8" dir="rtl">
            <h2 className="text-2xl font-semibold text-center">
              أمرت النيابة العامة بالإفراج عن 40 طالباً من جامعة القاهرة
              المحتجزين لمدة ثمانية أشهر
            </h2>
            <article className="prose max-w-none text-right">
              <p className="mt-2 text-lg">
                أمرت النيابة العامة بالإفراج عن 40 طالباً من جامعة القاهرة الذين
                احتُجزوا لمدة ثمانية أشهر بتهمة الاشتراك في صدامات داخل الحرم
                الجامعي مع قوات الأمن، وذلك وفقاً لبيان أصدرته حملة "الحرية
                للجدعان " يوم الخميس. وقد تم تبرئة الطلاب من التهم بعد أن أظهرت
                تحقيقات النيابة أنهم لم يكونوا على صلة بالأحداث العنيفة التي
                وقعت في 16 يناير، بحسب بيان الحملة. وكان الطلاب المحتجزون قد
                وُجهت إليهم تهم القتل بعد وفاة الطالب شريف الصاوي ومحاولة قتل 27
                آخرين، بالإضافة إلى اتهامات بالاحتجاج دون إذن وتخريب ممتلكات
                الجامعة. ومنذ اعتقالهم قبل ثمانية أشهر، تم تمديد فترة احتجاز
                الطلاب مراراً، ولم تُحال قضيتهم إلى المحاكمة.
              </p>
            </article>
          </div>

          {/* Keywords Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">
              Keywords &amp; Translations / أهم المفردات والتعبيرات
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 border border-gray-300">
                      English
                    </th>
                    <th
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      العربية
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      public prosecution
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      النيابة العامة
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Freedom to the Brave
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      الحرية للجدعان
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      cleared of the charges
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      يتم تبرئته من الاتهامات
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      ordered the release
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      أمر بالإفراج
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      held in custody
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      محتجزين
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      detained
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      معتقل
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      vandalizing
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      تخريب الممتلكات العامة والخاصة
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      involvement
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      تورط
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      period detention
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      فترة الحبس الاحتياطي
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      on-campus clashes
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      صدامات داخل الحرم الجامعي
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="al-azhar-visit" className="space-y-12">
          {/* Arabic Passage */}
          <div className="space-y-8" dir="rtl">
            <h2 className="text-2xl font-semibold text-center">
              شيخ الأزهر يصل للرياض في أول زيارة للسعودية
            </h2>
            <article className="prose max-w-none text-right">
              <p className="mt-2 text-lg">
                الرياض- حازم الشرقاوي
                <br />
                <br />
                وصل أمس الإمام الأكبر شيخ الأزهر د. أحمد الطيب إلى الرياض في أول
                زيارة له إلى السعودية منذ أن أصبح شيخاً للأزهر. وكان في استقباله
                بالصالة الملكية بمطار الملك خالد بالرياض وزير الشئون الإسلامية
                والأوقاف الشيخ صالح آل الشيخ. وأكد السفير المصري بالسعودية عفيفي
                عبدالوهاب أن شيخ الأزهر بدأ أمس زيارته للسعودية يلتقي خلالها مع
                ولي العهد الأمير سلمان بن عبدالعزيز وعدد من كبار المسؤولين.
              </p>
            </article>
          </div>

          {/* English Translation */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-center">
              Sheikh of Al-Azhar Arrives in Riyadh on His First Visit to Saudi
              Arabia
            </h2>
            <article className="prose max-w-none text-left md:text-justify">
              <p className="mt-2 text-lg">
                Riyadh – Hazem Al-Sharqawi
                <br />
                <br />
                Yesterday, the Grand Imam, Sheikh of Al-Azhar, Dr. Ahmed
                Al-Tayeb, arrived in Riyadh for his first visit to Saudi Arabia
                since he assumed the position of Sheikh of Al-Azhar. He was
                received at the royal hall of King Khalid Airport in Riyadh by
                the Minister of Islamic Affairs and Endowments, Sheikh Saleh
                Al-Al Sheikh. The Egyptian Ambassador to Saudi Arabia, Afifi
                Abdelwahab, confirmed that the Sheikh of Al-Azhar began his
                visit yesterday, during which he met with Crown Prince Salman
                bin Abdulaziz and several senior officials.
              </p>
            </article>
          </div>

          {/* Keywords Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">
              Keywords &amp; Translations / أهم المفردات والتعبيرات
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 border border-gray-300">
                      English
                    </th>
                    <th
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      العربية
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Minister of Islamic Affairs and Endowment
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      وزير الشئون الإسلامية والأوقاف
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Sheikh of Al-Azhar
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      شيخ الأزهر
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Egyptian Ambassador
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      السفير المصري
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">Riyadh</td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      الرياض
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      during which he meets
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      يلتقي خلالها
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      his first visit to Saudi Arabia
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      أول زيارة له إلى السعودية
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      since he assumed his position
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      منذ أن أصبح شيخاً للأزهر
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Crown Prince
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      ولي العهد
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      top (or senior) officials
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      كبار المسؤولين
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      He was received by...
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      وكان في استقباله
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="king-abdulaziz" className="space-y-12">
          {/* Arabic Passage */}
          <div className="space-y-8" dir="rtl">
            <h2 className="text-2xl font-semibold text-center">
              وفاة الملك عبدالله بن عبدالعزيز
            </h2>
            <article className="prose max-w-none text-right">
              <p className="mt-2 text-lg">
                توفي خادم الحرمين الشريفين الملك عبد الله بن عبد العزيز عن عمر
                يناهز واحدًا وتسعين عامًا. كان الملك عبد الله خامس ملوك المملكة
                العربية السعودية من أبناء الملك عبد العزيز. عانى الملك الراحل من
                بعض المتاعب الصحية، خاصةً خلال الخمسة أعوام الأخيرة من حياته.
                بعد وفاة الملك عبد الله، تولى الملك سلمان بن عبد العزيز الحكم،
                وتم تعيين الأمير مقرن بن عبد العزيز - وهو أصغر أبناء الملك عبد
                العزيز الأحياء - وليًا للعهد. شغل الملك سلمان منصب أمير الرياض
                لمدة خمسين عامًا، استطاع خلالها تحويل العاصمة إلى واحدة من أهم
                العواصم العالمية.
              </p>
            </article>
          </div>
          {/* English Translation */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-center">
              King Abdullah bin Abdulaziz Passes Away
            </h2>
            <article className="prose max-w-none text-left md:text-justify">
              <p className="mt-2 text-lg">
                King Abdullah bin Abdulaziz, Custodian of the Two Holy Mosques,
                passed away at the age of 91. He was the fifth king of Saudi
                Arabia and one of the sons of King Abdulaziz. The late king had
                suffered from health complications, particularly during the past
                five years. After his passing, King Salman bin Abdulaziz assumed
                power and appointed Prince Muqrin bin Abdulaziz—the youngest
                surviving son of King Abdulaziz—as Crown Prince. King Salman
                served as the Emir of Riyadh for fifty years, during which he
                managed to transform Riyadh into one of the world’s most
                important capitals.
              </p>
            </article>
          </div>
          {/* Keywords Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">
              Keywords & Translations / أهم المفردات والتعبيرات
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 border border-gray-300">
                      English Meaning
                    </th>
                    <th
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      الكلمة/التعبير
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      assume/come to/rise to power
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      تولى الحكم
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      pass away
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      وفاة
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Custodian of the Two Holy Mosques
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      خادم الحرمين الشريفين
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Crown Prince
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      ولي العهد
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Prince/Emir of Riyadh
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      أميرا للرياض
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      ...of age / at the age of
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      عن عمر يناهز
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      one of the most important ...
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      إلى واحدة من أهم
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      late king
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      الملك الراحل
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      world capitals
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      العواصم العالمية
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      health problems
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      المتاعب الصحية
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="tawakkol-karman" className="space-y-12">
          {/* Arabic Passage */}
          <div className="space-y-8" dir="rtl">
            <h2 className="text-2xl font-semibold text-center">
              توكل كرمان: ثورة يناير سلمية يجب أن تظل سلمية
            </h2>
            <article className="prose max-w-none text-right">
              <p className="mt-2 text-lg">
                قالت توكل كرمان، الناشطة السياسية اليمنية التي حصلت على جائزة
                نوبل للسلام، إنها تنصح المصريين بأن تظل ثورة يناير سليمة، وألا
                يقابلوا العنف بعنف مثله، لأن الثورات تأتي دائماً للقضاء على
                العنف ورفض الديكتاتورية المستبدة. وقالت كرمان إنه على الثوار أن
                يناضلوا حتى تتحقق جميع مطالبهم العادلة، والتي تتمثل في الحصول
                على الحرية والديمقراطية غير المنقوصة، مشيرة إلى أن الاعتصامات
                السلمية هي البوابة للوصول إلى أهدافهم النبيلة. وأشارت كرمان إلى
                أنها تنصح الأحزاب الإسلامية في مصر بأن تحافظ على أن يظل الدستور
                مدنياً وعدم الانقلاب على مدنية الدولة فور حصولها على الأغلبية
                النيابية. كما أشادت بالانتخابات البرلمانية التي تميزت بالحيادية
                والشفافية.
              </p>
            </article>
          </div>
          {/* English Translation */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-center">
              Tawakkol Karman: The January Revolution Must Remain Peaceful
            </h2>
            <article className="prose max-w-none text-left md:text-justify">
              <p className="mt-2 text-lg">
                Tawakkol Karman, the Yemeni political activist and Nobel Peace
                Prize winner, stated that the January Revolution in Egypt must
                remain peaceful, and urged citizens not to meet violence with
                similar violence, as revolutions inherently seek to end violence
                and reject despotic dictatorship. She added that the
                revolutionaries must continue their struggle until all their
                legitimate demands are met, which include the attainment of
                complete freedom and democracy, noting that peaceful sit-ins are
                the gateway to achieving their noble goals. Furthermore, Karman
                advised the Islamist parties in Egypt to ensure that the
                constitution remains civil and to refrain from undermining the
                state’s civilian character once they secure a parliamentary
                majority. She also praised the parliamentary elections for their
                neutrality and transparency.
              </p>
            </article>
          </div>
          {/* Keywords Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">
              Keywords & Translations / أهم المفردات والتعبيرات
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 border border-gray-300">
                      English Meaning
                    </th>
                    <th
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      الكلمة/التعبير
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      January Revolution remains peaceful
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      تظل ثورة يناير سلمية
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Political activist
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      الناشطة السياسية
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Nobel Peace Prize winner
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      حصلت على جائزة نوبل للسلام
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Meet violence with similar violence
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      يقابلوا العنف بعنف مثله
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      End violence and reject despotic dictatorship
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      للقضاء على العنف ورفض الديكتاتورية المستبدة
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Peaceful sit-ins
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      الاعتصامات السلمية
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Noble goals
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      أهدافهم النبيلة
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Islamist parties
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      الأحزاب الإسلامية
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Civil constitution
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      دستور مدني
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Parliamentary majority
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-300 text-right"
                      dir="rtl"
                    >
                      الأغلبية النيابية
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
