import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "English To Arabic Translation",
  description: "SelectedPassages Tranlated from English to Arabic",
};

export default function EnglishToArabic() {
  const navLinks: NavLink[] = [
    { href: "#egypt-malaysia-leaders", label: "Egypt-Malaysia" },
    {
      href: "#prosecutor-release-students",
      label: "Prosecutor Release Students",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
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
        {/* 
  Section: Egypt, Malaysia leaders stress rejection of Palestinian displacement
  Optimized TailwindCSS structure with Arabic & English inside the same box.
*/}

        <section id="egypt-malaysia-leaders" className="space-y-8">
          {/* Arabic & English in the Same Box */}
          <div className="flex flex-col justify-center">
            <article className="bg-white p-8 rounded-lg shadow-md border border-gray-200 w-full md:w-4/5 lg:w-full">
              {/* English Translation First */}
              <div dir="ltr">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                  Egypt, Malaysia leaders stress rejection of Palestinian
                  displacement
                </h2>
                <p className="text-lg leading-relaxed text-gray-900 text-left">
                  President Abdel Fattah El-Sisi and Malaysian Prime Minister
                  Anwar Ibrahim have emphasized their firm rejection of the
                  displacement of Palestinians from their lands so as to not
                  liquidate the Palestinian cause. During a phone call on
                  Friday, Sisi and Ibrahim discussed Egypt's efforts to
                  implement the ceasefire agreement in the Gaza Strip in
                  cooperation with Qatar and the United States. The talks also
                  highlighted Egypt’s endeavors to deliver humanitarian aid to
                  the Strip to address the humanitarian crisis facing the people
                  of Gaza. The Malaysian prime minister praised Egypt's tireless
                  efforts to support the Palestinian people, stop the bloodshed,
                  and restore calm to the region. Meanwhile, both leaders
                  affirmed the need to intensify international efforts to
                  establish the Palestinian state along the borders of June 4,
                  1967, with East Jerusalem as its capital. They stressed that
                  this objective is the only guarantee for achieving lasting
                  peace in the region and ensuring stability and prosperity for
                  its peoples. Gaza is currently witnessing a relative calm
                  under a ceasefire, brokered by Egypt, Qatar, and the US.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full border-t border-gray-300 my-6"></div>

              {/* Arabic Translation Second */}
              <div dir="rtl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                  قادة مصر وماليزيا يشددان على رفض تهجير الفلسطينيين
                </h2>
                <p className="text-lg leading-relaxed text-gray-900 text-right">
                  أكد الرئيس عبد الفتاح السيسي ورئيس الوزراء الماليزي أنور
                  إبراهيم رفضهما القاطع لتهجير الفلسطينيين من أراضيهم، حتى لا
                  يؤدي ذلك إلى تصفية القضية الفلسطينية. خلال مكالمة هاتفية يوم
                  الجمعة، تناول السيسي وإبراهيم جهود مصر لتنفيذ اتفاق وقف إطلاق
                  النار في قطاع غزة بالتعاون مع دولة قطر والولايات المتحدة. كما
                  سلطت المكالمة الضوء على مساعي مصر لتوصيل المساعدات الإنسانية
                  إلى القطاع لمواجهة الأزمة التي يعاني منها سكان غزة. أشاد رئيس
                  الوزراء الماليزي بالجهود الدؤوبة التي تبذلها مصر لدعم الشعب
                  الفلسطيني، ووقف سفك الدماء، وإعادة الهدوء إلى المنطقة. في
                  الوقت نفسه، أكد الزعيمان ضرورة تكثيف الجهود الدولية لإقامة
                  الدولة الفلسطينية على حدود 4 يونيو عام 1967 وعاصمتها القدس
                  الشرقية. كما شددا على أن هذا الهدف هو الضمان الوحيد لتحقيق
                  سلام دائم في المنطقة وضمان الاستقرار والازدهار لشعوبها. وتشهد
                  غزة حاليًا هدوءًا نسبيًا تحت وقف إطلاق النار الذي تم التوسط
                  فيه من قبل مصر وقطر والولايات المتحدة.
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
                      { en: "displacement", ar: "تهجير" },
                      { en: "ceasefire", ar: "وقف إطلاق النار" },
                      { en: "humanitarian aid", ar: "المساعدات الإنسانية" },
                      { en: "bloodshed", ar: "سفك الدماء" },
                      { en: "Palestinian state", ar: "الدولة الفلسطينية" },
                      { en: "East Jerusalem", ar: "القدس الشرقية" },
                      { en: "rejection", ar: "رفض" },
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
                    <strong>Verb Usage:</strong> The English version uses past
                    tense in the body, while the Arabic translation uses a mix
                    of present and past to align with formal news style.
                  </li>
                  <li>
                    <strong>Conciseness:</strong> Some Arabic phrases were
                    slightly restructured to match journalistic norms while
                    keeping the meaning intact.
                  </li>
                  <li>
                    <strong>Terminology Selection:</strong> "Displacement" was
                    translated as <em>"تهجير"</em> instead of <em>"نزوح"</em> to
                    reflect forced removal.
                  </li>
                  <li>
                    <strong>Fixed Expressions:</strong> "Stop the bloodshed" was
                    translated as <em>"وقف سفك الدماء"</em> instead of a literal
                    translation, ensuring a natural flow.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 
  Section: Prosecutor orders release of students
  Optimized TailwindCSS structure with Arabic & English inside the same box.
*/}

        <section id="prosecutor-release-students" className="space-y-8">
          {/* Arabic & English in the Same Box */}
          <div className="flex flex-col justify-center">
            <article className="bg-white p-8 rounded-lg shadow-md border border-gray-200 w-full md:w-4/5 lg:w-full">
              <div dir="ltr">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                  Prosecutor orders release of 40 Cairo University students
                  detained for past 8 months
                </h2>
                <p className="text-lg leading-relaxed text-gray-900 text-left">
                  The public prosecution has ordered the release of 40 Cairo
                  University students held in custody for the past eight months
                  on suspicion of involvement in on-campus clashes with security
                  forces, the Freedom to the Brave campaign said in a statement
                  issued Thursday. The students were reportedly cleared of the
                  charges after the prosecution’s investigations showed they had
                  no relationship to the violent events that occurred on January
                  16, according to the campaign’s statement. The detained
                  students faced murder charges for the death of fellow student
                  Sherif al-Sawy and the attempted murder of 27 others, as well
                  as protesting without permission and vandalizing university
                  property. Since their arrest eight months ago, the students’
                  detention period was repeatedly extended, and their case was
                  never referred to trial.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full border-t border-gray-300 my-6"></div>

              <div dir="rtl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                  النيابة العامة تفرج عن 40 طالباً من جامعة القاهرة معتقلين منذ
                  ثمانية أشهر
                </h2>
                <p className="text-lg leading-relaxed text-gray-900 text-right">
                  أصدرت النيابة العامة قراراً بالإفراج عن 40 طالباً من جامعة
                  القاهرة كانوا قيد الاحتجاز لمدة ثمانية أشهر، وذلك بتهمة تورطهم
                  في اشتباكات داخل الحرم الجامعي مع قوات الأمن، وفقاً لبيان صادر
                  عن حملة "الحرية للجدعان" يوم الخميس. ووفقاً للبيان، فقد تم
                  تبرئة الطلاب من التهم بعد أن كشفت تحقيقات النيابة عدم ارتباطهم
                  بالأحداث العنيفة التي وقعت في 16 يناير. وُجهت إلى الطلاب
                  المحتجزين اتهامات تتعلق بالقتل في واقعة وفاة زميلهم شريف
                  الصاوي، بالإضافة إلى محاولة قتل 27 شخصاً آخرين، والاحتجاج دون
                  تصريح، وتخريب ممتلكات الجامعة. وخلال فترة احتجازهم التي امتدت
                  لثمانية أشهر، تم تمديد احتجازهم بشكل متكرر دون إحالة قضيتهم
                  إلى المحكمة.
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
                      { en: "public prosecution", ar: "النيابة العامة" },
                      { en: "Freedom to the Brave", ar: "الحرية للجدعان" },
                      {
                        en: "cleared of the charges",
                        ar: "تمت تبرئتهم من التهم",
                      },
                      { en: "ordered the release", ar: "أمرت بالإفراج" },
                      { en: "held in custody", ar: "محتجزين" },
                      { en: "detained", ar: "معتقلين" },
                      { en: "vandalizing", ar: "تخريب ممتلكات" },
                      { en: "involvement", ar: "تورط" },
                      { en: "period detention", ar: "فترة الحبس الاحتياطي" },
                      {
                        en: "on-campus clashes",
                        ar: "اشتباكات داخل الحرم الجامعي",
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
                    <strong>Headline Structure:</strong> Used a{" "}
                    <em>nominal sentence structure</em> (جملة اسمية) in Arabic
                    to align with journalistic style.
                  </li>
                  <li>
                    <strong>Verb Usage:</strong> The <em>headline</em> uses
                    present tense (تأمر), while the <em>body text</em> maintains
                    past tense for better flow.
                  </li>
                  <li>
                    <strong>Conciseness:</strong> The Arabic translation omits
                    redundant words while keeping the full meaning intact.
                  </li>
                  <li>
                    <strong>Terminology Selection:</strong> Used{" "}
                    <em>"معتقلين"</em> instead of <em>"محتجزين"</em> for impact.
                  </li>
                  <li>
                    <strong>Fixed Expressions:</strong> "تمت تبرئتهم" was chosen
                    instead of "يتم تبرئتهم" for proper Arabic syntax.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
