import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "I, Rigoberta Menchú: Testimony and Analysis",
  description:
    "A page based on Rigoberta Menchú’s testimonial text exploring Indigenous identity, resistance, and the dynamics of marginalization.",
};

export default function IRigobertaMenchu() {
  const navLinks: NavLink[] = [
    { href: "#pdf", label: "Article PDF" },
    { href: "#overview", label: "Overview" },
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
            title="I, Rigoberta Menchú: Testimony and Analysis"
            author="Rigoberta Menchú"
          />

          {/* Article PDF Section */}
          <section id="pdf" className="section-content">
            <h2 className="section-title">Article</h2>
            <div className="pdf-container">
              <iframe
                src="URL_TO_RIGOBERTA_MENCHU_PDF"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="section-content">
            <h2 className="section-title">Overview</h2>
            <div className="section-block">
              <p className="section-paragraph">
                The testimonial "I, Rigoberta Menchú" presents a deeply personal
                account of Indigenous identity, cultural resistance, and the
                enduring impact of systemic marginalization in Guatemala.
                Drawing on lived experiences of oppression, violence, and loss,
                Menchú weaves a narrative that challenges dominant power
                structures and reclaims Indigenous histories.
              </p>

              <p className="section-subtitle">
                Indigenous Identity and Resilience
              </p>
              <p className="section-paragraph">
                Menchú’s testimony foregrounds her identity as an Indigenous
                woman, highlighting the strength and resilience that emerges
                through cultural remembrance and collective solidarity. Her
                account emphasizes how indigenous values serve both as a shield
                and a source of empowerment in the face of adversity.
              </p>

              <p className="section-subtitle">Exposing Historical Injustice</p>
              <p className="section-paragraph">
                The narrative exposes the myriad injustices inflicted upon
                Indigenous communities—including cultural erasure, exploitation,
                and violent repression. Menchú’s personal history becomes a
                powerful indictment of the broader systems that perpetuate
                marginality.
              </p>

              <p className="section-subtitle">
                A Call to Reclaim History and Power
              </p>
              <p className="section-paragraph">
                Beyond its autobiographical scope, the text is a call for
                political awakening and collective action. Menchú’s story urges
                both her community and the international audience to acknowledge
                and redress historical wrongs.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              <p className="section-subtitle">
                1. Testimony as a Form of Resistance
              </p>
              <p className="section-paragraph">
                By articulating her own experiences of injustice and cultural
                loss, Menchú transforms personal testimony into a powerful act
                of resistance. Her narrative disrupts official histories that
                have long silenced Indigenous voices.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "By bearing witness to our suffering and resilience, we
                  reclaim our history."
                </em>
              </p>

              <p className="section-subtitle">
                2. Intersection of Identity and Oppression
              </p>
              <p className="section-paragraph">
                The text intricately details how the intersection of ethnicity,
                class, and gender compounds the marginalization of Indigenous
                peoples. Menchú’s dual identity as both a woman and an
                Indigenous member deepens the critique of systemic oppression.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "My identity is both my burden and my strength in the struggle
                  against oppression."
                </em>
              </p>

              <p className="section-subtitle">
                3. Challenging Dominant Narratives
              </p>
              <p className="section-paragraph">
                The testimonial functions as a counter-narrative by questioning
                the historical record shaped by colonial and state violence.
                Menchú’s work invites a reevaluation of traditional accounts of
                progress and modernity.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Our story demands to be told and to challenge the established
                  norms."
                </em>
              </p>

              <p className="section-subtitle">
                4. The Vision for Transformation
              </p>
              <p className="section-paragraph">
                Ultimately, the narrative is not merely descriptive but
                prescriptive, setting forth a vision for social and cultural
                transformation. It stands as a call to action, urging
                marginalized communities to unite and reclaim agency over their
                own histories.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              <li className="section-question">
                What is the primary focus of Menchú’s testimonial?
                <p className="section-answer">
                  The primary focus is to document the lived realities of
                  Indigenous marginalization and to articulate a vision for
                  cultural and political liberation through the reclamation of
                  Indigenous identity.
                </p>
              </li>
              <li className="section-question">
                How does the narrative act as a form of resistance?
                <p className="section-answer">
                  The narrative resists oppression by challenging dominant
                  historical narratives and reclaiming the truth of Indigenous
                  experiences, thereby shifting the balance of power in
                  discourse.
                </p>
              </li>
              <li className="section-question">
                In what ways does the testimonial address the intersection of
                identity and oppression?
                <p className="section-answer">
                  Menchú examines how gender, ethnicity, and class intersect to
                  amplify the effects of marginalization, revealing the multiple
                  layers of discrimination faced by Indigenous peoples.
                </p>
              </li>
              <li className="section-question">
                What role does storytelling play in the text?
                <p className="section-answer">
                  Storytelling is central to the work—it is both a method of
                  preserving cultural memory and a deliberate act of defiance
                  against forces that seek to silence Indigenous voices.
                </p>
              </li>
              <li className="section-question">
                How does the testimonial challenge mainstream historical
                narratives?
                <p className="section-answer">
                  By documenting personal and collective suffering alongside
                  acts of resistance, Menchú forces a reconsideration of
                  accepted histories, emphasizing the need to integrate
                  marginalized voices into the broader social record.
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
