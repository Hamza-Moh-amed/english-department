import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Files: PDFs and Drive Files",
  description: "Assets Page",
};

export default function ComparativeAssetsPage() {
  const navLinks: NavLink[] = [
    { href: "#planner", label: "Weekly Planner" },
    { href: "#course-pack", label: "Course Pack" },
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
        {/* Overview Section */}

        {/* Weekly Planner */}
        <section id="planner" className="space-y-8">
          <h2 className="text-2xl font-semibold">Weekly Planner</h2>
          <div className="w-full min-h-screen bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/1lTm4-t1tZqj5Jc5QYPkWSkT54wn1WtFs/preview"
              frameBorder="0"
              allow="autoplay"
              className="w-full h-screen"
            ></iframe>
          </div>
        </section>
        {/* Course Pack */}
        <section id="course-pack" className="space-y-8">
          <h2 className="text-2xl font-semibold">Course Pack</h2>
          <div className="w-full min-h-screen bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/1RKGU0uI7wugOhoJhL930ppd-5zOsLUPy/preview"
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
