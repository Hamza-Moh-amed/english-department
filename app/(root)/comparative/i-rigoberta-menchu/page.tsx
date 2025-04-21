import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "I, Rigoberta Menchú",
  description:
    "An in-depth exploration of Rigoberta Menchú’s testimonial narrative, including author background, key themes, direct quotes, and study questions.",
};

export default function IRigobertaMenchu() {
  const navLinks: NavLink[] = [
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
          <PageTitle title="I, Rigoberta Menchú" author="Rigoberta Menchú" />

          {/* Author Section */}
          <section id="author" className="section-content">
            <h2 className="section-title">Author Background</h2>
            <div className="section-block">
              <p className="section-paragraph">
                Rigoberta Menchú Tum is a K'iche' Maya woman from Guatemala and
                a Nobel Peace Prize laureate. Born in 1959 into a poor
                indigenous family, she became internationally recognized for her
                efforts to bring attention to the suffering of indigenous
                Guatemalans during the country’s brutal civil war. Her 1983
                testimonial _I, Rigoberta Menchú_, recorded and edited by
                Elisabeth Burgos-Debray, recounts her experiences of systemic
                oppression, cultural erasure, poverty, and resistance. The book
                stands as a powerful example of testimonio literature—a genre
                that centers collective, political truth over purely individual
                autobiography.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              <p className="section-subtitle">1. Testimonio as Resistance</p>
              <p className="section-paragraph">
                Menchú’s narrative is not just a memoir—it’s a _testimonio_, a
                political act intended to document the violence suffered by her
                people. She declares early on:{" "}
                <em>"My story is the story of all poor Guatemalans."</em> This
                collective voice disrupts Western expectations of personal
                storytelling, highlighting the communal trauma of indigenous
                communities.
              </p>

              <p className="section-subtitle">
                2. Violence and Colonial Legacy
              </p>
              <p className="section-paragraph">
                The testimonial recounts harrowing scenes of state violence,
                such as the torture and killing of her family members. She
                writes,{" "}
                <em>
                  "They tied him up and burned his body, bit by bit… I saw it
                  all."
                </em>
                These moments reveal the brutality of the Guatemalan state,
                especially against indigenous peasants. This violence is framed
                within a broader legacy of colonialism, where land
                dispossession, forced labor, and cultural suppression persist.
              </p>

              <p className="section-subtitle">
                3. Language and Cultural Identity
              </p>
              <p className="section-paragraph">
                Language plays a central role in Menchú’s experience. She notes
                how her family was punished for speaking their native language
                and how Spanish became a gatekeeper of power. She recalls:{" "}
                <em>
                  "We were forbidden to speak our language in school. We were
                  told we were animals."
                </em>{" "}
                Language here becomes a site of erasure and resistance.
              </p>

              <p className="section-subtitle">
                4. Intersection of Gender and Class
              </p>
              <p className="section-paragraph">
                Menchú provides vivid accounts of how indigenous women face
                layered oppressions—gender, class, and race. She speaks of women
                being used as servants in ladino homes, often subjected to
                verbal abuse and underpaid labor:{" "}
                <em>
                  "They treated us like objects... like furniture that had no
                  soul."
                </em>
              </p>

              <p className="section-subtitle">
                5. Solidarity and Political Awakening
              </p>
              <p className="section-paragraph">
                Over time, Rigoberta transforms from a daughter and laborer into
                a political activist. Her father’s martyrdom and her exposure to
                the Committee for the Peasant Unity (CUC) fuel her ideological
                awakening. She explains,{" "}
                <em>
                  "I began to understand that our suffering had a root, and that
                  root was injustice."
                </em>{" "}
                This marks a shift from personal pain to collective resistance.
              </p>

              <p className="section-subtitle">6. Land as Life</p>
              <p className="section-paragraph">
                One of the strongest motifs in the testimonial is the connection
                to land. Menchú describes how her community sees land not as a
                commodity but as life itself:{" "}
                <em>
                  "We never thought of selling it. It’s not ours to sell. It
                  belongs to all of us, including the dead."
                </em>{" "}
                This contrasts sharply with capitalist models of land ownership
                imposed by the state and elites.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              <li className="section-question">
                What genre is _I, Rigoberta Menchú_ and why is it significant?
              </li>
              <p className="section-answer">
                It’s a _testimonio_—a first-person narrative told to raise
                awareness about collective struggle. Its significance lies in
                its blend of autobiography and political activism.
              </p>

              <li className="section-question">
                What is the role of land in Menchú’s narrative?
              </li>
              <p className="section-answer">
                Land is sacred, communal, and central to identity. Its theft is
                not only economic violence but spiritual and cultural
                dispossession.
              </p>

              <li className="section-question">
                How is language used as a tool of oppression?
              </li>
              <p className="section-answer">
                Indigenous people were punished for speaking their own
                languages, reinforcing assimilation and marginalization. Spanish
                served as a barrier to rights and access.
              </p>

              <li className="section-question">
                What did Menchú’s father symbolize for her?
              </li>
              <p className="section-answer">
                He symbolizes resistance and sacrifice. His death during a
                protest was a turning point that politicized Menchú.
              </p>

              <li className="section-question">
                How does Menchú depict women’s experiences?
              </li>
              <p className="section-answer">
                Women are doubly oppressed—subjected to racism, economic
                exploitation, and gender-based violence. Yet, they also resist
                and organize.
              </p>

              <li className="section-question">
                Why does Menchú reject individualism in her storytelling?
              </li>
              <p className="section-answer">
                She believes her story is inseparable from her community’s,
                rejecting Western notions of individual authorship.
              </p>

              <li className="section-question">
                How does the book address education?
              </li>
              <p className="section-answer">
                Menchú’s limited education contrasts with the deep knowledge
                passed through oral tradition. Formal education is depicted as
                both exclusionary and necessary.
              </p>

              <li className="section-question">
                What role does religion play in the narrative?
              </li>
              <p className="section-answer">
                The Catholic Church is both an oppressive force and later a
                source of liberation, depending on context. Liberation theology
                played a role in political awakening.
              </p>

              <li className="section-question">
                How are racism and classism interwoven?
              </li>
              <p className="section-answer">
                Racism against indigenous people is tightly linked to economic
                exploitation. Landowners and ladinos use both ideologies to
                maintain dominance.
              </p>

              <li className="section-question">
                What does Menchú learn from her time working as a maid?
              </li>
              <p className="section-answer">
                She experiences daily humiliation and realizes the systemic
                nature of her people’s oppression.
              </p>

              <li className="section-question">
                Why is the testimony told orally?
              </li>
              <p className="section-answer">
                It reflects indigenous oral traditions and allows accessibility.
                It also preserves collective memory rather than privileging
                literary polish.
              </p>

              <li className="section-question">
                How does Menchú view death and martyrdom?
              </li>
              <p className="section-answer">
                Death becomes meaningful when it serves the struggle. Martyrs
                are honored as seeds for revolution.
              </p>

              <li className="section-question">
                What are the limitations of this testimony?
              </li>
              <p className="section-answer">
                As a mediated account recorded by another woman (Burgos-Debray),
                it raises questions of authorship and editorial influence.
              </p>

              <li className="section-question">
                What resistance strategies do the indigenous communities use?
              </li>
              <p className="section-answer">
                They rely on solidarity, oral storytelling, political education,
                secrecy, and connection to ancestral land as forms of
                resistance.
              </p>

              <li className="section-question">
                Why does this work remain relevant today?
              </li>
              <p className="section-answer">
                It highlights indigenous struggles for justice, land, and
                cultural survival—issues that remain pressing worldwide.
              </p>
            </ol>
          </section>
        </div>
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
