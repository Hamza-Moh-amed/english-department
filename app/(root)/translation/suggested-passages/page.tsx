import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "4th Year Suggested Passages",
  description:
    "A collection of suggested passages for fourth-year students featuring both English and Arabic content.",
};

export default function FourthYearPassages() {
  const navLinks: NavLink[] = [
    { href: "#english", label: "English Passages" },
    // { href: "#arabic", label: "المقاطع العربية" },
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
            <PageTitle
              title="4th Year Suggested Passages"
              author="Various Sources"
            />
          </div>
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle
            title="4th Year Suggested Passages"
            author="Various Sources"
          />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-8 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* English Passages Section */}
        <section id="english" className="space-y-8">
          <h2 className="text-2xl font-semibold">English Passages</h2>
          <article className="prose max-w-none text-left md:text-justify">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">
                1. Egypt, Malaysia leaders stress rejection of Palestinian
                displacement
              </h3>
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
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">
                2. Former al Qaeda member named as Syria’s president for
                transitional period
              </h3>
              <p className="mt-2 text-lg">
                Former al Qaeda member Ahmad al-Sharaa, also known as Abu
                Mohammad al-Jolani, has been named as Syria’s president for a
                transitional period. “We announce the appointment of Commander
                Ahmad al-Sharaa as head of state during the transitional period.
                He will assume the duties of the president of the Syrian Arab
                Republic and represent the country in international forums,”
                Commander Hassan Abdel Ghani, spokesman for the Syria Military
                Operations Command, said in a statement. “The president is
                authorized to form a temporary legislative council for the
                transitional phase, which will carry out its duties until a
                permanent constitution is enacted and put into effect,” Ghani
                added. The command also announced several resolutions, including
                the suspension of the country’s constitution, the dissolution of
                the country’s parliament, and the dissolution of the former
                regime’s army and its Baath party. Al-Sharaa was the leader of
                the main militant group that spearheaded the lightning offensive
                that led to the overthrow last year of Syrian dictator Bashar
                al-Assad, whose regime had been in power for several decades.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">
                3. IMF to unveil new loan package for Egypt
              </h3>
              <p className="mt-2 text-lg">
                The IMF plans to unveil a new loan agreement with Egypt for
                approval by its board, the global lender's communications chief
                said Thursday, as the country looks to strengthen its economy.
                “A policy package of reforms will be considered by the Fund's
                executive board, along with the fourth review of Egypt's
                program,” International Monetary Fund communications director
                Julie Kozack told reporters in Washington. Kozack said the new
                planned loan agreement would take the form of a Resilience and
                Sustainability Facility (RSF), designed in part to help
                countries tackle climate change, adding that she could not yet
                confirm how large it will be. Last year, the IMF expanded its
                existing loan package from $3 billion to $8 billion to help
                Egypt manage its economic challenges amid regional instability
                unleashed by the war in Gaza. A draft agreement was reached on a
                review of Egypt's existing loan program back in December which
                should unlock an additional $1.2 billion to help the Egyptian
                economy as it battles a series of headwinds. Repeated attacks on
                Red Sea shipping by Yemen's Huthi rebels in support of
                Palestinians in Gaza caused Egypt's revenues from the Suez Canal
                – a key foreign currency earner – to plummet.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">
                4. Egypt Culture Ministry Designates 2025 Year of Um Kalthoum
              </h3>
              <p className="mt-2 text-lg">
                The Ministry of Culture has designated 2025 as the Year of Um
                Kalthoum, launching a year-long celebration to commemorate the
                50th anniversary of the legendary Egyptian singer’s death. In an
                official press release, the ministry announced its comprehensive
                programme of events and activities to highlight Um Kalthoum’s
                musical legacy and profound impact on the Arab world. The
                ministry added that it will organize local, regional, and
                international concerts featuring prominent Arab singers
                performing Um Kalthoum's songs in contemporary styles while
                preserving their authenticity. Moreover, the Cairo Opera House
                will host several events commemorating the Star of the Orient in
                Egypt and the Arab world. The opera will also present two
                special concerts at the Arab Music Institute and a nationwide
                talent competition, Discovering Um Kaulthoum 2025, which aims to
                find young singers who resemble her. Furthermore, the Cairo
                International Book Fair is dedicating a special segment to Um
                Kalthoum, which includes musical performances and an exhibition
                of rare documents and photographs at the National Library and
                Archives.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">5. Finished fifth</h3>
              <p className="mt-2 text-lg">
                Egypt’s national handball team delivered a strong performance at
                the 2025 Men’s World Championship, finishing in an impressive
                fifth place. The result marks another solid showing for the
                Pharaohs on the global stage, but reactions to their campaign
                have been mixed, with both praise and criticism directed at the
                team. The championship was ultimately won by Denmark who
                defeated Croatia 32-26 in a commanding final to claim their
                fourth consecutive world title. Spain claimed the bronze medal
                after edging past France in a thrilling third-place match.
                Despite falling short of a medal, Egypt’s strong performance in
                the tournament, which was held jointly by Croatia, Denmark and
                Norway against the world’s best teams, showed they are a growing
                force in global handball. Egypt began their campaign with a
                relatively easy 39-25 win over Argentina. Despite the
                comfortable margin, Egypt showed resilience, with goalkeeper
                Mohamed Ali making crucial saves, and key players stepping up in
                pivotal moments. Their second match, against Bahrain, proved to
                be a defining moment in their tournament. Egypt secured a 35-24
                win in a thrilling encounter, with Ali again playing a pivotal
                role, making several crucial saves. Omar Yahia’s six goals also
                proved instrumental in securing the victory.
              </p>
            </div>
          </article>
        </section>
        {/* Arabic Passages Section */}
        {/* <section id="arabic" className="space-y-8">
          <h2 className="text-2xl font-semibold">المقاطع العربية</h2>
          <article className="prose max-w-none" dir="rtl">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">
                1. عمرو القاضي: مصر ستفتتح معالم سياحية مهمة خلال الفترة القادمة
                -6
              </h3>
              <p className="mt-2 text-lg">
                أكد عمرو القاضي الرئيس التنفيذي للهيئة المصرية العامة للتنشيط
                السياحي، التنوع السياحي الذي تتميز به مصر مستعرضاً إستراتيجية
                ورؤية الوزارة الحالية التي تركز على إبراز تنوع الإمكانيات
                والمقومات السياحية المتميزة بمصر لتكون المقصد. كما أشار خلال
                مشاركته في بورصة Unmatched Diversity إلى أن مصر تشهد نمواً غير
                مسبوق في أعداد السائحين خلال عام 2024، مما يعكس الأمان والتنوع
                الذي تتمتع به البلاد في القطاع السياحي.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">
                2. هل يكفي استقرار الجنيه وتراجع التضخم لدفع عجلة نمو الاقتصاد
                المصري؟ -7
              </h3>
              <p className="mt-2 text-lg">
                بعد أزمة ميزان التجارة وتقلبات سوق الصرف، بدأ الاقتصاد المصري في
                استعادة توازنه. رغم التفاؤل المدعوم من المساعدات الدولية، لا
                تزال التحديات الهيكلية قائمة. يتساءل البعض عما إذا كان استقرار
                الجنيه وتراجع التضخم كافيين لدفع عجلة النمو، أم أن الإصلاحات
                المطلوبة لا تزال في منتصف الطريق.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">
                3. المؤسسات الدولية تشيد بنجاح مصر فى تطبيق »التأمين الصحى
                الشامل« وتدعم المراحل المقبلة -8
              </h3>
              <p className="mt-2 text-lg">
                كل به يتمتع واقعا تكون وأقرب لأن أكثر وضوحا أصبحت المواطنين،
                لجميع الشامل الصحى التأمين تحقيق الدولة رؤية المصريين خلال سنوات
                معدودة، من خلال تقديم الخدمات الصحية الكاملة وذلك مع قرب
                الانتهاء من المرحلة الأولى لمنظومة. إلى المحليين والأجانب،
                الشركاء العديد بالتعاون مع المالية، لتحقيق الاستدامة المبذولة
                الشامل، والجهود التأمين الصحى الصحية من خلال نظم حديثة ومتطورة
                الخدمات التعامل مع ثقافة تغيير البنك. جانب الدولية ومنها
                المؤسسات إشادة وجاءت التجربة نجاح لتؤكد الشامل، الصحى التأمين
                منظومة تطبيق فى الرائدة مصر بتجربة العالمية، الصحة ومنظمة الدولى
                عام فى المشروع مراحل كافة من الانتهاء وتستهدف مصر الشامل الصحى
                التأمين مجال فى كل 2032المصرية ليتمتع، والصحة العلاج على الإنفاق
                نتيجة الفقر فى الوقوع إمكانية عنهم وتبعد الأمان لهم توفر شاملة
                صحية بتغطية المصريين. الإرادة السياسية القوية، هى الدافع الحقيقى
                كانت وتمكنهم من إدارة ميزانيتهم وتكاليف المعيشة بشكل أفضل كفاءة
                وأمان لتبنى مشروع التأمين الصحى الشامل، ليكون بديلا عن نظام
                التأمين الصحى التقليدى والذى لا يوفر التغطية الصحية الكاملة
                المواطنين الانسان. لجميع تنمية المواطن وحرصها على الدولة لأهمية
                تقدير شهادة على الشامل، الصحي التأمين نظام ويعد ودعمه، إيمانا
                بأن الاستثمار فى البشر هو الاستثمار الحقيقى وأساس التنمية
                الاقتصادية والاجتماعية.
              </p>
            </div>
          </article>
        </section> */}
      </div>
    </main>
  );
}
