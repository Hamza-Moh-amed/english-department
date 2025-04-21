import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "What Do We Do During Genocide",
  description:
    "A full study guide for Mohja Kahf’s poem 'What Do We Do During Genocide' including the complete poem, author background, analysis, and 15 detailed Q&A items.",
};

export default function WhatDoWeDoDuringGenocide() {
  const navLinks: NavLink[] = [
    { href: "#poem", label: "Poem" },
    { href: "#author", label: "Author Background" },
    { href: "#analysis", label: "Analysis" },
    { href: "#qna", label: "Q&A" },
  ];

  return (
    <main className="page-container">
      <div className="content-layout">
        <aside className="sidebar">
          <Navigation links={navLinks} />
        </aside>
        <div className="main-content">
          <PageTitle
            title="What Do We Do During Genocide"
            author="Mohja Kahf"
          />

          {/* Poem Section */}
          <section id="poem" className="section-content">
            <h2 className="section-title">Poem</h2>
            <article className="article-block">
              <p className="article-paragraph">
                What do we do on the eve of massacre as a grim silence falls in
                Gaza living in the empire itself
                <br />
                what do we do after we have sent love and thoughts and wishes
                and prayers and love what do we do?
                <br />
                <br />
                Do we freeze stunned in our anguish do we shrink into the beds
                we have in the empire itself do we
                <br />
                binge-watch streaming series? Do we wash the dishes love harder
                love softer make more coffee
                <br />
                in the empire’s kitchen unable to sleep do we eat unable to
                swallow in the empire itself? What do
                <br />
                we do with our elbows, our minute-hands ticking slower and
                slower?
                <br />
                <br />
                What do we do as the massacre begins the sickening thud thudding
                receiving text after text of the
                <br />
                cousin after cousin we knew from toddlers killed and killed and
                killed during a genocide living in
                <br />
                the empire funding the genocide what do we do with our wrists?
                <br />
                <br />
                Do we do laundry do we water our heart-shaped philodendron
                plants breathe in breathe out during
                <br />
                a genocide? What do we do with our loaves of bread with our tax
                returns what do we do with our
                <br />
                skin?
                <br />
                <br />
                On a flesh-burning night in Gaza as Israeli forces pinch whole
                families out of existence as the
                <br />
                current state of Israel shells hospitals shells churches
                assassinates journalists shells schools shells
                <br />
                bakeries during the dither-dance of
                did-Israel-bomb-the-hospital/did-it-not living in the empire
                <br />
                itself funding the genocide what do we do?
                <br />
                <br />
                Do we explain to our neighbors over and over and over and over
                and over and over and over and
                <br />
                over and over and over and over that Palestinians are humans,
                beg our coworkers to imagine that
                <br />
                Palestinians are humans being human that solidarity with
                Palestinians is not eliminationism that
                <br />
                queer Palestinians are also killed by the current state of
                Israel that Palestinians free from the river
                <br />
                to the sea is not eliminationism that equal human rights for
                human beings does not equal
                <br />
                eliminationism that the right of return is not eliminationism
                that to call dissent against the current
                <br />
                state of Israel anti-Semitic IS anti-Semitic that calling Gaza a
                concentration camp is what
                <br />
                anyBODY who died in a Holocaust concentration camp would most
                want us to do because Never
                <br />
                Again is for everyBODY?
                <br />
                <br />
                Living in the empire itself during a genocide what do we do? Do
                we time travel visit the few
                <br />
                humans left on a hot earth in their earthen bunkers at the end
                of our planet’s timeline tell them how
                <br />
                we failed how violence can never bring real liberation how
                shooting up a rave cannot bring
                <br />
                liberation how taking hostages cannot liberate how neither can
                genocide bring peace neither can
                <br />
                apartheid bring peace? living at the end of our planet’s
                timeline they know we failed
                <br />
                <br />
                During genocide we dissent Nonviolently we dissent During a
                massacre we dissent
                <br />
                During a population transfer we dissent During a forced
                displacement we dissent During
                <br />
                colonialism we dissent During racism we dissent During Holocaust
                we dissent During internment
                <br />
                we dissent During Occupation we dissent During war we dissent
                <br />
                During Apartheid we dissent we BOYCOTT we dissent we DIVEST we
                dissent we SANCTION
                <br />
                we dissent Because we are human and Palestinians are human and
                Israelis are human we dissent
                <br />
                We LOVE we dissent We LOVE we dissent We LOVE we dissent
                <br />
                <br />
                Living in the empire itself nonviolently lovingly every way we
                know how we dissent we vote we
                <br />
                dissent we march again we sign again with our tapping fingers we
                dissent with our online apps we
                <br />
                dissent with our rattling lungs with our taxes with our wallets
                with our feet we dissent we dissent
                <br />
                we dissent we dissent we DISSENT WE DISSENT WE DISSENT WE
                DISSENT WE DISSENT
                <br />
                WE
              </p>
            </article>
          </section>

          {/* Author Section */}
          <section id="author" className="section-content">
            <h2 className="section-title">Author Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Mohja Kahf is a Syrian-American poet, novelist, and professor.
                She is a founding member of the Radius of Arab American Writers
                and has published numerous works addressing themes of diaspora,
                resistance, feminism, and Islamic identity. Her poetry
                collections include *E-mails from Scheherazad* and *Hagar
                Poems*, and her latest is *My Lover Feeds Me Grapefruit*. Kahf
                is a Pushcart Prize winner and teaches Comparative Literature at
                the University of Arkansas. Though she is Syrian, Kahf
                emphasizes the importance of seeking out and reading Palestinian
                voices.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              <p className="section-subtitle">1. Poetry as Protest</p>
              <p className="section-paragraph">
                The poem is both an act of mourning and an unapologetic
                political protest. Kahf confronts readers with the paralysis of
                witnessing genocide while living in comfort. Her direct
                questioning invites collective reflection and action.
              </p>

              <p className="section-subtitle">
                2. The Repetition of "What do we do"
              </p>
              <p className="section-paragraph">
                This phrase structures the poem, creating urgency and reflecting
                the speaker’s anguish and helplessness. It also mirrors the
                reader’s internal monologue in times of humanitarian crisis.
              </p>

              <p className="section-subtitle">
                3. Moral Responsibility of the Empire
              </p>
              <p className="section-paragraph">
                The speaker lives “in the empire itself,” a phrase repeated to
                emphasize complicity. Kahf challenges the comfort and detachment
                of those in powerful nations while atrocities are being
                committed elsewhere.
              </p>

              <p className="section-subtitle">4. Rage Against Dehumanization</p>
              <p className="section-paragraph">
                Through a barrage of examples, Kahf pleads for the humanity of
                Palestinians to be seen. She dismantles dismissive narratives
                and false accusations of anti-Semitism by re-centering human
                rights.
              </p>

              <p className="section-subtitle">5. A Call to Dissent</p>
              <p className="section-paragraph">
                The poem closes in an escalating litany of dissent—nonviolent,
                economic, and personal. It insists that dissent is not just a
                right, but a moral obligation in the face of injustice.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              <li className="section-question">
                What is the central question of the poem?
              </li>
              <p className="section-answer">
                The poem repeatedly asks: “What do we do?”—a moral and
                existential plea for action during genocide.
              </p>

              <li className="section-question">
                How does the poem structure its argument?
              </li>
              <p className="section-answer">
                Through repetition, rhetorical questions, and escalating
                urgency, Kahf builds toward a call for moral and political
                dissent.
              </p>

              <li className="section-question">
                What does “the empire itself” refer to?
              </li>
              <p className="section-answer">
                It refers to powerful Western nations, particularly the U.S.,
                that fund or enable the systems behind the violence described.
              </p>

              <li className="section-question">
                How does the speaker critique inaction?
              </li>
              <p className="section-answer">
                By juxtaposing mundane acts like binge-watching and doing dishes
                with the horror of genocide, Kahf critiques comfortable apathy.
              </p>

              <li className="section-question">
                What role does empathy play in the poem?
              </li>
              <p className="section-answer">
                Empathy is central—the speaker begs readers to recognize
                Palestinians as fully human, deserving of dignity and life.
              </p>

              <li className="section-question">
                What is the significance of the “Never Again is for everyBODY”
                line?
              </li>
              <p className="section-answer">
                It connects Holocaust memory to contemporary genocide, arguing
                that remembrance must lead to universal solidarity against all
                oppression.
              </p>

              <li className="section-question">
                How does Kahf use repetition?
              </li>
              <p className="section-answer">
                She repeats phrases like “we dissent” and “what do we do” to
                create rhythm, urgency, and thematic emphasis.
              </p>

              <li className="section-question">
                What literary form does the poem use?
              </li>
              <p className="section-answer">
                It’s a free verse poem, combining lyrical phrasing with
                political manifesto.
              </p>

              <li className="section-question">
                How does the poem connect individual and collective
                responsibility?
              </li>
              <p className="section-answer">
                The speaker implicates both the self and the nation-state,
                showing how personal and political are inseparable in times of
                atrocity.
              </p>

              <li className="section-question">
                What is the tone of the poem?
              </li>
              <p className="section-answer">
                It’s urgent, anguished, confrontational, and deeply
                sorrowful—moving from grief to demand for justice.
              </p>

              <li className="section-question">
                How does the poem address Western audiences?
              </li>
              <p className="section-answer">
                By highlighting their position of privilege and moral
                responsibility, especially those complicit through silence or
                taxes.
              </p>

              <li className="section-question">
                What is meant by “dither-dance” in the poem?
              </li>
              <p className="section-answer">
                It critiques the media and political hesitation to acknowledge
                atrocities—distracting from the urgency of action.
              </p>

              <li className="section-question">
                What is the poem’s stance on violent resistance?
              </li>
              <p className="section-answer">
                It rejects all violence as a path to true liberation—including
                genocide, apartheid, and acts of terror.
              </p>

              <li className="section-question">
                How does the poem frame dissent?
              </li>
              <p className="section-answer">
                As an act of humanity, of love, and of refusal to be
                silent—emphasizing nonviolent resistance, BDS, and political
                activism.
              </p>

              <li className="section-question">
                What is the final message of the poem?
              </li>
              <p className="section-answer">
                That silence is complicity—and only through persistent,
                compassionate, and active dissent can humanity be preserved.
              </p>
            </ol>
          </section>
        </div>
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
