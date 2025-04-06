import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Roar by Betty Shamieh - Detailed Analysis",
  description:
    "A comprehensive analysis of Betty Shamieh's play 'Roar', exploring themes, characters, cultural context, and literary elements of this Palestinian-American family drama.",
};

export default function RoarAnalysis() {
  const navLinks: NavLink[] = [
    { href: "#playwright", label: "Playwright Background" },
    { href: "#synopsis", label: "Synopsis" },
    { href: "#characters", label: "Characters" },
    { href: "#themes", label: "Themes" },
    { href: "#cultural-context", label: "Cultural Context" },
    { href: "#symbols", label: "Symbols" },
    { href: "#dramatic-elements", label: "Dramatic Elements" },
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
          <PageTitle title="Roar" author="Betty Shamieh" />

          {/* Playwright Background Section */}
          <section id="playwright" className="section-content">
            <h2 className="section-title">Playwright Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Betty Shamieh is a Palestinian-American playwright and actor
                known for her works that explore the Arab-American experience.
                Born to Palestinian immigrant parents, Shamieh's work often
                examines themes of identity, displacement, and cultural conflict
                through the lens of the Palestinian diaspora.
              </p>
              <p className="section-paragraph">
                Shamieh graduated from Harvard University and the Yale School of
                Drama. Her plays, including <strong>Roar</strong>,{" "}
                <strong>The Black Eyed</strong>, and{" "}
                <strong>Chocolate in Heat</strong>, have been produced
                Off-Broadway and at major regional theaters. She has received
                numerous awards including an NEA grant, Sundance Theatre
                Institute residency, and Rockefeller Foundation Bellagio
                residency grant.
              </p>
              <p className="section-paragraph">
                <strong>Roar</strong> premiered in 2004 with The New Group in
                New York City. The play examines two generations of
                Palestinian-Americans living in Detroit during the first Gulf
                War, blending family drama with political undertones and
                unexpected humor.
              </p>
            </div>
          </section>

          {/* Synopsis Section */}
          <section id="synopsis" className="section-content">
            <h2 className="section-title">Synopsis</h2>
            <div className="section-block">
              <p className="section-paragraph">
                <strong>Roar</strong> follows the Yacoub family,
                Palestinian-Americans living above their liquor store in Detroit
                during the first Gulf War. The play centers on the conflicts
                between Karema, the strong-willed matriarch; Ahmed, her musician
                husband who gave up his artistic dreams; their teenage daughter
                Irene who aspires to be a singer; and Hala, Karema's sister who
                arrives from Kuwait after being displaced by the war.
              </p>
              <p className="section-paragraph">
                The family tensions escalate as Irene pursues her music career
                with her father's support but against her mother's wishes, while
                Hala's arrival stirs up old conflicts and romantic
                entanglements. The play explores how the characters navigate
                their Palestinian heritage while trying to achieve their
                versions of the American dream.
              </p>
              <p className="section-paragraph">
                The title <strong>Roar</strong> comes from an Arabic song in the
                play that translates to "hum, sing, and roar," representing the
                characters' struggles to find their voices amidst cultural
                displacement and family conflict.
              </p>
            </div>
          </section>

          {/* Characters Section */}
          <section id="characters" className="section-content">
            <h2 className="section-title">Characters</h2>
            <div className="section-block">
              <p className="section-subtitle">Karema Yacoub</p>
              <p className="section-paragraph">
                A Palestinian-American woman in her late thirties, Karema is the
                pragmatic matriarch who runs the family liquor store with an
                iron fist. Having survived trauma in her youth, she is fiercely
                protective of her family but struggles to show affection. Her
                relationship with her sister Hala is fraught with unresolved
                conflict from their shared past.
              </p>
              <p className="section-subtitle">Ahmed Yacoub</p>
              <p className="section-paragraph">
                Karema's husband, a Palestinian-American man in his early
                forties. Once a celebrated musician in Jordan, Ahmed gave up his
                career to immigrate to America. He lives with regret over his
                abandoned dreams and secretly resents Karema for suppressing his
                musical expression. He sees his daughter Irene as his second
                chance at artistic fulfillment.
              </p>
              <p className="section-subtitle">Irene Yacoub</p>
              <p className="section-paragraph">
                The 15-year-old daughter of Karema and Ahmed, Irene is a
                rebellious teenager determined to become a singer. Caught
                between her parents' conflicting values, she struggles with her
                Palestinian identity while trying to make it in American music.
                Her relationship with her aunt Hala becomes a catalyst for her
                self-discovery.
              </p>
              <p className="section-subtitle">Hala</p>
              <p className="section-paragraph">
                Karema's sister, a Palestinian woman in her mid-thirties who
                arrives from Kuwait after being displaced by the Gulf War.
                Charismatic and free-spirited, Hala represents the life Karema
                might have had if she hadn't immigrated. Her presence disrupts
                the family dynamics and forces long-buried secrets to surface.
              </p>
              <p className="section-subtitle">Abe</p>
              <p className="section-paragraph">
                Ahmed's brother, a successful music producer who has distanced
                himself from his Palestinian roots. His Jewish conversion and
                assimilation into American culture make him a controversial
                figure in the family, yet Irene sees him as her ticket to music
                industry success.
              </p>
            </div>
          </section>

          {/* Themes Section */}
          <section id="themes" className="section-content">
            <h2 className="section-title">Themes</h2>
            <div className="section-block">
              <p className="section-subtitle">The Immigrant Experience</p>
              <p className="section-paragraph">
                The play explores the complexities of the Palestinian-American
                experience, showing how the characters navigate between two
                cultures. Karema and Ahmed have different approaches to
                assimilation - she embraces practicality and financial security,
                while he longs for artistic expression and connection to his
                roots.
              </p>
              <p className="section-quote">
                Quote: <em>"Here no one tries to pretend we belong."</em> -
                Karema
              </p>
              <p className="section-subtitle">Family and Sacrifice</p>
              <p className="section-paragraph">
                The Yacoub family's conflicts reveal the sacrifices made for
                immigration and the American dream. Ahmed gave up his music
                career, Karema suppresses her emotions, and Irene is caught
                between honoring her heritage and pursuing her dreams. The play
                questions whether these sacrifices were worth the cost.
              </p>
              <p className="section-subtitle">
                Artistic Expression vs. Survival
              </p>
              <p className="section-paragraph">
                A central conflict pits artistic passion against practical
                survival. Ahmed resents giving up music to run the store, while
                Irene's musical ambitions threaten her academic future. The play
                asks whether immigrants must choose between creative fulfillment
                and financial stability.
              </p>
              <p className="section-subtitle">Cultural Identity</p>
              <p className="section-paragraph">
                Each character grapples with Palestinian identity differently -
                from Irene's embarrassment about Arabic to Abe's complete
                rejection of his heritage. The play examines how
                second-generation immigrants negotiate cultural identity in
                America.
              </p>
            </div>
          </section>

          {/* Cultural Context Section */}
          <section id="cultural-context" className="section-content">
            <h2 className="section-title">Cultural Context</h2>
            <div className="section-block">
              <p className="section-paragraph">
                <strong>Roar</strong> is set during the first Gulf War
                (1990-1991), when many Palestinians were expelled from Kuwait
                due to political tensions. This historical backdrop informs
                Hala's character and the family's discussions about Middle
                Eastern politics.
              </p>
              <p className="section-paragraph">
                The play also references Black September (1970), when Jordan
                forcibly expelled Palestinian fighters and civilians, an event
                that traumatized Karema and Hala's family. These historical
                events shape the characters' worldviews and their relationship
                to the concept of home.
              </p>
              <p className="section-paragraph">
                Shamieh incorporates Arabic music and language throughout the
                play, particularly through the traditional song "Jumstler on
                Kudor Aymaya" (Sing a note and take my eyes in exchange), which
                becomes a metaphor for artistic passion and cultural
                preservation.
              </p>
              <p className="section-quote">
                Quote:{" "}
                <em>
                  "I'm going to hum and sing and roar, make my listeners drunk
                  on sound."
                </em>{" "}
                - Translation of Arabic song from the play
              </p>
            </div>
          </section>

          {/* Symbols Section */}
          <section id="symbols" className="section-content">
            <h2 className="section-title">Symbols</h2>
            <div className="section-block">
              <p className="section-subtitle">The Liquor Store</p>
              <p className="section-paragraph">
                The family's liquor store represents both their economic
                survival and their entrapment. While it provides financial
                security, it also symbolizes how their dreams have been confined
                by the necessities of immigrant life. The neon sign "Ahmed's
                Liquor and Snacks" ironically highlights how Ahmed's identity
                has been reduced to a business owner rather than an artist.
              </p>
              <p className="section-subtitle">The 'Oud</p>
              <p className="section-paragraph">
                The 'oud (a Middle Eastern lute) represents cultural heritage
                and artistic passion. Hala's 'oud, given to Irene at the end of
                the play, symbolizes the passing down of cultural traditions to
                the next generation. Its presence contrasts with Ahmed's tubich
                (another Middle Eastern instrument) that he is forbidden to play
                in the house.
              </p>
              <p className="section-subtitle">Arabic Music</p>
              <p className="section-paragraph">
                Traditional Arabic songs symbolize cultural roots and emotional
                expression. The play contrasts Irene's desire to sing American
                blues with Hala's insistence that she learn Arabic music,
                representing the tension between assimilation and cultural
                preservation.
              </p>
              <p className="section-subtitle">The Tea Kettle</p>
              <p className="section-paragraph">
                The constantly whistling tea kettle serves as both a domestic
                symbol and a metaphor for suppressed emotions about to boil
                over. Its recurring appearances mark moments of tension in the
                household.
              </p>
            </div>
          </section>

          {/* Dramatic Elements Section */}
          <section id="dramatic-elements" className="section-content">
            <h2 className="section-title">Dramatic Elements</h2>
            <div className="section-block">
              <p className="section-subtitle">Structure</p>
              <p className="section-paragraph">
                The play follows a traditional two-act structure with ten
                scenes. Shamieh uses this conventional framework to contain the
                explosive family dynamics, creating tension between form and
                content. The domestic setting contrasts with the larger
                political and cultural issues the characters grapple with.
              </p>
              <p className="section-subtitle">Language</p>
              <p className="section-paragraph">
                Shamieh blends English with Arabic phrases and cultural
                references, creating a linguistic texture that reflects the
                characters' bicultural experience. The dialogue shifts between
                humorous banter and intense confrontation, mirroring the
                family's volatile dynamics.
              </p>
              <p className="section-subtitle">Music</p>
              <p className="section-paragraph">
                Music is both theme and dramatic device in the play. Arabic
                songs are woven into the narrative, with characters breaking
                into song at key emotional moments. The contrast between
                traditional Arabic music and American blues underscores the
                cultural conflicts.
              </p>
              <p className="section-subtitle">Cultural Specificity</p>
              <p className="section-paragraph">
                Shamieh incorporates specific Palestinian cultural references -
                from food (falafel, parsley salad) to customs (the three-day
                rule for guests) - to create an authentic immigrant household.
                These details ground the universal family drama in a specific
                cultural context.
              </p>
            </div>
          </section>

          {/* Questions & Answers Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              <li className="section-question">
                What is the significance of the play's title "Roar"?
                <p className="section-answer">
                  The title comes from the Arabic song Hala teaches Irene, which
                  translates to "hum, sing, and roar." It represents the
                  characters' struggle to find their voices - whether through
                  music, cultural identity, or personal expression. The "roar"
                  symbolizes both artistic passion and the breaking of silence
                  about family trauma and cultural displacement.
                </p>
              </li>
              <li className="section-question">
                How does the play explore the theme of cultural assimilation?
                <p className="section-answer">
                  The play examines assimilation through generational
                  differences - Karema and Ahmed as first-generation immigrants
                  who maintain traditions, Irene as a second-generation teen
                  embarrassed by her heritage, and Abe who completely
                  assimilates by converting to Judaism. The characters debate
                  whether assimilation is necessary for success or a betrayal of
                  identity.
                </p>
              </li>
              <li className="section-question">
                What role does music play in the characters' lives?
                <p className="section-answer">
                  Music represents both cultural heritage and personal
                  expression. For Ahmed, it's the career he sacrificed; for
                  Irene, it's her American dream; for Hala, it's a connection to
                  Palestine. The conflict over what kind of music Irene should
                  sing mirrors larger questions about cultural identity.
                </p>
              </li>
              <li className="section-question">
                How does the setting of Detroit contribute to the play's themes?
                <p className="section-answer">
                  Detroit's working-class environment and Arab immigrant
                  community provide a specific context for the family's
                  struggles. The city's economic decline parallels Ahmed's faded
                  musical dreams, while its racial tensions inform the
                  characters' experiences as Arab-Americans.
                </p>
              </li>
              <li className="section-question">
                What is the significance of Hala's character?
                <p className="section-answer">
                  Hala represents the life Karema might have had if she hadn't
                  immigrated - free-spirited but unstable. Her arrival forces
                  the family to confront buried secrets and unresolved trauma.
                  As a displaced Palestinian from Kuwait, she also embodies the
                  ongoing political conflicts affecting Palestinians.
                </p>
              </li>
              <li className="section-question">
                How does the play portray the American Dream?
                <p className="section-answer">
                  The play presents a complex view of the American Dream - for
                  Karema, it's financial security through hard work; for Ahmed,
                  it's artistic freedom he never achieved; for Irene, it's
                  musical stardom. The ending suggests the dream may be elusive
                  but worth pursuing on one's own terms.
                </p>
              </li>
              <li className="section-question">
                What is the significance of the family's liquor store?
                <p className="section-answer">
                  The store represents both their economic survival and their
                  entrapment. While it provides stability, it confines Ahmed's
                  artistic spirit and symbolizes how immigrant families often
                  sacrifice dreams for practical necessities. Its location above
                  the store literalizes how their lives are built on this
                  foundation.
                </p>
              </li>
              <li className="section-question">
                How does the play address intergenerational trauma?
                <p className="section-answer">
                  The play reveals how trauma from Black September in Jordan
                  affects Karema and Hala differently, and how this trauma is
                  passed down to Irene. Karema's overprotectiveness and Ahmed's
                  midlife crisis both stem from their immigrant experiences,
                  impacting Irene's development.
                </p>
              </li>
              <li className="section-question">
                What is the significance of Abe's character?
                <p className="section-answer">
                  Abe represents complete assimilation - he changes his name,
                  converts to Judaism, and distances himself from his
                  Palestinian roots. His success in the music industry contrasts
                  with Ahmed's struggles, raising questions about what
                  immigrants must sacrifice to "make it" in America.
                </p>
              </li>
              <li className="section-question">
                How does the play use humor?
                <p className="section-answer">
                  Shamieh uses humor to balance the play's heavy themes,
                  particularly through Hala's witty dialogue and the family's
                  sarcastic banter. This humor reflects real family dynamics and
                  makes the immigrant experience more relatable, preventing the
                  play from becoming overly didactic.
                </p>
              </li>
              <li className="section-question">
                What is the significance of the ending?
                <p className="section-answer">
                  The ending shows Karema and Irene rebuilding their lives after
                  Ahmed leaves - closing the store, moving to an apartment, and
                  Irene pursuing work with Abe. It suggests resilience and the
                  possibility of forging new paths while maintaining family
                  bonds, albeit in changed forms.
                </p>
              </li>
              <li className="section-question">
                How does the play address gender roles?
                <p className="section-answer">
                  The play contrasts traditional Palestinian gender roles with
                  American expectations. Karema is the pragmatic businesswoman
                  challenging stereotypes, while Hala embodies sexual freedom.
                  Irene navigates between these models as she forms her identity
                  as a young Arab-American woman.
                </p>
              </li>
              <li className="section-question">
                What is the significance of the Gulf War backdrop?
                <p className="section-answer">
                  The Gulf War context highlights how global politics affect
                  immigrant families. Hala's displacement from Kuwait connects
                  the family to current events in the Middle East, forcing them
                  to confront their relationship to both America and their
                  homeland during a time of conflict.
                </p>
              </li>
              <li className="section-question">
                How does the play portray father-daughter relationships?
                <p className="section-answer">
                  Ahmed and Irene's relationship is central - he supports her
                  musical ambitions as a second chance for his own dreams. Their
                  bond creates tension with Karema, who worries about
                  impractical artistic pursuits. The play explores how immigrant
                  parents project their hopes and regrets onto their children.
                </p>
              </li>
              <li className="section-question">
                What does the play say about the Palestinian diaspora
                experience?
                <p className="section-answer">
                  The play portrays the Palestinian diaspora as a community
                  caught between worlds - unable to fully return home yet not
                  fully accepted in America. Through the characters' debates
                  about politics, identity, and survival, Shamieh shows the
                  diversity of Palestinian immigrant experiences.
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
