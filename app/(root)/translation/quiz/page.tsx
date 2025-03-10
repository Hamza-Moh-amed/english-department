import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";
import { translationQuestions } from "@/constants/translation";
import GradedQuestions from "@/components/GradedQuestions";

export const metadata = {
  title: "Translation Quiz",
  description: "Translation Quiz",
};

export default function TranslationNotes() {
  const navLinks: NavLink[] = [{ href: "#quiz", label: "Quiz" }];

  const q = translationQuestions;

  return (
    <main className="page-container">
      <div className="content-layout">
        <aside className="sidebar">
          <Navigation links={navLinks} />
        </aside>
        {/* Body Content */}
        <div className="main-content">
          {/* Title */}
          <PageTitle title="Translation Quiz" />
          {/* Keywords & Translation Notes in the Same Section */}
          <section id="quiz">
            <GradedQuestions questions={translationQuestions} />
          </section>
        </div>
        {/* Balance Div */}
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
