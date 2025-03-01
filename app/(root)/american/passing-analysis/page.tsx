import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Passing - Detailed Analysis",
  description:
    "A detailed literary analysis of Nella Larsen's novel 'Passing', exploring themes, symbols, characters, author background, and other literary elements.",
};

export default function PassingAnalysis() {
  const navLinks: NavLink[] = [
    { href: "#civil-rights", label: "Civil Rights" },
    { href: "#author-background", label: "Author Background" },
    { href: "#plot-summary", label: "Plot Summary" },
    { href: "#characters", label: "Characters" },
    { href: "#themes", label: "Themes" },
    { href: "#symbols", label: "Symbols" },
    { href: "#literary-elements", label: "Additional Elements" },
    { href: "#qna", label: "Q&A" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* For medium screens and up: Navigation on the left and PageTitle centered */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          <div className="flex-grow text-center">
            <PageTitle title="Passing" author="Nella Larsen" />
          </div>
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Passing" author="Nella Larsen" />
        </div>
      </div>
      {/* Main Content Sections */}
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Sections for Themes, Symbols, Characters, Author Background, and Literary Elements will be added here */}

        {/* YouTube Embed Section */}
        <section id="civil-rights" className="space-y-8">
          <h2 className="text-2xl font-semibold text-left">
            Civil Rights Movement
          </h2>
          <div className="flex justify-center">
            <div className="max-w-4xl w-[600px] h-[360px] lg:w-[800px] lg:h-[400px]">
              <iframe
                src="https://www.youtube.com/embed/C0JJHZUUAJU?si=9sEBUJhvN_ZZTk_9"
                title="Civil Rights Movment"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Author Background Section */}
        <section id="author-background" className="space-y-8">
          <h2 className="text-2xl font-semibold">Author Background</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              Nella Larsen (1891–1964) was a pivotal figure of the Harlem
              Renaissance, renowned for her incisive exploration of race,
              identity, and gender. Born in Chicago to a mixed-race family,
              Larsen’s own background influenced her nuanced portrayal of the
              complexities surrounding racial identity.
            </p>
            <p className="text-lg">
              Her most famous works, including <em>Passing</em> (1929) and{" "}
              <em>Quicksand</em> (1928), delve into the intricate dynamics of
              "passing"—the act of concealing one’s racial background to
              navigate a racially segregated society. Her writing reflects both
              the internal conflicts and societal pressures experienced by
              individuals straddling two cultural worlds.
            </p>
            <p className="text-lg">
              Although her work initially received mixed reviews, Larsen's
              insightful narratives have gained renewed scholarly attention for
              their depth and prescience in addressing themes of racial
              ambiguity, social stratification, and the fluidity of identity.
            </p>
          </div>
        </section>

        {/* Plot Summary Section */}
        <section id="plot-summary" className="space-y-8">
          <h2 className="text-2xl font-semibold">Plot Summary</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              <em>Passing</em> follows the intertwined lives of two childhood
              friends, Irene Redfield and Clare Kendry, as they navigate the
              fraught boundaries of racial identity in 1920s America. Irene, who
              lives a relatively secure life within the African American
              community, finds her world upended when Clare, who can pass as
              white, reenters her life.
            </p>
            <p className="text-lg">
              The novel centers on the tension between personal identity and
              societal expectations. Irene grapples with internal conflicts of
              jealousy and anxiety as she witnesses Clare's daring attempt to
              escape the limitations imposed by racial segregation, while Clare
              struggles with the perils and liberation of living a double life.
              Their rekindled relationship exposes deep-seated insecurities and
              the complexities of navigating race, class, and the desire for
              acceptance.
            </p>
            <p className="text-lg">
              Through ambiguous and suspenseful narrative turns,{" "}
              <em>Passing</em> examines the costs of denying one's heritage and
              the perilous allure of a life unbound by racial constraints,
              culminating in an ending that remains open to interpretation.
            </p>
          </div>
        </section>
        {/* Characters Section */}
        <section id="characters" className="space-y-8">
          <h2 className="text-2xl font-semibold">Characters</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              <strong>Irene Redfield:</strong> Irene serves as the moral and
              emotional core of the novel, embodying the tension between the
              desire for security and the burden of conformity. Raised within
              the African American community, she is acutely aware of the
              social, racial, and gendered expectations imposed on her. Her
              internal struggles—ranging from self-doubt to a fear of losing her
              cultural roots—reveal a character deeply conflicted by the lure of
              transgression versus the safety of her known world. Her narrative
              is punctuated by reflective introspection and a constant
              assessment of her identity in relation to the rigid structures
              surrounding her.
            </p>
            <p className="text-lg">
              <strong>Clare Kendry:</strong> In stark contrast, Clare Kendry is
              a study in rebellion and ambiguity. Her deliberate choice to pass
              as white is portrayed as both a means of liberation and a source
              of perpetual inner turmoil. Clare’s magnetic charm and audacious
              defiance of societal norms render her a compelling figure whose
              life oscillates between the privileges of whiteness and the
              inherent vulnerabilities of abandoning her past. Her actions not
              only disrupt the stability of those around her—particularly
              Irene—but also expose the profound isolation that accompanies her
              double life.
            </p>
            <p className="text-lg">
              <strong>Supporting Characters:</strong> The ensemble of secondary
              characters in <em>Passing</em> plays a critical role in
              contextualizing the protagonists’ experiences. Family members,
              friends, and acquaintances from both the African American and
              white communities provide a backdrop against which the central
              themes of race and identity are vividly illustrated. These
              characters, though not as deeply explored as Irene or Clare,
              represent the societal expectations and prejudices that influence
              every interaction. Their varying degrees of acceptance, judgment,
              and misunderstanding amplify the personal conflicts faced by the
              main characters.
            </p>
            <p className="text-lg">
              <strong>Duality and the Conflict of Identity:</strong> A unifying
              thread in the character portrayals is the theme of duality. Both
              Irene and Clare are emblematic of the struggle to reconcile
              internal truth with external perception. Irene’s cautious
              self-monitoring and internal debates about loyalty and betrayal
              contrast with Clare’s bold, sometimes reckless, assertions of
              freedom. This duality is further accentuated by their
              interpersonal dynamics, as the tension between their differing
              approaches to identity not only propels the narrative forward but
              also serves as a powerful metaphor for the divided self
              experienced by many in a racially stratified society.
            </p>
            <p className="text-lg">
              <strong>Psychological Complexity:</strong> Larsen’s nuanced
              portrayal of psychological conflict is evident in the inner
              monologues and subtle behaviors of her characters. Irene’s
              constant internal questioning and emotional volatility highlight
              the mental toll of living in a society where every action is
              scrutinized. Meanwhile, Clare’s enigmatic presence—marked by a
              blend of bravado and melancholy—invites readers to consider the
              hidden costs of defying social norms. The interplay of these
              psychological elements underscores the narrative’s broader
              exploration of identity and the human condition.
            </p>
            <p className="text-lg">
              <strong>Interpersonal Dynamics:</strong> The evolving relationship
              between Irene and Clare is central to the thematic fabric of the
              novel. Their friendship, fraught with admiration, envy, and mutual
              apprehension, acts as a microcosm for the broader societal
              conflicts of race and class. The subtle power struggles and
              unspoken tensions between them mirror the external pressures of a
              segregated society, forcing both characters—and the reader—to
              confront the painful ambiguities of belonging and identity.
            </p>
          </div>
        </section>
        {/* Themes Section */}
        <section id="themes" className="space-y-8">
          <h2 className="text-2xl font-semibold">Themes</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              <strong>Racial Identity and the Art of Passing:</strong> At the
              heart of <em>Passing</em> lies a probing exploration of racial
              identity and the practice of "passing" as white. Larsen challenges
              the reader to consider race as a mutable social construct rather
              than a fixed biological reality. The characters' decisions to
              conceal or reveal their racial heritage serve not only as survival
              mechanisms but also as acts of defiance against the rigid racial
              hierarchies of 1920s America.
            </p>
            <p className="text-lg">
              <strong>The Duality of Self:</strong> Larsen masterfully portrays
              the inner conflict of living a double life. The protagonists,
              especially Clare Kendry and Irene Redfield, embody the tension
              between their true selves and the personas they present to the
              world. This duality is emblematic of the broader human struggle to
              reconcile inner identity with external expectations, revealing how
              the desire for acceptance can force individuals into a continuous
              state of self-deception.
            </p>
            <p className="text-lg">
              <strong>Social Conformity versus Individual Freedom:</strong> A
              recurring motif in the novel is the tension between conforming to
              societal norms and the pursuit of personal authenticity. The
              pressure to adhere to prescribed roles—whether in the African
              American community or the white society that Clare temporarily
              inhabits—illustrates the often oppressive nature of social
              expectations. This conflict underscores the price of social
              mobility and the sacrifices made in the quest for personal
              liberation.
            </p>
            <p className="text-lg">
              <strong>Gender and the Construction of Identity:</strong> Beyond
              race, <em>Passing</em> also examines the intersections of gender
              and identity. Larsen highlights how the roles and expectations
              imposed on women further complicate the process of
              self-definition. The delicate balance between femininity and
              strength, vulnerability and resilience, adds an additional layer
              of complexity to the characters' struggles, making their personal
              journeys emblematic of broader societal challenges.
            </p>
            <p className="text-lg">
              <strong>Psychological Tension and Internal Conflict:</strong> The
              psychological undercurrents of the narrative are as potent as its
              social commentary. The characters' internal battles—between desire
              and duty, authenticity and performance—reflect the deep-seated
              anxiety that comes with living a divided life. This internal
              conflict is portrayed with subtlety, capturing the emotional toll
              of maintaining two disparate identities in a society that demands
              conformity.
            </p>
            <p className="text-lg">
              <strong>The Illusion of the American Dream:</strong> Through the
              lives of Irene and Clare, the novel critiques the promise of the
              American Dream. The allure of freedom and upward mobility is
              revealed to be a mirage, attainable only through the risky act of
              denying one's heritage. This disillusionment with the ideal of
              American success speaks volumes about the systemic barriers that
              persist despite the nation’s celebrated values of equality and
              opportunity.
            </p>
            <p className="text-lg">
              <strong>Memory, History, and the Unresolved Past:</strong>{" "}
              <em>Passing</em> is as much about the past as it is about the
              present. The characters' interactions with their personal
              histories and the broader historical context of racial oppression
              suggest that the past is an inescapable force shaping their
              identities. This theme invites readers to reflect on how history
              continually informs the present and how the scars of racial
              injustice are never fully healed.
            </p>
            <p className="text-lg">
              <strong>Ambiguity and the Search for Meaning:</strong> The
              open-ended nature of the novel mirrors the ambiguity inherent in
              the search for self-understanding. Larsen leaves many questions
              unanswered, forcing both the characters and the readers to grapple
              with the elusive nature of truth and identity. This ambiguity
              serves as a powerful reminder that in a world defined by shifting
              social boundaries, clear-cut answers are often an illusion.
            </p>
          </div>
        </section>
        {/* Symbols Section */}
        <section id="symbols" className="space-y-8">
          <h2 className="text-2xl font-semibold">Symbols</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              <strong>Passing as a Symbol:</strong> The very act of "passing" is
              imbued with symbolic resonance throughout the novel. It represents
              not only the characters’ physical ability to appear as white but
              also the broader, more complex themes of identity, secrecy, and
              survival. Passing becomes a double-edged sword: a means of
              liberation from oppressive social constraints while simultaneously
              acting as a constant reminder of the inescapable ties to one’s
              original cultural identity.
            </p>
            <p className="text-lg">
              <strong>The Color White:</strong> White is laden with multiple
              connotations in <em>Passing</em>. It signifies societal privilege,
              acceptance, and the often illusory promise of the American Dream.
              However, for characters who pass as white, it also carries the
              burden of erasing one’s true heritage, symbolizing the painful
              trade-offs between societal gain and personal authenticity.
            </p>
            <p className="text-lg">
              <strong>Mirrors and Reflections:</strong> Mirrors in the novel are
              a recurring motif, serving as powerful symbols for
              self-examination and the duality of identity. The act of
              reflecting—both literally and metaphorically—forces characters
              like Irene and Clare to confront the discrepancies between their
              outward appearances and inner realities, highlighting the tension
              between public persona and private truth.
            </p>
            <p className="text-lg">
              <strong>Windows and Thresholds:</strong> Windows and other
              transitional spaces in the narrative symbolize the porous
              boundaries between different social realms. They represent both
              opportunity and confinement, illustrating the fine line characters
              must navigate between the safe confines of their known worlds and
              the perilous, often unpredictable, outside.
            </p>
            <p className="text-lg">
              <strong>Fashion and Adornment:</strong> In <em>Passing</em>,
              clothing and style are not mere aesthetics but serve as deliberate
              markers of identity. The ways in which characters dress and
              present themselves underscore the performative aspects of race and
              class, reinforcing how external appearances can be manipulated to
              conform to or resist societal expectations.
            </p>
            <p className="text-lg">
              <strong>The Social Setting:</strong> The urban landscapes and
              social environments depicted in the novel function as symbolic
              arenas where the dramas of race and identity are played out. These
              settings encapsulate both the promise of upward mobility and the
              rigid limitations imposed by societal prejudices, emphasizing the
              ongoing struggle for recognition and equality.
            </p>
          </div>
        </section>
        {/* Additional Literary Elements Section */}
        <section id="literary-elements" className="space-y-8">
          <h2 className="text-2xl font-semibold">
            Additional Literary Elements
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              <strong>Narrative Structure and Perspective:</strong> Nella
              Larsen’s narrative technique in <em>Passing</em> is characterized
              by a third-person limited perspective that primarily follows Irene
              Redfield. This approach allows readers to experience the inner
              turmoil, doubts, and conflicting emotions of the protagonist,
              effectively conveying the complex interplay between her inner life
              and the external pressures of a racially segregated society.
            </p>
            <p className="text-lg">
              <strong>Ambiguity and Unreliable Narration:</strong> One of the
              most compelling literary elements in the novel is its pervasive
              ambiguity. Larsen deliberately leaves gaps in the narrative,
              particularly regarding the true motivations and inner life of
              Clare Kendry. This ambiguity not only mirrors the elusive nature
              of identity but also challenges the reader to question the
              reliability of appearances and the narratives constructed around
              race and belonging.
            </p>
            <p className="text-lg">
              <strong>Subtext and Tension:</strong> The dialogue and inner
              monologues are laden with subtext, reflecting the unspoken
              tensions that underpin social interactions in the novel. Through
              subtle cues and nuanced language, Larsen communicates the hidden
              struggles of her characters, inviting readers to interpret the
              unsaid as much as the explicit. This element enhances the
              psychological depth of the narrative and reinforces the theme of
              internal conflict.
            </p>
            <p className="text-lg">
              <strong>Foreshadowing and Symbolic Imagery:</strong> Larsen
              employs foreshadowing to build suspense and hint at the inevitable
              collision between the characters’ dual identities. Coupled with
              recurring symbols—such as mirrors, windows, and the very act of
              passing—the narrative is imbued with layers of meaning that compel
              readers to engage in a deeper, more reflective analysis of both
              the text and the social constructs it critiques.
            </p>
          </div>
        </section>
        {/* Questions & Answers Section */}
        <section id="qna" className="space-y-8">
          <h2 className="text-2xl font-semibold">Questions & Answers</h2>
          <div className="prose max-w-none">
            <ol className="list-decimal ml-6 space-y-4 text-lg">
              <li>
                <strong>
                  What does the title "Passing" signify in the novel?
                </strong>
                <p>
                  The title encapsulates the act of concealing one's racial
                  identity to navigate a divided society. It serves as both a
                  literal and metaphorical device, highlighting the tension
                  between authenticity and societal acceptance. At one point,
                  the narrative reflects,{" "}
                  <em>
                    "to pass was to exist in a space of both liberation and
                    confinement."
                  </em>
                </p>
              </li>
              <li>
                <strong>
                  How do Irene's internal conflicts drive the narrative?
                </strong>
                <p>
                  Irene's struggle is central to the novel as she battles with
                  loyalty, jealousy, and the fear of exposure. Her constant
                  self-examination reveals the cost of living between two
                  worlds. The text captures her turmoil when it states,{" "}
                  <em>
                    "Irene's heart was a silent battleground, torn between duty
                    and desire."
                  </em>
                </p>
              </li>
              <li>
                <strong>
                  In what ways does Clare challenge societal norms through her
                  character?
                </strong>
                <p>
                  Clare subverts the rigid structures of racial segregation by
                  choosing to pass as white. Her defiant embrace of both her
                  past and her constructed present forces readers and other
                  characters to confront the contradictions inherent in racial
                  identity. As the narrative notes,{" "}
                  <em>
                    "Clare's existence was an audacious rebuttal to a society
                    built on exclusion."
                  </em>
                </p>
              </li>
              <li>
                <strong>
                  How is the theme of duality expressed in the characters'
                  identities?
                </strong>
                <p>
                  Duality is a pervasive motif, evident in the split between the
                  characters' public personas and private selves. Both Irene and
                  Clare experience this internal division, struggling to
                  reconcile their true identities with the roles imposed upon
                  them by society. A reflective moment in the novel states,{" "}
                  <em>
                    "each step they took was a negotiation between two
                    conflicting selves."
                  </em>
                </p>
              </li>
              <li>
                <strong>
                  How does the novel portray racial identity as a fluid
                  construct?
                </strong>
                <p>
                  Larsen challenges the notion of fixed identities by
                  illustrating how race can be both a chosen and imposed
                  condition. The characters' ability to move between social
                  spheres underscores the artificiality of racial boundaries.
                  The text suggests,{" "}
                  <em>
                    "race was not an inherent mark but a mutable guise, adopted
                    and discarded at will."
                  </em>
                </p>
              </li>
              <li>
                <strong>
                  What impact do societal expectations have on the characters'
                  lives?
                </strong>
                <p>
                  Societal expectations exert a profound influence, dictating
                  how characters behave and perceive themselves. The pressure to
                  conform creates internal conflicts and fuels the narrative’s
                  tension. The novel poignantly captures this with,{" "}
                  <em>
                    "the ever-watchful eyes of society bound them in invisible
                    chains."
                  </em>
                </p>
              </li>
              <li>
                <strong>
                  How does ambiguity function as a narrative device in the
                  novel?
                </strong>
                <p>
                  Ambiguity is employed to mirror the elusive nature of identity
                  and truth. By leaving certain aspects of character motivations
                  open-ended, Larsen invites readers to engage in deeper
                  reflection. One subtle line from the text reads,{" "}
                  <em>"the truth was as shifting as the shadows at dusk."</em>{" "}
                  This open-endedness adds layers to the narrative.
                </p>
              </li>
              <li>
                <strong>
                  What is the significance of mirrors and reflective imagery in
                  the story?
                </strong>
                <p>
                  Mirrors serve as powerful symbols for self-examination and the
                  dichotomy between appearance and reality. They compel
                  characters to confront their dual identities, both the one
                  presented to the world and the hidden self. The narrative
                  offers a vivid image:{" "}
                  <em>
                    "in every reflection lay the unspoken truth of a fractured
                    identity."
                  </em>
                </p>
              </li>
              <li>
                <strong>
                  How does Larsen critique the American Dream through the
                  characters' experiences?
                </strong>
                <p>
                  The novel critiques the American Dream by exposing its
                  dependency on assimilation and the denial of one’s heritage.
                  The promise of acceptance and upward mobility is shown to be
                  both alluring and destructive. As illustrated in the text,{" "}
                  <em>
                    "the dream was a gilded promise that exacted a heavy toll on
                    the soul."
                  </em>
                </p>
              </li>
              <li>
                <strong>
                  In what ways does the setting influence the characters'
                  perceptions of race?
                </strong>
                <p>
                  The urban milieu of the novel, with its stark divisions and
                  hidden enclaves, acts as a mirror to the fractured identities
                  of its inhabitants. The setting not only contextualizes the
                  characters’ struggles but also intensifies the contrasts
                  between different social worlds. The text evocatively notes,{" "}
                  <em>
                    "the city was a labyrinth of identities, each corner
                    reflecting a different truth."
                  </em>
                </p>
              </li>
              <li>
                <strong>
                  How is irony used to enhance the novel’s themes?
                </strong>
                <p>
                  Irony permeates the narrative, particularly in the
                  contradictions between societal ideals and the harsh realities
                  of racial segregation. The characters’ attempts to conform
                  often lead to unexpected, sometimes tragic, outcomes. The
                  narrative captures this with,{" "}
                  <em>
                    "in striving for acceptance, they often found themselves
                    imprisoned by their own contradictions."
                  </em>
                </p>
              </li>
              <li>
                <strong>
                  What does Irene’s character reveal about internalized racism?
                </strong>
                <p>
                  Irene’s constant self-monitoring and inner conflict reveal the
                  insidious effects of internalized racism. Her struggle to
                  reconcile her identity with societal expectations illustrates
                  the psychological burden of discrimination. At one point, the
                  narrative confesses,{" "}
                  <em>
                    "her reflection bore the marks of a self denied, a soul
                    subdued by internal strife."
                  </em>
                </p>
              </li>
              <li>
                <strong>
                  How are themes of secrecy and revelation explored in the
                  novel?
                </strong>
                <p>
                  Secrecy is both a shield and a source of anxiety for the
                  characters. The careful concealment of true identities leads
                  to moments of profound revelation, highlighting the perilous
                  balance between self-preservation and authenticity. The novel
                  remarks,{" "}
                  <em>
                    "every secret whispered held the promise of both peril and
                    liberation."
                  </em>
                </p>
              </li>
              <li>
                <strong>
                  How do supporting characters contribute to the overarching
                  narrative?
                </strong>
                <p>
                  While the focus centers on Irene and Clare, supporting
                  characters play a critical role in reflecting and reinforcing
                  societal attitudes. Their judgments and interactions amplify
                  the main themes, offering a broader commentary on race and
                  identity. As one reflective observation states,{" "}
                  <em>
                    "in the sidelong glances of acquaintances, the weight of
                    prejudice was unmistakably clear."
                  </em>
                </p>
              </li>
              <li>
                <strong>
                  What is the lasting impact of racial passing on the
                  characters' identities?
                </strong>
                <p>
                  Racial passing leaves an indelible mark, creating a legacy of
                  ambiguity and loss. The characters are forever altered by the
                  choices they make, navigating lives filled with both
                  opportunity and isolation. The narrative poignantly captures
                  this enduring conflict with,{" "}
                  <em>
                    "the scars of passing were etched deep, a constant reminder
                    of the price of survival."
                  </em>
                </p>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
