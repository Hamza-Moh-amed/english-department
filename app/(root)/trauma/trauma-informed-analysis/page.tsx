import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Creating a Trauma-Informed Analysis (Psychological Trauma)",
  description:
    "Guidelines for creating a trauma-informed literary analysis with emphasis on context, poetics, and trauma features.",
};

export default function TraumaInformedAnalysis() {
  const navLinks: NavLink[] = [
    { href: "#context", label: "The Context" },
    { href: "#poetics", label: "The Poetics" },
    { href: "#trauma", label: "Trauma" },
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
          <PageTitle title="Creating a Trauma-Informed Analysis (Psychological Trauma)" />

          {/* The Context Section */}
          <section id="context" className="section-content">
            <h2 className="section-title">The Context</h2>
            <div className="section-block">
              <p className="section-paragraph">
                We need to start with the context. The time, place, and theme
                situate the poem in a particular context. For example, if a poem
                was written during WWI, what was happening in Europe at the
                time? Who were the parties at war? What was the dominant
                cultural attitude towards the war? How much understanding of
                trauma did the medical world have? In such light, how were the
                soldiers with psychological injuries treated? Does the poem
                represent a stand that is different from the cultural
                mainstream?
              </p>
              <p className="section-paragraph">
                Trauma literature gives voice to the lived experience of wider
                groups of people. Which group(s) of people is affected by the
                trauma depicted in the text? Are they soldiers, domestic abuse
                survivors, children who witnessed or have been subjected to
                violence, residents of a particular area hit by a natural
                disaster, or refugees?
              </p>
            </div>
          </section>

          {/* The Poetics Section */}
          <section id="poetics" className="section-content">
            <h2 className="section-title">The Poetics</h2>
            <div className="section-block">
              <p className="section-paragraph">
                It is important to explore significant literary devices. You can
                start with the voice and tone. Who is the speaker or the persona
                in the poem? How close or far is this persona from the event
                depicted? For instance, a writer might write about an event
                which happened to him or her as a child. How does this distance
                affect (or not) the voice and attitude of the persona? Which
                affect or emotion is present (e.g., anger, grief,
                reconciliation, etc.)? The voice and the tone can offer useful
                insights on where the poet (or persona) stands in relation to
                the trauma.
              </p>
              <p className="section-paragraph">
                Go deeper into the literary devices. How is the trauma
                represented in the language? Is there any significance to the
                structure of the text, the punctuation, the repetitions, etc.?
                Which types of images, sentence structures, vocabulary, and
                other poetic devices are present? How do they serve—or not
                serve—the depiction of trauma?
              </p>
            </div>
          </section>

          {/* Trauma Section */}
          <section id="trauma" className="section-content">
            <h2 className="section-title">Trauma</h2>
            <div className="section-block">
              <p className="section-paragraph">
                While examining the literary aspects, consider how they relate
                to the features of psychological trauma (PTSD). A fundamental
                question to ask is: What trauma features are present in the
                text, and how are they conveyed? Reflect on how the poetics
                discussed above help to express the underlying trauma.
              </p>
            </div>
          </section>
        </div>
        {/* Balance Div */}
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
