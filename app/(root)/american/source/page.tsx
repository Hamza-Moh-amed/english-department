import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Files: PDFs and Drive Files",
  description: "American Source Page",
};

export default function AmericanSourcePage() {
  const navLinks: NavLink[] = [
    { href: "#planner", label: "Weekly Planner" },
    { href: "#reader", label: "Course Reader" },
    { href: "#passing", label: "Passing" },
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

          {/* Weekly Planner Section */}
          <section id="planner" className="section-content">
            <h2 className="section-title">Weekly Planner</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/1zMfvUfCmG9h2Pp9hjWzAHlJ3XZErz-LA/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* Course Reader Section */}
          <section id="reader" className="section-content">
            <h2 className="section-title">Course Reader</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/1OJCHabqKsFsd6mv3Xpoqk5__j9kWTEzh/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* Passing Section */}
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
