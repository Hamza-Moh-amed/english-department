import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";
import { translationQuestions } from "@/constants/translation";
import GradedQuestions from "@/components/GradedQuestions";

export const metadata = {
  title: "Translation Questions and Answers",
  description: "Translation Questions and Answers",
};

export default function TranslationNotes() {
  const navLinks: NavLink[] = [{ href: "#qna", label: "Q&A" }];

  const q = translationQuestions;

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* For medium screens and up: Navigation on left and PageTitle centered */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          <div className="flex-grow text-center">
            <PageTitle title="Translation Questions" />
          </div>
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Translation Questions" />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-8 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Keywords & Translation Notes in the Same Section */}
        <section id="qna">
          <GradedQuestions questions={translationQuestions} />
        </section>
      </div>
    </main>
  );
}
