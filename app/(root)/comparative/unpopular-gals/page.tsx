import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Unpopular Gals",
  description:
    "A critical study of Margaret Atwood’s 'Unpopular Gals', featuring the full story, author background, analysis, and discussion questions.",
};

export default function UnpopularGals() {
  const navLinks: NavLink[] = [
    { href: "#story", label: "Short Story" },
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
          <PageTitle title="Unpopular Gals" author="Margaret Atwood" />

          {/* Story Section */}
          <section id="story" className="section-content">
            <h2 className="section-title">Short Story</h2>
            <article className="article-block whitespace-pre-line">
              <p className="article-paragraph font-medium">1.</p>
              <p>
                Everyone gets a turn, and now it’s mine. The pretty girls, the
                popular girls, the rich girls, the girls with desirable
                boyfriends and cool dads and no braces or bad skin—they’ve all
                had their say, their chance. They’ve been the stars of the show,
                the main characters. They’ve glided through school corridors
                like swans, their confidence a kind of perfume, their power
                unquestioned, their slights and barbs and hair tosses forming an
                invisible social web that caught the rest of us like bugs. But
                now it’s our turn. The rest of us: the girls with flat feet and
                frizzy hair, the girls with loud voices or no voices, the girls
                who read too much, who knew too much, who didn’t play dumb or
                flirt right or wear the right shade of lipstick. The girls who
                got ignored or mocked, or both. The unpopular girls. We were the
                ones who saw things. We were the ones who listened. They’re all
                nostalgic now, of course, the former swans. They want to
                reconnect, find out how we are. They say they’ve changed, that
                they feel bad. They write memoirs and apologize on podcasts. But
                we remember. We kept records. We wrote it down. Our revenge is
                our stories. We tell them in basements and cafés and libraries.
                We read them out loud at open mic nights. We publish them in
                chapbooks. We teach them in courses. We annotate them with
                footnotes. We whisper them to each other like incantations. We
                know the power of the narrative. And now, when we walk through
                those same hallways—older, stronger, unafraid—we don’t lower our
                eyes. We look straight ahead. We are the plot now.
              </p>

              <p className="article-paragraph font-medium">2.</p>
              <p>
                A libel action, that’s what I’m thinking. All those tales, all
                those stories—they twist things, they falsify. They portray me
                as a bitter shrew, a harridan, an evildoer. They forget I had
                feelings too. I had dreams. They leave out the context. I was
                just the ugly sister; put the stress on ugly. That’s what they
                called me. I was the one with the big feet, the wide nose, the
                bad skin. My sister was graceful and dainty and soft-voiced. She
                was a doormat, but a decorative one. Of course they loved her.
                And I was ambitious. That was my crime. I wanted things. I
                studied late. I learned Latin. I learned bookkeeping. I learned
                to ride and shoot and fence. Not that anyone cared. No one
                married me for love, but I made good alliances. I ran estates. I
                brokered deals. I kept books, and secrets. You think I didn’t
                hate their pity, their forced kindness? You think I wanted to be
                saved? I had my own plans. And the red-hot shoes? You believed
                that part? Barbaric. But then, so are fairy tales. Still, I
                survived. I have money. I have influence. I have my own house. I
                have protégées. They come to me for advice. They listen. I write
                my own story now.
              </p>

              <p className="article-paragraph font-medium">3.</p>
              <p>
                It’s true, there are never any evil stepfathers. Only
                stepmothers. We’re the ones they blame. We’re the ones who get
                the poison apples, the cauldrons, the isolation towers, the
                suspicious moles and hairy warts. They say we’re jealous. That
                we want to kill our stepdaughters because they’re younger and
                prettier. That we want to eat their hearts. That we hate
                innocence. Nonsense. I raised her. I brushed her hair. I fed
                her. I kept the wolves away. And she repaid me with
                stories—fantasies that made her the heroine and me the monster.
                Life isn’t fair. Why should I be? Waste not, want not, has
                always been my motto. Why throw away a perfectly good child?
                Just because she’s got opinions? Just because she’s clever? They
                called me a witch, but what is a witch, really? A woman with
                knowledge. A woman who knows herbs, who knows how to mix a
                salve, who knows how to keep herself alive without a man. I
                lived alone in the forest. I grew things. I brewed. I healed. I
                told fortunes. I never hurt anyone who didn’t deserve it. Then
                came the breadcrumbs. The small hands. The big eyes. The lies.
                But I’m not bitter. I just want the record set straight. I want
                a footnote. I want an asterisk: *Her side of the story was never
                told. I’m telling it now.
              </p>
            </article>
          </section>

          {/* Author Background */}
          <section id="author" className="section-content">
            <h2 className="section-title">Author Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Margaret Atwood (b. 1939) is an internationally acclaimed
                Canadian writer whose work spans fiction, poetry, essays, and
                literary criticism. A major figure in contemporary literature,
                Atwood’s writing often merges genres—myth, dystopia, realism,
                and satire—to explore complex issues surrounding power,
                identity, and voice. Her contributions to feminist thought are
                particularly notable; she challenges traditional gender roles
                and explores the silencing of women through deeply nuanced
                characters and speculative settings.
              </p>
              <p className="section-paragraph">
                Atwood rose to prominence with early poetry collections like{" "}
                <em>The Circle Game</em> and novels such as{" "}
                <em>The Edible Woman</em> (1969), but her international
                breakthrough came with <em>The Handmaid’s Tale</em> (1985), a
                dystopian narrative that critiques patriarchal control through
                reproductive oppression. In <em>Alias Grace</em> (1996), she
                blends historical fiction with psychological analysis to explore
                female criminality and narrative reliability. Across her oeuvre,
                Atwood consistently reclaims marginalized female voices, a
                technique central to the short story <em>Unpopular Gals</em>.
              </p>
              <p className="section-paragraph">
                Her sharp wit, intellectual rigor, and mythopoetic style have
                earned her numerous awards, including the Booker Prize and the
                Governor General’s Award. Atwood remains a vital voice in global
                literature, reshaping how readers view history, gender, and
                justice through fiction.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              <p className="section-subtitle">
                1. Split Narrative & Collective Voice
              </p>
              <p className="section-paragraph">
                Atwood structures the story in two stylistically distinct
                halves. The first features a plural, contemporary voice—the
                "unpopular girls"—who narrate in a confessional and ironic tone.
                This collective perspective evokes solidarity through shared
                experiences of marginalization:{" "}
                <em>"Everyone gets a turn, and now it's mine."</em> The use of
                “we” and “us” establishes a bond, not only among the girls but
                with the reader, implicating them in a broader cultural
                critique.
              </p>

              <p className="section-subtitle">
                2. Feminist Reimagining of Archetypes
              </p>
              <p className="section-paragraph">
                The second half of the story reframes classic fairy tale
                villains—the wicked stepmother, the witch, and the ugly
                sister—as wronged women, victims of reductive storytelling.
                Through monologues, they reject their one-dimensional
                portrayals. The stepsister laments:{" "}
                <em>"I was just the ugly sister; put the stress on ugly."</em>{" "}
                Atwood critiques how patriarchal narratives prioritize beauty,
                casting women who defy these ideals as inherently evil.
              </p>
              <p className="section-paragraph">
                This strategy is part of Atwood's broader feminist project:
                reclaiming space for female characters to be complex, angry, and
                real. These characters do not seek redemption in the traditional
                sense—they demand understanding and voice.
              </p>

              <p className="section-subtitle">
                3. Rage, Bitterness, and Emotional Truth
              </p>
              <p className="section-paragraph">
                Repressed emotion drives the story’s raw power. Each character
                expresses rage at how their stories were manipulated or ignored.
                The witch, for instance, derides public sympathy for Hansel and
                Gretel while exposing her own destitution:{" "}
                <em>
                  "You think I didn’t hate their pity, their forced kindness?"
                </em>{" "}
                The emotional honesty in these voices reveals how fairy tales
                sanitize moral lessons by simplifying the complex social forces
                at play—poverty, stepfamilies, aging women, and survival.
              </p>
              <p className="section-paragraph">
                This is not just reclamation; it's indictment. The line{" "}
                <em>"Life isn’t fair. Why should I be?"</em> dismantles the
                moral economy of fairy tales and critiques the gendered
                expectations of forgiveness and gentleness imposed on women.
              </p>

              <p className="section-subtitle">4. Satirical Voice & Irony</p>
              <p className="section-paragraph">
                Atwood employs satire to both amuse and provoke. Lines like{" "}
                <em>"Waste not, want not, has always been my motto"</em> mimic
                moral adages while exposing their emptiness in the face of real
                hardship. The grotesque humor of the cannibalistic witch is
                laced with social critique—what happens when society turns its
                back on women with no role to play?
              </p>
              <p className="section-paragraph">
                By exaggerating the absurdity of moral binaries, Atwood subverts
                the genre itself. The characters remain sharp, bitter, and
                funny—never pitiable—which forces readers to reconsider their
                complicity in vilifying women who don’t conform.
              </p>

              <p className="section-subtitle">
                5. Power, Identity & Narrative Control
              </p>
              <p className="section-paragraph">
                The story’s ultimate rebellion lies in who gets to speak. Fairy
                tales often silence or punish women who don’t fit the mold, but
                Atwood turns the tables:{" "}
                <em>"I'm the plot, babe, and don't ever forget it."</em> This
                line crystallizes the story’s message: voice equals power. The
                unpopular girls and villainesses assert themselves not by
                changing who they are, but by retelling their stories on their
                own terms.
              </p>
              <p className="section-paragraph">
                Transformation, in Atwood’s world, is not about becoming “good”
                or “beautiful.” It’s about self-definition. The final tone is
                not despair but triumph—bitter, ironic, but firm. These women
                are no longer waiting to be saved; they are the storytellers
                now.
              </p>

              <p className="section-subtitle">
                6. Intertextuality & Genre Subversion
              </p>
              <p className="section-paragraph">
                By weaving fairy tale references into modern, feminist
                commentary, Atwood engages in intertextual play. She assumes the
                reader’s familiarity with stories like *Cinderella* and *Hansel
                and Gretel*, only to undermine their authority. This literary
                maneuvering asks us to question the “truths” of cultural
                storytelling. Why are women with power—especially older,
                unattractive, or single ones—always cast as villains?
              </p>
              <p className="section-paragraph">
                This metanarrative dimension situates the story as a critique of
                literature itself, highlighting the politics of who gets to be
                the protagonist, who gets a voice, and who is doomed to be
                misunderstood.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              <li className="section-question">Who are the narrators?</li>
              <p className="section-answer">
                The story begins with a modern, plural voice of "unpopular
                girls"—a collective of misfits and outcasts. It then transitions
                into the individual monologues of three fairy tale villains: the
                stepsister, the witch, and the stepmother, each reclaiming their
                side of the story.
              </p>

              <li className="section-question">
                What is the purpose of splitting the narrative?
              </li>
              <p className="section-answer">
                The division mirrors the gap between societal reality and myth.
                By juxtaposing real-world alienation with archetypal
                condemnation, Atwood explores how systemic marginalization spans
                both contemporary and historical contexts. This structure
                enhances empathy and draws parallels between past and present.
              </p>

              <li className="section-question">
                How does Atwood play with reader expectations?
              </li>
              <p className="section-answer">
                Atwood flips the conventional script by presenting maligned
                figures—typically villains—as sympathetic, complex women. Lines
                like{" "}
                <em>"I was just the ugly sister; put the stress on ugly"</em>{" "}
                force readers to reconsider the simplistic morality of
                traditional tales.
              </p>

              <li className="section-question">
                What does the quote “I’m the plot, babe” imply?
              </li>
              <p className="section-answer">
                This quote reclaims agency. It suggests the sidelined woman
                isn't a passive bystander but the story’s core: she shapes the
                narrative, not just suffers it. It's a bold assertion of
                authorship and voice.
              </p>

              <li className="section-question">
                Why is there emphasis on physical appearance?
              </li>
              <p className="section-answer">
                The story critiques how women are defined and confined by beauty
                standards. The repeated focus on ugliness, deformity, and youth—
                <em>
                  "Not ugly enough to be interesting, not beautiful enough to be
                  forgiven"
                </em>
                —reveals a culture obsessed with surface over substance.
              </p>

              <li className="section-question">
                What is the tone of the story?
              </li>
              <p className="section-answer">
                The tone is darkly ironic, defiant, and layered with satirical
                humor. It oscillates between bitterness and wit, often using
                sarcasm to underscore serious injustices, like{" "}
                <em>"Waste not, want not, has always been my motto"</em>—a dry
                remark from the witch referencing cannibalistic accusations.
              </p>

              <li className="section-question">
                How is motherhood depicted or denied?
              </li>
              <p className="section-answer">
                Motherhood is portrayed as something weaponized or stolen. The
                stepsister laments,{" "}
                <em>"I never had a child. That was denied to me."</em>{" "}
                Meanwhile, the witch is falsely vilified as a child-eater,
                reflecting how powerful, childless women are demonized.
              </p>

              <li className="section-question">
                How does the story comment on justice?
              </li>
              <p className="section-answer">
                Justice in the story is brutal and symbolic, not fair.
                References to red-hot shoes and nail barrels expose a punitive
                morality based on vengeance and appearances. As the witch says,{" "}
                <em>"They nailed me into a barrel and rolled me downhill."</em>
              </p>

              <li className="section-question">
                Why does Atwood include humor?
              </li>
              <p className="section-answer">
                Humor softens the sharp edges of critique while heightening
                impact. It provides a mask for pain and a weapon against
                oppression. The witch’s witty cynicism, like{" "}
                <em>"Eye of newt, tongue of toad—yes, I ran a herbal shop"</em>,
                undercuts myth with reality.
              </p>

              <li className="section-question">
                How is historical erasure explored?
              </li>
              <p className="section-answer">
                The characters reflect on how their stories have been twisted
                over time. The witch insists she was once a healer, the
                stepmother a survivor.{" "}
                <em>"We had talents. We painted. We read Latin."</em> This
                challenges the patriarchal rewriting of history that vilifies
                women who don't conform.
              </p>

              <li className="section-question">
                What does the story say about female rage?
              </li>
              <p className="section-answer">
                Rage is not only present but justified. The narrators voice
                suppressed fury at injustice and betrayal.{" "}
                <em>"Life isn't fair. Why should I be?"</em> captures the moral
                ambiguity born from years of mistreatment, flipping the virtue
                of forgiveness on its head.
              </p>

              <li className="section-question">
                Why do the women in the story speak now?
              </li>
              <p className="section-answer">
                They're reclaiming their narratives. Having been silenced for
                centuries, they now break free of their storybook roles to speak
                for themselves, offering confessions, accusations, and truths.
                It's an act of literary resurrection.
              </p>

              <li className="section-question">
                How does the collective voice enhance the narrative?
              </li>
              <p className="section-answer">
                The plural first-person voice of the “unpopular girls” evokes
                shared experience and solidarity.{" "}
                <em>"We knew what they said about us"</em> becomes a rallying
                cry, making their alienation universal and political.
              </p>

              <li className="section-question">
                Is there a redemptive arc in the story?
              </li>
              <p className="section-answer">
                Redemption here doesn't mean forgiveness or acceptance, but
                reclamation. The narrators don’t seek approval—they assert
                truth. Their transformation is not into heroes, but into authors
                of their own legacy.
              </p>

              <li className="section-question">
                What is the story’s central message?
              </li>
              <p className="section-answer">
                *Unpopular Gals* urges us to question who gets to tell the story
                and why. It dismantles binary morality and gives voice to the
                silenced. Ultimately, it's about reclaiming identity, rage, and
                power in the face of mythic injustice.
              </p>
            </ol>
          </section>
        </div>
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
