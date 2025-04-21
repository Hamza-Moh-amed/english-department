import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Water",
  description:
    "An in-depth exploration of Porsha Olayiwola’s poem 'Water,' including the complete text, author background, detailed literary analysis, and study questions.",
};

export default function WaterByPorshaOlayiwola() {
  const navLinks: NavLink[] = [
    { href: "#poem", label: "Poem" },
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
          <PageTitle title="Water" author="Porsha Olayiwola" />

          {/* Poem Section */}
          <section id="poem" className="section-content">
            <h2 className="section-title">Poem</h2>
            <article className="article-block">
              <p className="article-paragraph">
                In 2010 six black teenagers drowned in the Louisiana Red River,
                <br />
                researchers found that 70% of black people do not know how to
                swim -<br />
                that black kids are three times more likely to drown,
                <br />
                the question became: ‘why do blacks possess the fear of water?’
                <br />
                <br />
                I’ve heard sharks followed slave ships crossing the Atlantic
                Ocean,
                <br />
                trailing black bodies thrown overboard
                <br />
                I heard during slave time white masters refused to let blacks
                learn them to swim
                <br />
                cos a swimming slave could get away,
                <br />
                Could swim to freedom
                <br />
                <br />
                Could figure out a way to wade in the water-
                <br />
                I heard little black kids ain’t nothing but 'gator bait;
                <br />
                'gator bait lets you catch an alligator so big,
                <br />
                so vicious it’d bite like racism
                <br />
                <br />
                Black momma’s be like 'keep your kids out the water, it ain’t
                safe child’
                <br />
                I heard a Jim Crow North and a Ku Klux South kept coloureds
                <br />
                out of public swimming pools and off public water fountains,
                <br />
                I heard they hose niggers down with a firefighter water hose
                <br />
                like you hose down a rabied dog in the summertime heat
                <br />
                <br />
                A New Orleaner heard come hell or high water
                <br />
                they were gonna watch niggers drown in a hurricane down south,
                <br />
                Heard they knew the levees was gonna give in and break
                <br />
                Knew the waters was coming to wash niggers away
                <br />
                <br />
                Tell me, how do a nigger keep their head above water
                <br />
                if niggers can’t swim? Niggers can’t doggy paddle,
                <br />
                niggers can’t tread water,
                <br />
                Niggers jump, but never jump in
                <br />
                I sprint, you swim
                <br />
                <br />
                Niggers can’t float - our body’s too dense,
                <br />
                We don’t fuck with the rain cos our hair just got did.
                <br />
                <br />
                I heard yesterday, in Detroit, they cut the water off
                <br />
                I heard the water don’t run
                <br />
                I heard the faucets run dry
                <br />
                I heard kids are dehydrated, niggers is thirsty.
                <br />
                <br />
                Heard they’ve been gasping for air
                <br />
                Been drowning in oppression
                <br />
                For what feels like forever, ever since crossing the Atlantic
                <br />
                Been feeling lost at sea
                <br />
                Been feeling like a fish out of water
                <br />
                Like a body sinking in the deep end
                <br />
                Like treading troubled waters
                <br />
                And drowning.
              </p>
            </article>
          </section>

          {/* Author Section */}
          <section id="author" className="section-content">
            <h2 className="section-title">Author Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Porsha Olayiwola is a celebrated Black queer poet, educator, and
                performer from Boston, Massachusetts, where she has served as
                the city’s Poet Laureate. Her work explores race, gender,
                history, and identity—often challenging the limits of poetic
                form and narrative. Olayiwola is known for blending personal
                storytelling with bold political commentary and often performs
                her poems as spoken word. Her writing engages deeply with Black
                history, cultural memory, and the power of survival in
                marginalized communities.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              <p className="section-subtitle">1. Historical Trauma</p>
              <p className="section-paragraph">
                "Water" draws on the deep, violent legacy of slavery, Jim Crow
                segregation, and modern systemic racism. Olayiwola references
                slave ships, alligator bait, segregation at public pools, and
                Hurricane Katrina to illustrate how Black people have been
                historically denied safety and humanity in relation to water.
              </p>

              <p className="section-subtitle">2. Symbolism of Water</p>
              <p className="section-paragraph">
                Water in this poem symbolizes both life and death. It’s
                essential to survival, yet has consistently served as a site of
                danger and exclusion for Black communities. Whether through
                drowning, denial of clean water, or historical myths, water
                becomes a metaphor for systemic violence.
              </p>

              <p className="section-subtitle">3. Oral Tradition and Voice</p>
              <p className="section-paragraph">
                The poem mimics oral storytelling, using repetition and
                conversational tone to capture communal memory. Lines like “I
                heard…” create a rhythm that reflects both folk history and
                contemporary fears.
              </p>

              <p className="section-subtitle">4. Intergenerational Fear</p>
              <p className="section-paragraph">
                The fear of water is not irrational—it is inherited. Olayiwola
                shows how Black parents pass down survival strategies shaped by
                a violent world. This fear is rooted in real loss, trauma, and
                injustice.
              </p>

              <p className="section-subtitle">5. Contemporary Connections</p>
              <p className="section-paragraph">
                The poem moves from slavery to Hurricane Katrina to Detroit’s
                water crisis, creating a continuum of neglect and systemic
                violence. It asks: how can Black communities thrive when they’re
                denied something as basic as clean, safe water?
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              <li className="section-question">
                What is the main theme of "Water"?
                <p className="section-answer">
                  The poem explores how water—both literally and
                  symbolically—has been a site of trauma, oppression, and fear
                  for Black Americans, drawing on history, myth, and modern
                  systemic racism.
                </p>
              </li>
              <li className="section-question">
                How does the poem connect slavery to modern issues?
                <p className="section-answer">
                  Olayiwola draws a throughline from slavery (e.g., slave ships
                  and gator bait) to the modern water crisis in Detroit, showing
                  how anti-Black violence persists across centuries.
                </p>
              </li>
              <li className="section-question">
                Why does the poem repeat “I heard…”?
                <p className="section-answer">
                  The repetition mimics oral tradition and storytelling,
                  emphasizing shared cultural memory and communal experience.
                </p>
              </li>
              <li className="section-question">
                What does water symbolize in the poem?
                <p className="section-answer">
                  Water symbolizes life, death, fear, violence, and survival. It
                  reflects both the threat and necessity of life in Black
                  communities.
                </p>
              </li>
              <li className="section-question">
                Why can’t Black people “swim” in the poem?
                <p className="section-answer">
                  It’s both literal and metaphorical. Historically denied
                  swimming education and access, the poem uses this to symbolize
                  systemic barriers to survival and freedom.
                </p>
              </li>
              <li className="section-question">
                How is the poem structured?
                <p className="section-answer">
                  The poem is free verse, flowing like a stream of
                  consciousness. Its lack of punctuation mimics speech, memory,
                  and rhythm.
                </p>
              </li>
              <li className="section-question">
                What is the significance of Hurricane Katrina in the poem?
                <p className="section-answer">
                  It represents how Black lives were devalued by the
                  government’s failure to respond—an echo of historic disregard
                  for Black safety.
                </p>
              </li>
              <li className="section-question">
                How does the poem use irony?
                <p className="section-answer">
                  The line “how do a nigger keep their head above water if
                  niggers can’t swim?” highlights the cruelty of systemic
                  oppression through biting irony.
                </p>
              </li>
              <li className="section-question">
                Why is hair mentioned in the poem?
                <p className="section-answer">
                  The line about hair highlights how even natural elements like
                  rain become threatening in a racist society—showing how deeply
                  the fear of water is ingrained.
                </p>
              </li>
              <li className="section-question">
                What emotions does the poem evoke?
                <p className="section-answer">
                  Anger, sadness, frustration, and a deep sense of injustice,
                  along with reverence for resilience.
                </p>
              </li>
              <li className="section-question">
                Who is the intended audience?
                <p className="section-answer">
                  Both Black readers (to affirm and name shared trauma) and
                  broader audiences (to confront systemic violence and demand
                  change).
                </p>
              </li>
              <li className="section-question">
                What literary devices are used?
                <p className="section-answer">
                  Repetition, metaphor, irony, enjambment, allusion, and
                  historical references.
                </p>
              </li>
              <li className="section-question">
                How does the poem reflect activism?
                <p className="section-answer">
                  It brings hidden histories into light and demands that readers
                  confront ongoing injustices—it’s a poetic form of protest.
                </p>
              </li>
              <li className="section-question">
                What does the final image of “drowning” represent?
                <p className="section-answer">
                  It symbolizes the feeling of being overwhelmed by oppression
                  and denied breath, space, and safety.
                </p>
              </li>
              <li className="section-question">
                Why is this poem important in contemporary society?
                <p className="section-answer">
                  It shows how racism isn’t just in the past—it’s built into
                  infrastructure, history, and culture. The poem is both a
                  witness and a call to action.
                </p>
              </li>
            </ol>
          </section>
        </div>
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
