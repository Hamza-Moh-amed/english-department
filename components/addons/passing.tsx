import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Passing",
  description:
    "A page based on Nella Larsen's Passing (New York: Alfred A. Knopf, 1929), exploring themes of racial identity, societal expectations, and the complexities of human relationships.",
};

export default function PassingText() {
  const navLinks: NavLink[] = [
    { href: "#audiobook", label: "Audiobook" },
    { href: "#encounter-one", label: "Encounter-One" },
    { href: "#encounter-two", label: "Encounter-Two" },
    { href: "#re-encounter", label: "Re-Encounter" },
    { href: "#finale", label: "Finale" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* For medium screens and up: show Navigation on the left and PageTitle centered */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left: Navigation */}
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          {/* Center: PageTitle */}
          <div className="flex-grow text-center">
            <PageTitle title="Passing" author="Nella Larsen" />
          </div>
          {/* Right: Empty div to balance the left column */}
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Passing" author="Nella Larsen" />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* YouTube Embed Section */}
        <section id="audiobook" className="space-y-8">
          <h2 className="text-2xl font-semibold text-left">Audiobook</h2>
          <div className="flex justify-center">
            <div className="max-w-4xl w-[600px] h-[360px] lg:w-[800px] lg:h-[400px]">
              <iframe
                src="https://www.youtube.com/embed/dtqgq8sIQs0?si=M0_84UbE3bLz8bzz"
                title="Passing Audiobook"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>
        {/* Article Section */}
        {/* PART ONE: ENCOUNTER - ONE */}
        <section id="encounter-one" className="space-y-8">
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg">
              <strong>PART ONE: ENCOUNTER</strong>
            </p>
            <p>
              <strong>ONE</strong>
            </p>
            <p className="text-lg">
              It was the last letter in Irene Redfield's little pile of morning
              mail. After her other ordinary and clearly directed letters the
              long envelope of thin Italian paper with its almost illegible
              scrawl seemed out of place and alien. And there was, too,
              something mysterious and slightly furtive about it. A thin sly
              thing which bore no return address to betray the sender. Not that
              she hadn't immediately known who its sender was. Some two years
              ago she had one very like it in outward appearance. Furtive, but
              yet in some peculiar, determined way a little flaunting. Purple
              ink. Foreign paper of extraordinary size.
            </p>
            <p className="text-lg">
              It had been, Irene noted, postmarked in New York the day before.
              Her brows came together in a tiny frown. The frown, however, was
              more from perplexity than from annoyance; though there was in her
              thoughts an element of both. She was wholly unable to comprehend
              such an attitude towards danger as she was sure the letter's
              contents would reveal; and she disliked the idea of opening and
              reading it.
            </p>
            <p className="text-lg">
              This, she reflected, was of a piece with all that she knew of
              Clare Kendry. Stepping always on the edge of danger. Always aware,
              but not drawing back or turning aside. Certainly not because of
              any alarms or feeling of outrage on the part of others.
            </p>
            <p className="text-lg">
              And for a swift moment Irene Redfield seemed to see a pale small
              girl sitting on a ragged blue sofa, sewing pieces of bright red
              cloth together, while her drunken father, a tall, powerfully built
              man, raged threateningly up and down the shabby room, bellowing
              curses and making spasmodic lunges at her which were not the less
              frightening because they were, for the most part, ineffectual.
              Sometimes he did manage to reach her. But only the fact that the
              child had edged herself and her poor sewing over to the
              farthermost corner of the sofa suggested that she was in any way
              perturbed by this menace to herself and her work.
            </p>
            <p className="text-lg">
              Clare had known well enough that it was unsafe to take a portion
              of the dollar that was her weekly wage for the doing of many
              errands for the dressmaker who lived on the top floor of the
              building of which Bob Kendry was janitor. But that knowledge had
              not deterred her. She wanted to go to her Sunday school's picnic,
              and she had made up her mind to wear a new dress. So, in spite of
              certain unpleasantness and possible danger, she had taken the
              money to buy the material for that pathetic little red frock.
            </p>
            <p className="text-lg">
              There had been, even in those days, nothing sacrificial in Clare
              Kendry's idea of life, no allegiance beyond her own immediate
              desire. She was selfish, and cold, and hard. And yet she had, too,
              a strange capacity of transforming warmth and passion, verging
              sometimes almost on theatrical heroics.
            </p>
            <p className="text-lg">
              Irene, who was a year or more older than Clare, remembered the day
              that Bob Kendry had been brought home dead, killed in a silly
              saloon-fight. Clare, who was at that time a scant fifteen years
              old, had just stood there with her lips pressed together, her thin
              arms folded across her narrow chest, staring down at the familiar
              pasty-white face of her parent with a sort of disdain in her
              slanting black eyes. For a very long time she had stood like that,
              silent and staring. Then, quite suddenly, she had given way to a
              torrent of weeping, swaying her thin body, tearing at her bright
              hair, and stamping her small feet. The outburst had ceased as
              suddenly as it had begun. She glanced quickly about the bare room,
              taking everyone in, even the two policemen, in a sharp look of
              flashing scorn. And, in the next instant, she had turned and
              vanished through the door.
            </p>
            <p className="text-lg">
              Seen across the long stretch of years, the thing had more the
              appearance of an outpouring of pent-up fury than of an overflow of
              grief for her dead father; though she had been, Irene admitted,
              fond enough of him in her own rather catlike way.
            </p>
            <p className="text-lg">
              Catlike. Certainly that was the word which best described Clare
              Kendry, if any single word could describe her. Sometimes she was
              hard and apparently without feeling at all; sometimes she was
              affectionate and rashly impulsive. And there was about her an
              amazing soft malice, hidden well away until provoked. Then she was
              capable of scratching, and very effectively too. Or, driven to
              anger, she would fight with a ferocity and impetuousness that
              disregarded or forgot any danger; superior strength, numbers, or
              other unfavourable circumstances.
            </p>
            <p className="text-lg">
              Irene brought her thoughts back to the present, to the letter from
              Clare Kendry that she still held unopened in her hand. With a
              little feeling of apprehension, she very slowly cut the envelope,
              drew out the folded sheets, spread them, and began to read.
            </p>
            <p className="text-lg">
              It was, she saw at once, what she had expected since learning from
              the postmark that Clare was in the city. An extravagantly phrased
              wish to see her again. Well, she needn't and wouldn't, Irene told
              herself, accede to that.
            </p>
            <p className="text-lg">
              She ran through the letter, puzzling out, as best she could, the
              carelessly formed words or making instinctive guesses at them.
            </p>
            <p className="text-lg">
              "... For I am lonely, so lonely... cannot help longing to be with
              you again, as I have never longed for anything before; and I have
              wanted many things in my life.... You can't know how in this pale
              life of mine I am all the time seeing the bright pictures of that
              other that I once thought I was glad to be free of.... It's like
              an ache, a pain that never ceases...."
            </p>
            <p className="text-lg">
              "That time in Chicago." The words stood out from among the many
              paragraphs of other words, bringing with them a clear, sharp
              remembrance, in which even now, after two years, humiliation,
              resentment, and rage were mingled.
            </p>
          </article>
        </section>
        {/*PART ONE: ENCOUNTER-Two */}
        <section id="encounter-two" className="space-y-8">
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg">
              <strong>PART ONE: ENCOUNTER</strong>
            </p>
            <p>
              <strong>Two</strong>
            </p>
            <p className="text-lg">
              This is what Irene Redfield remembered. Chicago. August. A
              brilliant day, hot, with a brutal staring sun pouring down rays
              that were like molten rain. A day on which the very outlines of
              the buildings shuddered as if in protest at the heat. Quivering
              lines sprang up from baked pavements and wriggled along the
              shining car-tracks. The automobiles parked at the kerbs were a
              dancing blaze, and the glass of the shop-windows threw out a
              blinding radiance. Sharp particles of dust rose from the burning
              sidewalks, stinging the seared or dripping skins of wilting
              pedestrians. What small breeze there was seemed like the breath of
              a flame fanned by slow bellows.
            </p>
            <p className="text-lg">
              It was on that day of all others that Irene set out to shop for
              the things which she had promised to take home from Chicago to her
              two small sons, Brian junior and Theodore. Characteristically, she
              had put it off until only a few crowded days remained of her long
              visit. And only this sweltering one was free of engagements till
              the evening. Without too much trouble she had got the mechanical
              aeroplane for Junior. But the drawing-book, for which Ted had so
              gravely and insistently given her precise directions, had sent her
              in and out of five shops without success.
            </p>
            <p className="text-lg">
              It was while she was on her way to a sixth place that right before
              her smarting eyes a man toppled over and became an inert crumpled
              heap on the scorching cement. About the lifeless figure a little
              crowd gathered. Was the man dead, or only faint? someone asked
              her. But Irene didn't know and didn't try to discover. She edged
              her way out of the increasing crowd, feeling disagreeably damp and
              sticky and soiled from contact with so many sweating bodies.
            </p>
            <p className="text-lg">
              For a moment she stood fanning herself and dabbing at her moist
              face with an inadequate scrap of handkerchief. Suddenly she was
              aware that the whole street had a wobbly look, and realized that
              she was about to faint. With a quick perception of the need for
              immediate safety, she lifted a wavering hand in the direction of a
              cab parked directly in front of her. The perspiring driver jumped
              out and guided her to his car. He helped, almost lifted her in.
              She sank down on the hot leather seat.
            </p>
            <p className="text-lg">
              For a minute her thoughts were nebulous. They cleared. "I guess,"
              she told her Samaritan, "it's tea I need. On a roof somewhere."
              "The Drayton, ma'am?" he suggested. "They do say as how it's
              always a breeze up there." "Thank you. I think the Drayton'll do
              nicely," she told him. There was that little grating sound of the
              clutch being slipped in as the man put the car in gear and slid
              deftly out into the boiling traffic. Reviving under the warm
              breeze stirred up by the moving cab, Irene made some small
              attempts to repair the damage that the heat and crowds had done to
              her appearance.
            </p>
            <p className="text-lg">
              All too soon the rattling vehicle shot towards the sidewalk and
              stood still. The driver sprang out and opened the door before the
              hotel's decorated attendant could reach it. She got out, and
              thanking him smilingly as well as in a more substantial manner for
              his kind helpfulness and understanding, went in through the
              Drayton's wide doors. Stepping out of the elevator that had
              brought her to the roof, she was led to a table just in front of a
              long window whose gently moving curtains suggested a cool breeze.
              It was, she thought, like being wafted upward on a magic carpet to
              another world, pleasant, quiet, and strangely remote from the
              sizzling one that she had left below.
            </p>
            <p className="text-lg">
              The tea, when it came, was all that she had desired and expected.
              In fact, so much was it what she had desired and expected that
              after the first deep cooling drink she was able to forget it, only
              now and then sipping, a little absently, from the tall green
              glass, while she surveyed the room about her or looked out over
              some lower buildings at the bright unstirred blue of the lake
              reaching away to an undetected horizon.
            </p>
            <p className="text-lg">
              She had been gazing down for some time at the specks of cars and
              people creeping about in streets, and thinking how silly they
              looked, when on taking up her glass she was surprised to find it
              empty at last. She asked for more tea and while she waited, began
              to recall the happenings of the day and to wonder what she was to
              do about Ted and his book. Why was it that almost invariably he
              wanted something that was difficult or impossible to get? Like his
              father. For ever wanting something that he couldn't have.
            </p>
            <p className="text-lg">
              Presently there were voices, a man's booming one and a woman's
              slightly husky. A waiter passed her, followed by a sweetly scented
              woman in a fluttering dress of green chiffon whose mingled pattern
              of narcissuses, jonquils, and hyacinths was a reminder of
              pleasantly chill spring days. Behind her there was a man, very red
              in the face, who was mopping his neck and forehead with a big
              crumpled handkerchief. "Oh dear!" Irene groaned, rasped by
              annoyance, for after a little discussion and commotion they had
              stopped at the very next table. She had been alone there at the
              window and it had been so satisfyingly quiet. Now, of course, they
              would chatter.
            </p>
            <p className="text-lg">
              But no. Only the woman sat down. The man remained standing,
              abstractedly pinching the knot of his bright blue tie. Across the
              small space that separated the two tables his voice carried
              clearly. "See you later, then," he declared, looking down at the
              woman. There was pleasure in his tones and a smile on his face.
              His companion's lips parted in some answer, but her words were
              blurred by the little intervening distance and the medley of
              noises floating up from the streets below. They didn't reach
              Irene. But she noted the peculiar caressing smile that accompanied
              them. The man said: "Well, I suppose I'd better," and smiled
              again, and said good-bye, and left.
            </p>
            <p className="text-lg">
              An attractive-looking woman, was Irene's opinion, with those dark,
              almost black, eyes and that wide mouth like a scarlet flower
              against the ivory of her skin. Nice clothes too, just right for
              the weather, thin and cool without being mussy, as summer things
              were so apt to be. A waiter was taking her order. Irene saw her
              smile up at him as she murmured something—thanks, maybe. It was an
              odd sort of smile. Irene couldn't quite define it, but she was
              sure that she would have classed it, coming from another woman, as
              being just a shade too provocative for a waiter. About this one,
              however, there was something that made her hesitate to name it
              that. A certain impression of assurance, perhaps.
            </p>
            <p className="text-lg">
              The waiter came back with the order. Irene watched her spread out
              her napkin, saw the silver spoon in the white hand slit the dull
              gold of the melon. Then, conscious that she had been staring, she
              looked quickly away. Her mind returned to her own affairs. She had
              settled, definitely, the problem of the proper one of two frocks
              for the bridge party that night, in rooms whose atmosphere would
              be so thick and hot that every breath would be like breathing
              soup. The dress decided, her thoughts had gone back to the snag of
              Ted's book, her unseeing eyes far away on the lake, when by some
              sixth sense she was acutely aware that someone was watching her.
            </p>
            <p className="text-lg">
              Very slowly she looked around, and into the dark eyes of the woman
              in the green frock at the next table. But she evidently failed to
              realize that such intense interest as she was showing might be
              embarrassing, and continued to stare. Her demeanour was that of
              one who with utmost singleness of mind and purpose was determined
              to impress firmly and accurately each detail of Irene's features
              upon her memory for all time, nor showed the slightest trace of
              disconcertment at having been detected in her steady scrutiny.
              Instead, it was Irene who was put out. Feeling her colour heighten
              under the continued inspection, she slid her eyes down. What, she
              wondered, could be the reason for such persistent attention? Had
              she, in her haste in the taxi, put her hat on backwards? Guardedly
              she felt at it. No. Perhaps there was a streak of powder somewhere
              on her face. She made a quick pass over it with her handkerchief.
              Something wrong with her dress? She shot a glance over it.
              Perfectly all right. What was it?
            </p>
            <p className="text-lg">
              Again she looked up, and for a moment her brown eyes politely
              returned the stare of the other's black ones, which never for an
              instant fell or wavered. Irene made a little mental shrug. Oh
              well, let her look! She tried to treat the woman and her watching
              with indifference, but she couldn't. All her efforts to ignore
              her, it, were futile. She stole another glance. Still looking.
              What strange languorous eyes she had! And gradually there rose in
              Irene a small inner disturbance, odious and hatefully familiar.
              She laughed softly, but her eyes flashed.
            </p>
            <p className="text-lg">
              Did that woman, could that woman, somehow know that here before
              her very eyes on the roof of the Drayton sat a Negro? Absurd!
              Impossible! White people were so stupid about such things for all
              that they usually asserted that they were able to tell; and by the
              most ridiculous means, finger-nails, palms of hands, shapes of
              ears, teeth, and other equally silly rot. They always took her for
              an Italian, a Spaniard, a Mexican, or a gipsy. Never, when she was
              alone, had they even remotely seemed to suspect that she was a
              Negro. No, the woman sitting there staring at her couldn't
              possibly know.
            </p>
            <p className="text-lg">
              Nevertheless, Irene felt, in turn, anger, scorn, and fear slide
              over her. It wasn't that she was ashamed of being a Negro, or even
              of having it declared. It was the idea of being ejected from any
              place, even in the polite and tactful way in which the Drayton
              would probably do it, that disturbed her. But she looked, boldly
              this time, back into the eyes still frankly intent upon her. They
              did not seem to her hostile or resentful. Rather, Irene had the
              feeling that they were ready to smile if she would. Nonsense, of
              course. The feeling passed, and she turned away with the firm
              intention of keeping her gaze on the lake, the roofs of the
              buildings across the way, the sky, anywhere but on that annoying
              woman. Almost immediately, however, her eyes were back again. In
              the midst of her fog of uneasiness she had been seized by a desire
              to outstare the rude observer. Suppose the woman did know or
              suspect her race. She couldn't prove it.
            </p>
            <p className="text-lg">
              Suddenly her small fright increased. Her neighbour had risen and
              was coming towards her. What was going to happen now? "Pardon me,"
              the woman said pleasantly, "but I think I know you." Her slightly
              husky voice held a dubious note. Looking up at her, Irene's
              suspicions and fears vanished. There was no mistaking the
              friendliness of that smile or resisting its charm. Instantly she
              surrendered to it and smiled too, as she said: "I'm afraid you're
              mistaken." "Why, of course, I know you!" the other exclaimed.
              "Don't tell me you're not Irene Westover. Or do they still call
              you 'Rene?" In the brief second before her answer, Irene tried
              vainly to recall where and when this woman could have known her.
              There, in Chicago. And before her marriage. That much was plain.
              High school? College? Y. W. C. A. committees? High school, most
              likely. What white girls had she known well enough to have been
              familiarly addressed as 'Rene by them? The woman before her didn't
              fit her memory of any of them. Who was she? "Yes, I'm Irene
              Westover. And though nobody calls me 'Rene any more, it's good to
              hear the name again. And you—" She hesitated, ashamed that she
              could not remember, and hoping that the sentence would be finished
              for her. "Don't you know me? Not really, 'Rene?" "I'm sorry, but
              just at the minute I can't seem to place you." Irene studied the
              lovely creature standing beside her for some clue to her identity.
              Who could she be? —Where and when had they met? And through her
              perplexity there came the thought that the trick which her memory
              had played her was for some reason more gratifying than
              disappointing to her old acquaintance, that she didn't mind not
              being recognized. And, too, Irene felt that she was just about to
              remember her. For about the woman was some quality, an intangible
              something, too vague to define, too remote to seize, but which
              was, to Irene Redfield, very familiar. And that voice. Surely
              she'd heard those husky tones somewhere before. Perhaps before
              time, contact, or something had been at them, making them into a
              voice remotely suggesting England. Ah! Could it have been in
              Europe that they had met? 'Rene. No. "Perhaps," Irene began,
              "you—" The woman laughed, a lovely laugh, a small sequence of
              notes that was like a trill and also like the ringing of a
              delicate bell fashioned of a precious metal, a tinkling. Irene
              drew a quick sharp breath. "Clare!" she exclaimed, "not really
              Clare Kendry?" So great was her astonishment that she had started
              to rise. "No, no, don't get up," Clare Kendry commanded, and sat
              down herself. "You've simply got to stay and talk. We'll have
              something more. Tea? Fancy meeting you here! It's simply too, too
              lucky!" "It's awfully surprising," Irene told her, and, seeing the
              change in Clare's smile, knew that she had revealed a corner of
              her own thoughts. But she only said: "I'd never in this world have
              known you if you hadn't laughed. You are changed, you know. And
              yet, in a way, you're just the same." "Perhaps," Clare replied.
              "Oh, just a second." She gave her attention to the waiter at her
              side. "M-mm, let's see. Two teas. And bring some cigarettes. Y-es,
              they'll be all right. Thanks." Again that odd upward smile. Now,
              Irene was sure that it was too provocative for a waiter.
            </p>
            <p className="text-lg">
              While Clare had been giving the order, Irene made a rapid mental
              calculation. It must be, she figured, all of twelve years since
              she, or anybody that she knew, had laid eyes on Clare Kendry.
              After her father's death she'd gone to live with some relatives,
              aunts or cousins two or three times removed, over on the west
              side: relatives that nobody had known the Kendry's possessed until
              they had turned up at the funeral and taken Clare away with them.
              For about a year or more afterwards she would appear occasionally
              among her old friends and acquaintances on the south side for
              short little visits that were, they understood, always stolen from
              the endless domestic tasks in her new home. With each succeeding
              one she was taller, shabbier, and more belligerently sensitive.
              And each time the look on her face was more resentful and
              brooding. "I'm worried about Clare, she seems so unhappy," Irene
              remembered her mother saying. The visits dwindled, becoming
              shorter, fewer, and further apart until at last they ceased.
              Irene's father, who had been fond of Bob Kendry, made a special
              trip over to the west side about two months after the last time
              Clare had been to see them and returned with the bare information
              that he had seen the relatives and that Clare had disappeared.
              What else he had confided to her mother, in the privacy of their
              own room, Irene didn't know. But she had had something more than a
              vague suspicion of its nature. For there had been rumours. Rumours
              that were, to girls of eighteen and nineteen years, interesting
              and exciting. There was the one about Clare Kendry's having been
              seen at the dinner hour in a fashionable hotel in company with
              another woman and two men, all of them white. And dressed! And
              there was another which told of her driving in Lincoln Park with a
              man, unmistakably white, and evidently rich. Packard limousine,
              chauffeur in livery, and all that. There had been others whose
              context Irene could no longer recollect, but all pointing in the
              same glamorous direction. And she could remember quite vividly
              how, when they used to repeat and discuss these tantalizing
              stories about Clare, the girls would always look knowingly at one
              another and then, with little excited giggles, drag away their
              eager shining eyes and say with lurking undertones of regret or
              disbelief some such thing as: "Oh, well, maybe she's got a job or
              something," or "After all, it mayn't have been Clare," or "You
              can't believe all you hear." And always some girl, more matter-of
              fact or more frankly malicious than the rest, would declare: "Of
              course it was Clare! Ruth said it was and so did Frank, and they
              certainly know her when they see her as well as we do." And
              someone else would say: "Yes, you can bet it was Clare all right."
              And then they would all join in asserting that there could be no
              mistake about it's having been Clare, and that such circumstances
              could mean only one thing. Working indeed! People didn't take
              their servants to the Shelby for dinner. Certainly not all dressed
              up like that. There would follow insincere regrets, and somebody
              would say: "Poor girl, I suppose it's true enough, but what can
              you expect. Look at her father. And her mother, they say, would
              have run away if she hadn't died. Besides, Clare always had
              a–having way with her." Precisely that! The words came to Irene as
              she sat there on the Drayton roof, facing Clare Kendry. "A having
              way." Well, Irene acknowledged, judging from her appearance and
              manner, Clare seemed certainly to have succeeded in having a few
              of the things that she wanted.
            </p>
            <p className="text-lg">
              It was, Irene repeated, after the interval of the waiter, a great
              surprise and a very pleasant one to see Clare again after all
              those years, twelve at least. "Why, Clare, you're the last person
              in the world I'd have expected to run into. I guess that's why I
              didn't know you." Clare answered gravely: "Yes. It is twelve
              years. But I'm not surprised to see you, 'Rene. That is, not so
              very. In fact, ever since I've been here, I've more or less hoped
              that I should, or someone. Preferably you, though. Still, I
              imagine that's because I've thought of you often and often, while
              you—I'll wager you've never given me a thought." It was true, of
              course. After the first speculations and indictments, Clare had
              gone completely from Irene's thoughts. And from the thoughts of
              others too—if their conversation was any indication of their
              thoughts. Besides, Clare had never been exactly one of the group,
              just as she'd never been merely the janitor's daughter, but the
              daughter of Mr. Bob Kendry, who, it was true, was a janitor, but
              who also, it seemed, had been in college with some of their
              fathers. Just how or why he happened to be a janitor, and a very
              inefficient one at that, they none of them quite knew. One of
              Irene's brothers, who had put the question to their father, had
              been told: "That's something that doesn't concern you," and given
              him the advice to be careful not to end in the same manner as
              "poor Bob." No, Irene hadn't thought of Clare Kendry. Her own life
              had been too crowded. So, she supposed, had the lives of other
              people. She defended her-their-forgetfulness. "You know how it is.
              Everybody's so busy. People leave, drop out, maybe for a little
              while there's talk about them, or questions; then, gradually
              they're forgotten." "Yes, that's natural," Clare agreed. And what,
              she inquired, had they said of her for that little while at the
              beginning before they'd forgotten her altogether? Irene looked
              away. She felt the telltale colour rising in her cheeks. "You
              can't," she evaded, "expect me to remember trifles like that over
              twelve years of marriages, births, deaths, and the war." There
              followed that trill of notes that was Clare Kendry's laugh, small
              and clear and the very essence of mockery. "Oh, 'Rene!" she cried,
              "of course you remember! But I won't make you tell me, because I
              know just as well as if I'd been there and heard every unkind
              word. Oh, I know, I know. Frank Danton saw me in the Shelby one
              night. Don't tell me he didn't broadcast that, and with
              embroidery. Others may have seen me at other times. I don't know.
              But once I met Margaret Hammer in Marshall Field's. I'd have
              spoken, was on the very point of doing it, but she cut me dead. My
              dear 'Rene, I assure you that from the way she looked through me,
              even I was uncertain whether I was actually there in the flesh or
              not. I remember it clearly, too clearly. It was that very thing
              which, in a way, finally decided me not to go out and see you one
              last time before I went away to stay. Somehow, good as all of you,
              the whole family, had always been to the poor forlorn child that
              was me, I felt I shouldn't be able to bear that. I mean if any of
              you, your mother or the boys or- Oh, well, I just felt I'd rather
              not know it if you did. And so I stayed away. Silly, I suppose.
              Sometimes I've been sorry I didn't go." Irene wondered if it was
              tears that made Clare's eyes so luminous. "And now 'Rene, I want
              to hear all about you and everybody and everything. You're
              married, I s'pose?" Irene nodded. "Yes," Clare said knowingly,
              "you would be. Tell me about it." And so for an hour or more they
              had sat there smoking and drinking tea and filling in the gap of
              twelve years with talk. That is, Irene did. She told Clare about
              her marriage and removal to New York, about her husband, and about
              her two sons, who were having their first experience of being
              separated from their parents at a summer camp, about her mother's
              death, about the marriages of her two brothers. She told of the
              marriages, births and deaths in other families that Clare had
              known, opening up, for her, new vistas on the lives of old friends
              and acquaintances. Clare drank it all in, these things which for
              so long she had wanted to know and hadn't been able to learn. She
              sat motionless, her bright lips slightly parted, her whole face
              lit by the radiance of her happy eyes. Now and then she put a
              question, but for the most part she was silent.
            </p>
            <p className="text-lg">
              Somewhere outside, a clock struck. Brought back to the present,
              Irene looked down at her watch and exclaimed: "Oh, I must go,
              Clare!" A moment passed during which she was the prey of
              uneasiness. It had suddenly occurred to her that she hadn't asked
              Clare anything about her own life and that she had a very definite
              unwillingness to do so. And she was quite well aware of the reason
              for that reluctance. But, she asked herself, wouldn't it, all
              things considered, be the kindest thing not to ask? If things with
              Clare were as she-as they all-had suspected, wouldn't it be more
              tactful to seem to forget to inquire how she had spent those
              twelve years? If? It was that "if" which bothered her. It might
              be, it might just be, in spite of all gossip and even appearances
              to the contrary, that there was nothing, had been nothing, that
              couldn't be simply and innocently explained. Appearances, she knew
              now, had a way sometimes of not fitting facts, and if Clare
              hadn'tWell, if they had all been wrong, then certainly she ought
              to express some interest in what had happened to her. It would
              seem queer and rude if she didn't. But how was she to know? There
              was, she at last decided, no way; so she merely said again. "I
              must go, Clare." "Please, not so soon, 'Rene," Clare begged, not
              moving. Irene thought: "She's really almost too good-looking. It's
              hardly any wonder that she—" “And now, 'Rene dear, that I've found
              you, I mean to see lots and lots of you. We're here for a month at
              least. Jack, that's my husband, is here on business. Poor dear! in
              this heat. Isn't it beastly? Come to dinner with us tonight, won't
              you?" And she gave Irene a curious little sidelong glance and a
              sly, ironical smile peeped out on her full red lips, as if she had
              been in the secret of the other's thoughts and was mocking her.
              Irene was conscious of a sharp intake of breath, but whether it
              was relief or chagrin that she felt, she herself could not have
              told. She said hastily: "I'm afraid I can't, Clare. I'm filled up.
              Dinner and bridge. I'm so sorry." "Come tomorrow instead, to tea,"
              Clare insisted. "Then you'll see Margery—she's just ten-and Jack
              too, maybe, if he hasn't got an appointment or something." From
              Irene came an uneasy little laugh. She had an engagement for
              tomorrow also and she was afraid that Clare would not believe it.
              Suddenly, now, that possibility disturbed her. Therefore it was
              with a half-vexed feeling at the sense of undeserved guilt that
              had come upon her that she explained that it wouldn't be possible
              because she wouldn't be free for tea, or for luncheon or dinner
              either. "And the next day's Friday when I'll be going away for the
              week-end, Idlewild, you know. It's quite the thing now." And then
              she had an inspiration. "Clare!" she exclaimed, "why don't you
              come up with me? Our place is probably full up—Jim's wife has a
              way of collecting mobs of the most impossible people-but we can
              always manage to find room for one more. And you'll see absolutely
              everybody." In the very moment of giving the invitation she
              regretted it. What a foolish, what an idiotic impulse to have
              given way to! She groaned inwardly as she thought of the endless
              explanations in which it would involve her, of the curiosity, and
              the talk, and the lifted eyebrows. It wasn't she assured herself,
              that she was a snob, that she cared greatly for the petty
              restrictions and distinctions with which what called itself Negro
              society chose to hedge itself about; but that she had a natural
              and deeply rooted aversion to the kind of frontpage notoriety that
              Clare Kendry's presence in Idlewild, as her guest, would expose
              her to. And here she was, perversely and against all reason,
              inviting her. But Clare shook her head. "Really, I'd love to,
              'Rene," she said, a little mournfully. "There's nothing I'd like
              better. But I couldn't. I mustn't, you see. It wouldn't do at all.
              I'm sure you understand. I'm simply crazy to go, but I can't." The
              dark eyes glistened and there was a suspicion of a quaver in the
              husky voice. "And believe me, 'Rene, I do thank you for asking me.
              Don't think I've entirely forgotten just what it would mean for
              you if I went. That is, if you still care about such things." All
              indication of tears had gone from her eyes and voice, and Irene
              Redfield, searching her face, had an offended feeling that behind
              what was now only an ivory mask lurked a scornful amusement. She
              looked away, at the wall far beyond Clare. Well, she deserved it,
              for, as she acknowledged to herself, she was relieved. And for the
              very reason at which Clare had hinted. The fact that Clare had
              guessed her perturbation did not, however, in any degree lessen
              that relief. She was annoyed at having been detected in what might
              seem to be an insincerity; but that was all.
            </p>
            <p className="text-lg">
              The waiter came with Clare's change. Irene reminded herself that
              she ought immediately to go. But she didn't move. The truth was,
              she was curious. There were things that she wanted to ask Clare
              Kendry. She wished to find out about this hazardous business of
              "passing," this breaking away from all that was familiar and
              friendly to take one's chance in another environment, not entirely
              strange, perhaps, but certainly not entirely friendly. What, for
              example, one did about background, how one accounted for oneself.
              And how one felt when one came into contact with other Negroes.
              But she couldn't. She was unable to think of a single question
              that in its context or its phrasing was not too frankly curious,
              if not actually impertinent. As if aware of her desire and her
              hesitation, Clare remarked, thoughtfully: "You know, 'Rene, I've
              often wondered why more coloured girls, girls like you and
              Margaret Hammer and Esther Dawson and-oh, lots of others-never
              'passed' over. It's such a frightfully easy thing to do. If one's
              the type, all that's needed is a little nerve." "What about
              background? Family, I mean. Surely you can't just drop down on
              people from nowhere and expect them to receive you with open arms,
              can you?" "Almost," Clare asserted. "You'd be surprised, 'Rene,
              how much easier that is with white people than with us. Maybe
              because there are so many more of them, or maybe because they are
              secure and so don't have to bother. I've never quite decided."
              Irene was inclined to be incredulous. "You mean that you didn't
              have to explain where you came from? It seems impossible." Clare
              cast a glance of repressed amusement across the table at her. "As
              a matter of fact, I didn't. Though I suppose under any other
              circumstances I might have had to provide some plausible tale to
              account for myself. I've a good imagination, so I'm sure I could
              have done it quite creditably, and credibly. But it wasn't
              necessary. There were my aunts, you see, respectable and authentic
              enough for anything or anybody." "I see. They were 'passing' too."
              "No. They weren't. They were white." "Oh!" And in the next instant
              it came back to Irene that she had heard this mentioned before; by
              her father, or, more likely, her mother. They were Bob Kendry's
              aunts. He had been a son of their brother's, on the left hand. A
              wild oat. "They were nice old ladies," Clare explained, "very
              religious and as poor as church mice. That adored brother of
              theirs, my grandfather, got through every penny they had after
              he'd finished his own little bit." Clare paused in her narrative
              to light another cigarette. Her smile, her expression, Irene
              noticed, was faintly resentful. "Being good Christians," she
              continued, "when dad came to his tipsy end, they did their duty
              and gave me a home of sorts. I was, it was true, expected to earn
              my keep by doing all the housework and most of the washing. But do
              you realize, 'Rene, that if it hadn't been for them, I shouldn't
              have had a home in the world?" Irene's nod and little murmur were
              comprehensive, understanding. Clare made a small mischievous
              grimace and proceeded. "Besides, to their notion, hard labour was
              good for me. I had Negro blood and they belonged to the generation
              that had written and read long articles headed: 'Will the Blacks
              Work?' Too, they weren't quite sure that the good God hadn't
              intended the sons and daughters of Ham to sweat because he had
              poked fun at old man Noah once when he had taken a drop too much.
              I remember the aunts telling me that that old drunkard had cursed
              Ham and his sons for all time." Irene laughed. But Clare remained
              quite serious. "It was more than a joke, I assure you, 'Rene. It
              was a hard life for a girl of sixteen. Still, I had a roof over my
              head, and food, and clothes-such as they were. And there were the
              Scriptures, and talks on morals and thrift and industry and the
              loving-kindness of the good Lord." "Have you ever stopped to
              think, Clare," Irene demanded, "how much unhappiness and downright
              cruelty are laid to the loving-kindness of the Lord? And always by
              His most ardent followers, it seems." "Have I?" Clare exclaimed.
              "It, they, made me what I am today. For, of course, I was
              determined to get away, to be a person and not a charity or a
              problem, or even a daughter of the indiscreet Ham. Then, too, I
              wanted things. I knew I wasn't bad-looking and that I could
              'pass.' You can't know, 'Rene, how, when I used to go over to the
              south side, I used almost to hate all of you. You had all the
              things I wanted and never had had. It made me all the more
              determined to get them, and others. Do you, can you understand
              what I felt?" She looked up with a pointed and appealing effect,
              and, evidently finding the sympathetic expression on Irene's face
              sufficient answer, went on. "The aunts were queer. For all their
              Bibles and praying and ranting about honesty, they didn't want
              anyone to know that their darling brother had seduced-ruined, they
              called it-a Negro girl. They could excuse the ruin, but they
              couldn't forgive the tar-brush. They forbade me to mention Negroes
              to the neighbours, or even to mention the south side. You may be
              sure that I didn't. I'll bet they were good and sorry afterwards."
              She laughed and the ringing bells in her laugh had a hard metallic
              sound. "When the chance to get away came, that omission was of
              great value to me. When Jack, a schoolboy acquaintance of some
              people in the neighbourhood, turned up from South America with
              untold gold, there was no one to tell him that I was coloured, and
              many to tell him about the severity and the religiousness of Aunt
              Grace and Aunt Edna. You can guess the rest. After he came, I
              stopped slipping off to the south side and slipped off to meet him
              instead. I couldn't manage both. In the end I had no great
              difficulty in convincing him that it was useless to talk marriage
              to the aunts. So on the day that I was eighteen, we went off and
              were married. So that's that. Nothing could have been easier."
              "Yes, I do see that for you it was easy enough. By the way! I
              wonder why they didn't tell father that you were married. He went
              over to find out about you when you stopped coming over to see us.
              I'm sure they didn't tell him. Not that you were married." Clare
              Kendry's eyes were bright with tears that didn't fall. "Oh, how
              lovely! To have cared enough about me to do that. The dear sweet
              man! Well, they couldn't tell him because they didn't know it. I
              took care of that, for I couldn't be sure that those consciences
              of theirs wouldn't begin to work on them afterwards and make them
              let the cat out of the bag. The old things probably thought I was
              living in sin, wherever I was. And it would be about what they
              expected." An amused smile lit the lovely face for the smallest
              fraction of a second. After a little silence she said soberly:
              "But I'm sorry if they told your father so. That was something I
              hadn't counted on." "I'm not sure that they did," Irene told her.
              "He didn't say so, anyway." "He wouldn't, 'Rene dear. Not your
              father." "Thanks. I'm sure he wouldn't." "But you've never
              answered my question. Tell me, honestly, haven't you ever thought
              of 'passing'?" Irene answered promptly: "No. Why should I?" And so
              disdainful was her voice and manner that Clare's face flushed and
              her eyes glinted. Irene hastened to add: "You see, Clare, I've
              everything I want. Except, perhaps, a little more money." At that
              Clare laughed, her spark of anger vanished as quickly as it had
              appeared. "Of course," she declared, "that's what everybody wants,
              just a little more money, even the people who have it. And I must
              say I don't blame them. Money's awfully nice to have. In fact, all
              things considered, I think, 'Rene, that it's even worth the
              price." Irene could only shrug her shoulders. Her reason partly
              agreed, her instinct wholly rebelled. And she could not say why.
              And though conscious that if she didn't hurry away, she was going
              to be late to dinner, she still lingered. It was as if the woman
              sitting on the other side of the table, a girl that she had known,
              who had done this rather dangerous and, to Irene Redfield,
              abhorrent thing successfully and had announced herself well
              satisfied, had for her a fascination, strange and compelling.{" "}
            </p>
            <p className="text-lg">
              Clare Kendry was still leaning back in the tall chair, her sloping
              shoulders against the carved top. She sat with an air of
              indifferent assurance, as if arranged for, desired. About her
              clung that dim suggestion of polite insolence with which a few
              women are born and which some acquire with the coming of riches or
              importance.
            </p>
            <p className="text-lg">
              Clare, it gave Irene a little prick of satisfaction to recall,
              hadn't got that by passing herself off as white. She herself had
              always had it.
            </p>
            <p className="text-lg">
              Just as she'd always had that pale gold hair, which, unsheared
              still, was drawn loosely back from a broad brow, partly hidden by
              the small close hat. Her lips, painted a brilliant geranium-red,
              were sweet and sensitive and a little obstinate. A tempting mouth.
              The face across the forehead and cheeks was a trifle too wide, but
              the ivory skin had a peculiar soft lustre. And the eyes were
              magnificent! dark, sometimes absolutely black, always luminous,
              and set in long, black lashes. Arresting eyes, slow and mesmeric,
              and with, for all their warmth, something withdrawn and secret
              about them.
            </p>
            <p className="text-lg">
              Ah! Surely! They were Negro eyes! mysterious and concealing. And
              set in that ivory face under that bright hair, there was about
              them something exotic.
            </p>
            <p className="text-lg">
              Yes, Clare Kendry's loveliness was absolute, beyond challenge,
              thanks to those eyes which her grandmother and later her mother
              and father had given her.
            </p>
            <p className="text-lg">
              Into those eyes there came a smile and over Irene the sense of
              being petted and caressed. She smiled back.
            </p>
            <p className="text-lg">
              "Maybe," Clare suggested, "you can come Monday, if you're back.
              Or, if you're not, then Tuesday."
            </p>
            <p className="text-lg">
              With a small regretful sigh, Irene informed Clare that she was
              afraid she wouldn't be back by Monday and that she was sure she
              had dozens of things for Tuesday, and that she was leaving
              Wednesday. It might be, however, that she could get out of
              something Tuesday.
            </p>
            <p className="text-lg">
              "Oh, do try. Do put somebody else off. The others can see you any
              time, while I--Why, I may never see you again! Think of that,
              'Rene! You'll have to come. You'll simply have to! I'll never
              forgive you if you don't."
            </p>
            <p className="text-lg">
              At that moment it seemed a dreadful thing to think of never seeing
              Clare Kendry again. Standing there under the appeal, the caress,
              of her eyes, Irene had the desire, the hope, that this parting
              wouldn't be the last.
            </p>
            <p className="text-lg">
              At that moment it seemed a dreadful thing to think of never seeing
              Clare Kendry again. Standing there under the appeal, the caress,
              of her eyes, Irene had the desire, the hope, that this parting
              wouldn't be the last.
            </p>
            <p className="text-lg">"I'll try, Clare," she promised gently.</p>
            <p className="text-lg">"I'll call you—or will you call me?"</p>
            <p className="text-lg">
              {" "}
              "I think, perhaps, I'd better call you. Your father's in the book,
              I know, and the address is the same. Sixty-four eighteen. Some
              memory, what? Now remember, I'm going to expect you. You've got to
              be able to come."
            </p>
            <p className="text-lg"> Again that peculiar mellowing smile.</p>
            <p className="text-lg"> "I'll do my best, Clare."</p>
            <p className="text-lg">
              {" "}
              Irene gathered up her gloves and bag. They stood up. She put out
              her hand. Clare took and held it.
            </p>
            <p className="text-lg">
              {" "}
              "It has been nice seeing you again, Clare. How pleased and glad
              father'll be to hear about you!"
            </p>
            <p className="text-lg">
              {" "}
              "Until Tuesday, then," Clare Kendry replied. "I'll spend every
              minute of the time from now on looking forward to seeing you
              again. Good-bye, 'Rene dear. My love to your father, and this kiss
              for him."
            </p>
            <p className="text-lg">
              {" "}
              The sun had gone from overhead, but the streets were still like
              fiery furnaces. The languid breeze was still hot. And the
              scurrying people looked even more wilted than before Irene had
              fled from their contact.
            </p>
            <p className="text-lg">
              Crossing the avenue in the heat, far from the coolness of the
              Drayton's roof, away from the seduction of Clare Kendry's smile,
              she was aware of a sense of irritation with herself because she
              had been pleased and a little flattered at the other's obvious
              gladness at their meeting.{" "}
            </p>
            <p className="text-lg">
              With her perspiring progress homeward this irritation grew, and
              she began to wonder just what had possessed her to make her
              promise to find time, in the crowded days that remained of her
              visit, to spend another afternoon with a woman whose life had so
              definitely and deliberately diverged from hers; and whom, as had
              been pointed out, she might never see again.{" "}
            </p>
            <p className="text-lg">
              Why in the world had she made such a promise?
            </p>
            <p className="text-lg">
              As she went up the steps to her father's house, thinking with what
              interest and amazement he would listen to her story of the
              afternoon's encounter, it came to her that Clare had omitted to
              mention her marriage name. She had referred to her husband as
              Jack. That was all. Had that, Irene asked herself, been
              intentional?
            </p>
            <p className="text-lg">
              Clare had only to pick up the telephone to communicate with her,
              or to drop her a card, or to jump into a taxi. But she couldn't
              reach Clare in any way. Nor could anyone else to whom she might
              speak of their meeting.
            </p>
            <p className="text-lg">"As if I should!"</p>
            <p className="text-lg">
              Her key turned in the lock. She went in. Her father, it seemed,
              hadn't come in yet.
            </p>
            <p className="text-lg">
              Irene decided that she wouldn't, after all, say anything to him
              about Clare Kendry. She had, she told herself, no inclination to
              speak of a person who held so low an opinion of her loyalty, or
              her discretion. And certainly she had no desire or intention of
              making the slightest effort about Tuesday. Nor any other day for
              that matter.
            </p>
            <p className="text-lg">She was through with Clare Kendry.</p>
          </article>
        </section>
        With her perspiring progress homeward this irritation grew, and she
        began to wonder just what had possessed her to make her promise to find
        time, in the crowded days that remained of her visit, to spend another
        afternoon with a woman whose life had so definitely and deliberately
        diverged from hers; and whom, as had been pointed out, she might never
        see again. Why in the world had she made such a promise? As she went up
        the steps to her father's house, thinking with what interest and
        amazement he would listen to her story of the afternoon's encounter, it
        came to her that Clare had omitted to mention her marriage name. She had
        referred to her husband as Jack. That was all. Had that, Irene asked
        herself, been intentional? Clare had only to pick up the telephone to
        communicate with her, or to drop her a card, or to jump into a taxi. But
        she couldn't reach Clare in any way. Nor could anyone else to whom she
        might speak of their meeting. "As if I should!" Her key turned in the
        lock. She went in. Her father, it seemed, hadn't come in yet. Irene
        decided that she wouldn't, after all, say anything to him about Clare
        Kendry. She had, she told herself, no inclination to speak of a person
        who held so low an opinion of her loyalty, or her discretion. And
        certainly she had no desire or intention of making the slightest effort
        about Tuesday. Nor any other day for that matter. She was through with
        Clare Kendry.
        {/* Article Section */}
        {/* Article Section */}
        {/* Article Section */}
        {/* Article Section */}
        {/* Article Section */}
        {/* Article Section */}
        {/* Article Section */}
        {/* Article Section */}
        {/* Article Section */}
        {/* Article Section */}
        <section id="re-encounter" className="space-y-8">
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg">
              <strong>PART TWO: RE-ENCOUNTER</strong>
            </p>
            <p className="text-lg">
              Such were Irene Redfield's memories as she sat there in her room,
              a flood of October sunlight streaming in upon her, holding that
              second letter of Clare Kendry's.
            </p>
            <p className="text-lg">
              Laying it aside, she regarded with an astonishment that had in it
              a mild degree of amusement the violence of the feelings which it
              stirred in her.
            </p>
            <p className="text-lg">
              It wasn't the great measure of anger that surprised and slightly
              amused her. That, she was certain, was justified and reasonable,
              as was the fact that it could hold, still strong and unabated,
              across the stretch of two years' time entirely removed from any
              sight or sound of John Bellew, or of Clare. That even at this
              remote date the memory of the man's words and manner had power to
              set her hands to trembling and to send the blood pounding against
              her temples did not seem to her extraordinary. But that she should
              retain that dim sense of fear, of panic, was surprising, silly.
            </p>
            <p className="text-lg">
              That Clare should have written, should, even all things
              considered, have expressed a desire to see her again, did not so
              much amaze her. To count as nothing the annoyances, the
              bitterness, or the suffering of others, that was Clare.
            </p>
            <p className="text-lg">
              Well—Irene's shoulders went up—one thing was sure: that she
              needn't, and didn't intend to, lay herself open to any repetition
              of a humiliation as galling and outrageous as that which, for
              Clare Kendry's sake, she had borne "that time in Chicago." Once
              was enough.
            </p>
            <p className="text-lg">
              If, at the time of choosing, Clare hadn't precisely reckoned the
              cost, she had, nevertheless, no right to expect others to help
              make up the reckoning. The trouble with Clare was, not only that
              she wanted to have her cake and eat it too, but that she wanted to
              nibble at the cakes of other folk as well.
            </p>
            <p className="text-lg">
              Irene Redfield found it hard to sympathize with this new
              tenderness, this avowed yearning of Clare's for "my own people."
            </p>
            <p className="text-lg">
              The letter which she just put out of her hand was, to her taste, a
              bit too lavish in its wordiness, a shade too unreserved in the
              manner of its expression. It roused again that old suspicion that
              Clare was acting, not consciously, perhaps–that is, not too
              consciously–but, none the less, acting. Nor was Irene inclined to
              excuse what she termed Clare's downright selfishness.
            </p>
            <p className="text-lg">
              And mingled with her disbelief and resentment was another feeling,
              a question. Why hadn't she spoken that day? Why, in the face of
              Bellew's ignorant hate and aversion, had she concealed her own
              origin? Why had she allowed him to make his assertions and express
              his misconceptions undisputed? Why, simply because of Clare
              Kendry, who had exposed her to such torment, had she failed to
              take up the defence of the race to which she belonged?
            </p>
            <p className="text-lg">
              Irene asked these questions, felt them. They were, however, merely
              rhetorical, as she herself was well aware. She knew their answers,
              every one, and it was the same for them all. The sardony of it!
              She couldn't betray Clare, couldn't even run the risk of appearing
              to defend a people that were being maligned, for fear that that
              defence might in some infinitesimal degree lead the way to final
              discovery of her secret. She had to Clare Kendry a duty. She was
              bound to her by those very ties of race, which, for all her
              repudiation of them, Clare had been unable to completely sever.
            </p>
            <p className="text-lg">
              And it wasn't, as Irene knew, that Clare cared at all about the
              race or what was to become of it. She didn't. Or that she had for
              any of its members great, or even real, affection, though she
              professed undying gratitude for the small kindnesses which the
              Westover family had shown her when she was a child. Irene doubted
              the genuineness of it, seeing herself only as a means to an end
              where Clare was concerned. Nor could it be said that she had even
              the slight artistic or sociological interest in the race that some
              members of other races displayed. She hadn't. No, Clare Kendry
              cared nothing for the race. She only belonged to it.
            </p>
            <p className="text-lg">
              "Not another damned thing!" Irene declared aloud as she drew a
              fragile stocking over a pale beige-coloured foot.
            </p>
            <p className="text-lg">
              "Aha! Swearing again, are you, madam? Caught you in the act that
              time."
            </p>
            <p className="text-lg">
              Brian Redfield had come into the room in that noiseless way which,
              in spite, of the years of their life together, still had the power
              to disconcert her. He stood looking down on her with that amused
              smile of his, which was just the faintest bit supercilious and yet
              was somehow very becoming to him.
            </p>
            <p className="text-lg">
              Hastily Irene pulled on the other stocking and slipped her feet
              into the slippers beside her chair.
            </p>
            <p className="text-lg">
              "And what brought on this particular outburst of profanity? That
              is, if an indulgent but perturbed husband may inquire. The mother
              of sons too! The times, alas, the times!"
            </p>
            <p className="text-lg">
              "I've had this letter," Irene told him. "And I'm sure that
              anybody'll admit it's enough to make a saint swear. The nerve of
              her!"
            </p>
            <p className="text-lg">
              She passed the letter to him, and in the act made a little mental
              frown. For, with a nicety of perception, she saw that she was
              doing it instead of answering his question with words, so that he
              might be occupied while she hurried through her dressing. For she
              was late again, and Brian, she well knew, detested that. Why, oh
              why, couldn't she ever manage to be on time? Brian had been up for
              ages, had made some calls for all she knew, besides having taken
              the boys downtown to school. And she wasn't dressed yet; had only
              begun. Damn Clare! This morning it was her fault.
            </p>
            <p className="text-lg">
              Brian sat down and bent his head over the letter, puckering his
              brows slightly in his effort to make out Clare's scrawl.
            </p>
            <p className="text-lg">
              Irene, who had risen and was standing before the mirror, ran a
              comb through her black hair, then tossed her head with a light
              characteristic gesture, in order to disarrange a little the set
              locks. She touched a powder-puff to her warm olive skin, and then
              put on her frock with a motion so hasty that it was with some
              difficulty properly adjusted. At last she was ready, though she
              didn't immediately say so, but stood, instead, looking with a sort
              of curious detachment at her husband across the room.
            </p>
            <p className="text-lg">
              Brian, she was thinking, was extremely good-looking. Not, of
              course, pretty or effeminate; the slight irregularity of his nose
              saved him from the prettiness, and the rather marked heaviness of
              his chin saved him from the effeminacy. But he was, in a pleasant
              masculine way, rather handsome. And yet, wouldn't he, perhaps,
              have been merely ordinarily good-looking but for the richness, the
              beauty of his skin, which was of an exquisitely fine texture and
              deep copper colour.
            </p>
            <p className="text-lg">
              He looked up and said: "Clare.? That must be the girl you told me
              about meeting the last time you were out home. The one you went to
              tea with?"
            </p>
            <p className="text-lg">
              Irene's answer to that was an inclination of the head.
            </p>
            <p className="text-lg">"I'm ready," she said.</p>
            <p className="text-lg">
              They were going downstairs, Brian deftly, unnecessarily, piloting
              her round the two short curved steps, just before the centre
              landing.
            </p>
            <p className="text-lg">
              "You're not," he asked, "going to see her?"
            </p>
            <p className="text-lg">
              His words, however, were in reality not a question, but, as Irene
              was aware, an admonition.
            </p>
            <p className="text-lg">
              Her front teeth just touched. She spoke through them, and her
              tones held a thin sarcasm. "Brian, darling, I'm really not such an
              idiot that I don't realize that if a man calls me a nigger, it's
              his fault the first time, but mine if he has the opportunity to do
              it again."
            </p>
            <p className="text-lg">
              They went into the dining-room. He drew back her chair and she sat
              down behind the fat-bellied German coffee-pot, which sent out its
              morning fragrance, mingled with the smell of crisp toast and
              savoury bacon, in the distance. With his long, nervous fingers he
              picked up the morning paper from his own chair and sat down.
            </p>
            <p className="text-lg">
              Zulena, a small mahogany-coloured creature, brought in the
              grapefruit.
            </p>
            <p className="text-lg">They took up their spoons.</p>
            <p className="text-lg">
              Out of the silence Brian spoke. Blandly. "My dear, you
              misunderstand me entirely. I simply meant that I hope you're not
              going to let her pester you. She will, you know, if you give her
              half a chance and she's anything at all like your description of
              her. Anyway," he corrected, "the man, her husband, didn't call you
              a nigger. There's a difference, you know."
            </p>
            <p className="text-lg">
              "No, certainly he didn't. Not actually. He couldn't, not very
              well, since he didn't know. But he would have. It amounts to the
              same thing. And I'm sure it was just as unpleasant."
            </p>
            <p className="text-lg">
              "U-mm, I don't know. But it seems to me," he pointed out, "that
              you, my dear, had all the advantage. You knew what his opinion of
              you was, while he- Well, 'twas ever thus. We know, always have.
              They don't. Not quite. It has, you will admit, it's humorous side,
              and, sometimes, its conveniences."
            </p>
            <p className="text-lg">She poured the coffee.</p>
            <p className="text-lg">
              "I can't see it. I'm going to write Clare. Today, if I can find a
              minute. It's a thing we might as well settle definitely, and
              immediately. Curious, isn't it, that knowing, as she does, his
              unqualified attitude, she still—"
            </p>
            <p className="text-lg">
              Brian interrupted: "It's always that way. Never known it to fail.
              Remember Albert Hammond, how he used to be for ever haunting
              Seventh Avenue, and Lenox Avenue, and the dancing-places, until
              some 'shine' took a shot at him for casting an eye towards his
              'sheba?' They always come back. I've seen it happen time and time
              again."
            </p>
            <p className="text-lg">"But why?" Irene wanted to know. "Why?"</p>
            <p className="text-lg">"If I knew that, I'd know what race is."</p>
            <p className="text-lg">
              "But wouldn't you think that having got the thing, or things, they
              were after, and at such risk, they'd be satisfied? Or afraid?"
            </p>
            <p className="text-lg">
              "Yes," Brian agreed, "you certainly would think so. But, the fact
              remains, they aren't. Not satisfied, I mean. I think they're
              scared enough most of the time, when they give way to the urge and
              slip back. Not scared enough to stop them, though. Why, the good
              God only knows."
            </p>
            <p className="text-lg">
              Irene leaned forward, speaking, she was aware, with a vehemence
              absolutely unnecessary, but which she could not control.
            </p>
            <p className="text-lg">
              "Well, Clare can just count me out. I've no intention of being the
              link between her and her poorer darker brethren. After that scene
              in Chicago too! To calmly expect me-" She stopped short, suddenly
              too wrathful for words.
            </p>
            <p className="text-lg">
              "Quite right. The only sensible thing to do. Let her miss you.
              It's an unhealthy business, the whole affair. Always is."
            </p>
            <p className="text-lg">Irene nodded. "More coffee," she offered.</p>
            <p className="text-lg">
              "Thanks, no." He took up his paper again, spreading it open with a
              little rattling noise.
            </p>
            <p className="text-lg">
              Zulena came in bringing more toast. Brian took a slice and bit
              into it with that audible crunching sound that Irene disliked so
              intensely, and turned back to his paper.
            </p>
            <p className="text-lg">
              She said: "It's funny about 'passing.' We disapprove of it and at
              the same time condone it. It excites our contempt and yet we
              rather admire it. We shy away from it with an odd kind of
              revulsion, but we protect it."
            </p>
            <p className="text-lg">
              "Instinct of the race to survive and expand."
            </p>
            <p className="text-lg">
              "Rot! Everything can't be explained by some general biological
              phrase."
            </p>
            <p className="text-lg">
              "Absolutely everything can. Look at the so-called whites, who've
              left bastards all over the known earth. Same thing in them.
              Instinct of the race to survive and expand."
            </p>
            <p className="text-lg">
              With that Irene didn't at all agree, but many arguments in the
              past had taught her the futility of attempting to combat Brian on
              ground where he was more nearly at home than she. Ignoring his
              unqualified assertion, she slid away from the subject entirely.
            </p>
            <p className="text-lg">
              "I wonder," she asked, "if you'll have time to run me down to the
              printing-office. It's on a Hundred and Sixteenth Street. I've got
              to see about some handbills and some more tickets for the dance."
            </p>
            <p className="text-lg">
              "Yes, of course. How's it going? Everything all set?"
            </p>
            <p className="text-lg">
              "Ye-es. I guess so. The boxes are all sold and nearly all the
              first batch of tickets. And we expect to take in almost as much
              again at the door. Then, there's all that cake to sell. It's a
              terrible lot of work, though."
            </p>
            <p className="text-lg">
              "I'll bet it is. Uplifting the brother's no easy job. I'm as busy
              as a cat with fleas, myself."
            </p>
            <p className="text-lg">And over his face there came a shadow.</p>
            <p className="text-lg">
              "Lord! how I hate sick people, and their stupid, meddling
              families, and smelly, dirty rooms, and climbing filthy steps in
              dark hallways."
            </p>
            <p className="text-lg">
              "Surely," Irene began, fighting back the fear and irritation that
              she felt, "surely-"
            </p>
            <p className="text-lg">
              Her husband silenced her, saying sharply: "Let's not talk about
              it, please." And immediately, in his usual, slightly mocking tone
              he asked: "Are you ready to go now? I haven't a great deal of time
              to wait."
            </p>
            <p className="text-lg">
              He got up. She followed him out into the hall without replying. He
              picked up his soft brown hat from the small table and stood a
              moment whirling it round on his long teacoloured fingers.
            </p>
            <p className="text-lg">
              Irene, watching him, was thinking: "It isn't fair, it isn't fair."
              After all these years to still blame her like this. Hadn't his
              success proved that she'd been right in insisting that he stick to
              his profession right there in New York? Couldn't he see, even now,
              that it had been best? Not for her, oh no, not for her—she had
              never really considered herself—but for him and the boys. Was she
              never to be free of it, that fear which crouched, always, deep
              down within her, stealing away the sense of security, the feeling
              of permanence, from the life which she had so admirably arranged
              for them all, and desired so ardently to have remain as it was?
              That strange, and to her fantastic, notion of Brian's of going off
              to Brazil, which, though unmentioned, yet lived within him; how it
              frightened her, and–-yes, angered herl
            </p>
            <p className="text-lg">"Well?" he asked lightly.</p>
            <p className="text-lg">
              "I'll just get my things. One minute," she promised and turned
              upstairs.
            </p>
          </article>
        </section>
        {/* Article Section */}
        <section id="re-encounter" className="space-y-8">
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg">
              <strong>PART TWO: RE-ENCOUNTER</strong>
            </p>
            <p className="text-lg">
              Such were Irene Redfield's memories as she sat there in her room,
              a flood of October sunlight streaming in upon her, holding that
              second letter of Clare Kendry's.
            </p>
            <p className="text-lg">
              Laying it aside, she regarded with an astonishment that had in it
              a mild degree of amusement the violence of the feelings which it
              stirred in her.
            </p>
            <p className="text-lg">
              It wasn't the great measure of anger that surprised and slightly
              amused her. That, she was certain, was justified and reasonable,
              as was the fact that it could hold, still strong and unabated,
              across the stretch of two years' time entirely removed from any
              sight or sound of John Bellew, or of Clare. That even at this
              remote date the memory of the man's words and manner had power to
              set her hands to trembling and to send the blood pounding against
              her temples did not seem to her extraordinary. But that she should
              retain that dim sense of fear, of panic, was surprising, silly.
            </p>
            <p className="text-lg">
              That Clare should have written, should, even all things
              considered, have expressed a desire to see her again, did not so
              much amaze her. To count as nothing the annoyances, the
              bitterness, or the suffering of others, that was Clare.
            </p>
            <p className="text-lg">
              Well—Irene's shoulders went up—one thing was sure: that she
              needn't, and didn't intend to, lay herself open to any repetition
              of a humiliation as galling and outrageous as that which, for
              Clare Kendry's sake, she had borne "that time in Chicago." Once
              was enough.
            </p>
            <p className="text-lg">
              If, at the time of choosing, Clare hadn't precisely reckoned the
              cost, she had, nevertheless, no right to expect others to help
              make up the reckoning. The trouble with Clare was, not only that
              she wanted to have her cake and eat it too, but that she wanted to
              nibble at the cakes of other folk as well.
            </p>
            <p className="text-lg">
              Irene Redfield found it hard to sympathize with this new
              tenderness, this avowed yearning of Clare's for "my own people."
            </p>
            <p className="text-lg">
              The letter which she just put out of her hand was, to her taste, a
              bit too lavish in its wordiness, a shade too unreserved in the
              manner of its expression. It roused again that old suspicion that
              Clare was acting, not consciously, perhaps–that is, not too
              consciously–but, none the less, acting. Nor was Irene inclined to
              excuse what she termed Clare's downright selfishness.
            </p>
            <p className="text-lg">
              And mingled with her disbelief and resentment was another feeling,
              a question. Why hadn't she spoken that day? Why, in the face of
              Bellew's ignorant hate and aversion, had she concealed her own
              origin? Why had she allowed him to make his assertions and express
              his misconceptions undisputed? Why, simply because of Clare
              Kendry, who had exposed her to such torment, had she failed to
              take up the defence of the race to which she belonged?
            </p>
            <p className="text-lg">
              Irene asked these questions, felt them. They were, however, merely
              rhetorical, as she herself was well aware. She knew their answers,
              every one, and it was the same for them all. The sardony of it!
              She couldn't betray Clare, couldn't even run the risk of appearing
              to defend a people that were being maligned, for fear that that
              defence might in some infinitesimal degree lead the way to final
              discovery of her secret. She had to Clare Kendry a duty. She was
              bound to her by those very ties of race, which, for all her
              repudiation of them, Clare had been unable to completely sever.
            </p>
            <p className="text-lg">
              And it wasn't, as Irene knew, that Clare cared at all about the
              race or what was to become of it. She didn't. Or that she had for
              any of its members great, or even real, affection, though she
              professed undying gratitude for the small kindnesses which the
              Westover family had shown her when she was a child. Irene doubted
              the genuineness of it, seeing herself only as a means to an end
              where Clare was concerned. Nor could it be said that she had even
              the slight artistic or sociological interest in the race that some
              members of other races displayed. She hadn't. No, Clare Kendry
              cared nothing for the race. She only belonged to it.
            </p>
            <p className="text-lg">
              "Not another damned thing!" Irene declared aloud as she drew a
              fragile stocking over a pale beige-coloured foot.
            </p>
            <p className="text-lg">
              "Aha! Swearing again, are you, madam? Caught you in the act that
              time."
            </p>
            <p className="text-lg">
              Brian Redfield had come into the room in that noiseless way which,
              in spite, of the years of their life together, still had the power
              to disconcert her. He stood looking down on her with that amused
              smile of his, which was just the faintest bit supercilious and yet
              was somehow very becoming to him.
            </p>
            <p className="text-lg">
              Hastily Irene pulled on the other stocking and slipped her feet
              into the slippers beside her chair.
            </p>
            <p className="text-lg">
              "And what brought on this particular outburst of profanity? That
              is, if an indulgent but perturbed husband may inquire. The mother
              of sons too! The times, alas, the times!"
            </p>
            <p className="text-lg">
              "I've had this letter," Irene told him. "And I'm sure that
              anybody'll admit it's enough to make a saint swear. The nerve of
              her!"
            </p>
            <p className="text-lg">
              She passed the letter to him, and in the act made a little mental
              frown. For, with a nicety of perception, she saw that she was
              doing it instead of answering his question with words, so that he
              might be occupied while she hurried through her dressing. For she
              was late again, and Brian, she well knew, detested that. Why, oh
              why, couldn't she ever manage to be on time? Brian had been up for
              ages, had made some calls for all she knew, besides having taken
              the boys downtown to school. And she wasn't dressed yet; had only
              begun. Damn Clare! This morning it was her fault.
            </p>
            <p className="text-lg">
              Brian sat down and bent his head over the letter, puckering his
              brows slightly in his effort to make out Clare's scrawl.
            </p>
            <p className="text-lg">
              Irene, who had risen and was standing before the mirror, ran a
              comb through her black hair, then tossed her head with a light
              characteristic gesture, in order to disarrange a little the set
              locks. She touched a powder-puff to her warm olive skin, and then
              put on her frock with a motion so hasty that it was with some
              difficulty properly adjusted. At last she was ready, though she
              didn't immediately say so, but stood, instead, looking with a sort
              of curious detachment at her husband across the room.
            </p>
            <p className="text-lg">
              Brian, she was thinking, was extremely good-looking. Not, of
              course, pretty or effeminate; the slight irregularity of his nose
              saved him from the prettiness, and the rather marked heaviness of
              his chin saved him from the effeminacy. But he was, in a pleasant
              masculine way, rather handsome. And yet, wouldn't he, perhaps,
              have been merely ordinarily good-looking but for the richness, the
              beauty of his skin, which was of an exquisitely fine texture and
              deep copper colour.
            </p>
            <p className="text-lg">
              He looked up and said: "Clare.? That must be the girl you told me
              about meeting the last time you were out home. The one you went to
              tea with?"
            </p>
            <p className="text-lg">
              Irene's answer to that was an inclination of the head.
            </p>
            <p className="text-lg">"I'm ready," she said.</p>
            <p className="text-lg">
              They were going downstairs, Brian deftly, unnecessarily, piloting
              her round the two short curved steps, just before the centre
              landing.
            </p>
            <p className="text-lg">
              "You're not," he asked, "going to see her?"
            </p>
            <p className="text-lg">
              His words, however, were in reality not a question, but, as Irene
              was aware, an admonition.
            </p>
            <p className="text-lg">
              Her front teeth just touched. She spoke through them, and her
              tones held a thin sarcasm. "Brian, darling, I'm really not such an
              idiot that I don't realize that if a man calls me a nigger, it's
              his fault the first time, but mine if he has the opportunity to do
              it again."
            </p>
            <p className="text-lg">
              They went into the dining-room. He drew back her chair and she sat
              down behind the fat-bellied German coffee-pot, which sent out its
              morning fragrance, mingled with the smell of crisp toast and
              savoury bacon, in the distance. With his long, nervous fingers he
              picked up the morning paper from his own chair and sat down.
            </p>
            <p className="text-lg">
              Zulena, a small mahogany-coloured creature, brought in the
              grapefruit.
            </p>
            <p className="text-lg">They took up their spoons.</p>
            <p className="text-lg">
              Out of the silence Brian spoke. Blandly. "My dear, you
              misunderstand me entirely. I simply meant that I hope you're not
              going to let her pester you. She will, you know, if you give her
              half a chance and she's anything at all like your description of
              her. Anyway," he corrected, "the man, her husband, didn't call you
              a nigger. There's a difference, you know."
            </p>
            <p className="text-lg">
              "No, certainly he didn't. Not actually. He couldn't, not very
              well, since he didn't know. But he would have. It amounts to the
              same thing. And I'm sure it was just as unpleasant."
            </p>
            <p className="text-lg">
              "U-mm, I don't know. But it seems to me," he pointed out, "that
              you, my dear, had all the advantage. You knew what his opinion of
              you was, while he- Well, 'twas ever thus. We know, always have.
              They don't. Not quite. It has, you will admit, it's humorous side,
              and, sometimes, its conveniences."
            </p>
            <p className="text-lg">She poured the coffee.</p>
            <p className="text-lg">
              "I can't see it. I'm going to write Clare. Today, if I can find a
              minute. It's a thing we might as well settle definitely, and
              immediately. Curious, isn't it, that knowing, as she does, his
              unqualified attitude, she still—"
            </p>
            <p className="text-lg">
              Brian interrupted: "It's always that way. Never known it to fail.
              Remember Albert Hammond, how he used to be for ever haunting
              Seventh Avenue, and Lenox Avenue, and the dancing-places, until
              some 'shine' took a shot at him for casting an eye towards his
              'sheba?' They always come back. I've seen it happen time and time
              again."
            </p>
            <p className="text-lg">"But why?" Irene wanted to know. "Why?"</p>
            <p className="text-lg">"If I knew that, I'd know what race is."</p>
            <p className="text-lg">
              "But wouldn't you think that having got the thing, or things, they
              were after, and at such risk, they'd be satisfied? Or afraid?"
            </p>
            <p className="text-lg">
              "Yes," Brian agreed, "you certainly would think so. But, the fact
              remains, they aren't. Not satisfied, I mean. I think they're
              scared enough most of the time, when they give way to the urge and
              slip back. Not scared enough to stop them, though. Why, the good
              God only knows."
            </p>
            <p className="text-lg">
              Irene leaned forward, speaking, she was aware, with a vehemence
              absolutely unnecessary, but which she could not control.
            </p>
            <p className="text-lg">
              "Well, Clare can just count me out. I've no intention of being the
              link between her and her poorer darker brethren. After that scene
              in Chicago too! To calmly expect me-" She stopped short, suddenly
              too wrathful for words.
            </p>
            <p className="text-lg">
              "Quite right. The only sensible thing to do. Let her miss you.
              It's an unhealthy business, the whole affair. Always is."
            </p>
            <p className="text-lg">Irene nodded. "More coffee," she offered.</p>
            <p className="text-lg">
              "Thanks, no." He took up his paper again, spreading it open with a
              little rattling noise.
            </p>
            <p className="text-lg">
              Zulena came in bringing more toast. Brian took a slice and bit
              into it with that audible crunching sound that Irene disliked so
              intensely, and turned back to his paper.
            </p>
            <p className="text-lg">
              She said: "It's funny about 'passing.' We disapprove of it and at
              the same time condone it. It excites our contempt and yet we
              rather admire it. We shy away from it with an odd kind of
              revulsion, but we protect it."
            </p>
            <p className="text-lg">
              "Instinct of the race to survive and expand."
            </p>
            <p className="text-lg">
              "Rot! Everything can't be explained by some general biological
              phrase."
            </p>
            <p className="text-lg">
              "Absolutely everything can. Look at the so-called whites, who've
              left bastards all over the known earth. Same thing in them.
              Instinct of the race to survive and expand."
            </p>
            <p className="text-lg">
              With that Irene didn't at all agree, but many arguments in the
              past had taught her the futility of attempting to combat Brian on
              ground where he was more nearly at home than she. Ignoring his
              unqualified assertion, she slid away from the subject entirely.
            </p>
            <p className="text-lg">
              "I wonder," she asked, "if you'll have time to run me down to the
              printing-office. It's on a Hundred and Sixteenth Street. I've got
              to see about some handbills and some more tickets for the dance."
            </p>
            <p className="text-lg">
              "Yes, of course. How's it going? Everything all set?"
            </p>
            <p className="text-lg">
              "Ye-es. I guess so. The boxes are all sold and nearly all the
              first batch of tickets. And we expect to take in almost as much
              again at the door. Then, there's all that cake to sell. It's a
              terrible lot of work, though."
            </p>
            <p className="text-lg">
              "I'll bet it is. Uplifting the brother's no easy job. I'm as busy
              as a cat with fleas, myself."
            </p>
            <p className="text-lg">And over his face there came a shadow.</p>
            <p className="text-lg">
              "Lord! how I hate sick people, and their stupid, meddling
              families, and smelly, dirty rooms, and climbing filthy steps in
              dark hallways."
            </p>
            <p className="text-lg">
              "Surely," Irene began, fighting back the fear and irritation that
              she felt, "surely-"
            </p>
            <p className="text-lg">
              Her husband silenced her, saying sharply: "Let's not talk about
              it, please." And immediately, in his usual, slightly mocking tone
              he asked: "Are you ready to go now? I haven't a great deal of time
              to wait."
            </p>
            <p className="text-lg">
              He got up. She followed him out into the hall without replying. He
              picked up his soft brown hat from the small table and stood a
              moment whirling it round on his long teacoloured fingers.
            </p>
            <p className="text-lg">
              Irene, watching him, was thinking: "It isn't fair, it isn't fair."
              After all these years to still blame her like this. Hadn't his
              success proved that she'd been right in insisting that he stick to
              his profession right there in New York? Couldn't he see, even now,
              that it had been best? Not for her, oh no, not for her—she had
              never really considered herself—but for him and the boys. Was she
              never to be free of it, that fear which crouched, always, deep
              down within her, stealing away the sense of security, the feeling
              of permanence, from the life which she had so admirably arranged
              for them all, and desired so ardently to have remain as it was?
              That strange, and to her fantastic, notion of Brian's of going off
              to Brazil, which, though unmentioned, yet lived within him; how it
              frightened her, and–-yes, angered herl
            </p>
            <p className="text-lg">"Well?" he asked lightly.</p>
            <p className="text-lg">
              "I'll just get my things. One minute," she promised and turned
              upstairs.
            </p>

            <p className="text-lg">
              Her voice had been even and her step was firm, but in her there
              was no slackening of the agitation, of the alarms, which Brian's
              expression of discontent had raised. He had never spoken of his
              desire since that long-ago time of storm and strain, of hateful
              and nearly disastrous quarrelling, when she had so firmly opposed
              him, so sensibly pointed out its utter impossibility and its
              probable consequences to her and the boys, and had even hinted at
              a dissolution of their marriage in the event of his persistence in
              his idea.
            </p>
            <p className="text-lg">
              No, there had been, in all the years that they had lived together
              since then, no other talk of it, no more than there had been any
              other quarrelling or any other threats. But because, so she
              insisted, the bond of flesh and spirit between them was so strong,
              she knew, had always known, that his dissatisfaction had
              continued, as had his dislike and disgust for his profession and
              his country.
            </p>
            <p className="text-lg">
              A feeling of uneasiness stole upon her at the inconceivable
              suspicion that she might have been wrong in her estimate of her
              husband's character. But she squirmed away from it. Impossible!
              She couldn't have been wrong. Everything proved that she had been
              right. More than right, if such a thing could be. And all, she
              assured herself, because she understood him so well, because she
              had, actually, a special talent for understanding him. It was, as
              she saw it, the one thing that had been the basis of the success
              which she had made of a marriage that had threatened to fail. She
              knew him as well as he knew himself, or better.
            </p>
            <p className="text-lg">
              Then why worry? The thing, this discontent which had exploded into
              words, would surely die, flicker out, at last. True, she had in
              the past often been tempted to believe that it had died, only to
              become conscious, in some instinctive, subtle way, that she had
              been merely deceiving herself for a while and that it still lived.
              But it would die. Of that she was certain. She had only to direct
              and guide her man, to keep him going in the right direction. She
              put on her coat and adjusted her hat.
            </p>
            <p className="text-lg">
              Yes, it would die, as long ago she had made up her mind that it
              should. But in the meantime, while it was still living and still
              had the power to flare up and alarm her, it would have to be
              banked, smothered, and something offered in its stead. She would
              have to make some plan, some decision, at once. She frowned, for
              it annoyed her intensely. For, though temporary, it would be
              important and perhaps disturbing. Irene didn't like changes,
              particularly changes that affected the smooth routine of her
              household. Well, it couldn't be helped. Something would have to be
              done. And immediately.
            </p>
            <p className="text-lg">
              She took up her purse and drawing on her gloves, ran down the
              steps and out through the door which Brian held open for her and
              stepped into the waiting car.
            </p>
            <p className="text-lg">
              "You know," she said, settling herself into the seat beside him,
              "I'm awfuly glad to get this minute alone with you. It does seem
              that we're always so busy—I do hate that—but what can we do? I've
              had something on my mind for ever so long, something that needs
              talking over and really serious consideration."
            </p>
            <p className="text-lg">
              The car's engine rumbled as it moved out from the kerb and into
              the scant traffic of the street under Brian's expert guidance.
            </p>
            <p className="text-lg">
              She studied his profile. They turned into Seventh Avenue. Then he
              said: "Well, let's have it. No time like the present for the
              settling of weighty matters."
            </p>
            <p className="text-lg">
              "It's about Junior. I wonder if he isn't going too fast in school?
              We do forget that he's not eleven yet. Surely it can't be good for
              him to-well, if he is, I mean. Going too fast, you know. Of
              course, you know more about these things than I do. You're better
              able to judge. That is, if you've noticed or thought about it at
              all."
            </p>
            <p className="text-lg">
              "I do wish, Irene, you wouldn't be for ever fretting about those
              kids. They're all right. Perfectly all right. Good, strong,
              healthy boys, especially Junior. Most especially Junior."
            </p>
            <p className="text-lg">
              "We-l, I s'pose you're right. You're expected to know about things
              like that, and I'm sure you wouldn't make a mistake about your own
              boy." (Now, why had she said that?) "But that isn't all. I'm
              terribly afraid he's picked up some queer ideas about things-some
              things-from the older boys, you know."
            </p>
            <p className="text-lg">
              Her manner was consciously light. Apparently she was intent of the
              maze of traffic, but she was still watching Brian's face closely.
              On it was a peculiar expression. Was it, could it possibly be, a
              mixture of scorn and distaste?
            </p>
            <p className="text-lg">
              "Queer ideas?" he repeated. "D'you mean ideas about sex, Irene?"
            </p>
            <p className="text-lg">
              "Ye-es. Not quite nice ones. Dreadful jokes, and things like
              that."
            </p>
            <p className="text-lg">
              "Oh, I see," he threw at her. For a while there was silence
              between them. After a moment he demanded bluntly: "Well, what of
              it? If sex isn't a joke, what is it? And what is a joke?"
            </p>
            <p className="text-lg">
              "As you please, Brian. He's your son, you know." Her voice was
              clear, level, disapproving.
            </p>
            <p className="text-lg">
              "Exactly! And you're trying to make a molly-coddle out of him.
              Well, just let me tell you, I won't have it. And you needn't think
              I'm going to let you change him to some nice kindergarten kind of
              a school because he's getting a little necessary education. I
              won't! He'll stay right where he is. The sooner and the more he
              learns about sex, the better for him. And most certainly if he
              learns that it's a grand joke, the greatest in the world. It'll
              keep him from lots of disappointments later on."
            </p>
            <p className="text-lg">Irene didn't answer.</p>
            <p className="text-lg">
              They reached the printing-shop. She got out, emphatically slamming
              the car's door behind her. There was a piercing agony of misery in
              her heart. She hadn't intended to behave like this, but her
              extreme resentment at his attitude, the sense of having been
              wilfully misunderstood and reproved, drove her to fury.
            </p>
            <p className="text-lg">
              Inside the shop, she stilled the trembling of her lips and drove
              back her rising anger. Her business transacted, she came back to
              the car in a chastened mood. But against the armour of Brian's
              stubborn silence she heard herself saying in a calm, metallic
              voice: "I don't believe I'll go back just now. I've remembered
              that I've got to do something about getting something decent to
              wear. I haven't a rag that's fit to be seen. I'll take the bus
              downtown."
            </p>
            <p className="text-lg">
              Brian merely doffed his hat in that maddening polite way which so
              successfully curbed and yet revealed his temper.
            </p>
            <p className="text-lg">
              "Good-bye," she said bitingly. "Thanks for the lift," and turned
              towards the avenue.
            </p>
            <p className="text-lg">
              What, she wondered contritely, was she to do next? She was vexed
              with herself for having chosen, as it had turned out, so clumsy an
              opening for what she had intended to suggest: some European school
              for Junior next year, and Brian to take him over. If she had been
              able to present her plan, and he had accepted it, as she was sure
              that he would have done, with other more favourable opening
              methods, he would have had that to look forward to as a break in
              the easy monotony that seemed, for some reason she was wholly
              unable to grasp, so hateful to him.
            </p>
            <p className="text-lg">
              She was even more vexed at her own explosion of anger. What could
              have got into her to give way to it in such a moment?
            </p>
            <p className="text-lg">
              Gradually her mood passed. She drew back from the failure her
              first attempt at substitution, not so much discouraged as
              disappointed and ashamed. It might be, she reflected, that, in
              addition to her ill-timed loss of temper, she had been too hasty
              in her eagerness to distract him, had rushed too closely on the
              heels of his outburst, and had thus aroused his suspicions and his
              obstinacy. She had but to wait. Another more appropriate time
              would come, tomorrow, next week, next month. It wasn't now, as it
              had been once, that she was afraid that he would throw everything
              aside and rush off to that remote place of his heart's desire. He
              wouldn't, she knew. He was fond of her, loved her, in his slightly
              undemonstrative way.
            </p>
            <p className="text-lg">And there were the boys.</p>
            <p className="text-lg">
              It was only that she wanted him to be happy, resenting, however,
              his inability to be so with things as they were, and never
              acknowledging that though she did want him to be happy, it was
              only in her own way and by some plan of hers for him that she
              truly desired him to be so. Nor did she admit that all other
              plans, all other ways, she regarded as menaces, more or less
              indirect, to that security of place and substance which she
              insisted upon for her sons and in a lesser degree for herself.
            </p>

            <p className="text-lg">
              Five days had gone by since Clare Kendry's appealing letter. Irene
              Redfield had not replied to it. Nor had she had any other word
              from Clare.
            </p>
            <p className="text-lg">
              She had not carried out her first intention of writing at once
              because on going back to the letter for Clare's address, she had
              come upon something which, in the rigour of her determination to
              maintain unbroken between them the wall that Clare herself had
              raised, she had forgotten, or not fully noted. It was the fact
              that Clare had requested her to direct her answer to the post
              office's general delivery.
            </p>
            <p className="text-lg">
              That had angered Irene, and increased her disdain and contempt for
              the other. Tearing the letter across, she had flung it into the
              scrap-basket. It wasn't so much Clare's carefulness and her desire
              for secrecy in their relations—Irene understood the need for
              that—as that Clare should have doubted her discretion, implied
              that she might not be cautious in the wording of her reply and the
              choice of a posting-box. Having always had complete confidence in
              her own good judgment and tact, Irene couldn't bear to have anyone
              seem to question them. Certainly not Clare Kendry.
            </p>
            <p className="text-lg">
              In another, calmer moment she decided that it was, after all,
              better to answer nothing, to explain nothing, to refuse nothing;
              to dispose of the matter simply by not writing at all. Clare, of
              whom it couldn't be said that she was stupid, would not mistake
              the implication of that silence. She might—and Irene was sure that
              she would–-choose to ignore it and write again, but that didn't
              matter. The whole thing would be very easy. The basket for all
              letters, silence for their answers.
            </p>
            <p className="text-lg">
              Most likely she and Clare would never meet again. Well, she, for
              one, could endure that. Since childhood their lives had never
              really touched. Actually they were strangers. Strangers in their
              ways and means of living. Strangers in their desires and
              ambitions. Strangers even in their racial consciousness. Between
              them the barrier was just as high, just as broad, and just as firm
              as if in Clare did not run that strain of black blood. In truth,
              it was higher, broader, and firmer; because for her there were
              perils, not known, or imagined, by those others who had no such
              secrets to alarm or endanger them.
            </p>
            <p className="text-lg">
              The day was getting on toward evening. It was past the middle of
              October. There had been a week of cold rain, drenching the rotting
              leaves which had fallen from the poor trees that lined the street
              on which the Redfields' house was located, and sending a damp air
              of penetrating chill into the house, with a hint of cold days to
              come. In Irene's room a low fire was burning. Outside, only a dull
              grey light was left of the day. Inside, lamps had already been
              lighted.
            </p>
            <p className="text-lg">
              From the floor above there was the sound of young voices.
              Sometimes Junior's serious and positive; again, Ted's deceptively
              gracious one. Often there was laughter, or the noise of commotion,
              tussling, or toys being slammed down.
            </p>
            <p className="text-lg">
              Junior, tall for his age, was almost incredibly like his father in
              feature and colouring; but his temperament was hers, practical and
              determined, rather than Brian's. Ted, speculative and withdrawn,
              was, apparently, less positive in his ideas and desires. About him
              there was a deceiving air of candour that was, Irene knew, like
              his father's show of reasonable acquiescence. If, for the time
              being, and with a charming appearance of artlessness, he submitted
              to the force of superior strength, or some other immovable
              condition or circumstance, it was because of his intense dislike
              of scenes and unpleasant argument. Brian over again.
            </p>
            <p className="text-lg">
              Gradually Irene's thought slipped away from Junior and Ted, to
              become wholly absorbed in their father.
            </p>
            <p className="text-lg">
              The old fear, with strength increased, the fear for the future,
              had again laid its hand on her. And, try as she might, she could
              not shake it off. It was as if she had admitted to herself that
              against that easy surface of her husband's concordance with her
              wishes, which had, since the war had given him back to her
              physically unimpaired, covered an increasing inclination to tear
              himself and his possessions loose from their proper setting, she
              was helpless.
            </p>
            <p className="text-lg">
              The chagrin which she had felt at her first failure to subvert
              this latest manifestation of his discontent had receded, leaving
              in its wake an uneasy depression. Were all her efforts, all her
              labours, to make up to him that one loss, all her silent striving
              to prove to him that her way had been best, all her ministrations
              to him, all her outward sinking of self, to count for nothing in
              some unperceived sudden moment?
            </p>
            <p className="text-lg">
              And if so, what, then, would be the consequences to the boys? To
              her? To Brian himself? Endless searching had brought no answer to
              these questions. There was only an intense weariness from their
              shuttle-like procession in her brain.
            </p>
            <p className="text-lg">
              The noise and commotion from above grew increasingly louder. Irene
              was about to go to the stairway and request the boys to be quieter
              in their play when she heard the door-bell ringing.
            </p>
            <p className="text-lg">
              Now, who was that likely to be? She listened to Zulena's heels,
              faintly tapping on their way to the door, then to the shifting
              sound of her feet on the steps, then to her light knock on the
              bedroom door.
            </p>
            <p className="text-lg">"Yes. Come in," Irene told her.</p>
            <p className="text-lg">
              Zulena stood in the doorway. She said: "Someone to see you, Mrs.
              Redfield." Her tone was discreetly regretful, as if to convey that
              she was reluctant to disturb her mistress at that hour, and for a
              stranger. "A Mrs. Bellew."
            </p>
            <p className="text-lg">Clare!</p>
            <p className="text-lg">
              "Oh dear! Tell her, Zulena," Irene began, "that I can't— No. I'll
              see her. Please bring her up here."
            </p>
            <p className="text-lg">
              She heard Zulena pass down the hall, down the stairs, then stood
              up, smoothing out the tumbled green and ivory draperies of her
              dress with light stroking pats. At the mirror she dusted a little
              powder on her nose and brushed out her hair.
            </p>
            <p className="text-lg">
              She meant to tell Clare Kendry at once, and definitely, that it
              was of no use, her coming, that she couldn't be responsible, that
              she'd talked it over with Brian, who had agreed with her that it
              was wiser, for Clare's own sake, to refrain—
            </p>
            <p className="text-lg">
              But that was as far as she got in her rehearsal. For Clare had
              come softly into the room without knocking, and before Irene could
              greet her, had dropped a kiss on her dark curls.
            </p>
            <p className="text-lg">
              Looking at the woman before her, Irene Redfield had a sudden
              inexplicable onrush of affectionate feeling. Reaching out, she
              grasped Clare's two hands in her own and cried with something like
              awe in her voice: "Dear God! But aren't you lovely, Clare!"
            </p>
            <p className="text-lg">
              Clare tossed that aside. Like the furs and small blue hat which
              she threw on the bed before seating herself slantwise in Irene's
              favourite chair, with one foot curled under her. "Didn't you mean
              to answer my letter, 'Rene?" she asked gravely.
            </p>
            <p className="text-lg">
              Irene looked away. She had that uncomfortable feeling that one has
              when one has not been wholly kind or wholly true.
            </p>
            <p className="text-lg">
              Clare went on: "Every day I went to that nasty little post-office
              place. I'm sure they were all beginning to think that I'd been
              carrying on an illicit love-affair and that the man had thrown me
              over. Every morning the same answer: 'Nothing for you.' I got into
              an awful fright, thinking that something might have happened to
              your letter, or to mine. And half the nights I would lie awake
              looking out at the watery stars—hopeless things, the
              stars—worrying and wondering. But at last it soaked in, that you
              hadn't written and didn't intend to. And then—well, as soon as
              ever I'd seen Jack off for Florida, I came straight here. And now,
              'Rene, please tell me quite frankly why you didn't answer my
              letter."
            </p>
            <p className="text-lg">
              "Because, you see—" Irene broke off and kept Clare waiting while
              she lit a cigarette, blew out the match, and dropped it into a
              tray. She was trying to collect her arguments, for some sixth
              sense warned her that it was going to be harder than she thought
              to convince Clare Kendry of the folly of Harlem for her. Finally
              she proceeded: "I can't help thinking that you ought not to come
              up here, ought not to run the risk of knowing Negroes."
            </p>
            <p className="text-lg">"You mean you don't want me, 'Rene?"</p>
            <p className="text-lg">
              Irene hadn't supposed that anyone could look so hurt. She said,
              quite gently, "No, Clare, it's not that. But even you must see
              that it's terribly foolish, and not just the right thing."
            </p>
            <p className="text-lg">
              The tinkle of Clare's laugh rang out, while she passed her hands
              over the bright sweep of her hair. "Oh, 'Rene!" she cried, "you're
              priceless! And you haven't changed a bit. The right thing!"
              Leaning forward, she looked curiously into Irene's disapproving
              brown eyes. "You don't, you really can't mean exactly that! Nobody
              could. It's simply unbelievable."
            </p>
            <p className="text-lg">
              Irene was on her feet before she realized that she had risen.
              "What I really mean," she retorted, "is that it's dangerous and
              that you ought not to run such silly risks. No one ought to. You
              least of all."
            </p>
            <p className="text-lg">
              Her voice was brittle. For into her mind had come a thought,
              strange and irrelevant, a suspicion, that had surprised and
              shocked her and driven her to her feet. It was that in spite of
              her determined selfishness the woman before her was yet capable of
              heights and depths of feeling that she, Irene Redfield, had never
              known. Indeed, never cared to know. The thought, the suspicion,
              was gone as quickly as it had come.
            </p>
            <p className="text-lg">Clare said: "Oh, me!"</p>
            <p className="text-lg">
              Irene touched her arm caressingly, as if in contrition for that
              flashing thought. "Yes, Clare, you. It's not safe. Not safe at
              all."
            </p>
            <p className="text-lg">"Safe!"</p>
            <p className="text-lg">
              It seemed to Irene that Clare had snapped her teeth down on the
              word and then flung it from her. And for another flying second she
              had that suspicion of Clare's ability for a quality of feeling
              that was to her strange, and even repugnant. She was aware, too,
              of a dim premonition of some impending disaster. It was as if
              Clare Kendry had said to her, for whom safety, security, were
              all-important: "Safe! Damn being safe!" and meant it. With a
              gesture of impatience she sat down. In a voice of cool formality,
              she said: "Brian and I have talked the whole thing over carefully
              and decided that it isn't wise. He says it's always a dangerous
              business, this coming back. He's seen more than one come to grief
              because of it. And, Clare, considering everything—Mr. Bellew's
              attitude and all that—don't you think you ought to be as careful
              as you can?"
            </p>
            <p className="text-lg">
              Clare's deep voice broke the small silence that had followed
              Irene's speech. She said, speaking almost plaintively: "I ought to
              have known. It's Jack. I don't blame you for being angry, though I
              must say you behaved beautifully that day. But I did think you'd
              understand, 'Rene. It was that, partly, that has made me want to
              see other people. It just swooped down and changed everything. If
              it hadn't been for that, I'd have gone on to the end, never seeing
              any of you. But that did something to me, and I've been so lonely
              since! You can't know. Not close to a single soul. Never anyone to
              really talk to."
            </p>
            <p className="text-lg">
              Irene pressed out her cigarette. While doing so, she saw again the
              vision of Clare Kendry staring disdainfully down at the face of
              her father, and thought that it would be like that that she would
              look at her husband if he lay dead before her.
            </p>
            <p className="text-lg">
              Her own resentment was swept aside and her voice held an accent of
              pity as she exclaimed: "Why, Clare! I didn't know. Forgive me. I
              feel like seven beasts. It was stupid of me not to realize."
            </p>
            <p className="text-lg">
              "No. Not at all. You couldn't. Nobody, none of you, could," Clare
              moaned. The black eyes filled with tears that ran down her cheeks
              and spilled into her lap, ruining the priceless velvet of her
              dress. Her long hands were a little uplifted and clasped tightly
              together. Her effort to speak moderately was obvious, but not
              successful. "How could you know? How could you? You're free.
              You're happy. And," with faint derision, "safe."
            </p>
            <p className="text-lg">
              Irene passed over that touch of derision, for the poignant
              rebellion of the other's words had brought the tears to her own
              eyes, though she didn't allow them to fall. The truth was that she
              knew weeping did not become her. Few women, she imagined, wept as
              attractively as Clare. "I'm beginning to believe," she murmured,
              "that no one is ever completely happy, or free, or safe."
            </p>
            <p className="text-lg">
              "Well, then, what does it matter? One risk more or less, if we're
              not safe anyway, if even you're not, it can't make all the
              difference in the world. It can't to me. Besides, I'm used to
              risks. And this isn't such a big one as you're trying to make it."
            </p>
            <p className="text-lg">
              "Oh, but it is. And it can make all the difference in the world.
              There's your little girl, Clare. Think of the consequences to
              her."
            </p>
            <p className="text-lg">
              Clare's face took on a startled look, as though she were totally
              unprepared for this new weapon with which Irene had assailed her.
              Seconds passed, during which she sat with stricken eyes and
              compressed lips. "I think," she said at last, "that being a mother
              is the cruellest thing in the world." Her clasped hands swayed
              forward and back again, and her scarlet mouth trembled
              irrepressibly.
            </p>
            <p className="text-lg">
              "Yes," Irene softly agreed. For a moment she was unable to say
              more, so accurately had Clare put into words that which, not so
              definitely defined, was so often in her own heart of late. At the
              same time she was conscious that here, to her hand, was a reason
              which could not be lightly brushed aside. "Yes," she repeated,
              "and the most responsible, Clare. We mothers are all responsible
              for the security and happiness of our children. Think what it
              would mean to your Margery if Mr. Bellew should find out. You'd
              probably lose her. And even if you didn't, nothing that concerned
              her would ever be the same again. He'd never forget that she had
              Negro blood. And if she should learn—Well, I believe that after
              twelve it is too late to learn a thing like that. She'd never
              forgive you. You may be used to risks, but this is one you mustn't
              take, Clare. It's a selfish whim, an unnecessary and—
            </p>
            <p className="text-lg">
              "Yes, Zulena, what is it?" she inquired, a trifle tartly, of the
              servant who had silently materialized in the doorway.
            </p>
            <p className="text-lg">
              "The telephone's for you, Mrs. Redfield. It's Mr. Wentworth."
            </p>
            <p className="text-lg">
              "All right. Thank you. I'll take it here." And, with a muttered
              apology to Clare, she took up the instrument.
            </p>
            <p className="text-lg">
              "Hello.... Yes, Hugh.... Oh, quite.... And you?... I'm sorry,
              every single thing's gone.... Oh, too bad.... Ye-es, I s'pose you
              could. Not very pleasant, though.... Yes, of course, in a pinch
              everything goes.... Wait! I've got it! I'll change mine with
              whoever's next to you, and you can have that.... No.... I mean it…
              I'll be so busy I shan't know whether I'm sitting or standing....
              As long as Brian has a place to drop down now and then.... Not a
              single soul.... No, don't.... That's nice.... My love to
              Bianca.... I'll see to it right away and call you back....
              Goodbye."
            </p>
            <p className="text-lg">
              She hung up and turned back to Clare, a little frown on her softly
              chiselled features. "It's the N. W. L. dance," she explained, "the
              Negro Welfare League, you know. I'm on the ticket committee, or,
              rather, I am the committee. Thank heaven it comes off tomorrow
              night and doesn't happen again for a year. I'm about crazy, and
              now I've got to persuade somebody to change boxes with me."
            </p>
            <p className="text-lg">
              "That wasn't," Clare asked, "Hugh Wentworth? Not the Hugh
              Wentworth?"
            </p>
            <p className="text-lg">
              Irene inclined her head. On her face was a tiny triumphant smile.
              "Yes, the Hugh Wentworth. D'you know him?"
            </p>
            <p className="text-lg">
              "No. How should I? But I do know about him. And I've read a book
              or two of his."
            </p>
            <p className="text-lg">"Awfully good, aren't they?"</p>
            <p className="text-lg">
              "U-umm, I s'pose so. Sort of contemptuous, I thought. As if he
              more or less despised everything and everybody."
            </p>
            <p className="text-lg">
              "I shouldn't be a bit surprised if he did. Still, he's about
              earned the right to. Lived on the edges of nowhere in at least
              three continents. Been through every danger in all kinds of savage
              places. It's no wonder he thinks the rest of us are a lazy
              self-pampering lot. Hugh's a dear, though, generous as one of the
              twelve disciples; give you the shirt off his back. Bianca–-that's
              his wife—is nice too."
            </p>
            <p className="text-lg">"And he's coming up here to your dance?"</p>
            <p className="text-lg">Irene asked why not.</p>
            <p className="text-lg">
              'It seems rather curious, a man like that, going to a Negro
              dance."
            </p>
            <p className="text-lg">
              This, Irene told her, was the year I927 in the city of New York,
              and hundreds of white people of Hugh Wentworth's type came to
              affairs in Harlem, more all the time. So many that Brian had said:
              "Pretty soon the coloured people won't be allowed in at all, or
              will have to sit in Jim Crowed sections."
            </p>
            <p className="text-lg">"What do they come for?"</p>
            <p className="text-lg">
              "Same reason you're here, to see Negroes."
            </p>
            <p className="text-lg">"But why?"</p>
            <p className="text-lg">
              "Various motives," Irene explained. "A few purely and frankly to
              enjoy themselves. Others to get material to turn into shekels.
              More, to gaze on these great and near great while they gaze on the
              Negroes."
            </p>
            <p className="text-lg">
              Clare clapped her hand. " 'Rene, suppose I come too! It sounds
              terribly interesting and amusing. And I don't see why I
              shouldn't."
            </p>
            <p className="text-lg">
              Irene, who was regarding her through narrowed eyelids, had the
              same thought that she had had two years ago on the roof of the
              Drayton, that Clare Kendry was just a shade too good-looking. Her
              tone was on the edge of irony as she said: "You mean because so
              many other white people go?"
            </p>
            <p className="text-lg">
              A pale rose-colour came into Clare's ivory cheeks. She lifted a
              hand in protest. "Don't be silly! Certainly not! I mean that in a
              crowd of that kind I shouldn't be noticed."
            </p>
            <p className="text-lg">
              On the contrary, was Irene's opinion. It might be even doubly
              dangerous. Some friend or acquaintance of John Bellew or herself
              might see and recognize her.
            </p>
            <p className="text-lg">
              At that, Clare laughed for a long time, little musical trills
              following one another *in sequence after sequence. It was as if
              the thought of any friend of John Bellew's going to a Negro dance
              was to her the most amusing thing in the world.
            </p>
            <p className="text-lg">
              "I don't think," she said, when she had done laughing, "we need
              worry about that."
            </p>
            <p className="text-lg">
              Irene, however, wasn't so sure. But all her efforts to dissuade
              Clare were useless. To her, "You never can tell whom you're likely
              to meet there," Clare's rejoinder was: "I'll take my chance on
              getting by."
            </p>
            <p className="text-lg">
              "Besides, you won't know a soul and I shall be too busy to look
              after you. You'll be bored stiff."
            </p>
            <p className="text-lg">
              "I won't, I won't. If nobody asks me to dance, not even Dr.
              Redfield, I'll just sit and gaze on the great and the near great,
              too. Do, 'Rene, be polite and invite me."
            </p>
            <p className="text-lg">
              Irene turned away from the caress of Clare's smile, saying
              promptly and positively: "I will not."
            </p>
            <p className="text-lg">
              "I mean to go anyway," Clare retorted, and her voice was no less
              positive than Irene's. "Oh, no. You couldn't possibly go there
              alone. It's a public thing. All sorts of people go, anybody who
              can pay a dollar, even ladies of easy virtue looking for trade. If
              you were to go there alone, you might be mistaken for one of them,
              and that wouldn't be too pleasant."
            </p>
            <p className="text-lg">
              Clare laughed again. "Thanks. I never have been. It might be
              amusing. I'm warning you, 'Rene, that if you're not going to be
              nice and take me, I'll still be among those present. I suppose, my
              dollar's as good as anyone's."
            </p>
            <p className="text-lg">
              "Oh, the dollar! Don't be a fool, Claire. I don't care where you
              go, or what you do. All I'm concerned with is the unpleasantness
              and possible danger which your going might incur, because of your
              situation. To put it frankly, I shouldn't like to be mixed up in
              any row of the kind." She had risen again as she spoke and was
              standing at the window lifting and spreading the small yellow
              chrysanthemums in the grey stone jar on the sill. Her hands shook
              slightly, for she was in a near rage of impatience and
              exasperation. Claire's face looked strange, as if she wanted to
              cry again. One of her satin-covered feet swung restlessly back and
              forth. She said vehemently, violently almost: "Damn Jack! He keeps
              me out of everything. Everything I want. I could kill him! I
              expect I shall, some day."
            </p>
            <p className="text-lg">
              "I wouldn't," Irene advised her, "you see, there's still capital
              punishment, in this state at least. And really, Clare, after
              everything's said, I can't see that you've a right to put all the
              blame on him. You've got to admit that there's his side to the
              thing. You didn't tell him you were coloured, so he's got no way
              of knowing about this hankering of yours after Negroes, or that it
              galls you to fury to hear them called niggers and black devils. As
              far as I can see, you'll just have to endure some things and give
              up others. As we've said before, everything must be paid for. Do,
              please, be reasonable."
            </p>
            <p className="text-lg">
              But Clare, it was plain, had shut away reason as well as caution.
              She shook her head. "I can't, I can't," she said. "I would if I
              could, but I can't. You don't know, you can't realize how I want
              to see Negroes, to be with them again, to talk with them, to hear
              them laugh."
            </p>
            <p className="text-lg">
              And in the look she gave Irene, there was something groping, and
              hopeless, and yet so absolutely determined that it was like an
              image of the futile searching and the firm resolution in Irene's
              own soul, and increased the feeling of doubt and compunction that
              had been growing within her about Clare Kendry.
            </p>
            <p className="text-lg">She gave in.</p>
            <p className="text-lg">
              "Oh, come if you want to. I s'pose you're right. Once can't do
              such a terrible lot of harm." Pushing aside Clare's extravagant
              thanks, for immediately she was sorry that she had consented, she
              said briskly: "Should you like to come up and see my boys?"
            </p>
            <p className="text-lg">"I'd love to."</p>
            <p className="text-lg">
              They went up, Irene thinking that Brian would consider that she'd
              behaved like a spineless fool. And he would be right. She
              certainly had.
            </p>
            <p className="text-lg">
              Clare was smiling. She stood in the doorway of the boys' playroom,
              her shadowy eyes looking down on Junior and Ted, who had sprung
              apart from their tusselling. Junior's face had a funny little look
              of resentment. Ted's was blank.
            </p>
            <p className="text-lg">
              Clare said: "Please don't be cross. Of course, I know I've gone
              and spoiled everything. But maybe, if I promise not to get too
              much in the way, you'll let me come in, just the same."
            </p>
            <p className="text-lg">
              "Sure, come in if you want to," Ted told her. "We can't stop you,
              you know." He smiled and made her a little bow and then turned
              away to a shelf that held his favourite books. Taking one down, he
              settled himself in a chair and began to read.
            </p>
            <p className="text-lg">
              Junior said nothing, did nothing, merely stood there waiting.
            </p>
            <p className="text-lg">
              "Get up, Ted! That's rude. This is Theodore, Mrs. Bellew. Please
              excuse his bad manners. He does know better. And this is Brian
              junior. Mrs. Bellew is an old friend of mother's. We used to play
              together when we were little girls."
            </p>
            <p className="text-lg">
              Clare had gone and Brian had telephoned that he'd been detained
              and would have his dinner downtown. Irene was a little glad for
              that. She was going out later herself, and that meant she
              wouldn't, probably, see Brian until morning and so could put off
              for a few more hours speaking of Clare and the N. W. L. dance.
            </p>
            <p className="text-lg">
              She was angry with herself and with Clare. But more with herself,
              for having permitted Clare to tease her into doing something that
              Brian had, all but expressly, asked her not to do. She didn't want
              him ruffled, not just then, not while he was possessed of that
              unreasonable restless feeling.
            </p>
            <p className="text-lg">
              She was annoyed, too, because she was aware that she had consented
              to something which, if it went beyond the dance, would involve her
              in numerous petty inconveniences and evasions. And not only at
              home with Brian, but outside with friends and acquaintances. The
              disagreeable possibilities in connection with Clare Kendry's
              coming among them loomed before her in endless irritating array.
            </p>
            <p className="text-lg">
              Clare, it seemed, still retained her ability to secure the thing
              that she wanted in the face of any opposition, and in utter
              disregard of the convenience and desire of others. About her there
              was some quality, hard and persistent, with the strength and
              endurance of rock, that would not be beaten or ignored. She
              couldn't, Irene thought, have had an entirely serene life.
            </p>
            <p className="text-lg">
              Not with that dark secret for ever crouching in the background of
              her consciousness. And yet she hadn't the air of a woman whose
              life had been touched by uncertainty or suffering.
            </p>
            <p className="text-lg">
              Pain, fear, and grief were things that left their mark on people.
              Even love, that exquisite torturing emotion, left its subtle
              traces on the countenance.
            </p>
            <p className="text-lg">
              But Clare–-she had remained almost what she had always been, an
              attractive, somewhat lonely child–-selfish, wilful, and
              disturbing.
            </p>
          </article>
        </section>
        <section id="dance-night" className="space-y-8">
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg">
              <strong>THREE</strong>
            </p>
            <p className="text-lg">
              The things which Irene Redfield remembered afterward about the
              Negro Welfare League dance seemed, to her, unimportant and
              unrelated.
            </p>
            <p className="text-lg">
              She remembered the not quite derisive smile with which Brian had
              cloaked his vexation when she informed him—oh, so
              apologetically—that she had promised to take Clare, and related
              the conversation of her visit.
            </p>
            <p className="text-lg">
              She remembered her own little choked exclamation of admiration,
              when, on coming downstairs a few minutes later than she had
              intended, she had rushed into the living-room where Brian was
              waiting and had found Clare there too. Clare, exquisite, golden,
              fragrant, flaunting, in a stately gown of shining black taffeta,
              whose long, full skirt lay in graceful folds about her slim golden
              feet; her glistening hair drawn smoothly back into a small twist
              at the nape of her neck; her eyes sparkling like dark jewels.
              Irene, with her new rosecoloured chiffon frock ending at the
              knees, and her cropped curls, felt dowdy and commonplace. She
              regretted that she hadn't counselled Clare to wear something
              ordinary and inconspicuous. What on earth would Brian think of
              deliberate courting of attention? But if Clare Kendry's appearance
              had in it anything that was, to Brian Redfield, annoying or
              displeasing, the fact was not discernible to his wife as, with an
              uneasy feeling of guilt, she stood there looking into his face
              while Clare explained that she and he had made their own
              introductions, accompanying her words with a little deferential
              smile for Brian, and receiving in return one of his amused,
              slightly mocking smiles.
            </p>
            <p className="text-lg">
              She remembered Clare's saying, as they sped northward: "You know,
              I feel exactly as I used to on the Sunday we went to the
              Christmas-tree celebration. I knew there was to be a surprise for
              me and couldn't quite guess what it was to be. I am so excited.
              You can't possibly imagine! It's marvellous to be really on the
              way! I can hardly believe it!"
            </p>
            <p className="text-lg">
              At her words and tone a chilly wave of scorn had crept through
              Irene. All those superlatives! She said, taking care to speak
              indifferently: "Well, maybe in some ways you will be surprised,
              more, probably, than you anticipate."
            </p>
            <p className="text-lg">
              Brian, at the wheel, had thrown back: "And then again, she won't
              be so very surprised after all, for it'll no doubt be about what
              she expects. Like the Christmas-tree."
            </p>
            <p className="text-lg">
              She remembered rushing around here and there, consulting with this
              person and that one, and now and then snatching a part of a dance
              with some man whose dancing she particularly liked.
            </p>
            <p className="text-lg">
              She remembered catching glimpses of Clare in the whirling crowd,
              dancing, sometimes with a white man, more often with a Negro,
              frequently with Brian. Irene was glad that he was being nice to
              Clare, and glad that Clare was having the opportunity to discover
              that some coloured men were superior to some white men.
            </p>
            <p className="text-lg">
              She remembered a conversation she had with Hugh Wentworth in a
              free half-hour when she had dropped into a chair in an emptied box
              and let her gaze wander over the bright crowd below.
            </p>
            <p className="text-lg">
              Young men, old men, white men, black men; youthful women, older
              women, pink women, golden women; fat men, thin men, tall men,
              short men; stout women, slim women, stately women, small women
              moved by. An old nursery rhyme popped into her head. She turned to
              Wentworth, who had just taken a seat beside her, and recited it:
              "Rich man, poor man, Beggar man, thief, Doctor, lawyer, Indian
              chief."
            </p>
            <p className="text-lg">
              "Yes," Wentworth said, "that's it. Everybody seems to be here and
              a few more. But what I'm trying to find out is the name, status,
              and race of the blonde beauty out of the fairy-tale. She's dancing
              with Ralph Hazelton at the moment. Nice study in contrasts, that."
            </p>
            <p className="text-lg">
              It was. Clare fair and golden, like a sunlit day. Hazelton dark,
              with gleaming eyes, like a moonlit night.
            </p>
            <p className="text-lg">
              "She's a girl I used to know a long time ago in Chicago. And she
              wanted especially to meet you."
            </p>
            <p className="text-lg">
              " 'S awfully good of her, I'm sure. And now, alas! the usual
              thing's happened. All these others, these–-er–-'gentlemen of
              colour' have driven a mere Nordic from her mind."
            </p>
            <p className="text-lg">"Stuff!"</p>
            <p className="text-lg">
              " 'S a fact, and what happens to all the ladies of my superior
              race who're lured up here. Look at Bianca. Have I laid eyes on her
              tonight except in spots, here and there, being twirled about by
              some Ethiopian? I have not."
            </p>
            <p className="text-lg">
              "But, Hugh, you've got to admit that the average coloured man is a
              better dancer than the average white man—that is, if the
              celebrities and 'butter and egg' men who find their way up here
              are fair specimens of white Terpsichorean art."
            </p>
            <p className="text-lg">
              "Not having tripped the light fantastic with any of the males, I'm
              not in a position to argue the point. But I don't think it's
              merely that. 'S something else, some other attraction. They're
              always raving about the good looks of some Negro, preferably an
              unusually dark one. Take Hazelton there, for example. Dozens of
              women have declared him to be fascinatingly handsome. How about
              you, Irene? Do you think he's—er—-ravishingly beautiful?"
            </p>
            <p className="text-lg">
              "I do not! And I don't think the others do either. Not honestly, I
              mean. I think that what they feel is-well, a kind of emotional
              excitement. You know, the sort of thing you feel in the presence
              of something strange, and even, perhaps, a bit repugnant to you;
              something so different that it's really at the opposite end of the
              pole from all your accustomed notions of beauty."
            </p>
            <p className="text-lg">
              "Damned if I don't think you're halfway right!"
            </p>
            <p className="text-lg">
              "I'm sure I am. Completely. (Except, of course, when it's just
              patronizing kindness on their part.) And I know coloured girls
              who've experienced the same thing—the other way round, naturally."
            </p>
            <p className="text-lg">
              "And the men? You don't subscribe to the general opinion about
              their reason for coming up here. Purely predatory. Or, do you?"
            </p>
            <p className="text-lg">"N-no. More curious, I should say."</p>
            <p className="text-lg">
              Wentworth, whose eyes were a clouded amber colour, had given her a
              long, searching look that was really a stare. He said: "All this
              is awfully interestin', Irene. We've got to have a long talk about
              it some time soon. There's your friend from Chicago, first time up
              here and all that. A case in point."
            </p>
            <p className="text-lg">
              Irene's smile had only just lifted the corners of her painted
              lips. A match blazed in Wentworth's broad hands as he lighted her
              cigarette and his own, and flickered out before he asked: "Or
              isn't she?"
            </p>
            <p className="text-lg">
              Her smile changed to a laugh. "Oh, Hugh I You're so clever. You
              usually know everything. Even how to tell the sheep from the
              goats. What do you think? Is she?"
            </p>
            <p className="text-lg">
              He blew a long contemplative wreath of smoke. "Damned if I know!
              I'll be as sure as anything that I've learned the trick. And then
              in the next minute I'll find I couldn't pick some of 'em if my
              life depended on it."
            </p>
            <p className="text-lg">
              "Well, don't let that worry you. Nobody can. Not by looking."
            </p>
            <p className="text-lg">"Not by looking, eh? Meaning?"</p>
            <p className="text-lg">
              "I'm afraid I can't explain. Not clearly. There are ways. But
              they're not definite or tangible."
            </p>
            <p className="text-lg">
              "Feeling of kinship, or something like that?"
            </p>
            <p className="text-lg">
              "Good heavens, no! Nobody has that, except for their in-laws."
            </p>
            <p className="text-lg">
              "Right again! But go on about the sheep and the goats."
            </p>
            <p className="text-lg">
              "Well, take my own experience with Dorothy Thompkins. I'd met her
              four or five times, in groups and crowds of people, before I knew
              she wasn't a Negro. One day I went to an awful tea, terribly
              dicty. Dorothy was there. We got talking. In less than five
              minutes, I knew she was 'fay.' Not from anything she did or said
              or anything in her appearance. Just—just something. A thing that
              couldn't be registered."
            </p>
            <p className="text-lg">
              "Yes, I understand what you mean. Yet lots of people 'pass' all
              the time."
            </p>
            <p className="text-lg">
              "Not on our side, Hugh. It's easy for a Negro to 'pass' for white.
              But I don't think it would be so simple for a white person to
              'pass' for coloured."
            </p>
            <p className="text-lg">"Never thought of that."</p>
            <p className="text-lg">"No, you wouldn't. Why shouid you?"</p>
            <p className="text-lg">
              He regarded her critically through mists of smoke. "Slippin' me,
              Irene?"
            </p>
            <p className="text-lg">
              She said soberly: "Not you, Hugh. I'm too fond of you. And you're
              too sincere."
            </p>
            <p className="text-lg">
              And she remembered that towards the end of the dance Brian had
              come to her and said: "I'll drop you first and then run Clare
              down." And that he had been doubtful of her discretion when she
              had explained to him that he wouldn't have to bother because she
              had asked Bianca Wentworth to take her down with them. Did she, he
              had asked, think it had been wise to tell them about Clare?
            </p>
            <p className="text-lg">
              "I told them nothing," she said sharply, for she was unbearably
              tired, "except that she was at the Walsingham. It's on their way,
              And, really, I haven't thought anything about the wisdom of it,
              but now that I do, I'd say it's much better for them to take her
              than you."
            </p>
            <p className="text-lg">
              "As you please. She's your friend, you know," he had answered,
              with a disclaiming shrug of his shoulders.
            </p>
            <p className="text-lg">
              Except for these few unconnected things the dance faded to a
              blurred memory, its outlines mingling with those of other dances
              of its kind that she had attended in the past and would attend in
              the future.
            </p>
          </article>
        </section>
        <section id="new-friendship" className="space-y-8">
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg">
              <strong>FOUR</strong>
            </p>
            <p className="text-lg">
              But undistinctive as the dance had seemed, it was, nevertheless,
              important. For it marked the beginning of a new factor in Irene
              Redfield's life, something that left its trace on all the future
              years of her existence. It was the beginning of a new friendship
              with Clare Kendry.
            </p>
            <p className="text-lg">
              She came to them frequently after that. Always with a touching
              gladness that welled up and overflowed on all the Redfield
              household. Yet Irene could never be sure whether her comings were
              a joy or a vexation.
            </p>
            <p className="text-lg">
              Certainly she was no trouble. She had not to be entertained, or
              even noticed–-if anyone could ever avoid noticing Clare. If Irene
              happened to be out or occupied, Clare could very happily amuse
              herself with Ted and Junior, who had conceived for her an
              admiration that verged on adoration, especially Ted. Or, lacking
              the boys, she would descend to the kitchen and, with—to Irene—an
              exasperating childlike lack of perception, spend her visit in talk
              and merriment with Zulena and Sadie.
            </p>
            <p className="text-lg">
              Irene, while secretly resenting these visits to the playroom and
              kitchen, for some obscure reason which she shied away from putting
              into words, never requested that Clare make an end of them, or
              hinted that she wouldn't have spoiled her own Margery so
              outrageously, nor been so friendly with white servants.
            </p>
            <p className="text-lg">
              Brian looked on these things with the same tolerant amusement that
              marked his entire attitude toward Clare. Never since his faintly
              derisive surprise at Irene's information that she was to go with
              them the night of the dance, had he shown any disapproval of
              Clare's presence. On the other hand, it couldn't be said that her
              presence seemed to please him. It didn't annoy or disturb him, so
              far as Irene could judge. That was all. Didn't he, she once asked
              him, think Clare was extraordinarily beautiful?
            </p>
            <p className="text-lg">
              "No," he had answered. "That is, not particularly."
            </p>
            <p className="text-lg">"Brian, you're fooling!"</p>
            <p className="text-lg">
              "No, honestly. Maybe I'm fussy. I s'pose she'd be an unusually
              good-looking white woman. I like my ladies darker. Beside an
              A-number-one sheba, she simply hasn't got 'em."
            </p>
            <p className="text-lg">
              Clare went, sometimes with Irene and Brian, to parties and dances,
              and on a few occasions when Irene hadn't been able or inclined to
              go out, she had gone alone with Brian to some bridge party or
              benefit dance.
            </p>
            <p className="text-lg">
              Once in a while she came formally to dine with them. She wasn't,
              however, in spite of her poise and air of worldliness, the ideal
              dinner-party guest. Beyond the aesthetic pleasure one got from
              watching her, she contributed little, sitting for the most part
              silent, an odd dreaming look in her hypnotic eyes. Though she
              could for some purpose of her own—the desire to be included in
              some party being made up to go cabareting, or an invitation to a
              dance or a tea-talk fluently and entertainingly.
            </p>
            <p className="text-lg">
              She was generally liked. She was so friendly and responsive, and
              so ready to press the sweet food of flattery on all. Nor did she
              object to appearing a bit pathetic and ill-used, so that people
              could feel sorry for her. And, no matter how often she came among
              them, she still remained someone apart, a little mysterious and
              strange, someone to wonder about and to admire and to pity.
            </p>
            <p className="text-lg">
              Her visits were undecided and uncertain, being, as they were,
              dependent on the presence or absence of John Bellew in the city.
              But she did, once in a while, manage to steal uptown for an
              afternoon even when he was not away. As time went on without any
              apparent danger of discovery, even Irene ceased to be perturbed
              about the possibility of Clare's husband's stumbling on her racial
              identity.
            </p>
            <p className="text-lg">
              The daughter, Margery, had been left in Switzerland in school, for
              Clare and Bellew would be going back in the early spring. In
              March, Clare thought. "And how I do hate to think of it!" she
              would say, always with a suggestion of leashed rebellion; "but I
              can't see how I'm going to get out of it. Jack won't hear of my
              staying behind. If I could have just a couple of months more in
              New York, alone I mean, I'd be the happiest thing in the world."
            </p>
            <p className="text-lg">
              "I imagine you'll be happy enough, once you get away," Irene told
              her one day when she was bewailing her approaching departure.
              "Remember, there's Margery. Think how glad you'll be to see her
              after all this time."
            </p>
            <p className="text-lg">
              "Children aren't everything," was Clare Kendry's answer to that.
              "There are other things in the world, though I admit some people
              don't seem to suspect it." And she laughed, more, it seemed, at
              some secret joke of her own than at her words.
            </p>
            <p className="text-lg">
              Irene replied: "You know you don't mean that, Clare. You're only
              trying to tease me. I know very well that I take being a mother
              rather seriously. I am wrapped up in my boys and the running of my
              house. I can't help it. And, really, I don't think it's anything
              to laugh at." And though she was aware of the slight primness in
              her words and attitude, she had neither power nor wish to efface
              it.
            </p>
            <p className="text-lg">
              Clare, suddenly very sober and sweet, said: "You're right. It's no
              laughing matter. It's shameful of me to tease you, 'Rene. You are
              so good." And she reached out and gave Irene's hand an
              affectionate little squeeze. "Don't think," she added, "whatever
              happens, that I'll ever forget how good you've been to me."
            </p>
            <p className="text-lg">"Nonsense!"</p>
            <p className="text-lg">
              "Oh, but you have, you have. It's just that I haven't any proper
              morals or sense of duty, as you have, that makes me act as I do."
            </p>
            <p className="text-lg">"Now you are talking nonsense."</p>
            <p className="text-lg">
              "But it's true, 'Rene. Can't you realize that I'm not like you a
              bit? Why, to get the things I want badly enough, I'd do anything,
              hurt anybody, throw anything away. Really, 'Rene, I'm not safe."
              Her voice as well as the look on her face had a beseeching
              earnestness that made Irene vaguely uncomfortable.
            </p>
            <p className="text-lg">
              She said: "I don't believe it. In the first place what you're
              saying is so utterly, so wickedly wrong. And as for your giving up
              things—" She stopped, at a loss for an acceptable term to express
              her opinion of Clare's "having" nature. But Clare Kendry had begun
              to cry, audibly, with no effort at restraint, and for no reason
              that Irene could discover.
            </p>
          </article>
        </section>
        <section id="finale" className="space-y-8">
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg">
              <strong>PART THREE: FINALE</strong>
            </p>
            <p className="text-lg">
              <strong>ONE</strong>
            </p>
            <p className="text-lg">
              The year was getting on towards its end. October, November had
              gone. December had come and brought with it a little snow and then
              a freeze and after that a thaw and some soft pleasant days that
              had in them a feeling of spring.
            </p>
            <p className="text-lg">
              It wasn't, this mild weather, a bit Christmasy, Irene Redfield was
              thinking, as she turned out of Seventh Avenue into her own street.
              She" didn't like it to be warm and springy when it should have
              been cold and crisp, or grey and cloudy as if snow was about to
              fall. The weather, like people, ought to enter into the spirit of
              the season. Here the holidays were almost upon them, and the
              streets through which she had come were streaked with rills of
              muddy water and the sun shone so warmly that children had taken
              off their hats and scarfs. It was all as soft, as like April, as
              possible. The kind of weather for Easter. Certainly not for
              Christmas.
            </p>
            <p className="text-lg">
              Though, she admitted, reluctantly, she herself didn't feel the
              proper Christmas spirit this year, either. But that couldn't be
              helped, it seemed, any more than the weather. She was weary and
              depressed. And for all her trying, she couldn't be free of that
              dull, indefinite misery which with increasing tenaciousness had
              laid hold of her. The morning's aimless wandering through the
              teeming Harlem streets, long after she had ordered the flowers
              which had been her excuse for setting out, was but another effort
              to tear herself loose from it.
            </p>
            <p className="text-lg">
              She went up the cream stone steps, into the house, and down to the
              kitchen. There were to be people in to tea. But that, she found,
              after a few words with Sadie and Zulena, need give her no concern.
              She was thankful. She didn't want to be bothered. She went
              upstairs and took off her things and got into bed.
            </p>
            <p className="text-lg">
              She thought: "Bother those people coming to tea!"
            </p>
            <p className="text-lg">
              She thought: "If I could only be sure that at bottom it's just
              Brazil."
            </p>
            <p className="text-lg">
              She thought: "Whatever it is, if I only knew what it was, I could
              manage it."
            </p>
            <p className="text-lg">
              Brian again. Unhappy, restless, withdrawn. And she, who had prided
              herself on knowing his moods, their causes and their remedies, had
              found it first unthinkable, and then intolerable, that this, so
              like and yet so unlike those other spasmodic restlessnesses of
              his, should be to her incomprehensible and elusive.
            </p>
            <p className="text-lg">
              He was restless and he was not restless. He was discontented, yet
              there were times when she felt he was possessed of some intense
              secret satisfaction, like a cat who had stolen the cream. He was
              irritable with the boys, especially Junior, for Ted, who seemed to
              have an uncanny knowledge of his father's periods of off moods,
              kept out of his way when possible. They got on his nerves, drove
              him to violent outbursts of temper, very different from his usual
              gently sarcastic remarks that constituted his idea of discipline
              for them. On the other hand, with her he was more than customarily
              considerate and abstemious. And it had been weeks since she had
              felt the keen edge of his irony.
            </p>
            <p className="text-lg">
              He was like a man marking time, waiting. But what was he waiting
              for? It was extraordinary that, after all these years of accurate
              perception, she now lacked the talent to discover what that
              appearance of waiting meant. It was the knowledge that, for all
              her watching, all her patient study, the reason for his humour
              still eluded her which filled her with foreboding dread. That
              guarded reserve of his seemed to her unjust, inconsiderate, and
              alarming. It was as if he had stepped out beyond her reach into
              some section, strange and walled, where she could not get at him.
            </p>
            <p className="text-lg">
              She closed her eyes, thinking what a blessing it would be if she
              could get a little sleep before the boys came in from school. She
              couldn't, of course, though she was so tired, having had, of late,
              so many sleepless nights. Nights filled with questionings and
              premonitions.
            </p>
            <p className="text-lg">But she did sleep—several hours.</p>
            <p className="text-lg">
              She wakened to find Brian standing at her bedside looking down at
              her, an unfathomable expression in his eyes.
            </p>
            <p className="text-lg">
              She said: "I must have dropped off to sleep," and watched a
              slender ghost of his old amused smile pass over his face.
            </p>
            <p className="text-lg">
              "It's getting on to four," he told her, meaning, she knew, that
              she was going to be late again.
            </p>
            <p className="text-lg">
              She fought back the quick answer that rose to her lips and said
              instead: "I'm getting right up. It was good of you to think to
              call me." She sat up.
            </p>
            <p className="text-lg">
              He bowed. "Always the attentive husband, you see."
            </p>
            <p className="text-lg">
              "Yes indeed. Thank goodness, everything's ready."
            </p>
            <p className="text-lg">"Except you. Oh, and Clare's downstairs."</p>
            <p className="text-lg">
              "Clare! What a nuisance! I didn't ask her. Purposely."
            </p>
            <p className="text-lg">
              "I see. Might a mere man ask why? Or is the reason so subtly
              feminine that it wouldn't be understood by him?"
            </p>
            <p className="text-lg">
              A little of his smile had come back. Irene, who was beginning to
              shake off some of her depression under his familiar banter, said,
              almost gaily: "Not at all. It just happens that this party happens
              to be for Hugh, and that Hugh happens not to care a great deal for
              Clare; therefore I, who happen to be giving the party, didn't
              happen to ask her. Nothing could be simpler. Could it?"
            </p>
            <p className="text-lg">
              "Nothing. It's so simple that I can easily see beyond your simple
              explanation and surmise that Clare, probably, just never happened
              to pay Hugh the admiring attention that he happens to consider no
              more than his just due. Simplest thing in the world."
            </p>
            <p className="text-lg">
              Irene exclaimed in amazement: "Why, I thought you liked Hugh! You
              don't, you can't, believe anything so idiotic!"
            </p>
            <p className="text-lg">
              "Well, Hugh does think he's God, you know."
            </p>
            <p className="text-lg">
              "That," Irene declared, getting out of bed, "is absolutely not
              true. He thinks ever so much better of himself than that, as you,
              who know and have read him, ought to be able to guess. If you
              remember what a low opinion he has of God, you won't make such a
              silly mistake."
            </p>
            <p className="text-lg">
              She went into the closet for her things and, coming back, hung her
              frock over the back of a chair and placed her shoes on the floor
              beside it. Then she sat down before her dressing-table.
            </p>
            <p className="text-lg">
              Brian didn't speak. He continued to stand beside the bed, seeming
              to look at nothing in particular. Certainly not at her. True, his
              gaze was on her, but in it there was some quality that made her
              feel that at that moment she was no more to him than a pane of
              glass through which he stared. At what? She didn't know, couldn't
              guess. And this made her uncomfortable. Piqued her.
            </p>
            <p className="text-lg">
              She said: "It just happens that Hugh prefers intelligent women."
            </p>
            <p className="text-lg">
              Plainly he was startled. "D'you mean that you think Clare is
              stupid?" he asked, regarding her with lifted eyebrows, which
              emphasized the disbelief of his voice.
            </p>
            <p className="text-lg">
              She wiped the cold cream from her face, before she said: "No, I
              don't. She isn't stupid. She's intelligent enough in a purely
              feminine way. Eighteenth-century France would have been a
              marvellous setting for her, or the old South if she hadn't made
              the mistake of being born a Negro."
            </p>
            <p className="text-lg">
              "I see. Intelligent enough to wear a tight bodice and keep bowing
              swains whispering compliments and retrieving dropped fans. Rather
              a pretty picture. I take it, though, as slightly feline in its
              implication."
            </p>
            <p className="text-lg">
              "Well, then, all I can say is that you take it wrongly. Nobody
              admires Clare more than I do, for the kind of intelligence she
              has, as well as for her decorative qualities. But she's not- She
              isn't- She hasn't- Oh, I can't explain it. Take Bianca, for
              example, or, to keep to the race, Felise Freeland. Looks and
              brains. Real brains that can hold their own with anybody. Clare
              has got brains of a sort, the kind that are useful too.
              Acquisitive, you know. But she'd bore a man like Hugh to suicide.
              Still, I never thought that even Clare would come to a private
              party to which she hadn't been asked. But, it's like her."
            </p>
            <p className="text-lg">
              For a minute there was silence. She completed the bright red arch
              of her full lips. Brian moved towards the door. His hand was on
              the knob. He said: "I'm sorry, Irene. It's my fault entirely. She
              seemed so hurt at being left out that I told her I was sure you'd
              forgotten and to just come along."
            </p>
            <p className="text-lg">
              Irene cried out: "But, Brian, I—" and stopped, amazed at the
              fierce anger that had blazed up in her.
            </p>
            <p className="text-lg">Brian's head came round with a jerk.</p>
            <p className="text-lg">His brows lifted in an odd surprise.</p>
            <p className="text-lg">
              Her voice, she realized, had gone queer. But she had an
              instinctive feeling that it hadn't been the whole cause of his
              attitude. And that little straightening motion of the shoulders.
              Hadn't it been like that of a man drawing himself up to receive a
              blow? Her fright was like a scarlet spear of terror leaping at her
              heart.
            </p>
            <p className="text-lg">
              Clare Kendry! So that was it! Impossible. It couldn't be.
            </p>
            <p className="text-lg">
              In the mirror before her she saw that he was still regarding her
              with that air of slight amazement. She dropped her eyes to the
              jars and bottles on the table and began to fumble among them with
              hands whose fingers shook slightly.
            </p>
            <p className="text-lg">
              "Of course," she said carefully, "I'm glad you did. And in spite
              of my recent remarks, Clare does add to any party. She's so easy
              on the eyes."
            </p>
            <p className="text-lg">
              When she looked again, the surprise had gone from his face and the
              expectancy from his bearing.
            </p>
            <p className="text-lg">
              "Yes," he agreed. "Well, I guess I'll run along. One of us ought
              to be down, I s'pose."
            </p>
            <p className="text-lg">
              "You're right. One of us ought to." She was surprised that it was
              in her normal tones she spoke, caught as she was by the heart
              since that dull indefinite fear had grown suddenly into sharp
              panic. "I'll be down before you know it," she promised.
            </p>
            <p className="text-lg">
              "All right." But he still lingered. "You're quite certain. You
              don't mind my asking her? Not awfully, I mean? I see now that I
              ought to have spoken to you. Trust women to have their reasons for
              everything."
            </p>
            <p className="text-lg">
              She made a little pretence at looking at him, managed a tiny
              smile, and turned away. Clare! How sickening!
            </p>
            <p className="text-lg">
              "Yes, don't they?" she said, striving to keep her voice casual.
              Within her she felt a hardness from feeling, not absent, but
              repressed. And that hardness was rising, swelling. Why didn't he
              go? Why didn't he?
            </p>
            <p className="text-lg">
              He had opened the door at last. "You won't be long?" he asked,
              admonished.
            </p>
            <p className="text-lg">
              She shook her head, unable to speak, for there was a choking in
              her throat, and the confusion in her mind was like the beating of
              wings. Behind her she heard the gentle impact of the door as it
              closed behind him, and knew that he had gone. Down to Clare. For a
              long minute she sat in strained stiffness. The face in the mirror
              vanished from her sight, blotted out by this thing which had so
              suddenly flashed across her groping mind. Impossible for her to
              put it immediately into words or give it outline, for, prompted by
              some impulse of self-protection, she recoiled from exact
              expression.
            </p>
            <p className="text-lg">
              She closed her unseeing eyes and clenched her fists. She tried not
              to cry. But her lips tightened and no effort could check the hot
              tears of rage and shame that sprang into her eyes and flowed down
              her cheeks; so she laid her face in her arms and wept silently.
              When she was sure that she had done crying, she wiped away the
              warm remaining tears and got up. After bathing her swollen face in
              cold, refreshing water and carefully applying a stinging splash of
              toilet water, she went back to the mirror and regarded herself
              gravely. Satisfied that there lingered no betraying evidence of
              weeping, she dusted a little powder on her dark-white face and
              again examined it carefully, and with a kind of ridiculing
              contempt.
            </p>
            <p className="text-lg">
              "I do think," she confided to it, "that you've been something—oh,
              very much—of a damned fool."
            </p>
            <p className="text-lg">
              Downstairs the ritual of tea gave her some busy moments, and that,
              she decided, was a blessing. She wanted no empty spaces of time in
              which her mind would immediately return to that horror which she
              had not yet gathered sufficient courage to face. Pouring tea
              properly and nicely was an occupation that required a kind of
              well-balanced attention.
            </p>
            <p className="text-lg">
              In the room beyond, a clock chimed. A single sound. Fifteen
              minutes past five o'clock. That was all! And yet in the short
              space of half an hour all of life had changed, lost its colour,
              its vividness, its whole meaning. No, she reflected, it wasn't
              that that had happened. Life about her, apparently, went on
              exactly as before.
            </p>
            <p className="text-lg">
              "Oh, Mrs. Runyon... So nice to see you.... Two?... Really?... How
              exciting!... Yes, I think Tuesday's all right....
            </p>
            <p className="text-lg">
              Yes, life went on precisely as before. It was only she that had
              changed. Knowing, stumbling on this thing, had changed her. It was
              as if in a house long dim, a match had been struck, showing
              ghastly shapes where had been only blurred shadows.
            </p>
            <p className="text-lg">
              Chatter, chatter, chatter. Someone asked her a question. She
              glanced up with what she felt was a rigid smile.
            </p>
            <p className="text-lg">
              "Yes... Brian picked it up last winter in Haiti. Terribly weird,
              isn't it?... It is rather marvellous in its own hideous way....
              Practically nothing, I believe. A few cents...."
            </p>
            <p className="text-lg">
              Hideous. A great weariness came over her. Even the small exertion
              of pouring golden tea into thin old cups seemed almost too much
              for her. She went on pouring. Made repetitions of her smile.
              Answered questions. Manufactured conversation. She thought: "I
              feel like the oldest person in the world with the longest stretch
              of life before me."
            </p>
            <p className="text-lg">
              "Josephine Baker?... No. I've never seen her.... Well, she might
              have been in Shuffle Along when I saw it, but if she was, I don't
              remember her.... Oh, but you're wrong!... I do think Ethel Waters
              is awfully good…”
            </p>
            <p className="text-lg">
              There were the familiar little tinkling sounds of spoons striking
              against frail cups, the soft running sounds of inconsequential
              talk, punctuated now and then with laughter. In irregular small
              groups, disintegrating, coalescing, striking just the right note
              of disharmony, disorder in the big room, which Irene had furnished
              with a sparingness that was almost chaste, moved the guests with
              that slight f amiliarity that makes a party a success. On the
              floor and the walls the sinking sun threw long, fantastic shadows.
            </p>
            <p className="text-lg">
              So like many other tea-parties she had had. So unlike any of those
              others. But she mustn't think yet. Time enough for that after. All
              the time in the world. She had a second's flashing knowledge of
              what those words might portend. Time with Brian. Time without him.
              It was gone, leaving in its place an almost uncontrollable impulse
              to laugh, to scream, to hurl things about. She wanted, suddenly,
              to shock people, to hurt them, to make them notice her, to be
              aware of her suffering.
            </p>
            <p className="text-lg">
              "Hello, Dave.... Felise.... Really your clothes are the despair of
              half the women in Harlem.... How do you do it?... Lovely, is it
              Worth or Lanvin?... Oh, a mere Babani...”
            </p>
            <p className="text-lg">
              "Merely that," Felise Freeland acknowledged. "Come out of it,
              Irene, whatever it is. You look like the second grave-digger."
            </p>
            <p className="text-lg">
              "Thanks, for the hint, Felise. I'm not feeling quite up to par.
              The weather, I guess."
            </p>
            <p className="text-lg">
              "Buy yourself an expensive new frock, child. It always helps. Any
              time this child gets the blues, it means money out of Dave's
              pocket. How're those boys of yours?"
            </p>
            <p className="text-lg">
              The boys! For once she'd forgotten them. They were, she told
              Felise, very well. Felise mumbled something about that being
              awfully nice, and said she'd have to fly, because for a wonder she
              saw Mrs. Bellew sitting by herself, "and I've been trying to get
              her alone all afternoon. I want her for a party. Isn't she
              stunning today?"
            </p>
            <p className="text-lg">
              Clare was. Irene couldn't remember ever having seen her look
              better. She was wearing a superlatively simple cinnamon-brown
              frock which brought out all her vivid beauty, and a little golden
              bowl of a hat. Around her neck hung a string of amber beads that
              would easily have made six or eight like one Irene owned. Yes, she
              was stunning.
            </p>
            <p className="text-lg">
              The ripple of talk flowed on. The fire roared. The shadows
              stretched longer.
            </p>
            <p className="text-lg">
              Across the room was Hugh. He wasn't, Irene hoped, being too bored.
              He seemed as he always did, a bit aloof, a little amused, and
              somewhat weary. And as usual he was hovering before the
              book-shelves. But he was not, she noticed, looking at the book he
              had taken down. Instead, his dull amber eyes were held by
              something across the room. They were a little scornful. Well, Hugh
              had never cared for Clare Kendry. For a minute Irene hesitated,
              then turned her head, though she knew what it was that held Hugh's
              gaze. Clare, who had suddenly clouded all her days. Brian, the
              father of Ted and Junior. Clare's ivory face was what it always
              was, beautiful and caressing. Or maybe today a little masked.
              Unrevealing. Unaltered and undisturbed by any emotion within or
              without. Brian's seemed to Irene to be pitiably bare. Or was it
              too as it always was? That half-effaced seeking look, did he
              always have that? Queer, that now she didn't know, couldn't
              recall. Then she saw him smile, and the smile made his face all
              eager and shining. Impelled by some inner urge of loyalty to
              herself, she glanced away.
            </p>
            <p className="text-lg">
              But only for a moment. And when she turned towards them again, she
              thought that the look on his face was the most melancholy and yet
              the most scoffing that she had ever seen upon it.
            </p>
            <p className="text-lg">
              In the next quarter of an hour she promised herself to Bianca
              Wentworth in Sixty-second Street, Jane Tenant at Seventh Avenue
              and a Hundred and Fiftieth Street, and the Dashields in Brooklyn
              for dinner all on the same evening and at almost the same hour.
            </p>
            <p className="text-lg">
              Oh well, what did it matter? She had no thoughts at all now, and
              all she felt was a great fatigue. Before her tired eyes Clare
              Kendry was talking to Dave Freeland. Scraps of their conversation,
              in Clare's husky voice, floated over to her: "... always admired
              you... so much about you long ago... everybody says so... no one
              but you...." And more of the same. The man hung rapt on her words,
              though he was the husband of Felise Freeland, and the author of
              novels that revealed a man of perception and a devastating irony.
              And he fell for such pish-posh! And all because Clare had a trick
              of sliding down ivory lids over astonishing black eyes and then
              lifting them suddenly and turning on a caressing smile. Men like
              Dave Freeland fell for it. And Brian.
            </p>
            <p className="text-lg">
              Her mental and physical languor receded. Brian. What did it mean?
              How would it affect her and the boys? The boys! She had a surge of
              relief. It ebbed, vanished. A feeling of absolute unimportance
              followed. Actually, she didn't count. She was, to him, only the
              mother of his sons. That was all. Alone she was nothing. Worse. An
              obstacle.
            </p>
            <p className="text-lg">Rage boiled up in her.</p>
            <p className="text-lg">
              There was a slight crash. On the floor at her feet lay the
              shattered cup. Dark stains dotted the bright rug. Spread. The
              chatter stopped. Went on. Before her, Zulena gathered up the white
              fragments.
            </p>
            <p className="text-lg">
              As from a distance Hugh Wentworth's clipt voice came to her,
              though he was, she was aware, somehow miraculously at her side.
            </p>
            <p className="text-lg">
              "Sorry," he apologized. "Must have pushed you. Clumsy of me. Don't
              tell me it's priceless and irreplaceable."
            </p>
            <p className="text-lg">
              It hurt. Dear God! How the thing hurt! But she couldn't think of
              that now. Not with Hugh sitting there mumbling apologies and lies.
              The significance of his words, the power of his discernment,
              stirred in her a sense of caution. Her pride revolted. Damn Hugh!
              Something would have to be done about him. Now. She couldn't, it
              seemed, help his knowing. It was too late for that. But she could
              and would keep him from knowing that she knew. She could, she
              would bear it. She'd have to. There were the boys. Her whole body
              went taut. In that second she saw that she could bear anything,
              but only if no one knew that she had anything to bear. It hurt. It
              frightened her, but she could bear it.
            </p>
            <p className="text-lg">
              She turned to Hugh. Shook her head. Raised innocent dark eyes to
              his concerned pale ones. "Oh, no," she protested, "you didn't push
              me. Cross your heart, hope to die, and I'll tell you how it
              happened."
            </p>
            <p className="text-lg">"Done!"</p>
            <p className="text-lg">
              "Did you notice that cup? Well, you're lucky. It was the ugliest
              thing that your ancestors, the charming Confederates ever owned.
              I've forgotten how many thousands of years ago it was that Brian's
              great-great-grand-uncle owned it. But it has, or had, a good old
              hoary history. It was brought North by way of the subway. Oh, all
              right! Be English if you want to and call it the underground. What
              I'm coming to is the fact that I've never figured out a way of
              getting rid of it until about five minutes ago. I had an
              inspiration. I had only to break it, and I was rid of it for ever.
              So simple! And I'd never thought of it before."
            </p>
            <p className="text-lg">
              Hugh nodded and his frosty smile spread over his features. Had she
              convinced him? "Still," she went on with a little laugh that
              didn't, she was sure, sound the least bit forced, "I'm perfectly
              willing for you to take the blame and admit that you pushed me at
              the wrong moment. What are friends for, if not to help bear our
              sins? Brian will certainly be told that it was your fault.
            </p>
            <p className="text-lg">
              "More tea, Clare?... I haven't had a minute with you.... Yes,
              it.is a nice party.... You'll stay to dinner, I hope.... Oh, too
              bad!... I'll be alone with the boys… They'll be sorry. Brian's got
              a medical meeting, or something.... Nice frock you're wearing.
              Thanks.... Well, good-bye; see you soon, I hope."
            </p>
            <p className="text-lg">
              The clock chimed. One. Two, Three. Four. Five. Six. Was it, could
              it be, only a little over an hour since she had come down to tea?
              One little hour.
            </p>
            <p className="text-lg">
              "Must you go?... Good-bye. Thank you so much.... So nice to see
              you.... Yes, Wednesday.... My love to Madge.... Sorry, but I'm
              filled up for Tuesday.... Oh, really?... Yes. Good-bye....
              Good-bye....”
            </p>
            <p className="text-lg">
              It hurt. It hurt like hell. But it didn't matter, if no one knew.
              If everything could go on as before. If the boys were safe.
            </p>
            <p className="text-lg">It did hurt.</p>
            <p className="text-lg">But it didn't matter.</p>
          </article>
        </section>
        <section id="finale-continued" className="space-y-8">
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg">
              <strong>TWO</strong>
            </p>
            <p className="text-lg">
              But it did matter. It mattered more than anything had ever
              mattered before.
            </p>
            <p className="text-lg">
              What bitterness! That the one fear, the one uncertainty, that she
              had felt, Brian's ache to go somewhere else, should have dwindled
              to a childish triviality! And with it the quality of the courage
              and resolution with which she had met it. From the visions and
              dangers which she now perceived she shrank away. For them she had
              no remedy or courage. Desperately she tried to shut out the
              knowledge from which had risen this turmoil, which she had no
              power to moderate or still, within her. And half succeeded.
            </p>
            <p className="text-lg">
              For, she reasoned, what was there, what had there been, to show
              that she was even half correct in her tormenting notion? Nothing.
              She had seen nothing, beard nothing. She had no facts or proofs.
              She was only making herself unutterably wretched by an unfounded
              suspicion. It had been a case of looking for trouble and finding
              it in good measure. Merely that.
            </p>
            <p className="text-lg">
              With this self-assurance that she had no real knowledge, she
              redoubled her efforts to drive out of her mind the distressing
              thought of faiths broken and trusts betrayed which every mental
              vision of Clare, of Brian, brought with them. She could not, she
              would not, go again through the tearing agony that lay just behind
              her.
            </p>
            <p className="text-lg">
              She must, she told herself, be fair. In all their married life she
              had had no slightest cause to suspect her husband of any
              infidelity, of any serious flirtation even. If—and she doubted
              it—he had had his hours of outside erratic conduct, they were
              unknown to her. Why begin now to assume them? And on nothing more
              concrete than an idea that had leapt into her mind because he had
              told her that he had invited a friend, a friend of hers, to a
              party in his own house. And at a time when she had been, it was
              likely, more asleep than awake. How could she without anything
              done or said, or left undone or unsaid, so easily believe him
              guilty? How be so ready to renounce all confidence in the worth of
              their life together?
            </p>
            <p className="text-lg">
              And if, perchance, there were some small something-well, what
              could it mean? Nothing. There were the boys. There was John
              Bellew. The thought of these three gave her some slight relief.
              But she did not look the future in the face. She wanted to feel
              nothing, to think nothing; simply to believe that it was all silly
              invention on her part. Yet she could not. Not quite.
            </p>
            <p className="text-lg">
              Christmas, with its unreality, its hectic rush, its false gaiety,
              came and went. Irene was thankful for the confused unrest of the
              season. Its irksomeness, its crowds, its inane and insincere
              repetitions of genialities, pushed between her and the
              contemplation of her growing unhappiness.
            </p>
            <p className="text-lg">
              She was thankful, too, for the continued absence of Clare, who,
              John Bellew having returned from a long stay in Canada, had
              withdrawn to that other life of hers, remote and inaccessible. But
              beating against the walle prison of Irene's thoughts was the
              shunned fancy that, though absent, Clare Kendry was still present,
              that she was close. Brian, too, had withdrawn. The house contained
              his outward self and his belongings. He came and went with his
              usual noiseless irregularity. He sat across from her at table. He
              slept in his room next to hers at night. But he was remote and
              inaccessible. No use pretending that he was happy, that things
              were the same as they had always been. He wasn't and they weren't.
              However, she assured herself, it needn't necessarily be because of
              anything that involved Clare. It was, it must be, another
              manifestation of the old longing.
            </p>
            <p className="text-lg">
              But she did wish it were spring, March, so that Clare would be
              sailing, out of her life and Brian's. Though she had come almost
              to believe that there was nothing but generous friendship between
              those two, she was very tired of Clare Kendry. She wanted to be
              free of her, and of her furtive comings and goings. If something
              would only happen, something that would make John Bellew decide on
              an earlier departure, or that would remove Clare. Anything. She
              didn't care what. Not even if it were that Clare's Margery were
              ill, or dying. Not even if Bellew should discover—
            </p>
            <p className="text-lg">
              She drew a quick, sharp breath. And for a long time sat staring
              down at the hands in her lap. Strange, she had not before realized
              how easily she could put Clare out of her life! She had only to
              tell John Bellew that his wife—No. Not that! But if he should
              somehow learn of these Harlem visits— Why should she hesitate? Why
              spare Clare?
            </p>
            <p className="text-lg">
              But she shrank away from the idea of telling that man, Clare
              Kendry's white husband, anything that would lead him to suspect
              that his wife was a Negro. Nor could she write it, or telephone
              it, or tell it to someone else who would tell him.
            </p>
            <p className="text-lg">
              She was caught between two allegiances, different, yet the same.
              Herself. Her race. Race! The thing that bound and suffocated her.
              Whatever steps she took, or if she took none at all, something
              would be crushed. A person or the race. Clare, herself, or the
              race. Or, it might be, all three. Nothing, she imagined, was ever
              more completely sardonic.
            </p>
            <p className="text-lg">
              Sitting alone in the quiet living-room in the pleasant fire-light,
              Irene Redfield wished, for the first time in her life, that she
              had not been born a Negro. For the first time she suffered and
              rebelled because she was unable to disregard the burden of race.
              It was, she cried silently, enough to suffer as a woman, an
              individual, on one's own account, without having to suffer for the
              race as well. It was a brutality, and undeserved. Surely, no other
              people so cursed as Ham's dark children.
            </p>
            <p className="text-lg">
              Nevertheless, her weakness, her shrinking, her own inability to
              compass the thing, did not prevent her from wishing fervently
              that, in some way with which she had no concern, John Bellew would
              discover, not that his wife had a touch of the tar-brush—Irene
              didn't want that—but that she was spending all the time that he
              was out of the city in black Harlem. Only that. It would be enough
              to rid her forever of Clare Kendry.
            </p>
          </article>
        </section>
        <section id="bellew-encounter" className="space-y-8">
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg">
              <strong>THREE</strong>
            </p>
            <p className="text-lg">
              As if in answer to her wish, the very next day Irene came face to
              face with Bellew.
            </p>
            <p className="text-lg">
              She had gone downtown with Felise Freeland to shop. The day was an
              exceptionally cold one, with a strong wind that had whipped a
              dusky red into Felise's smooth golden cheeks and driven moisture
              into Irene's soft brown eyes.
            </p>
            <p className="text-lg">
              Clinging to each other, with heads bent against the wind, they
              turned out of the Avenue into Fifty-seventh Street. A sudden
              bluster flung them around the corner with unexpected quickness and
              they collided with a man.
            </p>
            <p className="text-lg">
              "Pardon," Irene begged laughingly, and looked up into the face of
              Clare Kendry's husband.
            </p>
            <p className="text-lg">"Mrs. Redfield!"</p>
            <p className="text-lg">
              His hat came off. He held out his hand, smiling genially.
            </p>
            <p className="text-lg">
              But the smile faded at once. Surprise, incredulity, and—was it
              understanding? passed over his features.
            </p>
            <p className="text-lg">
              He had, Irene knew, become conscious of Felise, golden, with curly
              black Negro hair, whose arm was still linked in her own. She was
              sure, now, of the understanding in his face, as he looked at her
              again and then back at Felise. And displeasure.
            </p>
            <p className="text-lg">
              He didn't, however, withdraw his outstretched hand. Not at once.
            </p>
            <p className="text-lg">
              But Irene didn't take it. Instinctively, in the first glance of
              recognition, her face had become a mask. Now she turned on him a
              totally uncomprehending look, a bit questioning. Seeing that he
              still stood with hand outstretched, she gave him the cool
              appraising stare which she reserved for mashers, and drew Felise
              on.
            </p>
            <p className="text-lg">
              Felise drawled: "Aha! Been 'passing,' have you? Well, I've queered
              that."
            </p>
            <p className="text-lg">"Yes, I'm afraid you have."</p>
            <p className="text-lg">
              "Why, Irene Redfield! You sound as if you cared terribly. I'm
              sorry."
            </p>
            <p className="text-lg">
              "I do, but not for the reason you think. I don't believe I've ever
              gone native in my life except for the sake of convenience,
              restaurants, theatre tickets, and things like that. Never socially
              I mean, except once. You've just passed the only person that I've
              ever met disguised as a white woman."
            </p>
            <p className="text-lg">
              "Awfully sorry. Be sure your sin will find you out and all that.
              Tell me about it."
            </p>
            <p className="text-lg">
              "I'd like to. It would amuse you. But I can't."
            </p>
            <p className="text-lg">
              Felise's laughter was as languidly nonchalant as her cool voice.
              "Can it possible that the honest Irene has— Oh, do look at that
              coat! There. The red one. Isn't it a dream?"
            </p>
            <p className="text-lg">
              Irene was thinking: "I had my chance and didn't take it. I had
              only to speak and to introduce him to Felise with the casual
              remark that he was Clare's husband. Only that. Fool. Fool." That
              instinctive loyalty to a race. Why couldn't she get free of it?
              Why should it include Clare? Clare, who'd shown little enough
              consideration for her, and hers. What she felt was not so much
              resentment as a dull despair because she could not change herself
              in this respect, could not separate individuals from the race,
              herself from Clare Kendry.
            </p>
            <p className="text-lg">
              "Let's go home, Felise. I'm so tired I could drop."
            </p>
            <p className="text-lg">
              "Why, we haven't done half the things we planned."
            </p>
            <p className="text-lg">
              "I know, but it's too cold to be running all over town. But you
              stay down if you want to."
            </p>
            <p className="text-lg">
              "I think I'll do that, if you don't mind."
            </p>
            <p className="text-lg">
              And now another problem confronted Irene. She must tell Clare of
              this meeting. Warn her. But how? She hadn't seen her for days.
              Writing and telephoning were equally unsafe. And even if it was
              possible to get in touch with her, what good would it do? If
              Bellew hadn't concluded that he'd made a mistake, if he was
              certain of her identity-and he was nobody's fool-telling Clare
              wouldn't avert the results of the encounter. Besides, it was too
              late. Whatever was in store for Clare Kendry had already overtaken
              her.
            </p>
            <p className="text-lg">
              Irene was conscious of a feeling of relieved thankfulness at the
              thought that she was probably rid of Clare, and without having
              lifted a finger or uttered one word.
            </p>
            <p className="text-lg">
              But she did mean to tell Brian about meeting John BeIlew.
            </p>
            <p className="text-lg">
              But that, it seemed, was impossible. Strange. Something held her
              back. Each time she was on the verge of saying: "I ran into
              Clare's husband on the street downtown today. I'm sure he
              recognized me, and Felise was with me," she failed to speak. It
              sounded too much like the warning she wanted it to be. Not even in
              the presence of the boys at dinner could she make the bare
              statement.
            </p>
            <p className="text-lg">
              The evening dragged. At last she said good-night and went
              upstairs, the words unsaid. She thought: "Why didn't I tell him?
              Why didn't I? If trouble comes from this, I'll never forgive
              myself. I'll tell him when he comes up."
            </p>
            <p className="text-lg">
              She took up a book, but she could not read, so oppressed was she
              by a nameless foreboding.
            </p>
            <p className="text-lg">
              What if Bellew should divorce Clare? Could he? There was the
              Rhinelander case. But in France, in Paris, such things were very
              easy. If he divorced her- If Clare were free- But of all the
              things that could happen, that was the one she did not want. She
              must get her mind away from that possibility. She must.
            </p>
            <p className="text-lg">
              Then came a thought which she tried to drive away. If Clare should
              die! Then— Oh, it was vile! To think, yes, to wish that! She felt
              faint and sick. But the thought stayed with her. She could not get
              rid of it.
            </p>
            <p className="text-lg">
              She heard the outer door open. Close. Brian had gone out. She
              turned her face into her pillow to cry. But no tears came.
            </p>
            <p className="text-lg">
              She lay there awake, thinking of things past. Of her courtship and
              marriage and Junior's -birth. Of the time they had bought the
              house in which they had lived so long and so happily. Of the time
              Ted had passed his pneumonia crisis and they knew he would live.
              And of other sweet painful memories that would never come again.
            </p>
            <p className="text-lg">
              Above everything else she had wanted, had striven, to keep
              undisturbed the pleasant routine of her life. And now Clare Kendry
              had come into it, and with her the menace of impermanence.
            </p>
            <p className="text-lg">
              "Dear God," she prayed, "make March come quickly."
            </p>
            <p className="text-lg">By and by she slept.</p>
          </article>
        </section>
        <section id="snowstorm" className="space-y-8">
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg">
              <strong>FOUR</strong>
            </p>
            <p className="text-lg">
              The next morning brought with it a snowstorm that lasted
              throughout the day.
            </p>
            <p className="text-lg">
              After a breakfast, which had been eaten almost in silence and
              which she was relieved to have done with, Irene Redfield lingered
              for a little while in the downstairs hall, looking out at the soft
              flakes fluttering down. She was watching them immediately fill
              some ugly irregular gaps left by the feet of hurrying pedestrians
              when Zulena came to her, saying: "The telephone, Mrs. Redfield.
              It's Mrs. Bellew."
            </p>
            <p className="text-lg">"Take the message, Zulena, please."</p>
            <p className="text-lg">
              Though she continued to stare out of the window, Irene saw nothing
              now, stabbed as she was by fear-and hope. Had anything happened
              between Clare and Bellew? And if so, what? And was she to be freed
              at last from the aching anxiety of the past weeks? Or was there to
              be more, and worse? She had a wrestling moment, in which it seemed
              that she must rush after Zulena and hear for herself what it was
              that Clare had to say. But she waited.
            </p>
            <p className="text-lg">
              Zulena, when she came back, said: "She says, ma'am, that she'll be
              able to go to Mrs. Freeland's tonight. She'll be here some time
              between eight and nine."
            </p>
            <p className="text-lg">"Thank you, Zulena."</p>
            <p className="text-lg">The day dragged on to its end.</p>
            <p className="text-lg">
              At dinner Brian spoke bitterly of a lynching that he had been
              reading about in the evening paper.
            </p>
            <p className="text-lg">
              "Dad, why is it that they only lynch coloured people?" Ted asked.
            </p>
            <p className="text-lg">"Because they hate 'em, son."</p>
            <p className="text-lg">
              "Brian!" Irene's voice was a plea and a rebuke.
            </p>
            <p className="text-lg">Ted said: "Oh! And why do they hate 'em?"</p>
            <p className="text-lg">"Because they are afraid of them."</p>
            <p className="text-lg">"But what makes them afraid of 'em?"</p>
            <p className="text-lg">"Because—"</p>
            <p className="text-lg">"Brian!"</p>
            <p className="text-lg">
              "It seems, son, that is a subject we can't go into at the moment
              without distressing the ladies of our family," he told the boy
              with mock seriousness, "but we'll take it up some time when we're
              alone together."
            </p>
            <p className="text-lg">
              Ted nodded in his engaging grave way. "I see. Maybe we can talk
              about it tomorrow on the way to school."
            </p>
            <p className="text-lg">"That'll be fine."</p>
            <p className="text-lg">"Brian!"</p>
            <p className="text-lg">
              "Mother," Junior remarked, "that's the third time you've said
              'Brian' like that."
            </p>
            <p className="text-lg">
              "But not the last, Junior, never you fear," his father told him.
            </p>
            <p className="text-lg">
              After the boys had gone up to their own floor, Irene said suavely:
              "I do wish, Brian, that you wouldn't talk about lynching before
              Ted and Junior. It was really inexcusable for you to bring up a
              thing like that at dinner. There'll be time enough for them to
              learn about such horrible things when they're older."
            </p>
            <p className="text-lg">
              "You're absolutely wrong! If, as you're so determined, they've got
              to live in this damned country, they'd better find out what sort
              of thing they're up against as soon as possible. The earlier they
              learn it, the better prepared they'll be."
            </p>
            <p className="text-lg">
              "I don't agree. I want their childhood to be happy and as free
              from the knowledge of such things as it possibly can be."
            </p>
            <p className="text-lg">
              "Very laudable," was Brian's sarcastic answer. "Very laudable
              indeed, all things considered. But can it?"
            </p>
            <p className="text-lg">
              "Certainly it can. If you'll only do your part."
            </p>
            <p className="text-lg">
              "Stuff! You know as well as I do, Irene, that it can't. What was
              the use of our trying to keep them from learning the word 'nigger'
              and its connotation? They found out, didn't they? And how? Because
              somebody called Junior a dirty nigger."
            </p>
            <p className="text-lg">
              "Just the same you're not to talk to them about the race problem.
              I won't have it."
            </p>
            <p className="text-lg">They glared at each other.</p>
            <p className="text-lg">
              "I tell you, Irene, they've got to know these things, and it might
              as well be now as later."
            </p>
            <p className="text-lg">
              "They do not!" she insisted, forcing back the tears of anger that
              were threatening to fall. Brian growled: "I can't understand how
              anybody as intelligent as you like to think you are can show
              evidences of such stupidity." He looked at her in a puzzled
              harassed way. "Stupid!" she cried. "Is it stupid to want my
              children to be happy?" Her lips were quivering.
            </p>
            <p className="text-lg">
              "At the expense of proper preparation for life and their future
              happiness, yes. And I'd feel I hadn't done my duty by them if I
              didn't give them some inkling of what's before them. It's the
              least I can do. I wanted to get them out of this hellish place
              years ago. You wouldn't let me. I gave up the idea, because you
              objected. Don't expect me to give up everything."
            </p>
            <p className="text-lg">
              Under the lash of his words she was silent. Before any answer came
              to her, he had turned and gone from the room.
            </p>
            <p className="text-lg">
              Sitting there alone in the forsaken dining-room, unconsciously
              pressing the hands lying in her lap, tightly together, she was
              seized by a convulsion of shivering. For, to her, there had been
              something ominous in the scene that she had just had with her
              husband. Over and over in her mind his last words: "Don't expect
              me to give up everything," repeated themselves. What had they
              meant? What could they mean? Clare Kendry?
            </p>
            <p className="text-lg">
              Surely, she was going mad with fear and suspicion. She must not
              work herself up. She must not! Where were all the self-control,
              the common sense, that she was so proud of? Now, if ever, was the
              time for it.
            </p>
            <p className="text-lg">
              Clare would soon be there. She must hurry or she would be late
              again, and those two would wait for her downstairs together, as
              they had done so often since that first time, which now seemed so
              long ago. Had it been really only last October? Why, she felt
              years, not months, older.
            </p>
            <p className="text-lg">
              Drearily she rose from her chair and went upstairs to set about
              the business of dressing to go out when she would far rather have
              remained at home. During the process she wondered, for the
              hundredth time, why she hadn't told Brian about herself and Felise
              running into Bellew the day before, and for the hundredth time she
              turned away from acknowledging to herself the real reason for
              keeping back the information.
            </p>
            <p className="text-lg">
              When Clare arrived, radiant in a shining red gown, Irene had not
              finished dressing. But her smile scarcely hesitated as she greeted
              her, saying: "I always seem to keep C. P. time, don't I? We hardly
              expected you to be able to come. Felise will be pleased. How nice
              you look."
            </p>
            <p className="text-lg">
              Clare kissed a bare shoulder, seeming not to notice a slight
              shrinking.
            </p>
            <p className="text-lg">
              "I hadn't an idea in the world, myself, that I'd be able to make
              it; but Jack had to run down to Philadelphia unexpectedly. So here
              I am."
            </p>
            <p className="text-lg">
              Irene looked up, a flood of speech on her lips. "Philadelphia.
              That's not very far, is it? Clare, I—?"
            </p>
            <p className="text-lg">
              She stopped, one of her hands clutching the side of her stool, the
              other lying clenched on the dressing-table. Why didn't she go on
              and tell Clare about meeting Bellew? Why couldn't she?
            </p>
            <p className="text-lg">
              But Clare didn't notice the unfinished sentence. She laughed and
              said lightly: "It's far enough for me. Anywhere, away from me, is
              far enough. I'm not particular."
            </p>
            <p className="text-lg">
              Irene passed a hand over her eyes to shut out the accusing face in
              the glass before her. With one corner of her mind she wondered how
              long she had looked like that, drawn and haggard and—yes,
              frightened. Or was it only imagination?
            </p>
            <p className="text-lg">
              "Clare," she asked, "have you ever seriously thought what it would
              mean if he should find you out?"
            </p>
            <p className="text-lg">"Yes."</p>
            <p className="text-lg">
              "Oh! You have! And what you'd do in that case?"
            </p>
            <p className="text-lg">
              "Yes." And having said it, Clare Kendry smiled quickly, a smile
              that came and went like a flash, leaving untouched the gravity of
              her face.
            </p>
            <p className="text-lg">
              That smile and the quiet resolution of that one word, "yes,"
              filled Irene with a primitive paralysing dread. Her hands were
              numb, her feet like ice, her heart like a stone weight. Even her
              tongue was like a heavy dying thing. There were long spaces
              between the words as she asked: "And what should you do?"
            </p>
            <p className="text-lg">
              Clare, who was sunk in a deep chair, her eyes far away, seemed
              wrapped in some pleasant impenetrable reflection. To Irene,
              sitting expectantly upright, it was an interminable time before
              she dragged herself back to the present to say calmly: "I'd do
              what I want to do more than anything else right now. I'd come up
              here to live. Harlem, I mean. Then I'd be able to do as I please,
              when I please."
            </p>
            <p className="text-lg">
              Irene leaned forward, cold and tense. "And what about Margery?"
              Her voice was a strained whisper.
            </p>
            <p className="text-lg">
              "Margery?" Clare repeated, letting her eyes flutter over Irene's
              concerned face. "Just this, 'Rene. If it wasn't for her, I'd do it
              anyway. She's all that holds me back. But if Jack finds out, if
              our marriage is broken, that lets me out. Doesn't it?"
            </p>
            <p className="text-lg">
              Her gentle resigned tone, her air of innocent candour, appeared,
              to her listener, spurious. A conviction that the words were
              intended as a warning took possession of Irene. She remembered
              that Clare Kendry had always seemed to know what other people were
              thinking. Her compressed lips grew firm and obdurate. Well, she
              wouldn't know this time.
            </p>
            <p className="text-lg">
              She said: "Do go downstairs and talk to Brian. He's got a mad on."
            </p>
            <p className="text-lg">
              Though she had determined that Clare should not get at her
              thoughts and fears, the words had sprung, unthought of, to her
              lips. It was as if they had come from some outer layer of
              callousness that had no relation to her tortured heart. And they
              had been, she realized, precisely the right words for her purpose.
            </p>
            <p className="text-lg">
              For as Clare got up and went out, she saw that that arrangement
              was as good as her first plan of keeping her waiting up there
              while she dressed—or better. She would only have hindered and
              rasped her. And what matter if those two spent one hour, more or
              less, alone together, one or many, now that everything had
              happened between them? Ah! The first time that she had allowed
              herself to admit to herself that everything had happened, had not
              forced herself to believe, to hope, that nothing irrevocable had
              been consummated! Well, it had happened. She knew it, and knew
              that she knew it.
            </p>
            <p className="text-lg">
              She was surprised that, having thought the thought, conceded the
              fact, she was no more hurt, cared no more, than during her
              previous frenzied endeavours to escape it. And this absence of
              acute, unbearable pain seemed to her unjust, as if she had been
              denied some exquisite solace of suffering which the full
              acknowledgment should have given her.
            </p>
            <p className="text-lg">
              Was it, perhaps, that she had endured all that a woman could
              endure of tormenting humiliation and fear? Or was it that she
              lacked the capacity for the acme of suffering? "No, no!" she
              denied fiercely. "I'm human like everybody else. It's just that
              I'm so tired, so worn out, I can't feel any more." But she did not
              really believe that.
            </p>
            <p className="text-lg">
              Security. Was it just a word? If not, then was it only by the
              sacrifice of other things, happiness, love, or some wild ecstasy
              that she had never known, that it could be obtained? And did too
              much striving, too much faith in safety and permanence, unfit one
              for these other things?
            </p>
            <p className="text-lg">
              Irene didn't know, couldn't decide, though for a long time she sat
              questioning and trying to understand. Yet all the while, in spite
              of her searchings and feeling of frustration, she was aware that,
              to her, security was the most important and desired thing in life.
              Not for any of the others, or for all of them, would she exchange
              it. She wanted only to be tranquil. Only, unmolested, to be
              allowed to direct for their own best good the lives of her sons
              and her husband.
            </p>
            <p className="text-lg">
              Now that she had relieved herself of what was almost like a guilty
              knowledge, admitted that which by some sixth sense she had long
              known, she could again reach out for plans. Could think again of
              ways to keep Brian by her side, and in New York. For she would not
              go to Brazil. She belonged in this land of rising towers. She was
              an American. She grew from this soil, and she would not be
              uprooted. Not even because of Clare Kendry, or a hundred Clare
              Kendrys.
            </p>
            <p className="text-lg">
              Brian, too, belonged here. His duty was to her and to his boys.
            </p>
            <p className="text-lg">
              Strange, that she couldn't now be sure that she had ever truly
              known love. Not even for Brian. He was her husband and the father
              of her sons. But was he anything more? Had she ever wanted or
              tried for more? In that hour she thought not.
            </p>
            <p className="text-lg">
              Nevertheless, she meant to keep him. Her freshly painted lips
              narrowed to a thin straight line. True, she had left off trying to
              believe that he and Clare loved and yet did not love, but she
              still intended to hold fast to the outer shell of her marriage, to
              keep her life fixed, certain. Brought to the edge of distasteful
              reality, her fastidious nature did not recoil.
            </p>
            <p className="text-lg">
              Better, far better, to share him than to lose him completely. Oh,
              she could close her eyes, if need be. She could bear it. She could
              bear anything. And there was March ahead. March and the departure
              of Clare.
            </p>
            <p className="text-lg">
              Horribly clear, she could now see the reason for her instinct to
              withhold-omit, rather-her news of the encounter with Bellew. If
              Clare was freed, anything might happen.
            </p>
            <p className="text-lg">
              She paused in her dressing, seeing with perfect clearness that
              dark truth which she had from that first October afternoon felt
              about Clare Kendry and of which Clare herself had once warned
              her—that she got the things she wanted because she met the great
              condition of conquest, sacrifice. If she wanted Brian, Clare
              wouldn't revolt from the lack of money or place. It was as she had
              said, only Margery kept her from throwing all that away. And if
              things were taken out of her hands— Even if she was only alarmed,
              only suspected that such a thing was about to occur, anything
              might happen. Anything.
            </p>
            <p className="text-lg">
              No! At all costs, Clare was not to know of that meeting with
              Bellew. Nor was Brian. It would only weaken her own power to keep
              him.
            </p>
            <p className="text-lg">
              They would never know from her that he was on his way to
              suspecting the truth about his wife. And she would do anything,
              risk anything, to prevent him from finding out that truth. How
              fortunate that she had obeyed her instinct and omitted to
              recognize Bellew!
            </p>
          </article>
        </section>
        <section id="final-confrontation" className="space-y-8">
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg">
              <strong>FIVE</strong>
            </p>
            <p className="text-lg">
              "Ever go up to the sixth floor, Clare?" Brian asked as he stopped
              the car and got out to open the door for them.
            </p>
            <p className="text-lg">
              "Why, of course! We're on the seventeenth."
            </p>
            <p className="text-lg">
              "I mean, did you ever go up by niggerpower?"
            </p>
            <p className="text-lg">
              "That's good!" Clare laughed. "Ask 'Rene. My father was a janitor,
              you know, in the good old days before every ramshackle flat had
              its elevator. But you can't mean we've got to walk up? Not here!"
            </p>
            <p className="text-lg">
              "Yes, here. And Felise lives at the very top," Irene told her.
            </p>
            <p className="text-lg">"What on earth for?"</p>
            <p className="text-lg">
              "I believe she claims it discourages the casual visitor."
            </p>
            <p className="text-lg">
              "And she's probably right. Hard on herself, though."
            </p>
            <p className="text-lg">
              Brian said "Yes, a bit. But she says she'd rather be dead than
              bored."
            </p>
            <p className="text-lg">
              "Oh, a garden! And how lovely with that undisturbed snow!"
            </p>
            <p className="text-lg">
              "Yes, isn't it? But keep to the walk with those foolish thin
              shoes. You too, Irene."
            </p>
            <p className="text-lg">
              Irene. walked beside them on the cleared cement path that split
              the whiteness of the courtyard garden. She felt a something in the
              air, something that had been between those two and would be again.
              It was like a live thing pressing against her. In a quick furtive
              glance she saw Clare clinging to Brian's other arm. She was
              looking at him with that provocative upward glance of hers, and
              his eyes were fastened on her face with what seemed to Irene an
              expression of wistful eagerness.
            </p>
            <p className="text-lg">
              "It's this entrance, I believe," she informed them in quite her
              ordinary voice.
            </p>
            <p className="text-lg">
              "Mind," Brian told Clare, "you don't fall by the wayside before
              the fourth floor. They absolutely refuse to carry anyone up more
              than the last two flights."
            </p>
            <p className="text-lg">"Don't be silly!" Irene snapped.</p>
            <p className="text-lg">The party began gaily.</p>
            <p className="text-lg">
              Dave Freeland was at his best, brilliant, crystal clear, and
              sparkling. Felise, too, was amusing, and not so sarcastic as
              usual, because she liked the dozen or so guests that dotted the
              long, untidy living-room. Brian was witty, though, Irene noted,
              his remarks were somewhat more barbed than was customary even with
              him. And there was Ralph Hazelton, throwing nonsensical shining
              things into the pool of talk, which the others, even Clare, picked
              up and flung back with fresh adornment.
            </p>
            <p className="text-lg">
              Only Irene wasn't merry. She sat almost silent, smiling now and
              then, that she might appear amused.
            </p>
            <p className="text-lg">
              "What's the matter, Irene?" someone asked. "Taken a vow never to
              laugh, or something? You're as sober as a judge."
            </p>
            <p className="text-lg">
              "No. It's simply that the rest of you are so clever that I'm
              speechless, absolutely stunned."
            </p>
            <p className="text-lg">
              "No wonder," Dave Freeland remarked, "that you're on the verge of
              tears. You haven't a drink. What'll you take?"
            </p>
            <p className="text-lg">
              "Thanks. If I must take something, make it a glass of ginger-ale
              and three drops of Scotch. The Scotch first, please. Then the ice,
              then the ginger ale."
            </p>
            <p className="text-lg">
              "Heavens! Don't attempt to mix that yourself, Dave darling. Have
              the butler in," Felise mocked.
            </p>
            <p className="text-lg">
              "Yes, do. And the footman." Irene laughed a little, then said: "It
              seems dreadfully warm in here. Mind if I open this window?" With
              that she pushed open. one of the long casement-windows of which
              the Freelands were so proud.
            </p>
            <p className="text-lg">
              It had stopped snowing some two or three hours back. The moon was
              just rising, and far behind the tall buildings a few stars were
              creeping out. Irene finished her cigarette and threw it out,
              watching the tiny spark drop slowly down to the white ground
              below. Someone in the room had turned on the phonograph. Or was it
              the radio? She didn't know which she disliked more. And nobody was
              listening to its blare. The talking, the laughter never for a
              minute ceased. Why must they have more noise?
            </p>
            <p className="text-lg">
              Dave came with her drink. "You ought not," he told her, "to stand
              there like that. You'll take cold. Come along and talk to me, or
              listen to me gabble." Taking her arm, he led her across the room.
              They had just found seats when the door-bell rang and Felise
              called over to him to go and answer it.
            </p>
            <p className="text-lg">
              In the next moment Irene heard his voice in the hall, carelessly
              polite: "Your wife? Sorry. I'm afraid you're wrong. Perhaps next–"
            </p>
            <p className="text-lg">
              Then the roar of John Bellew's voice above all the other noises of
              the room: "I'm not wrong! I've been to the Redfields and I know
              she's with them. You'd better stand out of my way and save
              yourself trouble in the end."
            </p>
            <p className="text-lg">
              "What is it, Dave?" Felise ran out to the door. And so did Brian.
              Irene heard him saying: "I'm Redfield. What the devil's the matter
              with you?"
            </p>
            <p className="text-lg">
              But Bellew didn't heed him. He pushed past them all into the room
              and strode towards Clare. They all looked at her as she got up
              from her chair, backing a little from his approach.
            </p>
            <p className="text-lg">
              "So you're a nigger, a damned dirty nigger!" His voice was a snarl
              and a moan, an expression of rage and of pain.
            </p>
            <p className="text-lg">
              Everything was in confusion. The men had sprung forward. Felise
              had leapt between them and Bellew. She said quickly: "Careful.
              You're the only white man here." And the silver chill of her
              voice, as well as her words, was a warning.
            </p>
            <p className="text-lg">
              Clare stood at the window, as composed as if everyone were not
              staring at her in curiosity and wonder, as if the whole structure
              of her life were not lying in fragments before her. She seemed
              unaware of any danger or uncaring. There was even a faint smile on
              her full, red lips, and in her shining eyes.
            </p>
            <p className="text-lg">
              It was that smile that maddened Irene. She ran across the room,
              her terror tinged with ferocity, and laid a hand on Clare's bare
              arm. One thought possessed her. She couldn't have Clare Kendry
              cast aside by Bellew. She couldn't have her free.
            </p>
            <p className="text-lg">
              Before them stood John Bellew, speechless now in his hurt and
              anger. Beyond them the little huddle of other people, and Brian
              stepping out from among them.
            </p>
            <p className="text-lg">
              What happened next, Irene Redfield never afterwards allowed
              herself to remember. Never clearly.
            </p>
            <p className="text-lg">
              One moment Clare had been there, a vital glowing thing, like a
              flame of red and gold. The next she was gone.
            </p>
            <p className="text-lg">
              There was a gasp of horror, and above it a sound not quite human,
              like a beast in agony. "Nig! My God! Nig!"
            </p>
            <p className="text-lg">
              A frenzied rush of feet down long flights of stairs. The slamming
              of distant doors. Voices.
            </p>
            <p className="text-lg">
              Irene stayed behind. She sat down and remained quite still,
              staring at a ridiculous Japanese print on the wall across the
              room.
            </p>
            <p className="text-lg">
              Gone! The soft white face, the bright hair, the disturbing scarlet
              mouth, the dreaming eyes, the caressing smile, the whole torturing
              loveliness that had been Clare Kendry. That beauty that had torn
              at Irene's placid life. Gone! The mocking daring, the gallantry of
              her pose, the ringing bells of her laughter.
            </p>
            <p className="text-lg">
              Irene wasn't sorry. She was amazed, incredulous almost. What would
              the others think? That Clare had fallen? That she had deliberately
              leaned backward? Certainly one or the other. Not—
            </p>
            <p className="text-lg">
              But she mustn't, she warned herself, think of that. She was too
              tired, and too shocked. And, indeed, both were true. She was
              utterly weary, and she was violently staggered. But her thoughts
              reeled on. If only she could be as free of mental as she was of
              bodily vigour; could only put from her memory the vision of her
              hand on Clare's arm!
            </p>
            <p className="text-lg">
              "It was an accident, a terrible accident," she muttered fiercely.
              "It was."
            </p>
            <p className="text-lg">
              People were coming up the stairs. Through the still open door
              their steps and talk sounded nearer, nearer.
            </p>
            <p className="text-lg">
              Quickly she stood up and went noiselessly into the bedroom and
              closed the door softly behind her.
            </p>
            <p className="text-lg">
              Her thoughts raced. Ought she to have stayed? Should she go back
              out there to them? But there would be questions. She hadn't
              thought of them, of afterwards, of this. She had thought of
              nothing in that sudden moment of action.
            </p>
            <p className="text-lg">
              It was cold. Icy chills ran up her spine and over her bare neck
              and shoulders.
            </p>
            <p className="text-lg">
              In the room outside there were voices. Dave Freeland's and others
              that she did not recognize.
            </p>
            <p className="text-lg">
              Should she put on her coat? Felise had rushed down without any
              wrap. So had all the others. So had Brian. Brian! He mustn't take
              cold. She took up his coat and left her own. At the door she
              paused for a moment, listening fearfully. She heard nothing. No
              voices. No footsteps. Very slowly she opened the door. The room
              was empty. She went out.
            </p>
            <p className="text-lg">
              In the hall below she heard dimly the sound of feet going down the
              steps, of a door being opened and closed, and of voices far away.
            </p>
            <p className="text-lg">
              Down, down, down, she went, Brian's great coat clutched in her
              shivering arms and trailing a little on each step behind her.
            </p>
            <p className="text-lg">
              What was she to say to them when at last she had finished going
              down those endless stairs? She should have rushed out when they
              did. What reason could she give for her dallying behind? Even she
              didn't know why she had done that. And what else would she be
              asked? There had been her hand reaching out towards Clare. What
              about that?
            </p>
            <p className="text-lg">
              In the midst of her wonderings and questionings came a thought so
              terrifying, so horrible, that she had had to grasp hold of the
              banister to save herself from pitching downwards. A cold
              perspiration drenched her shaking body. Her breath came short in
              sharp and painful gasps.
            </p>
            <p className="text-lg">What if Clare was not dead?</p>
            <p className="text-lg">
              She felt nauseated, as much at the idea of the glorious body
              mutilated as from fear. How she managed to make the rest of the
              journey without fainting she never knew.
            </p>
            <p className="text-lg">
              But at last she was down. Just at the bottom she came on the
              others, surrounded by a little circle of strangers. They were all
              speaking in whispers, or in the awed, discreetly lowered tones
              adapted to the presence of disaster. In the first instant she
              wanted to turn and rush back up the way she had come. Then a calm
              desperation came over her. She braced herself, physically and
              mentally.
            </p>
            <p className="text-lg">
              "Here's Irene now," Dave Freeland announced, and told her that,
              having only just missed her, they had concluded that she had
              fainted or something like that, and were on the way to find out
              about her. Felise, she saw, was holding on to his arm, all the
              insolent nonchalance gone out of her, and the golden brown of her
              handsome face changed to a queer mauve colour.
            </p>
            <p className="text-lg">
              Irene made no indication that she had heard Freeland, but went
              straight to Brian. His face looked aged and altered, and his lips
              were purple and trembling. She had a great longing to comfort him,
              to charm away his suffering and horror. But she was helpless,
              having so completely lost control of his mind and heart.
            </p>
            <p className="text-lg">She stammered: "Is she—is she—?"</p>
            <p className="text-lg">
              It was Felise who answered. "Instantly, we think."
            </p>
            <p className="text-lg">
              Irene struggled against the sob of thankfulness that rose in her
              throat. Choked down, it turned to a whimper, like a hurt child's.
              Someone laid a hand on her shoulder in a soothing gesture. Brian
              wrapped his coat about her. She began to cry rackingly, her entire
              body heaving with convulsive sobs. He made a slight perfunctory
              attempt to comfort her.
            </p>
            <p className="text-lg">
              "There, there, Irene. You mustn't. You'll make yourself sick.
              She's—" His voice broke suddenly.
            </p>
            <p className="text-lg">
              As from a long distance she heard Ralph Hazelton's voice saying:
              "I was looking right at her. She just tumbled over and was gone
              before you could say 'Jack Robinson.' Fainted, I guess. Lord! It
              was quick. Quickest thing I ever saw in all my life."
            </p>
            <p className="text-lg">
              "It's impossible, I tell you! Absolutely impossible!"
            </p>
            <p className="text-lg">
              It was Brian who spoke in that frenzied hoarse voice, which Irene
              had never heard before. Her knees quaked under her. Dave Freeland
              said: "Just a minute, Brian. Irene was there beside her. Let's
              hear what she has to say."
            </p>
            <p className="text-lg">
              She had a moment of stark craven fear. "Oh God," she thought,
              prayed, "help me."
            </p>
            <p className="text-lg">
              A strange man, official and authoritative, addressed her. "You're
              sure she fell? Her husband didn't give her a shove or anything
              like that, as Dr. Redfield seems to think?"
            </p>
            <p className="text-lg">
              For the first time she was aware that Bellew was not in the little
              group shivering in the small hallway. What did that mean? As she
              began to work it out in her numbed mind, she was shaken with
              another hideous trembling. Not that! Oh, not that!
            </p>
            <p className="text-lg">
              "No, no!" she protested. "I'm quite certain that he didn't. I was
              there, too. As close as he was. She just fell, before anybody
              could stop her. I—"
            </p>
            <p className="text-lg">
              Her quaking knees gave way under her. She moaned and sank down,
              moaned again. Through the great heaviness that submerged and
              drowned her she was dimly conscious of strong arms lifting her up.
              Then everything was dark.
            </p>
            <p className="text-lg">
              Centuries after, she heard the strange man saying: "Death by
              misadventure, I'm inclined to believe. Let's go up and have
              another look at that window."
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
