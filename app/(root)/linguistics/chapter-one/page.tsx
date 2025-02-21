// app/chapter1.tsx
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Principles of Language Assessment: Chapter 1",
  description:
    "A page based on Chapter 1 of Principles of Language Assessment.",
};

export default function ChapterOne() {
  const navLinks: NavLink[] = [
    { href: "#summary", label: "Summary" },
    { href: "#key-questions", label: "Key Questions" },
    { href: "#reflection", label: "Reflection" },
    { href: "#test-eval", label: "Test/Evaluation" },
    { href: "#assessment-teaching", label: "Assessment & Teaching" },
    { href: "#informal-formal", label: "Informal & Formal" },
    { href: "#formative-summative", label: "Formative & Summative" },
    { href: "#comparison", label: "Comparison: formal vs Informal" },
    { href: "#norm-criterion", label: "Norm & Criterion" },
    { href: "#history", label: "Testing History" },
    { href: "#communicative", label: "Communicative Testing" },
    { href: "#current-issues", label: "Current Issues" },
    { href: "#traditional-alternative", label: "Traditional & Alternative" },
    { href: "#computer-based", label: "Computer-based Testing" },
    { href: "#basic-principles", label: "Basic Principles" },
    { href: "#application-tasks", label: "Application Tasks" },
    { href: "#reflect-research", label: "Reflect & Research" },
    { href: "#chapter-questions", label: "Chapter Questions" },
    { href: "#additional-questions", label: "Additional Questions" },
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
            <PageTitle title="Principles of Language Assessment: Chapter 1" />
          </div>
          <div className="flex-none w-24" />
        </div>
        {/* Mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Principles of Language Assessment: Chapter 1" />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-8 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Chapter 1 Summary */}
        <section id="summary" className="space-y-4">
          <h2 className="text-2xl font-semibold">Chapter 1 Summary</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              Chapter 1 provides a comprehensive overview of second language
              assessment.
            </li>
            <li>
              It defines key terms like “test” and “assessment,” clarifying that
              assessment is an ongoing process that informs teaching, while
              tests are specific instruments used within that process.
            </li>
            <li>
              Various types of assessment are outlined, including informal and
              formal approaches as well as formative versus summative
              evaluations.
            </li>
            <li>
              The chapter emphasizes the evolution of language testing
              methods—from discrete-point testing to integrative testing.
            </li>
            <li>
              It discusses the impact of new views on intelligence and the
              emergence of alternative assessment.
            </li>
            <li>
              Computer-based testing is highlighted as a modern trend with both
              advantages and challenges.
            </li>
          </ul>
        </section>

        {/* Key Questions on Chapter 1 */}
        <section id="key-questions" className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Questions on Chapter 1</h2>
          <ol className="list-decimal ml-6 text-lg">
            <li>
              What is the difference between testing, assessment, and teaching?
            </li>
            <li>
              What is the difference between informal and formal assessment?
            </li>
            <li>
              What is the difference between formative and summative assessment?
            </li>
            <li>
              What is the difference between norm-referenced and
              criterion-referenced tests?
            </li>
            <li>
              What are the key differences between discrete-point and
              integrative testing?
            </li>
            <li>
              What are two examples of integrative tests, and why are they
              considered integrative?
            </li>
            <li>
              What is the unitary trait hypothesis? What are the key arguments
              for and against this hypothesis?
            </li>
            <li>
              What are some of the key features of communicative language
              testing?
            </li>
            <li>
              How is performance-based assessment related to communicative
              language testing?
            </li>
            <li>
              How is the 80% achievement/percentile statement interpreted in the
              context of large-scale testing?
            </li>
          </ol>
        </section>

        {/* Reflection on the MCQ Test on Vocabulary */}
        <section id="reflection" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Reflection on the MCQ Test on Vocabulary
          </h2>
          <p className="text-lg">
            Reflect on the MCQ test on vocabulary as part of the overall
            assessment process. Consider how multiple-choice questions can
            provide quick feedback on vocabulary knowledge, yet may not capture
            the depth of a learner’s ability to use new words in context.
            Reflect on the balance between efficiency and depth in assessment
            design.
          </p>
        </section>

        {/* What is a Test? Test, Evaluation, Assessment */}
        <section id="test-eval" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What is a Test? Test, Evaluation, Assessment
          </h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              <strong>Assessment:</strong> An ongoing process that involves
              evaluating and improving both learning and teaching.
            </li>
            <li>
              <strong>Test:</strong> A method of measuring a person’s ability,
              knowledge, or performance in a specific domain. It is a tool used
              within the broader framework of assessment.
            </li>
            <li>
              A test is only one component of the overall assessment process.
            </li>
          </ul>
          <p className="text-lg">
            Example: A final exam in a language course is a test that provides
            data for the larger assessment process, which may also include class
            participation, homework, and project work.
          </p>
        </section>

        {/* Assessment and Teaching */}
        <section id="assessment-teaching" className="space-y-4">
          <h2 className="text-2xl font-semibold">Assessment and Teaching</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              <strong>Evaluation:</strong> A systematic method of judging
              performance in a given context, encompassing tests, assessments,
              and judgments guided by policies.
            </li>
            <li>
              Teaching provides the foundation for assessment by creating
              opportunities for experimentation with language.
            </li>
          </ul>
          <p className="text-lg">
            Additional Explanation: Formative assessments during lessons allow
            teachers to adjust instruction in real time based on student
            performance.
          </p>
        </section>

        {/* Informal & Formal Assessment */}
        <section id="informal-formal" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Informal &amp; Formal Assessment
          </h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              <strong>Informal Assessment:</strong> Occurs naturally through
              classroom activities such as discussions, feedback, and homework.
            </li>
            <li>
              <strong>Formal Assessment:</strong> Planned, systematic, and
              typically time-constrained evaluations like quizzes and exams.
            </li>
          </ul>
        </section>

        {/* Formative & Summative Assessment */}
        <section id="formative-summative" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Formative &amp; Summative Assessment
          </h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              <strong>Formative Assessment:</strong> Integrated into the
              learning process to provide ongoing feedback.
            </li>
            <li>
              <strong>Summative Assessment:</strong> Evaluates student
              achievement at the end of an instructional period.
            </li>
          </ul>
        </section>

        {/* Comparison: Formal vs. Informal Assessment */}
        <section id="comparison" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Comparison: Formal vs. Informal Assessment
          </h2>
          <p className="text-lg">
            Formal assessments provide a snapshot of student achievement,
            whereas informal assessments reveal ongoing progress. Visual
            comparisons in the chapter illustrate these differences.
          </p>
        </section>

        {/* Norm-referenced & Criterion-referenced Tests */}
        <section id="norm-criterion" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Norm-referenced &amp; Criterion-referenced Tests
          </h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              <strong>Norm-referenced Tests:</strong> Compare a student’s
              performance to that of a larger group using statistical measures.
            </li>
            <li>
              <strong>Criterion-referenced Tests:</strong> Assess whether
              learners meet specific objectives or standards.
            </li>
          </ul>
        </section>
        {/* End of Part 1 */}
        <div className="container mx-auto px-4 py-8 space-y-8 max-w-full sm:max-w-[600px] md:max-w-[800px]">
          {/* Approaches to Language Testing: A Brief History */}
          <section id="history" className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Approaches to Language Testing: A Brief History
            </h2>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>
                <strong>Discrete-point Testing vs. Integrative Testing:</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    <em>1950s:</em> Focused on testing discrete elements of
                    language such as grammar, vocabulary, and pronunciation.
                    Each element was assessed separately.
                  </li>
                  <li>
                    Challenges included the decontextualization of language and
                    a lack of authenticity.
                  </li>
                  <li>
                    <em>1970s–1980s:</em> A shift occurred toward integrative
                    testing, which examines how language elements work together
                    in communication.
                  </li>
                  <li>
                    <em>Cloze Tests &amp; Dictation:</em> For example, a cloze
                    test involves removing every fifth word from a passage,
                    requiring the learner to supply the missing words.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Example:</strong> “It was a ____ night. The wind was
                ____ around the ____ as I stepped out of the ____ and into the
                ____.”
              </li>
              <li>
                <strong>Unitary Trait Hypothesis:</strong> As proposed by Oller
                (1983), it suggests that all language skills are interconnected
                and should be considered as one holistic construct.
              </li>
            </ul>
          </section>

          {/* Communicative Language Testing */}
          <section id="communicative" className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Communicative Language Testing
            </h2>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>
                Language tests should reflect real-world language use—not just
                isolated skills.
              </li>
              <li>
                <strong>Competence Frameworks:</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    Canale &amp; Swain (1980) emphasize a range of competences
                    including grammatical, discourse, sociocultural, and
                    strategic.
                  </li>
                  <li>
                    Bachman (1990) focuses on organizational and pragmatic
                    competences.
                  </li>
                  <li>
                    Bachman &amp; Palmer (1996) introduce strategic competence
                    as a key element.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Performance-based Assessment (PBA):</strong> Includes
                assessments like oral interviews, written essays, open-ended
                Q&amp;A, and integrated skills performance to capture authentic
                language use.
              </li>
              <li>
                <em>Analysis:</em> Although PBA closely mirrors real-life
                language use, scoring can be challenging.
              </li>
            </ul>
          </section>

          {/* Current Issues in Classroom Testing */}
          <section id="current-issues" className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Current Issues in Classroom Testing
            </h2>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>
                <strong>New Views on Intelligence:</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>
                    Traditional IQ tests (e.g., Alfred Binet’s) focused on
                    logical and linguistic abilities.
                  </li>
                  <li>
                    Howard Gardner’s theory of Multiple Intelligences (MI)
                    expands this view to include spatial, musical,
                    bodily-kinesthetic, interpersonal, and intrapersonal
                    intelligences.
                  </li>
                  <li>
                    Goleman’s concept of Emotional Quotient (EQ) further
                    broadens our understanding of cognitive and affective
                    factors.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Implication:</strong> Modern assessments must consider
                these broader views to fully capture learners’ capabilities.
              </li>
            </ul>
          </section>

          {/* Traditional vs. Alternative Assessment */}
          <section id="traditional-alternative" className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Traditional vs. Alternative Assessment
            </h2>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>
                <strong>Traditional Assessment:</strong> One-shot, standardized
                tests that are timed, multiple-choice, decontextualized, and
                norm-referenced.
              </li>
              <li>
                <strong>Alternative Assessment:</strong> Continuous, long-term
                evaluations that are often untimed, free-response,
                contextualized, and criterion-referenced.
              </li>
              <li>
                <em>Analysis:</em> Traditional assessments are easier to
                standardize and score, whereas alternative assessments offer a
                more comprehensive view of learning.
              </li>
            </ul>
          </section>

          {/* Computer-based Testing */}
          <section id="computer-based" className="space-y-4">
            <h2 className="text-2xl font-semibold">Computer-based Testing</h2>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>
                <strong>Computer-based Testing (CBT):</strong> For example, the
                TOEFL CBT uses computers to administer tests.
              </li>
              <li>
                <strong>Internet-based Testing (IBT):</strong> For example, the
                TOEFL iBT delivers tests online.
              </li>
              <li>
                <strong>Computer-adaptive Testing (CAT):</strong> Adjusts
                difficulty based on performance using Item Response Theory
                (IRT); offers tailored assessment but requires robust
                technology.
              </li>
              <li>
                <em>Additional Consideration:</em> Ensuring equitable access and
                test security remain critical challenges.
              </li>
            </ul>
          </section>

          {/* Basic Principles Suggested for Language Assessment */}
          <section id="basic-principles" className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Basic Principles Suggested for Language Assessment
            </h2>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>Periodic assessment to monitor progress.</li>
              <li>
                Use of appropriate assessment methods aligned with learning
                objectives.
              </li>
              <li>Identification of individual strengths and weaknesses.</li>
              <li>
                Periodic closure of curriculum modules for comprehensive
                evaluation.
              </li>
              <li>Promotion of student autonomy through self-evaluation.</li>
              <li>Assisting learners in setting their own learning goals.</li>
              <li>
                Evaluating teaching effectiveness as part of the overall
                assessment process.
              </li>
            </ul>
          </section>

          {/* Application Tasks */}
          <section id="application-tasks" className="space-y-4">
            <h2 className="text-2xl font-semibold">Application Tasks</h2>
            <ul className="list-disc ml-6 text-lg">
              <li>
                Review the speaking section in both the paper-based TOEFL test
                and the iBT TOEFL test.
              </li>
              <li>
                Examine the IELTS speaking rubric and reflect on the specific
                skills it assesses.
              </li>
              <li>
                <em>Example:</em> Compare how each test addresses fluency,
                pronunciation, and interactive communication.
              </li>
            </ul>
          </section>

          {/* Reflect and Research */}
          <section id="reflect-research" className="space-y-4">
            <h2 className="text-2xl font-semibold">Reflect and Research</h2>
            <ul className="list-disc ml-6 text-lg space-y-2">
              <li>
                Investigate the impact of new views on intelligence on language
                assessment design.
              </li>
              <li>
                Aim: Understand how broadened conceptions of intelligence affect
                test design.
              </li>
              <li>
                Framework: For example, using the Multiple Intelligences Model
                (MIM).
              </li>
              <li>
                Research Design: Experimental studies with control and
                experimental groups.
              </li>
              <li>Data: Analysis of assessment scores to identify trends.</li>
              <li>
                Hypothesis: The experimental group, benefiting from innovative
                strategies, will perform better.
              </li>
              <li>
                Consider how technology can enhance the effectiveness and
                efficiency of assessments.
              </li>
            </ul>
          </section>

          {/* Chapter Questions */}
          <section id="chapter-questions" className="space-y-4">
            <h2 className="text-2xl font-semibold">Chapter Questions</h2>
            <ol className="list-decimal ml-6 text-lg space-y-2">
              <li>
                <strong>Q:</strong> What is the difference between testing,
                assessment, and teaching?
                <br />
                <strong>A:</strong> Testing is a specific instrument designed to
                measure a learner’s ability or knowledge, assessment is the
                broader process of gathering and interpreting information to
                inform teaching, and teaching is the practice of facilitating
                learning.
              </li>
              <li>
                <strong>Q:</strong> What is the difference between informal and
                formal assessment?
                <br />
                <strong>A:</strong> Informal assessment occurs naturally during
                classroom activities and is unstructured, while formal
                assessment is planned, structured, and often used for
                high-stakes decisions.
              </li>
              <li>
                <strong>Q:</strong> What is the difference between formative and
                summative assessment?
                <br />
                <strong>A:</strong> Formative assessment provides ongoing
                feedback during instruction, whereas summative assessment
                evaluates learning at the end of an instructional period.
              </li>
              <li>
                <strong>Q:</strong> What is the difference between
                norm-referenced and criterion-referenced tests?
                <br />
                <strong>A:</strong> Norm-referenced tests compare performance to
                a larger group, while criterion-referenced tests measure
                performance against predetermined standards.
              </li>
              <li>
                <strong>Q:</strong> What are the key differences between
                discrete-point and integrative testing?
                <br />
                <strong>A:</strong> Discrete-point testing evaluates individual
                language elements separately, whereas integrative testing
                assesses the ability to use language holistically in realistic
                contexts.
              </li>
              <li>
                <strong>Q:</strong> What are two examples of integrative tests,
                and why are they considered integrative?
                <br />
                <strong>A:</strong> Examples include cloze tests and oral
                proficiency interviews; they are integrative because they
                require the simultaneous use of multiple language skills,
                reflecting real-life communication.
              </li>
              <li>
                <strong>Q:</strong> What is the unitary trait hypothesis? What
                are the key arguments for and against it?
                <br />
                <strong>A:</strong> It suggests language ability is a single,
                unified construct. Proponents argue all language skills are
                interrelated, while critics contend distinct skills may require
                separate assessment.
              </li>
              <li>
                <strong>Q:</strong> What are some key features of communicative
                language testing?
                <br />
                <strong>A:</strong> It focuses on real-world language use,
                interactive communication, and evaluating the ability to convey
                meaning rather than mere grammatical accuracy.
              </li>
              <li>
                <strong>Q:</strong> How is performance-based assessment related
                to communicative language testing?
                <br />
                <strong>A:</strong> Performance-based assessments require
                learners to complete tasks that simulate authentic
                communication, aligning closely with communicative language
                testing.
              </li>
              <li>
                <strong>Q:</strong> What does the statement “80% = achievement;
                80% (percentile) Test is by 20,000 overseas highest mark
                (90%–60%) A+ … D” imply?
                <br />
                <strong>A:</strong> It highlights the distinction between
                achievement scores and percentile rankings, indicating that
                large-scale testing can yield a range of grades.
              </li>
            </ol>
          </section>

          {/* Additional Questions */}
          <section id="additional-questions" className="space-y-4">
            <h2 className="text-2xl font-semibold">Additional Questions</h2>
            <ol className="list-decimal ml-6 text-lg space-y-2">
              <li>
                <strong>Q:</strong> What distinguishes a test from a broader
                assessment?
                <br />
                <strong>A:</strong> A test is a specific tool used to measure a
                learner’s ability or knowledge, while assessment is an ongoing
                process involving multiple methods to evaluate and enhance
                learning.
              </li>
              <li>
                <strong>Q:</strong> How does formative assessment support
                learning compared to summative assessment?
                <br />
                <strong>A:</strong> Formative assessment provides continuous
                feedback to guide learning, while summative assessment evaluates
                learning at the end of an instructional period.
              </li>
              <li>
                <strong>Q:</strong> Why is it important to balance traditional
                and alternative assessments?
                <br />
                <strong>A:</strong> Balancing both ensures that standardized
                measures and authentic, context-based evaluations are considered
                for a comprehensive view of student learning.
              </li>
              <li>
                <strong>Q:</strong> What role does technology play in modern
                language assessment?
                <br />
                <strong>A:</strong> Technology enables computer-based,
                internet-based, and adaptive testing methods that offer
                immediate feedback and personalized difficulty, though
                challenges like accessibility and security remain.
              </li>
              <li>
                <strong>Q:</strong> Can a test be authentic but not valid?
                Provide an example.
                <br />
                <strong>A:</strong> Yes; for example, a test using real-life
                tasks might inadvertently assess extraneous knowledge, thus
                lacking validity.
              </li>
              <li>
                <strong>Q:</strong> What is the primary difference between
                norm-referenced and criterion-referenced tests?
                <br />
                <strong>A:</strong> Norm-referenced tests compare a student’s
                performance to a larger group, whereas criterion-referenced
                tests evaluate performance against specific objectives.
              </li>
              <li>
                <strong>Q:</strong> What are the advantages and limitations of
                computer-adaptive testing (CAT)?
                <br />
                <strong>A:</strong> CAT tailors difficulty based on performance,
                offering efficient, personalized assessment but requires
                sophisticated technology and raises concerns about access and
                security.
              </li>
              <li>
                <strong>Q:</strong> How can teachers effectively integrate
                informal assessment into classroom practices?
                <br />
                <strong>A:</strong> By using classroom discussions, quick
                quizzes, peer assessments, and observational techniques to
                provide ongoing, low-pressure feedback.
              </li>
              <li>
                <strong>Q:</strong> What challenges are associated with scoring
                performance-based assessments?
                <br />
                <strong>A:</strong> They can be subjective and variable; clear
                rubrics and rater training are essential to ensure consistency
                and fairness.
              </li>
              <li>
                <strong>Q:</strong> How does the unitary trait hypothesis
                influence language assessment design?
                <br />
                <strong>A:</strong> It supports the development of integrative
                assessments that evaluate overall communicative competence
                rather than isolated skills.
              </li>
              <li>
                <strong>Q:</strong> What is washback, and why is it significant
                in language assessment?
                <br />
                <strong>A:</strong> Washback refers to the influence of testing
                on teaching and learning; positive washback can promote
                effective practices, whereas negative washback can restrict
                curriculum.
              </li>
              <li>
                <strong>Q:</strong> Why is authenticity important in language
                tests?
                <br />
                <strong>A:</strong> Authentic tests mirror real-world language
                use, making assessments more relevant and effective at measuring
                communicative competence.
              </li>
              <li>
                <strong>Q:</strong> How might new views on intelligence impact
                language assessment?
                <br />
                <strong>A:</strong> Broader conceptions of intelligence
                encourage assessments that capture a wider range of skills
                beyond traditional linguistic abilities.
              </li>
              <li>
                <strong>Q:</strong> In what ways can formative assessments be
                designed to promote student autonomy?
                <br />
                <strong>A:</strong> By incorporating self-assessment, reflective
                practices, and regular feedback that empower students to monitor
                and guide their own learning.
              </li>
              <li>
                <strong>Q:</strong> What are some potential consequences of
                relying solely on summative assessments?
                <br />
                <strong>A:</strong> Sole reliance on summative assessments can
                narrow the focus to final outcomes, increase student anxiety,
                and reduce opportunities for timely instructional adjustments.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}
