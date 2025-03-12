import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Mic Check",
  description:
    "A page dedicated to Suheir Hammad's poem 'Mic Check,' exploring its themes, literary analysis, and a detailed Q&A section.",
};

export default function MicCheck() {
  const navLinks: NavLink[] = [
    { href: "#poem", label: "Poem" },
    { href: "#youtube", label: "Video" },
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
          <PageTitle title="Mic Check" author="Suheir Hammad" />

          {/* Poem Section */}
          <section id="poem" className="section-content">
            <h2 className="section-title">Poem</h2>
            <article className="article-block">
              <p className="article-paragraph">
                Mic check one two
                <br />
                One two, can you hear me?
                <br />
                mic check one two
                <br />
                <br />
                Mike checked
                <br />
                my bags at the air
                <br />
                port in a random
                <br />
                routine check
                <br />
                <br />
                I understand, Mike, I do
                <br />
                you too were altered
                <br />
                that day and most days
                <br />
                most folks operate on
                <br />
                fear often hate this is
                <br />
                mic check your
                <br />
                job and i am
                <br />
                always random
                <br />
                <br />
                I understand it was
                <br />
                folks who looked smelled
                <br />
                maybe prayed like me
                <br />
                <br />
                Can you hear me Mike
                <br />
                ruddy blonde buzz
                <br />
                cut with corn flower
                <br />
                eyes and a cross
                <br />
                round your neck
                <br />
                Mike check
                <br />
                folks who looked like
                <br />
                you stank so bad the
                <br />
                Indians smelled them
                <br />
                mic check before they landed
                <br />
                <br />
                they murdered one two
                <br />
                one two as they prayed
                <br />
                spread small pox as alms
                <br />
                <br />
                mic check yes I<br />
                packed my own
                <br />
                bags can you hear
                <br />
                me no they have not
                <br />
                been out of my possession
                <br />
                <br />
                Thanks Mike you
                <br />
                have a good day too one
                <br />
                two mike check mike
                <br />
                Check Mike
                <br />
                <br />
                A-yo mike
                <br />
                who's gonna
                <br />
                check you?
              </p>
            </article>
          </section>

          {/* YouTube Embed Section */}
          <section id="youtube" className="section-content">
            <h2 className="section-title">Video</h2>
            <div className="video-container">
              <div className="video-container-2">
                <iframe
                  src="https://www.youtube.com/embed/PSjwR0oicQY"
                  title="Mic Check by Suheir Hammad"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-frame"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Author Background Section */}
          <section id="author" className="section-content">
            <h2 className="section-title">Author Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Suheir Hammad (born 1973) is a Palestinian-American poet,
                author, and activist known for her powerful spoken word
                performances and socially conscious poetry. Born in Jordan to
                Palestinian refugee parents and raised in Brooklyn, New York,
                Hammad's work explores themes of identity, displacement, war,
                and resistance.
              </p>
              <p className="section-paragraph">
                Hammad gained widespread recognition after appearing in Russell
                Simmons’ *Def Poetry Jam*, where her gripping performances
                highlighted issues of racism, immigration, and gender
                inequality. She has published multiple poetry collections,
                including *Born Palestinian, Born Black*, which examines her
                dual identity and the struggles of marginalized communities. Her
                poetry is deeply influenced by hip-hop, feminism, and her
                Palestinian heritage, making her a unique voice in contemporary
                poetry.
              </p>
              <p className="section-paragraph">
                *Mic Check* is a striking piece that draws upon the structure of
                a sound check as a metaphor for raising suppressed voices and
                demanding to be heard. The poem critiques systemic oppression,
                colonialism, and the silencing of dissent while calling for
                empowerment and solidarity among oppressed people. Hammad’s work
                continues to inspire audiences globally, blending personal
                narrative with political activism in a deeply compelling way.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              {/* Analysis Point 1: Structure and Form: The Poetic "Mic Check" */}
              <p className="section-subtitle">
                1. Structure and Form: The Poetic "Mic Check"
              </p>
              <p className="section-paragraph">
                Suheir Hammad’s *"Mic Check"* is a free-verse poem that mimics
                the structure of a microphone check, a performative act often
                used in spoken word poetry and public speaking. The repetition
                of the phrase “mic check one two” serves as both a structural
                anchor and a thematic device. It creates a rhythmic cadence that
                mirrors the act of testing a microphone, while also symbolizing
                the speaker’s attempt to assert their voice in a world that
                often silences marginalized perspectives.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Mic check one two / One two, can you hear me?"
                </em>
              </p>
              <p className="section-paragraph">
                This repetition not only establishes the poem’s rhythm but also
                underscores the speaker’s insistence on being heard. The
                fragmented lines and enjambment (line breaks in the middle of
                sentences) reflect the disjointed nature of the speaker’s
                experience, particularly in the context of racial profiling and
                surveillance.
              </p>

              {/* Analysis Point 2: Tone: Empathy and Critique */}
              <p className="section-subtitle">2. Tone: Empathy and Critique</p>
              <p className="section-paragraph">
                The tone of the poem is a complex blend of empathy and critique.
                The speaker addresses “Mike,” a TSA agent, with a mix of
                understanding and defiance. While acknowledging Mike’s fear and
                the societal conditioning that shapes his actions, the speaker
                also critiques the systemic structures that perpetuate racial
                profiling and Islamophobia.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "I understand, Mike, I do / you too were altered / that day
                  and most days / most folks operate on / fear often hate this
                  is / mic check your / job and i am / always random."
                </em>
              </p>
              <p className="section-paragraph">
                This passage reveals the speaker’s ability to empathize with
                Mike, recognizing that he too is a product of a fear-driven
                society. However, the tone shifts subtly as the speaker
                challenges the dehumanizing effects of racial profiling,
                asserting their own humanity and individuality.
              </p>

              {/* Analysis Point 3: Imagery: Surveillance and Historical Injustice */}
              <p className="section-subtitle">
                3. Imagery: Surveillance and Historical Injustice
              </p>
              <p className="section-paragraph">
                Hammad uses vivid imagery to connect contemporary racial
                profiling with historical injustices, particularly colonialism.
                The reference to “folks who looked like / you stank so bad the /
                Indians smelled them / mic check before they landed” evokes the
                violence and dehumanization inflicted upon Indigenous peoples by
                European colonizers.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "they murdered one two / one two as they prayed / spread small
                  pox as alms."
                </em>
              </p>
              <p className="section-paragraph">
                This imagery is both visceral and symbolic, highlighting the
                brutality of colonialism and its ongoing legacy. The
                juxtaposition of past and present injustices deepens the poem’s
                critique of systemic oppression, drawing a direct connection
                between historical violence and contemporary racial profiling.
              </p>

              {/* Analysis Point 4: Themes: Identity, Resistance, and Accountability */}
              <p className="section-subtitle">
                4. Themes: Identity, Resistance, and Accountability
              </p>
              <p className="section-paragraph">
                The poem explores the complexities of identity in a society that
                marginalizes and stereotypes. The speaker asserts their agency
                and humanity, resisting the dehumanizing effects of surveillance
                and racial profiling. The final lines, “A-yo mike / who's gonna
                / check you?” turn the tables on Mike, questioning the systems
                of power that enable his actions.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "A-yo mike / who's gonna / check you?"
                </em>
              </p>
              <p className="section-paragraph">
                This closing question challenges the reader to reflect on
                accountability and the structures of power that perpetuate
                inequality. It also underscores the speaker’s resilience and
                refusal to be silenced, turning the tables on Mike and the
                reader.
              </p>

              {/* Analysis Point 5: Literary Devices: Repetition, Enjambment, and Metaphor */}
              <p className="section-subtitle">
                5. Literary Devices: Repetition, Enjambment, and Metaphor
              </p>
              <p className="section-paragraph">
                Hammad employs several literary devices to enhance the poem’s
                impact. The repetition of “mic check one two” creates a rhythmic
                structure that emphasizes the speaker’s insistence on being
                heard. Enjambment is used to reflect the disjointed nature of
                the speaker’s experience, particularly in the context of racial
                profiling and surveillance.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "mic check one two / One two, can you hear me?"
                </em>
              </p>
              <p className="section-paragraph">
                The metaphor of the microphone check serves as a powerful symbol
                for the speaker’s attempt to assert their voice in a world that
                often silences marginalized perspectives. This metaphor is woven
                throughout the poem, reinforcing its themes of resistance and
                resilience.
              </p>

              {/* Analysis Point 6: Historical and Social Context */}
              <p className="section-subtitle">
                6. Historical and Social Context
              </p>
              <p className="section-paragraph">
                Written in the post-9/11 era, *"Mic Check"* reflects the
                heightened surveillance and racial profiling faced by Muslim and
                Arab communities in the United States. The poem’s critique of
                systemic oppression is deeply rooted in this historical context,
                but its themes of identity, resistance, and accountability
                remain relevant today.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "I understand it was / folks who looked smelled / maybe prayed
                  like me"
                </em>
              </p>
              <p className="section-paragraph">
                This historical grounding adds depth to the poem’s critique of
                contemporary injustices.
              </p>

              {/* Analysis Point 7: The Speaker’s Voice: Resilience and Defiance */}
              <p className="section-subtitle">
                7. The Speaker’s Voice: Resilience and Defiance
              </p>
              <p className="section-paragraph">
                The speaker’s voice is one of resilience and defiance. Despite
                the dehumanizing effects of racial profiling, the speaker
                asserts their humanity and individuality. The final lines, “A-yo
                mike / who's gonna / check you?” challenge the systems of power
                that enable Mike’s actions, turning the tables on him and the
                reader.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "A-yo mike / who's gonna / check you?"
                </em>
              </p>
              <p className="section-paragraph">
                This closing question serves as a powerful reminder of the need
                for accountability and the importance of challenging systemic
                oppression. It also underscores the speaker’s resilience and
                refusal to be silenced.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              {/* Question 1 */}
              <li className="section-question">
                What is the significance of the phrase “mic check one two” in
                the poem?
                <p className="section-answer">
                  The phrase “mic check one two” serves as both a structural
                  anchor and a thematic device. It mimics the act of testing a
                  microphone, symbolizing the speaker’s attempt to assert their
                  voice in a world that often silences marginalized
                  perspectives. The repetition of this phrase creates a rhythmic
                  cadence, emphasizing the speaker’s insistence on being heard
                  and highlighting the performative nature of identity in a
                  society that scrutinizes and stereotypes.
                </p>
              </li>

              {/* Question 2 */}
              <li className="section-question">
                How does the poem address the theme of surveillance?
                <p className="section-answer">
                  The poem addresses surveillance through the speaker’s
                  interaction with “Mike,” a TSA agent who checks their bags.
                  This interaction serves as a microcosm of the broader systemic
                  racism and Islamophobia faced by marginalized communities. The
                  speaker acknowledges Mike’s fear and prejudice but also
                  critiques the systemic structures that perpetuate these
                  attitudes, highlighting the dehumanizing effects of racial
                  profiling.
                </p>
              </li>

              {/* Question 3 */}
              <li className="section-question">
                What role does empathy play in the speaker’s interaction with
                Mike?
                <p className="section-answer">
                  The speaker shows empathy for Mike, recognizing that he too is
                  shaped by fear and societal conditioning. However, this
                  empathy is tempered by a critique of the systemic structures
                  that perpetuate prejudice and inequality. The speaker’s
                  ability to empathize with Mike while challenging his actions
                  underscores the complexity of their relationship and the
                  broader societal issues at play.
                </p>
              </li>

              {/* Question 4 */}
              <li className="section-question">
                How does Hammad connect contemporary racial profiling to
                historical injustices?
                <p className="section-answer">
                  Hammad draws parallels between contemporary racial profiling
                  and the historical injustices of colonialism, particularly the
                  violence inflicted upon Indigenous peoples. The reference to
                  “folks who looked like / you stank so bad the / Indians
                  smelled them / mic check before they landed” evokes the
                  violence and dehumanization of colonialism, drawing a direct
                  connection between past and present forms of systemic
                  oppression.
                </p>
              </li>

              {/* Question 5 */}
              <li className="section-question">
                What is the significance of the line “they murdered one two /
                one two as they prayed”?
                <p className="section-answer">
                  This line highlights the brutality of colonialism, emphasizing
                  the violence and dehumanization inflicted upon Indigenous
                  peoples. It also underscores the hypocrisy of colonizers who
                  claimed moral superiority while committing atrocities. The
                  imagery of murder and prayer juxtaposes the sacred and the
                  profane, deepening the poem’s critique of systemic oppression.
                </p>
              </li>

              {/* Question 6 */}
              <li className="section-question">
                How does the poem explore the complexities of identity?
                <p className="section-answer">
                  The poem explores identity through the speaker’s assertion of
                  their agency and humanity in the face of surveillance and
                  racial profiling. The speaker resists being reduced to a
                  stereotype, asserting their individuality and resilience. The
                  poem’s fragmented structure and enjambment reflect the
                  disjointed nature of the speaker’s experience, highlighting
                  the complexities of navigating identity in a society that
                  marginalizes and stereotypes.
                </p>
              </li>

              {/* Question 7 */}
              <li className="section-question">
                What is the meaning of the final lines, “A-yo mike / who's gonna
                / check you?”
                <p className="section-answer">
                  These lines challenge the systems of power that enable Mike’s
                  actions, questioning who holds him accountable. They also
                  underscore the speaker’s resilience and refusal to be
                  silenced, turning the tables on Mike and the reader. The
                  closing question serves as a powerful reminder of the need for
                  accountability and the importance of challenging systemic
                  oppression.
                </p>
              </li>

              {/* Question 8 */}
              <li className="section-question">
                How does the poem use repetition to reinforce its themes?
                <p className="section-answer">
                  The repetition of “mic check one two” creates a rhythmic
                  structure that emphasizes the speaker’s insistence on being
                  heard. It also mirrors the performative nature of identity in
                  a society that scrutinizes and stereotypes. The repetition
                  serves as a metaphor for the speaker’s attempt to assert their
                  voice in a world that often silences marginalized
                  perspectives.
                </p>
              </li>

              {/* Question 9 */}
              <li className="section-question">
                What is the role of historical context in the poem?
                <p className="section-answer">
                  The historical context of colonialism and its legacy of
                  violence and oppression deepens the poem’s critique of
                  contemporary racial profiling. The poem draws parallels
                  between past and present forms of systemic injustice,
                  highlighting their enduring impact. This historical grounding
                  adds depth to the poem’s themes of identity, resistance, and
                  accountability.
                </p>
              </li>

              {/* Question 10 */}
              <li className="section-question">
                How does the poem challenge the reader?
                <p className="section-answer">
                  The poem challenges the reader to confront their own
                  complicity in systems of power and oppression. It also calls
                  for accountability and reflection on the structures that
                  perpetuate inequality. The closing question, “A-yo mike /
                  who's gonna / check you?” serves as a powerful reminder of the
                  need for accountability and the importance of challenging
                  systemic oppression.
                </p>
              </li>

              {/* Question 11 */}
              <li className="section-question">
                How does Hammad use imagery to convey the struggles of the
                marginalized?
                <p className="section-answer">
                  Hammad uses vivid imagery, such as “the Negro bearing
                  slavery’s scars” and “the red man driven from the land,” to
                  depict the historical and ongoing struggles of marginalized
                  groups. These images evoke a sense of pain, resilience, and
                  hope, highlighting the human cost of systemic inequality and
                  the enduring dream of freedom and equality.
                </p>
              </li>

              {/* Question 12 */}
              <li className="section-question">
                What is the significance of the line “I understand, Mike, I do /
                you too were altered”?
                <p className="section-answer">
                  This line reveals the speaker’s empathy for Mike, recognizing
                  that he too is shaped by fear and societal conditioning.
                  However, it also critiques the systemic structures that
                  perpetuate prejudice and inequality. The speaker’s ability to
                  empathize with Mike while challenging his actions underscores
                  the complexity of their relationship and the broader societal
                  issues at play.
                </p>
              </li>

              {/* Question 13 */}
              <li className="section-question">
                How does the poem use enjambment to reflect the speaker’s
                experience?
                <p className="section-answer">
                  The poem uses enjambment to reflect the disjointed nature of
                  the speaker’s experience, particularly in the context of
                  racial profiling and surveillance. The fragmented lines mirror
                  the speaker’s struggle to assert their voice in a world that
                  often silences marginalized perspectives, highlighting the
                  complexities of navigating identity in a society that
                  marginalizes and stereotypes.
                </p>
              </li>

              {/* Question 14 */}
              <li className="section-question">
                What is the significance of the metaphor of the microphone
                check?
                <p className="section-answer">
                  The metaphor of the microphone check serves as a powerful
                  symbol for the speaker’s attempt to assert their voice in a
                  world that often silences marginalized perspectives. It
                  reinforces the poem’s themes of resistance and resilience,
                  emphasizing the performative nature of identity in a society
                  that scrutinizes and stereotypes.
                </p>
              </li>

              {/* Question 15 */}
              <li className="section-question">
                How does the poem reflect the post-9/11 era?
                <p className="section-answer">
                  The poem reflects the heightened surveillance and racial
                  profiling faced by Muslim and Arab communities in the United
                  States in the post-9/11 era. The speaker’s interaction with
                  Mike, a TSA agent, serves as a microcosm of the broader
                  systemic racism and Islamophobia experienced by marginalized
                  communities. This historical grounding adds depth to the
                  poem’s critique of contemporary injustices.
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
