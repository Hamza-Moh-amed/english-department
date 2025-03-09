import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Files: PDFs and Drive Files",
  description: "Linguistics Source Page",
};

export default function LinguisticsSourcePage() {
  const navLinks: NavLink[] = [
    { href: "#chapter-1", label: "Chapter 1" },
    { href: "#chapter-2", label: "Chapter 2" },
    { href: "#chapter-3", label: "Chapter 3" },
    { href: "#chapter-4-5", label: "Chapter 4 & 5" },
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

          {/* Chapter 1 Section */}
          <section id="chapter-1" className="section-content">
            <h2 className="section-title">Chapter 1</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/1cMiyDrOX__CNZRSbBwR57yNfTNnUMCGQ/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* Chapter 2 Section */}
          <section id="chapter-2" className="section-content">
            <h2 className="section-title">Chapter 2</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/1iy57t_yIlvqC96xmK0ind42AqxnWxl2M/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* Chapter 3 Section */}
          <section id="chapter-3" className="section-content">
            <h2 className="section-title">Chapter 3</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/134Xhal3s62m_COLYn5ln4ft71jzvYIVI/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* Chapter 4 & 5 Section */}
          <section id="chapter-4-5" className="section-content">
            <h2 className="section-title">Chapter 4 & 5</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/1y0p6UMyzjzHIDY1-El0wy5aorVhOiDkj/preview"
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
