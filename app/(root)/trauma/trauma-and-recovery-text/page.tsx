import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Trauma and Recovery",
  description:
    "A page based on Judith Herman's Trauma and Recovery (New York: Basic Books, 1992), exploring the dynamics of psychological trauma and the pathway to recovery.",
};

export default function TraumaAndRecoveryText() {
  const navLinks: NavLink[] = [
    { href: "#introduction", label: "Introduction" },
    { href: "#forgotten", label: "A Forgotten History" },
    { href: "#hysteria", label: "Hysteria" },
    { href: "#neurosis", label: "Neurosis" },
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
            <PageTitle
              title="Trauma and Recovery"
              author="Judith Herman, M. D."
            />
          </div>
          {/* Right: Empty div to balance the left column */}
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle
            title="Trauma and Recovery"
            author="Judith Herman, M. D."
          />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Article Section */}
        <section id="introduction" className="space-y-8">
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg">
              <strong>INTRODUCTION</strong>
            </p>
            <p className="text-lg">
              THE ORDINARY RESPONSE TO ATROCITIES is to banish them from
              consciousness. Certain violations of the social compact are too
              terrible to utter aloud: this is the meaning of the word
              unspeakable. Atrocities, however, refuse to be buried. Equally as
              powerful as the desire to deny atrocities is the conviction that
              denial does not work. Folk wisdom is filled with ghosts who refuse
              to rest in their graves until their stories are told. Murder will
              out. Remembering and telling the truth about terrible events are
              prerequisites both for the restoration of the social order and for
              the healing of individual victims.
            </p>

            <p className="text-lg">
              The conflict between the will to deny horrible events and the will
              to proclaim them aloud is the central dialectic of psychological
              trauma. People who have survived atrocities often tell their
              stories in a highly emotional, contradictory, and fragmented
              manner which undermines their credibility and thereby serves the
              twin imperatives of truth-telling and secrecy.
            </p>
            <p className="text-lg">
              The psychological distress symptoms of traumatized people
              simultaneously call attention to the existence of an unspeakable
              secret and deflect attention from it. This is most apparent in the
              way they alternate between feeling numb and reliving the event.
              The dialectic of trauma gives rise to complicated, sometimes
              uncanny alterations of consciousness—what George Orwell called
              “doublethink,” and what clinicians refer to as “dissociation.” It
              results in the protean, dramatic, and often bizarre symptoms of
              hysteria which Freud recognized a century ago as disguised
              communications about sexual abuse in childhood.
            </p>
            <p className="text-lg">
              Witnesses as well as victims are subject to the dialectic of
              trauma. It is difficult for an observer to remain clearheaded and
              calm, to see more than a few fragments of the picture at one time,
              to retain all the pieces, and to fit them together. It is even
              more difficult to find a language that conveys fully and
              persuasively what one has seen. Those who attempt to describe the
              atrocities that they have witnessed also risk their own
              credibility. To speak publicly about one’s knowledge of atrocities
              is to invite the stigma that attaches to victims.
            </p>
            <p className="text-lg">
              The knowledge of horrible events periodically intrudes into public
              awareness but is rarely retained for long. Denial, repression, and
              dissociation operate on a social as well as an individual level.
              The study of psychological trauma has an “underground” history.
              Like traumatized people, we have been cut off from the knowledge
              of our past. Like traumatized people, we need to understand the
              past in order to reclaim the present and the future.
            </p>
            <p className="text-lg">
              Therefore, an understanding of psychological trauma begins with
              rediscovering history. Clinicians know the privileged moment of
              insight when repressed ideas, feelings, and memories surface into
              consciousness. These moments occur in the history of societies as
              well as in the history of individuals. In the 1970s, the speak
              outs of the women’s liberation movement brought to public
              awareness the widespread crimes of violence against women. Victims
              who had been silenced began to reveal their secrets.
            </p>
            <p className="text-lg">
              As a psychiatric resident, I heard numerous stories of sexual and
              domestic violence from my patients. Because of my involvement in
              the women’s movement, I was able to speak out against the denial
              of women’s real experiences in my own profession and testify to
              what I had witnessed. My first paper on incest, written with Lisa
              Hirschman in 1976, circulated “underground,” in manuscript, for a
              year before it was published. We began to receive letters from all
              over the country from women who had never before told their
              stories. Through them, we realized the power of speaking the
              unspeakable and witnessed firsthand the creative energy that is
              released when the barriers of denial and repression are lifted.
            </p>
            <p className="text-lg">
              Trauma and Recovery represents the fruits of two decades of
              research and clinical work with victims of sexual and domestic
              violence. It also reflects a growing body of experience with many
              other traumatized people, particularly combat veterans and the
              victims of political terror.
            </p>
            <p className="text-lg">
              This is a book about restoring connections: between the public and
              private worlds, between the individual and community, between men
              and women. It is a book about commonalities: between rape
              survivors and combat veterans, between battered women and
              political prisoners, between the survivors of vast concentration
              camps created by tyrants who rule nations and the survivors of
              small, hidden concentration camps created by tyrants who rule
              their homes.
            </p>
            <p className="text-lg">
              People who have endured horrible events suffer predictable
              psychological harm. There is a spectrum of traumatic disorders,
              ranging from the effects of a single overwhelming event to the
              more complicated effects of prolonged and repeated abuse.
              Established diagnostic concepts, especially the severe personality
              disorders commonly diagnosed in women, have generally failed to
              recognize the impact of victimization. The first part of this book
              delineates the spectrum of human adaptation to traumatic events
              and gives a new diagnostic name to the psychological disorder
              found in survivors of prolonged, repeated abuse.
            </p>
            <p className="text-lg">
              Because the traumatic syndromes have basic features in common, the
              recovery process also follows a common pathway. The fundamental
              stages of recovery are establishing safety, reconstructing the
              trauma story, and restoring the connection between survivors and
              their community. The second part of the book develops an overview
              of the healing process and offers a new conceptual framework for
              psychotherapy with traumatized people. Both the characteristics of
              the traumatic disorders and the principles of treatment are
              illustrated with the testimony of survivors and with case examples
              drawn from a diverse literature.
            </p>
            <p className="text-lg">
              The research sources for this book include my own earlier studies
              of incest survivors and my more recent study of the role of
              childhood trauma in the condition known as borderline personality
              disorder. The clinical sources of this book are my twenty years of
              practice at a feminist mental health clinic and ten years as a
              teacher and supervisor in a university teaching hospital.
            </p>
            <p className="text-lg">
              The testimony of trauma survivors is at the heart of the book. To
              preserve confidentiality, I have identified all of my informants
              by pseudonyms, with two exceptions. First, I have identified
              therapists and clinicians who were interviewed about their work,
              and second, I have identified survivors who have already made
              themselves known publicly. The case vignettes that appear here are
              fictitious; each one is a composite, based on the experiences of
              many different patients, not of an individual.
            </p>
            <p className="text-lg">
              Survivors challenge us to reconnect fragments, to reconstruct
              history, to make meaning of their present symptoms in the light of
              past events. I have attempted to integrate clinical and social
              perspectives on trauma without sacrificing either the complexity
              of individual experience or the breadth of political context. I
              have tried to unify an apparently divergent body of knowledge and
              to develop concepts that apply equally to the experiences of
              domestic and sexual life, the traditional sphere of women, and to
              the experiences of war and political life, the traditional sphere
              of men.
            </p>
            <p className="text-lg">
              This book appears at a time when public discussion of the common
              atrocities of sexual and domestic life has been made possible by
              the women’s movement, and when public discussion of the common
              atrocities of political life has been made possible by the
              movement for human rights. I expect the book to be
              controversial—first, because it is written from a feminist
              perspective; second, because it challenges established diagnostic
              concepts; but third and perhaps most importantly, because it
              speaks about horrible things, things that no one really wants to
              hear about. I have tried to communicate my ideas in a language
              that preserves connections, a language that is faithful both to
              the dispassionate, reasoned traditions of my profession and to the
              passionate claims of people who have been violated and outraged. I
              have tried to find a language that can withstand the imperatives
              of doublethink and allows all of us to come a little closer to
              facing the unspeakable.
            </p>
            <p className="text-lg" id="forgotten">
              <strong>CHAPTER 1: A Forgotten History</strong>
            </p>
            <p className="text-lg">
              THE STUDY OF PSYCHOLOGICAL TRAUMA has a curious history—one of
              episodic amnesia. Periods of active investigation have alternated
              with periods of oblivion. Repeatedly in the past century, similar
              lines of inquiry have been taken up and abruptly abandoned, only
              to be rediscovered much later. Classic documents of fifty or one
              hundred years ago often read like contemporary works. Though the
              field has in fact an abundant and rich tradition, it has been
              periodically forgotten and must be periodically reclaimed.
            </p>
            <p className="text-lg">
              This intermittent amnesia is not the result of the ordinary
              changes in fashion that affect any intellectual pursuit. The study
              of psychological trauma does not languish for lack of interest.
              Rather, the subject provokes such intense controversy that it
              periodically becomes anathema. The study of psychological trauma
              has repeatedly led into realms of the unthinkable and foundered on
              fundamental questions of belief.
            </p>
            <p className="text-lg">
              To study psychological trauma is to come face to face both with
              human vulnerability in the natural world and with the capacity for
              evil in human nature. To study psychological trauma means bearing
              witness to horrible events. When the events are natural disasters
              or “acts of God,” those who bear witness sympathize readily with
              the victim. But when the traumatic events are of human design,
              those who bear witness are caught in the conflict between victim
              and perpetrator. It is morally impossible to remain neutral in
              this conflict. The bystander is forced to take sides.
            </p>
            <p className="text-lg">
              It is very tempting to take the side of the perpetrator. All the
              perpetrator asks is that the bystander do nothing. He appeals to
              the universal desire to see, hear, and speak no evil. The victim,
              on the contrary, asks the bystander to share the burden of pain.
              The victim demands action, engagement, and remembering.
            </p>
            <p className="text-lg">
              Leo Eitinger, a psychiatrist who has studied survivors of the Nazi
              concentration camps, describes the cruel conflict of interest
              between victim and bystander: “War and victims are something the
              community wants to forget; a veil of oblivion is drawn over
              everything painful and unpleasant. We find the two sides face to
              face; on one side the victims who perhaps wish to forget but
              cannot, and on the other all those with strong, often unconscious
              motives who very intensely both wish to forget and succeed in
              doing so. The contrast... is frequently very painful for both
              sides. The weakest one... remains the losing party in this silent
              and unequal dialogue.”
            </p>
            <p className="text-lg">
              In order to escape accountability for his crimes, the perpetrator
              does everything in his power to promote forgetting. Secrecy and
              silence are the perpetrator’s first line of defense. If secrecy
              fails, the perpetrator attacks the credibility of his victim. If
              he cannot silence her absolutely, he tries to make sure that no
              one listens. To this end, he marshals an impressive array of
              arguments, from the most blatant denial to the most sophisticated
              and elegant rationalization. After every atrocity one can expect
              to hear the same predictable apologies: it never happened; the
              victim lies; the victim exaggerates; the victim brought it upon
              herself; and in any case it is time to forget the past and move
              on. The more powerful the perpetrator, the greater is his
              prerogative to name and define reality, and the more completely
              his arguments prevail.
            </p>
            <p className="text-lg">
              The perpetrator’s arguments prove irresistible when the bystander
              faces them in isolation. Without a supportive social environment,
              the bystander usually succumbs to the temptation to look the other
              way. This is true even when the victim is an idealized and valued
              member of society. Soldiers in every war, even those who have been
              regarded as heroes, complain bitterly that no one wants to know
              the real truth about war. When the victim is already devalued (a
              woman, a child), she may find that the most traumatic events of
              her life take place outside the realm of socially validated
              reality. Her experience becomes unspeakable.
            </p>
            <p className="text-lg">
              The study of psychological trauma must constantly contend with
              this tendency to discredit the victim or to render her invisible.
              Throughout the history of the field, dispute has raged over
              whether patients with posttraumatic conditions are entitled to
              care and respect or deserving of contempt, whether they are
              genuinely suffering or malingering, whether their histories are
              true or false and, if false, whether imagined or maliciously
              fabricated. In spite of a vast literature documenting the
              phenomena of psychological trauma, debate still centers on the
              basic question of whether these phenomena are credible and real.
            </p>
            <p className="text-lg">
              It is not only the patients but also the investigators of
              post-traumatic conditions whose credibility is repeatedly
              challenged. Clinicians who listen too long and too carefully to
              traumatized patients often become suspect among their colleagues,
              as though contaminated by contact. Investigators who pursue the
              field too far beyond the bounds of conventional belief are often
              subjected to a kind of professional isolation.
            </p>
            <p className="text-lg">
              To hold traumatic reality in consciousness requires a social
              context that affirms and protects the victim and that joins victim
              and witness in a common alliance. For the individual victim, this
              social context is created by relationships with friends, lovers,
              and family. For the larger society, the social context is created
              by political movements that give voice to the disempowered.
            </p>
            <p className="text-lg">
              The systematic study of psychological trauma therefore depends on
              the support of a political movement. Indeed, whether such study
              can be pursued or discussed in public is itself a political
              question. The study of war trauma becomes legitimate only in a
              context that challenges the sacrifice of young men in war. The
              study of trauma in sexual and domestic life becomes legitimate
              only in a context that challenges the subordination of women and
              children. Advances in the field occur only when they are supported
              by a political movement powerful enough to legitimate an alliance
              between investigators and patients and to counteract the ordinary
              social processes of silencing and denial. In the absence of strong
              political movements for human rights, the active process of
              bearing witness inevitably gives way to the active process of
              forgetting. Repression, dissociation, and denial are phenomena of
              social as well as individual consciousness.
            </p>
            <p className="text-lg">
              Three times over the past century, a particular form of
              psychological trauma has surfaced into public consciousness. Each
              time, the investigation of that trauma has flourished in
              affiliation with a political movement. The first to emerge was
              hysteria, the archetypal psychological disorder of women. Its
              study grew out of the republican, anticlerical political movement
              of the late nineteenth century in France. The second was shell
              shock or combat neurosis. Its study began in England and the
              United States after the First World War and reached a peak after
              the Vietnam War. Its political context was the collapse of a cult
              of war and the growth of an antiwar movement. The last and most
              recent trauma to come into public awareness is sexual and domestic
              violence. Its political context is the feminist movement in
              Western Europe and North America. Our contemporary understanding
              of psychological trauma is built upon a synthesis of these three
              separate lines of investigation.
            </p>
            <p className="text-lg" id="hysteria">
              <strong>THE HEROIC AGE OF HYSTERIA</strong>
            </p>
            <p className="text-lg">
              For two decades in the late nineteenth century, the disorder
              called hysteria became a major focus of serious inquiry. The term
              hysteria was so commonly understood at the time that no one had
              actually taken the trouble to define it systematically. In the
              words of one historian, “for twenty-five centuries, hysteria had
              been considered a strange disease with incoherent and
              incomprehensible symptoms. Most physicians believed it to be a
              disease proper to women and originating in the uterus.” Hence the
              name, hysteria. As another historian explained, hysteria was “a
              dramatic medical metaphor for everything that men found mysterious
              or unmanageable in the opposite sex.”
            </p>
            <p className="text-lg">
              The patriarch of the study of hysteria was the great French
              neurologist Jean-Martin Charcot. His kingdom was the Salpêtrière,
              an ancient, expansive hospital complex which had long been an
              asylum for the most wretched of the Parisian proletariat: beggars,
              prostitutes, and the insane. Charcot transformed this neglected
              facility into a temple of modern science, and the most gifted and
              ambitious men in the new disciplines of neurology and psychiatry
              journeyed to Paris to study with the master. Among the many
              distinguished physicians who made the pilgrimage to the
              Salpêtrière were Pierre Janet, William James, and Sigmund Freud.
            </p>
            <p className="text-lg">
              The study of hysteria captured the public imagination as a great
              venture into the unknown. Charcot’s investigations were renowned
              not only in the world of medicine but also in the larger worlds of
              literature and politics. His Tuesday Lectures were theatrical
              events, attended by “a multi-colored audience, drawn from all of
              Paris: authors, doctors, leading actors and actresses, fashionable
              demimondaines, all full of morbid curiosity.” In these lectures,
              Charcot illustrated his findings on hysteria by live
              demonstrations. The patients he put on display were young women
              who had found refuge in the Salpêtrière from lives of unremitting
              violence, exploitation, and rape. The asylum provided them greater
              safety and protection than they had ever known; for a selected
              group of women who became Charcot’s star performers, the asylum
              also offered something close to fame.
            </p>
            <p className="text-lg">
              Charcot was credited for great courage in venturing to study
              hysteria at all; his prestige gave credibility to a field that had
              been considered beyond the pale of serious scientific
              investigation.
            </p>
            <p className="text-lg">
              Prior to Charcot’s time, hysterical women had been thought of as
              malingerers, and their treatment had been relegated to the domain
              of hypnotists and popular healers. On Charcot’s death, Freud
              eulogized him as a liberating patron of the afflicted: “No
              credence was given to a hysteric about anything. The first thing
              that Charcot’s work did was to restore its dignity to the topic.
              Little by little, people gave up the scornful smile with which the
              patient could at that time feel certain of being met. She was no
              longer necessarily a malingerer, for Charcot had thrown the whole
              weight of his authority on the side of the genuineness and
              objectivity of hysterical phenomena.”
            </p>
            <p className="text-lg">
              Charcot’s approach to hysteria, which he called “the Great
              Neurosis,” was that of the taxonomist. He emphasized careful
              observation, description, and classification. He documented the
              characteristic symptoms of hysteria exhaustively, not only in
              writing but also with drawings and photographs. Charcot focused on
              the symptoms of hysteria that resembled neurological damage: motor
              paralyses, sensory losses, convulsions, and amnesias. By 1880 he
              had demonstrated that these symptoms were psychological, since
              they could be artificially induced and relieved through the use of
              hypnosis.
            </p>
            <p className="text-lg">
              Though Charcot paid minute attention to the symptoms of his
              hysterical patients, he had no interest whatsoever in their inner
              lives. He viewed their emotions as symptoms to be cataloged. He
              described their speech as “vocalization.” His stance regarding his
              patients is apparent in a verbatim account of one of his Tuesday
              Lectures. Where a young woman in hypnotic trance was being used to
              demonstrate a convulsive hysterical attack:
            </p>
            <p className="text-lg">
              <strong>CHARCOT:</strong> Let us press again on the hysterogenic
              point. (A male intern touches the patient in the ovarian region.)
              Here we go again. Occasionally subjects even bite their tongues,
              but this would be rare. Look at the arched back, which is so well
              described in textbooks.
            </p>
            <p className="text-lg">
              <strong>PATIENT:</strong> Mother, I am frightened.
            </p>
            <p className="text-lg">
              <strong>CHARCOT:</strong> Note the emotional outburst. If we let
              things go unabated we will soon return to the epileptoid
              behavior... (The patient cries again: “Oh! Mother.”) Again, note
              these screams. You could say it is a lot of noise over nothing.
            </p>
            <p className="text-lg">
              The ambition of Charcot’s followers was to surpass his work by
              demonstrating the cause of hysteria. Rivalry was particularly
              intense between Janet and Freud. Each wanted to be the first to
              make the great discovery. In pursuit of their goal, these
              investigators found that it was not sufficient to observe and
              classify hysterics. It was necessary to talk with them. For a
              brief decade men of science listened to women with a devotion and
              a respect unparalleled before or since. Daily meetings with
              hysterical patients, often lasting for hours, were not uncommon.
            </p>
            <p className="text-lg">
              The case studies of this period read almost like collaborations
              between doctor and patient. These investigations bore fruit. By
              the mid-1890s Janet in France and Freud, with his collaborator
              Joseph Breuer, in Vienna had arrived independently at strikingly
              similar formulations: hysteria was a condition caused by
              psychological trauma. Unbearable emotional reactions to traumatic
              events produced an altered state of consciousness, which in turn
              induced the hysterical symptoms. Janet called his alteration in
              consciousness “dissociation.” Breuer and Freud called it “double
              consciousness.”
            </p>
            <p className="text-lg">
              Both Janet and Freud recognized the essential similarity of
              altered states of consciousness induced by psychological trauma
              and those induced by hypnosis. Janet believed that the capacity
              for dissociation or hypnotic trance was a sign of psychological
              weakness and suggestibility. Breuer and Freud argued, on the
              contrary, that hysteria, with its associated alterations of
              consciousness, could be found among “people of the clearest
              intellect, strongest will, greatest character, and highest
              critical power.”
            </p>
            <p className="text-lg">
              Both Janet and Freud recognized that the somatic symptoms of
              hysteria represented disguised representations of intensely
              distressing events which had been banished from memory. Janet
              described his hysterical patients as governed by “subconscious
              fixed ideas,” the memories of traumatic events. Breuer and Freud,
              in an immortal summation, wrote that “hysterics suffer mainly from
              reminiscences.”
            </p>
            <p className="text-lg">
              By the mid-1890s these investigators had also discovered that
              hysterical symptoms could be alleviated when the traumatic
              memories, as well as the intense feelings that accompanied them,
              were recovered and put into words. This method of treatment became
              the basis of modern psychotherapy. Janet called the technique
              “psychological analysis,” Breuer and Freud called it “abreaction”
              or “catharsis,” and Freud later called it “psycho-analysis.” But
              the simplest and perhaps best name was invented by one of Breuer’s
              patients, a gifted, intelligent, and severely disturbed young
              woman to whom he gave the pseudonym Anna O. She called her
              intimate dialogue with Breuer the “talking cure.”
            </p>
            <p className="text-lg">
              The collaborations between doctor and patient took on the quality
              of a quest, in which the solution to the mystery of hysteria could
              be found in the painstaking reconstruction of the patient’s past.
              Janet, describing his work with one patient, noted that as
              treatment proceeded, the uncovering of recent traumas gave way to
              the exploration of earlier events. “By removing the superficial
              layer of the delusions, I favored the appearance of old and
              tenacious fixed ideas which dwelt still at the bottom of her mind.
              The latter disappeared in turn, thus bringing forth a great
              improvement.”
            </p>
            <p className="text-lg">
              Breuer, describing his work with Anna O, spoke of “following back
              the thread of memory.”
            </p>
            <p className="text-lg">
              It was Freud who followed the thread the furthest, and invariably
              this led him into an exploration of the sexual lives of women. In
              spite of an ancient clinical tradition that recognized the
              association of hysterical symptoms with female sexuality, Freud’s
              mentors, Charcot and Breuer, had been highly skeptical about the
              role of sexuality in the origins of hysteria. Freud himself was
              initially resistant to the idea: “When I began to analyze the
              second patient… the expectation of a sexual neurosis being the
              basis of hysteria was fairly remote from my mind. I had come fresh
              from the school of Charcot, and I regarded the linking of hysteria
              with the topic of sexuality as a sort of insult—just as the women
              patients themselves do.”
            </p>
            <p className="text-lg">
              This empathic identification with his patients’ reactions is
              characteristic of Freud’s early writings on hysteria. His case
              histories reveal a man possessed of such passionate curiosity that
              he was willing to overcome his own defensiveness, and willing to
              listen. What he heard was appalling. Repeatedly his patients told
              him of sexual assault, abuse, and incest.
            </p>
            <p className="text-lg">
              Following back the thread of memory, Freud and his patients
              uncovered major traumatic events of childhood concealed beneath
              the more recent, often relatively trivial experiences that had
              actually triggered the onset of hysterical symptoms. By 1896 Freud
              believed he had found the source. In a report on eighteen case
              studies, entitled The Aetiology of Hysteria, he made a dramatic
              claim: “I therefore put forward the thesis that at the bottom of
              every case of hysteria there are one or more occurrences of
              premature sexual experience, occurrences which belong to the
              earliest years of childhood, but which can be reproduced through
              the work of psycho-analysis in spite of the intervening decades. I
              believe that this is an important finding, the discovery of a
              caput Nili in neuropathology.”
            </p>
            <p className="text-lg">
              A century later, this paper still rivals contemporary clinical
              descriptions of the effects of childhood sexual abuse. It is a
              brilliant, compassionate, eloquently argued, closely reasoned
              document. Its triumphant title and exultant tone suggest that
              Freud viewed his contribution as the crowning achievement in the
              field.
            </p>
            <p className="text-lg">
              Instead, the publication of The Aetiology of Hysteria marked the
              end of this line of inquiry. Within a year, Freud had privately
              repudiated the traumatic theory of the origins of hysteria. His
              correspondence makes clear that he was increasingly troubled by
              the radical social implications of his hypothesis. Hysteria was so
              common among women that if his patients’ stories were true, and if
              his theory were correct, he would be forced to conclude that what
              he called “perverted acts against children” were endemic, not only
              among the proletariat of Paris, where he had first studied
              hysteria, but also among the respectable bourgeois families of
              Vienna, where he had established his practice. This idea was
              simply unacceptable. It was beyond credibility.
            </p>
            <p className="text-lg">
              Faced with this dilemma, Freud stopped listening to his female
              patients. The turning point is documented in the famous case of
              Dora. This, the last of Freud’s case studies on hysteria, reads
              more like a battle of wits than a cooperative venture. The
              interaction between Freud and Dora has been described as
              “emotional combat.” In this case Freud still acknowledged the
              reality of his patient’s experience: the adolescent Dora was being
              used as a pawn in her father’s elaborate sex intrigues. Her father
              had essentially offered her to his friends as a sexual toy. Freud
              refused, however, to validate Dora’s feelings of outrage and
              humiliation. Instead, he insisted upon exploring her feelings of
              erotic excitement, as if the exploitative situation were a
              fulfillment of her desire. In an act that Freud viewed as revenge,
              Dora broke off the treatment.
            </p>
            <p className="text-lg">
              The breach of their alliance marked the bitter end of an era of
              collaboration between ambitious investigators and hysterical
              patients. For close to a century, these patients would again be
              scorned and silenced. Freud’s followers held a particular grudge
              against the rebellious Dora, who was later described by a disciple
              as “one of the most repulsive hysterics he had ever met.”
            </p>
            <p className="text-lg">
              Out of the ruins of the traumatic theory of hysteria, Freud
              created psychoanalysis. The dominant psychological theory of the
              next century was founded in the denial of women’s reality.
              Sexuality remained the central focus of inquiry. But the
              exploitative social context in which sexual relations actually
              occur became utterly invisible. Psychoanalysis became a study of
              the internal vicissitudes of fantasy and desire, dissociated from
              the reality of experience. By the first decade of the twentieth
              century, without ever offering any clinical documentation of false
              complaints, Freud had concluded that his hysterical patients’
              accounts of childhood sexual abuse were untrue: “I was at last
              obliged to recognize that these scenes of seduction had never
              taken place, and that they were only fantasies which my patients
              had made up.”
            </p>
            <p className="text-lg">
              Freud’s recantation signified the end of the heroic age of
              hysteria. After the turn of the century the entire line of inquiry
              initiated by Charcot and continued by his followers fell into
              neglect. Hypnosis and altered states of consciousness were once
              more relegated to the realm of the occult. The study of
              psychological trauma came to a halt. After a time, the disease of
              hysteria itself was said to have virtually disappeared.
            </p>
            <p className="text-lg">
              This dramatic reversal was not simply the work of one man. In
              order to understand how the study of hysteria could collapse so
              completely and how great discoveries could be so quickly
              forgotten, it is necessary to understand something of the
              intellectual and political climate that gave rise to the
              investigation in the first place.
            </p>
            <p className="text-lg">
              The central political conflict in nineteenth-century France was
              the struggle between the proponents of a monarchy with an
              established religion and the proponents of a republican, secular
              form of government. Seven times since the Revolution of 1789 this
              conflict had led to the overthrow of the government. With the
              establishment of the Third Republic in 1870, the founding fathers
              of a new and fragile democracy mobilized an aggressive campaign to
              consolidate their power base and to undermine the power of their
              main opposition, the Catholic Church.
            </p>
            <p className="text-lg">
              The republican leaders of this era were self-made men of the
              rising bourgeoisie. They saw themselves as representatives of a
              tradition of enlightenment, engaged in mortal struggle with the
              forces of reaction: the aristocracy and the clergy. Their major
              political battles were fought for control of education. Their
              ideological battles were fought for the allegiance of men and the
              dominion of women. As Jules Ferry, a founding father of the Third
              Republic, put it: “Women must belong to science, or they will
              belong to the church.”
            </p>
            <p className="text-lg">
              Charcot, the son of a tradesman who had risen to wealth and fame,
              was a prominent member of this new bourgeois elite. His salon was
              a meeting place for government ministers and other notables of the
              Third Republic. He shared with his colleagues in government a zeal
              for the dissemination of secular, scientific ideas. His
              modernization of the Salpêtrière in the 1870s was carried out to
              demonstrate the superior virtues of secular teaching and hospital
              administration. And his investigations of hysteria were carried
              out to demonstrate the superiority of a secular over a religious
              conceptual framework. His Tuesday Lectures were political theater.
              His mission was to claim hysterical women for science.
            </p>
            <p className="text-lg">
              Charcot’s formulations of hysteria offered a scientific
              explanation for phenomena such as demonic possession states,
              witchcraft, exorcism, and religious ecstasy. One of his most
              cherished projects was the retrospective diagnosis of hysteria as
              portrayed throughout the ages in works of art. With a disciple,
              Paul Richer, he published a collection of medieval artworks
              illustrating his thesis that religious experiences depicted in art
              could be explained as manifestations of hysteria. Charcot and his
              followers also entered into acrimonious debates on contemporary
              mystical phenomena, including cases of stigmatics, apparitions,
              and faith healing.
            </p>
            <p className="text-lg">
              Charcot was particularly concerned with the miraculous cures
              reportedly occurring in the newly established shrine at Lourdes.
              Janet was preoccupied with the American phenomenon of Christian
              Science. Charcot’s disciple Desire Bourneville used the newly
              established diagnostic criteria in an attempt to prove that a
              celebrated stigmatic of the time, a devout young woman named
              Louise Lateau, was actually a hysteric. All of these phenomena
              were claimed for the domain of medical pathology.
            </p>
            <p className="text-lg">
              It was thus a larger, political cause that stimulated such
              passionate interest in hysteria and gave impetus to the
              investigations of Charcot and his followers in the late nineteenth
              century. The solution of the mystery of hysteria was intended to
              demonstrate the triumph of secular enlightenment over reactionary
              superstition, as well as the moral superiority of a secular world
              view. Men of science contrasted their benevolent patronage of
              hysterics with the worst excesses of the Inquisition. Charles
              Richet, a disciple of Charcot, observed in 1880: “Among the
              patients locked away in the Salpêtrière are many who would have
              been burned in former times, whose illness would have been taken
              for a crime.” William James echoed these sentiments a decade
              later: “Amongst all the many victims of medical ignorance clad in
              authority the poor hysteric has hitherto fared the worst; and her
              gradual rehabilitation and rescue will count among the
              philanthropic conquests of our generation.”
            </p>
            <p className="text-lg">
              While these men of science saw themselves as benevolent rescuers,
              uplifting women from their degraded condition, they never for a
              moment envisioned a condition of social equality between women and
              men. Women were to be the objects of study and humane care, not
              subjects in their own right. The same men who advocated an
              enlightened view of hysteria often strongly opposed the admission
              of women into higher education or the professions and adamantly
              opposed female suffrage.
            </p>
            <p className="text-lg">
              In the early years of the Third Republic the feminist movement was
              relatively weak. Until the late 1870s feminist organizations did
              not even have the right to hold public meetings or publish their
              literature. At the first International Congress for the Rights of
              Women, held in Paris in 1878, advocates of the right to vote were
              not permitted to speak, because they were considered too
              revolutionary. Advocates of women’s rights, recognizing that their
              fortunes depended upon survival of the fragile new democracy,
              tended to subordinate their interests in order to preserve
              consensus within the republican coalition.
            </p>
            <p className="text-lg">
              But a generation later, the regime of the founding fathers had
              become securely established. Republican, secular government had
              survived and prospered in France. By the end of the nineteenth
              century, the anticlerical battle had essentially been won. In the
              meantime, it had become more problematic for enlightened men to
              pose as the champions of women, for women were now daring to speak
              for themselves. The militancy of feminist movements in the
              established democracies of England and the United States had begun
              to spread to the Continent, and French feminists had become much
              more assertive on behalf of women’s rights. Some were pointedly
              critical of the founding fathers and challenged the benevolent
              patronage of men of science.
            </p>
            <p className="text-lg">
              By the turn of the century, the political impulse that had given
              birth to the heroic age of hysteria had dissipated; there was no
              longer any compelling reason to continue a line of investigation
              that had led men of science so far from where they originally
              intended to go. The study of hysteria had lured them into a
              netherworld of trance, emotionality, and sex. It had required them
              to listen to women far more than they had ever expected to listen,
              and to find out much more about women’s lives than they had ever
              wanted to know. Certainly they had never intended to investigate
              sexual trauma in the lives of women. As long as the study of
              hysteria was part of an ideological crusade, discoveries in the
              field were widely applauded and scientific investigators were
              esteemed for their humanity and courage.
            </p>
            <p className="text-lg">
              But once this political impetus had faded, these same
              investigators found themselves compromised by the nature of their
              discoveries and by their close involvement with their women
              patients.
            </p>
            <p className="text-lg">
              The backlash began even before Charcot’s death in 1893.
              Increasingly he found himself called upon to defend the
              credibility of the public demonstrations of hysteria that had
              enthralled Parisian society. It was widely rumored that the
              performances were staged by suggestible women who, knowingly or
              not, followed a script dictated under hypnosis by their patron. At
              the end of his life, he apparently regretted opening up this area
              of investigation.
            </p>
            <p className="text-lg">
              As Charcot retreated from the world of hypnosis and hysteria,
              Breuer retreated from the world of women’s emotional attachments.
              The first “talking cure” ended with Breuer’s precipitate flight
              from Anna O. He may have broken off the relationship because his
              wife resented his intense involvement with the fascinating young
              woman. Abruptly, he discontinued a course of treatment which had
              involved prolonged, almost daily meetings with his patient over a
              period of two years. The sudden termination provoked a crisis not
              only for the patient, who had to be hospitalized, but apparently
              also for the doctor, who was appalled at the realization that his
              patient had become passionately attached to him. He left his final
              session with Anna O in a “cold sweat.”
            </p>
            <p className="text-lg">
              Though Breuer later collaborated with Freud in publishing this
              extraordinary case, he was a reluctant and doubting explorer. In
              particular, Breuer was troubled by the repeated findings of sexual
              experiences at the source of hysterical symptoms. As Freud
              complained to his confidant, Wilhelm Fliess: “Not long ago, Breuer
              made a big speech to the physician’s society about me, putting
              himself forward as a convert to belief in sexual aetiology. When I
              thanked him privately for this, he spoiled my pleasure by saying,
              ‘But all the same, I don’t believe it.’”
            </p>
            <p className="text-lg">
              Freud’s investigations led the furthest of all into the
              unrecognized reality of women’s lives. His discovery of childhood
              sexual exploitation at the roots of hysteria crossed the outer
              limits of social credibility and brought him to a position of
              total ostracism within his profession. The publication of The
              Aetiology of Hysteria, which he had expected to bring him glory,
              was met with a stony and universal silence among his elders and
              peers. As he wrote to Fliess shortly afterward, “I am as isolated
              as you could wish me to be: the word has been given out to abandon
              me, and a void is forming around me.”
            </p>
            <p className="text-lg">
              Freud’s subsequent retreat from the study of psychological trauma
              has come to be viewed as a matter of scandal. His recantation has
              been vilified as an act of personal cowardice. Yet to engage in
              this kind of ad hominem attack seems like a curious relic of
              Freud’s own era, in which advances in knowledge were understood as
              Promethean acts of solitary male genius. No matter how cogent his
              arguments or how valid his observations, Freud’s discovery could
              not gain acceptance in the absence of a political and social
              context that would support the investigation of hysteria, wherever
              it might lead. Such a context had never existed in Vienna and was
              fast disappearing in France. Freud’s rival Janet, who never
              abandoned his traumatic theory of hysteria and who never retreated
              from his hysterical patients, lived to see his works forgotten and
              his ideas neglected.
            </p>
            <p className="text-lg">
              Over time, Freud’s repudiation of the traumatic theory of hysteria
              did take on a peculiarly dogmatic quality. The man who had pursued
              the investigation the furthest and grasped its implications the
              most completely retreated in later life into the most rigid
              denial. In the process, he disavowed his female patients. Though
              he continued to focus on his patients’ sexual lives, he no longer
              acknowledged the exploitative nature of women’s real experiences.
              With a stubborn persistence that drove him into ever greater
              convolutions of theory, he insisted that women imagined and longed
              for the abusive sexual encounters of which they complained.
            </p>
            <p className="text-lg">
              Perhaps the sweeping character of Freud’s recantation is
              understandable, given the extremity of the challenge he faced. To
              hold fast to his theory would have been to recognize the depths of
              sexual oppression of women and children. The only potential source
              of intellectual validation and support for this position was the
              nascent feminist movement, which threatened Freud’s cherished
              patriarchal values. To ally himself with such a movement was
              unthinkable for a man of Freud’s political beliefs and
              professional ambitions. Protesting too much, he dissociated
              himself at once from the study of psychological trauma and from
              women. He went on to develop a theory of human development in
              which the inferiority and mendacity of women are fundamental
              points of doctrine. In an antifeminist political climate, this
              theory prospered and thrived.
            </p>
            <p className="text-lg">
              The only one of the early investigators who carried the
              exploration of hysteria to its logical conclusion was Breuer’s
              patient Anna O. After Breuer abandoned her, she apparently
              remained ill for several years. And then she recovered. The mute
              hysteric who had invented the “talking cure” found her voice, and
              her sanity, in the women’s liberation movement. Under a pseudonym,
              Paul Berthold, she translated into German the classic treatise by
              Mary Wollstonecraft, <em>A Vindication of the Rights of Women</em>
              , and authored a play, <em>Women’s Rights</em>. Under her own
              name, Bertha Pappenheim became a prominent feminist social worker,
              intellectual, and organizer. In the course of a long and fruitful
              career she directed an orphanage for girls, founded a feminist
              organization for Jewish women, and traveled throughout Europe and
              the Middle East to campaign against the sexual exploitation of
              women and children. In the words of a colleague, “A volcano lived
              in this woman. ... Her fight against the abuse of women and
              children was almost a physically felt pain for her.” At her death,
              the philosopher Martin Buber commemorated her: “I not only admired
              her but loved her, and will love her until the day I die. There
              are people of spirit and there are people of passion, both less
              common than one might think. Rarer still are the people of spirit
              and passion. But rarest of all is a passionate spirit. Bertha
              Pappenheim was a woman with just such a spirit. Pass on her
              memory. Be witnesses that it still exists.”
            </p>
            <p className="text-lg">
              In her will, she expressed the wish that those who visited her
              grave would leave a small stone, “as a quiet promise ... to serve
              the mission of women’s duties and women’s joy unflinchingly and
              courageously.”
            </p>
            <p className="text-lg">
              The reality of psychological trauma was forced upon public
              consciousness once again by the catastrophe of the First World
              War. In this prolonged war of attrition, over eight million men
              died in four years. When the slaughter was over, four European
              empires had been destroyed, and many of the cherished beliefs that
              had sustained Western civilization had been shattered. One of the
              many casualties of the war’s devastation was the illusion of manly
              honor and glory in battle.
            </p>
            <p className="text-lg">
              Under conditions of unremitting exposure to the horrors of trench
              warfare, men began to break down in shocking numbers. Confined and
              rendered helpless, subjected to constant threat of annihilation,
              and forced to witness the mutilation and death of their comrades
              without any hope of reprieve, many soldiers began to act like
              hysterical women. They screamed and wept uncontrollably. They
              froze and could not move. They became mute and unresponsive. They
              lost their memory and their capacity to feel. The number of
              psychiatric casualties was so great that hospitals had to be
              hastily requisitioned to house them.
            </p>
            <p className="text-lg">
              According to one estimate, mental breakdowns represented 40
              percent of British battle casualties. Military authorities
              attempted to suppress reports of psychiatric casualties because of
              their demoralizing effect on the public.
            </p>
            <p className="text-lg">
              Initially, the symptoms of mental breakdown were attributed to a
              physical cause. The British psychologist Charles Myers, who
              examined some of the first cases, attributed their symptoms to the
              concussive effects of exploding shells and called the resulting
              nervous disorder “shell shock.” The name stuck, even though it
              soon became clear that the syndrome could be found in soldiers who
              had not been exposed to any physical trauma.
            </p>
            <p className="text-lg">
              Gradually, military psychiatrists were forced to acknowledge that
              the symptoms of shell shock were due to psychological trauma. The
              emotional stress of prolonged exposure to violent death was
              sufficient to produce a neurotic syndrome resembling hysteria in
              men.
            </p>
            <p className="text-lg">
              In the earlier debate on hysteria, centered upon the moral
              character of the patient, a normal soldier was expected to glorify
              war and betray no sign of emotion. The soldier who developed a
              traumatic neurosis was viewed as, at best, constitutionally
              inferior and, at worst, a malingerer and a coward. Medical writers
              of the period described these patients as “moral invalids.” Some
              military authorities maintained that these men did not deserve to
              be patients at all, suggesting they should be court-martialed or
              dishonorably discharged rather than treated.
            </p>
            <p className="text-lg">
              The most prominent proponent of the traditionalist view was the
              British psychiatrist Lewis Yealland. In his 1918 treatise,{" "}
              <em>Hysterical Disorders of Warfare</em>, he advocated a treatment
              strategy based on shaming, threats, and punishment. Hysterical
              symptoms such as mutism, sensory loss, or motor paralysis were
              treated with electric shocks. Patients were excoriated for their
              perceived laziness and cowardice. Those who exhibited what he
              called the “hideous enemy of negativism” were threatened with
              court martial. In one case, Yealland reported treating a mute
              patient by strapping him into a chair and applying electric shocks
              to his throat. The treatment continued for hours until the patient
              finally spoke, with Yealland exhorting, “Remember, you must behave
              as the hero I expect you to be—a man who has gone through so many
              battles should have better control of himself.”
            </p>
            <p className="text-lg">
              Progressive medical authorities argued, on the contrary, that
              combat neurosis was a bona fide psychiatric condition that could
              occur in soldiers of high moral character. They advocated humane
              treatment based on psychoanalytic principles. The champion of this
              more liberal perspective was W. H. R. Rivers, a physician with
              wide-ranging intellect who served as a professor of
              neurophysiology, psychology, and anthropology. His most famous
              patient was a young officer, Siegfried Sassoon, renowned for his
              bravery and war poetry.
            </p>
            <p className="text-lg">
              Sassoon gained notoriety when, while still in uniform, he publicly
              affiliated himself with the pacifist movement and denounced the
              war. His Soldier’s Declaration, written in 1917, reads like a
              contemporary antiwar manifesto: “I am making this statement as an
              act of willful defiance of military authority, because I believe
              that the war is being deliberately prolonged by those who have the
              power to end it. I am a soldier, convinced that I am acting on
              behalf of soldiers. I believe that this war, upon which I entered
              as a war of defense and liberation, has now become a war of
              aggression and conquest. I have seen and endured the sufferings of
              the troops, and I can no longer be a party to prolong these
              sufferings for ends which I believe to be evil and unjust.”
            </p>
            <p className="text-lg">
              Fearing that Sassoon would be court-martialed, one of his fellow
              officers, the poet Robert Graves, arranged for him to be
              hospitalized under Rivers’s care. His antiwar statement could then
              be attributed to a psychological collapse. Although Sassoon did
              not experience a complete emotional breakdown, he was clearly in a
              “bad state of nerves”—restless, irritable, and tormented by
              nightmares. His impulsive risk-taking and reckless exposure to
              danger earned him the nickname “Mad Jack.” Today, these symptoms
              would likely qualify for a diagnosis of posttraumatic stress
              disorder.
            </p>
            <p className="text-lg">
              Rivers’s treatment of Sassoon was intended to demonstrate the
              superiority of humane, enlightened care over the punitive
              traditionalist approach. The goal of treatment, as in all military
              medicine, was to return the patient to combat. Rivers did not
              question this goal. However, he argued for the efficacy of a
              talking cure. Rather than shaming Sassoon, Rivers treated him with
              dignity and respect, encouraging him to write and speak freely
              about the horrors of war. Sassoon expressed his gratitude,
              stating, “He made me feel safe at once, and seemed to know all
              about me. I would give a lot for a few gramophone records of my
              talks with Rivers. All that matters is my remembrance of the great
              and good man who gave me his friendship and guidance.”
            </p>

            <p className="text-lg">
              Rivers’s psychotherapy of his famous patient was judged a success.
              Sassoon publicly disavowed his pacifist statement and returned to
              combat. He did so even though his political convictions were
              unchanged. What induced him to return was the loyalty he felt to
              his comrades who were still fighting, his guilt at being spared
              their suffering, and his despair at the ineffectiveness of his
              isolated protest. Rivers, by pursuing a course of humane
              treatment, had established two principles that would be embraced
              by American military psychiatrists in the next war. He had
              demonstrated, first, that men of unquestioned bravery could
              succumb to overwhelming fear and, second, that the most effective
              motivation to overcome that fear was something stronger than
              patriotism, abstract principles, or hatred of the enemy. It was
              the love of soldiers for one another.
            </p>
            <p className="text-lg">
              Sassoon survived the war, but like many survivors with combat
              neurosis, he was condemned to relive it for the rest of his life.
              He devoted himself to writing and rewriting his war memoirs, to
              preserving the memory of the fallen, and to furthering the cause
              of pacifism. Though he recovered from his “bad case of nerves”
              sufficiently to have a productive life, he was haunted by the
              memory of those who had not been so fortunate:
            </p>
            <p className="text-lg">
              Shell shock. How many a brief bombardment had its long-delayed
              aftereffect in the minds of these survivors, many of whom had
              looked at their companions and laughed while inferno did its best
              to destroy them. Not then was their evil hour; but now; now, in
              the sweating suffocation of nightmare, in paralysis of limbs, in
              the stammering of dislocated speech. Worst of all, in the
              disintegration of those qualities through which they had been so
              gallant and selfless and uncomplaining—this, in the finer types of
              men, was the unspeakable tragedy of
              shell-shock............................... In the name of
              civilization these soldiers had been martyred, and it remained for
              civilization to prove that their martyrdom wasn’t a dirty swindle.
            </p>
            <p className="text-lg">
              Within a few years after the end of the war, medical interest in
              the subject of psychological trauma faded once again. Though
              numerous men with long-lasting psychiatric disabilities crowded
              the back wards of veterans’ hospitals, their presence had become
              an embarrassment to civilian societies eager to forget.
            </p>
            <p className="text-lg">
              In 1922 a young American psychiatrist, Abram Kardiner, returned to
              New York from a year-long pilgrimage to Vienna, where he had been
              analyzed by Freud. He was inspired by the dream of making a great
              discovery. “What could be more adventurous,” he thought, “than to
              be a Columbus in the relatively new science of the mind.” Kardiner
              set up a private practice of psychoanalysis, at a time when there
              were perhaps ten psychoanalysts in New York. He also went to work
              in the psychiatric clinic of the Veterans’ Bureau, where he saw
              numerous men with combat neurosis. He was troubled by the severity
              of their distress and by his inability to cure them. In
              particular, he remembered one patient whom he treated for a year
              without notable success. Later, when the patient thanked him,
              Kardiner protested, “But I never did anything for you. I certainly
              didn’t cure your symptoms.” “But, Doc,” the patient replied, “You
              did try. I’ve been around the Veterans Administration for a long
              time, and I know they don’t even try, and they don’t really care.
              But you did.”
            </p>
            <p className="text-lg">
              Kardiner subsequently acknowledged that the “ceaseless nightmare”
              of his own early childhood—poverty, hunger, neglect, domestic
              violence, and his mother’s untimely death—had influenced the
              direction of his intellectual pursuits and allowed him to identify
              with the traumatized soldiers. Kardiner struggled for a long time
              to develop a theory of war trauma within the intellectual
              framework of psychoanalysis, but he eventually abandoned the task
              as impossible and went on to a distinguished career, first in
              psychoanalysis and then, like his predecessor Rivers, in
              anthropology. In 1939, in collaboration with the anthropologist
              Cora du Bois, he authored a basic anthropology text,{" "}
              <em>The Individual and His Society</em>.
            </p>
            <p className="text-lg">
              It was only then, after writing this book, that he was able to
              return to the subject of war trauma, this time having in
              anthropology a conceptual framework that recognized the impact of
              social reality and enabled him to understand psychological trauma.
              In 1941 Kardiner published a comprehensive clinical and
              theoretical study, <em>The Traumatic Neuroses of War</em>, in
              which he complained of the episodic amnesia that had repeatedly
              disrupted the field: “The subject of neurotic disturbances
              consequent upon war has, in the past 25 years, been submitted to a
              good deal of capriciousness in public interest and psychiatric
              whims. The public does not sustain its interest, which was very
              great after World War I, and neither does psychiatry. Hence these
              conditions are not subject to continuous study... but only to
              periodic efforts which cannot be characterized as very diligent.
              In part, this is due to the declining status of the veteran after
              a war...” Though not true in psychiatry generally, it is a
              deplorable fact that each investigator who undertakes to study
              these conditions considers it his sacred obligation to start from
              scratch and work at the problem as if no one had ever done
              anything with it before.
            </p>
            <p className="text-lg">
              Kardiner went on to develop the clinical outlines of the traumatic
              syndrome as it is understood today. His theoretical formulation
              strongly resembled Janet’s late nineteenth-century formulations of
              hysteria. Indeed, Kardiner recognized that war neuroses
              represented a form of hysteria, but he also realized that the term
              had once again become so pejorative that its very use discredited
              patients: “When the word ‘hysterical’... is used, its social
              meaning is that the subject is a predatory individual, trying to
              get something for nothing. The victim of such a neurosis is,
              therefore, without sympathy in court, and... without sympathy from
              his physicians, who often take... ‘hysterical’ to mean that the
              individual is suffering from some persistent form of wickedness,
              perversity, or weakness of will.”
            </p>
            <p className="text-lg">
              With the advent of the Second World War came a revival of medical
              interest in combat neurosis. In the hopes of finding a rapid,
              efficacious treatment, military psychiatrists tried to remove the
              stigma from the stress reactions of combat. It was recognized for
              the first time that any man could break down under fire and that
              psychiatric casualties could be predicted in direct proportion to
              the severity of combat exposure. Indeed, considerable effort was
              devoted to determining the exact level of exposure guaranteed to
              produce a psychological collapse. A year after the war ended, two
              American psychiatrists, J. W. Appel and G. W. Beebe, concluded
              that 200-240 days in combat would suffice to break even the
              strongest soldier: “There is no such thing as ‘getting used to
              combat.’ Each moment of combat imposes a strain so great that men
              will break down in direct relation to the intensity and duration
              of their exposure. Thus psychiatric casualties are as inevitable
              as gunshot and shrapnel wounds in warfare.”
            </p>
            <p className="text-lg">
              American psychiatrists focused their energy on identifying those
              factors that might protect against acute breakdown or lead to
              rapid recovery. They discovered once again what Rivers had
              demonstrated in his treatment of Sassoon: the power of emotional
              attachments among fighting men. In 1947 Kardiner revised his
              classic text in collaboration with Herbert Spiegel, a psychiatrist
              who had just returned from treating men at the front. Kardiner and
              Spiegel argued that the strongest protection against overwhelming
              terror was the degree of relatedness between the soldier, his
              immediate fighting unit, and their leader. Similar findings were
              reported by the psychiatrists Roy Grinker and John Spiegel, who
              noted that the situation of constant danger led soldiers to
              develop extreme emotional dependency upon their peer group and
              leaders. They observed that the strongest protection against
              psychological breakdown was the morale and leadership of the small
              fighting units.
            </p>
            <p className="text-lg">
              The treatment strategies that evolved during the Second World War
              were designed to minimize the separation between the afflicted
              soldier and his comrades. Opinion favored a brief intervention as
              close as possible to the battle lines, with the goal of rapidly
              returning the soldier to his fighting unit. In their quest for a
              quick and effective method of treatment, military psychiatrists
              once again discovered the mediating role of altered states of
              consciousness in psychological trauma. They found that
              artificially induced altered states could be used to gain access
              to traumatic memories. Kardiner and Spiegel used hypnosis to
              induce an altered state, while Grinker and Spiegel used sodium
              amytal, a technique they called “narcosynthesis.” As in the
              earlier work on hysteria, the focus of the “talking cure” for
              combat neurosis was on the recovery and cathartic reliving of
              traumatic memories, with all their attendant emotions of terror,
              rage, and grief.
            </p>
            <p className="text-lg">
              These wise warnings, however, were generally ignored. The new
              rapid treatment for psychiatric casualties was considered highly
              successful at the time. According to one report, 80 percent of the
              American fighting men who succumbed to acute stress in the Second
              World War were returned to some kind of duty, usually within a
              week. Thirty percent were returned to combat units. Little
              attention was paid to the fate of these men once they returned to
              active duty, let alone after they returned home from the war. As
              long as they could function on a minimal level, they were thought
              to have recovered. With the end of the war, the familiar process
              of amnesia set in once again. There was little medical or public
              interest in the psychological condition of returning soldiers. The
              lasting effects of war trauma were once again forgotten.
            </p>
            <p className="text-lg">
              Systematic, large-scale investigation of the long-term
              psychological effects of combat was not undertaken until after the
              Vietnam War. This time, the motivation for study came not from the
              military or the medical establishment, but from the organized
              efforts of soldiers disaffected from war.
            </p>
            <p className="text-lg">
              In 1970, while the Vietnam War was at its height, two
              psychiatrists, Robert Jay Lifton and Chaim Shatan, met with
              representatives of a new organization called Vietnam Veterans
              Against the War. For veterans to organize against their own war
              while it was still ongoing was virtually unprecedented. This small
              group of soldiers, many of whom had distinguished themselves for
              bravery, returned their medals and offered public testimony of
              their war crimes. Their presence contributed moral credibility to
              a growing antiwar movement. “They raised questions,” Lifton wrote,
              “about everyone’s version of the socialized warrior and the war
              system, and exposed their country’s counterfeit claim of a just
              war.”
            </p>
            <p className="text-lg">
              The antiwar veterans organized what they called “rap groups.” In
              these intimate meetings of their peers, Vietnam veterans retold
              and relived the traumatic experiences of war. They invited
              sympathetic psychiatrists to offer them professional assistance.
              Shatan later explained why the men sought help outside of a
              traditional psychiatric setting: “A lot of them were ‘hurting,’ as
              they put it. But they didn’t want to go to the Veterans’
              Administration for help. They needed something that would take
              place on their own turf, where they were in charge.”
            </p>
            <p className="text-lg">
              The purpose of the rap groups was twofold: to give solace to
              individual veterans who had suffered psychological trauma, and to
              raise awareness about the effects of war. The testimony that came
              out of these groups focused public attention on the lasting
              psychological injuries of combat. These veterans refused to be
              forgotten. Moreover, they refused to be stigmatized. They insisted
              upon the rightness, the dignity of their distress. In the words of
              a marine veteran, Michael Norman:
            </p>
            <p className="text-lg">
              Family and friends wondered why we were so angry. What are you
              crying about? they would ask. Why are you so ill-tempered and
              disaffected. Our fathers and grandfathers had gone off to war,
              done their duty, come home and got on with it. What made our
              generations so different? As it turns out, nothing. No difference
              at all. When old soldiers from “good” wars are dragged from behind
              the curtain of myth and sentiment and brought into the light, they
              too seem to smolder with choler and alienation. So we were angry.
              Our anger was old, atavistic. We were angry as all civilized men
              who have ever been sent to make murder in the name of virtue were
              angry.
            </p>
            <p className="text-lg">
              By the mid-1970s, hundreds of informal rap groups had been
              organized. By the end of the decade, the political pressure from
              veterans’ organizations resulted in a legal mandate for a
              psychological treatment program, called Operation Outreach, within
              the Veterans’ Administration. Over a hundred outreach centers were
              organized, staffed by veterans and based upon a self-help,
              peer-counseling model of care. The insistent organizing of
              veterans also provided the impetus for systematic psychiatric
              research. In the years following the Vietnam War, the Veterans’
              Administration commissioned comprehensive studies tracing the
              impact of wartime experiences on the lives of returning veterans.
              A five-volume study on the legacies of Vietnam delineated the
              syndrome of post-traumatic stress disorder and demonstrated beyond
              any reasonable doubt its direct relationship to combat exposure.
            </p>
            <p className="text-lg">
              The moral legitimacy of the antiwar movement and the national
              experience of defeat in a discredited war had made it possible to
              recognize psychological trauma as a lasting and inevitable legacy
              of war. In 1980, for the first time, the characteristic syndrome
              of psychological trauma became a “real” diagnosis. In that year
              the American Psychiatric Association included in its official
              manual of mental disorders a new category, called “post-traumatic
              stress disorder.” The clinical features of this disorder were
              congruent with the traumatic neurosis that Kardiner had outlined
              forty years before. Thus the syndrome of psychological trauma,
              periodically forgotten and periodically rediscovered through the
              past century, finally attained formal recognition within the
              diagnostic canon.
            </p>
            <p className="text-lg">
              The late nineteenth-century studies of hysteria foundered on the
              question of sexual trauma. At the time of these investigations
              there was no awareness that violence is a routine part of women’s
              sexual and domestic lives. Freud glimpsed this truth and retreated
              in horror. For most of the twentieth century, it was the study of
              combat veterans that led to the development of a body of knowledge
              about traumatic disorders. Not until the women’s liberation
              movement of the 1970s was it recognized that the most common
              post-traumatic disorders are those not of men in war but of women
              in civilian life.
            </p>
            <p className="text-lg">
              The real conditions of women’s lives were hidden in the sphere of
              the personal, in private life. The cherished value of privacy
              created a powerful barrier to consciousness and rendered women’s
              reality practically invisible. To speak about experiences in
              sexual or domestic life was to invite public humiliation,
              ridicule, and disbelief. Women were silenced by fear and shame,
              and the silence of women gave license to every form of sexual and
              domestic exploitation.
            </p>
            <p className="text-lg">
              Women did not have a name for the tyranny of private life. It was
              difficult to recognize that a well-established democracy in the
              public sphere could coexist with conditions of primitive autocracy
              or advanced dictatorship in the home. Thus, it was no accident
              that in the first manifesto of the resurgent American feminist
              movement, Betty Friedan called the woman question the “problem
              without a name.” It was also no accident that the initial method
              of the movement was called “consciousness-raising.”
            </p>
            <p className="text-lg">
              Consciousness-raising took place in groups that shared many
              characteristics of the veterans’ rap groups and of psychotherapy:
              they had the same intimacy, the same confidentiality, and the same
              imperative of truth-telling. The creation of a privileged space
              made it possible for women to overcome the barriers of denial,
              secrecy, and shame that prevented them from naming their injuries.
              In the protected environment of the consulting room, women had
              dared to speak of rape, but the learned men of science had not
              believed them. In the protected environment of
              consciousness-raising groups, women spoke of rape and other women
              believed them.
            </p>
            <p className="text-lg">
              A poem of this era captures the exhilaration that women felt in
              speaking aloud and being heard:
            </p>
            <p className="text-lg" id="neurosis">
              <strong>THE COMBAT NEUROSIS OF THE SEX WAR</strong>
              <br />
              Today
              <br />
              in my small natural body I<br />
              sit and learn—
              <br />
              my woman’s body
              <br />
              like yours
              <br />
              target on any street
              <br />
              taken from me
              <br />
              at the age of twelve . . . I<br />
              watch a woman dare
              <br />I dare to watch a woman we dare to raise our voices.
            </p>
            <p className="text-lg">
              Though the methods of consciousness-raising were analogous to
              those of psychotherapy, their purpose was to effect social rather
              than individual change. A feminist understanding of sexual assault
              empowered victims to breach the barriers of privacy, to support
              one another, and to take collective action. Consciousness-raising
              was also an empirical method of inquiry. Kathie Sarachild, one of
              the originators of consciousness-raising, described it as a
              challenge to the prevailing intellectual orthodoxy: “The decision
              to emphasize our own feelings and experiences as women and to test
              all generalizations and reading we did by our own experience was
              actually the scientific method of research. We were in effect
              repeating the 17th century challenge of science to scholasticism:
              ‘study nature, not books,’ and put all theories to the test of
              living practice and action.”
            </p>
            <p className="text-lg">
              The process that began with consciousness-raising led by stages to
              increased levels of public awareness. The first public speak out
              on rape was organized by the New York Radical Feminists in 1971.
              The first International Tribunal on Crimes Against Women was held
              in Brussels in 1976. Rape reform legislation was initiated in the
              United States by the National Organization for Women in the
              mid-1970s. Within a decade reforms had been enacted in all fifty
              states, in order to encourage the silenced victims of sexual
              crimes to come forward.
            </p>
            <p className="text-lg">
              Beginning in the mid-1970s, the American women’s movement also
              generated an explosion of research on the previously ignored
              subject of sexual assault. In 1975, in response to feminist
              pressure, a center for research on rape was created within the
              National Institute of Mental Health. For the first time the doors
              were opened to women as the agents rather than the objects of
              inquiry. In contrast to the usual research norms, most of the
              “principal investigators” funded by the center were women.
              Feminist investigators labored close to their subjects. They
              repudiated emotional detachment as a measure of the value of
              scientific investigation and frankly honored their emotional
              connection with their informants. As in the heroic age of
              hysteria, long and intimate personal interviews became once again
              a source of knowledge.
            </p>
            <p className="text-lg">
              The results of these investigations confirmed the reality of
              women’s experiences that Freud had dismissed as fantasies a
              century before. Sexual assaults against women and children were
              shown to be pervasive and endemic in our culture. The most
              sophisticated epidemiological survey was conducted in the early
              1980s by Diana Russell, a sociologist and human rights activist.
              Over 900 women, chosen by random sampling techniques, were
              interviewed in depth about their experiences of domestic violence
              and sexual exploitation. The results were horrifying. One woman in
              four had been raped. One woman in three had been sexually abused
              in childhood.
            </p>
            <p className="text-lg">
              In addition to documenting pervasive sexual violence, the feminist
              movement offered a new language for understanding the impact of
              sexual assault. Entering the public discussion of rape for the
              first time, women found it necessary to establish the obvious:
              that rape is an atrocity. Feminists redefined rape as a crime of
              violence rather than a sexual act. This simplistic formulation was
              advanced to counter the view that rape fulfilled women’s deepest
              desires, a view then prevailing in every form of literature, from
              popular pornography to academic texts.
            </p>
            <p className="text-lg">
              Feminists also redefined rape as a method of political control,
              enforcing the subordination of women through terror. The author
              Susan Brownmiller, whose landmark treatise on rape established the
              subject as a matter for public debate, called attention to rape as
              a means of maintaining male power: “Man’s discovery that his
              genitalia could serve as a weapon to generate fear must rank as
              one of the most important discoveries of prehistoric times, along
              with the use of fire and the first crude stone axe. From
              prehistoric times to the present, I believe, rape has played a
              critical function. It is nothing more or less than a conscious
              process of intimidation by which all men keep all women in a state
              of fear.”
            </p>
            <p className="text-lg">
              The women’s movement not only raised public awareness of rape but
              also initiated a new social response to victims. The first rape
              crisis center opened its doors in 1971. A decade later, hundreds
              of such centers had sprung up throughout the United States.
              Organized outside the framework of medicine or the mental health
              system, these grassroots agencies offered practical, legal, and
              emotional support to rape victims. Rape crisis center volunteers
              often accompanied victims to the hospital, to the police station,
              and to the courthouse, in order to advocate for the dignified and
              respectful care that was so conspicuously lacking. Though their
              efforts were often met with hostility and resistance, they were
              also at times a source of inspiration for professional women
              working within those institutions.
            </p>
            <p className="text-lg">
              In 1972, Ann Burgess, a psychiatric nurse, and Lynda Holmstrom, a
              sociologist, embarked on a study of the psychological effects of
              rape. They arranged to be on call day or night in order to
              interview and counsel any rape victim who came to the emergency
              room of Boston City Hospital. In a year they saw 92 women and 37
              children. They observed a pattern of psychological reactions which
              they called “rape trauma syndrome.” They noted that women
              experienced rape as a life-threatening event, having generally
              feared mutilation and death during the assault. They remarked that
              in the aftermath of rape, victims complained of insomnia, nausea,
              startle responses, and nightmares, as well as dissociative or
              numbing symptoms. And they commented that some of the victims’
              symptoms resembled those previously described in combat veterans.
            </p>
            <p className="text-lg">
              Rape was the feminist movement’s initial paradigm for violence
              against women in the sphere of personal life. As understanding
              deepened, the investigation of sexual exploitation progressed to
              encompass relationships of increasing complexity, in which
              violence and intimacy commingled. The initial focus on street
              rape, committed by strangers, led step by step to the exploration
              of acquaintance rape, date rape, and rape in marriage. The initial
              focus on rape as a form of violence against women led to the
              exploration of domestic battery and other forms of private
              coercion. And the initial focus on the rape of adults led
              inevitably to a rediscovery of the sexual abuse of children.
            </p>
            <p className="text-lg">
              As in the case of rape, the initial work on domestic violence and
              the sexual abuse of children grew out of the feminist movement.
              Services for victims were organized outside of the traditional
              mental health system, often with the assistance of professional
              women inspired by the movement. The pioneering research on the
              psychological effects of victimization was carried out by women
              who saw themselves as active and committed participants in the
              movement. As in the case of rape, the psychological investigations
              of domestic violence and child sexual abuse led to a rediscovery
              of the syndrome of psychological trauma. The psychologist Lenore
              Walker, describing women who had fled to a shelter, initially
              defined what she called the “battered woman syndrome.” My own
              initial descriptions of the psychology of incest survivors
              essentially recapitulated the late nineteenth-century observations
              of hysteria.
            </p>
            <p className="text-lg">
              Only after 1980, when the efforts of combat veterans had
              legitimated the concept of post-traumatic stress disorder, did it
              become clear that the psychological syndrome seen in survivors of
              rape, domestic battery, and incest was essentially the same as the
              syndrome seen in survivors of war. The implications of this
              insight are as horrifying in the present as they were a century
              ago: the subordinate condition of women is maintained and enforced
              by the hidden violence of men. There is war between the sexes.
              Rape victims, battered women, and sexually abused children are its
              casualties. Hysteria is the combat neurosis of the sex war.
            </p>
            <p className="text-lg">
              Fifty years ago, Virginia Woolf wrote that “the public and private
              worlds are inseparably connected ... the tyrannies and servilities
              of one are the tyrannies and servilities of the other.” It is now
              apparent also that the traumas of one are the traumas of the
              other. The hysteria of women and the combat neurosis of men are
              one. Recognizing the commonality of affliction may even make it
              possible at times to transcend the immense gulf that separates the
              public sphere of war and politics—the world of men—and the private
              sphere of domestic life—the world of women.
            </p>
            <p className="text-lg">
              Will these insights be lost once again? At the moment, the study
              of psychological trauma seems to be firmly established as a
              legitimate field of inquiry. With the creative energy that
              accompanies the return of repressed ideas, the field has expanded
              dramatically. Twenty years ago, the literature consisted of a few
              out-of-print volumes moldering in neglected corners of the
              library. Now each month brings forth the publication of new books,
              new research findings, new discussions in the public media.
            </p>
            <p className="text-lg">
              But history teaches us that this knowledge could also disappear.
              Without the context of a political movement, it has never been
              possible to advance the study of psychological trauma. The fate of
              this field of knowledge depends upon the fate of the same
              political movement that has inspired and sustained it over the
              last century. In the late nineteenth century the goal of that
              movement was the establishment of secular democracy. In the early
              twentieth century its goal was the abolition of war. In the late
              twentieth century its goal was the liberation of women. All of
              these goals remain. All are, in the end, inseparably connected.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
