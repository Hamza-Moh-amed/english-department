import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Wild Geese",
  description:
    "A page dedicated to the poem 'Wild Geese' by Mary Oliver, exploring its themes, literary analysis, and a detailed exploration of acceptance and self-love.",
};

export default function WildGeese() {
  const navLinks: NavLink[] = [
    { href: "#poem", label: "Poem" },
    { href: "#poem-video", label: "Poem Video" },
    { href: "#author", label: "Author Background" },
    { href: "#analysis", label: "Analysis" },
    { href: "#qna", label: "Q&A" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="hidden md:flex items-center justify-between">
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          <div className="flex-grow text-center">
            <PageTitle title="Wild Geese" author="Mary Oliver" />
          </div>
          <div className="flex-none w-24" />
        </div>
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Wild Geese" author="Mary Oliver" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Poem Section */}
        <section id="poem" className="space-y-8">
          <h2 className="text-2xl font-semibold">Poem</h2>
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg whitespace-pre-line">
              You do not have to be good.
              <br />
              You do not have to walk on your knees
              <br />
              for a hundred miles through the desert repenting.
              <br />
              You only have to let the soft animal of your body
              <br />
              love what it loves.
              <br />
              Tell me about despair, yours, and I will tell you mine.
              <br />
              Meanwhile the world goes on.
              <br />
              Meanwhile the sun and the clear pebbles of the rain
              <br />
              are moving across the landscapes,
              <br />
              over the prairies and the deep trees,
              <br />
              the mountains and the rivers.
              <br />
              Meanwhile the wild geese, high in the clean blue air,
              <br />
              are heading home again.
              <br />
              Whoever you are, no matter how lonely,
              <br />
              the world offers itself to your imagination,
              <br />
              calls to you like the wild geese, harsh and exciting –<br />
              over and over announcing your place
              <br />
              in the family of things.
            </p>
          </article>
        </section>

        {/* Poem Video */}
        <section id="poem-video" className="space-y-8">
          <h2 className="text-2xl font-semibold text-left">Poem Video</h2>
          <div className="flex justify-center">
            <div className="max-w-4xl w-[600px] h-[360px] lg:w-[800px] lg:h-[400px]">
              <iframe
                src="https://www.youtube.com/embed/lfayiBoaXE8?si=A6oVjSybOKPtktY0"
                title="Wild Geese by Mary Oliver"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Author Background */}
        <section id="author" className="space-y-8">
          <h2 className="text-2xl font-semibold">Author Background</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              Mary Oliver was an American poet, widely recognized for her
              profound connection with nature, and for her accessible yet deeply
              spiritual poetry. Born in 1935, Oliver's poetry draws from her
              life in Provincetown, Massachusetts, where she observed the
              natural world with an acute, almost mystical sensitivity. Her
              poetry reflects themes of solitude, the complexity of life, and
              the healing powers of nature.
            </p>
            <p className="text-lg">
              In 1984, Oliver won the Pulitzer Prize for Poetry for her
              collection *American Primitive*, which includes many poems
              exploring the intrinsic connection between the human soul and the
              natural world. Known for her simplicity, Oliver’s poems often
              communicate profound truths about love, life, and grief through
              the lens of the natural environment.
            </p>
            <p className="text-lg">
              Throughout her career, Oliver’s work consistently reflected her
              reverence for nature, and she has become one of the most beloved
              American poets, with her work widely published and highly
              influential. Her poems, such as *Wild Geese*, offer a message of
              self-acceptance, freedom, and understanding, inviting readers to
              find their place in the world.
            </p>
          </div>
        </section>

        {/* Analysis Section */}
        <section id="analysis" className="space-y-8">
          <h2 className="text-2xl font-semibold">Analysis</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              <strong>1. Poem Structure and Form</strong>
            </p>
            <p className="text-lg">
              "Wild Geese" is a free verse poem, structured to allow a natural
              flow without the constraints of rhyme or meter. This mirrors the
              theme of the poem itself: the freedom of being true to oneself,
              without the need for external validation. The lack of a fixed
              structure emphasizes the idea that life—and our place in the
              world—does not follow rigid rules or expectations. The openness of
              the form mirrors the speaker's invitation for self-acceptance,
              embracing both the messiness and beauty of life.
            </p>

            <p className="text-lg">
              The poem’s fluidity and lack of formal constraints allow the
              speaker to express thoughts as they come, presenting them in an
              honest, unfiltered way. The lines are free-flowing, reinforcing
              the sense of freedom the speaker advocates. The occasional use of
              enjambment (where sentences spill into the next line) gives the
              poem a breathless quality, conveying the idea that life, like the
              poem, doesn’t always pause for reflection but moves forward
              without hesitation.
            </p>

            <p className="text-lg">
              The poem's conversational tone is further emphasized by direct
              addresses to the reader: "Tell me about despair, yours, and I will
              tell you mine." This line invites the reader into a shared
              experience, making the poem feel like a personal dialogue. It
              opens up a space for vulnerability, suggesting that no one is
              alone in their struggles, and that personal despair is a universal
              experience. The poem becomes an invitation to connect, to
              empathize, and to reflect on the shared human condition.
            </p>

            <p className="text-lg">
              <strong>2. Acceptance and Self-Love</strong>
            </p>
            <p className="text-lg">
              A central theme of *Wild Geese* is self-acceptance, and this is
              most clearly expressed in the opening lines:
              <br />
              "You do not have to be good. / You do not have to walk on your
              knees / for a hundred miles through the desert repenting."
              <br />
              Here, the speaker challenges the notion that one must prove their
              worth through suffering or penance. The reference to walking "on
              your knees" evokes the image of extreme submission or humility, a
              common act of contrition. However, the speaker rejects this
              notion, encouraging a form of spirituality that is grounded in
              authenticity rather than external sacrifice.
            </p>

            <p className="text-lg">
              "You only have to let the soft animal of your body / love what it
              loves." This line emphasizes the importance of embracing one’s
              natural desires and instincts. The "soft animal" of the body
              speaks to a primal, instinctive side of human nature that is often
              neglected in favor of societal expectations. The line suggests
              that self-acceptance and peace come not from moral perfection, but
              from aligning with one's true self, loving freely without judgment
              or guilt. It speaks to the idea that happiness and fulfillment are
              found when we allow ourselves to be who we truly are, without
              shame.
            </p>

            <p className="text-lg">
              This theme of self-love is further reinforced by the way the
              speaker shifts the conversation to shared human experiences,
              particularly despair. By making space for vulnerability and
              honesty, the poem positions self-acceptance not as a solitary,
              individualistic act but as a communal one, inviting readers to
              join in the shared journey of personal growth and healing.
            </p>

            <p className="text-lg">
              <strong>3. The Power of Nature</strong>
            </p>
            <p className="text-lg">
              Nature plays a crucial role in the poem, serving both as a
              backdrop and as a metaphor for the cyclical, uncontrollable forces
              of life. The line "Meanwhile the world goes on. / Meanwhile the
              sun and the clear pebbles of the rain / are moving across the
              landscapes..." suggests that nature continues on its course,
              unaffected by individual turmoil. It reminds the reader that, in
              the grand scheme of things, personal despair is a small part of a
              much larger, ongoing process. Nature’s consistency offers comfort,
              implying that our struggles are part of the vast continuum of
              life.
            </p>

            <p className="text-lg">
              Nature also represents freedom and release. "The wild geese, high
              in the clean blue air, / are heading home again." The wild geese,
              flying freely, symbolize the potential for movement, release, and
              the possibility of returning to one's natural state. The imagery
              of the geese also conveys a sense of belonging, suggesting that no
              matter how far we stray, we can always find our way back to a
              place of peace, much like the geese find their way home.
            </p>

            <p className="text-lg">
              By using nature as both a metaphor and a literal presence in the
              poem, Oliver underscores the importance of connecting with the
              natural world as a means of grounding oneself. Nature is portrayed
              as a space of renewal, solace, and belonging, providing a
              much-needed contrast to the emotional turmoil of human life. The
              sun, rain, trees, and rivers are all symbols of the earth's
              inherent cycles of change and regeneration, offering a model for
              how humans might also find ways to grow and heal.
            </p>

            <p className="text-lg">
              <strong>4. Imagination and Belonging</strong>
            </p>
            <p className="text-lg">
              Imagination serves as a bridge between the self and the world in
              *Wild Geese*. The line "the world offers itself to your
              imagination, / calls to you like the wild geese, harsh and
              exciting" highlights the power of imagination in helping the
              individual connect with the world around them. The world itself
              becomes an open field of possibilities, where the speaker
              encourages the reader to find their place through the lens of
              their imagination.
            </p>

            <p className="text-lg">
              The "wild geese" represent more than just migratory birds; they
              symbolize the voice of nature calling to the reader, urging them
              to remember their inherent connection to the world. The geese’s
              flight is "harsh and exciting," evoking a sense of urgency and
              thrill. Just as the geese are drawn to a specific destination, so
              too are we called to recognize our own place in the vast,
              interconnected family of things. This imagery suggests that we are
              part of something larger, that we belong to a network of existence
              that includes both the natural world and the human community.
            </p>

            <p className="text-lg">
              The phrase "family of things" is particularly powerful. It
              emphasizes a holistic view of existence, where all living beings,
              and even inanimate objects, have a place. This family is not
              defined by borders, status, or societal constructs, but by the
              shared experience of being part of the larger natural world. The
              call of the wild geese, urging us to join this family, is a
              reminder of our interconnectedness, our belonging, and the
              importance of embracing our place within the world.
            </p>

            <p className="text-lg">
              <strong>5. The Role of Loneliness and Solitude</strong>
            </p>
            <p className="text-lg">
              While the poem speaks to the power of connection and belonging, it
              also acknowledges the existence of loneliness. The line "Whoever
              you are, no matter how lonely" speaks to the deep isolation that
              many feel, but it immediately offers a solution: "the world offers
              itself to your imagination." In this way, the poem provides a
              remedy for loneliness through the power of self-reflection and
              imagination. Instead of remaining trapped in loneliness, the
              speaker suggests that we can find solace in the natural world and
              the limitless possibilities of our own minds.
            </p>

            <p className="text-lg">
              The idea of loneliness is not presented as something to be ashamed
              of or something that isolates us from the world. Instead, it is
              framed as an experience that is both universal and transformative.
              The wild geese’s "harsh and exciting" call suggests that there is
              both discomfort and beauty in loneliness, and that it may serve as
              a catalyst for finding deeper connections—both within oneself and
              with the world at large.
            </p>

            <p className="text-lg">
              <strong>6. The Freedom to Be</strong>
            </p>
            <p className="text-lg">
              Ultimately, *Wild Geese* is a celebration of the freedom to be
              oneself. The speaker encourages the reader to let go of societal
              pressures and to embrace life as it is, with all its joys and
              struggles. The wild geese, in their flight across the sky, embody
              the liberation that comes with accepting oneself fully and without
              reservation. They are free to go where they are called, just as we
              are encouraged to live authentically, free from shame or guilt.
            </p>

            <p className="text-lg">
              The final message of the poem, that we each have a place in the
              "family of things," reassures the reader that they are part of a
              larger, more encompassing reality. There is no need to strive for
              perfection or to fit into predefined roles. Instead, we are
              invited to find peace in our inherent connection to the world and
              to embrace the freedom that comes with self-acceptance and
              understanding.
            </p>
          </div>
        </section>

        {/* Q&A Section */}
        <section id="qna" className="space-y-8">
          <h2 className="text-2xl font-semibold">Questions & Answers</h2>
          <div className="prose max-w-none">
            <ol className="list-decimal ml-6 space-y-4 text-lg">
              <li>
                <strong>
                  What is the significance of the opening line "You do not have
                  to be good"?
                </strong>
                <p>
                  The opening line rejects the conventional idea of moral
                  perfection, suggesting that self-worth is not based on
                  adherence to social or religious expectations. Instead, it
                  promotes self-acceptance and the freedom to live
                  authentically. This statement implies that being “good” isn’t
                  about fulfilling external ideals but about embracing one's
                  natural self and desires.
                </p>
              </li>

              <li>
                <strong>
                  How does the speaker view the concept of repentance in the
                  poem?
                </strong>
                <p>
                  The speaker dismisses the idea of penance as a requirement for
                  redemption. Instead, they suggest that embracing one's natural
                  self and desires is all that is needed for peace and
                  connection with the world. This mirrors the message of
                  unconditional self-love, freeing the reader from burdens of
                  guilt and societal expectations.
                </p>
              </li>

              <li>
                <strong>
                  What role does nature play in the speaker’s perspective on
                  life and healing?
                </strong>
                <p>
                  Nature is portrayed as a constant and healing presence that
                  continues regardless of individual struggles. The poem
                  suggests that nature's continuity offers solace, a reminder
                  that life moves on and that there is always a place for us
                  within the greater world. Nature provides both perspective and
                  peace, as seen in lines like, "Meanwhile the world goes on"
                  and "the sun and the clear pebbles of the rain / are moving
                  across the landscapes."
                </p>
              </li>

              <li>
                <strong>
                  How do the wild geese serve as a metaphor in the poem?
                </strong>
                <p>
                  The wild geese represent freedom, return, and belonging. Their
                  migration symbolizes the possibility of finding one's place in
                  the world, and their call represents the invitation to
                  reconnect with both nature and our own sense of purpose. They
                  serve as a powerful metaphor for resilience and the innate
                  drive to return to one's natural self, as seen in the line,
                  "Meanwhile the wild geese, high in the clean blue air, / are
                  heading home again."
                </p>
              </li>

              <li>
                <strong>
                  What does the phrase "family of things" suggest about the
                  speaker's view of interconnectedness?
                </strong>
                <p>
                  The "family of things" suggests a profound interconnectedness
                  between all living things. It emphasizes that everyone has a
                  place within the larger fabric of life, highlighting both our
                  shared humanity and our connection to the natural world. The
                  use of "family" invokes the idea of unconditional belonging,
                  where everyone, no matter how small, contributes to the whole.
                </p>
              </li>

              <li>
                <strong>
                  How does the poem encourage readers to engage with their
                  imagination?
                </strong>
                <p>
                  The poem encourages readers to tap into their imagination as a
                  way to understand and navigate the world. It suggests that the
                  imagination offers a way to find solace and purpose,
                  especially when feeling lost or disconnected. In "the world
                  offers itself to your imagination," the speaker invites
                  readers to create a connection to the world through their own
                  creative visions and desires.
                </p>
              </li>

              <li>
                <strong>
                  What does the line "Meanwhile the world goes on" mean in the
                  context of the poem?
                </strong>
                <p>
                  This line reinforces the idea that life continues regardless
                  of individual pain or struggle. It highlights the persistent,
                  cyclical nature of existence, providing a sense of perspective
                  and comfort. The world moving on despite personal suffering
                  suggests that healing and renewal are possible, even when we
                  feel disconnected or lost.
                </p>
              </li>

              <li>
                <strong>
                  What does the imagery of the "clear pebbles of the rain"
                  represent?
                </strong>
                <p>
                  The "clear pebbles of the rain" represent the purity and
                  renewal offered by nature. Rain is a symbol of cleansing,
                  bringing a sense of freshness and newness to the world, much
                  like how self-acceptance can bring peace to the individual.
                  The imagery conveys the gentle but consistent force of nature
                  in healing and revitalizing the soul.
                </p>
              </li>

              <li>
                <strong>
                  How does the speaker address feelings of loneliness in the
                  poem?
                </strong>
                <p>
                  The speaker acknowledges loneliness but reassures the reader
                  that they are not alone. The wild geese, who "announce your
                  place in the family of things," symbolize the presence of
                  belonging, even in moments of solitude. The poem encourages
                  embracing one’s inherent connection to the world, even when
                  physical companionship may be absent.
                </p>
              </li>

              <li>
                <strong>
                  How does the poem relate to the concept of self-love and
                  freedom?
                </strong>
                <p>
                  The poem encourages readers to embrace their true selves
                  without the need for guilt or self-recrimination. It suggests
                  that self-love comes from accepting one's desires and
                  instincts, and living authentically, free from societal
                  pressure. The speaker’s message is one of liberation from
                  judgment, as seen in lines like "You only have to let the soft
                  animal of your body / love what it loves."
                </p>
              </li>

              <li>
                <strong>
                  What does the phrase "You do not have to walk on your knees /
                  for a hundred miles through the desert repenting" suggest
                  about the speaker's perspective on suffering?
                </strong>
                <p>
                  This phrase suggests that suffering or penance is not a
                  requirement for redemption. The speaker challenges the idea
                  that individuals must endure endless punishment or
                  self-sacrifice to earn their place in the world. This reflects
                  the poem's central theme of embracing life with acceptance,
                  rather than trying to atone for perceived flaws or failures.
                </p>
              </li>

              <li>
                <strong>
                  How does the imagery of "the soft animal of your body" relate
                  to the theme of self-acceptance?
                </strong>
                <p>
                  The "soft animal of your body" represents the human body’s
                  inherent naturalness, which often conflicts with societal
                  expectations. This image speaks to a return to one’s raw,
                  unfiltered essence. It highlights the importance of embracing
                  one's desires and imperfections as part of being human,
                  offering a message of self-compassion and authenticity.
                </p>
              </li>

              <li>
                <strong>
                  Why does the speaker use the imagery of geese in their call to
                  action?
                </strong>
                <p>
                  The speaker uses the imagery of wild geese to symbolize
                  freedom and movement. Geese, who fly without constraint and
                  "head home again," represent the human desire for belonging
                  and purpose. Their journey becomes a metaphor for life's
                  cyclical nature, reinforcing the idea that no matter where we
                  go or how lost we may feel, we can always find our way back to
                  a sense of peace and belonging.
                </p>
              </li>

              <li>
                <strong>
                  How does the poem's structure contribute to its themes of
                  freedom and acceptance?
                </strong>
                <p>
                  The free verse structure of *Wild Geese* reinforces its themes
                  of freedom and authenticity. The absence of rhyme and meter
                  allows the speaker’s thoughts to flow freely, much like the
                  natural world they describe. The form mirrors the message of
                  the poem: life is not confined by rigid structures or rules,
                  and true freedom comes from embracing one's natural state.
                </p>
              </li>

              <li>
                <strong>
                  What is the significance of the repeated phrase "Meanwhile the
                  world goes on"?
                </strong>
                <p>
                  The repetition of this phrase emphasizes the idea of life's
                  continuity. No matter the struggles or pain that one might
                  experience, the natural world and the broader scope of
                  existence persist. This creates a sense of reassurance for the
                  reader, as the poem suggests that, despite personal
                  challenges, there is a larger, enduring cycle at work.
                </p>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
