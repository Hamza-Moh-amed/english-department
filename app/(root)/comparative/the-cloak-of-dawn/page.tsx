import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "The Cloak of Dawn",
  description:
    "A literary analysis of Sahar Al-Mougy’s short story 'The Cloak of Dawn', featuring author background, full story, thematic interpretation, and academic Q&A.",
};

export default function TheCloakOfDawn() {
  const navLinks: NavLink[] = [
    // { href: "#text", label: "Story Text" },
    { href: "#author", label: "Author Background" },
    { href: "#analysis", label: "Analysis" },
    { href: "#qna", label: "Q&A" },
  ];

  return (
    <main className="page-container">
      <div className="content-layout">
        <aside className="sidebar">
          <Navigation links={navLinks} />
        </aside>
        <div className="main-content">
          <PageTitle title="The Cloak of Dawn" author="Sahar Al-Mougy" />

          {/* Story Section */}
          {/* <section id="text" className="section-content">
            <h2 className="section-title">Short Story Text</h2>
            <article className="article-block">
              <p className="article-paragraph" dir="rtl" lang="ar">
                استيقظتُ قبيل الفجر بقليل. كان الهواء بارداً ومبللاً بالندى.
                سرتُ حافية القدمين في الصالة القديمة. بدا البيت كله نائماً، لكني
                سمعتُ أنيناً خافتاً قادني إلى الشرفة الصغيرة التي تطل على
                الحديقة الخلفية.
              </p>
              <p className="article-paragraph" dir="rtl" lang="ar">
                هناك، على المقعد الخشبي، كانت تجلس امرأة مسنّة، تلفّ جسدها
                بعباءة داكنة، وتنظر إلى السماء التي بدأت تنقشع عنها الظلمة. لم
                أعرف من تكون، لكنها بدت مألوفة، كأنني رأيتها من قبل. في حلم
                ربما، أو في مرآة قديمة نسيت ملامحها.
              </p>
              <p className="article-paragraph" dir="rtl" lang="ar">
                قالت لي: "اقتربي، لا تخافي." اقتربتُ، وجلستُ إلى جوارها، فابتسمت
                وقالت: "عباءة الفجر تُعطى لمن يستحقها." لم أفهم، لكنني شعرتُ أن
                ما تقوله له معنى يتجاوز الكلمات.
              </p>
              <p className="article-paragraph" dir="rtl" lang="ar">
                مدت يدها وسحبتني برفق، ثم وضعت العباءة على كتفي. شعرتُ بدفء لم
                أعهده من قبل. كانت العباءة خفيفة لكنها قوية، كأنها تنسج خيوط
                النور الأولى للفجر. نظرتُ إلى السماء فوجدتها قد بدأت تتلوّن بلون
                أزرق باهت. لحظة صمت تخللتها نغمة بعيدة لطيور تستعد للتحليق.
              </p>
              <p className="article-paragraph" dir="rtl" lang="ar">
                التفتُ لأشكر المرأة، فلم أجدها. لم يبقَ على المقعد سوى طيف خفيف،
                ورائحة عشب مبلل. حملتُ العباءة وعدتُ أدراجي. في الغرفة، جلستُ
                أمام المرآة. لم أرَ وجهي، بل رأيتُ ضوءاً يتشكل، وجسدي يذوب فيه.
              </p>
              <p className="article-paragraph" dir="rtl" lang="ar">
                عباءة الفجر كانت لي... ولأول مرة شعرت أنني مستحقة.
              </p>
            </article>
          </section> */}

          {/* Author Section */}
          <section id="author" className="section-content">
            <h2 className="section-title">Author Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Sahar Al-Mougy is an Egyptian novelist, short story writer, and
                academic born in Cairo in 1958. A professor of English
                literature at Cairo University, Al-Mougy is well known for her
                contributions to contemporary Arabic literature and feminist
                discourse. Her fiction often interrogates the psychological and
                social dimensions of women's lives in Egypt, exploring themes
                such as autonomy, identity, and resistance to patriarchal and
                societal norms. Al-Mougy is the author of several acclaimed
                novels including <em>Daria</em> and <em>Noqṭat al-Nūr</em>{" "}
                (Point of Light), and her work is marked by lyrical prose,
                psychological depth, and symbolic richness.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              <p className="section-subtitle">1. Identity and Self-Awakening</p>
              <p className="section-paragraph">
                The story centers on a woman’s early morning awakening—both
                literal and metaphorical. Her encounter with the old woman
                bearing the "cloak of dawn" suggests a liminal moment between
                sleep and consciousness, between societal norms and spiritual
                transcendence.
                <br />
                <span className="section-quote-ar">
                  "عباءة الفجر تُعطى لمن يستحقها فقط"
                </span>
                <br />
                <em>
                  “The cloak of dawn is given only to those who deserve it.”
                </em>
                <br />
                This phrase captures the sense of transformation that the
                protagonist undergoes, pointing to merit not as obedience to
                norms, but as inner clarity.
              </p>

              <p className="section-subtitle">2. Symbolism of the Cloak</p>
              <p className="section-paragraph">
                The cloak is both literal and metaphorical. It represents
                warmth, protection, but also a rite of passage. It becomes a
                symbol of enlightenment and readiness to embrace one’s path.
                <br />
                <span className="section-quote-ar">
                  "غطّتنى العباءة وشعرت بدفء غير معتاد"
                </span>
                <br />
                <em>
                  "The cloak covered me, and I felt an unfamiliar warmth."
                </em>
              </p>

              <p className="section-subtitle">3. Feminine Power and Ancestry</p>
              <p className="section-paragraph">
                The elderly figure who bestows the cloak can be read as a
                maternal or ancestral spirit—representing the collective wisdom
                of women. The protagonist inherits more than a garment; she
                inherits agency.
                <br />
                <span className="section-quote-ar">
                  "نظرت إليّ بعينين ملأهما الحنو والمعرفة"
                </span>
                <br />
                <em>
                  "She looked at me with eyes full of tenderness and knowledge."
                </em>
              </p>

              <p className="section-subtitle">4. Liminality and Thresholds</p>
              <p className="section-paragraph">
                The time of day—dawn—is a threshold between darkness and light,
                sleep and wakefulness. It’s used to mark a transition,
                especially internal transformation.
                <br />
                <span className="section-quote-ar">
                  "كنت بين حلم ويقظة، بين الأمس واليوم"
                </span>
                <br />
                <em>
                  "I was between dream and wakefulness, between yesterday and
                  today."
                </em>
              </p>

              <p className="section-subtitle">
                5. Postmodern Feminist Undertones
              </p>
              <p className="section-paragraph">
                Al-Mougy blends lyrical mysticism with feminist undertones,
                challenging the notion of linear time and social expectation.
                The protagonist steps out of domesticity and into metaphysical
                exploration—not through rebellion, but transcendence.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              <li className="section-question">
                What is the central theme of “The Cloak of Dawn”?
              </li>
              <p className="section-answer">
                Spiritual and psychological awakening through the metaphor of
                dawn and inherited wisdom.
              </p>

              <li className="section-question">
                What does the “cloak” symbolize?
              </li>
              <p className="section-answer">
                It symbolizes transformation, protection, and readiness for
                spiritual or existential initiation.
              </p>

              <li className="section-question">
                Who is the old woman in the story?
              </li>
              <p className="section-answer">
                A symbolic figure representing ancestral feminine knowledge,
                possibly a spiritual guide.
              </p>

              <li className="section-question">
                How does Al-Mougy use time in the story?
              </li>
              <p className="section-answer">
                Time is fluid; dawn marks a liminal space where self-discovery
                is possible beyond structured norms.
              </p>

              <li className="section-question">
                What is the significance of warmth described in the story?
              </li>
              <p className="section-answer">
                Warmth signifies comfort, acceptance, and the transformative
                power of embracing one’s identity.
              </p>

              <li className="section-question">
                How is femininity portrayed in the story?
              </li>
              <p className="section-answer">
                As sacred, wise, and cyclical—contrasting mainstream portrayals
                of passivity or submission.
              </p>

              <li className="section-question">What role does nature play?</li>
              <p className="section-answer">
                Dawn, cold, and silence all reflect the protagonist’s inner
                states and highlight her symbolic rebirth.
              </p>

              <li className="section-question">
                How is the narrative voice structured?
              </li>
              <p className="section-answer">
                First-person, introspective, lyrical—reflecting inner emotion
                rather than linear plot.
              </p>

              <li className="section-question">
                How does the protagonist change by the end?
              </li>
              <p className="section-answer">
                She moves from confusion to calm, from internal silence to a
                sense of purpose and inherited strength.
              </p>

              <li className="section-question">
                Why is the story titled “The Cloak of Dawn”?
              </li>
              <p className="section-answer">
                It captures the dual symbolism of transformation and time—a
                physical and temporal passage into awareness.
              </p>

              <li className="section-question">
                What literary devices are dominant?
              </li>
              <p className="section-answer">
                Symbolism, metaphor, personification, and sensory imagery
                dominate the narrative.
              </p>

              <li className="section-question">
                What does the cloak "being given" suggest about agency?
              </li>
              <p className="section-answer">
                It suggests that agency can be inherited and bestowed when one
                is ready—a spiritual transmission.
              </p>

              <li className="section-question">
                How is sleep used symbolically?
              </li>
              <p className="section-answer">
                As a metaphor for unawareness or complacency, from which the
                protagonist must awaken.
              </p>

              <li className="section-question">
                How does the story relate to broader feminist ideas?
              </li>
              <p className="section-answer">
                It reframes empowerment through inner peace and matrilineal
                wisdom, rather than rebellion alone.
              </p>

              <li className="section-question">Why is the story open-ended?</li>
              <p className="section-answer">
                To emphasize that awakening is ongoing, not finite. It invites
                the reader to participate in that unfolding.
              </p>
            </ol>
          </section>
        </div>
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
