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
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop Navigation & Page Title */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          <div className="flex-grow text-center">
            <PageTitle title="Creating a Trauma-Informed Analysis (Psychological Trauma)" />
          </div>
          <div className="flex-none w-24" />
        </div>
        {/* Mobile Navigation & Page Title */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Creating a Trauma-Informed Analysis (Psychological Trauma)" />
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-8 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* The Context Section */}
        <section id="context" className="space-y-4">
          <h2 className="text-2xl font-semibold">The Context</h2>
          <p className="text-lg">
            We need to start with the context. The time, place, and theme
            situate the poem in a particular context. For example, if a poem was
            written during WWI, what was happening in Europe at the time? Who
            were the parties at war? What was the dominant cultural attitude
            towards the war? How much understanding of trauma did the medical
            world have? In such light, how were the soldiers with psychological
            injuries treated? Does the poem represent a stand that is different
            from the cultural mainstream?
          </p>
          <p className="text-lg">
            Trauma literature gives voice to the lived experience of wider
            groups of people. Which group(s) of people is affected by the trauma
            depicted in the text? Are they soldiers, domestic abuse survivors,
            children who witnessed or have been subjected to violence, residents
            of a particular area hit by a natural disaster, or refugees?
          </p>
        </section>

        {/* The Poetics Section */}
        <section id="poetics" className="space-y-4">
          <h2 className="text-2xl font-semibold">The Poetics</h2>
          <p className="text-lg">
            It is important to explore significant literary devices. You can
            start with the voice and tone. Who is the speaker or the persona in
            the poem? How close or far is this persona from the event depicted?
            For instance, a writer might write about an event which happened to
            him or her as a child. How does this distance affect (or not) the
            voice and attitude of the persona? Which affect or emotion is
            present (e.g., anger, grief, reconciliation, etc.)? The voice and
            the tone can offer useful insights on where the poet (or persona)
            stands in relation to the trauma.
          </p>
          <p className="text-lg">
            Go deeper into the literary devices. How is the trauma represented
            in the language? Is there any significance to the structure of the
            text, the punctuation, the repetitions, etc.? Which types of images,
            sentence structures, vocabulary, and other poetic devices are
            present? How do they serve—or not serve—the depiction of trauma?
          </p>
        </section>

        {/* Trauma Section */}
        <section id="trauma" className="space-y-4">
          <h2 className="text-2xl font-semibold">Trauma</h2>
          <p className="text-lg">
            While examining the literary aspects, consider how they relate to
            the features of psychological trauma (PTSD). A fundamental question
            to ask is: What trauma features are present in the text, and how are
            they conveyed? Reflect on how the poetics discussed above help to
            express the underlying trauma.
          </p>
        </section>
      </div>
    </main>
  );
}
