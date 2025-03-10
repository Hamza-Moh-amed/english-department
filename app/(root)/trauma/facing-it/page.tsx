import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "My Black Face Fades",
  description:
    "A page dedicated to the poem 'My Black Face Fades' by Yusef Komunyakaa, exploring its themes, literary analysis, and a detailed exploration of trauma and PTSD.",
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
          <PageTitle title="My Black Face Fades" author="Yusef Komunyakaa" />

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
              {/* Analysis Point 1: Poem Structure and Form */}
              <p className="section-subtitle">1. Poem Structure and Form</p>
              <p className="section-paragraph">
                Komunyakaa’s "My Black Face Fades" is a vivid, free verse poem
                that uses the speaker's internal conflict to explore trauma and
                identity. The fragmented lines reflect the speaker’s emotional
                fragmentation due to the experience of trauma, particularly from
                the Vietnam War. The lines "My black face fades, / hiding inside
                the black granite" symbolize how trauma has both obscured and
                encapsulated the speaker's identity.
              </p>

              {/* Analysis Point 2: Trauma and PTSD in the Poem */}
              <p className="section-subtitle">2. Trauma and PTSD in the Poem</p>
              <p className="section-paragraph">
                The central theme of the poem is trauma, specifically PTSD,
                experienced by veterans. The speaker’s experience at the Vietnam
                Veterans Memorial evokes memories of violence and loss. Phrases
                like "I see the booby trap's white flash" and "half-expecting to
                find / my own in letters like smoke" express the ongoing
                emotional and psychological scars left by war.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "I go down the 58,022 names, / half-expecting to find / my own
                  in letters like smoke."
                </em>
              </p>
              <p className="section-paragraph">
                This passage symbolizes the fear and mental scars of the war,
                where the speaker feels as if they are still in the battlefield,
                constantly searching for their own death among the names. This
                speaks to the continued trauma and fear of the inevitable,
                underscoring the lasting impact of PTSD.
              </p>

              {/* Analysis Point 3: Imagery and Symbolism */}
              <p className="section-subtitle">3. Imagery and Symbolism</p>
              <p className="section-paragraph">
                Komunyakaa employs powerful imagery to convey the inner turmoil
                of the speaker. The "black granite" symbolizes the permanent and
                unchangeable nature of trauma, while the "clouded reflection"
                suggests the speaker's distorted sense of self. The recurring
                motif of names on the wall, and the "woman’s trying to erase
                names," suggests that these traumatic memories cannot be erased,
                as they remain etched into the speaker's psyche.
              </p>

              {/* Analysis Point 4: Connection to PTSD */}
              <p className="section-subtitle">4. Connection to PTSD</p>
              <p className="section-paragraph">
                The poem emphasizes how trauma manifests in everyday life. The
                reflective imagery, the flight of the red bird, and the
                encounter with the white vet reflect moments where the speaker
                is brought face to face with their memories. PTSD isn't just
                about the war but also about how it continues to influence
                interactions and perceptions in civilian life.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "A white vet's image floats / closer to me, then his pale eyes
                  / look through mine. I'm a window."
                </em>
              </p>
              <p className="section-paragraph">
                The metaphor of being a "window" suggests that the speaker is a
                passive observer of their trauma, a glass separating their
                internal experience from the external world.
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
