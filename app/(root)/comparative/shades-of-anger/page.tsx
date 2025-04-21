// pages/poems/shades-of-anger.tsx

import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Shades of Anger",
  description:
    "A study of Rafeef Ziadah’s powerful spoken word poem 'Shades of Anger', including full text, author background, literary analysis, and in-depth discussion questions.",
};

export default function ShadesOfAnger() {
  const navLinks: NavLink[] = [
    { href: "#poem", label: "The Poem" },
    { href: "#author", label: "Author Background" },
    { href: "#analysis", label: "Literary Analysis" },
    { href: "#qna", label: "Q&A" },
  ];

  return (
    <main className="page-container">
      <div className="content-layout">
        <aside className="sidebar">
          <Navigation links={navLinks} />
        </aside>
        <div className="main-content">
          <PageTitle title="Shades of Anger" author="Rafeef Ziadah" />

          {/* Poem Section */}
          <section id="poem" className="section-content">
            <h2 className="section-title">The Poem</h2>
            <article className="article-block">
              <p className="article-paragraph">
                Allow me to speak my Arab tongue
                <br />
                before they occupy my language as well.
                <br />
                Allow me to speak my mother tongue
                <br />
                before they colonize her memory as well.
                <br />
                I am an Arab woman of color.
                <br />
                and we come in all shades of anger.
                <br />
                <br />
                All my grandfather ever wanted to do
                <br />
                was wake up at dawn and watch my grandmother kneel and pray
                <br />
                in a village hidden between Yafa and Haifa.
                <br />
                My mother was born under an olive tree
                <br />
                on a soil they say is no longer mine
                <br />
                but I will cross their barriers, their checkpoints
                <br />
                their damn apartheid walls and return to my homeland.
                <br />
                I am an Arab woman of color and we come in all shades of anger.
                <br />
                <br />
                And did you hear my sister screaming yesterday
                <br />
                as she gave birth at a checkpoint
                <br />
                with Israeli soldiers looking between her legs
                <br />
                for their next demographic threat?
                <br />
                Called her baby girl “Janeen”.
                <br />
                And did you hear Amni Mona screaming
                <br />
                behind their prison bars as they teargassed her cell?
                <br />
                “We’re returning to Falasteen!”
                <br />
                I am an Arab woman of color and we come in all shades of anger.
                <br />
                <br />
                But you tell me, this womb inside me
                <br />
                will only bring you your next terrorist.
                <br />
                Beard-wearing, gun-waving, towelhead, sand nigger.
                <br />
                You tell me I send my children out to die!
                <br />
                But those are your copters, your F16′s in our sky.
                <br />
                <br />
                And let’s talk about this terrorism business for a second
                <br />
                Wasn’t it the CIA that killed Allende and Lumumba?
                <br />
                And who trained Osama in the first place?
                <br />
                My grandparents didn’t run around like clowns
                <br />
                with white capes and white hoods on their heads lynching black
                people.
                <br />
                I am an Arab woman of color and we come in all shades of anger.
                <br />
                <br />
                “So who is that brown woman screaming in the demonstration?”
                <br />
                Sorry, should I not scream?
                <br />
                I forgot to be your every orientalist dream.
                <br />
                Jinnee in a bottle, belly dancer, harem girl, soft spoken Arab
                woman.
                <br />
                “Yes master, no master.
                <br />
                Thank you for the peanut butter sandwiches
                <br />
                raining down on us from your F16′s master.”
                <br />
                Yes my liberators are here to kill my children
                <br />
                and call them “collateral damage.”
                <br />
                I am an Arab woman of color and we come in all shades of anger.
                <br />
                <br />
                So let me just tell you this womb inside me
                <br />
                will only bring you your next rebel.
                <br />
                She will have a rock in one hand and a Palestinian flag in the
                other.
                <br />
                I am an Arab woman of color
                <br />
                Beware! Beware my anger…
                <br />
              </p>
            </article>
          </section>

          {/* Author Background */}
          <section id="author" className="section-content">
            <h2 className="section-title">Author Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Rafeef Ziadah is a Palestinian spoken word poet and human rights
                activist. Born to refugee parents in Lebanon, she grew up in
                Canada and is currently based in London. Ziadah's work confronts
                war, displacement, and resistance, giving voice to the struggles
                of Arab women in diaspora. Her performances blend political
                urgency with lyrical precision, drawing global attention to
                injustice through the art of poetry.
              </p>
            </div>
          </section>

          {/* Literary Analysis */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Literary Analysis</h2>
            <div className="section-block">
              <p className="section-subtitle">1. Repetition as Resistance</p>
              <p className="section-paragraph">
                Ziadah’s refrain—
                <em>
                  "I am an Arab woman of color and we come in all shades of
                  anger"
                </em>
                —serves as a defiant assertion of identity. The repetition
                builds a rhythm of resistance, amplifying the speaker’s rage and
                pride in equal measure.
              </p>

              <p className="section-subtitle">2. Spoken Word Power</p>
              <p className="section-paragraph">
                The poem’s structure mimics oral performance. Short stanzas and
                direct address—
                <em>"You tell me I send my children out to die!"</em>—create an
                accusatory tone aimed at Western audiences. The poem is written
                to be heard, not just read.
              </p>

              <p className="section-subtitle">3. Imagery and Violence</p>
              <p className="section-paragraph">
                Through stark imagery—
                <em>
                  "Israeli soldiers looking between her legs for their next
                  demographic threat"
                </em>
                —Ziadah reveals the intimate violence of occupation. These
                jarring images force the reader into the reality of war’s human
                toll.
              </p>

              <p className="section-subtitle">4. Subverting Orientalism</p>
              <p className="section-paragraph">
                The poet critiques stereotypes of passive Arab femininity:{" "}
                <em>
                  "I forgot to be your every orientalist dream... Jinnee in a
                  bottle, belly dancer, harem girl"
                </em>
                . This irony reclaims agency and challenges exoticized
                depictions.
              </p>

              <p className="section-subtitle">5. Sarcasm and Dissonance</p>
              <p className="section-paragraph">
                Sarcastic lines like{" "}
                <em>
                  "Thank you for the peanut butter sandwiches raining down on us
                  from your F16s master"
                </em>{" "}
                expose humanitarian hypocrisy and the absurdity of military aid
                framed as compassion.
              </p>

              <p className="section-subtitle">6. Feminism and Motherhood</p>
              <p className="section-paragraph">
                The speaker reclaims motherhood as a site of resistance, not
                submission.{" "}
                <em>
                  "This womb inside me will only bring you your next rebel"
                </em>{" "}
                reframes maternal identity in revolutionary terms.
              </p>

              <p className="section-subtitle">
                7. Tone: Rage and Righteousness
              </p>
              <p className="section-paragraph">
                The tone alternates between fiery anger and mournful lament.
                Anger becomes catharsis, a tool for reclaiming dignity amidst
                silencing and erasure.
              </p>

              <p className="section-subtitle">8. Political Allusions</p>
              <p className="section-paragraph">
                Allusions to the CIA, Osama Bin Laden, and U.S. foreign policy
                position the poem within a broader critique of global injustice
                and imperialism.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Q&amp;A</h2>
            <ol className="section-list">
              <li className="section-question">
                What is the significance of the recurring phrase “I am an Arab
                woman of color…”?
                <p className="section-answer">
                  It acts as both an affirmation and a battle cry, reclaiming
                  identity through repetition.
                </p>
              </li>
              <li className="section-question">
                How does Ziadah challenge Western stereotypes?
                <p className="section-answer">
                  She sarcastically evokes orientalist tropes to highlight their
                  absurdity: “belly dancer, harem girl.”
                </p>
              </li>
              <li className="section-question">
                What is the poem’s stance on resistance?
                <p className="section-answer">
                  It honors resistance as generational, maternal, and deeply
                  embodied.
                </p>
              </li>
              <li className="section-question">
                How does the poem use irony?
                <p className="section-answer">
                  Irony sharpens critique—e.g. thanking liberators who drop
                  bombs is both tragic and absurd.
                </p>
              </li>
              <li className="section-question">
                What does the poem suggest about language and memory?
                <p className="section-answer">
                  That colonization targets language and memory as cultural
                  strongholds: “occupy my language... colonize her memory.”
                </p>
              </li>
              <li className="section-question">
                How is violence gendered in the poem?
                <p className="section-answer">
                  Women bear violence through childbirth under surveillance,
                  showing the militarization of the female body.
                </p>
              </li>
              <li className="section-question">
                How is motherhood portrayed?
                <p className="section-answer">
                  Not passive but revolutionary: the womb is a site of
                  rebellion, not just creation.
                </p>
              </li>
              <li className="section-question">
                How does the poem evoke sound and rhythm?
                <p className="section-answer">
                  Its spoken word format relies on pacing, repetition, and vocal
                  emphasis—designed for performance.
                </p>
              </li>
              <li className="section-question">
                What emotions does the poem convey?
                <p className="section-answer">
                  Anger, grief, pride, and a refusal to be silenced—layered and
                  fierce.
                </p>
              </li>
              <li className="section-question">
                What historical/political references are embedded?
                <p className="section-answer">
                  CIA, Osama, demographic threat—all frame the Palestinian
                  experience in a global context.
                </p>
              </li>
              <li className="section-question">
                How is birth used as metaphor?
                <p className="section-answer">
                  As both trauma and hope—“Janeen” born at a checkpoint is
                  symbolic of both pain and resilience.
                </p>
              </li>
              <li className="section-question">
                How does the poet involve the audience?
                <p className="section-answer">
                  Direct address—“You tell me…”—implicates the reader/listener
                  as part of the problem or potential solution.
                </p>
              </li>
              <li className="section-question">
                What is the poem’s relationship to nationalism?
                <p className="section-answer">
                  It reclaims homeland and memory from settler
                  narratives—“return to my homeland.”
                </p>
              </li>
              <li className="section-question">
                What literary devices dominate the poem?
                <p className="section-answer">
                  Repetition, irony, metaphor, direct address, and powerful
                  visual imagery.
                </p>
              </li>
              <li className="section-question">
                Why is the poem titled “Shades of Anger”?
                <p className="section-answer">
                  It suggests the diversity and depth of rage—cultural,
                  political, maternal, and poetic.
                </p>
              </li>
            </ol>
          </section>
        </div>
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
