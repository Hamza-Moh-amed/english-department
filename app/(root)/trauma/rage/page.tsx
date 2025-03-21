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
              {/* Analysis Point 1: Poem Structure and Form */}
              <p className="section-subtitle">1. Poem Structure and Form</p>
              <p className="section-paragraph">
                "Rage" is a free verse poem that does not adhere to a strict
                meter or rhyme scheme. The fluidity of its structure mirrors the
                chaotic and disruptive nature of trauma, with lines that seem to
                spiral in on themselves. This lack of structure reflects the
                unpredictability and uncontrollability of the emotional turmoil
                the speaker faces. Free verse allows the poem to flow freely,
                not confined to traditional forms, symbolizing how trauma does
                not conform to expectations or order. The fragmentation of the
                lines conveys the speaker’s fragmented psyche, disrupted by
                painful memories.
              </p>
              <p className="section-paragraph">
                The irregularity in the poem’s form mirrors the disjointedness
                of the speaker’s thoughts, as they jump between time and space.
                This reflects the experience of PTSD, where the mind struggles
                to maintain a cohesive narrative due to the trauma. The
                emotional weight of the speaker’s words is heightened by the use
                of enjambment, where sentences spill over into the next line
                without punctuation. This creates a sense of urgency and flow,
                reflecting the overwhelming and incessant nature of trauma.
              </p>

              {/* Analysis Point 2: Trauma and PTSD in the Poem */}
              <p className="section-subtitle">2. Trauma and PTSD in the Poem</p>
              <p className="section-paragraph">
                The poem is a powerful exploration of trauma, particularly the
                emotional scars left by a difficult past. The speaker’s
                description of “the red song in the night” hints at memories of
                violence or emotional turmoil that resurface during the night,
                the most vulnerable time for the mind. This imagery evokes an
                intense sense of pain, suggesting that trauma often rears its
                head in the quiet moments when the speaker is left alone with
                their thoughts.
              </p>
              <p className="section-paragraph">
                The child in the poem serves as a powerful symbol of innocence
                and vulnerability, affected by the trauma experienced by the
                speaker. The line, "when the child’s mother smiles / you see on
                her cheekbones / a truth you will never confess," speaks to the
                hidden nature of the trauma, a truth that the speaker cannot
                confront or admit. The smile, which seems like a symbol of
                normalcy and peace, is contrasted with the underlying pain,
                represented by the "truth" that remains unspoken. This suggests
                how trauma can affect not only the individual but also their
                relationships with others, as the pain is often carried in
                silence.
              </p>
              <p className="section-paragraph">
                The line, "in your dreams she’s a tree / that will never come to
                leaf," symbolizes the stunted emotional growth resulting from
                trauma. The imagery of a tree unable to leaf suggests a state of
                arrested development, where the individual cannot move forward
                or grow because of unresolved pain. The inability of the tree to
                leaf is also symbolic of the speaker’s inability to heal, as the
                trauma continues to shape their emotional and psychological
                state.
              </p>
              <p className="section-paragraph">
                The repeated imagery of the night—"the red song in the night"
                and "the damp rose of her body"—further emphasizes how trauma is
                often most present in the dark moments of life, when the speaker
                cannot escape their thoughts. The night is portrayed as a time
                of introspection and emotional vulnerability, where the speaker
                is forced to confront their own guilt, pain, and unresolved
                trauma.
              </p>

              {/* Analysis Point 3: The Role of Memory */}
              <p className="section-subtitle">3. The Role of Memory</p>
              <p className="section-paragraph">
                Memory plays a central role in the poem, with the speaker
                reflecting on moments of damage and pain. The phrase "dreams do
                not lie" emphasizes how the past continues to haunt the present.
                This indicates how traumatic memories shape the present,
                altering perceptions and actions. The repetition of these
                memories reflects the nature of PTSD, where trauma can replay in
                the mind uncontrollably, regardless of whether the individual is
                awake or asleep.
              </p>
              <p className="section-paragraph">
                The dreams in the poem serve as a means of processing past
                trauma. In the dream, the child is described as "a tree that
                will never come to leaf," a metaphor for the stagnation and
                emotional paralysis the speaker experiences. This suggests that
                the trauma has prevented emotional growth and healing, as the
                speaker cannot move past the painful memories.
              </p>
              <p className="section-paragraph">
                The constant presence of these memories, portrayed in the line
                "dreams do not lie," highlights the inescapable nature of
                trauma. The speaker's dreams reveal a distorted reality in which
                they are haunted by their past, unable to escape the emotional
                scars that continue to shape their actions and interactions with
                others.
              </p>

              {/* Analysis Point 4: Guilt and Self-Blame */}
              <p className="section-subtitle">4. Guilt and Self-Blame</p>
              <p className="section-paragraph">
                The speaker’s guilt and self-blame are central to the emotional
                landscape of the poem. In the line "in your dreams you have
                sullied and murdered," the speaker confronts the guilt of their
                past actions or perceived failures. The words "sullied" and
                "murdered" imply that the speaker believes they have irreparably
                harmed the child, further deepening the emotional burden they
                carry. This may reflect feelings of responsibility for the
                trauma the child experiences, even if the trauma was not
                directly caused by the speaker’s actions.
              </p>
              <p className="section-paragraph">
                The poem’s constant interplay between the speaker's actions and
                their emotional repercussions suggests that trauma is not only
                about what has been done to the individual but also about how
                they perceive their role in causing harm to others. The
                speaker’s self-judgment, as seen in the metaphor of "dreams do
                not lie," reveals how trauma can distort the individual’s
                perception of themselves, often leading to feelings of shame and
                self-recrimination.
              </p>
              <p className="section-paragraph">
                The repeated line "you have sullied and murdered" emphasizes the
                enduring nature of guilt and the inability to escape from the
                trauma. The poem portrays how guilt is internalized and often
                becomes a part of the individual’s identity, making it difficult
                to move forward.
              </p>

              {/* Analysis Point 5: The Interruption of Healing */}
              <p className="section-subtitle">5. The Interruption of Healing</p>
              <p className="section-paragraph">
                Healing is portrayed as an interrupted process in "Rage." The
                line "when the child’s mother smiles / you see on her cheekbones
                / a truth you will never confess" implies that healing cannot
                occur because of the constant awareness of the truth that the
                speaker cannot face. The smile, which might normally represent a
                moment of peace or joy, instead becomes a symbol of the ongoing
                emotional burden the speaker carries.
              </p>
              <p className="section-paragraph">
                The idea of the tree that "will never come to leaf" represents
                the speaker’s emotional paralysis. Trauma has prevented growth
                and healing, leaving the speaker stuck in a state of emotional
                stagnation. This image underscores the difficulty of moving
                forward when the past continues to exert such a powerful grip on
                the individual.
              </p>
              <p className="section-paragraph">
                The poem’s imagery, including the "red bird’s wings" and "a
                watch you dropped on the dark stones," suggests that healing is
                constantly interrupted by the harsh reality of trauma. These
                images reflect moments of clarity and hope that are short-lived,
                as they are often quickly overtaken by the pain of the past.
              </p>

              {/* Analysis Point 6: The Impact of Silence */}
              <p className="section-subtitle">6. The Impact of Silence</p>
              <p className="section-paragraph">
                Silence plays a significant role in the poem, especially when it
                comes to unspoken truths. The line, "a truth you will never
                confess," suggests that the speaker is burdened by something
                they cannot or will not speak. This silence is not a peaceful
                one, but rather one that reflects the inability to confront the
                trauma fully.
              </p>
              <p className="section-paragraph">
                The silence around the trauma suggests a pervasive,
                unacknowledged pain that the speaker is unable to express,
                either to others or even to themselves. This emotional
                suppression contributes to the cyclical nature of trauma, where
                the speaker’s silence only deepens the wound.
              </p>
              <p className="section-paragraph">
                In this sense, the poem explores the damaging effects of silence
                on mental health. The refusal or inability to acknowledge
                trauma, represented by the "truth you will never confess,"
                prevents healing and keeps the speaker trapped in their
                emotional pain.
              </p>

              {/* Analysis Point 7: The Connection Between Past and Present */}
              <p className="section-subtitle">
                7. The Connection Between Past and Present
              </p>
              <p className="section-paragraph">
                The poem also examines the blurred line between past and
                present. The line "in your dreams you have sullied and murdered"
                suggests that the trauma experienced in the past continues to
                influence the speaker’s present thoughts and actions. The past
                is not something the speaker can escape from; rather, it
                infiltrates their waking life, particularly through dreams.
              </p>
              <p className="section-paragraph">
                The use of dreams as a motif in the poem serves as a powerful
                reminder that trauma cannot be easily compartmentalized. The
                dreams, as "truths that do not lie," reveal the depth of the
                speaker's inner conflict, where the past is constantly intruding
                upon the present. This perpetual return to the past reflects the
                cyclical nature of trauma, where one cannot move forward until
                the past is confronted and healed.
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
