// app/nineTypesOfViolence.tsx
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Nine Types of Violence and Abuse",
  description:
    "A page presenting the nine types of violence and abuse as described by the Violence Prevention Initiative (2014).",
};

export default function NineTypesOfViolence() {
  const navLinks: NavLink[] = [
    { href: "#physical-violence", label: "Physical Violence" },
    { href: "#sexual-violence", label: "Sexual Violence" },
    { href: "#emotional-violence", label: "Emotional Violence" },
    { href: "#psychological-violence", label: "Psychological Violence" },
    { href: "#spiritual-violence", label: "Spiritual Violence" },
    { href: "#cultural-violence", label: "Cultural Violence" },
    { href: "#verbal-abuse", label: "Verbal Abuse" },
    { href: "#financial-abuse", label: "Financial Abuse" },
    { href: "#neglect", label: "Neglect" },
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
            <PageTitle title="Nine Types of Violence and Abuse" />
          </div>
          <div className="flex-none w-24" />
        </div>
        {/* Mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Nine Types of Violence and Abuse" />
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-8 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Physical Violence */}
        <section id="physical-violence" className="space-y-4">
          <h2 className="text-2xl font-semibold">Physical Violence</h2>
          <p className="text-lg">
            Physical violence occurs when someone uses a part of their body or
            an object to control a person’s actions.
          </p>
        </section>
        {/* Sexual Violence */}
        <section id="sexual-violence" className="space-y-4">
          <h2 className="text-2xl font-semibold">Sexual Violence</h2>
          <p className="text-lg">
            Sexual violence occurs when a person is forced to unwillingly take
            part in sexual activity.
          </p>
        </section>
        {/* Emotional Violence */}
        <section id="emotional-violence" className="space-y-4">
          <h2 className="text-2xl font-semibold">Emotional Violence</h2>
          <p className="text-lg">
            Emotional violence occurs when someone says or does something to
            make a person feel stupid or worthless.
          </p>
        </section>
        {/* Psychological Violence */}
        <section id="psychological-violence" className="space-y-4">
          <h2 className="text-2xl font-semibold">Psychological Violence</h2>
          <p className="text-lg">
            Psychological violence occurs when someone uses threats and causes
            fear in an individual to gain control.
          </p>
        </section>
        {/* Spiritual Violence */}
        <section id="spiritual-violence" className="space-y-4">
          <h2 className="text-2xl font-semibold">Spiritual Violence</h2>
          <p className="text-lg">
            Spiritual (or religious) violence occurs when someone uses an
            individual’s spiritual beliefs to manipulate, dominate or control
            that person.
          </p>
        </section>
        {/* Cultural Violence */}
        <section id="cultural-violence" className="space-y-4">
          <h2 className="text-2xl font-semibold">Cultural Violence</h2>
          <p className="text-lg">
            Cultural violence occurs when an individual is harmed as a result of
            practices that are part of their culture, religion or tradition.
          </p>
        </section>
        {/* Verbal Abuse */}
        <section id="verbal-abuse" className="space-y-4">
          <h2 className="text-2xl font-semibold">Verbal Abuse</h2>
          <p className="text-lg">
            Verbal abuse occurs when someone uses language, whether spoken or
            written, to cause harm to an individual.
          </p>
        </section>
        {/* Financial Abuse */}
        <section id="financial-abuse" className="space-y-4">
          <h2 className="text-2xl font-semibold">Financial Abuse</h2>
          <p className="text-lg">
            Financial abuse occurs when someone controls an individual’s
            financial resources without the person’s consent or misuses those
            resources.
          </p>
        </section>
        {/* Neglect */}
        <section id="neglect" className="space-y-4">
          <h2 className="text-2xl font-semibold">Neglect</h2>
          <p className="text-lg">
            Neglect occurs when someone has the responsibility to provide care
            or assistance for an individual but does not.
          </p>
        </section>
        {/* Source */}
        <p className="text-lg italic">
          Source: Violence Prevention Initiative (2014)
        </p>
      </div>
    </main>
  );
}
