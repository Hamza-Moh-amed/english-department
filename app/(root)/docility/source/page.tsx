import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Files: PDFs and Drive Files",
  description: "Docility Source Page",
};

export default function DocilitySourcePage() {
  const navLinks: NavLink[] = [
    { href: "#docility", label: "Docility&Disciplinary Power" },
    { href: "#asian", label: "Asian-American" },
    { href: "#soul", label: "And The Soul Shall" },
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
          <PageTitle title="PDFs and Files" />

          {/* Docility and Disciplinary Power Section */}
          <section id="docility" className="section-content">
            <h2 className="section-title">Docility And Disciplinary Power</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/1QLx_Vilx3F83OVtaNko-1ye1078EoeSk/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* Asian-American Section */}
          <section id="asian" className="section-content">
            <h2 className="section-title">Asian-American</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/1NLAfmP-iYYS5r0BzTevB-IgoyGTqMsU3/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* And The Soul Shall Dance Section */}
          <section id="soul" className="section-content">
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
        </div>
        {/* Balance Div */}
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
