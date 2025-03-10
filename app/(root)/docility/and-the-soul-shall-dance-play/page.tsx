import { NavLink } from "@/components/DesktopNavigation";
import { Navigation } from "@/components/Navigation";
import { PageTitle } from "@/components/PageTitle";
import PlayText from "@/components/addons/PlayText";

export default function AndTheSoulShallDancePlay() {
  const navLinks: NavLink[] = [
    { href: "#pdf", label: "PDF" },
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
    <main className="page-container">
      <div className="content-layout">
        <aside className="sidebar">
          <Navigation links={navLinks} />
        </aside>
        {/* Body Content */}
        <div className="main-content">
          {/* Title */}
          <PageTitle
            title="And the Soul Shall Dance: Play"
            author="Wakako Yamauchi"
          />
          {/* And The Soul Shall Dance Pdf */}
          <section id="pdf" className="section-content">
            <h2 className="section-title">And The Soul Shall Dance</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/1Wxznu6arIpJ9Mq_S80EHPwmj_TKAfxDb/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>
          {/* Play Section */}
          <section id="article" className="section-content">
            <h2 className="section-title">Play</h2>
            <PlayText navLinks={navLinks} />
          </section>
        </div>
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
