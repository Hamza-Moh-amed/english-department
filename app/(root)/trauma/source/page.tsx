import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Files: PDFs and Drive Files",
  description: "Trauma Source Page",
};

export default function TraumaSourcePage() {
  const navLinks: NavLink[] = [
    { href: "#planner", label: "Weekly Planner" },
    { href: "#course-pack", label: "Course Pack" },
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
          {/* Body Content */}

          {/* Weekly Planner Section */}
          <section id="planner" className="section-content">
            <h2 className="section-title">Weekly Planner</h2>
            <div className="pdf-container">
              <iframe
                src="https://docs.google.com/document/d/1R9HlZJXoiwYLmLfRCTDiUA_8DK8i-PCX/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* Course Pack Section */}
          <section id="course-pack" className="section-content">
            <h2 className="section-title">Course Pack</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/1-H3xB-6WAVdc_Zwd90ShiMyKkBzuT4tH/preview"
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
