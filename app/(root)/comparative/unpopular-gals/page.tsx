import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Unpopular Gals",
  description:
    "A critical study of Margaret Atwood’s 'Unpopular Gals', featuring the full story, author background, analysis, and discussion questions.",
};

export default function UnpopularGals() {
  const navLinks: NavLink[] = [
    { href: "#story", label: "Short Story" },
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
        <div className="main-content">
          <PageTitle title="Unpopular Gals" author="Margaret Atwood" />

          {/* Story Section */}
          <section id="story" className="section-content">
            <h2 className="section-title">Short Story</h2>
            <article className="article-block">
              <p className="article-paragraph">
                Some of them would turn out all right. They'd marry and move to
                the suburbs and have children and go to work and wear lipstick
                and nylons and smile at their husbands and know how to cook and
                smile at their children and lose their tempers and scold and
                clean the kitchen and phone their friends and gossip and laugh
                and have dinner parties and go on diets and get their hair done
                and drive cars and go to malls and go on holidays and take
                photos and vote and grow old and get diseases and die.
              </p>
              <p className="article-paragraph">
                But not us. We wouldn't turn out all right. We were unpopular
                girls. We were brainy, we wore thick glasses, we carried violin
                cases and bulging school bags, we didn't go to dances, we didn't
                wear make-up, we didn't have boyfriends, we were on the debate
                team, we were good at algebra, we wore strange clothes that
                didn't fit, we were intense, we read a lot. We hated ourselves
                sometimes, we hated the popular girls sometimes, we hated the
                boys who wouldn't look at us, sometimes we hated everybody. We
                stood at the edges of gyms and classrooms and corridors, silent
                and watching. We wanted things too much, we were too serious, we
                were ugly, we were funny-looking, we were shy, we said things
                that were weird, we were too smart.
              </p>
              <p className="article-paragraph">
                We didn't turn out all right. We turned out extraordinary. We
                became physicists, biologists, artists, architects, musicians,
                writers, astronauts, professors, mathematicians. We made
                discoveries. We wrote books. We painted masterpieces. We changed
                the world. We kept cats.
              </p>
            </article>
          </section>

          {/* Author Background */}
          <section id="author" className="section-content">
            <h2 className="section-title">Author Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Margaret Atwood (born 1939) is one of Canada's most renowned
                authors, widely known for her novels, poetry, and essays that
                explore gender, power, identity, and environmental themes. She
                gained international fame with works like{" "}
                <em>The Handmaid’s Tale</em>, which explores dystopian gender
                politics, and <em>Oryx and Crake</em>, which envisions a biotech
                apocalypse. Her writing is known for its sharp wit, irony,
                speculative imagination, and feminist undertones. Atwood has
                received numerous awards including the Booker Prize and the
                Governor General's Award, and her work remains a cornerstone in
                literary and feminist studies.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              <p className="section-subtitle">1. Structure and Tone</p>
              <p className="section-paragraph">
                The story's tone shifts dramatically—from ironic resignation to
                triumphant rebellion. Atwood uses repetition and a flat,
                list-like structure to contrast social conformity (“they’d marry
                and move to the suburbs”) with creative non-conformity (“we
                became physicists... we changed the world”).
              </p>

              <p className="section-subtitle">
                2. Social Expectations vs. Reality
              </p>
              <p className="section-paragraph">
                Atwood critiques traditional roles assigned to women,
                particularly those centered around appearance and domesticity.
                The “popular girls” are imagined as following a predictable life
                script, while the “unpopular girls” defy it and rewrite their
                futures.
              </p>

              <p className="section-subtitle">3. Feminist Undercurrents</p>
              <p className="section-paragraph">
                The story explores feminist reclamation of power. Intelligence,
                creativity, and independence—often punished in girlhood—become
                virtues in adulthood. Atwood celebrates the unconventional girl
                who is ignored or mocked in youth but thrives later in life.
              </p>

              <p className="section-subtitle">4. Identity and Transformation</p>
              <p className="section-paragraph">
                This is a story of vindication. Those who once felt alienated
                are revealed to be visionaries. The transformation is not
                external (makeup, popularity) but internal—driven by purpose,
                talent, and resilience.
              </p>

              <p className="section-subtitle">5. Language and Cadence</p>
              <p className="section-paragraph">
                Atwood’s use of plain, declarative sentences creates a rhythmic
                force. The repetition of “we” enacts solidarity and defiance,
                reclaiming space and rewriting narrative norms.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              <li className="section-question">Who narrates the story?</li>
              <p className="section-answer">
                A collective “we” voice representing unpopular girls, speaking
                from hindsight and solidarity.
              </p>

              <li className="section-question">
                What is the main contrast in the story?
              </li>
              <p className="section-answer">
                Between “some of them” (conventional, popular girls) and “us”
                (unpopular girls who defy social norms).
              </p>

              <li className="section-question">
                How does Atwood use repetition?
              </li>
              <p className="section-answer">
                To emphasize societal expectations and to highlight the growing
                contrast between paths taken.
              </p>

              <li className="section-question">
                What feminist message does the story offer?
              </li>
              <p className="section-answer">
                That traditional femininity is not the only—or even the
                best—path to success and fulfillment.
              </p>

              <li className="section-question">
                Why are the “unpopular” girls described as intense and serious?
              </li>
              <p className="section-answer">
                To show how qualities that are punished in youth often lead to
                brilliance in adulthood.
              </p>

              <li className="section-question">
                What is the significance of the final line: “We kept cats.”?
              </li>
              <p className="section-answer">
                It adds a humorous and stereotypical twist, embracing solitude
                and independence.
              </p>

              <li className="section-question">
                How does the story challenge beauty norms?
              </li>
              <p className="section-answer">
                By celebrating intelligence, passion, and individuality over
                appearance and popularity.
              </p>

              <li className="section-question">
                How is adolescence portrayed?
              </li>
              <p className="section-answer">
                As a period of alienation and misunderstanding for the
                “unpopular” girls.
              </p>

              <li className="section-question">Why is the story empowering?</li>
              <p className="section-answer">
                Because it reclaims failure and difference as sources of
                strength.
              </p>

              <li className="section-question">
                What does the story say about the long-term value of popularity?
              </li>
              <p className="section-answer">
                It suggests popularity is fleeting and superficial, while depth
                and intelligence endure.
              </p>

              <li className="section-question">How does Atwood use irony?</li>
              <p className="section-answer">
                To critique societal norms while celebrating those who defy
                them.
              </p>

              <li className="section-question">
                What emotions are evoked in the reader?
              </li>
              <p className="section-answer">
                Empathy, nostalgia, and ultimately triumph for the underdog.
              </p>

              <li className="section-question">
                Why might this story resonate with many readers?
              </li>
              <p className="section-answer">
                Because most people have felt like outsiders at some point, and
                the story promises hope.
              </p>

              <li className="section-question">
                How does this story reflect Atwood’s style?
              </li>
              <p className="section-answer">
                Through sharp wit, feminist critique, and sparse yet powerful
                prose.
              </p>

              <li className="section-question">
                What lesson does the story offer about growing up?
              </li>
              <p className="section-answer">
                That early exclusion does not determine future worth—and might
                even predict greatness.
              </p>
            </ol>
          </section>
        </div>
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
