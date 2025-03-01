import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Files: PDFs and Drive Files",
  description: "Assets Page",
};

export default function TraumaAssetsPage() {
  const navLinks: NavLink[] = [
    { href: "#journalistic", label: "Journalistic translation" },
    { href: "#suggested", label: "Suggested Passages" },
    { href: "#class-2", label: "Class 2" },
    { href: "#class-3", label: "Class 3" },
    { href: "#mcq-q", label: "MCQ Questions" },
    { href: "#mcq-a", label: "MCQ Answers" },
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
            <PageTitle title="PDFs and Files" />
          </div>
          {/* Right: Empty div to balance the left column */}
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="PDFs and Files" />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        <section id="journalistic" className="space-y-8">
          <h2 className="text-2xl font-semibold">
            Rules of journalistic translation
          </h2>
          <div className="w-full min-h-screen bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/1Lc1wGwzbi1bXtvr7zfXx68FQWBawFX5P/preview"
              frameBorder="0"
              allow="autoplay"
              className="w-full h-screen"
            ></iframe>
          </div>
        </section>

        <section id="suggested" className="space-y-8">
          <h2 className="text-2xl font-semibold">Suggested Passages</h2>
          <div className="w-full min-h-screen bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/1iwPXm7NL_R2ss-MCTmWxA3P3pTuZB48h/preview"
              frameBorder="0"
              allow="autoplay"
              className="w-full h-screen"
            ></iframe>
          </div>
        </section>

        <section id="class-2" className="space-y-8">
          <h2 className="text-2xl font-semibold">Class Two</h2>
          <div className="w-full min-h-screen bg-gray-100">
            <iframe
              src="https://docs.google.com/document/d/1_jpRyE_OSVj4LwyCFw54fn4KUnn7iwiE/preview"
              frameBorder="0"
              allow="autoplay"
              className="w-full h-screen"
            ></iframe>
          </div>
        </section>

        <section id="class-3" className="space-y-8">
          <h2 className="text-2xl font-semibold">Class Three</h2>
          <div className="w-full min-h-screen bg-gray-100">
            <iframe
              src="https://docs.google.com/document/d/1l_FjZLjuPvmwwl3-FSmt1BNo8fgfVxQ7/preview"
              frameBorder="0"
              allow="autoplay"
              className="w-full h-screen"
            ></iframe>
          </div>
        </section>

        <section id="mcq-q" className="space-y-8">
          <h2 className="text-2xl font-semibold">MCQ Questions</h2>
          <div className="w-full min-h-screen bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/1VQPFqULkMUAtEiiMb9XuXlo9K34PAfIj/preview"
              frameBorder="0"
              allow="autoplay"
              className="w-full h-screen"
            ></iframe>
          </div>
        </section>

        <section id="mcq-a" className="space-y-8">
          <h2 className="text-2xl font-semibold">MCQ Answers</h2>
          <div className="w-full min-h-screen bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/1rQf6G0DEzRiSrb_G502XGwUDCkB-MRrb/preview"
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
