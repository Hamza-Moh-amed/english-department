import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "With No Immediate Cause",
  description:
    "A page dedicated to Ntozake Shange's poem 'With No Immediate Cause,' exploring its themes, literary analysis, and its focus on trauma and PTSD.",
};

export default function WithNoImmediateCause() {
  const navLinks: NavLink[] = [
    { href: "#poem", label: "Poem" },
    { href: "#broke-silence", label: "I Broke Silence" },
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
          <PageTitle title="With No Immediate Cause" author="Ntozake Shange" />

          {/* Poem Section */}
          <section id="poem" className="section-content">
            <h2 className="section-title">Poem</h2>
            <article className="article-block">
              <p className="article-paragraph">
                every 3 minutes a woman is beaten
                <br />
                every five minutes a
                <br />
                woman is raped/every ten minutes
                <br />
                a little girl is molested
                <br />
                <br />
                yet I rode the subway today
                <br />
                I sat next to an old man who
                <br />
                may have beaten his old wife
                <br />
                3 minutes ago or 3 days/30 years ago
                <br />
                he might have sodomized his
                <br />
                daughter but I sat there
                <br />
                cuz the men on the train
                <br />
                might beat some young women
                <br />
                later in the day or tomorrow
                <br />
                <br />
                I might not shut my door fast
                <br />
                enough push hard enough
                <br />
                every 3 minutes it happens
                <br />
                some woman's innocence
                <br />
                rushes to her cheeks/pours from her mouth
                <br />
                like the betsy wetsy dolls have been torn
                <br />
                apart/their mouths
                <br />
                menses red split/every
                <br />
                three minutes a shoulder
                <br />
                is jammed through plaster and the oven door/
                <br />
                chairs push thru the rib cage/hot water or
                <br />
                boiling sperm decorate her body
                <br />
                <br />
                I rode the subway today
                <br />
                and bought a paper from an
                <br />
                east Indian man who might
                <br />
                have held his old lady onto
                <br />
                a hot pressing iron/I didn't know
                <br />
                maybe he catches little girls in the
                <br />
                parks and rips open their behinds
                <br />
                with steel rods/I can not decide
                <br />
                what he might have done I only
                <br />
                know every 3 minutes
                <br />
                every 5 minutes every 10 minutes
                <br />
                <br />
                I bought the paper
                <br />
                looking for the announcement
                <br />
                there has to be an announcement
                <br />
                of the women's bodies found
                <br />
                yesterday the missing little girl
                <br />
                <br />
                I sat in a restaurant with my
                <br />
                paper looking for the announcement
                <br />
                a young man served me coffee
                <br />
                I wondered did he pour the boiling
                <br />
                coffee on the woman because she was stupid
                <br />
                did he put the infant girl in
                <br />
                the coffee pot because she cried too much
                <br />
                what exactly did he do with coffee
                <br />
                <br />
                I looked for the announcement
                <br />
                the discovery of the dismembered
                <br />
                woman's body
                <br />
                victims have not all been
                <br />
                identified today they are
                <br />
                naked and dead/some refuse to
                <br />
                testify one girl out of 10's not
                <br />
                coherent/ I took the coffee
                <br />
                and spit it up I found an
                <br />
                announcement/not the woman's
                <br />
                bloated body in the river floating
                <br />
                not the child bleeding in the
                <br />
                59th street corridor/not the baby
                <br />
                broken on the floor
                <br />
                <br />
                "there is some concern
                <br />
                that alleged battered women
                <br />
                might start to murder their
                <br />
                husbands and lovers with no
                <br />
                immediate cause"
                <br />
                <br />
                I spit up I vomit I am screaming
                <br />
                we all have immediate cause
                <br />
                every 3 minutes
                <br />
                every 5 minutes
                <br />
                every 10 minutes
                <br />
                every day
                <br />
                <br />
                women's bodies are found
                <br />
                in alleys and bedrooms/at the top of the stairs
                <br />
                before I ride the subway/buy a paper or drink
                <br />
                coffee from your hands I must know
                <br />
                have you hurt a woman today
                <br />
                did you beat a woman today
                <br />
                throw a child across a room are the little girl's pants in your
                pocket
                <br />
                did you hurt a woman today
                <br />
                <br />
                I have to ask these obscene questions
                <br />
                I must know you see
                <br />
                the authorities require us to
                <br />
                establish
                <br />
                immediate cause
                <br />
                <br />
                every three minutes
                <br />
                every five minutes
                <br />
                every ten minutes
                <br />
                every day
              </p>
            </article>
          </section>

          {/* YouTube Embed Section */}
          <section id="broke-silence" className="section-content">
            <h2 className="section-title">I Broke My Silence</h2>

            {/* Trigger Warning Section */}
            <div className="bg-yellow-100 text-yellow-700 p-2 rounded-md mb-4">
              <p className="text-base">
                <strong>Viewer Advisory:</strong> This video contains sensitive
                content related to domestic abuse, which may be upsetting for
                some viewers. It will begin automatically at the 6-minute mark,
                but if you’d prefer to watch the entire video from the start,
                you can do so at your own discretion.
              </p>
            </div>

            {/* YouTube Video Embed */}
            <div className="video-container">
              <div className="video-container-2">
                <iframe
                  src="https://www.youtube.com/embed/frFEdN7aMh8?start=360"
                  title="I Broke My Silence"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-frame"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Author Section */}
          <section id="author" className="section-content">
            <h2 className="section-title">About the Author</h2>
            <div className="section-block">
              <p className="section-paragraph">
                <strong>Ntozake Shange (1948–2018)</strong>
              </p>
              <p className="section-paragraph">
                Ntozake Shange was an acclaimed African American playwright,
                poet, and novelist, best known for her groundbreaking choreopoem{" "}
                <em>
                  For Colored Girls Who Have Considered Suicide / When the
                  Rainbow Is Enuf
                </em>
                . Born Paulette Linda Williams in Trenton, New Jersey, she
                adopted the name Ntozake Shange, which means "she who comes with
                her own things" and "she who walks like a lion" in Xhosa,
                reflecting her commitment to her African heritage and feminist
                ideals.
              </p>
              <p className="section-paragraph">
                Shange's work often explored themes of race, gender, and
                identity, giving voice to the struggles and resilience of Black
                women. Her writing style blended poetry, prose, and performance,
                creating a unique and powerful form of storytelling.{" "}
                <em>With No Immediate Cause</em>, like much of her work,
                confronts the systemic violence against women and challenges
                societal complacency, making her a pivotal figure in both
                feminist and Black arts movements.
              </p>
              <p className="section-paragraph">
                Throughout her career, Shange received numerous accolades,
                including an Obie Award for <em>For Colored Girls</em> and a
                Guggenheim Fellowship. Her legacy continues to inspire writers
                and activists to address issues of social justice and equality
                through art.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              {/* Analysis Point 1: Trauma and PTSD in the Poem */}
              <p className="section-subtitle">1. Trauma and PTSD in the Poem</p>
              <p className="section-paragraph">
                Ntozake Shange's poem vividly portrays the pervasive trauma
                inflicted by systemic violence against women and children. The
                repetition of time intervals—"every 3 minutes," "every 5
                minutes," "every 10 minutes"—acts as a haunting reminder of the
                relentless frequency of these acts. This repetition mirrors the
                intrusive thoughts and flashbacks experienced by survivors of
                trauma, particularly those with PTSD. The poem's graphic
                imagery, such as "hot water or boiling sperm decorate her body,"
                forces readers to confront the physical and emotional scars left
                by such violence, emphasizing the lasting psychological impact
                on survivors.
              </p>

              {/* Analysis Point 2: Structure and Narrative Voice */}
              <p className="section-subtitle">
                2. Structure and Narrative Voice
              </p>
              <p className="section-paragraph">
                The poem's free-verse structure and fragmented lines reflect the
                disjointed nature of traumatic memory. Shange's narrative voice
                shifts between personal reflection and collective experience,
                creating a sense of shared suffering. The speaker's inability to
                distinguish between potential perpetrators—"an old man who may
                have beaten his old wife" or "an east Indian man who might have
                held his old lady onto a hot pressing iron"—highlights the
                pervasive fear and hypervigilance common in PTSD. This
                uncertainty underscores the constant state of alertness that
                trauma survivors often endure.
              </p>

              {/* Analysis Point 3: Thematic Analysis */}
              <p className="section-subtitle">3. Thematic Analysis</p>
              <p className="section-paragraph">
                Shange's poem delves into the systemic nature of gender-based
                violence and its devastating psychological consequences. The
                recurring imagery of broken bodies—"the woman's bloated body in
                the river floating," "the child bleeding in the 59th street
                corridor"—serves as a metaphor for the fragmentation of the self
                caused by trauma. The poem also critiques societal indifference,
                as seen in the speaker's search for an "announcement" of these
                crimes, only to find a dismissive statement about "alleged
                battered women." This reflects the gaslighting and invalidation
                often faced by trauma survivors, exacerbating their PTSD.
              </p>

              {/* Analysis Point 4: Emotional Resonance and Call to Action */}
              <p className="section-subtitle">
                4. Emotional Resonance and Call to Action
              </p>
              <p className="section-paragraph">
                The poem's raw emotional intensity—"I spit up I vomit I am
                screaming"—captures the visceral reaction to trauma and the
                urgency of addressing it. Shange's use of rhetorical
                questions—"have you hurt a woman today," "did you beat a woman
                today"—forces readers to confront their complicity in a culture
                that perpetuates violence. By ending with the phrase "immediate
                cause," Shange challenges the notion that violence against women
                is ever without cause, urging society to acknowledge and address
                the deep-rooted trauma it inflicts.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              {/* Question 1 */}
              <li className="section-question">
                What is the significance of the repetition of time intervals in
                the poem?
                <p className="section-answer">
                  The repetition of "every 3 minutes," "every 5 minutes," and
                  "every 10 minutes" emphasizes the relentless frequency of
                  violence against women and children. This repetition mirrors
                  the intrusive thoughts and flashbacks experienced by trauma
                  survivors, particularly those with PTSD. It also highlights
                  the normalization of such violence in society, forcing readers
                  to confront its pervasive nature.
                </p>
              </li>

              {/* Question 2 */}
              <li className="section-question">
                How does the poem explore the theme of societal complicity?
                <p className="section-answer">
                  The poem critiques societal indifference to violence against
                  women, as seen in the speaker's search for an "announcement"
                  of the crimes. The dismissive statement about "alleged
                  battered women" reflects the gaslighting and invalidation
                  often faced by survivors. By questioning the lack of
                  accountability, Shange challenges readers to examine their own
                  complicity in perpetuating a culture of silence and inaction.
                </p>
              </li>

              {/* Question 3 */}
              <li className="section-question">
                What role does imagery play in conveying the trauma of violence?
                <p className="section-answer">
                  Shange uses vivid and graphic imagery, such as "hot water or
                  boiling sperm decorate her body" and "the child bleeding in
                  the 59th street corridor," to depict the physical and
                  emotional scars of violence. These images evoke a visceral
                  reaction, forcing readers to confront the brutal reality of
                  gender-based violence and its lasting psychological impact on
                  survivors.
                </p>
              </li>

              {/* Question 4 */}
              <li className="section-question">
                How does the poem's structure reflect the experience of trauma?
                <p className="section-answer">
                  The poem's fragmented lines and shifting narrative voice mimic
                  the disjointed nature of traumatic memory. The speaker's
                  thoughts jump from one scenario to another, reflecting the
                  unpredictability of trauma responses. This structure also
                  mirrors the pervasive fear and hypervigilance experienced by
                  survivors, as they navigate a world where violence can occur
                  at any moment.
                </p>
              </li>

              {/* Question 5 */}
              <li className="section-question">
                What is the significance of the speaker's rhetorical questions?
                <p className="section-answer">
                  The rhetorical questions—"have you hurt a woman today," "did
                  you beat a woman today"—force readers to confront their
                  potential complicity in violence. These questions challenge
                  societal norms and demand accountability, urging readers to
                  reflect on their actions and the broader systems that enable
                  such violence.
                </p>
              </li>

              {/* Question 6 */}
              <li className="section-question">
                How does the poem address the psychological impact of violence?
                <p className="section-answer">
                  The poem vividly portrays the psychological toll of violence
                  through its depiction of fear, hypervigilance, and intrusive
                  thoughts. The speaker's inability to trust those around
                  her—whether the old man on the subway or the young man serving
                  coffee—reflects the deep-seated anxiety and mistrust that
                  often accompany trauma. The poem also highlights the societal
                  gaslighting that exacerbates survivors' mental health
                  struggles.
                </p>
              </li>

              {/* Question 7 */}
              <li className="section-question">
                What is the meaning of the line "we all have immediate cause"?
                <p className="section-answer">
                  This line challenges the notion that violence against women is
                  ever without cause. By asserting that "we all have immediate
                  cause," Shange emphasizes the systemic nature of gender-based
                  violence and the urgent need for societal change. The line
                  also serves as a call to action, urging readers to recognize
                  their responsibility in addressing this pervasive issue.
                </p>
              </li>

              {/* Question 8 */}
              <li className="section-question">
                How does the poem critique systemic violence?
                <p className="section-answer">
                  The poem critiques systemic violence by highlighting its
                  normalization and the lack of accountability. The speaker's
                  search for an "announcement" of the crimes reflects the
                  societal indifference to violence against women. By
                  juxtaposing the brutal reality of violence with the dismissive
                  statement about "alleged battered women," Shange exposes the
                  systemic structures that perpetuate such violence.
                </p>
              </li>

              {/* Question 9 */}
              <li className="section-question">
                What is the significance of the poem's title, "With No Immediate
                Cause"?
                <p className="section-answer">
                  The title critiques the societal tendency to dismiss violence
                  against women as lacking justification or cause. By framing
                  the poem around this phrase, Shange challenges readers to
                  recognize the systemic roots of such violence and the urgent
                  need for accountability. The title also underscores the poem's
                  central theme: that violence against women is never without
                  cause, as it is deeply embedded in societal structures.
                </p>
              </li>

              {/* Question 10 */}
              <li className="section-question">
                How does the poem use repetition to reinforce its themes?
                <p className="section-answer">
                  The repetition of time intervals—"every 3 minutes," "every 5
                  minutes," "every 10 minutes"—creates a rhythmic structure that
                  emphasizes the relentless frequency of violence. This
                  repetition mirrors the intrusive thoughts and flashbacks
                  experienced by trauma survivors, reinforcing the poem's themes
                  of systemic violence and its psychological impact.
                </p>
              </li>

              {/* Question 11 */}
              <li className="section-question">
                What is the role of the speaker's voice in the poem?
                <p className="section-answer">
                  The speaker's voice shifts between personal reflection and
                  collective experience, creating a sense of shared suffering.
                  This dual perspective highlights the pervasive nature of
                  violence against women and the collective trauma it inflicts.
                  The speaker's raw emotional intensity—"I spit up I vomit I am
                  screaming"—also underscores the urgency of addressing this
                  issue.
                </p>
              </li>

              {/* Question 12 */}
              <li className="section-question">
                How does the poem challenge traditional notions of justice?
                <p className="section-answer">
                  The poem challenges traditional notions of justice by exposing
                  the lack of accountability for violence against women. The
                  dismissive statement about "alleged battered women" reflects
                  the systemic failure to protect survivors and hold
                  perpetrators accountable. By ending with the phrase "immediate
                  cause," Shange calls for a reexamination of societal values
                  and a commitment to justice for survivors.
                </p>
              </li>

              {/* Question 13 */}
              <li className="section-question">
                How does the poem use enjambment to reflect its themes?
                <p className="section-answer">
                  The poem's use of enjambment creates a sense of urgency and
                  unpredictability, mirroring the disjointed nature of traumatic
                  memory. The fragmented lines reflect the speaker's struggle to
                  make sense of the violence around her, highlighting the
                  pervasive fear and hypervigilance experienced by survivors.
                </p>
              </li>

              {/* Question 14 */}
              <li className="section-question">
                What is the significance of the poem's closing lines?
                <p className="section-answer">
                  The closing lines—"every three minutes / every five minutes /
                  every ten minutes / every day"—reinforce the relentless
                  frequency of violence against women. By ending with this
                  repetition, Shange leaves readers with a haunting reminder of
                  the systemic nature of gender-based violence and the urgent
                  need for change.
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
