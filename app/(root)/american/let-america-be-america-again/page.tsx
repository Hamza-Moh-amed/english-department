import { Header } from "@/components/Header";
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
    { href: "#analysis", label: "Analysis" },
    { href: "#qna", label: "Q&A" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* For medium screens and up: show Navigation on the left and PageTitle centered */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left: Navigation */}
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          {/* Center: PageTitle */}
          <div className="flex-grow text-center">
            <PageTitle
              title="Let America Be America Again"
              author="Langston Hughes"
            />
          </div>
          {/* Right: Empty div to balance the left column */}
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle
            title="Let America Be America Again"
            author="Langston Hughes"
          />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Poem Section */}
        <section id="poem" className="space-y-8">
          <h2 className="text-2xl font-semibold">Poem</h2>
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg whitespace-pre-line">
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

        {/* Analysis Section */}
        <section id="analysis" className="space-y-8">
          <h2 className="text-2xl font-semibold">Analysis</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              <strong>1. The American Dream: Ideals vs. Reality</strong>
            </p>
            <p className="text-lg">
              Langston Hughes' poem *"Let America Be America Again"* is a
              profound critique of the American Dream, exposing the stark
              contrast between its idealized vision and the harsh realities
              faced by marginalized groups. Hughes begins by invoking the dream
              of America as a land of freedom, equality, and opportunity, but
              quickly juxtaposes this vision with the lived experiences of those
              who have been excluded from it. The refrain, “America never was
              America to me,” serves as a powerful reminder that the American
              Dream has always been an unfulfilled promise for many.
            </p>
            <p className="text-lg">
              *Quote*:
              <em>
                "Let America be the dream the dreamers dreamed— / Let it be that
                great strong land of love / Where never kings connive nor
                tyrants scheme / That any man be crushed by one above."
              </em>
            </p>
            <p className="text-lg">
              Hughes’ use of repetition emphasizes the disparity between the
              dream and the reality. The dream is described as a “great strong
              land of love,” free from tyranny and oppression, but the reality
              is a nation built on exploitation and inequality. This tension
              between idealism and reality is central to the poem’s message.
            </p>

            <p className="text-lg">
              <strong>2. The Voices of the Marginalized</strong>
            </p>
            <p className="text-lg">
              Hughes gives voice to the marginalized, embodying their struggles
              through a collective “I” that represents the poor, the enslaved,
              the displaced, and the exploited. By including diverse
              perspectives—such as the “poor white,” the “Negro,” the “red man,”
              and the “immigrant”—Hughes highlights the universality of
              oppression and the shared dream of a more equitable society. This
              inclusivity reinforces the poem’s central theme: the American
              Dream remains unfulfilled for many.
            </p>
            <p className="text-lg">
              *Quote*:
              <em>
                "I am the poor white, fooled and pushed apart, / I am the Negro
                bearing slavery’s scars. / I am the red man driven from the
                land, / I am the immigrant clutching the hope I seek."
              </em>
            </p>
            <p className="text-lg">
              Each group represents a different facet of America’s history of
              oppression. The “poor white” symbolizes those who have been
              manipulated by systemic inequality, while the “Negro” and “red
              man” represent the legacy of slavery and displacement. The
              “immigrant” embodies the hope for a better life, only to find “the
              same old stupid plan / Of dog eat dog, of mighty crush the weak.”
              This imagery underscores the cyclical nature of exploitation and
              the failure of the American Dream to deliver on its promises.
            </p>

            <p className="text-lg">
              <strong>3. Critique of Capitalism and Exploitation</strong>
            </p>
            <p className="text-lg">
              Hughes critiques the capitalist system, which perpetuates
              inequality and exploitation. The poem condemns the relentless
              pursuit of profit and power, symbolized by the “ancient endless
              chain / Of profit, power, gain, of grab the land!” This critique
              reflects Hughes’ socialist leanings and his belief that true
              freedom cannot exist under a system that prioritizes greed over
              human dignity.
            </p>
            <p className="text-lg">
              *Quote*:
              <em>
                "Of grab the gold! Of grab the ways of satisfying need! / Of
                work the men! Of take the pay! / Of owning everything for one’s
                own greed!"
              </em>
            </p>
            <p className="text-lg">
              The imagery of “grab the land” and “grab the gold” evokes the
              ruthless exploitation of both people and resources. Hughes
              portrays capitalism as a system that benefits the few at the
              expense of the many, leaving the marginalized to struggle for
              survival. This critique is particularly relevant in the context of
              the Great Depression, during which the poem was written, as it
              highlights the economic disparities that defined the era.
            </p>

            <p className="text-lg">
              <strong>4. The Role of Hope and Resistance</strong>
            </p>
            <p className="text-lg">
              Despite its critique, the poem is not devoid of hope. Hughes calls
              for a collective effort to reclaim the American Dream, urging the
              marginalized to rise and “make America again.” This vision of
              resistance and renewal reflects Hughes’ faith in the power of
              unity and collective action to bring about social change.
            </p>
            <p className="text-lg">
              *Quote*:
              <em>
                "We, the people, must redeem / The land, the mines, the plants,
                the rivers. / The mountains and the endless plain— / All, all
                the stretch of these great green states— / And make America
                again!"
              </em>
            </p>
            <p className="text-lg">
              The use of “we, the people” echoes the language of the U.S.
              Constitution, emphasizing the collective responsibility to build a
              more just and equitable society. Hughes envisions a future where
              America lives up to its ideals, free from exploitation and
              oppression. This call to action is both a critique of the present
              and a hopeful vision for the future.
            </p>

            <p className="text-lg">
              <strong>5. Literary Devices and Structure</strong>
            </p>
            <p className="text-lg">
              Hughes employs a free-verse structure, allowing the poem to flow
              organically and mirror the diversity of voices it represents. The
              use of repetition, particularly the refrain “America never was
              America to me,” reinforces the poem’s central theme. Additionally,
              Hughes’ vivid imagery and rhetorical questions engage the reader,
              compelling them to reflect on the poem’s message.
            </p>
            <p className="text-lg">
              *Quote*:
              <em>
                "Say, who are you that mumbles in the dark? / And who are you
                that draws your veil across the stars?"
              </em>
            </p>
            <p className="text-lg">
              These rhetorical questions challenge the reader to consider their
              own role in perpetuating or challenging systemic inequality. The
              imagery of “mumbling in the dark” and “drawing a veil across the
              stars” suggests a deliberate obscuring of truth and justice,
              further emphasizing the need for clarity and action.
            </p>

            <p className="text-lg">
              <strong>6. Historical and Social Context</strong>
            </p>
            <p className="text-lg">
              Written in 1935 during the Great Depression, *"Let America Be
              America Again"* reflects the economic and social struggles of the
              time. The poem resonates with the experiences of those who
              suffered most during the Depression, including African Americans,
              immigrants, and the working class. Hughes’ critique of capitalism
              and his call for social justice are deeply rooted in the
              historical context of the era.
            </p>
            <p className="text-lg">
              *Example*: The line “The millions on relief today” refers to the
              millions of Americans who relied on government relief programs
              during the Depression. This reference grounds the poem in its
              historical moment, highlighting the widespread poverty and
              inequality of the time.
            </p>

            <p className="text-lg">
              <strong>7. The Universality of the Poem’s Message</strong>
            </p>
            <p className="text-lg">
              While rooted in the specific context of 1930s America, the poem’s
              message remains relevant today. The themes of inequality,
              exploitation, and the struggle for justice continue to resonate in
              contemporary society. Hughes’ call to “make America again” is a
              timeless reminder of the ongoing fight for equality and freedom.
            </p>
            <p className="text-lg">
              *Example*: The poem’s critique of systemic inequality and its call
              for collective action can be seen in modern movements such as
              Black Lives Matter and the fight for immigrant rights. These
              movements echo Hughes’ vision of a more just and equitable
              society.
            </p>

            <p className="text-lg">
              <strong>8. Conclusion: A Call to Action</strong>
            </p>
            <p className="text-lg">
              *"Let America Be America Again"* is both a critique and a call to
              action. Hughes exposes the failures of the American Dream while
              envisioning a future where it can be realized for all. The poem’s
              enduring relevance lies in its powerful message of hope,
              resistance, and the possibility of change.
            </p>
            <p className="text-lg">
              *Quote*:
              <em>
                "O, let America be America again— / The land that never has been
                yet— / And yet must be—the land where every man is free."
              </em>
            </p>
            <p className="text-lg">
              This final refrain encapsulates the poem’s central message: the
              American Dream remains an unfulfilled promise, but it is a promise
              worth fighting for. Hughes’ vision of a just and equitable society
              continues to inspire readers to work toward a better future.
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
                  What is the central theme of *"Let America Be America Again"*,
                  and how does Hughes develop it throughout the poem?
                </strong>
                <p>
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

              <li>
                <strong>
                  How does Hughes use the refrain “America never was America to
                  me” to reinforce the poem’s message?
                </strong>
                <p>
                  The refrain serves as a powerful reminder of the unfulfilled
                  promise of the American Dream for marginalized groups. By
                  repeating this line, Hughes emphasizes the persistent gap
                  between the ideals of freedom and equality and the lived
                  experiences of those excluded from these ideals. The refrain
                  also creates a sense of unity among the diverse voices in the
                  poem, highlighting their shared disillusionment.
                </p>
              </li>

              <li>
                <strong>
                  What role do the voices of the marginalized play in the poem,
                  and how do they contribute to its overall message?
                </strong>
                <p>
                  The voices of the marginalized, represented by the collective
                  “I,” give a human face to the struggles of the poor, African
                  Americans, Native Americans, and immigrants. These voices
                  highlight the universality of oppression and the shared dream
                  of a more equitable society. By embodying these perspectives,
                  Hughes underscores the poem’s central theme: the American
                  Dream remains unfulfilled for many.
                </p>
              </li>

              <li>
                <strong>
                  How does Hughes critique capitalism in the poem, and what
                  imagery does he use to convey this critique?
                </strong>
                <p>
                  Hughes critiques capitalism as a system that perpetuates
                  inequality and exploitation. He uses vivid imagery, such as
                  the “ancient endless chain / Of profit, power, gain, of grab
                  the land!” to depict the relentless pursuit of wealth at the
                  expense of human dignity. This critique reflects Hughes’
                  socialist leanings and his belief that true freedom cannot
                  exist under a system that prioritizes greed over justice.
                </p>
              </li>

              <li>
                <strong>
                  What is the significance of the line “Of dog eat dog, of
                  mighty crush the weak” in the context of the poem?
                </strong>
                <p>
                  This line encapsulates the brutal reality of a society driven
                  by competition and exploitation. It reflects the systemic
                  inequality that forces the marginalized to struggle for
                  survival while the powerful thrive. The imagery of “dog eat
                  dog” underscores the dehumanizing effects of capitalism and
                  the failure of the American Dream to deliver on its promises.
                </p>
              </li>

              <li>
                <strong>
                  How does Hughes use repetition to emphasize the poem’s themes?
                </strong>
                <p>
                  Hughes uses repetition, particularly the refrain “America
                  never was America to me,” to reinforce the poem’s central
                  themes of disillusionment and inequality. The repetition
                  creates a rhythmic structure that mirrors the cyclical nature
                  of oppression and the persistent gap between the American
                  Dream and reality. It also serves as a rallying cry, uniting
                  the diverse voices in the poem.
                </p>
              </li>

              <li>
                <strong>
                  What is the historical context of the poem, and how does it
                  influence its message?
                </strong>
                <p>
                  Written in 1935 during the Great Depression, the poem reflects
                  the economic and social struggles of the time. The widespread
                  poverty and inequality of the era deeply influenced Hughes’
                  critique of capitalism and his call for social justice. The
                  poem’s message is rooted in the historical context of the
                  Depression, but its themes of inequality and resistance remain
                  relevant today.
                </p>
              </li>

              <li>
                <strong>
                  How does Hughes portray the American Dream in the poem, and
                  how does this portrayal differ from traditional
                  interpretations?
                </strong>
                <p>
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

              <li>
                <strong>
                  What is the significance of the line “The land that never has
                  been yet— / And yet must be” in the poem?
                </strong>
                <p>
                  This line encapsulates Hughes’ vision of a future where the
                  American Dream is realized for all. It acknowledges that the
                  Dream has never been fully achieved but insists that it is a
                  goal worth striving for. The line reflects Hughes’ hope and
                  determination, urging readers to work toward a more just and
                  equitable society.
                </p>
              </li>

              <li>
                <strong>
                  How does Hughes use imagery to convey the struggles of the
                  marginalized in the poem?
                </strong>
                <p>
                  Hughes uses vivid imagery, such as “the Negro bearing
                  slavery’s scars” and “the red man driven from the land,” to
                  depict the historical and ongoing struggles of marginalized
                  groups. These images evoke a sense of pain, resilience, and
                  hope, highlighting the human cost of systemic inequality and
                  the enduring dream of freedom and equality.
                </p>
              </li>

              <li>
                <strong>
                  What is the role of hope in the poem, and how does Hughes
                  convey it?
                </strong>
                <p>
                  Despite its critique of inequality, the poem is not devoid of
                  hope. Hughes conveys hope through his call for collective
                  action to “make America again.” This vision of resistance and
                  renewal reflects his faith in the power of unity and the
                  possibility of change. The poem’s hopeful tone serves as a
                  rallying cry for social justice.
                </p>
              </li>

              <li>
                <strong>
                  How does Hughes use rhetorical questions in the poem, and what
                  effect do they have on the reader?
                </strong>
                <p>
                  Hughes uses rhetorical questions, such as “Say, who are you
                  that mumbles in the dark?” to challenge the reader to reflect
                  on their own role in perpetuating or challenging systemic
                  inequality. These questions engage the reader, compelling them
                  to consider the poem’s message and their responsibility to
                  work toward a more just society.
                </p>
              </li>

              <li>
                <strong>
                  What is the significance of the line “The steel of freedom
                  does not stain” in the poem?
                </strong>
                <p>
                  This line symbolizes the enduring strength and resilience of
                  the marginalized in their fight for freedom and equality.
                  Despite the oppression they face, their spirit remains
                  unbroken. The imagery of “steel” conveys a sense of
                  determination and hope, reinforcing the poem’s message of
                  resistance and renewal.
                </p>
              </li>

              <li>
                <strong>
                  How does Hughes connect the struggles of different
                  marginalized groups in the poem?
                </strong>
                <p>
                  Hughes connects the struggles of different marginalized groups
                  by embodying their voices in the collective “I.” This
                  inclusive approach highlights the universality of oppression
                  and the shared dream of a more equitable society. By uniting
                  these voices, Hughes emphasizes the need for solidarity in the
                  fight for justice.
                </p>
              </li>

              <li>
                <strong>
                  What is the enduring relevance of *"Let America Be America
                  Again"* in contemporary society?
                </strong>
                <p>
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
          </div>
        </section>
      </div>
    </main>
  );
}
