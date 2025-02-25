// app/dulceEtDecorumEst.tsx
import { Header } from "@/components/Header";
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
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop: Navigation left, PageTitle centered */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          <div className="flex-grow text-center">
            <PageTitle title="Dulce et Decorum Est" author="Wilfred Owen" />
          </div>
          <div className="flex-none w-24" />
        </div>
        {/* Mobile: Navigation and PageTitle stacked */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Dulce et Decorum Est" author="Wilfred Owen" />
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-8 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Poem Section */}
        <section id="poem" className="space-y-8">
          <h2 className="text-2xl font-semibold">Poem</h2>
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg whitespace-pre-line">
              Bent double, like old beggars under sacks,{"\n"}
              Knock-kneed, coughing like hags, we cursed through sludge,{"\n"}
              Till on the haunting flares we turned our backs,{"\n"}
              And towards our distant rest began to trudge.{"\n"}
              Men marched asleep. Many had lost their boots,{"\n"}
              But limped on, blood-shod. All went lame; all blind;{"\n"}
              Drunk with fatigue; deaf even to the hoots{"\n"}
              Of gas-shells dropping softly behind.{"\n"}
              {"\n"}
              Gas! GAS! Quick, boys!—An ecstasy of fumbling{"\n"}
              Fitting the clumsy helmets just in time,{"\n"}
              But someone still was yelling out and stumbling{"\n"}
              And flound’ring like a man in fire or lime.—{"\n"}
              Dim through the misty panes and thick green light,{"\n"}
              As under a green sea, I saw him drowning.{"\n"}
              {"\n"}
              In all my dreams before my helpless sight,{"\n"}
              He plunges at me, guttering, choking, drowning.{"\n"}
              {"\n"}
              If in some smothering dreams, you too could pace{"\n"}
              Behind the wagon that we flung him in,{"\n"}
              And watch the white eyes writhing in his face,{"\n"}
              His hanging face, like a devil’s sick of sin;{"\n"}
              If you could hear, at every jolt, the blood{"\n"}
              Come gargling from the froth-corrupted lungs,{"\n"}
              Obscene as cancer, bitter as the cud{"\n"}
              Of vile, incurable sores on innocent tongues,—{"\n"}
              My friend, you would not tell with such high zest{"\n"}
              To children ardent for some desperate glory,{"\n"}
              The old Lie: Dulce et decorum est{"\n"}
              Pro patria mori.
            </p>
          </article>
        </section>

        {/* YouTube Embed Section: Poem */}
        <section id="poem-video" className="space-y-8">
          <h2 className="text-2xl font-semibold text-center md:text-left">
            Poem Video
          </h2>
          <div className="flex justify-center">
            <div className="max-w-4xl w-[600px] h-[360px] lg:w-[800px] lg:h-[400px]">
              <iframe
                src="https://www.youtube.com/embed/SgQhH67oPgY?si=sRyw9gx6fqBYvX4l"
                title="Mic Check by Suheir Hammad"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>

        {/* YouTube Embed Section: Poem Analysis */}
        <section id="analysis-video" className="space-y-8">
          <h2 className="text-2xl font-semibold text-center md:text-left">
            Poem Analysis
          </h2>
          <div className="flex justify-center">
            <div className="max-w-4xl w-[600px] h-[360px] lg:w-[800px] lg:h-[400px]">
              <iframe
                src="https://www.youtube.com/embed/CmvRHDR2R70?si=kUqNRjv98uBz-mJA"
                title="Mic Check by Suheir Hammad"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>

        {/* YouTube Embed Section */}
        <section id="shell-shock" className="space-y-8">
          <h2 className="text-2xl font-semibold text-center md:text-left">
            Shell Shock: The Psychological Scars of WW1
          </h2>
          <div className="flex justify-center">
            <div className="max-w-4xl w-[600px] h-[360px] lg:w-[800px] lg:h-[400px]">
              <iframe
                src="https://www.youtube.com/embed/kvTRJZGWqF8?si=6TEnzhkBg6kkTfLx"
                title="Mic Check by Suheir Hammad"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Author Background Section */}
        <section id="author" className="space-y-8">
          <h2 className="text-2xl font-semibold">Author Background</h2>
          <p className="text-lg">
            Wilfred Owen (1893–1918) was an English poet and soldier renowned
            for his searing depictions of the brutal realities of World War I.
            His firsthand experiences in the trenches—witnessing the physical
            and psychological torment of war—shaped his work and established him
            as one of the most influential war poets. Owen’s vivid imagery and
            profound empathy for the suffering of soldiers challenge the
            glorification of war, making his poetry a poignant exploration of
            trauma and loss.
          </p>
          <p className="text-lg">
            His background in experiencing the horrors of battle lends a deeply
            personal perspective to his writing, which resonates with
            trauma-informed analyses by emphasizing the lasting impact of war on
            the human psyche.
          </p>
        </section>
        {/* Analysis Section */}
        <section id="analysis" className="space-y-8">
          <h2 className="text-2xl font-semibold">Analysis</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              <strong>Trauma-Informed Perspective:</strong> Wilfred Owen's{" "}
              <em>Dulce et Decorum Est</em> is a visceral portrayal of the
              physical and psychological horrors of war. The poem dismantles the
              romanticized notion of heroic sacrifice by exposing the brutal
              reality of combat, where soldiers are reduced to images of
              suffering and dehumanization. In this work, Owen's depictions
              mirror the dissociative states and intrusive memories described in
              trauma studies. Judith Herman, in <em>Trauma and Recovery</em>,
              argues that trauma fragments one’s experience, leading to
              disjointed memories and overwhelming feelings of despair—an effect
              that Owen captures through his abrupt tonal shifts and fragmented
              narrative style.
            </p>
            <p className="text-lg">
              <strong>Literary Devices &amp; Imagery:</strong> Owen employs
              stark imagery and striking similes to evoke the grotesque
              realities of war. For example, the opening lines,{" "}
              <em>
                "Bent double, like old beggars under sacks, / Knock-kneed,
                coughing like hags"
              </em>
              , immediately strip away any romanticism and lay bare the physical
              deterioration and dehumanization of soldiers. Such vivid
              comparisons resonate with Bessel van der Kolk’s ideas in{" "}
              <em>The Body Keeps the Score</em>, which emphasize that the body
              holds onto trauma in very concrete, physical ways. The imagery of
              soldiers as “blood-shod” or “limped on” creates a sensory record
              of pain that echoes the persistent somatic memories of trauma
              survivors.
            </p>
            <p className="text-lg">
              <strong>Structural Elements and Repetition:</strong> The poem’s
              structure—with its fragmented lines, abrupt breaks, and rhythmic
              repetitions—mirrors the disjointed nature of traumatic memory. The
              repeated call, <em>"Gas! GAS! Quick, boys!"</em>, not only
              functions as an auditory jolt, reminiscent of flashbacks described
              in trauma research, but also reinforces the cyclical nature of
              trauma as memories and sensations recur involuntarily. This
              fragmented narrative structure aligns with Herman’s perspective on
              how trauma disrupts the continuity of experience, leaving
              survivors with a series of unintegrated, haunting snapshots.
            </p>
            <p className="text-lg">
              <strong>Quotations and Sensory Detail:</strong> Owen's use of
              intense, disturbing details—such as{" "}
              <em>"As under a green sea, I saw him drowning"</em>—creates a
              sensory overload that transports the reader into the midst of
              chaos. The vivid depiction of a soldier drowning in a “green sea”
              of gas fumes illustrates how trauma overwhelms both the senses and
              the mind. Van der Kolk highlights in{" "}
              <em>The Body Keeps the Score</em> how sensory memories are central
              to traumatic experiences, suggesting that such vivid images are a
              way for the body to encode and re-experience overwhelming stress.
            </p>
            <p className="text-lg">
              <strong>Author Background &amp; Personal Experience:</strong>{" "}
              Owen’s firsthand experience on the front lines lends a profound
              authenticity to his work. His intimate knowledge of the physical
              and psychological toll of war allows him to document not only the
              visible wounds but also the invisible scars left on the psyche.
              This direct exposure to trauma is a key factor in his ability to
              critique the glorified narratives of war. In both{" "}
              <em>Trauma and Recovery</em> and <em>The Body Keeps the Score</em>
              , the authors stress that personal experience is crucial for
              understanding trauma. Owen’s reflections, filled with raw emotion
              and vivid detail, serve as a testament to the enduring impact of
              war on both the body and mind.
            </p>
            <p className="text-lg">
              <strong>Contextual and Cultural Critique:</strong> The final lines
              of the poem—
              <em>"The old Lie: Dulce et decorum est / Pro patria mori"</em>
              —deliver a powerful critique of the cultural myth that glorifies
              war as noble and honorable. This bitter irony challenges the
              societal narratives that valorize sacrifice while ignoring the
              traumatic costs borne by soldiers. From a trauma-informed
              perspective, such a critique is essential; it underscores the need
              to re-examine cultural values that contribute to the perpetuation
              of violence and neglect the long-term psychological damage
              inflicted on individuals.
            </p>
            <p className="text-lg">
              <strong>Integration of Trauma Theories:</strong> Both Judith
              Herman and Bessel van der Kolk provide frameworks that illuminate
              the lingering effects of trauma. Herman's work emphasizes the
              disruption of memory and identity following traumatic events,
              while van der Kolk focuses on the body’s somatic response to
              trauma. Owen’s poem encapsulates these ideas: the disjointed,
              repetitive structure evokes the fragmented nature of traumatic
              memory, and the relentless sensory detail mirrors the physical
              manifestations of trauma stored in the body. Through these lenses,{" "}
              <em>Dulce et Decorum Est</em> becomes not just a war poem but a
              profound exploration of how extreme experiences shatter the human
              spirit.
            </p>
            <p className="text-lg">
              <strong>Overall Interpretation:</strong> In sum,{" "}
              <em>Dulce et Decorum Est</em> offers a comprehensive critique of
              war that is deeply informed by trauma. Owen’s vivid imagery,
              structural fragmentation, and personal insight collectively create
              a powerful narrative that challenges the romanticized portrayals
              of combat. By integrating perspectives from{" "}
              <em>Trauma and Recovery</em> and <em>The Body Keeps the Score</em>
              , we gain a deeper understanding of how the poem reflects the
              enduring impact of trauma on both individuals and society. This
              analysis not only unpacks the literary techniques used by Owen but
              also situates the poem within a broader discourse on trauma and
              recovery.
            </p>
          </div>
        </section>

        {/* Q&A Section */}
        <section id="qna" className="space-y-8">
          <h2 className="text-2xl font-semibold">Questions &amp; Answers</h2>
          <div className="prose max-w-none">
            <ol className="list-decimal ml-6 space-y-4 text-lg">
              <li>
                <strong>
                  What is the central theme of "Dulce et Decorum Est"?
                </strong>
                <p>
                  The poem critiques the glorification of war by exposing its
                  horrific realities, challenging the notion that it is noble to
                  die for one’s country.
                </p>
              </li>
              <li>
                <strong>How does Owen depict the physical toll of war?</strong>
                <p>
                  Through vivid imagery, such as “bent double, like old beggars”
                  and “blood-shod,” Owen conveys the debilitating physical
                  impact of combat on soldiers.
                </p>
              </li>
              <li>
                <strong>What role does repetition play in the poem?</strong>
                <p>
                  Repetition reinforces the relentless nature of war and the
                  cyclical trauma experienced by soldiers, emphasizing the
                  enduring impact of their suffering.
                </p>
              </li>
              <li>
                <strong>
                  How does the poem challenge patriotic propaganda?
                </strong>
                <p>
                  By juxtaposing the gruesome realities of war with the
                  idealized image of heroic sacrifice, Owen exposes the "old
                  Lie" that glorifies war and valorizes death.
                </p>
              </li>
              <li>
                <strong>
                  What is the significance of the imagery related to gas
                  attacks?
                </strong>
                <p>
                  The chaotic depiction of gas attacks highlights the sudden and
                  overwhelming nature of modern warfare, intensifying the sense
                  of fear and helplessness among soldiers.
                </p>
              </li>
              <li>
                <strong>
                  How does Owen use similes and metaphors in the poem?
                </strong>
                <p>
                  Similes such as “like old beggars under sacks” and metaphors
                  like “drowning under a green sea” vividly illustrate the
                  dehumanizing effects of war.
                </p>
              </li>
              <li>
                <strong>
                  What is the meaning behind the title "Dulce et Decorum Est"?
                </strong>
                <p>
                  The title, derived from a Latin phrase meaning "It is sweet
                  and proper to die for one's country," is used ironically to
                  critique the glorification of war.
                </p>
              </li>
              <li>
                <strong>
                  How does the structure of the poem reflect traumatic
                  experiences?
                </strong>
                <p>
                  The fragmented structure and abrupt line breaks mirror the
                  disjointed, chaotic nature of traumatic memory and the
                  disintegration of the soldier’s experience.
                </p>
              </li>
              <li>
                <strong>
                  In what ways does the poem evoke sensory experiences?
                </strong>
                <p>
                  Through detailed descriptions of sounds, sights, and physical
                  sensations, such as coughing, drowning, and the sound of
                  gas-shells, the poem immerses the reader in the visceral
                  reality of war.
                </p>
              </li>
              <li>
                <strong>What is the impact of the poem's tone?</strong>
                <p>
                  The tone is both bitter and mournful, reflecting the deep
                  sense of loss, disillusionment, and anger that underpins the
                  trauma of war.
                </p>
              </li>
              <li>
                <strong>
                  How does a trauma-informed analysis reinterpret the poem?
                </strong>
                <p>
                  A trauma-informed analysis highlights how the poem not only
                  documents physical suffering but also illuminates the
                  long-term psychological scars left on soldiers, emphasizing
                  the need for a compassionate understanding of trauma.
                </p>
              </li>
              <li>
                <strong>
                  How does Owen's personal background influence the poem?
                </strong>
                <p>
                  Owen's own experiences as a soldier during World War I infuse
                  the poem with authenticity and emotional depth, as he draws on
                  firsthand encounters with the horrors of combat to critique
                  traditional narratives of heroism.
                </p>
              </li>
              <li>
                <strong>
                  What literary devices are most prominent in the poem?
                </strong>
                <p>
                  Prominent literary devices include vivid imagery, powerful
                  similes, irony, and repetition, all of which work together to
                  underscore the brutality of war.
                </p>
              </li>
              <li>
                <strong>
                  How does the poem address the concept of honor in war?
                </strong>
                <p>
                  The poem questions traditional notions of honor by revealing
                  the gruesome reality of combat, suggesting that true honor
                  lies not in glorified sacrifice but in acknowledging the human
                  cost of conflict.
                </p>
              </li>
              <li>
                <strong>
                  What insights does the poem offer regarding the transmission
                  of trauma?
                </strong>
                <p>
                  The vivid depictions of suffering and the lasting impact of
                  war in the poem serve as a stark reminder of how trauma can
                  persist across generations, influencing both individual and
                  collective memory.
                </p>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
