import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Files: PDFs and Drive Files",
  description: "Assets Page",
};

export default function LinguisticsAssetsPage() {
  const navLinks: NavLink[] = [
    { href: "#chapter-1", label: "Chapter 1" },
    { href: "#chapter-2", label: "Chapter 2" },
    { href: "#chapter-3", label: "Chapter 3" },
    { href: "#chapter-4-5", label: "Chapter 4 & 5" },
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
        {/* Overview Section */}

        <section id="chapter-1" className="space-y-8">
          <h2 className="text-2xl font-semibold">Chapter 1</h2>
          <div className="w-full min-h-screen bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/1cMiyDrOX__CNZRSbBwR57yNfTNnUMCGQ/preview"
              frameBorder="0"
              allow="autoplay"
              className="w-full h-screen"
            ></iframe>
          </div>
        </section>

        <section id="chapter-2" className="space-y-8">
          <h2 className="text-2xl font-semibold">Chapter 2</h2>
          <div className="w-full min-h-screen bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/1iy57t_yIlvqC96xmK0ind42AqxnWxl2M/preview"
              frameBorder="0"
              allow="autoplay"
              className="w-full h-screen"
            ></iframe>
          </div>
        </section>

        <section id="chapter-3" className="space-y-8">
          <h2 className="text-2xl font-semibold">Chapter 3</h2>
          <div className="w-full min-h-screen bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/134Xhal3s62m_COLYn5ln4ft71jzvYIVI/preview"
              frameBorder="0"
              allow="autoplay"
              className="w-full h-screen"
            ></iframe>
          </div>
        </section>

        <section id="chapter-4-5" className="space-y-8">
          <h2 className="text-2xl font-semibold">Chapter 4-5</h2>
          <div className="w-full min-h-screen bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/1y0p6UMyzjzHIDY1-El0wy5aorVhOiDkj/preview"
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
