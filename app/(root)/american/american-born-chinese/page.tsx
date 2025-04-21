import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "American Born Chinese",
  description:
    "An in-depth literary analysis of Gene Luen Yang's 'American Born Chinese', including summary, author context, character studies, themes, symbolism, visual storytelling, and interactive Q&A.",
};

export default function AmericanBornChinese() {
  const navLinks: NavLink[] = [
    { href: "#summary", label: "Summary" },
    { href: "#author", label: "Author Background" },
    { href: "#characters", label: "Characters" },
    { href: "#themes", label: "Themes" },
    { href: "#symbols", label: "Symbols" },
    { href: "#visual", label: "Visual Storytelling" },
    { href: "#literary", label: "Literary Devices" },
    { href: "#impact", label: "Cultural Impact" },
    { href: "#qna", label: "Q&A" },
  ];

  return (
    <main className="page-container">
      <div className="content-layout">
        <aside className="sidebar">
          <Navigation links={navLinks} />
        </aside>
        <div className="main-content">
          <PageTitle title="American Born Chinese" author="Gene Luen Yang" />

          {/* Summary */}
          <section id="summary" className="section-content">
            <h2 className="section-title">Summary</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Gene Luen Yang's *American Born Chinese* merges three distinct
                narratives: the tale of the Monkey King from Chinese legend; the
                modern coming-of-age story of Jin Wang, a Chinese-American
                student trying to fit into a white-dominated environment; and a
                sitcom-style parody featuring Danny and his embarrassing cousin
                Chin-Kee. These stories, initially disparate, eventually
                converge into a powerful commentary on race, identity, and
                cultural acceptance.
              </p>
              <p className="section-paragraph">
                The novel challenges readers to question the boundaries of self
                and society, drawing sharp attention to stereotypes and the
                internal struggles of marginalized identities. Its innovative
                use of the graphic novel format allows for rich symbolism and
                multi-layered storytelling.
              </p>
            </div>
          </section>

          {/* Author Background */}
          <section id="author" className="section-content">
            <h2 className="section-title">Author Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Gene Luen Yang is a Chinese-American cartoonist, educator, and
                graphic novelist. Born in 1973 in California to immigrant
                parents from Taiwan and Hong Kong, Yang began drawing comics in
                fifth grade. His storytelling blends Eastern and Western
                traditions, and he uses visual media to address themes of faith,
                identity, and cultural tension.
              </p>
              <p className="section-paragraph">
                *American Born Chinese* was a breakthrough work—it was the first
                graphic novel to be nominated for a National Book Award and won
                the Michael L. Printz Award. Yang has served as the National
                Ambassador for Young People's Literature and remains a leading
                voice in contemporary American literature and comics.
              </p>
            </div>
          </section>

          {/* Characters */}
          <section id="characters" className="section-content">
            <h2 className="section-title">Characters</h2>
            <div className="section-block">
              <p className="section-subtitle">Jin Wang</p>
              <p className="section-paragraph">
                A young Chinese-American boy who struggles with identity and
                acceptance. Jin’s desire to fit in causes him to distance
                himself from his cultural background, and he undergoes a
                significant transformation—literally and metaphorically.
              </p>

              <p className="section-subtitle">The Monkey King</p>
              <p className="section-paragraph">
                Adapted from the classic Chinese novel *Journey to the West*,
                the Monkey King represents pride, power, and eventual humility.
                His struggle to be accepted among the gods parallels Jin's own
                identity crisis.
              </p>

              <p className="section-subtitle">Danny</p>
              <p className="section-paragraph">
                Danny is the American alter ego of Jin—a persona he adopts to
                escape his Asian identity. Danny's life is disrupted by
                Chin-Kee, embodying the internal shame Jin feels.
              </p>

              <p className="section-subtitle">Chin-Kee</p>
              <p className="section-paragraph">
                A painfully exaggerated stereotype of Chinese culture,
                Chin-Kee’s offensive portrayal is intentionally shocking. He
                forces readers to confront the racism embedded in pop culture
                and within themselves.
              </p>

              <p className="section-subtitle">Wei-Chen Sun</p>
              <p className="section-paragraph">
                Jin’s Taiwanese friend who maintains his cultural pride. His
                eventual transformation into a rebel contrasts with Jin’s own
                denial and later rediscovery of identity.
              </p>
            </div>
          </section>

          {/* Themes */}
          <section id="themes" className="section-content">
            <h2 className="section-title">Themes</h2>
            <div className="section-block">
              <p className="section-subtitle">
                Cultural Identity & Assimilation
              </p>
              <p className="section-paragraph">
                The novel delves into the internal battle of embracing heritage
                versus blending in. Jin’s journey mirrors the experience of many
                immigrants who feel torn between cultures.
              </p>

              <p className="section-subtitle">Racism and Stereotyping</p>
              <p className="section-paragraph">
                Chin-Kee functions as a visual and narrative critique of the
                harmful portrayals of Asians in Western media. Yang doesn’t shy
                away from exposing how stereotypes dehumanize.
              </p>

              <p className="section-subtitle">
                Self-Acceptance and Transformation
              </p>
              <p className="section-paragraph">
                Both Jin and the Monkey King must confront and accept their true
                selves. Their transformations symbolize internal growth and
                spiritual reconciliation.
              </p>
            </div>
          </section>

          {/* Symbols */}
          <section id="symbols" className="section-content">
            <h2 className="section-title">Symbols</h2>
            <div className="section-block">
              <p className="section-subtitle">Hair Transformation</p>
              <p className="section-paragraph">
                Jin’s perm symbolizes his rejection of his Asian identity and
                his yearning to assimilate. The act of changing his appearance
                illustrates internalized racism.
              </p>

              <p className="section-subtitle">The Monkey King’s Disguise</p>
              <p className="section-paragraph">
                His transformations throughout the story reflect the burden of
                ego and the need to accept oneself as they are.
              </p>

              <p className="section-subtitle">The Transformer Toy</p>
              <p className="section-paragraph">
                A subtle but recurring object symbolizing change, identity
                fluidity, and duality. Just as Transformers change shape, so too
                do the characters’ self-perceptions.
              </p>
            </div>
          </section>

          {/* Visual Storytelling */}
          <section id="visual" className="section-content">
            <h2 className="section-title">Visual Storytelling</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Yang uses the graphic novel form to show—not just tell—emotion,
                symbolism, and satire. Panel transitions, exaggerated
                expressions, and cultural markers (e.g., clothing, school
                scenes) work in tandem with the narrative.
              </p>
              <p className="section-paragraph">
                For instance, Chin-Kee’s sitcom appearance is rendered with
                laugh tracks and visual gags that parody racist media tropes,
                while Jin’s emotional evolution is captured through shifts in
                color palettes and layout density.
              </p>
            </div>
          </section>

          {/* Literary Devices */}
          <section id="literary" className="section-content">
            <h2 className="section-title">Literary Devices</h2>
            <div className="section-block">
              <p className="section-subtitle">Satire</p>
              <p className="section-paragraph">
                The character of Chin-Kee satirizes racist tropes by amplifying
                them to absurd levels. This use of satire is meant to provoke
                reflection rather than laughter.
              </p>

              <p className="section-subtitle">Parallel Narratives</p>
              <p className="section-paragraph">
                The novel’s three interwoven storylines echo and build on each
                other thematically. Their eventual convergence highlights
                identity’s complexity.
              </p>

              <p className="section-subtitle">Irony</p>
              <p className="section-paragraph">
                Many moments in the novel are laced with irony, especially in
                how characters who want to be someone else end up confronting
                themselves.
              </p>
            </div>
          </section>

          {/* Cultural Impact */}
          <section id="impact" className="section-content">
            <h2 className="section-title">Cultural Impact</h2>
            <div className="section-block">
              <p className="section-paragraph">
                *American Born Chinese* broke ground as one of the first graphic
                novels to explore Asian-American identity through such a layered
                and literary lens. Its success helped legitimize the graphic
                novel as a serious medium in educational spaces and inspired a
                new generation of diverse creators.
              </p>
              <p className="section-paragraph">
                The novel has been adapted into other media, including a Disney+
                series, further expanding its reach and cultural relevance.
              </p>
            </div>
          </section>

          {/* Q&A */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              <li className="section-question">
                Why does Yang use three storylines instead of one?
              </li>
              <p className="section-answer">
                To emphasize the multifaceted nature of identity and to explore
                the same theme from different cultural, historical, and personal
                angles.
              </p>
              <li className="section-question">
                What does the Monkey King symbolize?
              </li>
              <p className="section-answer">
                Pride, transformation, and the journey to self-acceptance.
              </p>
              <li className="section-question">
                How is Chin-Kee’s character both offensive and effective?
              </li>
              <p className="section-answer">
                He intentionally embodies stereotypes to force readers to
                reflect on the discomfort and reality of racist portrayals.
              </p>
              <li className="section-question">
                What role does visual design play in storytelling?
              </li>
              <p className="section-answer">
                It enhances emotion, directs pacing, and provides subtext—e.g.,
                Chin-Kee’s sitcom style mocks pop culture stereotypes.
              </p>
              <li className="section-question">
                How does Jin’s relationship with Wei-Chen evolve?
              </li>
              <p className="section-answer">
                It starts with bonding over shared background but breaks due to
                Jin’s internalized shame. The reconnection at the end symbolizes
                Jin’s acceptance.
              </p>
              <li className="section-question">
                Why does Jin transform into Danny?
              </li>
              <p className="section-answer">
                As a metaphor for self-erasure—he tries to reject his cultural
                identity to gain acceptance.
              </p>
              <li className="section-question">
                How is the theme of transformation reflected visually?
              </li>
              <p className="section-answer">
                Through literal character shifts (Jin → Danny, Monkey King’s
                disguises) and metaphorical visual motifs.
              </p>
              <li className="section-question">
                How does the novel handle internalized racism?
              </li>
              <p className="section-answer">
                Through Jin’s attempts to deny his identity, including rejecting
                friends and changing his appearance.
              </p>
              <li className="section-question">
                What is the purpose of humor in the novel?
              </li>
              <p className="section-answer">
                To disarm the reader and deliver serious messages about identity
                and prejudice through satire and absurdity.
              </p>
              <li className="section-question">
                What lesson does the Monkey King learn?
              </li>
              <p className="section-answer">
                That humility and self-acceptance are more powerful than trying
                to conform to others’ expectations.
              </p>
            </ol>
          </section>
        </div>
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
