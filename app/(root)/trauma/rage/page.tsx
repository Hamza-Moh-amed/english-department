import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";
import YoutubeFastPlayerWrapper from "@/components/YoutubeFastPlayerWrapper";

export const metadata = {
  title: "Rage",
  description:
    "A page dedicated to the poem 'Rage' by Mary Oliver, exploring its themes, literary analysis, and a detailed exploration of trauma and PTSD.",
};

export default function Rage() {
  const navLinks: NavLink[] = [
    { href: "#poem", label: "Poem" },
    { href: "#return", label: "Our story" },
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
        {/* Body Content */}
        <div className="main-content">
          {/* Title */}
          <PageTitle title="Rage" author="Mary Oliver" />

          {/* Poem Section */}
          <section id="poem" className="section-content">
            <h2 className="section-title">Poem</h2>
            <article className="article-block">
              <p className="article-paragraph">
                You are the dark song
                <br />
                of the morning;
                <br />
                serious and slow,
                <br />
                you shave, you dress,
                <br />
                you descend the stairs
                <br />
                in your public clothes
                <br />
                and drive away, you become
                <br />
                the wise and powerful one
                <br />
                who makes all the days
                <br />
                possible in the world.
                <br />
                But you were also the red song
                <br />
                in the night,
                <br />
                stumbling through the house
                <br />
                to the child’s bed,
                <br />
                to the damp rose of her body,
                <br />
                leaving your bitter taste.
                <br />
                And forever those nights snarl
                <br />
                the delicate machinery of the days.
                <br />
                When the child’s mother smiles
                <br />
                you see on her cheekbones
                <br />
                a truth you will never confess;
                <br />
                and you see how the child grows–
                <br />
                timidly, crouching in corners.
                <br />
                Sometimes in the wide night
                <br />
                you hear the most mournful cry,
                <br />
                a ravished and terrible moment.
                <br />
                In your dreams she’s a tree
                <br />
                that will never come to leaf–
                <br />
                in your dreams she’s a watch
                <br />
                you dropped on the dark stones
                <br />
                till no one could gather the fragments–
                <br />
                in your dreams you have sullied and murdered,
                <br />
                and dreams do not lie.
              </p>
            </article>
          </section>

          {/* Our story of rape Video */}
          <section id="return" className="section-content">
            <h2 className="section-title">Our story of rape</h2>
            <div className="video-container">
              <div className="video-container-2">
                <iframe
                  src="https://www.youtube.com/embed/gyPoqFcvt9w?si=d8-SpPB5iKmwiflW"
                  title="Our story of rape and reconciliation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-frame"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Author Background Section */}
          <section id="author" className="section-content">
            <h2 className="section-title">Author Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Mary Oliver was an American poet known for her clear and
                accessible verse, often exploring themes of nature, love, and
                spirituality. Born in 1935, Oliver published numerous poetry
                collections that won many prestigious awards, including the
                Pulitzer Prize for Poetry in 1984 for her collection *American
                Primitive*. Her poetry is characterized by deep connections to
                nature, often reflecting a search for peace and understanding
                within the natural world.
              </p>
              <p className="section-paragraph">
                Oliver's work often conveys the intimate relationship between
                the human spirit and the environment, using simple, yet vivid,
                language to communicate complex emotional truths. She lived in
                Provincetown, Massachusetts, for much of her life, where her
                close connection to the land and her observations of nature
                shaped her poetic voice.
              </p>
              <p className="section-paragraph">
                Her work is widely celebrated for its celebration of quiet
                moments and for its exploration of how we find meaning and
                healing through the natural world. Her poetry continues to
                resonate with readers for its insights into the human condition,
                the transience of life, and the power of nature to heal
                emotional wounds.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              {/* Analysis Point 1: Themes */}
              <p className="section-subtitle">
                1. Themes: Abuse, Duality, Guilt, and Irreparable Damage
              </p>
              <p className="section-paragraph">
                Mary Oliver's *Rage* confronts the devastating impact of
                domestic abuse from the perspective of the abuser. The poem
                delves into the contrast between public virtue and private
                violence, examining the long-term consequences of trauma on a
                child and the haunting guilt that follows the abuser into dreams
                and memory.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "And forever those nights snarl / the delicate machinery of
                  the days."
                </em>
              </p>
              <p className="section-paragraph">
                This line encapsulates the poem’s central idea: violence, though
                often hidden, disrupts the flow of life indefinitely. The
                emotional and psychological wreckage is not confined to the
                moment—it seeps into every future interaction and day.
              </p>

              {/* Analysis Point 2: Tone */}
              <p className="section-subtitle">
                2. Tone: Condemning, Haunting, Lyrical
              </p>
              <p className="section-paragraph">
                The tone of the poem is deeply condemning and filled with quiet
                fury. Although the language is lyrical and restrained, there is
                an undercurrent of emotional devastation and moral reckoning.
                The tone sharpens in the later stanzas as guilt manifests into
                nightmare imagery.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "In your dreams you have sullied and murdered, / and dreams do
                  not lie."
                </em>
              </p>
              <p className="section-paragraph">
                This stark ending delivers a final, undeniable truth: the
                subconscious cannot be fooled by public appearances or
                self-deception. The guilt lives on.
              </p>

              {/* Analysis Point 3: Structure and Point of View */}
              <p className="section-subtitle">
                3. Structure and Point of View: Second Person Address
              </p>
              <p className="section-paragraph">
                The poem is told in the second person, directly addressing the
                abuser. This technique intensifies the emotional impact, forcing
                an unflinching confrontation. There’s a subtle shift between
                external observation and internal psychological dissection.
              </p>
              <p className="section-quote">
                <em className="section-quote-em">
                  "You are the dark song / of the morning"
                </em>
              </p>
              <p className="section-paragraph">
                Using second person creates an accusatory tone while also
                implicating the reader, making the abuse and its echoes more
                visceral and harder to distance from.
              </p>

              {/* Analysis Point 4: Imagery and Symbolism */}
              <p className="section-subtitle">
                4. Imagery and Symbolism: Night vs. Day, Tree, Watch
              </p>
              <p className="section-paragraph">
                Night and day represent the abuser’s dual life—respectable in
                public, monstrous in private. Oliver also uses potent metaphors
                to symbolize the lasting damage of abuse: the child becomes a
                "tree / that will never come to leaf" and a "watch / you dropped
                on the dark stones." These images reflect stunted growth and
                irreversible emotional shattering.
              </p>
              <p className="section-quote">
                <em className="section-quote-em">
                  "In your dreams she’s a watch / you dropped on the dark stones
                  / till no one could gather the fragments—"
                </em>
              </p>
              <p className="section-paragraph">
                The metaphor of the watch suggests both the destruction of
                innocence and time—it cannot be undone or rewound. The damage is
                permanent.
              </p>

              {/* Analysis Point 5: Psychological Consequences */}
              <p className="section-subtitle">
                5. Psychological Consequences: Repression and Haunting Memory
              </p>
              <p className="section-paragraph">
                The poem deals as much with memory as it does with action. The
                abuser continues to be haunted—not only by what was done, but by
                the visible effects on the child and mother. The speaker
                acknowledges that some truths can never be spoken, but they
                linger on the face of the survivor.
              </p>
              <p className="section-quote">
                <em className="section-quote-em">
                  "When the child’s mother smiles / you see on her cheekbones /
                  a truth you will never confess;"
                </em>
              </p>
              <p className="section-paragraph">
                These lines portray how trauma leaves its mark—not only on the
                body but on expression, gesture, and emotional presence. Even
                silence speaks.
              </p>

              {/* Analysis Point 6: Duality and Self-Deception */}
              <p className="section-subtitle">6. Duality and Self-Deception</p>
              <p className="section-paragraph">
                The poem explores the disturbing duality of the abuser’s
                identity: a respectable figure by day and a violent presence by
                night. This duality is key to understanding how abuse is hidden
                and rationalized, both by society and within the abuser’s mind.
              </p>
              <p className="section-quote">
                <em className="section-quote-em">
                  "you become / the wise and powerful one / who makes all the
                  days / possible in the world."
                </em>
              </p>
              <p className="section-paragraph">
                The irony is piercing—this public role of stability contrasts
                sharply with the chaos wrought in private. Oliver confronts the
                reader with this hypocrisy head-on.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              {/* Question 1 */}
              <li className="section-question">
                What does the "dark song of the morning" symbolize in the poem?
                <p className="section-answer">
                  The "dark song of the morning" represents the sense of
                  foreboding or unresolved pain that exists at the start of the
                  day. It sets the tone for the dual nature of the speaker's
                  life, where both light and darkness coexist.
                </p>
              </li>

              {/* Question 2 */}
              <li className="section-question">
                What role does the "red song in the night" play in the poem's
                imagery?
                <p className="section-answer">
                  The "red song in the night" symbolizes the internal chaos and
                  trauma of the speaker, contrasting with the calm exterior of
                  the morning. It also suggests a sense of violence or emotional
                  disruption that lingers at night, affecting the speaker's
                  mental and emotional state.
                </p>
              </li>

              {/* Question 3 */}
              <li className="section-question">
                How does the poem present the impact of trauma on the speaker's
                relationship with the child?
                <p className="section-answer">
                  The poem portrays how trauma has seeped into the speaker's
                  interactions with the child, causing the child to grow
                  "timidly" and "crouch in corners." The mother's unspoken
                  truth, represented by the "cheekbones," symbolizes the hidden
                  scars that the child internalizes.
                </p>
              </li>

              {/* Question 4 */}
              <li className="section-question">
                How do the "delicate machinery of the days" relate to the poem's
                theme of trauma?
                <p className="section-answer">
                  The "delicate machinery of the days" represents the fragility
                  of daily life, which is disrupted by the trauma experienced
                  during the night. Trauma is shown to distort the ordinary,
                  making the speaker's routine feel less stable and more
                  difficult to navigate.
                </p>
              </li>

              {/* Question 5 */}
              <li className="section-question">
                What is the significance of the "mournful cry" heard in the
                poem?
                <p className="section-answer">
                  The "mournful cry" symbolizes the deep emotional pain and
                  grief that cannot be fully expressed. It represents the
                  rawness of the trauma, which continues to haunt the speaker,
                  even in dreams or moments of silence.
                </p>
              </li>

              {/* Question 6 */}
              <li className="section-question">
                How does the metaphor of the tree in the speaker's dreams relate
                to PTSD?
                <p className="section-answer">
                  The tree that "will never come to leaf" symbolizes emotional
                  numbness and the inability to grow or heal from trauma. PTSD
                  is reflected here as the trauma stunts the speaker's emotional
                  development and their capacity for renewal.
                </p>
              </li>

              {/* Question 7 */}
              <li className="section-question">
                What is the symbolic meaning of the "watch you dropped on the
                dark stones"?
                <p className="section-answer">
                  The dropped watch symbolizes broken time, lost moments, and
                  the irreparability of trauma. It suggests that the trauma has
                  scattered and disrupted the speaker's perception of time,
                  leaving them unable to gather the fragments of their former
                  life.
                </p>
              </li>

              {/* Question 8 */}
              <li className="section-question">
                How do the dreams in the poem reflect the speaker's inner
                turmoil?
                <p className="section-answer">
                  The dreams, where the speaker "sullied and murdered,"
                  symbolize the intrusive thoughts and guilt associated with
                  trauma. Dreams serve as an unfiltered expression of the
                  speaker's subconscious, revealing the depth of their emotional
                  and psychological scars.
                </p>
              </li>

              {/* Question 9 */}
              <li className="section-question">
                What does the "bitter taste" in the poem symbolize?
                <p className="section-answer">
                  The "bitter taste" symbolizes the lingering effects of trauma
                  and guilt that the speaker experiences. It represents an
                  emotional aftertaste that continues to affect the speaker long
                  after the traumatic event has occurred.
                </p>
              </li>

              {/* Question 10 */}
              <li className="section-question">
                What is the significance of the "damp rose of her body" in the
                poem?
                <p className="section-answer">
                  The "damp rose of her body" evokes an image of vulnerability
                  and fragility. It symbolizes the child's innocence and
                  suffering, as well as the intimate connection between the
                  speaker and the child, which is overshadowed by trauma.
                </p>
              </li>

              {/* Question 11 */}
              <li className="section-question">
                How does the poem convey the speaker's feelings of guilt?
                <p className="section-answer">
                  The speaker expresses guilt through the metaphor of their
                  dreams, where they are complicit in acts of harm ("sullied and
                  murdered"). These feelings of guilt reflect the trauma they
                  carry, constantly confronting them in both waking life and
                  dreams.
                </p>
              </li>

              {/* Question 12 */}
              <li className="section-question">
                How does the speaker's perception of time shift throughout the
                poem?
                <p className="section-answer">
                  The speaker's perception of time is fragmented, represented by
                  the "watch" that "no one could gather the fragments." Trauma
                  warps their ability to perceive the past and present clearly,
                  creating a disjointed relationship with time and reality.
                </p>
              </li>

              {/* Question 13 */}
              <li className="section-question">
                How does the speaker's identity evolve in the poem?
                <p className="section-answer">
                  The speaker's identity is fractured by trauma, as seen through
                  the contrast between their role in the morning (a "wise and
                  powerful one") and their actions at night (haunted by trauma).
                  The speaker struggles with reconciling these identities, which
                  are both shaped and distorted by their past experiences.
                </p>
              </li>

              {/* Question 14 */}
              <li className="section-question">
                What does the "snarling" of the days suggest about the speaker's
                internal conflict?
                <p className="section-answer">
                  The "snarling" of the days reflects the inner chaos and
                  conflict that trauma creates. The metaphor suggests that the
                  speaker's life is constantly disrupted, unable to maintain the
                  order and calmness typically expected from the flow of time.
                </p>
              </li>

              {/* Question 15 */}
              <li className="section-question">
                How does the poem use silence to emphasize trauma's impact?
                <p className="section-answer">
                  Silence in the poem is used to convey the unspoken nature of
                  trauma. The "truth you will never confess" and the hidden
                  emotional scars are conveyed in the quiet moments,
                  highlighting the deep, unresolved impact of the trauma that
                  the speaker struggles to vocalize.
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
