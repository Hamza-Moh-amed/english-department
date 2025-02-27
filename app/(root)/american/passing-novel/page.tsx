import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Passing",
  description:
    "A page based on Nella Larsen's Passing (New York: Alfred A. Knopf, 1929), exploring themes of racial identity, societal expectations, and the complexities of human relationships.",
};

export default function PassingText() {
  const navLinks: NavLink[] = [
    { href: "#audiobook", label: "Audiobook" },
    { href: "#passing", label: "Novel" },
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
            <PageTitle title="Passing" author="Nella Larsen" />
          </div>
          {/* Right: Empty div to balance the left column */}
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Passing" author="Nella Larsen" />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* YouTube Embed Section */}
        <section id="audiobook" className="space-y-8">
          <h2 className="text-2xl font-semibold text-center md:text-left">
            Audiobook
          </h2>
          <div className="flex justify-center">
            <div className="max-w-4xl w-[600px] h-[360px] lg:w-[800px] lg:h-[400px]">
              <iframe
                src="https://www.youtube.com/embed/dtqgq8sIQs0?si=M0_84UbE3bLz8bzz"
                title="Passing Audiobook"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>

        <section id="passing" className="space-y-8">
          <h2 className="text-2xl font-semibold">Passing: Nella Larsen</h2>
          <div className="w-full min-h-screen bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/1odoGpqCzARInQO0BDHbD_hpO3ohkH_1C/preview"
              frameBorder="0"
              allow="autoplay"
              className="w-full h-screen"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}
