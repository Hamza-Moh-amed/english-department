// pages/palestine-cartoons.tsx

import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Cartoons on Palestine",
  description:
    "Visual analysis of political cartoons and artistic commentary on Palestine and resistance.",
};

export default function CartoonsOnPalestine() {
  const navLinks: NavLink[] = [
    { href: "#overview", label: "Overview" },
    ...Array.from({ length: 10 }, (_, i) => ({
      href: `#image${i + 1}`,
      label: `Cartoon ${i + 1}`,
    })),
    { href: "#qna", label: "Q&A" },
  ];

  return (
    <main className="page-container">
      <div className="content-layout">
        <aside className="sidebar">
          <Navigation links={navLinks} />
        </aside>

        <div className="main-content">
          <PageTitle title="Cartoons on Palestine" />

          {/* Overview Section */}
          <section id="overview" className="section-content">
            <h2 className="section-title">Overview</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Cartoons related to Palestine serve as powerful tools of visual
                resistance. Each image distills complex geopolitical realities
                into symbols that are instantly recognizable. These artistic
                expressions challenge narratives, invoke solidarity, and
                document pain and resilience.
              </p>
              <p className="section-paragraph">
                The following 10 cartoons span themes of media distortion,
                violence, peace, martyrdom, dispossession, and the generational
                trauma of occupation. This page explores how each image uses
                visual rhetoric to deliver hard truths, making art a witness to
                injustice.
              </p>
            </div>
          </section>

          {/* CARTOONS 1–10 */}
          {[
            {
              id: 1,
              title: "The Wall and the Olive Tree",
              analysis: [
                "A large wall bisects the landscape as an ancient olive tree is being uprooted. The tree is an enduring Palestinian symbol, while the wall suggests separation and alienation.",
                "The violence against the tree is symbolic of ecological and cultural displacement. Its roots—visible and thick—suggest longevity, and their destruction signals forced forgetting.",
              ],
            },
            {
              id: 2,
              title: "The Map Shrinking",
              analysis: [
                "This cartoon uses a sequence of four maps showing Palestinian land loss over decades. Each frame becomes more fragmented and reduced.",
                "The green-to-white transition evokes disappearance. The image visually archives settler colonialism as spatial conquest, turning territory into absence.",
              ],
            },
            {
              id: 3,
              title: "Child in the Rubble",
              analysis: [
                "A child draws the Palestinian flag on broken walls. Rubble surrounds him, but the flag is vivid.",
                "The contrast between destruction and innocence emphasizes resistance born in childhood. Crayons become weapons of memory.",
              ],
            },
            {
              id: 4,
              title: "Censorship Filter",
              analysis: [
                "A TV reporter’s camera is shown filtering scenes through a 'balanced' lens, which distorts reality.",
                "This visual critiques the sanitization of violence and the illusion of neutrality. The camera’s gaze becomes complicit in erasure.",
              ],
            },
            {
              id: 5,
              title: "Unequal Peace Talks",
              analysis: [
                "A negotiation table shows one side with drones and the other with bread. The symbolism reveals militarized imbalance.",
                "The cartoon exposes hypocrisy in so-called diplomacy. The shape of the table—angled and uneven—visually emphasizes inequality.",
              ],
            },
            {
              id: 6,
              title: "Martyrdom and Media",
              analysis: [
                "A mother holds her child’s lifeless body as cameras surround her, flashing but cold.",
                "The cartoon critiques media voyeurism and the consumption of suffering. The mother’s grief is raw, while the cameras feel mechanical.",
              ],
            },
            {
              id: 7,
              title: "Checkpoint Birth",
              analysis: [
                "A pregnant woman lies in pain, blocked by armed soldiers at a checkpoint. Her baby is depicted with a key necklace—symbolizing the right of return.",
                "The cartoon humanizes the cost of occupation. Birth becomes a political act and a symbol of endurance.",
              ],
            },
            {
              id: 8,
              title: "The Drone Shadow",
              analysis: [
                "Children play on a sunny street, unaware of the dark outline of a drone above them.",
                "This image captures the constant threat over ordinary life. The contrast between joy and looming violence is haunting.",
              ],
            },
            {
              id: 9,
              title: "Gaza in a Cage",
              analysis: [
                "A map of Gaza is shown as a cage, with doves flying around but none inside.",
                "It visualizes siege and isolation. The bars are subtly made of missiles, blending form and meaning.",
              ],
            },
            {
              id: 10,
              title: "The Mirror of the Future",
              analysis: [
                "A child looks into a mirror, but the reflection shows them as an adult fighter. Behind them, rubble replaces a home.",
                "This metaphor critiques the militarization of youth and the burden of inherited trauma.",
              ],
            },
          ].map((cartoon) => (
            <section
              key={cartoon.id}
              id={`image${cartoon.id}`}
              className="section-content"
            >
              <h2 className="section-title">
                Cartoon {cartoon.id}: {cartoon.title}
              </h2>
              <div className="section-block">
                {/* ==== INSERT IMAGE HERE ==== */}
                <div className="image-placeholder h-64 bg-gray-300 flex items-center justify-center mb-4">
                  <span className="text-gray-600">
                    [Cartoon {cartoon.id} Placeholder]
                  </span>
                </div>

                {cartoon.analysis.map((para, i) => (
                  <p key={i} className="section-paragraph">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Q&A Section */}
        <section id="qna" className="section-content">
          <h2 className="section-title">Q&amp;A</h2>
          <ol className="section-list">
            <li className="section-question">
              1. What is the primary function of political cartoons in the
              context of Palestine?
              <p className="section-answer">
                They serve as visual protests—condensing complex injustices into
                immediate, emotional, and symbolic imagery. Cartoons bypass
                linguistic barriers to reveal truths about oppression,
                resilience, and the politics of silence.
              </p>
            </li>

            <li className="section-question">
              2. How is the olive tree used symbolically in Cartoon 1?
              <p className="section-answer">
                The uprooted olive tree represents the forced erasure of
                Palestinian history and identity. It symbolizes both longevity
                and displacement—what has deep roots is being violently severed.
              </p>
            </li>

            <li className="section-question">
              3. What rhetorical device is used in the shrinking map sequence
              (Cartoon 2)?
              <p className="section-answer">
                Visual metaphor and chronology. The maps reduce Palestinian
                presence frame by frame, creating a time-lapse of colonial
                erasure through spatial metaphor.
              </p>
            </li>

            <li className="section-question">
              4. How does the child’s drawing in Cartoon 3 contrast with the
              surrounding rubble?
              <p className="section-answer">
                The act of drawing the Palestinian flag amid destruction
                highlights a refusal to surrender identity. It juxtaposes
                childhood innocence with the ruins of war, reinforcing hope as
                resistance.
              </p>
            </li>

            <li className="section-question">
              5. In Cartoon 4, how is the media criticized?
              <p className="section-answer">
                The camera's lens acts as a metaphor for distorted perception.
                It critiques how mainstream media filters Palestinian suffering
                into palatable or ‘balanced’ narratives that neutralize moral
                clarity.
              </p>
            </li>

            <li className="section-question">
              6. What does the unequal peace talks cartoon reveal about
              diplomacy?
              <p className="section-answer">
                It exposes the farce of neutrality. The cartoon visually
                exaggerates power asymmetry, showing how negotiations are skewed
                when one side holds weapons and the other holds bread.
              </p>
            </li>

            <li className="section-question">
              7. Why is martyrdom shown surrounded by cameras in Cartoon 6?
              <p className="section-answer">
                To question how grief is commodified and consumed. The mother's
                anguish becomes a public spectacle, critiquing global voyeurism
                rather than solidarity.
              </p>
            </li>

            <li className="section-question">
              8. What does the key around the baby’s neck in Cartoon 7
              symbolize?
              <p className="section-answer">
                The right of return. The baby—born at a checkpoint—carries the
                key to ancestral homes, linking future generations to past
                dispossessions and asserting an unforgotten claim.
              </p>
            </li>

            <li className="section-question">
              9. How does Cartoon 8 use contrast in its composition?
              <p className="section-answer">
                The joy of children playing is contrasted with the dark shadow
                of a drone. This visual tension highlights the normalization of
                fear within everyday Palestinian life.
              </p>
            </li>

            <li className="section-question">
              10. What is the function of the cage metaphor in Cartoon 9?
              <p className="section-answer">
                It portrays Gaza as both a physical and psychological prison.
                The cage bars—made of missiles—represent both the blockade and
                the militarized control of mobility and life.
              </p>
            </li>

            <li className="section-question">
              11. What emotional effect is created by the mirror image in
              Cartoon 10?
              <p className="section-answer">
                It evokes sorrow and inevitability. A child seeing themselves as
                a future fighter suggests how war distorts identity formation
                and limits childhood to inherited trauma.
              </p>
            </li>

            <li className="section-question">
              12. How do these cartoons challenge dominant narratives?
              <p className="section-answer">
                By re-centering Palestinian voices and visual truths often
                excluded or misrepresented in mainstream discourse. They reject
                victim-blaming and offer alternative, subversive frames.
              </p>
            </li>

            <li className="section-question">
              13. Why is visual art a powerful medium in resistance movements?
              <p className="section-answer">
                It transcends language, appeals to emotion, and spreads rapidly.
                Cartoons distill complex struggles into accessible and
                provocative images that spark dialogue and dissent.
              </p>
            </li>

            <li className="section-question">
              14. What role does symbolism play in these cartoons?
              <p className="section-answer">
                Symbols—like keys, olive trees, doves, and walls—create layers
                of meaning rooted in history and emotion. They carry cultural
                memory and political resonance beyond their literal form.
              </p>
            </li>

            <li className="section-question">
              15. How do these cartoons connect individual pain to collective
              experience?
              <p className="section-answer">
                By showing archetypes—a grieving mother, a blocked birth, a
                dispossessed child—they universalize suffering while grounding
                it in Palestinian reality. This creates empathy and compels
                reflection.
              </p>
            </li>
          </ol>
        </section>

        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
