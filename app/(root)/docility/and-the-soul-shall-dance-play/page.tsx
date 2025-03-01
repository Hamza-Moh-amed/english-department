import { NavLink } from "@/components/DesktopNavigation";
import { Navigation } from "@/components/Navigation";
import { PageTitle } from "@/components/PageTitle";
import PlayText from "@/components/addons/PlayText";

export default function AndTheSoulShallDancePlay() {
  const navLinks: NavLink[] = [
    { href: "#act1-scene1", label: "Act 1, Scene 1" },
    { href: "#act1-scene2", label: "Act 1, Scene 2" },
    { href: "#act1-scene3", label: "Act 1, Scene 3" },
    { href: "#act2-scene1", label: "Act 2, Scene 1" },
    { href: "#act2-scene2", label: "Act 2, Scene 2" },
    { href: "#act2-scene3", label: "Act 2, Scene 3" },
    { href: "#act2-scene4", label: "Act 2, Scene 4" },
    { href: "#act2-scene5", label: "Act 2, Scene 5" },
    { href: "#act2-scene6", label: "Act 2, Scene 6" },
    // Add more acts and scenes as needed
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* For medium screens and up: show Navigation on the left and PageTitle centered */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left: Navigation */}
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          {/* Center: PageTitle */}
          <div className="flex-grow text-center">
            <PageTitle
              title="And the Soul Shall Dance: Play"
              author="Wakako Yamauchi"
            />
          </div>
          {/* Right: Empty div to balance the left column */}
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle
            title="And the Soul Shall Dance: Play"
            author="Wakako Yamauchi"
          />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Text of the Play Section */}
        <section id="play-text" className="space-y-8">
          <PlayText navLinks={navLinks} />
        </section>
      </div>
    </main>
  );
}
