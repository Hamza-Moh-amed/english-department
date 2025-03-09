import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Files: PDFs and Drive Files",
  description: "Trauma Source Page",
};

export default function TraumaSourcePage() {
  const navLinks: NavLink[] = [
    { href: "#journalistic", label: "Journalistic translation" },
    { href: "#suggested", label: "Suggested Passages" },
    { href: "#class-2", label: "Class 2" },
    { href: "#class-3", label: "Class 3" },
    { href: "#mcq-q", label: "MCQ Questions" },
    { href: "#mcq-a", label: "MCQ Answers" },
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

          {/* Journalistic Translation Section */}
          <section id="journalistic" className="section-content">
            <h2 className="section-title">Rules of journalistic translation</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/1Lc1wGwzbi1bXtvr7zfXx68FQWBawFX5P/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* Suggested Passages Section */}
          <section id="suggested" className="section-content">
            <h2 className="section-title">Suggested Passages</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/1iwPXm7NL_R2ss-MCTmWxA3P3pTuZB48h/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* Class 2 Section */}
          <section id="class-2" className="section-content">
            <h2 className="section-title">Class Two</h2>
            <div className="pdf-container">
              <iframe
                src="https://docs.google.com/document/d/1_jpRyE_OSVj4LwyCFw54fn4KUnn7iwiE/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* Class 3 Section */}
          <section id="class-3" className="section-content">
            <h2 className="section-title">Class Three</h2>
            <div className="pdf-container">
              <iframe
                src="https://docs.google.com/document/d/1l_FjZLjuPvmwwl3-FSmt1BNo8fgfVxQ7/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* MCQ Questions Section */}
          <section id="mcq-q" className="section-content">
            <h2 className="section-title">MCQ Questions</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/1VQPFqULkMUAtEiiMb9XuXlo9K34PAfIj/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* MCQ Answers Section */}
          <section id="mcq-a" className="section-content">
            <h2 className="section-title">MCQ Answers</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/1rQf6G0DEzRiSrb_G502XGwUDCkB-MRrb/preview"
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
