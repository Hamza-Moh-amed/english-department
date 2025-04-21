import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Space of My Heart",
  description:
    "A poetic exploration of Ali Salama’s 'Masahat Qalbi', featuring the Arabic poem, author bio, translation, literary analysis, and discussion questions.",
};

export default function SpaceOfMyHeart() {
  const navLinks: NavLink[] = [
    { href: "#poem", label: "Poem" },
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
          <PageTitle title="Space of My Heart" author="Ali Salama" />

          {/* Poem Section */}
          <section id="poem" className="section-content">
            <h2 className="section-title">Poem (Arabic & English)</h2>
            <article className="article-block">
              <p className="section-quote-ar">أنا بخير.. وزي الفل والريحان</p>
              <p className="section-quote-en">
                I’m fine... like jasmine and basil.
              </p>

              <p className="section-quote-ar">وقلبي اللي كبر فجأة قبل الأوان</p>
              <p className="section-quote-en">
                And my heart that suddenly grew too soon
              </p>

              <p className="section-quote-ar">
                لا بيعجّز.. ولا بيشيخ.. ولسه طفل زي زمان
              </p>
              <p className="section-quote-en">
                Doesn’t age or grow old... still a child like before.
              </p>

              <p className="section-quote-ar">
                بطعم الفرح.. وريحة الأرض ساعة المطر
              </p>
              <p className="section-quote-en">
                With the taste of joy and scent of earth at rain's first drop.
              </p>

              <p className="section-quote-ar">
                ورغم إني ف قلب الخطر.. أنا حاسس إن الدنيا لسه أمان
              </p>
              <p className="section-quote-en">
                Though I’m in danger’s heart... I still feel the world is safe.
              </p>

              <p className="section-quote-ar">
                وأقلق ليه؟ وأنا أمي لما تدعيلي كانت تقول: تعيش حر.. كما العصفور
              </p>
              <p className="section-quote-en">
                And why should I worry? My mother used to pray: “Live free, like
                a bird.”
              </p>

              <p className="section-quote-ar">
                وأقلق ليه؟ ما دام النسمة وصلاني..
              </p>
              <p className="section-quote-en">
                And why should I worry? As long as the breeze reaches me...
              </p>

              <p className="section-quote-ar">مساحة قلبي قد الكون</p>
              <p className="section-quote-en">
                The space of my heart is as wide as the universe.
              </p>
            </article>
          </section>

          {/* Author Background */}
          <section id="author" className="section-content">
            <h2 className="section-title">Author Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Ali Salama is a modern Egyptian poet whose work often blends
                colloquial Egyptian Arabic with themes of psychological
                resilience, spiritual growth, and existential clarity. Known for
                his emotional transparency and lyrical metaphors, Salama’s
                poetry appeals to younger audiences navigating uncertainty and
                inner conflict. His style reflects Sufi and folkloric rhythms
                while remaining grounded in contemporary sociopolitical
                realities. He is also an advocate for mental health awareness in
                the Arab world.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              <p className="section-subtitle">
                1. Poetic Voice and Emotional State
              </p>
              <p className="section-paragraph">
                The speaker asserts their wellness (“أنا بخير”) in a way that
                feels both defiant and hopeful. The juxtaposition of childlike
                innocence with existential wisdom sets a meditative tone. His
                heart remains a “طفل” (child), even though it has “كبر فجأة”
                (suddenly grown).
              </p>

              <p className="section-subtitle">2. Resistance to Fear</p>
              <p className="section-paragraph">
                The recurring phrase “وأقلق ليه؟” (“Why should I worry?”)
                becomes a poetic refrain resisting despair. This rhetorical
                question flips fear into resilience, framing inner peace as an
                act of political and spiritual defiance.
              </p>

              <p className="section-subtitle">3. Mother as Moral Anchor</p>
              <p className="section-paragraph">
                The mother’s prayer—“تعيش حر كما العصفور” (“Live free like a
                bird”)—invokes a legacy of hope and moral dignity. She
                represents rooted wisdom and the cultural role of maternal
                figures in cultivating resistance through tenderness.
              </p>

              <p className="section-subtitle">4. Nature as Metaphor</p>
              <p className="section-paragraph">
                The poet leans on natural imagery: rain, breeze, basil, jasmine,
                and birds. These are not decorative but deeply symbolic,
                suggesting purity, grounding, and the cyclical nature of
                renewal.
              </p>

              <p className="section-subtitle">5. Expansiveness of the Heart</p>
              <p className="section-paragraph">
                The poem’s title and climax—“مساحة قلبي قد الكون” (“The space of
                my heart is as vast as the universe”)—transforms the speaker’s
                emotional state into something cosmic. This spiritual
                expansiveness becomes a gesture of universal compassion.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              <li className="section-question">
                What tone does the speaker adopt in the poem?
              </li>
              <p className="section-answer">
                A tone of quiet strength, resilience, and hopeful defiance.
              </p>

              <li className="section-question">
                What is the significance of the child metaphor for the heart?
              </li>
              <p className="section-answer">
                It emphasizes emotional purity and openness despite hardship.
              </p>

              <li className="section-question">
                How does the poem use nature as a theme?
              </li>
              <p className="section-answer">
                Nature reflects inner peace—elements like rain and breeze
                symbolize healing and clarity.
              </p>

              <li className="section-question">
                What role does the mother play in the poem?
              </li>
              <p className="section-answer">
                She provides spiritual grounding and models faith and freedom.
              </p>

              <li className="section-question">
                Why is the poem titled “The Space of My Heart”?
              </li>
              <p className="section-answer">
                To highlight the boundless emotional capacity of the speaker,
                suggesting limitless love and resilience.
              </p>

              <li className="section-question">
                What refrain is repeated in the poem and why?
              </li>
              <p className="section-answer">
                “وأقلق ليه؟” — It emphasizes calm in the face of chaos,
                transforming worry into empowerment.
              </p>

              <li className="section-question">
                What poetic devices are most dominant?
              </li>
              <p className="section-answer">
                Repetition, metaphor, symbolism, and parallelism.
              </p>

              <li className="section-question">
                How does the poem resist victimhood?
              </li>
              <p className="section-answer">
                By asserting control over emotional responses and invoking
                ancestral strength.
              </p>

              <li className="section-question">
                What does the heart symbolize in this poem?
              </li>
              <p className="section-answer">
                A spiritual and emotional core that remains unbroken and
                generous.
              </p>

              <li className="section-question">
                Is this poem political in any way?
              </li>
              <p className="section-answer">
                Yes, through its spiritual resistance to systemic fear and
                alienation.
              </p>

              <li className="section-question">
                How is space conceptualized poetically?
              </li>
              <p className="section-answer">
                As emotional capacity—the heart expands infinitely to hold joy,
                pain, and love.
              </p>

              <li className="section-question">
                What is the significance of sensory imagery?
              </li>
              <p className="section-answer">
                It draws on smells, sounds, and textures to create a lived
                experience of serenity.
              </p>

              <li className="section-question">
                How might this poem relate to mental health themes?
              </li>
              <p className="section-answer">
                It emphasizes emotional self-regulation, hope, and the healing
                power of memory and nature.
              </p>

              <li className="section-question">
                How does the use of colloquial Arabic impact tone?
              </li>
              <p className="section-answer">
                It adds authenticity and intimacy, making the message more
                personal and culturally grounded.
              </p>

              <li className="section-question">
                What feeling does the poem leave the reader with?
              </li>
              <p className="section-answer">
                A sense of inner peace, quiet resistance, and connectedness to a
                broader, universal love.
              </p>
            </ol>
          </section>
        </div>
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
