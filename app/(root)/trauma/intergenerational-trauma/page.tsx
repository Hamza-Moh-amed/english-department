import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "What Is Intergenerational Trauma?",
  description:
    "A page explaining what intergenerational trauma is, including its long-term effects, causes, who it affects, and how it is treated.",
};

export default function IntergenerationalTrauma() {
  const navLinks: NavLink[] = [
    { href: "#overview", label: "Overview" },
    { href: "#long-term-effects", label: "Long-Term Effects" },
    { href: "#causes", label: "Causes" },
    { href: "#who-it-affects", label: "Who It Affects" },
    { href: "#treatment", label: "Treatment" },
    { href: "#resources", label: "Resources" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* For medium screens and up: Navigation left, PageTitle centered */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          <div className="flex-grow text-center">
            <PageTitle title="What Is Intergenerational Trauma?" />
          </div>
          <div className="flex-none w-24" />
        </div>
        {/* Mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="What Is Intergenerational Trauma?" />
        </div>
      </div>
      {/* Page Content */}
      <div className="container mx-auto px-4 py-8 space-y-8 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Review Information */}
        <div className="space-y-2">
          <p className="text-lg font-semibold">
            Medically Reviewed by Smitha Bhandari, MD on September 19, 2024
          </p>
          <p className="text-lg font-semibold">Written by Evan Starkman</p>
        </div>

        {/* Overview Section */}
        <section id="overview" className="space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-lg">
            If you have ancestors or older relatives who went through a very
            distressing or oppressive event, their emotional and behavioral
            reactions could ripple through the generations of your family and
            affect you. This is called intergenerational trauma. You might also
            hear it called generational trauma, historical trauma, or
            multigenerational trauma.
          </p>
          <p className="text-lg">
            It may stem from personal trauma, such as child or domestic abuse,
            or from trauma that a specific cultural, racial, or ethnic group
            endured. It’s been tied to major events like wars, slavery, the
            Holocaust, and colonial violence against Native Americans. It might
            even result from natural disasters like a flood, earthquake, or
            pandemic.
          </p>
        </section>

        {/* Long-Term Effects Section */}
        <section id="long-term-effects" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What Are the Long-Term Effects?
          </h2>
          <p className="text-lg">
            Intergenerational trauma could take a toll on your health in a
            number of ways. The reactions can be different for each generation,
            but they could include:
          </p>
          <ul className="list-disc ml-6 text-lg">
            <li>Shame</li>
            <li>Anxiety and guilt</li>
            <li>Feeling helpless or vulnerable</li>
            <li>Low self-esteem</li>
            <li>Depression</li>
            <li>Higher chances of suicide</li>
            <li>High rates of heart disease</li>
            <li>Substance abuse</li>
            <li>Relationship troubles</li>
            <li>A hard time controlling aggressive feelings</li>
            <li>Extreme reactions to stress</li>
            <li>
              Damaged cultural identity (the sense of belonging to a larger
              group)
            </li>
          </ul>
          <p className="text-lg">
            Still, many people have no obvious effects from trauma that past
            generations of their family went through.
          </p>
        </section>

        {/* Causes Section */}
        <section id="causes" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What Causes Intergenerational Trauma?
          </h2>
          <p className="text-lg">
            The exact causes aren’t clear. But some experts think the original
            traumatic event could affect your relatives’ relationship skills,
            personal behavior, and attitudes and beliefs in ways that affect
            future generations of your family.
          </p>
          <p className="text-lg">
            How your parents talk with you about the traumatic event (or fail to
            talk about it) and the way your family functions seem to play
            important roles in whether trauma gets passed down. For example, a
            parent’s experience of trauma might affect their parenting skills
            and play a role in their children’s behavior problems.
          </p>
          <p className="text-lg">
            Researchers are also looking into the possible role of “epigenetic
            changes.” The idea is that your environment could cause changes that
            affect the way your genes work, and these changes could be passed on
            to younger generations. Epigenetic changes can affect how your body
            reads a DNA sequence. But they’re reversible and don’t change DNA
            sequences like gene mutations do.
          </p>
        </section>

        {/* Who It Affects Section */}
        <section id="who-it-affects" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Who Does Intergenerational Trauma Affect?
          </h2>
          <p className="text-lg">
            Most studies of intergenerational trauma have focused on descendants
            of people who endured a historical traumatic event. That includes:
          </p>
          <ul className="list-disc ml-6 text-lg">
            <li>Holocaust survivors who survived concentration camps</li>
            <li>
              African American people who lived through years of slavery,
              segregation, or systemic racism
            </li>
            <li>
              Native Americans who endured colonial massacres or had their
              children taken from them and placed in boarding schools due to
              federal policies
            </li>
            <li>
              Japanese Americans who were forced to live in internment
              (detention) camps during World War II
            </li>
            <li>Veterans of the Vietnam War</li>
          </ul>
          <p className="text-lg">
            Some experts say we need more research into transgenerational trauma
            among relatives of people with disabilities. It’s also thought that
            intergenerational trauma can affect family members of people who’ve
            endured traumas such as murder or rape, natural disasters, physical,
            sexual, or mental abuse, substance abuse, abandonment or neglect,
            serious injury, illness, or untreated mental illness, and poverty
            and food insecurity.
          </p>
        </section>

        {/* Treatment Section */}
        <section id="treatment" className="space-y-4">
          <h2 className="text-2xl font-semibold">How Is It Treated?</h2>
          <p className="text-lg">
            We need more research to figure out which treatments work best for
            taking charge of intergenerational trauma. If you think you or a
            loved one might have symptoms, start by talking to your doctor. They
            may be able to treat mental health conditions or other medical
            problems that might be tied to intergenerational trauma.
          </p>
          <p className="text-lg">
            They may also refer you to an experienced mental health professional
            (like a psychologist or a licensed therapist) who could help you:
          </p>
          <ul className="list-disc ml-6 text-lg">
            <li>Trace your family’s history of trauma</li>
            <li>
              Manage anger, stress, or numbness that might be tied to your
              family history
            </li>
            <li>
              Discuss current-day traumas, like racism, that might be linked to
              the original trauma
            </li>
            <li>Practice self-care techniques like mindfulness and exercise</li>
            <li>
              Spot things that might trigger the effects of trauma for you and
              show you how to limit them
            </li>
          </ul>
          <p className="text-lg">
            Choose a doctor or therapist who’s respectful of your culture, race,
            or ethnicity. Depending on your background and your goals for
            treatment, you may be able to find a professional who helps you
            reconnect with your ancestors’ culture and traditions to help you
            work through the grief of old traumas. Some treatment methods
            involve traditional healing methods and ceremonial practices.
          </p>
        </section>

        {/* Additional Resources Section */}
        <section id="resources" className="space-y-4">
          <h2 className="text-2xl font-semibold">Additional Resources</h2>
          <p className="text-lg">
            For more information, please visit:{" "}
            <a
              href="https://www.webmd.com/mental-health/what-is-intergenerational-trauma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              What Is Intergenerational Trauma?
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
