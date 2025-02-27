import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Psychological Trauma: A Historical Perspective",
  description:
    "A page presenting the extracted content (pages 4–7) from 'Psychological trauma: a Historical Perspective' by Edgar Jones & Simon Wessely.",
};

export default function PsychologicalTrauma() {
  const navLinks: NavLink[] = [
    { href: "#youtube", label: "Trauma and the Brain" },
    { href: "#authors", label: "Authors" },
    { href: "#paradigm-change", label: "Paradigm Change" },
    { href: "#first-world-war", label: "First World War" },
    { href: "#second-world-war", label: "Second World War" },
    { href: "#ptsd-defined", label: "PTSD: Defined" },
    { href: "#ptsd-vietnam-present", label: "PTSD: Vietnam" },
    { href: "#ptsd-history", label: "PTSD and History" },
    { href: "#ptsd-culture", label: "PTSD and Culture" },
    { href: "#ptsd-gulf", label: "PTSD and Gulf War" },
    { href: "#additional-info", label: "Additional Information" },
    { href: "#types-of-violence", label: "Types of Violence & Abuse" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* For medium screens and up: Navigation left, PageTitle centered */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          <div className="flex-grow text-center">
            <PageTitle
              title="Psychological Trauma: A Historical Perspective"
              author="Edgar Jones & Simon Wessely"
            />
          </div>
          <div className="flex-none w-24" />
        </div>
        {/* Mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Psychological Trauma: A Historical Perspective" />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-8 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* YouTube Embed Section */}
        <section id="youtube" className="space-y-8">
          <h2 className="text-2xl font-semibold text-center md:text-left">
            Trauma and the Brain
          </h2>
          <div className="flex justify-center">
            <div className="max-w-4xl w-[600px] h-[360px] lg:w-[800px] lg:h-[400px]">
              <iframe
                src="https://www.youtube.com/embed/4-tcKYx24aA?si=CrutjdLuAz71P5dy"
                title="Mic Check by Suheir Hammad"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>
        {/* Authors Section */}
        <section id="authors" className="space-y-4">
          <h2 className="text-2xl font-semibold">Authors</h2>
          <p className="text-lg">
            <strong>Edgar Jones </strong>
            MA, DPhil, PhD, FRHistS, DipClinPsych is Professor of the History of
            Medicine and Psychiatry at the Institute of Psychiatry and King’s
            Centre for Military Health Research, London, UK. He completed a
            doctorate in clinical psychopathology at Guy’s Hospital, having
            previously studied history at Nuffield College, Oxford. His research
            interests include the nature and treatment of post-combat disorders,
            including PTSD, and the history of military psychiatry.
          </p>
          <p className="text-lg">
            <strong>Simon Wessely </strong>
            MA, MSc, MD, FRCP, FRCPsych, FMedSci, is Professor of
            Epidemiological and Liaison Psychiatry at Guy’s, King’s and St
            Thomas’ School of Medicine and the Institute of Psychiatry, London,
            UK. He qualified in medicine from the University of Cambridge and
            the University of Oxford, and worked in general medicine in
            Newcastle upon Tyne. He trained in psychiatry at the Maudsley
            Hospital and the National Hospital for Neurology and Neurosurgery,
            London, and in epidemiology at the London School of Hygiene and
            Tropical Medicine. His research interests include the nature,
            epidemiology and treatment of chronic fatigue syndrome, and other
            unexplained syndromes, such as Gulf War-related illness.
          </p>
        </section>

        {/* Paradigm Change Section */}
        <section id="paradigm-change" className="space-y-4">
          <h2 className="text-2xl font-semibold">Paradigm Change</h2>
          <p className="text-lg">
            During the 1970s a paradigm shift occurred in the way that
            psychological trauma was conceived and managed. Until then, it was
            argued that individuals without a family history of mental illness
            or other evidence of predisposition, if exposed to a traumatic
            event, might develop acute psychological distress, but would then go
            on to recover naturally with no long‐term effects, rather like a
            self‐healing wound. The discovery of a so‐called ‘delayed stress
            syndrome’ during the Vietnam War seemed to show that healthy
            soldiers subjected to stress could suffer chronic, adverse effects
            that were not apparent at the time of their exposure. The terrifying
            event, until then regarded merely as a trigger, assumed a crucial
            importance in the genesis and description of psychiatric breakdown.
          </p>
          <p className="text-lg">
            This new concept of psychological trauma also saw the retreat into
            obscurity of ‘secondary gain’, the attention and rewards that a
            patient received as a consequence of suffering from a recognized
            disorder. Before the 1970s anyone who broke down and suffered
            long‐term effects was considered constitutionally vulnerable or the
            product of a degenerate family; in either case, responsibility lay
            with the individual. Not everything, however, was attributed to
            pre‐exposure predisposition – since it was also considered that
            ‘secondary gain’, which was often but not exclusively financial,
            could inhibit the process of recovery. After the admission of
            post‐traumatic stress disorder (PTSD) to DSM‐III in 1980, causation
            was attached to the event itself and individual sufferers were
            largely absolved from blame or responsibility. The novel diagnosis
            reflected a general cultural shift from the group towards the
            subject. Psychological casualties in both World Wars were, in part,
            considered a failure of group cohesiveness and morale. The
            vulnerable, it was argued, could be protected by training,
            comradeship and unity of purpose. Breakdown ultimately reflected on
            organization and leadership. The acceptance of PTSD by the American
            Psychiatric Association was in part a response to the anti‐Vietnam
            War movement, which portrayed the veteran as a victim of an ‘insane’
            and unpopular war, but was also a product of a society that regarded
            the needs of the individual as paramount, in which rights triumphed
            over duties.
          </p>
        </section>

        {/* The First World War and Psychological Trauma Section */}
        <section id="first-world-war" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The First World War and Psychological Trauma
          </h2>
          <p className="text-lg">
            During the First World War the conscription of a mass civilian army,
            which in turn was subjected to the emotional pressures of trench
            warfare, led to an epidemic of post‐trauma illness, termed ‘shell
            shock’. At first an organic explanation was proposed: a microscopic
            cerebral haemorrhage caused by either the concussive or the toxic
            effects of an exploding shell. When it became clear that many
            servicemen with the symptoms of shell shock had not been close to an
            explosion and some not even exposed to combat, other explanations
            were considered. The intense stress of battle, or its immediate
            prospect, were identified as causal factors. W H R Rivers, the
            medically trained anthropologist who treated soldiers at
            Craiglockhart, believed that the disorder resulted from a failure of
            repression. Regular soldiers, he argued, had far greater time to
            build up an effective mechanism to control their fear and to master
            the inevitable conflict between duty and self‐preservation.
            Conscripts, who had not been able to establish these protective
            defences, succumbed to the pressures of the battlefield more
            readily.
          </p>
          <p className="text-lg">
            These ideas led post‐war military planners to believe that the
            problem of war‐related psychological injury was largely preventable.
            The Southborough Committee, set up in 1920 to investigate the nature
            of shell shock, concluded that well‐led, highly trained units with
            high morale would be virtually immune from post‐trauma illness.
          </p>
          <p className="text-lg">
            While the term ‘shell shock’ entered the language, particularly
            through the writings of Graves, Sassoon and Owen, and where it has
            remained ever since (in the novels, for example, of Pat Barker),
            paradoxically its acceptance in both military and medical circles
            declined. By 1916 the army medical services had attempted to
            substitute the terms ‘Not Yet Diagnosed, Nervous’ (NYDN) and
            neurasthenia, and the following year the term ‘shell shock’ was
            officially banned, although it continued to be widely employed by
            Royal Army Medical Corps (RAMC) doctors and their patients. However,
            the post‐war return to a small, regular army combined with a
            reluctance to engage in any serious conflict in Europe led to
            reduced use of the label, though concerns continued to be expressed
            about the complex boundaries between cowardice and psychiatric
            injury.
          </p>
          <p className="text-lg">
            During the First World War serious manpower shortages led to a
            concerted drive to find an effective treatment for post‐trauma
            illness (Table 1). Many contemporaries believed that ‘forward
            psychiatry’ – the so‐called ‘PIE’ method – was the solution. It
            relied on three principles: proximity to battle, immediacy of
            treatment and expectation of recovery. In essence, soldiers were
            referred to specialist units located about 20 miles from the front,
            where they were fed, rested and put on a programme of graduated
            exercise for 2 to 6 weeks. At the time, clinicians claimed that at
            least 80% of admissions were returned to combat units, though recent
            research has questioned the accuracy of these outcomes. ‘PIE’ has
            remained the standard intervention for combat stress reaction and
            was employed in the Korean War, the Vietnam War, the Lebanon and
            recent Gulf conflicts.
          </p>
        </section>
        {/* The Second World War and Psychological Trauma Section */}
        <section id="second-world-war" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Second World War and Psychological Trauma
          </h2>
          <p className="text-lg">
            In an effort to prevent the epidemic of shell shock seen in 1914–18,
            both the civil and military authorities outlawed the term in 1939
            and announced that no war pensions would be awarded for psychiatric
            war injuries – the so‐called ‘Horder’ committee. Henceforth,
            soldiers traumatized by the stress of combat were to be diagnosed as
            suffering from ‘exhaustion’ and retained within the forces (Table
            2). The term was chosen to imply that this was not a serious medical
            disorder but a condition that would recover naturally with rest and
            respite.
          </p>
          <p className="text-lg">
            Abreaction and the ventilation of emotion were not generally
            considered effective treatments. The control of fear and restoration
            of physical well‐being were emphasized.
          </p>
          <p className="text-lg">
            The emergence of psychiatric casualties after Dunkirk, among
            seasoned troops in the Western Desert and, later, the modest
            performance of units in Normandy that had proved highly effective in
            North Africa and Italy, demonstrated that post‐trauma illness was
            not entirely preventable. Neither the public nor parliament was at
            ease with the ban on psychiatric discharges or pensions. It was
            gradually accepted that even elite soldiers exposed to intense or
            protracted stress could cease to function – ‘every man has his
            breaking point’.
          </p>
          <p className="text-lg">
            Furthermore, statistics recorded by doctors for internal assessment
            showed forward units had returned only 20–30% of troops to combat
            units, though around 70% were retained in the forces in base or
            non‐combatant roles. Treatment was not as effective as clinicians in
            the First World War had claimed.
          </p>
        </section>
        {/* PTSD Defined Section */}
        <section id="ptsd-defined" className="space-y-4">
          <h2 className="text-2xl font-semibold">PTSD Defined</h2>
          <p className="text-lg">
            In the aftermath of the Second World War, US military psychiatrists
            undertook a number of retrospective analyses to discover how troops
            performed in battle and to assess the incidence of psychiatric
            casualties. In the light of this work, the US Army deployed
            specialist psychiatric teams during the Korean War. DSM‐I, published
            during this conflict in 1952, contained the new category ‘gross
            stress reaction’, though no operational definition was provided. It
            described the extreme behavioural responses of normal individuals to
            exceptional stressors such as war or natural catastrophes. Published
            in 1968 while the Vietnam War was in progress, DSM‐II introduced the
            term ‘transient situational disturbance’. This included all acute
            reactions (even brief psychotic episodes) to stressful exposures.
            Central, however, to both the DSM‐I and DSM‐II formulations was the
            concept that these reactions would be short‐lived.
          </p>
          <p className="text-lg">
            Psychiatric reactions arising de novo in the context of combat were
            therefore expected to be brief and likely to resolve with a period
            of rest and recuperation. If symptoms or an inability to function
            endured, then it was argued that the true causes lay in earlier
            life, with the stress of battle acting only as a trigger. Although
            this interpretation was not challenged in either the First or Second
            World Wars, widespread public sympathy for men who broke down in
            battle did lead to large numbers of veterans being awarded war
            pensions for psychological disorders. ‘Shell shock’ was the first
            official acknowledgement of war‐related psychiatric injury, as
            distinct from major mental illness.
          </p>
          <p className="text-lg">
            Codified in DSM‐III (1980), PTSD was originally termed ‘Post‐Vietnam
            syndrome’ or ‘delayed‐stress syndrome’, having first been identified
            in veterans who had returned to the United States (Table 3). The
            treatment of acute combat fatigue (today termed ‘combat stress
            reaction’) had apparently been well managed by military
            psychiatrists attached to combat divisions. War‐related psychiatric
            injury rates in Vietnam were low. However, some servicemen who had
            returned to civilian life presented with what appeared to be a range
            of delayed symptoms. Mental‐health professionals who were
            politically opposed to the Vietnam War took up their cases. Charles
            R Figley, himself a Vietnam veteran and anti‐war protestor,
            completed a doctorate on PTSD as part of his aim to demonstrate that
            ‘the toll of war went far beyond the battlefield’, and it is fair to
            say that he was already looking for what he would later find.
          </p>
          <p className="text-lg">
            Robert J Lifton, a prominent anti‐war campaigner, was a key member
            of the sub‐commission for reactive disorders that proposed the
            formal recognition of PTSD by the American Psychiatric Association,
            and was tasked by Nancy Andreasen to draw up what would become the
            definition of PTSD. In part, validation of the disorder’s existence
            was a further way of undermining the US Government’s pursuit of the
            war. If it could be shown that the conflict caused long‐term and
            widespread psychological injury to US servicemen, then this was
            further reason to call the campaign to a close. Hence, along with
            ‘Rentenkampfneurosen’ (pension struggle neurosis defined in pre‐1914
            Germany), PTSD was one of the few politically driven psychiatric
            diagnoses.
          </p>
          <p className="text-lg">
            PTSD entered the psychiatric canon obliquely – not as a result of
            careful epidemiological or nosological research but more as a result
            of politically motivated lobbying. Later observers have located its
            origins less in the jungles of Vietnam and more in the
            sociopolitical climate of America. Atrocities such as My Lai were
            given unprecedented publicity by a television media able to provide
            graphic pictures in the homes of most families. The intense and
            critical attention given to the War was quite novel, contrasting
            with the careful censorship employed during the Second World War to
            maintain morale amongst civilians. As a result, veterans, apparently
            subjected to stresses never felt by returning servicemen from other
            wars, were said to have become profoundly alienated. To the anti‐war
            campaigners, they were a special case. A further factor driving the
            acceptance of a new psychiatric disorder was the enormous financial
            commitment made by the Veterans Administration (VA) in the treatment
            of PTSD, an investment that did not and has not led to any
            conspicuous therapeutic success, at least as far as Vietnam veterans
            are concerned.
          </p>
        </section>
        {/* PTSD: from Vietnam to the Present Section */}
        <section id="ptsd-vietnam-present" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            PTSD: from Vietnam to the Present
          </h2>
          <p className="text-lg">
            Since its formal recognition in 1980, PTSD has become a high-profile
            psychiatric disorder. The stressor criteria for PTSD have undergone
            progressive relaxation from the initial formulation of a
            life-threatening event (‘existence of a recognizable stressor that
            would evoke significant symptoms of distress in almost everyone’) to
            the current requirement that the individual should have
            ‘experienced, witnessed, or was confronted with an event or events
            that involved actual or threatened death or serious injury, or a
            threat to the physical integrity of self or others’. A change in
            societal values from groups to individuals, an increase in concern
            for the problems of victims and a media voracious for human-interest
            stories have all added to the popular acceptance of PTSD.
          </p>
        </section>
        {/* PTSD and History Section */}
        <section id="ptsd-history" className="space-y-4">
          <h2 className="text-2xl font-semibold">PTSD and History</h2>
          <p className="text-lg">
            A recent retrospective study of randomly selected samples of UK
            ex-servicemen of the Boer War, First and Second World Wars and the
            Gulf conflict showed that the incidence of flashbacks (a key PTSD
            symptom) was not uniform across all campaigns. Nine percent of Gulf
            veterans reported flashbacks, while only 0.5% of a sample of 640
            First World War veterans and 1.4% of a sample of 367 Second World
            War veterans described the symptom. None of the 400 Boer War
            servicemen in the investigation appeared to have experienced
            flashbacks. If PTSD were a universal response to exceptionally
            traumatic situations, then arguably such dramatic differences in the
            incidence of flashbacks would not have arisen. Nevertheless, it
            remains possible that reporting biases account for some of the
            differences between wars.
          </p>
        </section>
        {/* PTSD and Culture Section */}
        <section id="ptsd-culture" className="space-y-4">
          <h2 className="text-2xl font-semibold">PTSD and Culture</h2>
          <p className="text-lg">
            There is growing empirical support for Young’s seminal
            interpretation of PTSD as a contemporary culture‐bound syndrome.
            Although symptom clusters representative of the diagnosis can be
            found in the past, epidemiological research suggests that their
            incidence was significantly lower than today. Evidence from earlier
            conflicts suggests that trauma tended to be somatized. During the
            First World War, for example, servicemen exposed to the intense or
            sustained stress of battle were often diagnosed as suffering from
            disordered action of the heart (characterized by rapid or irregular
            heartbeat, shortness of breath and chest pain) or from shell shock,
            typified by fatigue, contractures, tics, tremor and paresis. Framed
            against an epidemic of peptic ulcer, post‐combat disorders in the
            Second World War were often expressed and explained in
            gastrointestinal terms.
          </p>
          <p className="text-lg">
            Given the evolving nature of health fears and the creation of new
            risks by advances in technology, the psychopathology of trauma is
            unlikely to be static and culture appears to exert an influence on
            the expression of distressing memories. The concept of a ‘universal
            trauma reaction’, by which terrifying experiences are permanently
            and accurately preserved by being encoded in the brain in the manner
            of skills, habit and reflex reactions, appears flawed. It seems that
            PTSD is one further phase in a constantly changing pattern of
            responses to life‐threatening situations.
          </p>
        </section>
        {/* PTSD and Gulf War-related Illness Section */}
        <section id="ptsd-gulf" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            PTSD and Gulf War-related Illness
          </h2>
          <p className="text-lg">
            To date, no clear relationship has emerged between Gulf-related
            illness and PTSD. A recent study comparing UK Gulf veterans with
            non-disabled veterans of both the Gulf War (1991) and other
            contemporary conflicts found low rates of PTSD (1–3%).
          </p>
          <p className="text-lg">
            There is a consensus that an association exists between the symptoms
            of PTSD and ill-health in Gulf War veterans, but this is not very
            strong, and is insufficient per se to account for the general
            increase in symptomatology reported by some veterans of that
            conflict.
          </p>
          <p className="text-lg">
            Characterized by medically unexplained symptoms, Gulf-related
            illness has also been shown to have much in common with post-combat
            disorders from earlier conflicts, such as shell shock, non-ulcer
            dyspepsia and effort syndrome. However, there is no doubt that
            following the invasion and subsequent occupation of Iraq rates of
            PTSD amongst the US forces are high, and as we write are continuing
            to climb.
          </p>
          <p className="text-lg">
            Initial estimates of the rates of PTSD amongst British service
            personnel returning from Op TELIC, the code name given for British
            operations in Iraq, though reservists (6%) had higher rates than
            regulars (14%) (see also pages 257–258).
          </p>
        </section>
        <section id="additional-info" className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Additional Information
          </h2>
          <div className="overflow-x-auto bg-white rounded-md shadow-md p-4 sm:p-6">
            <table className="w-full table-auto">
              <tbody>
                {/* Varieties of Post-Traumatic Illness */}
                <tr className="bg-gray-200">
                  <th
                    colSpan={2}
                    className="px-4 py-2 text-gray-700 font-semibold"
                  >
                    Some Varieties of Post-Traumatic Illness
                  </th>
                </tr>
                <tr className="border-b">
                  <td colSpan={2} className="px-4 py-2 text-gray-700">
                    <ul className="list-disc ml-4 text-lg">
                      <li>Accident neurosis</li>
                      <li>Post-traumatic stress syndrome</li>
                      <li>Accident victim syndrome</li>
                      <li>Post-Vietnam syndrome</li>
                      <li>Battleshock</li>
                      <li>Profit neurosis</li>
                      <li>Combat fatigue</li>
                      <li>Railway spine</li>
                      <li>Combat stress neurosis</li>
                      <li>Shell shock</li>
                      <li>Compensationitis</li>
                      <li>Soldier’s heart</li>
                      <li>Da Costa’s syndrome</li>
                      <li>Traumatic neurasthenia</li>
                      <li>Erichsen’s disease</li>
                      <li>Vertebral neurasthenia</li>
                      <li>Litigation neurosis</li>
                      <li>War neuroses</li>
                      <li>Nostalgia</li>
                      <li>Whiplash neurosis</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="px-4 py-2 text-gray-700 italic">
                    Source: O’Brien, 1998.2
                  </td>
                </tr>

                {/* War Syndromes */}
                <tr className="bg-gray-200">
                  <th
                    colSpan={2}
                    className="px-4 py-2 text-gray-700 font-semibold"
                  >
                    War Syndromes Characterized by Unexplained Medical Symptoms
                  </th>
                </tr>
                <tr className="border-b">
                  <td colSpan={2} className="px-4 py-2 text-gray-700">
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold">Pre-1914</h4>
                      <ul className="list-disc ml-4 text-lg">
                        <li>Soldier’s heart</li>
                        <li>irritable heart</li>
                        <li>palpitation</li>
                        <li>Da Costa’s syndrome</li>
                        <li>disordered action of the heart</li>
                        <li>nostalgia</li>
                        <li>wind contusion</li>
                      </ul>
                    </div>
                    <div className="space-y-2 mt-2">
                      <h4 className="text-lg font-semibold">
                        First World War (1914–18)
                      </h4>
                      <ul className="list-disc ml-4 text-lg">
                        <li>Shell shock</li>
                        <li>effort syndrome</li>
                        <li>neurocirculatory asthenia</li>
                        <li>war neurosis</li>
                        <li>gas hysteria</li>
                        <li>neurasthenia</li>
                      </ul>
                    </div>
                    <div className="space-y-2 mt-2">
                      <h4 className="text-lg font-semibold">
                        Second World War (1939–45)
                      </h4>
                      <ul className="list-disc ml-4 text-lg">
                        <li>Effort syndrome</li>
                        <li>non-ulcer dyspepsia</li>
                        <li>psychoneurosis</li>
                        <li>battle exhaustion</li>
                      </ul>
                    </div>
                    <div className="space-y-2 mt-2">
                      <h4 className="text-lg font-semibold">
                        Vietnam War (1965–74)
                      </h4>
                      <ul className="list-disc ml-4 text-lg">
                        <li>Effects of Agent Orange</li>
                      </ul>
                    </div>
                    <div className="space-y-2 mt-2">
                      <h4 className="text-lg font-semibold">Gulf War (1991)</h4>
                      <ul className="list-disc ml-4 text-lg">
                        <li>Desert Storm syndrome</li>
                        <li>Gulf War syndrome</li>
                        <li>Gulf-related illness</li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="px-4 py-2 text-gray-700 italic">
                    Source: Jones and Wessely, 2005.4
                  </td>
                </tr>

                {/* Immediate and Delayed Disorders of Trauma */}
                <tr className="bg-gray-200">
                  <th
                    colSpan={2}
                    className="px-4 py-2 text-gray-700 font-semibold"
                  >
                    Immediate and Delayed Disorders of Trauma
                  </th>
                </tr>
                <tr className="border-b">
                  <td colSpan={2} className="px-4 py-2 text-gray-700">
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold">Immediate</h4>
                      <ul className="list-disc ml-4 text-lg">
                        <li>Shell shock</li>
                        <li>Battleshock</li>
                        <li>Battle exhaustion</li>
                        <li>Combat fatigue</li>
                        <li>Combat stress reaction</li>
                        <li>Acute stress reaction (ICD–10)</li>
                        <li>Acute stress disorder (DSM-IV)</li>
                      </ul>
                    </div>
                    <div className="space-y-2 mt-2">
                      <h4 className="text-lg font-semibold">
                        Delayed or Chronic
                      </h4>
                      <ul className="list-disc ml-4 text-lg">
                        <li>Neurasthenia</li>
                        <li>War neuroses</li>
                        <li>PTSD</li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="px-4 py-2 text-gray-700 italic">
                    Source: Jones, 2006.7
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="types-of-violence" className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Nine Types of Violence and Abuse
          </h3>
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg p-6">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="px-5 py-3 text-left text-lg font-semibold text-gray-800 w-1/3">
                    Type
                  </th>
                  <th className="px-5 py-3 text-left text-lg font-semibold text-gray-800">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Physical Violence",
                    "Physical violence occurs when someone uses a part of their body or an object to control a person’s actions.",
                  ],
                  [
                    "Sexual Violence",
                    "Sexual violence occurs when a person is forced to unwillingly take part in sexual activity.",
                  ],
                  [
                    "Emotional Violence",
                    "Emotional violence occurs when someone says or does something to make a person feel stupid or worthless.",
                  ],
                  [
                    "Psychological Violence",
                    "Psychological violence occurs when someone uses threats and causes fear in an individual to gain control.",
                  ],
                  [
                    "Spiritual Violence",
                    "Spiritual (or religious) violence occurs when someone uses an individual’s spiritual beliefs to manipulate, dominate, or control that person.",
                  ],
                  [
                    "Cultural Violence",
                    "Cultural violence occurs when an individual is harmed as a result of practices that are part of their culture, religion, or tradition.",
                  ],
                  [
                    "Verbal Abuse",
                    "Verbal abuse occurs when someone uses language, whether spoken or written, to cause harm to an individual.",
                  ],
                  [
                    "Financial Abuse",
                    "Financial abuse occurs when someone controls an individual’s financial resources without the person’s consent or misuses those resources.",
                  ],
                  [
                    "Neglect",
                    "Neglect occurs when someone has the responsibility to provide care or assistance for an individual but does not.",
                  ],
                ].map(([type, description], index) => (
                  <tr key={type} className="border-b last:border-none">
                    <td className="px-5 py-4 font-medium text-gray-900">
                      {type}
                    </td>
                    <td className="px-5 py-4 text-gray-700">{description}</td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan={2}
                    className="px-5 py-4 text-gray-600 italic text-sm"
                  >
                    Source: Violence Prevention Initiative (2014)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
