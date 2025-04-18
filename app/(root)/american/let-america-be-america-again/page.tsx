import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Let America Be America Again",
  description:
    "A page dedicated to Langston Hughes' poem 'Let America Be America Again,' exploring its themes, literary analysis, and a detailed Q&A section.",
};

export default function LetAmericaBeAmericaAgain() {
  const navLinks: NavLink[] = [
    { href: "#poem", label: "Poem" },
    { href: "#author", label: "Author Background" },
    { href: "#analysis", label: "Analysis" },
    { href: "#poetic-elements", label: "Poetic Elements" },
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
          <PageTitle
            title="Let America Be America Again"
            author="Langston Hughes"
          />

          {/* Poem Section */}
          <section id="poem" className="section-content">
            <h2 className="section-title">Poem</h2>
            <article className="article-block">
              <p className="article-paragraph">
                Let America be America again.
                <br />
                Let it be the dream it used to be.
                <br />
                Let it be the pioneer on the plain
                <br />
                Seeking a home where he himself is free.
                <br />
                <br />
                (America never was America to me.)
                <br />
                <br />
                Let America be the dream the dreamers dreamed—
                <br />
                Let it be that great strong land of love
                <br />
                Where never kings connive nor tyrants scheme
                <br />
                That any man be crushed by one above.
                <br />
                <br />
                (It never was America to me.)
                <br />
                <br />
                O, let my land be a land where Liberty
                <br />
                Is crowned with no false patriotic wreath,
                <br />
                But opportunity is real, and life is free,
                <br />
                Equality is in the air we breathe.
                <br />
                <br />
                (There's never been equality for me,
                <br />
                Nor freedom in this "homeland of the free.")
                <br />
                <br />
                Say, who are you that mumbles in the dark?
                <br />
                And who are you that draws your veil across the stars?
                <br />
                <br />
                I am the poor white, fooled and pushed apart,
                <br />
                I am the Negro bearing slavery's scars.
                <br />
                I am the red man driven from the land,
                <br />
                I am the immigrant clutching the hope I seek—
                <br />
                And finding only the same old stupid plan
                <br />
                Of dog eat dog, of mighty crush the weak.
                <br />
                <br />
                I am the young man, full of strength and hope,
                <br />
                Tangled in that ancient endless chain
                <br />
                Of profit, power, gain, of grab the land!
                <br />
                Of grab the gold! Of grab the ways of satisfying need!
                <br />
                Of work the men! Of take the pay!
                <br />
                Of owning everything for one's own greed!
                <br />
                <br />
                I am the farmer, bondsman to the soil.
                <br />
                I am the worker sold to the machine.
                <br />
                I am the Negro, servant to you all.
                <br />
                I am the people, humble, hungry, mean—
                <br />
                Hungry yet today despite the dream.
                <br />
                Beaten yet today—O, Pioneers!
                <br />
                I am the man who never got ahead,
                <br />
                The poorest worker bartered through the years.
                <br />
                <br />
                Yet I'm the one who dreamt our basic dream
                <br />
                In the Old World while still a serf of kings,
                <br />
                Who dreamt a dream so strong, so brave, so true,
                <br />
                That even yet its mighty daring sings
                <br />
                In every brick and stone, in every furrow turned
                <br />
                That's made America the land it has become.
                <br />
                O, I'm the man who sailed those early seas
                <br />
                In search of what I meant to be my home—
                <br />
                For I'm the one who left dark Ireland's shore,
                <br />
                And Poland's plain, and England's grassy lea,
                <br />
                And torn from Black Africa's strand I came
                <br />
                To build a "homeland of the free."
                <br />
                <br />
                The free?
                <br />
                <br />
                Who said the free? Not me?
                <br />
                Surely not me? The millions on relief today?
                <br />
                The millions shot down when we strike?
                <br />
                The millions who have nothing for our pay?
                <br />
                For all the dreams we've dreamed
                <br />
                And all the songs we've sung
                <br />
                And all the hopes we've held
                <br />
                And all the flags we've hung,
                <br />
                The millions who have nothing for our pay—
                <br />
                Except the dream that's almost dead today.
                <br />
                <br />
                O, let America be America again—
                <br />
                The land that never has been yet—
                <br />
                And yet must be—the land where every man is free.
                <br />
                The land that's mine—the poor man's, Indian's, Negro's, ME—
                <br />
                Who made America,
                <br />
                Whose sweat and blood, whose faith and pain,
                <br />
                Whose hand at the foundry, whose plow in the rain,
                <br />
                Must bring back our mighty dream again.
                <br />
                <br />
                Sure, call me any ugly name you choose—
                <br />
                The steel of freedom does not stain.
                <br />
                From those who live like leeches on the people's lives,
                <br />
                We must take back our land again,
                <br />
                America!
                <br />
                <br />
                O, yes,
                <br />
                I say it plain,
                <br />
                America never was America to me,
                <br />
                And yet I swear this oath—
                <br />
                America will be!
                <br />
                <br />
                Out of the rack and ruin of our gangster death,
                <br />
                The rape and rot of graft, and stealth, and lies,
                <br />
                We, the people, must redeem
                <br />
                The land, the mines, the plants, the rivers.
                <br />
                The mountains and the endless plain—
                <br />
                All, all the stretch of these great green states—
                <br />
                And make America again!
              </p>
            </article>
          </section>

          {/* Author Background Section */}
          <section id="author" className="section-content">
            <h2 className="section-title">Author Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Langston Hughes (1902–1967) was an American poet, social
                activist, novelist, and playwright, and a leading figure of the
                Harlem Renaissance. His work celebrated African American culture
                and life while also addressing issues of racial injustice,
                economic inequality, and the American Dream. Hughes often used
                jazz and blues influences in his poetry, creating a rhythmic,
                accessible style that resonated with a wide audience.
              </p>
              <p className="section-paragraph">
                Born in Joplin, Missouri, Hughes spent much of his early life
                traveling, which influenced his perspective on race and social
                issues. He attended Columbia University but left due to racial
                discrimination, later completing his education at Lincoln
                University. His experiences working various jobs, including as a
                ship steward and busboy, exposed him to the struggles of
                working-class Americans, themes that frequently appeared in his
                works.
              </p>
              <p className="section-paragraph">
                *Let America Be America Again* is one of his most famous works,
                offering a critique of the American Dream, highlighting the
                struggles of marginalized groups, and expressing hope for a more
                just and equitable society. The poem is known for its
                conversational tone, alternating between hopeful ideals and
                harsh realities, and it serves as both a critique and a call for
                change, emphasizing the resilience and aspirations of those left
                behind by systemic oppression.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              {/* Analysis Point 1: The American Dream: Ideals vs. Reality */}
              <p className="section-subtitle">
                1. The American Dream: Ideals vs. Reality
              </p>
              <p className="section-paragraph">
                Langston Hughes' poem *"Let America Be America Again"* is a
                profound critique of the American Dream, exposing the stark
                contrast between its idealized vision and the harsh realities
                faced by marginalized groups. Hughes begins by invoking the
                dream of America as a land of freedom, equality, and
                opportunity, but quickly juxtaposes this vision with the lived
                experiences of those who have been excluded from it. The
                refrain, “America never was America to me,” serves as a powerful
                reminder that the American Dream has always been an unfulfilled
                promise for many.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Let America be the dream the dreamers dreamed— / Let it be
                  that great strong land of love / Where never kings connive nor
                  tyrants scheme / That any man be crushed by one above."
                </em>
              </p>
              <p className="section-paragraph">
                Hughes’ use of repetition emphasizes the disparity between the
                dream and the reality. The dream is described as a “great strong
                land of love,” free from tyranny and oppression, but the reality
                is a nation built on exploitation and inequality. This tension
                between idealism and reality is central to the poem’s message.
              </p>

              {/* Analysis Point 2: The Voices of the Marginalized */}
              <p className="section-subtitle">
                2. The Voices of the Marginalized
              </p>
              <p className="section-paragraph">
                Hughes gives voice to the marginalized, embodying their
                struggles through a collective “I” that represents the poor, the
                enslaved, the displaced, and the exploited. By including diverse
                perspectives—such as the “poor white,” the “Negro,” the “red
                man,” and the “immigrant”—Hughes highlights the universality of
                oppression and the shared dream of a more equitable society.
                This inclusivity reinforces the poem’s central theme: the
                American Dream remains unfulfilled for many.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "I am the poor white, fooled and pushed apart, / I am the
                  Negro bearing slavery’s scars. / I am the red man driven from
                  the land, / I am the immigrant clutching the hope I seek."
                </em>
              </p>
              <p className="section-paragraph">
                Each group represents a different facet of America’s history of
                oppression. The “poor white” symbolizes those who have been
                manipulated by systemic inequality, while the “Negro” and “red
                man” represent the legacy of slavery and displacement. The
                “immigrant” embodies the hope for a better life, only to find
                “the same old stupid plan / Of dog eat dog, of mighty crush the
                weak.” This imagery underscores the cyclical nature of
                exploitation and the failure of the American Dream to deliver on
                its promises.
              </p>

              {/* Analysis Point 3: Critique of Capitalism and Exploitation */}
              <p className="section-subtitle">
                3. Critique of Capitalism and Exploitation
              </p>
              <p className="section-paragraph">
                Hughes critiques the capitalist system, which perpetuates
                inequality and exploitation. The poem condemns the relentless
                pursuit of profit and power, symbolized by the “ancient endless
                chain / Of profit, power, gain, of grab the land!” This critique
                reflects Hughes’ socialist leanings and his belief that true
                freedom cannot exist under a system that prioritizes greed over
                human dignity.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Of grab the gold! Of grab the ways of satisfying need! / Of
                  work the men! Of take the pay! / Of owning everything for
                  one’s own greed!"
                </em>
              </p>
              <p className="section-paragraph">
                The imagery of “grab the land” and “grab the gold” evokes the
                ruthless exploitation of both people and resources. Hughes
                portrays capitalism as a system that benefits the few at the
                expense of the many, leaving the marginalized to struggle for
                survival. This critique is particularly relevant in the context
                of the Great Depression, during which the poem was written, as
                it highlights the economic disparities that defined the era.
              </p>

              {/* Analysis Point 4: The Role of Hope and Resistance */}
              <p className="section-subtitle">
                4. The Role of Hope and Resistance
              </p>
              <p className="section-paragraph">
                Despite its critique, the poem is not devoid of hope. Hughes
                calls for a collective effort to reclaim the American Dream,
                urging the marginalized to rise and “make America again.” This
                vision of resistance and renewal reflects Hughes’ faith in the
                power of unity and collective action to bring about social
                change.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "We, the people, must redeem / The land, the mines, the
                  plants, the rivers. / The mountains and the endless plain— /
                  All, all the stretch of these great green states— / And make
                  America again!"
                </em>
              </p>
              <p className="section-paragraph">
                The use of “we, the people” echoes the language of the U.S.
                Constitution, emphasizing the collective responsibility to build
                a more just and equitable society. Hughes envisions a future
                where America lives up to its ideals, free from exploitation and
                oppression. This call to action is both a critique of the
                present and a hopeful vision for the future.
              </p>

              {/* Analysis Point 5: Literary Devices and Structure */}
              <p className="section-subtitle">
                5. Literary Devices and Structure
              </p>
              <p className="section-paragraph">
                Hughes employs a free-verse structure, allowing the poem to flow
                organically and mirror the diversity of voices it represents.
                The use of repetition, particularly the refrain “America never
                was America to me,” reinforces the poem’s central theme.
                Additionally, Hughes’ vivid imagery and rhetorical questions
                engage the reader, compelling them to reflect on the poem’s
                message.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Say, who are you that mumbles in the dark? / And who are you
                  that draws your veil across the stars?"
                </em>
              </p>
              <p className="section-paragraph">
                These rhetorical questions challenge the reader to consider
                their own role in perpetuating or challenging systemic
                inequality. The imagery of “mumbling in the dark” and “drawing a
                veil across the stars” suggests a deliberate obscuring of truth
                and justice, further emphasizing the need for clarity and
                action.
              </p>

              {/* Analysis Point 6: Historical and Social Context */}
              <p className="section-subtitle">
                6. Historical and Social Context
              </p>
              <p className="section-paragraph">
                Written in 1935 during the Great Depression, *"Let America Be
                America Again"* reflects the economic and social struggles of
                the time. The poem resonates with the experiences of those who
                suffered most during the Depression, including African
                Americans, immigrants, and the working class. Hughes’ critique
                of capitalism and his call for social justice are deeply rooted
                in the historical context of the era.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "The millions on relief today"
                </em>
              </p>
              <p className="section-paragraph">
                This reference grounds the poem in its historical moment,
                highlighting the widespread poverty and inequality of the time.
              </p>

              {/* Analysis Point 7: The Universality of the Poem’s Message */}
              <p className="section-subtitle">
                7. The Universality of the Poem’s Message
              </p>
              <p className="section-paragraph">
                While rooted in the specific context of 1930s America, the
                poem’s message remains relevant today. The themes of inequality,
                exploitation, and the struggle for justice continue to resonate
                in contemporary society. Hughes’ call to “make America again” is
                a timeless reminder of the ongoing fight for equality and
                freedom.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "O, let America be America again— / The land that never has
                  been yet— / And yet must be—the land where every man is free."
                </em>
              </p>
              <p className="section-paragraph">
                This final refrain encapsulates the poem’s central message: the
                American Dream remains an unfulfilled promise, but it is a
                promise worth fighting for. Hughes’ vision of a just and
                equitable society continues to inspire readers to work toward a
                better future.
              </p>
            </div>
          </section>

          {/* Poetic Elements Section */}
          <section id="poetic-elements" className="section-content">
            <h2 className="section-title">Poetic Elements</h2>
            <div className="section-block">
              {/* Imagery */}
              <p className="section-subtitle">1. Imagery</p>
              <p className="section-paragraph">
                Hughes employs powerful imagery to illustrate both the promise
                of America and the harsh realities of marginalized communities.
                Phrases like "sweat and blood," "plow in the rain," and "rack
                and ruin of our gangster death" vividly depict struggle, labor,
                and oppression.
              </p>

              {/* Repetition */}
              <p className="section-subtitle">2. Repetition</p>
              <p className="section-paragraph">
                The poem frequently repeats key phrases to reinforce its themes.
                The phrase "Let America be America again" is repeated
                throughout, emphasizing the speaker's longing for an ideal
                America that has never existed for the oppressed. Similarly, "I
                am the..." is repeated to highlight the diverse voices of
                workers, immigrants, and marginalized groups.
              </p>

              {/* Metaphor */}
              <p className="section-subtitle">3. Metaphor</p>
              <p className="section-paragraph">
                Hughes uses metaphors to critique capitalism and systemic
                oppression. For example, he describes exploiters as "leeches on
                the people’s lives," symbolizing how the wealthy and powerful
                drain the resources of the working class.
              </p>

              {/* Personification */}
              <p className="section-subtitle">4. Personification</p>
              <p className="section-paragraph">
                America is personified as something that can be redeemed or
                reclaimed. The dream of America is treated as a living
                entity—one that has been betrayed but still holds potential for
                the future.
              </p>

              {/* Symbolism */}
              <p className="section-subtitle">5. Symbolism</p>
              <p className="section-paragraph">
                The "plow," "foundry," and "mountains" symbolize the labor and
                natural wealth that form the backbone of America. The "flag"
                represents patriotism but also serves as an ironic reminder that
                the country has not lived up to its promises.
              </p>

              {/* Tone and Diction */}
              <p className="section-subtitle">6. Tone and Diction</p>
              <p className="section-paragraph">
                Hughes’s tone shifts between despair, anger, and hope. The
                diction is deliberately plain yet evocative, ensuring
                accessibility to a broad audience while maintaining poetic
                depth.
              </p>

              {/* Contrast & Juxtaposition */}
              <p className="section-subtitle">7. Contrast & Juxtaposition</p>
              <p className="section-paragraph">
                Hughes contrasts the ideal America (the dream) with the real
                America (the oppression of the working class and marginalized
                communities). This stark contrast drives home his central
                message: the American Dream has never been accessible to all,
                but it can still be reclaimed.
              </p>
            </div>

            {/* Poetic Structure */}
            <h2 className="section-title">Poetic Structure</h2>
            <div className="section-block">
              {/* Free Verse */}
              <p className="section-subtitle">1. Free Verse</p>
              <p className="section-paragraph">
                The poem is written in free verse, meaning it lacks a strict
                rhyme scheme or meter. This allows Hughes to shift between
                different voices and emotions fluidly.
              </p>

              {/* Stanza Structure */}
              <p className="section-subtitle">2. Stanza Structure</p>
              <p className="section-paragraph">
                The poem features varying stanza lengths, creating a sense of
                movement and urgency. The shorter lines add emphasis to key
                statements, while the longer stanzas allow for deeper
                exploration of ideas.
              </p>

              {/* Enjambment */}
              <p className="section-subtitle">3. Enjambment</p>
              <p className="section-paragraph">
                Many lines flow into the next without a pause, enhancing the
                poem’s conversational tone. This technique mirrors the
                continuous struggle Hughes describes, making the poem feel like
                an unbroken plea for justice.
              </p>

              {/* Anaphora */}
              <p className="section-subtitle">
                4. Anaphora (Repetitive Phrasing)
              </p>
              <p className="section-paragraph">
                Hughes employs anaphora, the repetition of a word or phrase at
                the beginning of successive lines. Examples include:
              </p>
              <ul className="section-list">
                <li>
                  "I am the…" to emphasize the experiences of different
                  marginalized groups.
                </li>
                <li>
                  "The free? Who said the free? Not me? Surely not me?" to
                  stress the disconnect between America’s ideals and its
                  reality.
                </li>
              </ul>

              {/* Parallelism */}
              <p className="section-subtitle">5. Parallelism</p>
              <p className="section-paragraph">
                The structure of the poem reflects parallelism, where similar
                sentence structures are used to create rhythm and emphasize
                points. This is seen in the repeated "I am…" statements, which
                list the different people who have contributed to America’s
                foundation.
              </p>

              {/* Shift in Perspective */}
              <p className="section-subtitle">6. Shift in Perspective</p>
              <p className="section-paragraph">The poem alternates between:</p>
              <ul className="section-list">
                <li>
                  First-person singular ("I am the Negro," "I am the
                  farmer")—giving voice to individuals who have suffered.
                </li>
                <li>
                  First-person plural ("We, the people, must redeem")—a call to
                  collective action, emphasizing that change must come from the
                  masses.
                </li>
              </ul>

              {/* Call to Action */}
              <p className="section-subtitle">7. Call to Action</p>
              <p className="section-paragraph">
                The final stanzas shift from critique to hopeful resolution,
                with Hughes declaring that America "must be" a land where every
                person is free. The last line, "And make America again!", serves
                as both a plea and a demand for change.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              {/* Question 1 */}
              <li className="section-question">
                What is the central theme of *"Let America Be America Again"*,
                and how does Hughes develop it throughout the poem?
                <p className="section-answer">
                  The central theme of the poem is the critique of the American
                  Dream and the call for a more inclusive and equitable society.
                  Hughes develops this theme by juxtaposing the idealized vision
                  of America with the harsh realities faced by marginalized
                  groups. Through vivid imagery, repetition, and the voices of
                  the oppressed, Hughes exposes the disparity between the dream
                  and the reality, ultimately calling for collective action to
                  reclaim the dream.
                </p>
              </li>

              {/* Question 2 */}
              <li className="section-question">
                How does Hughes use the refrain “America never was America to
                me” to reinforce the poem’s message?
                <p className="section-answer">
                  The refrain serves as a powerful reminder of the unfulfilled
                  promise of the American Dream for marginalized groups. By
                  repeating this line, Hughes emphasizes the persistent gap
                  between the ideals of freedom and equality and the lived
                  experiences of those excluded from these ideals. The refrain
                  also creates a sense of unity among the diverse voices in the
                  poem, highlighting their shared disillusionment.
                </p>
              </li>

              {/* Question 3 */}
              <li className="section-question">
                What role do the voices of the marginalized play in the poem,
                and how do they contribute to its overall message?
                <p className="section-answer">
                  The voices of the marginalized, represented by the collective
                  “I,” give a human face to the struggles of the poor, African
                  Americans, Native Americans, and immigrants. These voices
                  highlight the universality of oppression and the shared dream
                  of a more equitable society. By embodying these perspectives,
                  Hughes underscores the poem’s central theme: the American
                  Dream remains unfulfilled for many.
                </p>
              </li>

              {/* Question 4 */}
              <li className="section-question">
                How does Hughes critique capitalism in the poem, and what
                imagery does he use to convey this critique?
                <p className="section-answer">
                  Hughes critiques capitalism as a system that perpetuates
                  inequality and exploitation. He uses vivid imagery, such as
                  the “ancient endless chain / Of profit, power, gain, of grab
                  the land!” to depict the relentless pursuit of wealth at the
                  expense of human dignity. This critique reflects Hughes’
                  socialist leanings and his belief that true freedom cannot
                  exist under a system that prioritizes greed over justice.
                </p>
              </li>

              {/* Question 5 */}
              <li className="section-question">
                What is the significance of the line “Of dog eat dog, of mighty
                crush the weak” in the context of the poem?
                <p className="section-answer">
                  This line encapsulates the brutal reality of a society driven
                  by competition and exploitation. It reflects the systemic
                  inequality that forces the marginalized to struggle for
                  survival while the powerful thrive. The imagery of “dog eat
                  dog” underscores the dehumanizing effects of capitalism and
                  the failure of the American Dream to deliver on its promises.
                </p>
              </li>

              {/* Question 6 */}
              <li className="section-question">
                How does Hughes use repetition to emphasize the poem’s themes?
                <p className="section-answer">
                  Hughes uses repetition, particularly the refrain “America
                  never was America to me,” to reinforce the poem’s central
                  themes of disillusionment and inequality. The repetition
                  creates a rhythmic structure that mirrors the cyclical nature
                  of oppression and the persistent gap between the American
                  Dream and reality. It also serves as a rallying cry, uniting
                  the diverse voices in the poem.
                </p>
              </li>

              {/* Question 7 */}
              <li className="section-question">
                What is the historical context of the poem, and how does it
                influence its message?
                <p className="section-answer">
                  Written in 1935 during the Great Depression, the poem reflects
                  the economic and social struggles of the time. The widespread
                  poverty and inequality of the era deeply influenced Hughes’
                  critique of capitalism and his call for social justice. The
                  poem’s message is rooted in the historical context of the
                  Depression, but its themes of inequality and resistance remain
                  relevant today.
                </p>
              </li>

              {/* Question 8 */}
              <li className="section-question">
                How does Hughes portray the American Dream in the poem, and how
                does this portrayal differ from traditional interpretations?
                <p className="section-answer">
                  Hughes portrays the American Dream as an unfulfilled promise,
                  contrasting its idealized vision with the harsh realities
                  faced by marginalized groups. Unlike traditional
                  interpretations that celebrate the Dream as a symbol of
                  opportunity and success, Hughes exposes its failures and calls
                  for a more inclusive and equitable society. This portrayal
                  challenges readers to reconsider the meaning of the American
                  Dream.
                </p>
              </li>

              {/* Question 9 */}
              <li className="section-question">
                What is the significance of the line “The land that never has
                been yet— / And yet must be” in the poem?
                <p className="section-answer">
                  This line encapsulates Hughes’ vision of a future where the
                  American Dream is realized for all. It acknowledges that the
                  Dream has never been fully achieved but insists that it is a
                  goal worth striving for. The line reflects Hughes’ hope and
                  determination, urging readers to work toward a more just and
                  equitable society.
                </p>
              </li>

              {/* Question 10 */}
              <li className="section-question">
                How does Hughes use imagery to convey the struggles of the
                marginalized in the poem?
                <p className="section-answer">
                  Hughes uses vivid imagery, such as “the Negro bearing
                  slavery’s scars” and “the red man driven from the land,” to
                  depict the historical and ongoing struggles of marginalized
                  groups. These images evoke a sense of pain, resilience, and
                  hope, highlighting the human cost of systemic inequality and
                  the enduring dream of freedom and equality.
                </p>
              </li>

              {/* Question 11 */}
              <li className="section-question">
                What is the role of hope in the poem, and how does Hughes convey
                it?
                <p className="section-answer">
                  Despite its critique of inequality, the poem is not devoid of
                  hope. Hughes conveys hope through his call for collective
                  action to “make America again.” This vision of resistance and
                  renewal reflects his faith in the power of unity and the
                  possibility of change. The poem’s hopeful tone serves as a
                  rallying cry for social justice.
                </p>
              </li>

              {/* Question 12 */}
              <li className="section-question">
                How does Hughes use rhetorical questions in the poem, and what
                effect do they have on the reader?
                <p className="section-answer">
                  Hughes uses rhetorical questions, such as “Say, who are you
                  that mumbles in the dark?” to challenge the reader to reflect
                  on their own role in perpetuating or challenging systemic
                  inequality. These questions engage the reader, compelling them
                  to consider the poem’s message and their responsibility to
                  work toward a more just society.
                </p>
              </li>

              {/* Question 13 */}
              <li className="section-question">
                What is the significance of the line “The steel of freedom does
                not stain” in the poem?
                <p className="section-answer">
                  This line symbolizes the enduring strength and resilience of
                  the marginalized in their fight for freedom and equality.
                  Despite the oppression they face, their spirit remains
                  unbroken. The imagery of “steel” conveys a sense of
                  determination and hope, reinforcing the poem’s message of
                  resistance and renewal.
                </p>
              </li>

              {/* Question 14 */}
              <li className="section-question">
                How does Hughes connect the struggles of different marginalized
                groups in the poem?
                <p className="section-answer">
                  Hughes connects the struggles of different marginalized groups
                  by embodying their voices in the collective “I.” This
                  inclusive approach highlights the universality of oppression
                  and the shared dream of a more equitable society. By uniting
                  these voices, Hughes emphasizes the need for solidarity in the
                  fight for justice.
                </p>
              </li>

              {/* Question 15 */}
              <li className="section-question">
                What is the enduring relevance of *"Let America Be America
                Again"* in contemporary society?
                <p className="section-answer">
                  The poem’s themes of inequality, exploitation, and the
                  struggle for justice remain relevant today. Its critique of
                  systemic inequality and its call for collective action
                  resonate with modern social justice movements, such as Black
                  Lives Matter and the fight for immigrant rights. The poem’s
                  enduring relevance lies in its powerful message of hope,
                  resistance, and the possibility of change.
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
