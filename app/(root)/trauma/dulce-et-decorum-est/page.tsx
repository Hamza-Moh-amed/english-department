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
              {/* Analysis Point 1: Themes */}
              <p className="section-subtitle">
                1. Themes: War, Trauma, and the Myth of Glory
              </p>
              <p className="section-paragraph">
                Wilfred Owen’s *"Dulce et Decorum Est"* explores the horrific
                realities of war, dismantling the romanticized narrative of
                dying for one’s country. The poem focuses on the physical and
                psychological toll on soldiers, revealing the brutal truth
                behind patriotic propaganda. The Latin phrase “Dulce et decorum
                est pro patria mori” (“It is sweet and fitting to die for one’s
                country”) is used ironically to expose the tragic lie sold to
                the youth.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "My friend, you would not tell with such high zest / To
                  children ardent for some desperate glory, / The old Lie: Dulce
                  et decorum est / Pro patria mori."
                </em>
              </p>
              <p className="section-paragraph">
                These closing lines denounce the glorification of war, calling
                out those who perpetuate false ideals to impressionable young
                men, who often pay the ultimate price.
              </p>

              {/* Analysis Point 2: Imagery */}
              <p className="section-subtitle">
                2. Imagery: Vivid, Graphic, and Nightmarish
              </p>
              <p className="section-paragraph">
                Owen uses grotesque and visceral imagery to depict the horrors
                of trench warfare. From men “bent double, like old beggars” to
                the haunting image of a soldier dying in a gas attack, the poem
                plunges the reader into the physical suffering and sensory
                overload of war. These stark visuals make the reader feel the
                exhaustion, confusion, and helplessness of the soldiers.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "He plunges at me, guttering, choking, drowning."
                </em>
              </p>
              <p className="section-paragraph">
                This harrowing line captures the speaker’s traumatic memory of a
                comrade dying before his eyes—an experience that continues to
                haunt him in his dreams.
              </p>

              {/* Analysis Point 3: Tone */}
              <p className="section-subtitle">
                3. Tone: Bitter, Condemning, and Mournful
              </p>
              <p className="section-paragraph">
                The poem’s tone is marked by anger and deep sorrow. Owen is
                bitter toward those who glorify war without understanding its
                consequences. His description of the gas attack and the
                suffering of soldiers is not just recounting events, but a
                passionate indictment of the systems that allow young men to be
                sacrificed in the name of patriotism.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Obscene as cancer, bitter as the cud / Of vile, incurable
                  sores on innocent tongues."
                </em>
              </p>
              <p className="section-paragraph">
                This simile-laden passage is steeped in revulsion, emphasizing
                the physical deformities and agony inflicted by war—contrasting
                sharply with the sanitized notions of honor and sacrifice.
              </p>

              {/* Analysis Point 4: Symbols */}
              <p className="section-subtitle">
                4. Symbols: The Gas Attack and the “Old Lie”
              </p>
              <p className="section-paragraph">
                The gas attack becomes a symbol of the unpredictable and
                senseless violence of war. The “Old Lie” symbolizes the
                patriotic rhetoric used to manipulate young men into enlisting.
                Through these symbols, Owen challenges nationalistic ideologies
                and questions their ethical and moral foundations.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Gas! GAS! Quick, boys!—An ecstasy of fumbling"
                </em>
              </p>
              <p className="section-paragraph">
                The frantic reaction to the gas attack symbolizes the constant
                danger and dehumanizing panic that defined life in the
                trenches—completely at odds with the idea of war as noble.
              </p>

              {/* Analysis Point 5: Structure and Form */}
              <p className="section-subtitle">
                5. Structure and Form: Narrative Progression and Disruption
              </p>
              <p className="section-paragraph">
                The poem is written in a loosely structured iambic pentameter
                with irregular rhyme and rhythm, mirroring the chaos of war. It
                follows a clear narrative arc: from exhaustion, to crisis, to
                trauma, and then to a moral reckoning. The sudden shift in tempo
                during the gas attack disrupts the poem’s flow, pulling the
                reader into the chaos and urgency experienced by the soldiers.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Men marched asleep. Many had lost their boots, / But limped
                  on, blood-shod."
                </em>
              </p>
              <p className="section-paragraph">
                The repetitive, almost trudging rhythm of this line mimics the
                soldiers’ weary footsteps, contributing to the immersive
                structure of the poem.
              </p>

              {/* Analysis Point 6: Literary Devices */}
              <p className="section-subtitle">
                6. Literary Devices: Simile, Alliteration, and Enjambment
              </p>
              <p className="section-paragraph">
                Owen utilizes similes ("like old beggars"), alliteration
                ("knock-kneed, coughing"), and enjambment to heighten the poem's
                impact. These devices reinforce the disorientation and horror of
                war. The enjambment also accelerates the pace, especially in
                moments of crisis, mirroring the breathlessness of soldiers
                reacting under threat.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "And watch the white eyes writhing in his face, / His hanging
                  face, like a devil’s sick of sin;"
                </em>
              </p>
              <p className="section-paragraph">
                This disturbing simile not only dehumanizes the dying man but
                suggests the depth of the psychological trauma inflicted by the
                horrors witnessed—both on the dying and the observer.
              </p>

              {/* Analysis Point 7: Historical and Social Context */}
              <p className="section-subtitle">
                7. Historical and Social Context
              </p>
              <p className="section-paragraph">
                Written during World War I by a soldier who experienced its
                horrors firsthand, *"Dulce et Decorum Est"* stands as one of the
                most powerful anti-war poems in literature. Owen wrote it in
                response to the jingoistic poetry and propaganda of his time,
                particularly addressing writers like Jessie Pope who encouraged
                men to enlist. His poem aimed to confront and correct these
                dangerously idealized representations of war.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "If in some smothering dreams, you too could pace / Behind the
                  wagon that we flung him in"
                </em>
              </p>
              <p className="section-paragraph">
                By inviting the reader to witness the aftermath of war
                firsthand, Owen underscores the emotional burden soldiers carry
                and challenges society's detachment from the realities of
                combat.
              </p>

              {/* Analysis Point 8: The Speaker’s Voice */}
              <p className="section-subtitle">
                8. The Speaker’s Voice: Witness and Moral Authority
              </p>
              <p className="section-paragraph">
                The speaker’s voice is that of a disillusioned soldier, who
                speaks not only from experience but also from a place of moral
                urgency. His voice is at once weary and furious, acting as a
                witness to the suffering endured and an accuser of those who
                perpetuate the myth of noble war. By sharing his trauma, the
                speaker demands that others see the truth he can never unsee.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "In all my dreams before my helpless sight, / He plunges at
                  me, guttering, choking, drowning."
                </em>
              </p>
              <p className="section-paragraph">
                These lines reveal the psychological scars of war, presenting
                the speaker not as a hero, but as a haunted survivor whose
                nightmares serve as a warning to those who glorify war from a
                safe distance.
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
