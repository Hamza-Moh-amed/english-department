import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Beans and Meat الفول واللحمة",
  description:
    "A page dedicated to the poem 'الفول واللحمة,' Ahmed Fouad Negm exploring its themes, literary analysis, and a detailed Q&A section.",
};

export default function PoemPage() {
  const navLinks: NavLink[] = [
    { href: "#poem", label: "Poem" },
    { href: "#youtube", label: "Video" },
    { href: "#analysis", label: "Analysis" },
    { href: "#qna", label: "Q&A" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* For medium screens and up: show Navigation on the left and PageTitle centered */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left: Navigation */}
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          {/* Center: PageTitle */}
          <div className="flex-grow text-center">
            <PageTitle title="الفول واللحمة" author="Ahmed Fouad Negm" />
          </div>
          {/* Right: Empty div to balance the left column */}
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="الفول واللحمة" author="Ahmed Fouad Negm" />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Poem Section */}
        <section id="poem" className="space-y-8 text-center" dir="rtl">
          <h2 className="text-2xl font-semibold text-center lg:text-right">
            القصيدة
          </h2>
          <article className="prose max-w-none text-center lg:text-right md:text-justify">
            <p className="text-lg">
              عن موضوع الفول واللحمة
              <br />
              صرح مصدر قال مسئول
              <br />
              <br />
              إن الطب اتقدم جدًا
              <br />
              والدكتور محسن بيقول
              <br />
              <br />
              إن الشعب المصري خصوصًا
              <br />
              من مصلحته يقرقش فول
              <br />
              <br />
              حيث الفول المصري عمومًا
              <br />
              يجعل من بني آدم غول
              <br />
              <br />
              والبروتين الكامن طيه
              <br />
              نادر زيه في أيها فول
              <br />
              <br />
              تاكل فخدة فى ربع زكيبة
              <br />
              والدكتور محسن مسئول
              <br />
              <br />
              يديك طاقة وقوة غريبة
              <br />
              تسمن جدًا تبقى مهول
              <br />
              <br />
              لحمة نباتي ولا في الحاتي
              <br />
              تاكل قدرة تعيش مسطول
              <br />
              -----------------------------
              <br />
              ثم أضاف الدكتور محسن
              <br />
              إن اللحمة دي سم أكيد
              <br />
              <br />
              بتزود أوجاع المعدة
              <br />
              وتعود على طولة الإيد
              <br />
              <br />
              وتنيم بني آدم أكتر
              <br />
              وتفرقع منه المواعيد
              <br />
              <br />
              واللي بياكلو اللحمة عمومًا
              <br />
              هيخشو جهنم تأبيد
              <br />
              -----------------------------
              <br />
              يادكتور محسن يا مزقلط
              <br />
              يا مصدر يا غير مسئول
              <br />
              <br />
              حيث إن إنتو عقول العالم
              <br />
              والعالم محتاج لعقول
              <br />
              <br />
              ما رأى جنابك وجنابهم
              <br />
              في واحد مجنون بيقول
              <br />
              <br />
              إحنا سيبونا نموت باللحمة
              <br />
              وانتوا تعيشوا وتاكلوا الفول
              <br />
              <br />
              ما رأيك ياكابتن محسن
              <br />
              مش بالذمة كلام معقول
            </p>
          </article>
        </section>

        {/* YouTube Embed Section */}
        <section id="youtube" className="space-y-8">
          <h2 className="text-2xl font-semibold text-left">Video</h2>
          <div className="flex justify-center">
            <div className="max-w-4xl w-[600px] h-[360px] lg:w-[800px] lg:h-[400px]">
              <iframe
                src="https://www.youtube.com/embed/eadQz8Wr_Gs?si=6kC732bPcEOGghg2"
                title="عن موضوع الفول واللحمة"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Analysis Section */}
        <section id="analysis" className="space-y-8">
          <h2 className="text-2xl font-semibold">Analysis</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              The poem "عن موضوع الفول واللحمة" offers a scathing satirical
              critique of the Egyptian government's promotion of beans over
              meat, using humor to highlight the absurdity and hypocrisy of this
              stance. The poem is framed through the character of Dr. Mohsen,
              who is initially portrayed as a credible authority figure
              advocating for beans as a superior source of nutrition. However,
              as the poem progresses, the poet cleverly discredits Dr. Mohsen,
              revealing that his claims are not only illogical but self-serving.
            </p>

            <h3 className="text-xl font-semibold">
              Mockery of the Government's Narrative
            </h3>
            <p className="text-lg">
              A key satirical element in the poem is Dr. Mohsen's claim that
              beans make people stronger: "حيث الفول المصري عمومًا يجعل من بني
              آدم غول" (Where Egyptian beans, in general, make a human into a
              monster). This hyperbolic statement about beans being a source of
              strength—“غول” (a monster)—mocks the government's attempt to
              convince the public that beans are not only a viable substitute
              for meat but a superior choice. The claim of beans giving people
              such monstrous strength is an exaggerated effort to make the
              policy sound scientifically credible, but it ultimately comes
              across as absurd.
            </p>
            <p className="text-lg">
              The poet continues to mock the government’s narrative, citing Dr.
              Mohsen's assertion that beans contain a rare protein that cannot
              be found in any other food: "والبروتين الكامن طيه نادر زيه في أيها
              فول" (And the protein hidden in it is unmatched by any other
              bean). Here, the poet uses Dr. Mohsen's language to underscore the
              far-fetched nature of the government's justification for promoting
              beans over meat. By using such a scientific-sounding claim, the
              poem mocks how authority figures often hide behind pseudo-science
              to support their policies.
            </p>

            <h3 className="text-xl font-semibold">
              The Dismissal of Meat and its Consequences
            </h3>
            <p className="text-lg">
              However, the poem takes a critical turn when Dr. Mohsen dismisses
              meat entirely, branding it as harmful: "ثم أضاف الدكتور محسن إن
              اللحمة دي سم أكيد" (Then Dr. Mohsen added that this meat is
              definitely poison). The poet further mocks the absurdity of such
              statements by contrasting the supposed benefits of beans with the
              dangers of eating meat. The exaggeration that meat causes "أوجاع
              المعدة" (stomach pain) and leads to "طولة الإيد" (greed or the
              extension of one's hand to take more than one needs) illustrates a
              mocking view of the government’s manipulation of health rhetoric
              to control food choices.
            </p>

            <h3 className="text-xl font-semibold">
              Shift in Tone: From "Doctor" to "Captain"
            </h3>
            <p className="text-lg">
              The tone of the poem shifts as the poet increasingly rejects Dr.
              Mohsen’s claims. The use of "كابتن" (Captain) in the final
              stanzas, replacing "دكتور" (Doctor), is a significant shift that
              reflects the poet’s complete dismissal of Dr. Mohsen’s authority
              and credibility: "ما رأيك ياكابتن محسن" (What do you think,
              Captain Mohsen). This change signals the poet’s mockery of Dr.
              Mohsen's credibility, turning him into a mere figurehead rather
              than an expert, and underscores the satirical critique of how
              authority figures in the government are seen as out of touch and
              unreliable.
            </p>

            <h3 className="text-xl font-semibold">
              Defying the Authority: A Call for Choice
            </h3>
            <p className="text-lg">
              The poem culminates in the defiant statement: "إحنا سيبونا نموت
              باللحمة وانتوا تعيشوا وتاكلوا الفول" (Let us die with meat, while
              you live and eat beans). This line serves as a powerful challenge
              to the government’s imposed narrative, suggesting that if beans
              are truly the superior choice, then the government should follow
              its own advice and consume them, while the people should be
              allowed to make their own choices, even if that means continuing
              to eat meat. This direct confrontation of authority in the poem
              highlights the poet's ultimate rejection of the government's
              manipulation.
            </p>

            <h3 className="text-xl font-semibold">
              Marginalization and Resistance
            </h3>
            <p className="text-lg">
              The poem also illustrates the dynamics of **marginalization**
              within the socio-political context of Egypt. By mocking the
              government's position, the poet brings to light the ways in which
              the poor and working-class people are marginalized. They are often
              left with little choice but to consume beans, a cheaper
              alternative to meat, while the government pushes this agenda as a
              matter of national interest. The fact that beans are presented as
              the superior, even "magical" food, while meat is demonized,
              underscores the disconnection between the reality faced by the
              public and the rhetoric promoted by the government.
            </p>

            <h3 className="text-xl font-semibold">
              Satire as Everyday Resistance
            </h3>
            <p className="text-lg">
              In this context, **resistance** emerges as a core theme. The poem
              itself is an act of resistance, a tool for those who are
              marginalized and oppressed by the policies of the state. It allows
              the poet—and by extension, the people who feel voiceless—to
              challenge the narrative imposed upon them. The poem uses satire as
              a form of **everyday resistance**, turning an official narrative
              into a laughingstock. The poet ridicules authority figures like
              Dr. Mohsen, not only for their absurd claims but for their
              exploitation of science and medicine to manipulate the masses. The
              people who are forced to live without access to quality food are
              portrayed as the true victims of these policies, and through
              humor, they fight back.
            </p>

            <h3 className="text-xl font-semibold">Voice of the Marginalized</h3>
            <p className="text-lg">
              Moreover, the **marginalized** people who cannot afford to buy
              meat are implicitly calling out the elite. By claiming that they
              would rather "die with meat" and mocking the notion that beans are
              a magical cure-all, the poet is vocalizing the desires of the
              common people who resist the limitations placed on them. The
              satire isn't just about rejecting beans in favor of meat; it's
              about reclaiming agency and pushing back against the authority
              that seeks to control their lives.
            </p>

            <h3 className="text-xl font-semibold">
              A Critique of Authority and Hypocrisy
            </h3>
            <p className="text-lg">
              In essence, the poem serves as a **critique of authority and
              doublespeak**, highlighting the government's contradictory
              messages and the absurdity of their policies. The humor in the
              poem effectively reveals the flaws in the government's arguments
              and exposes their hypocrisy. Through satire, the poem becomes an
              expression of **resistance**, allowing the marginalized to speak
              out, mock their oppressors, and challenge the status quo in a
              creative and impactful way. By using poetry as a tool, the poet
              not only resists but also inspires others to see through the false
              narratives created by those in power.
            </p>
          </div>
        </section>

        {/* Q&A Section */}
        <section id="qna" className="space-y-8">
          <h2 className="text-2xl font-semibold">Questions & Answers</h2>
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold">
              1. What is the main theme of the poem?
            </h3>
            <p className="text-lg">
              The main theme of the poem is a satirical critique of the Egyptian
              government's promotion of beans over meat. Through humor and
              exaggeration, the poet mocks the government's claims and exposes
              the absurdity of their policies, revealing the hypocrisy behind
              their narrative.
            </p>

            <h3 className="text-xl font-semibold">
              2. Who is Dr. Mohsen, and what role does he play in the poem?
            </h3>
            <p className="text-lg">
              Dr. Mohsen is portrayed as the authoritative figure in the poem
              who advocates for beans as a superior alternative to meat. He
              represents the government's position on the issue, but as the poem
              progresses, he is discredited, mocking the government's reliance
              on pseudo-science to justify their policies. The shift from
              "Doctor" to "Captain" later in the poem reflects the poet's
              dismissal of his authority.
            </p>

            <h3 className="text-xl font-semibold">
              3. How does the poem mock the government's claim about beans?
            </h3>
            <p className="text-lg">
              The poem mocks the claim that beans make people stronger by
              exaggerating the effect: "حيث الفول المصري عمومًا يجعل من بني آدم
              غول" (Where Egyptian beans, in general, make a human into a
              monster). This hyperbolic statement mocks the government’s attempt
              to convince the public that beans are not only a viable substitute
              for meat but a superior choice.
            </p>

            <h3 className="text-xl font-semibold">
              4. What is the significance of Dr. Mohsen’s claim about the
              protein in beans?
            </h3>
            <p className="text-lg">
              Dr. Mohsen's claim that beans contain a rare protein that is
              unmatched by any other food is a key satirical element: "والبروتين
              الكامن طيه نادر زيه في أيها فول" (And the protein hidden in it is
              unmatched by any other bean). The poet uses this claim to mock how
              authority figures often disguise their unsubstantiated claims with
              scientific-sounding language to justify policies that benefit the
              elite.
            </p>

            <h3 className="text-xl font-semibold">
              5. How does the poem criticize the government's stance on meat?
            </h3>
            <p className="text-lg">
              The poem criticizes the government's stance on meat by calling it
              harmful: "ثم أضاف الدكتور محسن إن اللحمة دي سم أكيد" (Then Dr.
              Mohsen added that this meat is definitely poison). The poet mocks
              the exaggeration of meat’s negative effects, contrasting it with
              the supposed benefits of beans and exposing the absurdity of these
              claims.
            </p>

            <h3 className="text-xl font-semibold">
              6. What does the phrase "طولة الإيد" mean in the context of the
              poem?
            </h3>
            <p className="text-lg">
              The phrase "طولة الإيد" (the extension of one's hand) refers to
              greed. The poet uses it to criticize the government’s narrative,
              implying that meat causes people to desire more than they need.
              This exaggerates the government's argument that meat is harmful,
              further ridiculing their claims.
            </p>

            <h3 className="text-xl font-semibold">
              7. What is the significance of shifting from "Doctor" to "Captain"
              in the poem?
            </h3>
            <p className="text-lg">
              The shift from "دكتور" (Doctor) to "كابتن" (Captain) marks the
              poet's rejection of Dr. Mohsen's authority. "ما رأيك ياكابتن محسن"
              (What do you think, Captain Mohsen) mocks Dr. Mohsen’s
              credibility, stripping him of his scientific and medical
              authority. This shift highlights the poet’s dismissal of Dr.
              Mohsen’s role as an expert and his transformation into a figure of
              ridicule.
            </p>

            <h3 className="text-xl font-semibold">
              8. How does the poem challenge the government's imposed narrative?
            </h3>
            <p className="text-lg">
              The poem challenges the government’s narrative by questioning the
              legitimacy of their claims. "إحنا سيبونا نموت باللحمة وانتوا
              تعيشوا وتاكلوا الفول" (Let us die with meat, while you live and
              eat beans) confronts the government's position, suggesting that if
              beans are indeed superior, the government should follow its own
              advice and eat them, while the people should be allowed to choose.
            </p>

            <h3 className="text-xl font-semibold">
              9. How does the poem reflect the marginalization of poor people?
            </h3>
            <p className="text-lg">
              The poem highlights the marginalization of poor people who are
              left with limited options for food. Beans, a cheaper alternative
              to meat, are promoted as the superior choice, even though many
              people cannot afford to eat meat. The government’s rhetoric about
              beans being "magical" and superior underscores the disconnect
              between the elite and the realities faced by the public.
            </p>

            <h3 className="text-xl font-semibold">
              10. What does the poem say about the relationship between the
              government and the people?
            </h3>
            <p className="text-lg">
              The poem suggests that the government is out of touch with the
              people’s needs. It mocks the government's attempts to impose
              policies on food choices that ignore the economic reality faced by
              the poor. The use of humor and satire reflects the frustration of
              the common people who resist these policies.
            </p>

            <h3 className="text-xl font-semibold">
              11. How does satire serve as a form of resistance in the poem?
            </h3>
            <p className="text-lg">
              Satire serves as a form of **everyday resistance** in the poem. By
              turning the government’s narrative into a laughingstock, the poet
              challenges authority. The ridicule of Dr. Mohsen and his absurd
              claims exposes the manipulation and deception of the government,
              allowing the marginalized to voice their dissatisfaction in a
              creative way.
            </p>

            <h3 className="text-xl font-semibold">
              12. How does the poem empower the marginalized?
            </h3>
            <p className="text-lg">
              The poem empowers the marginalized by giving them a voice. By
              mocking the government and its policies, the poet vocalizes the
              frustration and resistance of people who are denied access to
              quality food. The poem provides an outlet for the marginalized to
              challenge the status quo and assert their right to make their own
              choices.
            </p>

            <h3 className="text-xl font-semibold">
              13. What role does humor play in the poem's critique of authority?
            </h3>
            <p className="text-lg">
              Humor plays a central role in the poem's critique of authority. By
              using exaggeration and absurdity, the poet exposes the flaws in
              the government’s narrative. The humorous tone helps disarm the
              seriousness of the government’s message, making it easier to
              expose the hypocrisy and manipulation at play.
            </p>

            <h3 className="text-xl font-semibold">
              14. How does the poem’s critique of food choices reflect broader
              societal issues?
            </h3>
            <p className="text-lg">
              The poem's critique of food choices reflects broader societal
              issues of inequality, class, and economic disparity. It highlights
              how the government's policies disproportionately affect the poor,
              who are forced to consume beans as a cheaper alternative to meat.
              The poem underscores the gap between the elite’s food choices and
              those of the marginalized.
            </p>

            <h3 className="text-xl font-semibold">
              15. What is the ultimate message of the poem?
            </h3>
            <p className="text-lg">
              The ultimate message of the poem is a critique of authority and
              the manipulation of the public. Through satire, the poet exposes
              the absurdity of the government's policies and challenges the
              narrative imposed upon the people. The poem calls for individual
              choice and resistance against oppressive policies that disregard
              the realities of everyday life.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
