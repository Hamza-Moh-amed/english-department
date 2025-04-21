import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "American Born Chinese",
  description:
    "An educational analysis of Gene Luen Yang's award-winning graphic novel 'American Born Chinese' including summary, characters, themes, symbols, and Q&A.",
};

export default function AmericanBornChinese() {
  const navLinks: NavLink[] = [
    { href: "#summary", label: "Summary" },
    { href: "#author", label: "Author Background" },
    { href: "#characters", label: "Characters" },
    { href: "#themes", label: "Themes" },
    { href: "#symbols", label: "Symbols" },
    { href: "#literary-elements", label: "Literary Elements" },
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

          {/* Summary Section */}
          <section id="summary" className="section-content">
            <h2 className="section-title">Summary</h2>
            <div className="section-block">
              <p className="section-paragraph">
                _American Born Chinese_ is a groundbreaking graphic novel that
                weaves together three seemingly unrelated storylines: the
                classic Chinese tale of the Monkey King, the story of Jin Wang,
                a Chinese-American teenager struggling with identity in a mostly
                white school, and a sitcom-style narrative about Danny, a white
                teenager embarrassed by his Chinese cousin Chin-Kee. As the
                novel progresses, these storylines converge in unexpected ways,
                delivering a powerful message about race, assimilation, and
                self-acceptance.
              </p>
            </div>
          </section>

          {/* Author Background */}
          <section id="author" className="section-content">
            <h2 className="section-title">Author Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Gene Luen Yang is a Chinese-American graphic novelist,
                cartoonist, and educator. Born in California, Yang began drawing
                comics in the fifth grade. He is best known for _American Born
                Chinese_, which became the first graphic novel to be nominated
                for a National Book Award and won the Printz Award for
                excellence in young adult literature. Yang uses visual
                storytelling to explore themes of identity, faith, and culture,
                often blending traditional narrative techniques with graphic
                artistry. He served as the National Ambassador for Young
                People's Literature from 2016 to 2017.
              </p>
            </div>
          </section>

          {/* Characters Section */}
          <section id="characters" className="section-content">
            <h2 className="section-title">Characters</h2>
            <div className="section-block">
              <p className="section-subtitle">Jin Wang</p>
              <p className="section-paragraph">
                The protagonist of the novel, Jin is a Chinese-American teenager
                who struggles with cultural identity and acceptance. His desire
                to fit in leads him to reject his heritage.
              </p>

              <p className="section-subtitle">The Monkey King</p>
              <p className="section-paragraph">
                Based on the legendary figure from Chinese folklore, the Monkey
                King is a powerful being who wants to be seen as equal to the
                gods. His journey reflects themes of pride, transformation, and
                humility.
              </p>

              <p className="section-subtitle">Danny</p>
              <p className="section-paragraph">
                A seemingly separate character, Danny is a white teenager whose
                life is disrupted by his embarrassing Chinese cousin Chin-Kee.
                Danny's identity is later revealed to be more complex.
              </p>

              <p className="section-subtitle">Chin-Kee</p>
              <p className="section-paragraph">
                A caricature of offensive Chinese stereotypes, Chin-Kee’s
                exaggerated behavior and speech represent internalized racism
                and cultural shame. His presence forces the other characters
                (and the reader) to confront stereotypes.
              </p>
            </div>
          </section>

          {/* Themes Section */}
          <section id="themes" className="section-content">
            <h2 className="section-title">Themes</h2>
            <div className="section-block">
              <p className="section-subtitle">
                Cultural Identity and Assimilation
              </p>
              <p className="section-paragraph">
                The novel explores the conflict between maintaining cultural
                heritage and the pressure to assimilate into mainstream (white)
                American culture.
              </p>

              <p className="section-subtitle">Stereotypes and Racism</p>
              <p className="section-paragraph">
                Through the character of Chin-Kee and the experiences of Jin,
                Yang critiques harmful stereotypes and exposes how racism
                operates both externally and internally.
              </p>

              <p className="section-subtitle">Self-Acceptance</p>
              <p className="section-paragraph">
                Each character’s arc emphasizes the importance of embracing
                one’s true identity. The novel suggests that self-denial leads
                to harm, while self-acceptance leads to growth.
              </p>
            </div>
          </section>

          {/* Symbols Section */}
          <section id="symbols" className="section-content">
            <h2 className="section-title">Symbols</h2>
            <div className="section-block">
              <p className="section-subtitle">
                The Monkey King’s Transformation
              </p>
              <p className="section-paragraph">
                Symbolizes pride, denial, and ultimately, self-realization. His
                refusal to accept his form parallels Jin’s denial of his
                heritage.
              </p>

              <p className="section-subtitle">
                Chin-Kee’s Exaggerated Appearance
              </p>
              <p className="section-paragraph">
                A visual embodiment of racial stereotypes. Chin-Kee is
                intentionally uncomfortable and exaggerated to provoke
                reflection.
              </p>

              <p className="section-subtitle">Hair Transformation</p>
              <p className="section-paragraph">
                Jin's decision to perm his hair reflects his desire to change
                himself to fit in and be accepted, signaling his inner conflict
                and rejection of self.
              </p>
            </div>
          </section>

          {/* Literary Elements Section */}
          <section id="literary-elements" className="section-content">
            <h2 className="section-title">Literary Elements</h2>
            <div className="section-block">
              <p className="section-subtitle">Graphic Novel Structure</p>
              <p className="section-paragraph">
                The medium allows Yang to show visual metaphors and contrast
                parallel narratives. Panel transitions and visual cues help
                merge the three plotlines into one cohesive message.
              </p>

              <p className="section-subtitle">Irony and Satire</p>
              <p className="section-paragraph">
                The Chin-Kee scenes use heavy satire to critique how media and
                culture perpetuate Asian stereotypes.
              </p>

              <p className="section-subtitle">Intertwining Storylines</p>
              <p className="section-paragraph">
                The eventual merging of the Monkey King, Jin, and Danny’s
                stories symbolizes the multifaceted nature of identity and how
                cultural, personal, and social elements are deeply intertwined.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              <li className="section-question">
                What are the three main storylines in the novel?
              </li>
              <p className="section-answer">
                Jin’s story, the Monkey King’s journey, and Danny’s interactions
                with Chin-Kee.
              </p>

              <li className="section-question">
                How does Jin struggle with his identity?
              </li>
              <p className="section-answer">
                Jin tries to assimilate by distancing himself from his Chinese
                identity, including rejecting a Chinese friend and altering his
                appearance.
              </p>

              <li className="section-question">
                What is the significance of Chin-Kee?
              </li>
              <p className="section-answer">
                Chin-Kee represents harmful racial stereotypes and Jin's
                internalized racism. His exaggerated traits confront the reader
                with their discomfort.
              </p>

              <li className="section-question">
                How do the storylines connect by the end?
              </li>
              <p className="section-answer">
                It is revealed that the Monkey King is guiding Jin's spiritual
                journey, and Danny is actually Jin himself in disguise.
              </p>

              <li className="section-question">
                What does the Monkey King learn?
              </li>
              <p className="section-answer">
                He learns that embracing his true form is more powerful than
                changing to gain acceptance.
              </p>

              <li className="section-question">Why does Jin get a perm?</li>
              <p className="section-answer">
                To look like his white classmates and attract Amelia, reflecting
                his insecurity and desire to assimilate.
              </p>

              <li className="section-question">
                How is racism depicted in the novel?
              </li>
              <p className="section-answer">
                Through microaggressions at school, stereotypes in media
                (Chin-Kee), and Jin’s own prejudices.
              </p>

              <li className="section-question">
                What is the message about self-acceptance?
              </li>
              <p className="section-answer">
                True happiness and growth only come when characters accept who
                they are instead of pretending to be something else.
              </p>

              <li className="section-question">
                How does Yang use visual storytelling?
              </li>
              <p className="section-answer">
                He uses panel layouts, facial expressions, and symbolic imagery
                to enhance emotion and narrative twists.
              </p>

              <li className="section-question">
                What role does Wei-Chen play?
              </li>
              <p className="section-answer">
                Wei-Chen is Jin's Taiwanese friend who represents loyalty and
                acceptance. His eventual departure signifies the cost of Jin's
                rejection of self.
              </p>

              <li className="section-question">
                What is the significance of the Transformer toy?
              </li>
              <p className="section-answer">
                It symbolizes change and identity—both Jin and the Monkey King
                struggle with transformation and who they truly are.
              </p>

              <li className="section-question">
                Why is this novel important for young readers?
              </li>
              <p className="section-answer">
                It gives voice to immigrant experiences, addresses racism, and
                promotes empathy and cultural understanding.
              </p>

              <li className="section-question">
                How does Yang subvert expectations with format?
              </li>
              <p className="section-answer">
                He uses comic tropes like sitcoms and legends, but ties them
                together in a profound exploration of identity.
              </p>

              <li className="section-question">
                What does Danny's shame reveal?
              </li>
              <p className="section-answer">
                Danny’s shame toward Chin-Kee reflects Jin’s own shame about
                being Chinese—until he reconciles these feelings.
              </p>

              <li className="section-question">How does the novel end?</li>
              <p className="section-answer">
                Jin reconnects with Wei-Chen and begins to embrace his identity,
                closing his arc with hope and renewed self-worth.
              </p>
            </ol>
          </section>
        </div>
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
