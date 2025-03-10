import { NavLink } from "@/components/DesktopNavigation";
import { Navigation } from "@/components/Navigation";
import { PageTitle } from "@/components/PageTitle";
import AssessmentQuestions from "@/components/Questions";
import { linguisticsQuestions } from "@/constants/linguistics";

export const metadata = {
  title: "Linguistics Questions and Answers",
  description: "Linguistics Questions and Answers",
};

export default function LinguisticsQuestions() {
  const navLinks: NavLink[] = [{ href: "#qna", label: "Q&A" }];

  const q = linguisticsQuestions;

  return (
    <main className="page-container">
      <div className="content-layout">
        <aside className="sidebar">
          <Navigation links={navLinks} />
        </aside>
        {/* Body Content */}
        <div className="main-content">
          {/* Title */}
          <PageTitle title="Linguistics Questions" />
          <section id="qna">
            <AssessmentQuestions questions={linguisticsQuestions} />
          </section>
        </div>
        {/* Balance Div */}
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
