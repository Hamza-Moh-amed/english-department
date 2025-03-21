import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "The Body Keeps The Score",
  description:
    "A page based on 'The Body Keeps The Score' that explores trauma, PTSD, and the impact of traumatic experiences on war veterans.",
};

export default function TheBodyKeepsTheScore() {
  const navLinks: NavLink[] = [
    { href: "#youtube", label: "What is Trauma?" },
    { href: "#article", label: "Article" },
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
          <PageTitle
            title="The Body Keeps The Score"
            author="Bessel van der Kolk"
          />

          {/* YouTube Embed Section */}
          <section id="youtube" className="section-content">
            <h2 className="section-title">What is trauma?</h2>
            <div className="video-container">
              <div className="video-container-2">
                <iframe
                  src="https://www.youtube.com/embed/BJfmfkDQb14?si=f7EYPJS8CgquEXLe"
                  title="Mic Check by Suheir Hammad"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-frame"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Article Section */}
          <section id="article" className="section-content">
            <h2 className="section-title">Article</h2>
            <article className="article-block">
              <p className="article-subtitle">
                Chapter 1: “Lessons from Vietnam Veterans”
              </p>
              <p className="article-paragraph">
                I became what I am today at the age of twelve, on a frigid
                overcast day in the winter of 1975. . . .
              </p>
              <p className="article-paragraph">
                That was a long time ago, but it's wrong what they say about the
                past Looking back now, I realize I have been peeking into that
                deserted alley for the last twenty-six years.
                <br />
                -Khaled Hosseini, The Kite Runner
              </p>
              <p className="article-paragraph">
                Some people's lives seem to flow in a narrative; mine had many
                stops and starts. That's what trauma does. It interrupts the
                plot It just happens, and then life goes on. No one prepares you
                for it.
                <br />
                -Jessica Stern, Denial: A Memoir of Terror
              </p>
              <p className="article-paragraph">
                The Tuesday after the Fourth of July weekend, 1978, was my first
                day as a staff psychiatrist at the Boston Veterans
                Administration Clinic. As I was hanging a reproduction of my
                favorite Breughel painting, "The Blind Leading the Blind," on
                the wall of my new office, I heard a commotion in the reception
                area down the hall. A moment later a large, disheveled man in a
                stained three-piece suit, carrying a copy of Soldier of Fortune
                magazine under his arm, burst through my door. He was so
                agitated and so clearly hungover that I wondered how I could
                possibly help this hulking man. I asked him to take a seat, and
                tell me what I could do for him.
              </p>
              <p className="article-paragraph">
                His name was Tom. Ten years earlier he had been in the Marines,
                doing his service in Vietnam. He had spent the holiday weekend
                holed up in his downtown-Boston law office, drinking and looking
                at old photographs, rather than with his family. He knew from
                previous years' experience that the noise, the fireworks, the
                heat, and the picnic in his sister's backyard against the
                backdrop of dense early-summer foliage, all of which reminded
                him of Vietnam, would drive him crazy. When he got upset he was
                afraid to be around his family because he behaved like a monster
                with his wife and two young boys. The noise of his kids made him
                so agitated that he would storm out of the house to keep himself
                from hurting them. Only drinking himself into oblivion or riding
                his Harley-Davidson at dangerously high speeds helped him to
                calm down.
              </p>
              <p className="article-paragraph">
                Nighttime offered no relief—his sleep was constantly interrupted
                by nightmares about an ambush in a rice paddy back in 'Nam, in
                which all the members of his platoon were killed or wounded. He
                also had terrifying flashbacks in which he saw dead Vietnamese
                children. The nightmares were so horrible that he dreaded
                falling asleep and he often stayed up for most of the night,
                drinking. In the morning his wife would find him passed out on
                the living room couch, and she and the boys had to tiptoe around
                him while she made them breakfast before taking them to school.
              </p>
              <p className="article-paragraph">
                Filling me in on his background, Tom said that he had graduated
                from high school in 1965, the valedictorian of his class. In
                line with his family tradition of military service he enlisted
                in the Marine Corps immediately after graduation. His father had
                served in World War II in General Patton's army, and Tom never
                questioned his father's expectations. Athletic, intelligent, and
                an obvious leader, Tom felt powerful and effective after
                finishing basic training, a member of a team that was prepared
                for just about anything. In Vietnam he quickly became a platoon
                leader, in charge of eight other Marines. Surviving slogging
                through the mud while being strafed by machine-gun fire can
                leave people feeling pretty good about themselves—and their
                comrades.
              </p>
              <p className="article-paragraph">
                At the end of his tour of duty Tom was honorably discharged, and
                all he wanted was to put Vietnam behind him. Outwardly that's
                exactly what he did. He attended college on the GI Bill,
                graduated from law school, married his high school sweetheart,
                and had two sons. Tom was upset by how difficult it was to feel
                any real affection for his wife, even though her letters had
                kept him alive in the madness of the jungle. Tom went through
                the motions of living a normal life, hoping that by faking it he
                would learn to become his old self again. He now had a thriving
                law practice and a picture-perfect family, but he sensed he
                wasn't normal; he felt dead inside.
              </p>
              <p className="article-paragraph">
                Although Tom was the first veteran I had ever encountered on a
                professional basis, many aspects of his story were familiar to
                me. I grew up in postwar Holland, playing in bombed-out
                buildings, the son of a man who had been such an outspoken
                opponent of the Nazis that he had been sent to an internment
                camp. My father never talked about his war experiences, but he
                was given to outbursts of explosive rage that stunned me as a
                little boy. How could the man I heard quietly going down the
                stairs every morning to pray and read the Bible while the rest
                of the family slept have such a terrifying temper? How could
                someone whose life was devoted to the pursuit of social justice
                be so filled with anger? I witnessed the same puzzling behavior
                in my uncle, who had been captured by the Japanese in the Dutch
                East Indies (now Indonesia) and sent as a slave laborer to
                Burma, where he worked on the famous bridge over the river Kwai.
                He also rarely mentioned the war, and he, too, often erupted
                into uncontrollable rages.
              </p>
              <p className="article-paragraph">
                As I listened to Tom, I wondered if my uncle and my father had
                had nightmares and flashbacks—if they, too, had felt
                disconnected from their loved ones and unable to find any real
                pleasure in their lives. Somewhere in the back of my mind there
                must also have been my memories of my frightened—and often
                frightening—mother, whose own childhood trauma was sometimes
                alluded to and, I now believe, was frequently reenacted. She had
                the unnerving habit of fainting when I asked her what her life
                was like as a little girl and then blaming me for making her so
                upset.
              </p>
              <p className="article-paragraph">
                Reassured by my obvious interest, Tom settled down to tell me
                just how scared and confused he was. He was afraid that he was
                becoming just like his father, who was always angry and rarely
                talked with his children—except to compare them unfavorably with
                his comrades who had lost their lives around Christmas 1944,
                during the Battle of the Bulge.
              </p>
              <p className="article-paragraph">
                As the session was drawing to a close, I did what doctors
                typically do: I focused on the one part of Tom's story that I
                thought I understood—his nightmares. As a medical student I had
                worked in a sleep laboratory, observing people's sleep/dream
                cycles, and had assisted in writing some articles about
                nightmares. I had also participated in some early research on
                the beneficial effects of the psychoactive drugs that were just
                coming into use in the 1970s. So, while I lacked a true grasp of
                the scope of Tom's problems, the nightmares were something I
                could relate to, and as an enthusiastic believer in better
                living through chemistry, I prescribed a drug that we had found
                to be effective in reducing the incidence and severity of
                nightmares. I scheduled Tom for a follow-up visit two weeks
                later.
              </p>
              <p className="article-paragraph">
                When he returned for his appointment, I eagerly asked Tom how
                the medicines had worked. He told me he hadn't taken any of the
                pills. Trying to conceal my irritation, I asked him why. "I
                realized that if I take the pills and the nightmares go away,"
                he replied, "I will have abandoned my friends, and their deaths
                will have been in vain. I need to be a living memorial to my
                friends who died in Vietnam."
              </p>
              <p className="article-paragraph">
                I was stunned: Tom's loyalty to the dead was keeping him from
                living his own life, just as his father's devotion to his
                friends had kept him from living. Both father's and son's
                experiences on the battlefield had rendered the rest of their
                lives irrelevant. How had that happened, and what could we do
                about it? That morning I realized I would probably spend the
                rest of my professional life trying to unravel the mysteries of
                trauma. How do horrific experiences cause people to become
                hopelessly stuck in the past? What happens in people's minds and
                brains that keeps them frozen, trapped in a place they
                desperately wish to escape? Why did this man's war not come to
                an end in February 1969, when his parents embraced him at
                Boston's Logan International Airport after his long flight back
                from Da Nang?
              </p>
              <p className="article-paragraph">
                Tom's need to live out his life as a memorial to his comrades
                taught me that he was suffering from a condition much more
                complex than simply having bad memories or damaged brain
                chemistry—or altered fear circuits in the brain. Before the
                ambush in the rice paddy, Tom had been a devoted and loyal
                friend, someone who enjoyed life, with many interests and
                pleasures. In one terrifying moment, trauma had transformed
                everything.
              </p>
              <p className="article-paragraph">
                During my time at the VA I got to know many men who responded
                similarly. Faced with even minor frustrations, our veterans
                often flew instantly into extreme rages. The public areas of the
                clinic were pockmarked with the impacts of their fists on the
                drywall, and security was kept constantly busy protecting claims
                agents and receptionists from enraged veterans. Of course, their
                behavior scared us, but I also was intrigued.
              </p>
              <p className="article-paragraph">
                At home my wife and I were coping with similar problems in our
                toddlers, who regularly threw temper tantrums when told to eat
                their spinach or to put on warm socks. Why was it, then, that I
                was utterly unconcerned about my kids' immature behavior but
                deeply worried by what was going on with the vets (aside from
                their size, of course, which gave them the potential to inflict
                much more harm than my two-footers at home)? The reason was that
                I felt perfectly confident that, with proper care, my kids would
                gradually learn to deal with frustrations and disappointments,
                but I was skeptical that I would be able to help my veterans
                reacquire the skills of self-control and self-regulation that
                they had lost in the war.
              </p>
              <p className="article-paragraph">
                Unfortunately, nothing in my psychiatric training had prepared
                me to deal with any of the challenges that Tom and his fellow
                veterans presented. I went down to the medical library to look
                for books on war neurosis, shell shock, battle fatigue, or any
                other term or diagnosis I could think of that might shed light
                on my patients. To my surprise the library at the VA didn't have
                a single book about any of these conditions. Five years after
                the last American soldier left Vietnam, the issue of wartime
                trauma was still not on anybody's agenda. Finally, in the
                Countway Library at Harvard Medical School, I discovered The
                Traumatic Neuroses of War, which had been published in 1941 by a
                psychiatrist named Abram Kardiner. It described Kardiner's
                observations of World War I veterans and had been released in
                anticipation of the flood of shell-shocked soldiers expected to
                be casualties of World War II.<sup>1</sup>
              </p>
              <p className="article-paragraph">
                Kardiner reported the same phenomena I was seeing: After the war
                his patients were overtaken by a sense of futility; they became
                withdrawn and detached, even if they had functioned well before.
                What Kardiner called "traumatic neuroses," today we call
                posttraumatic stress disorder—PTSD. Kardiner noted that
                sufferers from traumatic neuroses develop a chronic vigilance
                for and sensitivity to threat. His summation especially caught
                my eye: "The nucleus of the neurosis is physioneurosis."
                <sup>2</sup> In other words, posttraumatic stress isn't "all in
                one's head," as some people supposed, but has a physiological
                basis. Kardiner understood even then that the symptoms have
                their origin in the entire body's response to the original
                trauma.
              </p>
              <p className="article-paragraph">
                Kardiner's description corroborated my own observations, which
                was reassuring, but it provided me with little guidance on how
                to help the veterans. The lack of literature on the topic was a
                handicap, but my great teacher, Elvin Semrad, had taught us to
                be skeptical about textbooks. We had only one real textbook, he
                said: our patients. We should trust only what we could learn
                from them—and from our own experience. This sounds so simple,
                but even as Semrad pushed us to rely upon self-knowledge, he
                also warned us how difficult that process really is, since human
                beings are experts in wishful thinking and obscuring the truth.
                I remember him saying: "The greatest sources of our suffering
                are the lies we tell ourselves." Working at the VA I soon
                discovered how excruciating it can be to face reality. This was
                true both for my patients and for myself.
              </p>
              <p className="article-paragraph">
                We don't really want to know what soldiers go through in combat.
                We do not really want to know how many children are being
                molested and abused in our own society or how many
                couples—almost a third, as it turns out—engage in violence at
                some point during their relationship. We want to think of
                families as safe havens in a heartless world and of our own
                country as populated by enlightened, civilized people. We prefer
                to believe that cruelty occurs only in faraway places like
                Darfur or the Congo. It is hard enough for observers to bear
                witness to pain. Is it any wonder, then, that the traumatized
                individuals themselves cannot tolerate remembering it and that
                they often resort to using drugs, alcohol, or self-mutilation to
                block out their unbearable knowledge?
              </p>
              <p className="article-paragraph">
                Tom and his fellow veterans became my first teachers in my quest
                to understand how lives are shattered by overwhelming
                experiences, and in figuring out how to enable them to feel
                fully alive again.
              </p>
              <p className="article-subtitle">TRAUMA AND THE LOSS OF SELF</p>
              <p className="article-paragraph">
                The first study I did at the VA started with systematically
                asking veterans what had happened to them in Vietnam. I wanted
                to know what had pushed them over the brink, and why some had
                broken down as a result of that experience while others had been
                able to go on with their lives.<sup>3</sup> Most of the men I
                interviewed had gone to war feeling well prepared, drawn close
                by the rigors of basic training and the shared danger. They
                exchanged pictures of their families and girlfriends; they put
                up with one another's flaws. And they were prepared to risk
                their lives for their friends. Most of them confided their dark
                secrets to a buddy, and some went so far as to share each
                other's shirts and socks.
              </p>
              <p className="article-paragraph">
                Many of the men had friendships similar to Tom's with Alex. Tom
                met Alex, an Italian guy from Malden, Massachusetts, on his
                first day in country, and they instantly became close friends.
                They drove their jeep together, listened to the same music, and
                read each other's letters from home. They got drunk together and
                chased the same Vietnamese bar girls.
              </p>
              <p className="article-paragraph">
                After about three months in country Tom led his squad on a foot
                patrol through a rice paddy just before sunset. Suddenly a hail
                of gunfire spurted from the green wall of the surrounding
                jungle, hitting the men around him one by one. Tom told me how
                he had looked on in helpless horror as all the members of his
                platoon were killed or wounded in a matter of seconds. He would
                never get one image out of his mind: the back of Alex's head as
                he lay facedown in the rice paddy, his feet in the air. Tom wept
                as he recalled, "He was the only real friend I ever had."
                Afterward, at night, Tom continued to hear the screams of his
                men and to see their bodies falling into the water. Any sounds,
                smells, or images that reminded him of the ambush (like the
                popping of firecrackers on the Fourth of July) made him feel
                just as paralyzed, terrified, and enraged as he had the day the
                helicopter evacuated him from the rice paddy.
              </p>
              <p className="article-paragraph">
                Maybe even worse for Tom than the recurrent flashbacks of the
                ambush was the memory of what happened afterward. I could easily
                imagine how Tom's rage about his friend's death had led to the
                calamity that followed. It took him months of dealing with his
                paralyzing shame before he could tell me about it. Since time
                immemorial veterans, like Achilles in Homer's Iliad, have
                responded to the death of their comrades with unspeakable acts
                of revenge. The day after the ambush Tom went into a frenzy to a
                neighboring village, killing children, shooting an innocent
                farmer, and raping a Vietnamese woman. After that it became
                truly impossible for him to go home again in any meaningful way.
                How can you face your sweetheart and tell her that you brutally
                raped a woman just like her, or watch your son take his first
                step when you are reminded of the child you murdered? Tom
                experienced the death of Alex as if part of himself had been
                forever destroyed—the part that was good and honorable and
                trustworthy. Trauma, whether it is the result of something done
                to you or something you yourself have done, almost always makes
                it difficult to engage in intimate relationships. After you have
                experienced something so unspeakable, how do you learn to trust
                yourself or anyone else again? Or, conversely, how can you
                surrender to an intimate relationship after you have been
                brutally violated?
              </p>
              <p className="article-paragraph">
                Tom kept showing up faithfully for his appointments, as I had
                become for him a lifeline—the father he'd never had, an Alex who
                had survived the ambush. It takes enormous trust and courage to
                allow yourself to remember. One of the hardest things for
                traumatized people is to confront their shame about the way they
                behaved during a traumatic episode, whether it is objectively
                warranted (as in the commission of atrocities) or not (as in the
                case of a child who tries to placate her abuser). One of the
                first people to write about this phenomenon was Sarah Haley, who
                occupied an office next to mine at the VA Clinic. In an article
                entitled "When the Patient Reports Atrocities,"<sup>4</sup>{" "}
                which became a major impetus for the ultimate creation of the
                PTSD diagnosis, she discussed the well-nigh intolerable
                difficulty of talking about (and listening to) the horrendous
                acts that are often committed by soldiers in the course of their
                war experiences. It's hard enough to face the suffering that has
                been inflicted by others, but deep down many traumatized people
                are even more haunted by the shame they feel about what they
                themselves did or did not do under the circumstances. They
                despise themselves for how terrified, dependent, excited, or
                enraged they felt. In later years I encountered a similar
                phenomenon in victims of child abuse: Most of them suffer from
                agonizing shame about the actions they took to survive and
                maintain a connection with the person who abused them. This was
                particularly true if the abuser was someone close to the child,
                someone the child depended on, as is so often the case. The
                result can be confusion about whether one was a victim or a
                willing participant, which in turn leads to bewilderment about
                the difference between love and terror; pain and pleasure. We
                will return to this dilemma throughout this book.
              </p>
              <p className="article-paragraph">
                <strong>NUMBING</strong>
              </p>
              <p className="article-paragraph">
                Maybe the worst of Tom's symptoms was that he felt emotionally
                numb. He desperately wanted to love his family, but he just
                couldn't evoke any deep feelings for them. He felt emotionally
                distant from everybody, as though his heart were frozen and he
                were living behind a glass wall. That numbness extended to
                himself, as well. He could not really feel anything except for
                his momentary rages and his shame. He described how he hardly
                recognized himself when he looked in the mirror to shave. When
                he heard himself arguing a case in court, he would observe
                himself from a distance and wonder how this guy, who happened to
                look and talk like him, was able to make such cogent arguments.
                When he won a case he pretended to be gratified, and when he
                lost it was as though he had seen it coming and was resigned to
                the defeat even before it happened. Despite the fact that he was
                a very effective lawyer, he always felt as though he were
                floating in space, lacking any sense of purpose or direction.
              </p>
              <p className="article-paragraph">
                The only thing that occasionally relieved this feeling of
                aimlessness was intense involvement in a particular case. During
                the course of our treatment Tom had to defend a mobster on a
                murder charge. For the duration of that trial he was totally
                absorbed in devising a strategy for winning the case, and there
                were many occasions on which he stayed up all night to immerse
                himself in something that actually excited him. It was like
                being in combat, he said—he felt fully alive, and nothing else
                mattered. The moment Tom won that case, however, he lost his
                energy and sense of purpose. The nightmares returned, as did his
                rage attacks—so intensely that he had to move into a motel to
                ensure that he would not harm his wife or children. But being
                alone, too, was terrifying, because the demons of the war
                returned in full force. Tom tried to stay busy, working,
                drinking, and drugging— doing anything to avoid confronting his
                demons.
              </p>
              <p className="article-paragraph">
                He kept thumbing through Soldier of Fortune, fantasizing about
                enlisting as a mercenary in one of the many regional wars then
                raging in Africa. That spring he took out his Harley and roared
                up the Kancamagus Highway in New Hampshire. The vibrations,
                speed, and danger of that ride helped him pull himself back
                together, to the point that he was able to leave his motel room
                and return to his family.
              </p>
              <p className="article-subtitle">
                THE REORGANIZATION OF PERCEPTION
              </p>
              <p className="article-paragraph">
                Another study I conducted at the VA started out as research
                about nightmares but ended up exploring how trauma changes
                people's perceptions and imagination. Bill, a former medic who
                had seen heavy action in Vietnam a decade earlier, was the first
                person enrolled in my nightmare study. After his discharge he
                had enrolled in a theological seminary and had been assigned to
                his first parish in a Congregational church in a Boston suburb.
                He was doing fine until he and his wife had their first child.
                Soon after the baby's birth, his wife, a nurse, had gone back to
                work while he remained at home, working on his weekly sermon and
                other parish duties and taking care of their newborn.
              </p>
              <p className="article-paragraph">
                On the very first day he was left alone with the baby, it began
                to cry, and he found himself suddenly flooded with unbearable
                images of dying children in Vietnam.
              </p>
              <p className="article-paragraph">
                Bill had to call his wife to take over child care and came to
                the VA in a panic. He described how he kept hearing the sounds
                of babies crying and seeing images of burned and bloody
                children's faces. My medical colleagues thought that he must
                surely be psychotic, because the textbooks of the time said that
                auditory and visual hallucinations were symptoms of paranoid
                schizophrenia. The same texts that provided this diagnosis also
                supplied a cause: Bill's psychosis was probably triggered by his
                feeling displaced in his wife's affections by their new baby.
              </p>
              <p className="article-paragraph">
                As I arrived at the intake office that day, I saw Bill
                surrounded by worried doctors who were preparing to inject him
                with a powerful antipsychotic drug and ship him off to a locked
                ward. They described his symptoms and asked my opinion. Having
                worked in a previous job on a ward specializing in the treatment
                of schizophrenics, I was intrigued. Something about the
                diagnosis didn't sound right. I asked Bill if I could talk with
                him, and after hearing his story, I unwittingly paraphrased
                something Sigmund Freud had said about trauma in 1895: "I think
                this man is suffering from memories." I told Bill that I would
                try to help him and, after offering him some medications to
                control his panic, asked if he would be willing to come back a
                few days later to participate in my nightmare study. He agreed.
              </p>
              <p className="article-paragraph">
                As part of that study we gave our participants a Rorschach test.
                <sup>6</sup> Unlike tests that require answers to
                straightforward questions, responses to the Rorschach are almost
                impossible to fake. The Rorschach provides us with a unique way
                to observe how people construct a mental image from what is
                basically a meaningless stimulus: a blot of ink. Because humans
                are meaning-making creatures, we have a tendency to create some
                sort of image or story out of those inkblots, just as we do when
                we lie in a meadow on a beautiful summer day and see images in
                the clouds floating high above. What people make out of these
                blots can tell us a lot about how their minds work.
              </p>
              <p className="article-paragraph">
                On seeing the second card of the Rorschach test, Bill exclaimed
                in horror, "This is that child that I saw being blown up in
                Vietnam. In the middle, you see the charred flesh, the wounds,
                and the blood is spurting out all over." Panting and with sweat
                beading on his forehead, he was in a panic similar to the one
                that had initially brought him to the VA clinic. Although I had
                heard veterans describing their flashbacks, this was the first
                time I actually witnessed one. In that very moment in my office,
                Bill was obviously seeing the same images, smelling the same
                smells, and feeling the same physical sensations he had felt
                during the original event. Ten years after helplessly holding a
                dying baby in his arms, Bill was reliving the trauma in response
                to an inkblot.
              </p>
              <p className="article-paragraph">
                Experiencing Bill's flashback firsthand in my office helped me
                realize the agony that regularly visited the veterans I was
                trying to treat and helped me appreciate again how critical it
                was to find a solution. The traumatic event itself, however
                horrendous, had a beginning, a middle, and an end, but I now saw
                that flashbacks could be even worse. You never know when you
                will be assaulted by them again and you have no way of telling
                when they will stop. It took me years to learn how to
                effectively treat flashbacks, and in this process Bill turned
                out to be one of my most important mentors.
              </p>
              <p className="article-paragraph">
                When we gave the Rorschach test to twenty-one additional
                veterans, the response was consistent: Sixteen of them, on
                seeing the second card, reacted as if they were experiencing a
                wartime trauma.
              </p>
              <p className="article-paragraph">
                The second Rorschach card is the first card that contains color
                and often elicits so-called color shock in response. The
                veterans interpreted this card with descriptions like "These are
                the bowels of my friend Jim after a mortar shell ripped him
                open" and "This is the neck of my friend Danny after his head
                was blown off by a shell while we were eating lunch." None of
                them mentioned dancing monks, fluttering butterflies, men on
                motorcycles, or any of the other ordinary, sometimes whimsical
                images that most people see.
              </p>
              <p className="article-paragraph">
                While the majority of the veterans were greatly upset by what
                they saw, the reactions of the remaining five were even more
                alarming: They simply went blank. "This is nothing," one
                observed, "just a bunch of ink." They were right, of course, but
                the normal human response to ambiguous stimuli is to use our
                imagination to read something into them.
              </p>
              <p className="article-paragraph">
                We learned from these Rorschach tests that traumatized people
                have a tendency to superimpose their trauma on everything around
                them and have trouble deciphering whatever is going on around
                them. There appeared to be little in between. We also learned
                that trauma affects the imagination. The five men who saw
                nothing in the blots had lost the capacity to let their minds
                play. But so, too, had the other sixteen men, for in viewing
                scenes from the past in those blots they were not displaying the
                mental flexibility that is the hallmark of imagination. They
                simply kept replaying an old reel.
              </p>
              <p className="article-paragraph">
                Imagination is absolutely critical to the quality of our lives.
                Our imagination enables us to leave our routine everyday
                existence by fantasizing about travel, food, sex, falling in
                love, or having the last word—all the things that make life
                interesting. Imagination gives us the opportunity to envision
                new possibilities— it is an essential launchpad for making our
                hopes come true. It fires our creativity, relieves our boredom,
                alleviates our pain, enhances our pleasure, and enriches our
                most intimate relationships. When people are compulsively and
                constantly pulled back into the past, to the last time they felt
                intense involvement and deep emotions, they suffer from a
                failure of imagination, a loss of the mental flexibility.
                Without imagination there is no hope, no chance to envision a
                better future, no place to go, no goal to reach.
              </p>
              <p className="article-paragraph">
                The Rorschach tests also taught us that traumatized people look
                at the world in a fundamentally different way from other people.
                For most of us a man coming down the street is just someone
                taking a walk. A rape victim, however, may see a person who is
                about to molest her and go into a panic. A stern schoolteacher
                may be an intimidating presence to an average kid, but for a
                child whose stepfather beats him up, she may represent a
                torturer and precipitate a rage attack or a terrified cowering
                in the corner.
              </p>
              <p className="article-subtitle">STUCK IN TRAUMA</p>
              <p className="article-paragraph">
                Our clinic was inundated with veterans seeking psychiatric help.
                However, because of an acute shortage of qualified doctors, all
                we could do was put most of them on a waiting list, even as they
                continued brutalizing themselves and their families. We began
                seeing a sharp increase in arrests of veterans for violent
                offenses and drunken brawls—as well as an alarming number of
                suicides. I received permission to start a group for young
                Vietnam veterans to serve as a sort of holding tank until "real"
                therapy could start.
              </p>
              <p className="article-paragraph">
                At the opening session for a group of former Marines, the first
                man to speak flatly declared, "I do not want to talk about the
                war." I replied that the members could discuss anything they
                wanted. After half an hour of excruciating silence, one veteran
                finally started to talk about his helicopter crash. To my
                amazement the rest immediately came to life, speaking with great
                intensity about their traumatic experiences. All of them
                returned the following week and the week after. In the group
                they found resonance and meaning in what had previously been
                only sensations of terror and emptiness. They felt a renewed
                sense of the comradeship that had been so vital to their war
                experience. They insisted that I had to be part of their
                newfound unit and gave me a Marine captain's uniform for my
                birthday. In retrospect that gesture revealed part of the
                problem: You were either in or out—you either belonged to the
                unit or you were nobody.
              </p>
              <p className="article-paragraph">
                Later I led another group, this time for veterans of Patton's
                army—men now well into their seventies, all old enough to be my
                father. We met on Monday mornings at eight o'clock. In Boston
                winter snowstorms occasionally paralyze the public transit
                system, but to my amazement all of them showed up even during
                blizzards, some of them trudging several miles through the snow
                to reach the VA Clinic. For Christmas they gave me a 1940s
                GI-issue wristwatch. As had been the case with my group of
                Marines, I could not be their doctor unless they made me one of
                them.
              </p>
              <p className="article-paragraph">
                Moving as these experiences were, the limits of group therapy
                became clear when I urged the men to talk about the issues they
                confronted in their daily lives: their relationships with their
                wives, children, girlfriends, and family; dealing with their
                bosses and finding satisfaction in their work; their heavy use
                of alcohol. Their typical response was to balk and resist and
                instead...
              </p>
              <p className="article-paragraph">
                recount yet again how they had plunged a dagger through the
                heart of a German soldier in the Hurtgen Forest or how their
                helicopter had been shot down in the jungles of Vietnam.
              </p>
              <p className="article-paragraph">
                Whether the trauma had occurred ten years in the past or more
                than forty, my patients could not bridge the gap between their
                wartime experiences and their current lives. Somehow the very
                event that caused them so much pain had also become their sole
                source of meaning. They felt fully alive only when they were
                revisiting their traumatic past.
              </p>
              <p className="article-subtitle">
                DIAGNOSING POSTTRAUMATIC STRESS
              </p>
              <p className="article-paragraph">
                In those early days at the VA, we labeled our veterans with all
                sorts of diagnoses—alcoholism, substance abuse, depression, mood
                disorder, even schizophrenia—and we tried every treatment in our
                textbooks. But for all our efforts it became clear that we were
                actually accomplishing very little. The powerful drugs we
                prescribed often left the men in such a fog that they could
                barely function. When we encouraged them to talk about the
                precise details of a traumatic event, we often inadvertently
                triggered a full-blown flashback, rather than helping them
                resolve the issue. Many of them dropped out of treatment because
                we were not only failing to help but also sometimes making
                things worse.
              </p>
              <p className="article-paragraph">
                A turning point arrived in 1980, when a group of Vietnam
                veterans, aided by the New York psychoanalysts Chaim Shatan and
                Robert J. Lifton, successfully lobbied the American Psychiatric
                Association to create a new diagnosis: posttraumatic stress
                disorder (PTSD), which described a cluster of symptoms that was
                common, to a greater or lesser extent, to all of our veterans.
                Systematically identifying the symptoms and grouping them
                together into a disorder finally gave a name to the suffering of
                people who were overwhelmed by horror and helplessness. With the
                conceptual framework of PTSD in place, the stage was set for a
                radical change in our understanding of our patients. This
                eventually led to an explosion of research and attempts at
                finding effective treatments.
              </p>
              <p className="article-paragraph">
                Inspired by the possibilities presented by this new diagnosis, I
                proposed a study on the biology of traumatic memories to the VA.
                Did the memories of those suffering from PTSD differ from those
                of others? For most people the memory of an unpleasant event
                eventually fades or is transformed into something more benign.
                But most of our patients were unable to make their past into a
                story that happened long ago.<sup>7</sup>
              </p>
              <p className="article-paragraph">
                The opening line of the grant rejection read: "It has never been
                shown that PTSD is relevant to the mission of the Veterans
                Administration." Since then, of course, the mission of the VA
                has become organized around the diagnosis of PTSD and brain
                injury, and considerable resources are dedicated to applying
                "evidence-based treatments" to traumatized war veterans. But at
                the time things were different and, unwilling to keep working in
                an organization whose view of reality was so at odds with my
                own, I handed in my resignation; in 1982 I took a position at
                the Massachusetts Mental Health Center, the Harvard teaching
                hospital where I had trained to become a psychiatrist. My new
                responsibility was to teach a fledgling area of study:
                psychopharmacology, the administration of drugs to alleviate
                mental illness.
              </p>
              <p className="article-paragraph">
                In my new job I was confronted on an almost daily basis with
                issues I thought I had left behind at the VA. My experience with
                combat veterans had so sensitized me to the impact of trauma
                that I now listened with a very different ear when depressed and
                anxious patients told me stories of molestation and family
                violence. I was particularly struck by how many female patients
                spoke of being sexually abused as children. This was puzzling,
                as the standard textbook of psychiatry at the time stated that
                incest was extremely rare in the United States, occurring about
                once in every million women.<sup>8</sup> Given that there were
                then only about one hundred million women living in the United
                States, I wondered how forty seven, almost half of them, had
                found their way to my office in the basement of the hospital.
              </p>
              <p className="article-paragraph">
                Furthermore, the textbook said, "There is little agreement about
                the role of father-daughter incest as a source of serious
                subsequent psychopathology." My patients with incest histories
                were hardly free of "subsequent psychopathology"—they were
                profoundly depressed, confused, and often engaged in bizarrely
                self-harmful behaviors, such as cutting themselves with razor
                blades. The textbook went on to practically endorse incest,
                explaining that "such incestuous activity diminishes the
                subject's chance of psychosis and allows for a better adjustment
                to the external world."<sup>9</sup> In fact, as it turned out,
                incest had devastating effects on women's well-being.
              </p>
              <p className="article-paragraph">
                In many ways these patients were not so different from the
                veterans I had just left behind at the VA. They also had
                nightmares and flashbacks. They also alternated between
                occasional bouts of explosive rage and long periods of being
                emotionally shut down. Most of them had great difficulty getting
                along with other people and had trouble maintaining meaningful
                relationships.
              </p>
              <p className="article-paragraph">
                As we now know, war is not the only calamity that leaves human
                lives in ruins. While about a quarter of the soldiers who serve
                in war zones are expected to develop serious posttraumatic
                problems,
                <sup>10</sup> the majority of Americans experience a violent
                crime at some time during their lives, and more accurate
                reporting has revealed that twelve million women in the United
                States have been victims of rape. More than half of all rapes
                occur in girls below age fifteen.<sup>11</sup> For many people
                the war begins at home: Each year about three million children
                in the United States are reported as victims of child abuse and
                neglect. One million of these cases are serious and credible
                enough to force local child protective services or the courts to
                take action.<sup>12</sup> In other words, for every soldier who
                serves in a war zone abroad, there are ten children who are
                endangered in their own homes. This is particularly tragic,
                since it is very difficult for growing children to recover when
                the source of terror and pain is not enemy combatants but their
                own caretakers.
              </p>
              <p className="article-subtitle">A NEW UNDERSTANDING</p>
              <p className="article-paragraph">
                In the three decades since I met Tom, we have learned an
                enormous amount not only about the impact and manifestations of
                trauma but also about ways to help traumatized people find their
                way back. Since the early 1990s brain-imaging tools have started
                to show us what actually happens inside the brains of
                traumatized people. This has proven essential to understanding
                the damage inflicted by trauma and has guided us to formulate
                entirely new avenues of repair.
              </p>
              <p className="article-paragraph">
                We have also begun to understand how overwhelming experiences
                affect our innermost sensations and our relationship to our
                physical reality—the core of who we are. We have learned that
                trauma is not just an event that took place sometime in the
                past; it is also the imprint left by that experience on mind,
                brain, and body. This imprint has ongoing consequences for how
                the human organism manages to survive in the present.
              </p>
              <p className="article-paragraph">
                Trauma results in a fundamental reorganization of the way mind
                and brain manage perceptions. It changes not only how we think
                and what we think about, but also our very capacity to think. We
                have discovered that helping victims of trauma find the words to
                describe what has happened to them is profoundly meaningful, but
                usually it is not enough. The act of telling the story doesn't
                necessarily alter the automatic physical and hormonal responses
                of bodies that remain hypervigilant, prepared to be assaulted or
                violated at any time. For real change to take place, the body
                needs to learn that the danger has passed and to live in the
                reality of the present. Our search to understand trauma has led
                us to think differently not only about the structure of the mind
                but also about the processes by which it heals.
              </p>
            </article>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              <p className="section-subtitle">
                1. Trauma as a Disruptor of Narrative
              </p>
              <p className="section-paragraph">
                The excerpt underscores how trauma shatters the continuity of
                one’s life story. Instead of following a linear narrative,
                traumatic experiences create abrupt breaks and lasting gaps,
                leaving survivors stuck in the past.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "It just happens, and then life goes on. No one prepares you
                  for it."
                </em>
              </p>

              <p className="section-subtitle">
                2. The Complex Manifestations of PTSD
              </p>
              <p className="section-paragraph">
                The narrative highlights the multifaceted nature of
                posttraumatic stress disorder. Symptoms range from debilitating
                flashbacks and nightmares to emotional numbness and violent
                outbursts, illustrating that trauma impacts both the mind and
                body.
              </p>

              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "The nucleus of the neurosis is physioneurosis."
                </em>
              </p>

              <p className="section-subtitle">
                3. The Intrusiveness of Traumatic Memories
              </p>
              <p className="section-paragraph">
                The author’s experience with veterans reveals how traumatic
                memories persist, often intruding into everyday life. These
                memories are not just recollections; they are vivid, sensory
                experiences that disrupt normal functioning.
              </p>

              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "I would probably spend the rest of my professional life
                  trying to unravel the mysteries of trauma."
                </em>
              </p>

              <p className="section-subtitle">
                4. The Role of Group Therapy and Peer Connection
              </p>
              <p className="section-paragraph">
                Group therapy emerges as a crucial element in the healing
                process. The shared experiences among veterans create a unique
                bond, allowing them to find validation and support in a space
                where they are understood.
              </p>

              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "They felt a renewed sense of comradeship that had been so
                  vital to their war experience."
                </em>
              </p>

              <p className="section-subtitle">
                5. The Evolution of Diagnostic Frameworks
              </p>
              <p className="section-paragraph">
                The transition from vague diagnoses like "war neurosis" to a
                structured concept of PTSD marked a significant shift in
                understanding trauma. This evolution not only legitimized the
                suffering of veterans but also paved the way for targeted
                treatments.
              </p>

              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "A turning point arrived in 1980, when PTSD was officially
                  recognized as a diagnosis."
                </em>
              </p>

              <p className="section-subtitle">
                6. Reorganization of Perception and Memory
              </p>
              <p className="section-paragraph">
                Trauma alters not only memories but also the way individuals
                perceive the world. The Rorschach tests described in the excerpt
                demonstrate how traumatic experiences can distort one’s ability
                to interpret even neutral stimuli.
              </p>

              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "They simply kept replaying an old reel."
                </em>
              </p>

              <p className="section-subtitle">
                7. The Paradox of Survival and Suffering
              </p>
              <p className="section-paragraph">
                The text illustrates a paradox where the very experiences that
                inflict deep pain also become central to the survivor’s
                identity. This struggle between the desire to move on and the
                compulsion to remember defines the traumatic experience.
              </p>

              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "I need to be a living memorial to my friends who died in
                  Vietnam."
                </em>
              </p>

              <p className="section-subtitle">
                8. Emotional Numbness as a Coping Mechanism
              </p>
              <p className="section-paragraph">
                Emotional numbness is depicted as both a symptom and a
                protective response to overwhelming trauma. This detachment,
                while initially a defense mechanism, ultimately deepens the
                isolation experienced by survivors.
              </p>

              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "He felt emotionally distant from everybody, as though his
                  heart were frozen."
                </em>
              </p>

              <p className="section-subtitle">
                9. The Impact on Identity and Self-Perception
              </p>
              <p className="section-paragraph">
                Trauma not only disrupts memory but also shatters self-identity.
                The survivors in the narrative struggle to reconcile their
                pre-trauma selves with the altered reality imposed by their
                experiences.
              </p>

              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "He hardly recognized himself when he looked in the mirror."
                </em>
              </p>

              <p className="section-subtitle">
                10. Towards a New Understanding of Trauma
              </p>
              <p className="section-paragraph">
                Ultimately, the analysis calls for a deeper, more nuanced
                understanding of trauma that goes beyond symptom management. It
                emphasizes the need to address both the psychological and
                physiological imprints of traumatic experiences to foster
                genuine healing.
              </p>

              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Trauma is not just an event that took place in the past; it
                  is also the imprint left on mind, brain, and body."
                </em>
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              <li className="section-question">
                What is the main focus of the article?
                <p className="section-answer">
                  The article centers on the profound impact of
                  trauma—particularly as experienced by war veterans—and
                  explores how posttraumatic stress disrupts life narratives,
                  altering both mind and body.
                </p>
              </li>

              <li className="section-question">
                How does trauma disrupt a person's narrative?
                <p className="section-answer">
                  Trauma shatters the continuity of one’s life story, creating
                  abrupt breaks and intrusive flashbacks that trap survivors in
                  their past, making it difficult to form a coherent narrative.
                </p>
              </li>

              <li className="section-question">
                What are some of the key symptoms of PTSD described in the
                narrative?
                <p className="section-answer">
                  The narrative highlights symptoms such as recurring
                  nightmares, vivid flashbacks, emotional numbness, and a sense
                  of detachment from one’s previous self.
                </p>
              </li>

              <li className="section-question">
                How do traumatic memories affect everyday functioning?
                <p className="section-answer">
                  Traumatic memories intrude into daily life as intense, sensory
                  experiences that disrupt concentration, impair
                  decision-making, and hinder the ability to live in the
                  present.
                </p>
              </li>

              <li className="section-question">
                What role does group therapy play in the healing process?
                <p className="section-answer">
                  Group therapy provides survivors with a supportive environment
                  to share experiences, validate their emotions, and rebuild a
                  sense of camaraderie that is essential for overcoming
                  isolation.
                </p>
              </li>

              <li className="section-question">
                How has the understanding of PTSD evolved over time?
                <p className="section-answer">
                  The understanding of PTSD has shifted from vague diagnoses
                  like “war neurosis” to a clearly defined condition,
                  legitimizing survivors’ experiences and leading to more
                  targeted treatments that address both psychological and
                  physiological aspects.
                </p>
              </li>

              <li className="section-question">
                What is the significance of the Rorschach test in the narrative?
                <p className="section-answer">
                  The Rorschach test is used to reveal how trauma alters
                  perception; the veterans’ responses show that neutral stimuli
                  can trigger vivid, distressing recollections of their past
                  experiences.
                </p>
              </li>

              <li className="section-question">
                How does trauma impact a person's identity?
                <p className="section-answer">
                  Trauma can shatter self-identity by creating a disconnect
                  between the pre-trauma self and the person survivors become
                  afterward, often leaving them feeling alienated and unsure of
                  who they are.
                </p>
              </li>

              <li className="section-question">
                What challenges do survivors face in reconciling their past with
                their present?
                <p className="section-answer">
                  Survivors struggle to integrate their traumatic memories with
                  everyday life, leading to conflicts between the desire to move
                  forward and the pull of past horrors that continually
                  resurface.
                </p>
              </li>

              <li className="section-question">
                What broader implications does the article suggest about the
                impact of trauma?
                <p className="section-answer">
                  The article calls for a deeper, integrated approach to
                  understanding trauma, one that addresses its enduring
                  psychological and physiological imprints in order to foster
                  genuine healing.
                </p>
              </li>

              <li className="section-question">
                How does the narrative illustrate the relationship between
                trauma and physical symptoms?
                <p className="section-answer">
                  The narrative demonstrates that trauma is not confined to the
                  mind; it manifests physically through disrupted sleep
                  patterns, hypervigilance, and even altered neurobiological
                  responses.
                </p>
              </li>

              <li className="section-question">
                What coping mechanisms do the patients employ to deal with their
                trauma?
                <p className="section-answer">
                  Patients resort to various coping mechanisms such as substance
                  abuse, emotional numbing, and even self-destructive behaviors
                  in an attempt to manage the overwhelming memories and
                  sensations associated with trauma.
                </p>
              </li>

              <li className="section-question">
                In what ways does the article explore the conflict between
                memory and forgetting?
                <p className="section-answer">
                  The article examines how survivors are caught in a paradoxical
                  state where the urge to forget is constantly at odds with the
                  compulsion to remember, leaving them trapped in a cycle of
                  reliving traumatic events.
                </p>
              </li>

              <li className="section-question">
                How does the narrative address the issue of societal
                understanding of trauma?
                <p className="section-answer">
                  It highlights the gap between the lived experiences of trauma
                  survivors and society’s often oversimplified or dismissive
                  perceptions of trauma, emphasizing the need for greater
                  empathy and more informed support systems.
                </p>
              </li>

              <li className="section-question">
                What does the article imply about the importance of integrating
                both psychological and physiological treatment for trauma?
                <p className="section-answer">
                  The article suggests that effective treatment for trauma must
                  address both the mind and the body, as the impact of trauma is
                  holistic—affecting cognitive, emotional, and physical health.
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
