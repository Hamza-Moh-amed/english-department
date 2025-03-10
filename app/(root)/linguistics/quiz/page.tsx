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
    <main className="page-container">
      <div className="content-layout">
        <aside className="sidebar">
          <Navigation links={navLinks} />
        </aside>
        {/* Body Content */}
        <div className="main-content">
          {/* Title */}
          <PageTitle title="Linguistics Quiz" />

          <section id="quiz">
            <GradedQuestions questions={linguisticsQuizz} />
          </section>
        </div>
        {/* Balance Div */}
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
