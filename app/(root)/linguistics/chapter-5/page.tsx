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
    {
      href: "#qna",
      label: "Q&A",
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

        {/* Questions and Answers */}
        <section id="qna" className="space-y-8">
          <h2 className="text-2xl font-semibold">Questions and Answers</h2>
          <div className="prose max-w-none">
            <ol className="list-decimal ml-6 space-y-4 text-lg">
              <li>
                <strong>
                  What are the key components of standards-based assessment as
                  presented in Chapter 5?
                </strong>
                <p>
                  Standards-based assessment involves clearly defined
                  performance standards, alignment between curriculum and
                  assessment, and the use of benchmarks to gauge student
                  progress. This framework not only guides the development of
                  ELD standards and teacher standards but also incorporates
                  systems like CASAS and SCANS to evaluate both academic and
                  workplace language competencies.
                </p>
              </li>
              <li>
                <strong>
                  How do English Language Development (ELD) standards contribute
                  to curriculum development and assessment for English language
                  learners (ELLs)?
                </strong>
                <p>
                  ELD standards establish expected proficiency levels at various
                  stages of education, serving as a framework for designing
                  curricula and assessments. They ensure that learning goals are
                  clearly defined and that assessments measure progress toward
                  these benchmarks, thereby facilitating targeted instruction
                  tailored to individual learner needs.
                </p>
              </li>
              <li>
                <strong>
                  What is the primary purpose of ELD assessment in action, and
                  how does it inform instruction?
                </strong>
                <p>
                  The primary purpose of ELD assessment is to measure ELLs’
                  progress in meeting established language standards. By
                  identifying current proficiency levels and areas needing
                  improvement, these assessments provide critical feedback that
                  informs instructional adjustments, ensuring that teaching
                  methods and materials address learners’ specific developmental
                  needs.
                </p>
              </li>
              <li>
                <strong>
                  How do CASAS and SCANS contribute to assessing workplace
                  English proficiency?
                </strong>
                <p>
                  CASAS focuses on evaluating the functional English skills
                  necessary for everyday living and vocational training, while
                  SCANS outlines the essential skills—including communication,
                  problem-solving, and critical thinking—that are crucial for
                  workplace success. Together, they offer a comprehensive
                  approach to assessing language skills that are directly
                  applicable in professional contexts.
                </p>
              </li>
              <li>
                <strong>
                  Why are teacher standards considered essential in the
                  effective instruction and assessment of ELLs?
                </strong>
                <p>
                  Teacher standards delineate the knowledge, skills, and
                  dispositions required for educators to effectively support
                  ELLs. By ensuring that teachers are well-equipped to implement
                  ELD standards and conduct fair, comprehensive assessments,
                  these standards play a critical role in maintaining
                  educational quality and equity in language learning
                  environments.
                </p>
              </li>
              <li>
                <strong>
                  What are some positive consequences of implementing
                  standards-based and standardized testing in language
                  education?
                </strong>
                <p>
                  Positive consequences include the provision of clear
                  benchmarks for student performance, enhanced accountability
                  for both teachers and institutions, and the ability to make
                  meaningful comparisons of student progress over time. These
                  benefits support a more structured and transparent approach to
                  assessing language proficiency.
                </p>
              </li>
              <li>
                <strong>
                  What potential negative effects can standards-based and
                  standardized testing have on teaching practices and student
                  learning?
                </strong>
                <p>
                  While standardized testing can offer clear benchmarks, it may
                  also lead to a narrowing of the curriculum, with teachers
                  focusing primarily on test preparation. This “teaching to the
                  test” phenomenon can limit opportunities for creative,
                  critical, and authentic learning experiences, ultimately
                  stifling broader language development.
                </p>
              </li>
              <li>
                <strong>
                  In what ways can test bias manifest in language assessments,
                  and what strategies can ensure more equitable evaluation
                  practices?
                </strong>
                <p>
                  Test bias may arise when assessment items favor certain
                  cultural or linguistic backgrounds, disadvantaging some
                  students. To counteract this, test developers can design
                  culturally neutral items, conduct thorough bias reviews, and
                  implement diverse assessment methods that provide all learners
                  with a fair opportunity to demonstrate their true abilities.
                </p>
              </li>
              <li>
                <strong>
                  Why is there a growing critique of test-driven learning and
                  teaching, and what impact does this have on overall
                  educational practices?
                </strong>
                <p>
                  Test-driven learning focuses heavily on preparing students for
                  assessments at the expense of fostering genuine language
                  competence, creativity, and critical thinking. Critics argue
                  that this approach undermines holistic language development
                  and limits educators’ ability to encourage innovative and
                  contextually rich learning experiences, potentially reducing
                  overall educational quality.
                </p>
              </li>
              <li>
                <strong>
                  What ethical issues are raised by critical language testing,
                  and how might educators use assessments to empower learners?
                </strong>
                <p>
                  Ethical concerns include ensuring fairness, avoiding cultural
                  or linguistic bias, and recognizing the broader social and
                  political implications of language assessments. Educators can
                  use assessments ethically by engaging in critical language
                  testing practices that empower learners—using assessment
                  results not only as a measure of proficiency but also as a
                  tool to inform instruction, promote equity, and support the
                  learner’s educational journey.
                </p>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
