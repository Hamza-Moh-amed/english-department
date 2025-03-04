import { NavLink } from "@/components/DesktopNavigation";
import GradedQuestions from "@/components/GradedQuestions";

import { Navigation } from "@/components/Navigation";
import { PageTitle } from "@/components/PageTitle";
import { linguisticsQuizz } from "@/constants/linguistics";

export const metadata = {
  title: "Linguistics Quiz",
  description: "Linguistics Quiz",
};

export default function LinguisticsQuiz() {
  const navLinks: NavLink[] = [{ href: "#quiz", label: "Quiz" }];

  const questions = linguisticsQuizz;

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
            <PageTitle title="Linguistics Quiz" />
          </div>
          {/* Right: Empty div to balance the left column */}
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Linguistics Quiz" />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        <section id="quiz">
          <GradedQuestions questions={linguisticsQuizz} />
        </section>
      </div>
    </main>
  );
}
