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
    <main className="page-container">
      <div className="content-layout">
        <aside className="sidebar">
          <Navigation links={navLinks} />
        </aside>
        {/* Body Content */}
        <div className="main-content">
          {/* Title */}
          <PageTitle title="الفول واللحمة" author="Ahmed Fouad Negm" />

          {/* Poem Section */}
          <section
            id="poem"
            className="section-content text-center md:!text-right"
            dir="rtl"
          >
            <h2 className="section-title text-center md:!text-right">
              القصيدة
            </h2>
            <article className="article-block">
              <p
                className="article-paragraph text-center md:!text-right"
                dir="rtl"
              >
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
          <section id="youtube" className="section-content">
            <h2 className="section-title">Video</h2>
            <div className="video-container">
              <div className="video-container-2">
                <iframe
                  src="https://www.youtube.com/embed/eadQz8Wr_Gs?si=6kC732bPcEOGghg2"
                  title="عن موضوع الفول واللحمة"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-frame"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              <p className="section-paragraph">
                The poem "عن موضوع الفول واللحمة" offers a scathing satirical
                critique of the Egyptian government's promotion of beans over
                meat, using humor to highlight the absurdity and hypocrisy of
                this stance. The poem is framed through the character of Dr.
                Mohsen, who is initially portrayed as a credible authority
                figure advocating for beans as a superior source of nutrition.
                However, as the poem progresses, the poet cleverly discredits
                Dr. Mohsen, revealing that his claims are not only illogical but
                self-serving.
              </p>

              <p className="section-subtitle">
                Mockery of the Government's Narrative
              </p>

              <p className="section-paragraph">
                A key satirical element in the poem is Dr. Mohsen's claim that
                beans make people stronger: "حيث الفول المصري عمومًا يجعل من بني
                آدم غول" (Where Egyptian beans, in general, make a human into a
                monster). This hyperbolic statement about beans being a source
                of strength—“غول” (a monster)—mocks the government's attempt to
                convince the public that beans are not only a viable substitute
                for meat but a superior choice. The claim of beans giving people
                such monstrous strength is an exaggerated effort to make the
                policy sound scientifically credible, but it ultimately comes
                across as absurd.
              </p>
              <p className="section-paragraph">
                The poet continues to mock the government’s narrative, citing
                Dr. Mohsen's assertion that beans contain a rare protein that
                cannot be found in any other food: "والبروتين الكامن طيه نادر
                زيه في أيها فول" (And the protein hidden in it is unmatched by
                any other bean). Here, the poet uses Dr. Mohsen's language to
                underscore the far-fetched nature of the government's
                justification for promoting beans over meat. By using such a
                scientific-sounding claim, the poem mocks how authority figures
                often hide behind pseudo-science to support their policies.
              </p>

              <p className="section-subtitle">
                The Dismissal of Meat and its Consequences
              </p>
              <p className="section-paragraph">
                However, the poem takes a critical turn when Dr. Mohsen
                dismisses meat entirely, branding it as harmful: "ثم أضاف
                الدكتور محسن إن اللحمة دي سم أكيد" (Then Dr. Mohsen added that
                this meat is definitely poison). The poet further mocks the
                absurdity of such statements by contrasting the supposed
                benefits of beans with the dangers of eating meat. The
                exaggeration that meat causes "أوجاع المعدة" (stomach pain) and
                leads to "طولة الإيد" (greed or the extension of one's hand to
                take more than one needs) illustrates a mocking view of the
                government’s manipulation of health rhetoric to control food
                choices.
              </p>

              <p className="section-subtitle">
                Shift in Tone: From "Doctor" to "Captain"
              </p>
              <p className="section-paragraph">
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

              <p className="section-subtitle">
                Defying the Authority: A Call for Choice
              </p>
              <p className="section-paragraph">
                The poem culminates in the defiant statement: "إحنا سيبونا نموت
                باللحمة وانتوا تعيشوا وتاكلوا الفول" (Let us die with meat,
                while you live and eat beans). This line serves as a powerful
                challenge to the government’s imposed narrative, suggesting that
                if beans are truly the superior choice, then the government
                should follow its own advice and consume them, while the people
                should be allowed to make their own choices, even if that means
                continuing to eat meat. This direct confrontation of authority
                in the poem highlights the poet's ultimate rejection of the
                government's manipulation.
              </p>

              <p className="section-subtitle">Marginalization and Resistance</p>
              <p className="section-paragraph">
                The poem also illustrates the dynamics of **marginalization**
                within the socio-political context of Egypt. By mocking the
                government's position, the poet brings to light the ways in
                which the poor and working-class people are marginalized. They
                are often left with little choice but to consume beans, a
                cheaper alternative to meat, while the government pushes this
                agenda as a matter of national interest. The fact that beans are
                presented as the superior, even "magical" food, while meat is
                demonized, underscores the disconnection between the reality
                faced by the public and the rhetoric promoted by the government.
              </p>

              <p className="section-subtitle">Satire as Everyday Resistance</p>
              <p className="section-paragraph">
                In this context, **resistance** emerges as a core theme. The
                poem itself is an act of resistance, a tool for those who are
                marginalized and oppressed by the policies of the state. It
                allows the poet—and by extension, the people who feel
                voiceless—to challenge the narrative imposed upon them. The poem
                uses satire as a form of **everyday resistance**, turning an
                official narrative into a laughingstock. The poet ridicules
                authority figures like Dr. Mohsen, not only for their absurd
                claims but for their exploitation of science and medicine to
                manipulate the masses. The people who are forced to live without
                access to quality food are portrayed as the true victims of
                these policies, and through humor, they fight back.
              </p>

              <p className="section-subtitle">Voice of the Marginalized</p>
              <p className="section-paragraph">
                Moreover, the **marginalized** people who cannot afford to buy
                meat are implicitly calling out the elite. By claiming that they
                would rather "die with meat" and mocking the notion that beans
                are a magical cure-all, the poet is vocalizing the desires of
                the common people who resist the limitations placed on them. The
                satire isn't just about rejecting beans in favor of meat; it's
                about reclaiming agency and pushing back against the authority
                that seeks to control their lives.
              </p>

              <p className="section-subtitle">
                A Critique of Authority and Hypocrisy
              </p>
              <p className="section-paragraph">
                In essence, the poem serves as a **critique of authority and
                doublespeak**, highlighting the government's contradictory
                messages and the absurdity of their policies. The humor in the
                poem effectively reveals the flaws in the government's arguments
                and exposes their hypocrisy. Through satire, the poem becomes an
                expression of **resistance**, allowing the marginalized to speak
                out, mock their oppressors, and challenge the status quo in a
                creative and impactful way. By using poetry as a tool, the poet
                not only resists but also inspires others to see through the
                false narratives created by those in power.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              {/* Question 1 */}
              <li className="section-question">
                What is the main theme of the poem?
                <p className="section-answer">
                  The main theme of the poem is a satirical critique of the
                  Egyptian government's promotion of beans over meat. Through
                  humor and exaggeration, the poet mocks the government's claims
                  and exposes the absurdity of their policies, revealing the
                  hypocrisy behind their narrative.
                </p>
              </li>

              {/* Question 2 */}
              <li className="section-question">
                Who is Dr. Mohsen, and what role does he play in the poem?
                <p className="section-answer">
                  Dr. Mohsen is portrayed as the authoritative figure in the
                  poem who advocates for beans as a superior alternative to
                  meat. He represents the government's position on the issue,
                  but as the poem progresses, he is discredited, mocking the
                  government's reliance on pseudo-science to justify their
                  policies. The shift from "Doctor" to "Captain" later in the
                  poem reflects the poet's dismissal of his authority.
                </p>
              </li>

              {/* Question 3 */}
              <li className="section-question">
                How does the poem mock the government's claim about beans?
                <p className="section-answer">
                  The poem mocks the claim that beans make people stronger by
                  exaggerating the effect: "حيث الفول المصري عمومًا يجعل من بني
                  آدم غول" (Where Egyptian beans, in general, make a human into
                  a monster). This hyperbolic statement mocks the government’s
                  attempt to convince the public that beans are not only a
                  viable substitute for meat but a superior choice.
                </p>
              </li>

              {/* Question 4 */}
              <li className="section-question">
                What is the significance of Dr. Mohsen’s claim about the protein
                in beans?
                <p className="section-answer">
                  Dr. Mohsen's claim that beans contain a rare protein that is
                  unmatched by any other food is a key satirical element:
                  "والبروتين الكامن طيه نادر زيه في أيها فول" (And the protein
                  hidden in it is unmatched by any other bean). The poet uses
                  this claim to mock how authority figures often disguise their
                  unsubstantiated claims with scientific-sounding language to
                  justify policies that benefit the elite.
                </p>
              </li>

              {/* Question 5 */}
              <li className="section-question">
                How does the poem criticize the government's stance on meat?
                <p className="section-answer">
                  The poem criticizes the government's stance on meat by calling
                  it harmful: "ثم أضاف الدكتور محسن إن اللحمة دي سم أكيد" (Then
                  Dr. Mohsen added that this meat is definitely poison). The
                  poet mocks the exaggeration of meat’s negative effects,
                  contrasting it with the supposed benefits of beans and
                  exposing the absurdity of these claims.
                </p>
              </li>

              {/* Question 6 */}
              <li className="section-question">
                What does the phrase "طولة الإيد" mean in the context of the
                poem?
                <p className="section-answer">
                  The phrase "طولة الإيد" (the extension of one's hand) refers
                  to greed. The poet uses it to criticize the government’s
                  narrative, implying that meat causes people to desire more
                  than they need. This exaggerates the government's argument
                  that meat is harmful, further ridiculing their claims.
                </p>
              </li>

              {/* Question 7 */}
              <li className="section-question">
                What is the significance of shifting from "Doctor" to "Captain"
                in the poem?
                <p className="section-answer">
                  The shift from "دكتور" (Doctor) to "كابتن" (Captain) marks the
                  poet's rejection of Dr. Mohsen's authority. "ما رأيك ياكابتن
                  محسن" (What do you think, Captain Mohsen) mocks Dr. Mohsen’s
                  credibility, stripping him of his scientific and medical
                  authority. This shift highlights the poet’s dismissal of Dr.
                  Mohsen’s role as an expert and his transformation into a
                  figure of ridicule.
                </p>
              </li>

              {/* Question 8 */}
              <li className="section-question">
                How does the poem challenge the government's imposed narrative?
                <p className="section-answer">
                  The poem challenges the government’s narrative by questioning
                  the legitimacy of their claims. "إحنا سيبونا نموت باللحمة
                  وانتوا تعيشوا وتاكلوا الفول" (Let us die with meat, while you
                  live and eat beans) confronts the government's position,
                  suggesting that if beans are indeed superior, the government
                  should follow its own advice and eat them, while the people
                  should be allowed to choose.
                </p>
              </li>

              {/* Question 9 */}
              <li className="section-question">
                How does the poem reflect the marginalization of poor people?
                <p className="section-answer">
                  The poem highlights the marginalization of poor people who are
                  left with limited options for food. Beans, a cheaper
                  alternative to meat, are promoted as the superior choice, even
                  though many people cannot afford to eat meat. The government’s
                  rhetoric about beans being "magical" and superior underscores
                  the disconnect between the elite and the realities faced by
                  the public.
                </p>
              </li>

              {/* Question 10 */}
              <li className="section-question">
                What does the poem say about the relationship between the
                government and the people?
                <p className="section-answer">
                  The poem suggests that the government is out of touch with the
                  people’s needs. It mocks the government's attempts to impose
                  policies on food choices that ignore the economic reality
                  faced by the poor. The use of humor and satire reflects the
                  frustration of the common people who resist these policies.
                </p>
              </li>

              {/* Question 11 */}
              <li className="section-question">
                How does satire serve as a form of resistance in the poem?
                <p className="section-answer">
                  Satire serves as a form of **everyday resistance** in the
                  poem. By turning the government’s narrative into a
                  laughingstock, the poet challenges authority. The ridicule of
                  Dr. Mohsen and his absurd claims exposes the manipulation and
                  deception of the government, allowing the marginalized to
                  voice their dissatisfaction in a creative way.
                </p>
              </li>

              {/* Question 12 */}
              <li className="section-question">
                How does the poem empower the marginalized?
                <p className="section-answer">
                  The poem empowers the marginalized by giving them a voice. By
                  mocking the government and its policies, the poet vocalizes
                  the frustration and resistance of people who are denied access
                  to quality food. The poem provides an outlet for the
                  marginalized to challenge the status quo and assert their
                  right to make their own choices.
                </p>
              </li>

              {/* Question 13 */}
              <li className="section-question">
                What role does humor play in the poem's critique of authority?
                <p className="section-answer">
                  Humor plays a central role in the poem's critique of
                  authority. By using exaggeration and absurdity, the poet
                  exposes the flaws in the government’s narrative. The humorous
                  tone helps disarm the seriousness of the government’s message,
                  making it easier to expose the hypocrisy and manipulation at
                  play.
                </p>
              </li>

              {/* Question 14 */}
              <li className="section-question">
                How does the poem’s critique of food choices reflect broader
                societal issues?
                <p className="section-answer">
                  The poem's critique of food choices reflects broader societal
                  issues of inequality, class, and economic disparity. It
                  highlights how the government's policies disproportionately
                  affect the poor, who are forced to consume beans as a cheaper
                  alternative to meat. The poem underscores the gap between the
                  elite’s food choices and those of the marginalized.
                </p>
              </li>

              {/* Question 15 */}
              <li className="section-question">
                What is the ultimate message of the poem?
                <p className="section-answer">
                  The ultimate message of the poem is a critique of authority
                  and the manipulation of the public. Through satire, the poet
                  exposes the absurdity of the government's policies and
                  challenges the narrative imposed upon the people. The poem
                  calls for individual choice and resistance against oppressive
                  policies that disregard the realities of everyday life.
                </p>
              </li>
            </ol>
          </section>
        </div>
        {/* Balance Div */}
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
