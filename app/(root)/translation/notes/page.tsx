import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Translation Notes",
  description: "Selected Translations Notes",
};

export default function TranslationNotes() {
  const navLinks: NavLink[] = [
    { href: "#lecture-two", label: "Lecture Two" },
    { href: "#lecture-three", label: "Lecture Three" },
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
            <PageTitle title="Translation Notes" />
          </div>
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Translation Notes" />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-8 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
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
                  { en: "far-reaching implications", ar: "آثار بعيده المدي" },
                  { en: "deleterious effects", ar: "آثار وخيمة" },
                  { en: "political realism", ar: "الواقعيه السياسة" },
                  { en: "collective awareness", ar: "الوعي الجمعي" },
                  { en: "collective punishment", ar: "العقاب الجمعي" },
                  { en: "the Home Front", ar: "الجبهة الداخلية" },
                  { en: "Popular Front", ar: "الجبهة الشعبية" },
                  { en: "for the whole world to see", ar: "علي رؤوس الاشهاد" },
                  {
                    en: "a stigma in the forehead of humanity",
                    ar: "وصمة عار في جبين الانسانية",
                  },
                  { en: "lifeline", ar: "طوق نجاة" },
                  { en: "Doctors Without Borders", ar: "أطباء بلا حدود" },
                  { en: "Reporters Without Borders", ar: "مراسلون بلا حدود" },
                  { en: "UN Rapporteur", ar: "مقرره الأمم المتحدة" },
                  { en: "The Hague", ar: "لاهاي" },
                  { en: "a powder keg", ar: "برميل بارود" },
                  { en: "US Treasury Secretary", ar: "وزير الخزانة الأمريكية" },
                  { en: "resilience and response", ar: "الصمود و التصدي" },
                  { en: "resilience and resistance", ar: "الصمود والمقاومة" },
                  { en: "ground maneuver", ar: "مناورة برية" },
                  {
                    en: "calm the inflamed battlefields",
                    ar: "تهدئة ساحات القتال الملتهبة",
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
        </div>
      </div>
    </main>
  );
}
