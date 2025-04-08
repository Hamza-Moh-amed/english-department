import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Facing It",
  description:
    "A page dedicated to the poem 'Facing It' by Yusef Komunyakaa, exploring its themes, literary analysis, and a detailed exploration of trauma and PTSD.",
};

export default function MyBlackFaceFades() {
  const navLinks: NavLink[] = [
    { href: "#poem", label: "Poem" },
    { href: "#poem-video", label: "Poem Video" },
    { href: "#return", label: "Return from Chaos" },
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
          <PageTitle title="Facing It" author="Yusef Komunyakaa" />

          {/* Poem Section */}
          <section id="poem" className="section-content">
            <h2 className="section-title">Poem</h2>
            <article className="article-block">
              <p className="article-paragraph">
                My black face fades,
                <br />
                hiding inside the black granite.
                <br />
                I said I wouldn't
                <br />
                dammit: No tears.
                <br />
                I'm stone. I'm flesh.
                <br />
                My clouded reflection eyes me
                <br />
                like a bird of prey, the profile of night
                <br />
                slanted against morning. I turn
                <br />
                this way—the stone lets me go.
                <br />
                I turn that way—I'm inside
                <br />
                the Vietnam Veterans Memorial
                <br />
                again, depending on the light
                <br />
                to make a difference.
                <br />
                I go down the 58,022 names,
                <br />
                half-expecting to find
                <br />
                my own in letters like smoke.
                <br />
                I touch the name Andrew Johnson;
                <br />
                I see the booby trap's white flash.
                <br />
                Names shimmer on a woman's blouse
                <br />
                but when she walks away
                <br />
                the names stay on the wall.
                <br />
                Brushstrokes flash, a red bird's
                <br />
                wings cutting across my stare.
                <br />
                The sky. A plane in the sky.
                <br />
                A white vet's image floats
                <br />
                closer to me, then his pale eyes
                <br />
                look through mine. I'm a window.
                <br />
                He's lost his right arm
                <br />
                inside the stone. In the black mirror
                <br />
                a woman’s trying to erase names:
                <br />
                No, she's brushing a boy's hair.
              </p>
            </article>
          </section>

          {/* Poem Video */}
          <section id="poem-video" className="section-content">
            <h2 className="section-title">Poem Video</h2>
            <div className="video-container">
              <div className="video-container-2">
                <iframe
                  src="https://www.youtube.com/embed/90yxqlVrLP8?si=INMKIq0k9TaArHzJ"
                  title="My Black Face Fades by Yusef Komunyakaa"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-frame"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Return from Chaos Video */}
          <section id="return" className="section-content">
            <h2 className="section-title">Return from Chaos</h2>
            <div className="video-container">
              <div className="video-container-2">
                <iframe
                  src="https://www.youtube.com/embed/ORs3-tRokGU?si=NdXCYUS7r0vovCH8"
                  title="Return from Chaos"
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
                Yusef Komunyakaa is an acclaimed American poet known for his
                powerful depictions of the African American experience, war, and
                the lasting effects of trauma. Born in 1947 in Bogalusa,
                Louisiana, Komunyakaa served in the Vietnam War, which greatly
                influenced his poetry, particularly in works like "My Black Face
                Fades." His experiences as a soldier and the emotional scars of
                war are central themes in his writing.
              </p>
              <p className="section-paragraph">
                Komunyakaa's work often explores the complexities of identity,
                memory, and race, drawing from his personal experiences as well
                as broader cultural and historical contexts. His most famous
                collection, *Dien Cai Dau*, reflects on his time in Vietnam,
                blending vivid imagery, personal narrative, and political
                commentary. His poems are known for their use of symbolism,
                intense emotional resonance, and rich language.
              </p>
              <p className="section-paragraph">
                In addition to his war-related poems, Komunyakaa has written
                extensively about African American life, using poetry as a
                vehicle to confront issues of race, injustice, and the search
                for identity. He has received numerous awards for his work,
                including the Pulitzer Prize for Poetry in 1994 for his
                collection *Neon Vernacular: New and Selected Poems*.
              </p>
              <p className="section-paragraph">
                Throughout his career, Komunyakaa has held various teaching
                positions and has been a prominent voice in American literature.
                His poetry continues to be an essential part of contemporary
                discussions around race, memory, and the enduring impact of
                trauma, particularly as it relates to African American and
                veteran communities.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              {/* Analysis Point 1: Themes */}
              <p className="section-subtitle">
                1. Themes: Memory, Trauma, Race, and Healing
              </p>
              <p className="section-paragraph">
                *Facing It* explores the lasting trauma of war, the complexities
                of racial identity, and the power of remembrance. The poem is
                set at the Vietnam Veterans Memorial, where the speaker
                confronts both his past and his emotions, navigating the
                difficult terrain between survivor’s guilt and the need to heal.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">"I'm stone. I'm flesh."</em>
              </p>
              <p className="section-paragraph">
                This paradox captures the poem’s emotional core: the speaker
                must be strong like the stone wall, but he cannot deny his human
                vulnerability. The war has hardened him, yet it still bleeds
                into his present.
              </p>

              {/* Analysis Point 2: Structure and Form */}
              <p className="section-subtitle">
                2. Structure and Form: Free Verse and Shifting Imagery
              </p>
              <p className="section-paragraph">
                The poem is written in free verse, allowing for fluid shifts
                between memory, observation, and reflection. The enjambment and
                lack of punctuation in places mirror the stream-of-consciousness
                experience of trauma—past and present collapsing into one
                moment.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "I turn that way—I'm inside / the Vietnam Veterans Memorial"
                </em>
              </p>
              <p className="section-paragraph">
                Komunyakaa captures how memory can engulf a person, and how a
                physical space (like the Memorial) can become a living conduit
                to the past.
              </p>

              {/* Analysis Point 3: Tone */}
              <p className="section-subtitle">
                3. Tone: Reflective, Tense, Vulnerable
              </p>
              <p className="section-paragraph">
                The tone fluctuates between restraint and emotional release.
                There is a deliberate attempt to suppress tears—yet the poem
                itself is an unraveling. The speaker is haunted, but he is also
                trying to process and confront those ghosts.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "I said I wouldn't / dammit: No tears."
                </em>
              </p>
              <p className="section-paragraph">
                This moment of internal struggle highlights the stigma around
                vulnerability, especially among men and veterans. His suppressed
                grief makes the emotional weight even heavier.
              </p>

              {/* Analysis Point 4: Imagery and Symbolism */}
              <p className="section-subtitle">
                4. Imagery and Symbolism: Mirrors, Light, and Ghosts
              </p>
              <p className="section-paragraph">
                The black granite of the Memorial acts like a mirror, reflecting
                both literal images and the speaker’s internal emotional world.
                Reflections blend with hallucinations and memory. Light and
                shadow represent the thin veil between past and present, life
                and death.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "In the black mirror / a woman’s trying to erase names: / No,
                  she’s brushing a boy’s hair."
                </em>
              </p>
              <p className="section-paragraph">
                This visual misreading shows how trauma distorts perception. The
                image of erasing names echoes a desire to undo the past, while
                the truth—a woman brushing her son's hair—suggests continuity
                and life.
              </p>

              {/* Analysis Point 5: Race and Identity */}
              <p className="section-subtitle">
                5. Race and Identity: Black Veteran’s Perspective
              </p>
              <p className="section-paragraph">
                As a Black man and a veteran, Komunyakaa's speaker occupies a
                unique space. The line between being invisible and hyper-visible
                runs throughout the poem, as does the complex relationship
                between patriotism, sacrifice, and racial inequality.
              </p>
              <p className="section-quote">
                <em className="section-quote-em">
                  "My black face fades, / hiding inside the black granite."
                </em>
              </p>
              <p className="section-paragraph">
                His face literally fades into the wall, evoking a sense of
                erasure, anonymity, and merging with the dead. It reflects how
                Black soldiers have often been overlooked in historical
                narratives, even as they served and died alongside others.
              </p>

              {/* Analysis Point 6: Juxtaposition of Reality and Memory */}
              <p className="section-subtitle">
                6. Juxtaposition of Reality and Memory
              </p>
              <p className="section-paragraph">
                Komunyakaa masterfully blends real-time observation with
                intrusive flashbacks. Ordinary sights—names, a blouse, a
                reflection—trigger vivid, painful memories. This merging of
                timelines is a hallmark of PTSD and emotional reckoning.
              </p>
              <p className="section-quote">
                <em className="section-quote-em">
                  "I touch the name Andrew Johnson; / I see the booby trap’s
                  white flash."
                </em>
              </p>
              <p className="section-paragraph">
                A simple act of remembrance becomes a gateway into trauma. The
                speaker cannot escape the war; it is etched into the names, and
                into him.
              </p>

              {/* Analysis Point 7: Duality and Transformation */}
              <p className="section-subtitle">7. Duality and Transformation</p>
              <p className="section-paragraph">
                Throughout the poem, there’s a constant tension between opposing
                states: stone vs. flesh, visibility vs. erasure, death vs. life.
                The speaker is both observer and participant, ghost and
                survivor. This duality captures the fractured self that trauma
                often creates.
              </p>
              <p className="section-quote">
                <em className="section-quote-em">"I'm a window."</em>
              </p>
              <p className="section-paragraph">
                This metaphor suggests transparency and vulnerability—he is no
                longer just a man, but a vessel through which memory, grief, and
                history flow.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              {/* Question 1 */}
              <li className="section-question">
                What is the significance of the speaker's "black face fades" in
                the poem?
                <p className="section-answer">
                  The phrase "black face fades" symbolizes the speaker’s feeling
                  of being erased or hidden by the trauma of war and the act of
                  confronting the Vietnam Veterans Memorial. It reflects how
                  trauma alters the perception of self and one's identity,
                  making them feel less visible or distorted.
                </p>
              </li>

              {/* Question 2 */}
              <li className="section-question">
                How does the poem explore the theme of identity?
                <p className="section-answer">
                  The poem explores the theme of identity through the speaker's
                  internal conflict and reflection at the Vietnam Veterans
                  Memorial. The imagery of fading and stone conveys the struggle
                  between the speaker's humanity and the emotional scars of war,
                  questioning who they are beyond the trauma.
                </p>
              </li>

              {/* Question 3 */}
              <li className="section-question">
                What is the significance of the "black granite" in the poem?
                <p className="section-answer">
                  The "black granite" symbolizes permanence and the inescapable
                  nature of the speaker's trauma. It represents both the Vietnam
                  Veterans Memorial and the emotional and psychological scars
                  left by war, showing how trauma is embedded in the speaker's
                  identity.
                </p>
              </li>

              {/* Question 4 */}
              <li className="section-question">
                What does the speaker's interaction with the "58,022 names"
                symbolize?
                <p className="section-answer">
                  The "58,022 names" symbolize the vast loss of life in the
                  Vietnam War. As the speaker searches through the names, the
                  poem underscores the lasting impact of war, showing the
                  constant presence of loss and the speaker's internal battle
                  with survival and guilt.
                </p>
              </li>

              {/* Question 5 */}
              <li className="section-question">
                How does the poem convey the speaker's PTSD?
                <p className="section-answer">
                  The poem conveys PTSD through vivid imagery and fragmented
                  reflections. The speaker's encounter with the names on the
                  wall, the flash of a booby trap, and the unsettling presence
                  of a white veteran evoke the recurring, intrusive memories of
                  war that continue to haunt the speaker's mind.
                </p>
              </li>

              {/* Question 6 */}
              <li className="section-question">
                What is the significance of the "woman’s trying to erase names"
                in the poem?
                <p className="section-answer">
                  The image of the woman "trying to erase names" reflects the
                  futile attempt to forget or erase trauma. It highlights the
                  permanence of the emotional scars and how the speaker’s past
                  cannot be erased, much like the etched names on the memorial
                  wall.
                </p>
              </li>

              {/* Question 7 */}
              <li className="section-question">
                How does Komunyakaa use the "clouded reflection" to represent
                the speaker's state of mind?
                <p className="section-answer">
                  The "clouded reflection" symbolizes the distorted perception
                  of self caused by trauma. It represents the speaker’s struggle
                  to see themselves clearly due to the psychological effects of
                  war, showing how their sense of identity is obscured by past
                  experiences.
                </p>
              </li>

              {/* Question 8 */}
              <li className="section-question">
                What role does light play in the poem?
                <p className="section-answer">
                  Light in the poem symbolizes hope, change, and the potential
                  for understanding. The speaker’s reliance on the light to make
                  a difference at the memorial suggests that their perception of
                  the past and their identity is dependent on how they see it,
                  with light representing clarity or truth.
                </p>
              </li>

              {/* Question 9 */}
              <li className="section-question">
                What is the metaphorical significance of the speaker as a
                "window"?
                <p className="section-answer">
                  The metaphor of being a "window" suggests that the speaker is
                  passive in their experience, merely observing their trauma
                  rather than actively engaging with it. It emphasizes the
                  separation between the speaker's internal emotional state and
                  the external world.
                </p>
              </li>

              {/* Question 10 */}
              <li className="section-question">
                What does the image of the "red bird's wings" symbolize?
                <p className="section-answer">
                  The "red bird's wings" symbolize the fleeting nature of life
                  and the disruptive impact of war. The bird cuts across the
                  speaker’s gaze, suggesting that moments of clarity or peace
                  are interrupted by traumatic memories, representing the
                  tension between the present and the past.
                </p>
              </li>

              {/* Question 11 */}
              <li className="section-question">
                How does the poem depict the relationship between the speaker
                and other veterans?
                <p className="section-answer">
                  The poem depicts a shared, silent understanding between the
                  speaker and the other veterans. The image of the white veteran
                  with "pale eyes" highlights the mutual recognition of
                  suffering, while also showing how war leaves an indelible mark
                  on all those involved, regardless of race.
                </p>
              </li>

              {/* Question 12 */}
              <li className="section-question">
                What is the significance of the speaker's interaction with
                "Andrew Johnson" on the wall?
                <p className="section-answer">
                  The speaker’s interaction with "Andrew Johnson" symbolizes the
                  deep personal connection veterans feel to those lost in the
                  war. The mention of a booby trap’s flash represents how the
                  memories of violence and death continue to invade the
                  speaker’s mind, linking past experiences to the present.
                </p>
              </li>

              {/* Question 13 */}
              <li className="section-question">
                What does the "booby trap's white flash" symbolize?
                <p className="section-answer">
                  The "booby trap's white flash" symbolizes the sudden, violent
                  nature of war and its traumatic impact. It represents the
                  momentary but intense memories of combat that continue to
                  haunt the speaker, highlighting the persistent presence of war
                  in their psyche.
                </p>
              </li>

              {/* Question 14 */}
              <li className="section-question">
                How does the poem address the theme of memory and loss?
                <p className="section-answer">
                  The poem addresses memory and loss through the speaker’s
                  interaction with the names on the wall, the red bird’s wings,
                  and the faded reflection. It emphasizes how memories of loss
                  are constantly revisited and how the past remains present in
                  the speaker's life, despite attempts to move forward.
                </p>
              </li>

              {/* Question 15 */}
              <li className="section-question">
                What is the significance of the poem's use of free verse?
                <p className="section-answer">
                  The use of free verse in the poem reflects the fragmented and
                  unstructured nature of the speaker’s experience with trauma.
                  It allows for emotional freedom and mirrors the chaotic and
                  disjointed feelings that arise when confronting the scars of
                  war.
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
