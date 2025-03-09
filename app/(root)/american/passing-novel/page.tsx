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
    <main className="page-container">
      <div className="content-layout">
        <aside className="sidebar">
          <Navigation links={navLinks} />
        </aside>
        {/* Body Content */}
        <div className="main-content">
          {/* Title */}
          <PageTitle title="Passing" author="Nella Larsen" />
          {/* Body Content */}

          {/* YouTube Embed Section */}
          <section id="audiobook" className="section-content">
            <h2 className="section-title">Audiobook</h2>
            <div className="video-container">
              <div className="video-container-2">
                <iframe
                  src="https://www.youtube.com/embed/dtqgq8sIQs0?si=M0_84UbE3bLz8bzz"
                  title="Passing Audiobook"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-frame"
                ></iframe>
              </div>
            </div>
          </section>
          {/* PDF Container */}
          <section id="passing" className="section-content">
            <h2 className="section-title">Passing: Nella Larsen</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/1odoGpqCzARInQO0BDHbD_hpO3ohkH_1C/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>
        </div>
        {/* Balance Div */}
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
