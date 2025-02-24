// app/chapter5.tsx
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Principles of Language Assessment: Chapter 5",
  description:
    "A page based on Chapter 5 of Principles of Language Assessment.",
};

export default function ChapterFive() {
  const navLinks: NavLink[] = [
    { href: "#chapter-header", label: "Chapter Header" },
    { href: "#agenda", label: "Agenda" },
    {
      href: "#english-language-development",
      label: "English language development (ELD) standards and assessment",
    },
    {
      href: "#workplace-english-proficiency",
      label: "Workplace English Proficiency: CASAS and SCANS",
    },
    {
      href: "#qualified-educators",
      label: "Qualified Educators: The Importance of Teacher Standards",
    },
    {
      href: "#consequences",
      label: "Consequences of Standards-Based and Standardized Testing",
    },
    {
      href: "#test-bias",
      label: "Test Bias & Test-Driven Learning and Teaching",
    },
    {
      href: "#ethical-issues",
      label: "Ethical Issues: Critical Language Testing",
    },
    {
      href: "#addressing-test-bias",
      label: "Addressing Test Bias: Ensuring Fairness",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* For medium screens and up: Navigation left, PageTitle centered */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          <div className="flex-grow text-center">
            <PageTitle title="Principles of Language Assessment: Chapter 5" />
          </div>
          <div className="flex-none w-24" />
        </div>
        {/* Mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Principles of Language Assessment: Chapter 5" />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-8 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Chapter Header */}
        <section id="chapter-header" className="space-y-4">
          <div className="whitespace-pre-wrap text-lg">
            <h2 className="text-2xl font-semibold">
              Standards-Based Assessment (continued)
              <br />
              Definition, Implementation, Consequences, and Related Ethical
              Concerns
            </h2>
          </div>
        </section>

        {/* Agenda */}
        <section id="agenda" className="space-y-4">
          <h2 className="text-2xl font-semibold">Agenda</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>ELD standards</li>
            <li>ELD assessment alignment</li>
            <li>Teachers’ standards</li>
            <li>CASAS &amp; SCANS</li>
            <li>Consequences, and related ethical concerns</li>
          </ul>
        </section>

        {/* English language development (ELD) standards and assessment */}
        <section id="english-language-development" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            English language development (ELD) standards and assessment
          </h2>
          <ul className="list-disc ml-6 text-lg space-y-2">
            <li>
              English Language Development (ELD) standards outline the expected
              levels of English proficiency for English language learners (ELLs)
              at different stages of their education. These standards serve as a
              framework for curriculum development and assessment.
            </li>
            <li>Measuring Progress: ELD Assessment in Action</li>
            <li>
              ELD assessment is designed to measure ELLs' progress toward
              meeting these standards. Various assessments are used to determine
              their current proficiency levels and identify areas needing
              further development. This information is crucial for tailoring
              instruction to individual needs.
            </li>
          </ul>
        </section>

        {/* Workplace English Proficiency: CASAS and SCANS */}
        <section id="workplace-english-proficiency" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Workplace English Proficiency: CASAS and SCANS
          </h2>
          <ul className="list-disc ml-6 text-lg space-y-2">
            <li>
              CASAS - Comprehensive Adult Student Assessment System - focuses on
              assessing functional English skills needed for daily living and
              vocational training.
            </li>
            <li>
              SCANS-Secretary's Commission on Achieving Necessary Skills
              outlines the essential skills and competencies required for
              success in the workplace, including communication,
              problem-solving, and critical thinking
            </li>
          </ul>
        </section>

        {/* Qualified Educators: The Importance of Teacher Standards */}
        <section id="qualified-educators" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Qualified Educators: The Importance of Teacher Standards
          </h2>
          <ul className="list-disc ml-6 text-lg space-y-2">
            <li>
              Teachers’ standards define the knowledge, skills, and dispositions
              that teachers need to effectively instruct and assess ELLs.
            </li>
            <li>They are important to ensure quality education for ELLs</li>
          </ul>
        </section>

        {/* Consequences of Standards-Based and Standardized Testing */}
        <section id="consequences" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Consequences of Standards-Based and Standardized Testing
          </h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              The potential consequences of standards-based and standardized
              testing include their impact on teaching practices and student
              learning. It acknowledges the positive aspects, such as providing
              clear benchmarks and promoting accountability. However, it also
              raises concerns about potential negative effects, such as
              narrowing the curriculum and encouraging "teaching to the test."
            </li>
          </ul>
        </section>

        {/* Test Bias & Test-Driven Learning and Teaching */}
        <section id="test-bias" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Test Bias &amp; Test-Driven Learning and Teaching
          </h2>
          <ul className="list-disc ml-6 text-lg space-y-2">
            <li>
              This is a critical issue of test bias, acknowledging that tests
              can unfairly disadvantage certain groups of students due to
              cultural or linguistic differences. It emphasizes the need to
              develop and use assessments that are fair and equitable for all
              learners.
            </li>
            <li>
              The chapter cautions against test-driven learning and teaching,
              where instruction becomes solely focused on preparing students for
              tests. This approach can stifle creativity, critical thinking, and
              genuine learning.
            </li>
          </ul>
        </section>

        {/* Ethical Issues: Critical Language Testing */}
        <section id="ethical-issues" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Ethical Issues: Critical Language Testing
          </h2>
          <ul className="list-disc ml-6 text-lg space-y-2">
            <li>Balancing Act: Consequences of Standards-Based Testing</li>
            <li>
              There are ethical issues related to language testing, advocating
              for critical language testing. This perspective emphasizes the
              need to consider the social and political contexts of language
              assessment and to use tests responsibly and ethically. It
              encourages using assessment to empower learners and promote
              fairness in education.
            </li>
          </ul>
        </section>

        {/* Addressing Test Bias: Ensuring Fairness */}
        <section id="addressing-test-bias" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Addressing Test Bias: Ensuring Fairness
          </h2>
          <ul className="list-disc ml-6 text-lg space-y-2">
            <li>
              Discussion of test bias and its impact on equitable assessment
              practices.
            </li>
            <li>Test-Driven Education</li>
            <li>Resisting Test-Driven Education</li>
            <li>
              Critique of test-driven learning and teaching and its limitations.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
