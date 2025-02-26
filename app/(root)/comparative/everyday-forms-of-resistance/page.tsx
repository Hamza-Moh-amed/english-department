import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Everyday Forms of Resistance",
  description:
    'A page based on James C. Scott’s "Everyday Forms of Resistance".',
};

export default function EverydayFormsOfResistance() {
  const navLinks: NavLink[] = [
    { href: "#article", label: "Article" },
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
              title="Everyday Forms of Resistance"
              author="James C. Scott"
            />
          </div>
          {/* Right: Empty div to balance the left column */}
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle
            title="Everyday Forms of Resistance"
            author="James C. Scott"
          />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Article Section */}
        <section id="article" className="space-y-8">
          <h2 className="text-2xl font-semibold">Article</h2>
          <article className="prose max-w-none text-left md:text-justify">
            <p className="text-lg italic">
              A pestilent pernicious people . . . such as take the oaths to the
              Government, but underhand ... labor its subversion.
              <br />— Bishop Trelawny, 1717
            </p>

            <h3 className="text-xl font-bold">
              The Hidden Realm of Political Conflict
            </h3>
            <p className="text-lg">
              Descriptions and analyses of open political action dominate
              accounts of political conflict. This is the case whether those
              accounts are presented by historians, political scientists,
              journalists, statesmen, or leaders of popular movements. Some of
              the most telling analyses of conflict are in fact designed
              precisely to explain under what circumstances groups in conflict
              resort to one or another kind of open political action. Thus, why
              some groups under certain conditions are likely to employ violent
              forms of political action—e.g., riots, rebellion, revolutionary
              movements—rather than less violent forms—e.g., petitions, rallies,
              peaceful marches, protest voting, strikes, boycotts—has occupied
              center stage. As a result of careful historical comparisons social
              scientists have begun to grasp how certain social structures,
              state systems, cultural values, and historical practices help
              shape political action.
            </p>
            <p className="text-lg">
              The undeniable advances made along these lines, however, are
              fatally compromised by a damagingly narrow and poverty-stricken
              view of political action. There is a vast realm of political
              action, described below, that is almost habitually overlooked. It
              is ignored for at least two reasons. First, it is not openly
              declared in the usually understood sense of “politics.” Second,
              neither is it group action in the usually understood sense of
              collective action. The argument to be developed here is that much
              of the politics of subordinate groups falls into the category of
              “everyday forms of resistance,” that these activities should most
              definitely be considered political, that they do constitute a form
              of collective action, and that any account which ignores them is
              often ignoring the most vital means by which lower classes
              manifest their political interests. The balance of this essay is
              devoted to sustaining and elaborating this claim.
            </p>
            <p className="text-lg">
              The Brechtian or Schweikian forms of resistance I have in mind are
              an integral part of the small arsenal of relatively powerless
              groups. They include such acts as foot-dragging, dissimulations,
              false compliance, feigned ignorance, desertion, pilfering,
              smuggling, poaching, arson, slander, sabotage, surreptitious
              assault and murder, anonymous threats, and so on. These
              techniques, for the most part quite prosaic, are the ordinary
              means of class struggle. They are the techniques of “first resort”
              in those common historical circumstances in which open defiance is
              impossible or entails mortal danger. When they are widely
              practiced by members of an entire class against elites or the
              state, they may have aggregate consequences all out of proportion
              to their banality when considered singly. No adequate account of
              class relations is possible without assessing their importance.
              That they have been absent or marginal to most accounts of class
              relations is all too understandable. The purpose, after all, of
              many such techniques is to avoid notice and detection. Resistance
              of this kind is ironically abetted by both elites and social
              scientists whose attention is largely concentrated on those forms
              of resistance which pose a declared threat to power holders:
              social movements, dissident sects, revolutionary groups, and other
              forms of publicly organized political opposition. Such groups, of
              course, are also far more likely to leave the written
              records—manifestos, minutes, membership lists, journalists’
              descriptions, and police reports—that help ensure them a firm
              place in the historical record.
            </p>
            <p className="text-lg">
              Here it may be useful to distinguish everyday forms of class
              resistance from the more typical forms of political conflict which
              dominate the historiography of the peasantry and other subordinate
              groups. The easiest way to highlight the distinction is to
              contrast paired forms of resistance. The first in each pair is
              “everyday” resistance in my definition of the term while the
              second is a more direct, open confrontation having the same
              objective. Thus in one sphere lies the quiet, piecemeal process by
              which peasant squatters or poachers have often encroached on
              plantation and state forest lands; in the other a public invasion
              of property that openly challenges property relations. Each action
              aims at a redistribution of control over property; the former aims
              at tacit, de facto gains while the latter aims at formal, de
              jure—recognition of those gains. In one sphere lies a process of
              cascading military desertion; in the other an open mutiny aiming
              at eliminating or replacing officers. In one sphere lies the
              pilfering of public and private grain stores; in the other an open
              attack on markets or granaries aiming at the redistribution of the
              food supply. The contrasts illustrate that those who employ
              everyday forms of resistance avoid calling attention to
              themselves. Such techniques are relatively safe, they often
              promise vital material gains, and they require little or no formal
              coordination let alone formal organization—although they typically
              rely on a venerable popular culture of resistance to accomplish
              their ends.
            </p>
            <p className="text-lg">
              The relative safety—and it is only a relative safety—of everyday
              forms of resistance has much to do with the small scale of the
              action. Collectively, however, these small events may add up
              almost surreptitiously to a large event: an army too short of
              conscripts to fight, a workforce whose foot-dragging bankrupts the
              enterprise, a landholding gentry driven from the countryside to
              the towns by arson and assault, tracts of state land fully
              occupied by squatters, a tax claim of the state gradually
              transformed into a dead letter by evasion.
            </p>
            <p className="text-lg">
              It is not far-fetched to suggest that the difference between
              everyday forms of resistance and more open forms of political
              conflict may often boil down to tactical wisdom. Peasants who
              consider themselves entitled to land claimed by the state may
              choose to squat rather than to invade openly in force because they
              know that an invasion will probably be met with armed force and
              bloodshed. When, on the other hand, the political climate makes a
              more open occupation of land comparatively safe, something closer
              to a land invasion becomes plausible. Certainly, peasants and
              subordinate groups generally may find large scale collective
              action inherently difficult owing to their geographical
              dispersion, ethnic and linguistic differences, a lack of
              organizational skills and experience, and so forth. It is no less
              likely, however, that their preferences in techniques of
              resistance may arise from the knowledge of surveillance, a
              realistic fear of coercion, and a past experience that encourages
              caution. If, as is sometimes the case, the same results may be
              achieved by everyday resistance, albeit more slowly, at a vastly
              reduced risk, then it is surely the more rational course.
            </p>

            <h3 className="text-xl font-bold">
              Varieties of Practice, Unity of Purpose
            </h3>
            <p className="text-lg">
              The various practices that might plausibly be claimed to represent
              everyday forms of resistance are legion. To an outside observer it
              might appear quixotic to assemble them under the same heading.
              Their variety is nothing more than a mirror image of the variety
              of forms of appropriation; for every form of appropriation there
              is likely to be one—or many—forms of everyday resistance devised
              to thwart that appropriation. What gives these techniques a
              certain unity is that they are invariably quiet, disguised,
              anonymous, often undeclared forms of resisting claims imposed by
              claimants who have superior access to force and to public power.
            </p>

            <h3 className="text-xl font-bold">Poaching</h3>
            <p className="text-lg">
              For roughly two centuries from 1650 to 1850, the most popular
              crime in England was almost certainly poaching. Although poaching
              is usually understood to refer to the “theft” of someone else’s
              property in wild game, fish, and perhaps firewood, it comprises a
              vastly greater range of practices. Cottagers, laborers, and yeomen
              might encroach on gentry or crown property to take turf, peat,
              heath, rushes for thatching and lighting, brushwood, clay, stone,
              chalk, coal, to graze their own livestock, pick medicinal herbs,
              or to till land.
            </p>
            <p className="text-lg">
              For our purposes, the most important fact about poaching is that
              the activity itself was part of the traditional subsistence
              routine of the rural population, an activity embedded in customary
              rights. Poaching as a crime, therefore, entails less a change of
              behavior than a shift in the law of property relations. It is the
              state and its law which suddenly transforms these subsistence
              routines into everyday forms of resistance. The process has, of
              course, been repeated for most colonial societies in which the
              state redefined the forest as government property and then imposed
              a whole series of regulations and officials to enforce them. It
              was unlikely that the surrounding population would accept the
              logic by which unimproved, natural environments and their
              resources might suddenly be declared state property and willingly
              relinquish their traditional practices.
            </p>

            <p className="text-lg">
              Thus when Hungarian peasants defended their interests in the late
              1940s and early 1950s against subsistence-threatening crop
              deliveries to the state, they avoided any direct confrontations.
              Although they farmed their own smallholdings (or in cooperatives
              that were formally independent) the system of forced deliveries
              imposed a de facto serfdom upon them, determining what they might
              plant, how much they had to deliver, and the price they would
              receive. One stratagem that might lessen their burden was the
              underreporting of cultivated acreage. Whenever land came under a
              new jurisdiction (e.g., inheritance, transfer to cooperatives,
              confiscation from “kulaks”) a fraction of the land mysteriously
              disappeared; by 1954 it was estimated that 1.3 million acres of
              arable—equivalent to the cultivated surface of one of the nation’s
              largest counties—had evaporated in this fashion. It was impossible
              to recover. Black markets for production concealed from the state
              grew apace. Birth certificates were forged so that more of the
              local population was above age 65 and thus eligible for quota
              reductions. Local authorities abetted these evasions since any
              reduction in the local quota made it that much easier for them to
              fulfill the plan targets. Livestock was, administratively
              speaking, spirited away as well.
            </p>
            <p className="text-lg">
              The net result of these defensive strategies from below was
              declining procurements. By 1954, the least successful procurement
              year, there appeared no way to extract more from an increasingly
              bold and recalcitrant peasantry. It may not quite be correct to
              say that the peasantry overthrew the government in 1956 but it is
              reasonable to claim that the liberalization after 1954 came about
              primarily as a result of peasant resistance. The subsequent
              economic and social reforms enacted in Hungary and, for that
              matter in Central Europe generally, are little more than the
              legalization of the practices of resistance given a new policy
              guise by professional reformers. Like other Central European
              peasantries, they shared a tradition of centuries of resistance
              and they knew that a generalized resistance reduces the risk to
              which every single resister is exposed.
            </p>

            <h3 className="text-xl font-bold">Evading the Written Record</h3>
            <p className="text-lg">
              Everyday forms of resistance rarely make headlines. But just as
              millions of anthozoan polyps create, willy-nilly, a coral reef,
              thousands upon thousands of petty acts of insubordination and
              evasion create a political and economic barrier reef of their own.
              And whenever, to pursue the simile, the ship of state runs aground
              on such a reef, attention is typically directed to the shipwreck
              itself and not the vast aggregation of actions which make it
              possible. It is very rare that the perpetrators of these petty
              acts seek to call attention to themselves. Their safety lies in
              their anonymity. Peasants succeed in their small stratagems to the
              extent that they do not appear in the archives. This is not to say
              that their resistance leaves no traces; it is rather that the
              traces must be teased out of the record by the historian who knows
              what he or she is looking for.
            </p>
            <p className="text-lg">
              It is also comparatively rare that officials of the state wish to
              publicize the insubordination behind everyday resistance. To do so
              would be to admit that their policy is unpopular and, above all,
              to expose the tenuousness of their authority in the
              countryside—neither of which most sovereign states find in their
              interest. The nature of the acts themselves and the
              self-interested muteness of the antagonists thus conspire to
              create a kind of complicitous silence which may all but expunge
              everyday forms of resistance from the official record.
            </p>
            <p className="text-lg">
              The “explosions” of open conflict which typically dominate the
              official record are frequently a sign that normal and largely
              covert forms of class struggle are failing—or, alternatively, have
              succeeded so well as to have produced a political crisis. Such
              declarations of open war, with their mortal risks, generally come
              only after a protracted struggle on different terrain.
            </p>

            <h3 className="text-xl font-bold">What Counts as Resistance</h3>
            <p className="text-lg">
              For the peasantry and other subordinate groups, through much of
              history, everyday forms of resistance have been the only resort
              short of rebellion. ... [T]hose who use everyday resistance find
              the claim or exaction they are resisting unjust and yet are
              intimidated by the fear of retaliation from any open, public
              protest of that injustice. It is this sense of injustice that is
              responsible for the tacit cooperation that develops among the
              resisters.
            </p>
            <p className="text-lg">
              Directing attention to the strategic reasons for the symbolic low
              profile of everyday resistance may cast some light on how changes
              in the forms of political action occur. First, it is undeniable
              that everyday resistance is less threatening to public domination
              precisely because it avoids an engagement at that level. If
              squatters invaded private or state lands publicly, and declared
              their right to use it as they saw fit, they would, in effect, be
              declaring that they were not squatters and, instead, directly
              challenging property arrangements. This is more menacing to
              political authority. Everyday resistance, then, by not openly
              contesting the dominant norms of law, custom, politeness,
              deference, loyalty and so on leaves the dominant in command of the
              public stage. Inasmuch as every act of compliance with a normative
              order discursively affirms that order, while every public act of
              repudiation (e.g., failure to stand during national anthems in the
              United States) represents a threat to that norm, everyday
              resistance leaves dominant symbolic structures intact.
            </p>
            <p className="text-lg">
              Everyday forms of resistance may be thought of as exerting a
              constant pressure, probing for weak points in the defenses of
              antagonists, and testing the limits of resistance. In the case of
              poaching, for example, there may be a fairly stable tension over
              time between poachers and gamekeepers. But when, say, it turns out
              that over the past few months the taking of rabbits is much less
              frequently punished or prevented, the volume of poaching and the
              number of participants is likely to swell to a point where a
              custom or even a right to take rabbits threatens to become
              established. There is strength in numbers, and poaching that
              becomes generalized to whole communities may require new levels of
              coercion to re-establish the old balance.
            </p>
            <p className="text-lg">
              Much the same approach might be applied to symbolic defiance.
              Slaves, serfs, tenant farmers and workers say in public pretty
              much what their masters, lords, landlords, and bosses expect them
              to say. Yet, there are likely to be hidden transcripts of what
              subordinates actually think that can be recovered in off-stage
              conversation in slave quarters, veiled cultural performances
              (e.g., folk-tales, carnival). These hidden transcripts may be
              pictured as continually testing the line of what is permissible
              on-stage. One particularly intrepid, risk-taking, angry, unguarded
              subordinate says something that just touches or crosses the line.
              If it is not rebuked or punished, others, profiting from the
              example will venture across the line as well, and a new de facto
              line is created, governing what may be said or gestured. In
              revolutions, one is likely to see unbridled anger—the entire
              hidden transcript—spoken openly and acted openly. It is unlikely
              that we can account for the content of this action by reference to
              outside agitators, their ideology, or even the aspirations
              engendered by a revolutionary process. The revolutionary actions
              might well have been prefigured in their practices of resistance
              and in their off-stage discourse. What had changed was above all
              the conditions which had previously confined the public expression
              of these actions and sentiments.
            </p>
          </article>
        </section>

        {/* Analysis Section */}
        <section id="analysis" className="space-y-8">
          <h2 className="text-2xl font-semibold">Analysis</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              <strong>2.1 Introduction</strong>
            </p>
            <p className="text-lg">
              In "Everyday Forms of Resistance," James C. Scott reorients our
              understanding of political conflict by foregrounding the subtle,
              often invisible acts of defiance enacted by subordinate groups.
              Rather than centering on the dramatic and highly visible forms of
              resistance—such as revolutions or mass protests—Scott illuminates
              a vast "hidden realm" where ordinary, quotidian acts collectively
              undermine oppressive power structures. He contends that, “There is
              a vast realm of political action… that is almost habitually
              overlooked,” thereby challenging scholars to reconsider the full
              spectrum of political agency. This analysis aims to delve deeper
              into Scott’s arguments, unpacking his theoretical framework and
              examining historical instances that underscore the transformative
              impact of everyday resistance.
            </p>

            <p className="text-lg">
              <strong>
                2.2 Conceptual Framework: Rethinking Political Action
              </strong>
            </p>
            <p className="text-lg">
              Conventional political analyses have long privileged overt,
              organized dissent—events that are easily documented and
              historically celebrated. Scott critiques this narrow focus,
              labeling it “damagingly narrow and poverty-stricken” because it
              neglects the myriad small-scale acts that, over time, erode and
              reshape authoritarian regimes. He introduces the concept of
              “everyday forms of resistance,” which encompasses a wide array of
              covert behaviors that allow oppressed groups to challenge
              domination without resorting to open rebellion. These tactics,
              including “foot-dragging, dissimulations, false compliance,
              feigned ignorance, desertion, pilfering, smuggling, poaching,
              arson, slander, sabotage, surreptitious assault and murder,
              anonymous threats, and so on,” are not only adaptive responses to
              repression but also represent calculated, strategic choices made
              in contexts where overt actions would incur prohibitive risks.
            </p>
            <p className="text-lg">
              <em>Dual Dimensions of Resistance:</em> Scott’s framework
              delineates two primary dimensions of political action:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>
                <strong>Overt, Public Resistance:</strong> This form includes
                collective uprisings, rebellions, and mass protests that visibly
                challenge state authority. These actions are typically
                well-recorded through “manifestos, minutes, membership lists,
                journalists’ descriptions, and police reports,” making them
                historically prominent.
              </li>
              <li>
                <strong>Covert, Everyday Resistance:</strong> In stark contrast,
                this dimension comprises subtle, often individually
                inconspicuous acts such as poaching or underreporting of
                resources. These actions are deliberately “quiet, disguised,
                anonymous, often undeclared forms of resisting claims imposed by
                claimants who have superior access to force and to public
                power,” and their cumulative effect can be politically
                transformative.
              </li>
            </ul>
            <p className="text-lg">
              By expanding the definition of political action to include these
              covert practices, Scott compels us to consider how the aggregation
              of minor acts of defiance can produce significant challenges to
              established power hierarchies.
            </p>

            <p className="text-lg">
              <strong>2.3 Forms and Techniques of Everyday Resistance</strong>
            </p>
            <p className="text-lg">
              Scott’s exploration of everyday resistance is marked by its
              detailed attention to the variety and nuance of tactics employed
              by marginalized groups. He argues that these acts are not
              haphazard but are instead rooted in long-standing cultural
              practices and a deep-seated tradition of defiance. The forms of
              resistance he outlines include:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>
                <strong>Noncooperation:</strong> Through acts such as deliberate
                foot-dragging, feigned ignorance, and false compliance,
                individuals disrupt the smooth operation of bureaucratic systems
                and slow the machinery of state power. These forms of resistance
                are designed to be inconspicuous, thereby reducing the risk of
                severe retribution.
              </li>
              <li>
                <strong>Resource Appropriation:</strong> When state policies
                criminalize traditional practices, acts like poaching and
                pilfering are recontextualized as forms of resistance. Scott
                illustrates this with the example of Hungarian peasants who,
                confronted with forced crop deliveries, strategically
                underreported cultivated acreage. This subtle act of defiance
                led to the mysterious disappearance of large swathes of arable
                land—over 1.3 million acres by 1954—thereby subverting state
                extraction mechanisms.
              </li>
              <li>
                <strong>Symbolic Defiance:</strong> Beyond physical acts,
                resistance is expressed through the cultural sphere. Hidden
                transcripts—offstage conversations, folk tales, and
                carnivals—serve as outlets for dissent that bypass formal
                channels of power. Scott emphasizes that while public discourse
                often mirrors state-sanctioned narratives, the private, symbolic
                expressions of the oppressed reveal a more authentic picture of
                resistance.
              </li>
            </ul>
            <p className="text-lg">
              These practices collectively form what Scott refers to as a
              “venerable popular culture of resistance,” one that has evolved
              over centuries as a means for subordinate groups to negotiate
              power asymmetries without provoking the full force of state
              repression.
            </p>

            <p className="text-lg">
              <strong>
                2.4 Case Study: Poaching and Hungarian Peasant Resistance
              </strong>
            </p>
            <p className="text-lg">
              Poaching is perhaps the most emblematic illustration of everyday
              resistance in Scott’s analysis. Traditionally a method of
              subsistence, poaching assumes a politically charged significance
              when state laws redefine customary rights and render these
              practices illegal. Scott provides a vivid case study of Hungarian
              peasants in the late 1940s and early 1950s, who, when confronted
              with coercive state policies such as forced crop deliveries,
              resorted to a range of covert tactics. He explains, “One stratagem
              that might lessen their burden was the underreporting of
              cultivated acreage. Whenever land came under a new jurisdiction… a
              fraction of the land mysteriously disappeared.” This systematic
              underreporting not only undermined state authority but also forced
              local bureaucracies to collude in the evasion, as reduced quotas
              benefited both the resisters and local officials.
            </p>
            <p className="text-lg">
              The Hungarian example underscores how everyday resistance, through
              its cumulative and decentralized nature, can engender substantial
              policy reforms and alter the trajectory of state-society
              relations.
            </p>

            <p className="text-lg">
              <strong>
                2.5 Strategic Considerations and Collective Impact
              </strong>
            </p>
            <p className="text-lg">
              A central tenet of Scott’s argument is the strategic rationality
              that underpins everyday forms of resistance. Faced with the risk
              of overt confrontation, subordinate groups deliberately choose
              methods that minimize individual exposure while maximizing
              collective impact. Scott notes that these actions are “relatively
              safe, they often promise vital material gains, and they require
              little or no formal coordination.” For example, peasants who
              perceive a historical or cultural entitlement to land prefer
              subtle methods such as squatting or underreporting rather than
              risking an open and violent land invasion that would undoubtedly
              invite brutal repression.
            </p>
            <p className="text-lg">
              The metaphor of a “political and economic barrier reef” powerfully
              encapsulates the cumulative effect of these disparate acts. Much
              like the tiny polyps that collectively form a resilient coral
              reef, individual acts of everyday resistance coalesce to create a
              formidable, though largely invisible, bulwark against state power.
              This collective impact challenges the notion that only
              large-scale, organized movements can effect significant change.
            </p>

            <p className="text-lg">
              <strong>2.6 Broader Implications for Political Analysis</strong>
            </p>
            <p className="text-lg">
              Scott’s insights into everyday resistance compel a reevaluation of
              the methodologies traditionally employed in political analysis.
              His work challenges researchers to mine alternative sources—such
              as oral histories, cultural artifacts, and informal narratives—to
              uncover the subtleties of resistance that conventional archival
              research might overlook. This broader analytical lens not only
              enriches our understanding of historical struggles but also
              redefines the parameters of what is considered political action.
            </p>
            <p className="text-lg">
              Moreover, Scott’s framework highlights the dynamic and negotiated
              nature of power. State authority, rather than being a monolithic
              and unassailable force, is continuously contested through the
              myriad, decentralized acts of defiance that constitute everyday
              life. In this light, resistance is not an anomaly or a temporary
              outburst but a persistent, integral feature of social relations
              that can eventually precipitate substantial political and economic
              transformations.
            </p>

            <p className="text-lg">
              <strong>2.7 Conclusion</strong>
            </p>
            <p className="text-lg">
              In conclusion, James C. Scott's "Everyday Forms of Resistance"
              provides a seminal redefinition of political conflict by
              emphasizing the transformative power of subtle, everyday acts of
              defiance. Through a meticulous analysis of covert
              practices—ranging from resource appropriation to symbolic
              defiance—Scott illustrates how these actions, though individually
              modest, cumulatively challenge and destabilize oppressive regimes.
              This enhanced analysis not only reinforces the strategic
              rationality of everyday resistance but also calls for a broader,
              more inclusive approach to studying power relations, one that
              recognizes the profound impact of the unrecorded and the unseen.
            </p>
          </div>
        </section>

        {/* Q&A Section */}
        <section id="qna" className="space-y-8">
          <h2 className="text-2xl font-semibold">Questions &amp; Answers</h2>
          <div className="prose max-w-none">
            <ol className="list-decimal ml-6 space-y-4 text-lg">
              <li>
                <strong>
                  What does James C. Scott mean by “everyday forms of
                  resistance”?
                </strong>
                <p>
                  Scott refers to the subtle, covert acts of defiance employed
                  by subordinate groups that do not overtly challenge power but
                  collectively undermine oppressive systems. These include
                  actions like foot-dragging, poaching, and false compliance.
                </p>
              </li>
              <li>
                <strong>
                  How does Scott differentiate between overt and covert forms of
                  political action?
                </strong>
                <p>
                  Overt actions are public and organized—such as riots or
                  revolutions—whereas covert actions are hidden and informal,
                  allowing resistance without drawing direct state repression.
                </p>
              </li>
              <li>
                <strong>
                  In what ways do everyday acts of resistance function as a form
                  of collective action despite their covert nature?
                </strong>
                <p>
                  Although each act may seem minor, collectively they create a
                  form of solidarity that gradually erodes oppressive
                  structures.
                </p>
              </li>
              <li>
                <strong>
                  How does the example of poaching illustrate the transformation
                  of customary practices into acts of resistance?
                </strong>
                <p>
                  Poaching was once a routine part of rural subsistence. When
                  state laws redefined property rights, continuing the practice
                  became a means of reclaiming customary rights and resisting
                  new legal regimes.
                </p>
              </li>
              <li>
                <strong>
                  What role do hidden transcripts play in challenging official
                  narratives?
                </strong>
                <p>
                  Hidden transcripts—such as off-stage conversations and folk
                  traditions—allow subordinate groups to express dissent without
                  public confrontation, preserving true sentiments that may
                  later influence overt actions.
                </p>
              </li>
              <li>
                <strong>
                  How does the Hungarian peasantry example demonstrate the
                  cumulative impact of subtle resistance tactics?
                </strong>
                <p>
                  Hungarian peasants underreported land, forged documents, and
                  evaded state controls—minor acts that, when aggregated,
                  reduced enforced quotas and pressured the government to
                  reform.
                </p>
              </li>
              <li>
                <strong>
                  What tactical considerations might lead subordinate groups to
                  prefer everyday resistance over open confrontation?
                </strong>
                <p>
                  The risks of violent repression, geographical dispersion, and
                  limited resources make overt action dangerous, so subtle,
                  everyday resistance minimizes exposure while still undermining
                  oppressive systems.
                </p>
              </li>
              <li>
                <strong>
                  In what ways can everyday resistance erode the legitimacy of
                  state authority over time?
                </strong>
                <p>
                  As countless small acts of defiance accumulate, they weaken
                  the economic and administrative structures of the state,
                  gradually eroding its legitimacy and capacity to enforce
                  authority.
                </p>
              </li>
              <li>
                <strong>
                  How might historians uncover evidence of covert resistance in
                  official records?
                </strong>
                <p>
                  Historians must look for anomalies—unexplained discrepancies
                  in land records, forged documents, and oral histories—that
                  hint at widespread evasion of state policies.
                </p>
              </li>
              <li>
                <strong>
                  How does Scott’s argument challenge traditional theories of
                  political conflict and revolution?
                </strong>
                <p>
                  Traditional theories focus on mass mobilizations and overt
                  conflicts, but Scott shows that even subtle, everyday acts of
                  resistance can lead to significant political change over time.
                </p>
              </li>
              <li>
                <strong>
                  What implications does the concept of everyday resistance have
                  for our understanding of class struggle?
                </strong>
                <p>
                  It highlights that class struggle is not fought solely on the
                  battleground of public uprisings, but also through covert acts
                  of defiance that gradually undermine elite power structures.
                </p>
              </li>
              <li>
                <strong>
                  How can the aggregate effect of minor acts of resistance lead
                  to significant political or economic change?
                </strong>
                <p>
                  While one small act may seem insignificant, the aggregation of
                  many such actions can disrupt economic systems, weaken
                  enforcement mechanisms, and eventually force policy reforms.
                </p>
              </li>
              <li>
                <strong>
                  In what ways does everyday resistance remain relevant to
                  contemporary forms of political dissent?
                </strong>
                <p>
                  In modern societies, subtle forms of resistance—such as
                  noncompliance, digital subversion, and symbolic
                  protest—continue to challenge authority in environments where
                  overt protest may be too risky.
                </p>
              </li>
              <li>
                <strong>
                  How might the strategies of everyday resistance vary across
                  different cultural or historical contexts?
                </strong>
                <p>
                  Everyday resistance is shaped by local customs, social norms,
                  and historical experiences. For instance, poaching in rural
                  England differs from the administrative evasions observed in
                  mid‑20th century Hungary.
                </p>
              </li>
              <li>
                <strong>
                  What methodological challenges arise when studying resistance
                  that intentionally avoids documentation?
                </strong>
                <p>
                  Since everyday resistance is designed to evade detection, its
                  evidence is often fragmented and hidden—requiring historians
                  to rely on oral histories, subtle archival clues, and
                  interdisciplinary research methods.
                </p>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
