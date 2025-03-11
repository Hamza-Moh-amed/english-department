import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Dulce et Decorum Est",
  description:
    "A page dedicated to Wilfred Owen's poem 'Dulce et Decorum Est' featuring the poem, author background, a trauma-informed analysis, and a Q&A section.",
};

export default function DulceEtDecorumEst() {
  const navLinks: NavLink[] = [
    { href: "#poem", label: "Poem" },
    { href: "#poem-video", label: "Poem Video" },
    { href: "#analysis-video", label: "Analysis Video" },
    { href: "#shell-shock", label: "Shell Shock" },
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
          <PageTitle title="Dulce et Decorum Est" author="Wilfred Owen" />

          {/* Poem Section */}
          <section id="poem" className="section-content">
            <h2 className="section-title">Poem</h2>
            <article className="article-block">
              <p className="article-paragraph">
                Bent double, like old beggars under sacks,
                <br />
                Knock-kneed, coughing like hags, we cursed through sludge,
                <br />
                Till on the haunting flares we turned our backs,
                <br />
                And towards our distant rest began to trudge.
                <br />
                Men marched asleep. Many had lost their boots,
                <br />
                But limped on, blood-shod. All went lame; all blind;
                <br />
                Drunk with fatigue; deaf even to the hoots
                <br />
                Of gas-shells dropping softly behind.
                <br />
                <br />
                Gas! GAS! Quick, boys!—An ecstasy of fumbling
                <br />
                Fitting the clumsy helmets just in time,
                <br />
                But someone still was yelling out and stumbling
                <br />
                And flound’ring like a man in fire or lime.—
                <br />
                Dim through the misty panes and thick green light,
                <br />
                As under a green sea, I saw him drowning.
                <br />
                <br />
                In all my dreams before my helpless sight,
                <br />
                He plunges at me, guttering, choking, drowning.
                <br />
                <br />
                If in some smothering dreams, you too could pace
                <br />
                Behind the wagon that we flung him in,
                <br />
                And watch the white eyes writhing in his face,
                <br />
                His hanging face, like a devil’s sick of sin;
                <br />
                If you could hear, at every jolt, the blood
                <br />
                Come gargling from the froth-corrupted lungs,
                <br />
                Obscene as cancer, bitter as the cud
                <br />
                Of vile, incurable sores on innocent tongues,—
                <br />
                My friend, you would not tell with such high zest
                <br />
                To children ardent for some desperate glory,
                <br />
                The old Lie: Dulce et decorum est
                <br />
                Pro patria mori.
              </p>
            </article>
          </section>

          {/* YouTube Embed Section: Poem */}
          <section id="poem-video" className="section-content">
            <h2 className="section-title">Poem Video</h2>
            <div className="video-container">
              <div className="video-container-2">
                <iframe
                  src="https://www.youtube.com/embed/SgQhH67oPgY?si=sRyw9gx6fqBYvX4l"
                  title="Dulce et Decorum Est by Wilfred Owen"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-frame"
                ></iframe>
              </div>
            </div>
          </section>

          {/* YouTube Embed Section: Poem Analysis */}
          <section id="analysis-video" className="section-content">
            <h2 className="section-title">Poem Analysis</h2>
            <div className="video-container">
              <div className="video-container-2">
                <iframe
                  src="https://www.youtube.com/embed/CmvRHDR2R70?si=kUqNRjv98uBz-mJA"
                  title="Dulce et Decorum Est Analysis"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-frame"
                ></iframe>
              </div>
            </div>
          </section>

          {/* YouTube Embed Section: Shell Shock */}
          <section id="shell-shock" className="section-content">
            <h2 className="section-title">
              Shell Shock: The Psychological Scars of WW1
            </h2>
            <div className="video-container">
              <div className="video-container-2">
                <iframe
                  src="https://www.youtube.com/embed/kvTRJZGWqF8?si=6TEnzhkBg6kkTfLx"
                  title="Shell Shock in WW1"
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
                Wilfred Owen (1893–1918) was an English poet and soldier
                renowned for his searing depictions of the brutal realities of
                World War I. His firsthand experiences in the
                trenches—witnessing the physical and psychological torment of
                war—shaped his work and established him as one of the most
                influential war poets. Owen’s vivid imagery and profound empathy
                for the suffering of soldiers challenge the glorification of
                war, making his poetry a poignant exploration of trauma and
                loss.
              </p>
              <p className="section-paragraph">
                His background in experiencing the horrors of battle lends a
                deeply personal perspective to his writing, which resonates with
                trauma-informed analyses by emphasizing the lasting impact of
                war on the human psyche.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              {/* Analysis Point 1: Trauma-Informed Perspective */}
              <p className="section-subtitle">1. Trauma-Informed Perspective</p>
              <p className="section-paragraph">
                Wilfred Owen's <em>Dulce et Decorum Est</em> is a visceral
                portrayal of the physical and psychological horrors of war. The
                poem dismantles the romanticized notion of heroic sacrifice by
                exposing the brutal reality of combat, where soldiers are
                reduced to images of suffering and dehumanization. In this work,
                Owen's depictions mirror the dissociative states and intrusive
                memories described in trauma studies. Judith Herman, in{" "}
                <em>Trauma and Recovery</em>, argues that trauma fragments one’s
                experience, leading to disjointed memories and overwhelming
                feelings of despair—an effect that Owen captures through his
                abrupt tonal shifts and fragmented narrative style.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Bent double, like old beggars under sacks, / Knock-kneed,
                  coughing like hags"
                </em>
              </p>
              <p className="section-paragraph">
                This imagery ties physical violence to emotional disturbance,
                suggesting that the consequences of such abuse can leave deep
                psychological scars. The “silence of blood” implies a lasting
                internalized silence, where trauma becomes part of the
                individual's existence, muted but persistent.
              </p>

              {/* Analysis Point 2: Literary Devices & Imagery */}
              <p className="section-subtitle">2. Literary Devices & Imagery</p>
              <p className="section-paragraph">
                Owen employs stark imagery and striking similes to evoke the
                grotesque realities of war. For example, the opening lines,{" "}
                <em>
                  "Bent double, like old beggars under sacks, / Knock-kneed,
                  coughing like hags"
                </em>
                , immediately strip away any romanticism and lay bare the
                physical deterioration and dehumanization of soldiers. Such
                vivid comparisons resonate with Bessel van der Kolk’s ideas in{" "}
                <em>The Body Keeps the Score</em>, which emphasize that the body
                holds onto trauma in very concrete, physical ways. The imagery
                of soldiers as “blood-shod” or “limped on” creates a sensory
                record of pain that echoes the persistent somatic memories of
                trauma survivors.
              </p>

              {/* Analysis Point 3: Structural Elements and Repetition */}
              <p className="section-subtitle">
                3. Structural Elements and Repetition
              </p>
              <p className="section-paragraph">
                The poem’s structure—with its fragmented lines, abrupt breaks,
                and rhythmic repetitions—mirrors the disjointed nature of
                traumatic memory. The repeated call,{" "}
                <em>"Gas! GAS! Quick, boys!"</em>, not only functions as an
                auditory jolt, reminiscent of flashbacks described in trauma
                research, but also reinforces the cyclical nature of trauma as
                memories and sensations recur involuntarily. This fragmented
                narrative structure aligns with Herman’s perspective on how
                trauma disrupts the continuity of experience, leaving survivors
                with a series of unintegrated, haunting snapshots.
              </p>

              {/* Analysis Point 4: Quotations and Sensory Detail */}
              <p className="section-subtitle">
                4. Quotations and Sensory Detail
              </p>
              <p className="section-paragraph">
                Owen's use of intense, disturbing details—such as{" "}
                <em>"As under a green sea, I saw him drowning"</em>—creates a
                sensory overload that transports the reader into the midst of
                chaos. The vivid depiction of a soldier drowning in a “green
                sea” of gas fumes illustrates how trauma overwhelms both the
                senses and the mind. Van der Kolk highlights in{" "}
                <em>The Body Keeps the Score</em> how sensory memories are
                central to traumatic experiences, suggesting that such vivid
                images are a way for the body to encode and re-experience
                overwhelming stress.
              </p>

              {/* Analysis Point 5: Author Background & Personal Experience */}
              <p className="section-subtitle">
                5. Author Background & Personal Experience
              </p>
              <p className="section-paragraph">
                Owen’s firsthand experience on the front lines lends a profound
                authenticity to his work. His intimate knowledge of the physical
                and psychological toll of war allows him to document not only
                the visible wounds but also the invisible scars left on the
                psyche. This direct exposure to trauma is a key factor in his
                ability to critique the glorified narratives of war. In both{" "}
                <em>Trauma and Recovery</em> and{" "}
                <em>The Body Keeps the Score</em>, the authors stress that
                personal experience is crucial for understanding trauma. Owen’s
                reflections, filled with raw emotion and vivid detail, serve as
                a testament to the enduring impact of war on both the body and
                mind.
              </p>

              {/* Analysis Point 6: Contextual and Cultural Critique */}
              <p className="section-subtitle">
                6. Contextual and Cultural Critique
              </p>
              <p className="section-paragraph">
                The final lines of the poem—
                <em>"The old Lie: Dulce et decorum est / Pro patria mori"</em>
                —deliver a powerful critique of the cultural myth that glorifies
                war as noble and honorable. This bitter irony challenges the
                societal narratives that valorize sacrifice while ignoring the
                traumatic costs borne by soldiers. From a trauma-informed
                perspective, such a critique is essential; it underscores the
                need to re-examine cultural values that contribute to the
                perpetuation of violence and neglect the long-term psychological
                damage inflicted on individuals.
              </p>

              {/* Analysis Point 7: Integration of Trauma Theories */}
              <p className="section-subtitle">
                7. Integration of Trauma Theories
              </p>
              <p className="section-paragraph">
                Both Judith Herman and Bessel van der Kolk provide frameworks
                that illuminate the lingering effects of trauma. Herman's work
                emphasizes the disruption of memory and identity following
                traumatic events, while van der Kolk focuses on the body’s
                somatic response to trauma. Owen’s poem encapsulates these
                ideas: the disjointed, repetitive structure evokes the
                fragmented nature of traumatic memory, and the relentless
                sensory detail mirrors the physical manifestations of trauma
                stored in the body. Through these lenses,{" "}
                <em>Dulce et Decorum Est</em> becomes not just a war poem but a
                profound exploration of how extreme experiences shatter the
                human spirit.
              </p>

              {/* Analysis Point 8: Overall Interpretation */}
              <p className="section-subtitle">8. Overall Interpretation</p>
              <p className="section-paragraph">
                In sum, <em>Dulce et Decorum Est</em> offers a comprehensive
                critique of war that is deeply informed by trauma. Owen’s vivid
                imagery, structural fragmentation, and personal insight
                collectively create a powerful narrative that challenges the
                romanticized portrayals of combat. By integrating perspectives
                from <em>Trauma and Recovery</em> and{" "}
                <em>The Body Keeps the Score</em>, we gain a deeper
                understanding of how the poem reflects the enduring impact of
                trauma on both individuals and society. This analysis not only
                unpacks the literary techniques used by Owen but also situates
                the poem within a broader discourse on trauma and recovery.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              {/* Question 1 */}
              <li className="section-question">
                What is the central theme of "Dulce et Decorum Est"?
                <p className="section-answer">
                  The poem critiques the glorification of war by exposing its
                  horrific realities, challenging the notion that it is noble to
                  die for one’s country.
                </p>
              </li>

              {/* Question 2 */}
              <li className="section-question">
                How does Owen depict the physical toll of war?
                <p className="section-answer">
                  Through vivid imagery, such as “bent double, like old beggars”
                  and “blood-shod,” Owen conveys the debilitating physical
                  impact of combat on soldiers.
                </p>
              </li>

              {/* Question 3 */}
              <li className="section-question">
                What role does repetition play in the poem?
                <p className="section-answer">
                  Repetition reinforces the relentless nature of war and the
                  cyclical trauma experienced by soldiers, emphasizing the
                  enduring impact of their suffering.
                </p>
              </li>

              {/* Question 4 */}
              <li className="section-question">
                How does the poem challenge patriotic propaganda?
                <p className="section-answer">
                  By juxtaposing the gruesome realities of war with the
                  idealized image of heroic sacrifice, Owen exposes the "old
                  Lie" that glorifies war and valorizes death.
                </p>
              </li>

              {/* Question 5 */}
              <li className="section-question">
                What is the significance of the imagery related to gas attacks?
                <p className="section-answer">
                  The chaotic depiction of gas attacks highlights the sudden and
                  overwhelming nature of modern warfare, intensifying the sense
                  of fear and helplessness among soldiers.
                </p>
              </li>

              {/* Question 6 */}
              <li className="section-question">
                How does Owen use similes and metaphors in the poem?
                <p className="section-answer">
                  Similes such as “like old beggars under sacks” and metaphors
                  like “drowning under a green sea” vividly illustrate the
                  dehumanizing effects of war.
                </p>
              </li>

              {/* Question 7 */}
              <li className="section-question">
                What is the meaning behind the title "Dulce et Decorum Est"?
                <p className="section-answer">
                  The title, derived from a Latin phrase meaning "It is sweet
                  and proper to die for one's country," is used ironically to
                  critique the glorification of war.
                </p>
              </li>

              {/* Question 8 */}
              <li className="section-question">
                How does the structure of the poem reflect traumatic
                experiences?
                <p className="section-answer">
                  The fragmented structure and abrupt line breaks mirror the
                  disjointed, chaotic nature of traumatic memory and the
                  disintegration of the soldier’s experience.
                </p>
              </li>

              {/* Question 9 */}
              <li className="section-question">
                In what ways does the poem evoke sensory experiences?
                <p className="section-answer">
                  Through detailed descriptions of sounds, sights, and physical
                  sensations, such as coughing, drowning, and the sound of
                  gas-shells, the poem immerses the reader in the visceral
                  reality of war.
                </p>
              </li>

              {/* Question 10 */}
              <li className="section-question">
                What is the impact of the poem's tone?
                <p className="section-answer">
                  The tone is both bitter and mournful, reflecting the deep
                  sense of loss, disillusionment, and anger that underpins the
                  trauma of war.
                </p>
              </li>

              {/* Question 11 */}
              <li className="section-question">
                How does a trauma-informed analysis reinterpret the poem?
                <p className="section-answer">
                  A trauma-informed analysis highlights how the poem not only
                  documents physical suffering but also illuminates the
                  long-term psychological scars left on soldiers, emphasizing
                  the need for a compassionate understanding of trauma.
                </p>
              </li>

              {/* Question 12 */}
              <li className="section-question">
                How does Owen's personal background influence the poem?
                <p className="section-answer">
                  Owen's own experiences as a soldier during World War I infuse
                  the poem with authenticity and emotional depth, as he draws on
                  firsthand encounters with the horrors of combat to critique
                  traditional narratives of heroism.
                </p>
              </li>

              {/* Question 13 */}
              <li className="section-question">
                What literary devices are most prominent in the poem?
                <p className="section-answer">
                  Prominent literary devices include vivid imagery, powerful
                  similes, irony, and repetition, all of which work together to
                  underscore the brutality of war.
                </p>
              </li>

              {/* Question 14 */}
              <li className="section-question">
                How does the poem address the concept of honor in war?
                <p className="section-answer">
                  The poem questions traditional notions of honor by revealing
                  the gruesome reality of combat, suggesting that true honor
                  lies not in glorified sacrifice but in acknowledging the human
                  cost of conflict.
                </p>
              </li>

              {/* Question 15 */}
              <li className="section-question">
                What insights does the poem offer regarding the transmission of
                trauma?
                <p className="section-answer">
                  The vivid depictions of suffering and the lasting impact of
                  war in the poem serve as a stark reminder of how trauma can
                  persist across generations, influencing both individual and
                  collective memory.
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
