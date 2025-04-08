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
          <PageTitle title="Discord In Childhood" author="D.H. Lawrence" />

          {/* Poem Section */}
          <section id="poem" className="section-content">
            <h2 className="section-title">Poem</h2>
            <article className="article-block">
              <p className="article-paragraph">
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
          <section id="analysis-video" className="section-content">
            <YoutubeFastPlayerWrapper
              videoId="_BVkAAOsFXA"
              title="Analysis Video"
            />
          </section>

          {/* Author Background Section */}
          <section id="author" className="section-content">
            <h2 className="section-title">Author Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                D.H. Lawrence (1885–1930) was an English novelist, poet, and
                essayist, whose works were often controversial due to their
                exploration of human sexuality and relationships. His work was
                often censored, and he was seen as a pioneer of modernist
                literature, focusing on the complexities of human emotions and
                societal structures. His writing frequently addresses themes of
                psychological trauma, industrialization, and the inner conflict
                of individuals against societal norms. His works, such as *Sons
                and Lovers* and *Women in Love*, depict characters struggling
                with the trauma of their environments, and this theme of discord
                and conflict is evident in "Discord in Childhood."
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              {/* Analysis Point 1: Themes */}
              <p className="section-subtitle">
                1. Themes: Domestic Violence and Childhood Trauma
              </p>
              <p className="section-paragraph">
                D.H. Lawrence’s *"Discord in Childhood"* explores the harrowing
                impact of domestic conflict on a child. The poem captures the
                emotional scars inflicted by hearing and witnessing parental
                violence. The title itself highlights the disharmony that
                corrupts the sanctity of a child’s early life, leaving behind
                psychological trauma that echoes well into adulthood.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Within the house two voices arose in anger..."
                </em>
              </p>
              <p className="section-paragraph">
                The line emphasizes the source of discord as internal and
                intimate, making the trauma more personal and inescapable. This
                conflict is not abstract—it occurs in the supposed safety of
                home, underscoring the child’s vulnerability.
              </p>

              {/* Analysis Point 2: Symbols */}
              <p className="section-subtitle">
                2. Symbols: The Ash Tree and The Whip
              </p>
              <p className="section-paragraph">
                The ash tree becomes a dominant symbol of externalized violence
                and fear. Its “terrible whips” evoke the image of corporal
                punishment or symbolic lashing, directly tying nature to the
                chaos within the household. It acts as a haunting echo of the
                domestic abuse transpiring indoors.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Outside the house an ash-tree hung its terrible whips..."
                </em>
              </p>
              <p className="section-paragraph">
                The tree's branches become metaphors for the violence and
                emotional turmoil that encircle the child, turning the entire
                setting—both inside and out—into a storm of anxiety and dread.
              </p>

              {/* Analysis Point 3: Structure and Form */}
              <p className="section-subtitle">
                3. Structure and Form: Quatrain with Enjambment
              </p>
              <p className="section-paragraph">
                The poem is composed of a single, enjambed quatrain, which gives
                it a breathless, uninterrupted intensity. The lack of stanza
                breaks reflects the overwhelming and continuous nature of the
                conflict. The enjambment blurs the lines between the exterior
                storm and the interior violence, effectively merging the natural
                and domestic worlds.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Shrieked and slashed the wind, as a ship’s / Weird rigging in
                  a storm shrieks hideously."
                </em>
              </p>
              <p className="section-paragraph">
                The enjambment mimics a stormy flow of emotions, with the lines
                bleeding into each other like the chaos of a violent episode
                that cannot be neatly contained.
              </p>

              {/* Analysis Point 4: Tone */}
              <p className="section-subtitle">
                4. Tone: Fearful and Oppressive
              </p>
              <p className="section-paragraph">
                The tone of the poem is ominous and oppressive. Lawrence
                captures the helpless terror of a child caught in the middle of
                violence. The natural elements mirror the emotional disturbance,
                reinforcing the overwhelming sense of entrapment and fear.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "The dreadful sound / Of a thick lash booming and bruising..."
                </em>
              </p>
              <p className="section-paragraph">
                Words like "dreadful," "booming," and "bruising" imbue the tone
                with menace, and suggest the inescapability of the trauma being
                experienced by the child.
              </p>

              {/* Analysis Point 5: Imagery */}
              <p className="section-subtitle">
                5. Imagery: Storm, Whipping, and Blood
              </p>
              <p className="section-paragraph">
                Vivid auditory and visual imagery intensifies the reader’s
                experience of the emotional and physical violence. The
                metaphorical “lash of the tree” and the “silence of blood”
                conjure disturbing sensory details that place the reader in the
                child’s fearful perspective.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Until it drowned / The other voice in a silence of blood..."
                </em>
              </p>
              <p className="section-paragraph">
                This final image implies not just domination but injury and
                perhaps even death—literal or emotional. The "silence of blood"
                becomes a chilling metaphor for a trauma that renders its victim
                speechless.
              </p>

              {/* Analysis Point 6: Literary Devices */}
              <p className="section-subtitle">
                6. Literary Devices: Metaphor, Personification, and Alliteration
              </p>
              <p className="section-paragraph">
                Lawrence employs metaphor and personification to intertwine
                nature with violence. The ash tree is personified as a violent
                force, and the conflict inside is described using the metaphor
                of lashes—intensifying the emotional violence with imagery
                typically associated with physical punishment. Alliteration in
                phrases like “shrieked and slashed” adds to the poem’s sonic
                violence.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "The lash of the tree / Shrieked and slashed the wind..."
                </em>
              </p>
              <p className="section-paragraph">
                These literary devices serve to fuse the natural world with
                domestic conflict, making it clear that for the child, violence
                has become part of the very fabric of their reality.
              </p>

              {/* Analysis Point 7: Psychological and Social Context */}
              <p className="section-subtitle">
                7. Psychological and Social Context
              </p>
              <p className="section-paragraph">
                The poem reflects D.H. Lawrence’s personal experiences with a
                turbulent childhood and an abusive father. It comments on the
                emotional devastation that can result from domestic violence and
                the long-lasting impact it can have on a child's mental health.
                Lawrence uses poetry as a form of catharsis, giving voice to the
                psychological scars of familial discord.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Two voices arose in anger, a slender lash / Whistling
                  delirious rage..."
                </em>
              </p>
              <p className="section-paragraph">
                The detail suggests both the presence of a more vulnerable party
                and the imbalance of power within the relationship. It
                highlights not only physical abuse but emotional cruelty that
                defines the environment the child is forced to grow up in.
              </p>

              {/* Analysis Point 8: The Speaker’s Voice */}
              <p className="section-subtitle">
                8. The Speaker’s Voice: Observational and Traumatized
              </p>
              <p className="section-paragraph">
                The speaker adopts an observational yet haunted tone—almost
                dispassionate in its delivery, as if recounting events too
                painful to fully process. This emotional distance suggests the
                lingering effects of trauma, where memory becomes blurred by
                pain and fear.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "’Neath the noise of the ash."
                </em>
              </p>
              <p className="section-paragraph">
                This final line subtly returns to the ash tree, suggesting the
                inescapability of violence and its lasting psychological echo.
                The speaker is not just recounting past events, but conveying
                how these memories remain ever-present, cloaked in the imagery
                of nature and noise.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              {/* Question 1 */}
              <li className="section-question">
                How does the poem explore the theme of trauma?
                <p className="section-answer">
                  The poem highlights trauma through the violent imagery of
                  “lash” and “whipping” associated with both the storm and
                  domestic violence. The violence within the house is mirrored
                  by the natural environment, showing how external and internal
                  forces of abuse are connected. The psychological effects of
                  the violence are emphasized by the silence of blood and the
                  inability to voice the pain.
                </p>
              </li>

              {/* Question 2 */}
              <li className="section-question">
                What role does the ash-tree play in the poem?
                <p className="section-answer">
                  The ash-tree symbolizes the external manifestation of
                  violence. Its “terrible whips” are a metaphor for the
                  emotional and physical abuse the child faces. The tree’s
                  violence mirrors the abusive environment within the home,
                  linking nature with human suffering and showing how the
                  environment can reflect and perpetuate abuse.
                </p>
              </li>

              {/* Question 3 */}
              <li className="section-question">
                What is the significance of the “silence of blood”?
                <p className="section-answer">
                  The “silence of blood” is a powerful metaphor for the
                  internalized trauma. It suggests that the emotional and
                  physical wounds inflicted by abuse have no outward expression;
                  they are suffocated within the individual. This silence is not
                  only a result of fear but also represents the deep
                  psychological scars that abuse leaves behind.
                </p>
              </li>

              {/* Question 4 */}
              <li className="section-question">
                How does the poem relate to the experience of PTSD?
                <p className="section-answer">
                  The poem’s imagery reflects the emotional and psychological
                  toll of trauma, akin to PTSD. The recurring violent imagery
                  and the internal silence echo the feelings of helplessness,
                  fear, and emotional numbness often associated with PTSD. The
                  child is trapped in a cycle of violence, unable to escape
                  either the external or internal storm.
                </p>
              </li>

              {/* Question 5 */}
              <li className="section-question">
                What does the poem suggest about the cycle of abuse?
                <p className="section-answer">
                  The poem suggests that the cycle of abuse is continuous and
                  all-encompassing. The lashings from both the tree and the
                  voices within the house create an unending cycle of pain, both
                  physical and psychological. The child’s inability to escape
                  the trauma suggests that abuse is often generational, passed
                  down through repeated experiences.
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
