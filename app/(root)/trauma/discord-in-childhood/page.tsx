import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

import YoutubeFastPlayerWrapper from "@/components/YoutubeFastPlayerWrapper";

export const metadata = {
  title: "Discord In Childhood",
  description:
    "A page dedicated to D.H. Lawrence's poem 'Discord In Childhood,' exploring its themes, literary analysis, and a detailed Q&A section.",
};

export default function DiscordInChildhood() {
  const navLinks: NavLink[] = [
    { href: "#poem", label: "Poem" },
    { href: "#analysis-video", label: "Analysis Video" },
    { href: "#broke-silence", label: "I Broke Silence" },
    { href: "#analysis", label: "Analysis" },
    { href: "#qna", label: "Q&A" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* For medium screens and up: show Navigation on the left and PageTitle centered */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left: Navigation */}
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          {/* Center: PageTitle */}
          <div className="flex-grow text-center">
            <PageTitle title="Discord In Childhood" author="D.H. Lawrence" />
          </div>
          {/* Right: Empty div to balance the left column */}
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Discord In Childhood" author="D.H. Lawrence" />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Poem Section */}
        <section id="poem" className="space-y-8">
          <h2 className="text-2xl font-semibold">Poem</h2>
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg whitespace-pre-line">
              Outside the house an ash-tree hung its terrible whips,
              <br />
              And at night when the wind arose, the lash of the tree
              <br />
              Shrieked and slashed the wind, as a ship’s
              <br />
              Weird rigging in a storm shrieks hideously.
              <br />
              <br />
              Within the house two voices arose in anger, a slender lash
              <br />
              Whistling delirious rage, and the dreadful sound
              <br />
              Of a thick lash booming and bruising, until it drowned
              <br />
              The other voice in a silence of blood, ’neath the noise of the
              ash.
            </p>
          </article>
        </section>

        {/* YouTube Embed Section */}
        <section id="analysis-video">
          <YoutubeFastPlayerWrapper
            videoId="_BVkAAOsFXA"
            title="Analysis Video"
          />
        </section>

        {/* Author Background Section */}
        <section id="author" className="space-y-8">
          <h2 className="text-2xl font-semibold text-left">
            Author Background
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              D.H. Lawrence (1885–1930) was an English novelist, poet, and
              essayist, whose works were often controversial due to their
              exploration of human sexuality and relationships. His work was
              often censored, and he was seen as a pioneer of modernist
              literature, focusing on the complexities of human emotions and
              societal structures. His writing frequently addresses themes of
              psychological trauma, industrialization, and the inner conflict of
              individuals against societal norms. His works, such as *Sons and
              Lovers* and *Women in Love*, depict characters struggling with the
              trauma of their environments, and this theme of discord and
              conflict is evident in "Discord in Childhood."
            </p>
          </div>
        </section>

        {/* Analysis Section */}
        <section id="analysis" className="space-y-8">
          <h2 className="text-2xl font-semibold">Analysis</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              <strong>1. Theme of Trauma and PTSD</strong>
            </p>
            <p className="text-lg">
              The poem *"Discord In Childhood"* explores the theme of trauma,
              particularly the lasting impact of abuse. The imagery of the “lash
              of the tree” and “the dreadful sound / Of a thick lash booming and
              bruising” suggests a violent and oppressive environment that scars
              the children involved. The idea of trauma here is not only
              physical but also psychological, affecting the emotional state of
              the individual.
            </p>
            <p className="text-lg">
              *Quote*:
              <em>
                "Within the house two voices arose in anger, a slender lash /
                Whistling delirious rage, and the dreadful sound / Of a thick
                lash booming and bruising."
              </em>
            </p>
            <p className="text-lg">
              This imagery ties physical violence to emotional disturbance,
              suggesting that the consequences of such abuse can leave deep
              psychological scars. The “silence of blood” implies a lasting
              internalized silence, where trauma becomes part of the
              individual's existence, muted but persistent.
            </p>

            <p className="text-lg">
              <strong>2. Abuse and its Psychological Effects</strong>
            </p>
            <p className="text-lg">
              Lawrence uses the contrast between the external storm (the ash
              tree) and the domestic violence within the house to illustrate the
              relationship between the external environment and internal
              suffering. The brutal sounds of the lash and the storm are
              parallel metaphors for the destructive nature of the trauma the
              children experience. The domestic space is not a sanctuary but a
              place of fear and violence, amplifying the emotional chaos within.
            </p>
            <p className="text-lg">
              *Quote*:
              <em>
                "Until it drowned / The other voice in a silence of blood,
                ’neath the noise of the ash."
              </em>
            </p>
            <p className="text-lg">
              The line “silence of blood” poignantly suggests that the violence
              within the house is not only audible but is also internalized,
              with no room for expression or escape. The psychological
              ramifications of the abuse are suffocating, drowning the victim’s
              ability to speak or voice their pain.
            </p>

            <p className="text-lg">
              <strong>3. Symbolism of Nature and Violence</strong>
            </p>
            <p className="text-lg">
              The ash-tree, with its “terrible whips,” acts as a dual symbol. On
              one hand, it represents the natural world and the violence of the
              storm, but it also mirrors the abusive situation within the home.
              The “lash” of the tree becomes a metaphor for the physical and
              emotional abuse the children experience. The violence of nature,
              like the violence in the home, is uncontrollable and destructive,
              perpetuating a cycle of pain and suffering.
            </p>

            <p className="text-lg">
              *Quote*:
              <em>"Outside the house an ash-tree hung its terrible whips."</em>
            </p>
            <p className="text-lg">
              This personification of the tree as violent and threatening
              reflects how the natural world echoes the oppressive forces at
              play within the home. The connection between the tree's lashes and
              the sounds of abuse suggests that both the external environment
              and the home contribute to the trauma experienced by the child.
            </p>

            <p className="text-lg">
              <strong>4. The Cycle of Abuse</strong>
            </p>
            <p className="text-lg">
              The poem presents a vision of childhood dominated by violence and
              fear, where every interaction is marked by anger and brutality.
              The recurrence of the lash in both the external and internal
              spaces suggests that trauma perpetuates itself, with no clear end.
              The cycle of abuse continues as the voices within the house clash
              and the lash of the tree continues to “shriek and slash.” The
              implication is that trauma is generational, passed down from one
              experience to the next.
            </p>
          </div>
        </section>

        {/* Q&A Section */}
        <section id="qna" className="space-y-8">
          <h2 className="text-2xl font-semibold">Questions & Answers</h2>
          <div className="prose max-w-none">
            <ol className="list-decimal ml-6 space-y-4 text-lg">
              <li>
                <strong>How does the poem explore the theme of trauma?</strong>
                <p>
                  The poem highlights trauma through the violent imagery of
                  “lash” and “whipping” associated with both the storm and
                  domestic violence. The violence within the house is mirrored
                  by the natural environment, showing how external and internal
                  forces of abuse are connected. The psychological effects of
                  the violence are emphasized by the silence of blood and the
                  inability to voice the pain.
                </p>
              </li>

              <li>
                <strong>What role does the ash-tree play in the poem?</strong>
                <p>
                  The ash-tree symbolizes the external manifestation of
                  violence. Its “terrible whips” are a metaphor for the
                  emotional and physical abuse the child faces. The tree’s
                  violence mirrors the abusive environment within the home,
                  linking nature with human suffering and showing how the
                  environment can reflect and perpetuate abuse.
                </p>
              </li>

              <li>
                <strong>
                  What is the significance of the “silence of blood”?
                </strong>
                <p>
                  The “silence of blood” is a powerful metaphor for the
                  internalized trauma. It suggests that the emotional and
                  physical wounds inflicted by abuse have no outward expression;
                  they are suffocated within the individual. This silence is not
                  only a result of fear but also represents the deep
                  psychological scars that abuse leaves behind.
                </p>
              </li>

              <li>
                <strong>
                  How does the poem relate to the experience of PTSD?
                </strong>
                <p>
                  The poem’s imagery reflects the emotional and psychological
                  toll of trauma, akin to PTSD. The recurring violent imagery
                  and the internal silence echo the feelings of helplessness,
                  fear, and emotional numbness often associated with PTSD. The
                  child is trapped in a cycle of violence, unable to escape
                  either the external or internal storm.
                </p>
              </li>

              <li>
                <strong>
                  What does the poem suggest about the cycle of abuse?
                </strong>
                <p>
                  The poem suggests that the cycle of abuse is continuous and
                  all-encompassing. The lashings from both the tree and the
                  voices within the house create an unending cycle of pain, both
                  physical and psychological. The child’s inability to escape
                  the trauma suggests that abuse is often generational, passed
                  down through repeated experiences.
                </p>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
