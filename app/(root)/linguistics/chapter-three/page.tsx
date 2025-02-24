// app/chapter3.tsx
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Principles of Language Assessment: Chapter 3",
  description:
    "A page based on Chapter 3 of Principles of Language Assessment.",
};

export default function ChapterThree() {
  const navLinks: NavLink[] = [
    { href: "#principles", label: "Principles of Language Assessment" },
    { href: "#designing-tests", label: "Designing Classroom Language Tests" },
    {
      href: "#critical-questions-ch4",
      label: "Critical Questions on Chapter 4",
    },
    { href: "#critical-questions", label: "Critical Questions" },
    { href: "#cefr", label: "Identifying Students’ Level Based on CEFR" },
    {
      href: "#test-design-questions",
      label: "Critical Questions to Start Designing a Test",
    },
    { href: "#purpose-of-test", label: "Purpose of the Test" },
    { href: "#objectives-of-test", label: "Objectives of the Test" },
    { href: "#test-specifications", label: "Test Specifications" },
    {
      href: "#selection-arrangement",
      label: "Selection & Arrangement of Tasks",
    },
    { href: "#scoring-feedback", label: "Scoring, Grading, Feedback" },
    { href: "#test-types", label: "Test Types" },
    { href: "#aptitude-tests", label: "Aptitude Tests" },
    { href: "#proficiency-tests", label: "Proficiency Tests" },
    { href: "#placement-tests", label: "Placement Tests" },
    { href: "#diagnostic-tests", label: "Diagnostic Tests" },
    { href: "#achievement-tests", label: "Achievement Tests" },
    {
      href: "#test-construction",
      label: "Practical Steps to Test Construction",
    },
    { href: "#disadvantages-mcq", label: "Disadvantages of Using MCQs" },
    { href: "#designing-items", label: "Designing Test Items" },
    { href: "#checklist", label: "Checklist for Test Design" },
    { href: "#scoring-grading", label: "Scoring, Grading, and Feedback" },
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
            <PageTitle title="Principles of Language Assessment: Chapter 3" />
          </div>
          <div className="flex-none w-24" />
        </div>
        {/* Mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="Principles of Language Assessment: Chapter 3" />
        </div>
      </div>
      {/* Body Content */}
      <div className="container mx-auto px-4 py-8 space-y-8 max-w-full sm:max-w-[600px] md:max-w-[800px]">
        {/* Principles of Language Assessment */}
        <section id="principles" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Principles of Language Assessment
          </h2>
          <p className="text-lg">
            This chapter focuses on the principles and practices of designing
            effective language assessments, particularly in classroom settings.
            It emphasizes the importance of aligning tests with teaching
            objectives and ensuring fairness and authenticity in assessment
            tasks.
          </p>
        </section>

        {/* Designing Classroom Language Tests */}
        <section id="designing-tests" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Designing Classroom Language Tests
          </h2>
          <p className="text-lg">
            Classroom language tests should be carefully designed to reflect the
            learning objectives and provide meaningful feedback to students.
            This section explores the key considerations for creating effective
            tests.
          </p>
        </section>

        {/* Critical Questions on Chapter 4: Standardized Test */}
        <section id="critical-questions-ch4" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Critical Questions on Chapter 4: Standardized Test
          </h2>
          <ol className="list-decimal ml-6 text-lg">
            <li>
              How can educators ensure that standardized tests are used
              ethically and responsibly, minimizing the potential for bias and
              negative consequences?
            </li>
            <li>
              What steps can be taken to bridge the gap between standardized
              test performance and real-world language use, promoting more
              authentic and communicative language assessments?
            </li>
          </ol>
        </section>

        {/* Critical Questions */}
        <section id="critical-questions" className="space-y-4">
          <h2 className="text-2xl font-semibold">Critical Questions</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              How can teachers ensure that their classroom language tests are
              truly aligned with their specific teaching objectives and the
              needs of their students?
            </li>
            <li>
              What are the most effective strategies for creating authentic and
              engaging test tasks that go beyond simply measuring rote
              memorization?
            </li>
            <li>
              How can teachers utilize different test formats (e.g.,
              multiple-choice, essay, performance-based) to assess a wide range
              of language skills and competencies?
            </li>
            <li>
              What are the ethical considerations involved in designing and
              administering classroom language tests, and how can teachers
              ensure fairness and avoid bias?
            </li>
          </ul>
        </section>

        {/* Identifying Students’ Level Based on CEFR */}
        <section id="cefr" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Identifying Students’ Level Based on CEFR
          </h2>
          <p className="text-lg">
            The Common European Framework of Reference for Languages (CEFR)
            provides a standardized way to assess and describe language
            proficiency. This section discusses how teachers can use the CEFR to
            identify students’ language levels.
          </p>

          {/* Responsive container for the table */}
          <div className="overflow-x-auto bg-white rounded-md shadow-md p-4 sm:p-6">
            <table className="w-full table-auto">
              {/* Header row */}
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-2 sm:px-6 sm:py-3 text-left text-gray-600 font-semibold text-sm sm:text-base w-20 sm:w-32"
                  >
                    Level
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 sm:px-6 sm:py-3 text-left text-gray-600 font-semibold text-sm sm:text-base"
                  >
                    Description
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* A1 */}
                <tr className="border-b border-gray-200 last:border-b-0">
                  <th
                    scope="row"
                    className="bg-gray-50 px-4 py-2 sm:px-6 sm:py-4 align-top text-gray-800 font-medium text-sm sm:text-base w-20 sm:w-32"
                  >
                    A1
                  </th>
                  <td className="px-4 py-2 sm:px-6 sm:py-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                    At level A1, a person can understand and use basic phrases.
                    They can do things like introducing themselves and asking
                    simple personal questions about where they live, people they
                    know, and things they have, etc.
                  </td>
                </tr>

                {/* A2 */}
                <tr className="border-b border-gray-200 last:border-b-0">
                  <th
                    scope="row"
                    className="bg-gray-50 px-4 py-2 sm:px-6 sm:py-4 align-top text-gray-800 font-medium text-sm sm:text-base"
                  >
                    A2
                  </th>
                  <td className="px-4 py-2 sm:px-6 sm:py-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                    By now, a learner can talk about familiar and routine
                    matters, such as describing their background, immediate
                    environment, and things that are immediately important to
                    them, describing them in simple terms.
                  </td>
                </tr>

                {/* B1 */}
                <tr className="border-b border-gray-200 last:border-b-0">
                  <th
                    scope="row"
                    className="bg-gray-50 px-4 py-2 sm:px-6 sm:py-4 align-top text-gray-800 font-medium text-sm sm:text-base"
                  >
                    B1
                  </th>
                  <td className="px-4 py-2 sm:px-6 sm:py-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                    At B1, a learner is becoming more independent and can handle
                    most situations at work, school, or leisure if the topic is
                    fairly clear. They can deal with most general situations and
                    can express personal interests, hopes, and ambitions.
                  </td>
                </tr>

                {/* B2 */}
                <tr className="border-b border-gray-200 last:border-b-0">
                  <th
                    scope="row"
                    className="bg-gray-50 px-4 py-2 sm:px-6 sm:py-4 align-top text-gray-800 font-medium text-sm sm:text-base"
                  >
                    B2
                  </th>
                  <td className="px-4 py-2 sm:px-6 sm:py-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                    At B2, learners should be able to understand the main ideas
                    on a range of topics, including technical discussions in
                    their specialist field, and can speak fairly fluently with
                    native speakers without undue strain on either side.
                  </td>
                </tr>

                {/* C1 */}
                <tr className="border-b border-gray-200 last:border-b-0">
                  <th
                    scope="row"
                    className="bg-gray-50 px-4 py-2 sm:px-6 sm:py-4 align-top text-gray-800 font-medium text-sm sm:text-base"
                  >
                    C1
                  </th>
                  <td className="px-4 py-2 sm:px-6 sm:py-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                    At the highest levels, a learner can be considered a
                    proficient user of the language. At C1, they can use the
                    language effectively for all social, academic, and
                    professional purposes.
                  </td>
                </tr>

                {/* C2 */}
                <tr>
                  <th
                    scope="row"
                    className="bg-gray-50 px-4 py-2 sm:px-6 sm:py-4 align-top text-gray-800 font-medium text-sm sm:text-base"
                  >
                    C2
                  </th>
                  <td className="px-4 py-2 sm:px-6 sm:py-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                    While at C2, they can basically understand virtually
                    everything they hear and read, and can speak and write as
                    easily as a native speaker.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Critical Questions to Start Designing a Test */}
        <section id="test-design-questions" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Critical Questions to Start Designing a Test
          </h2>
          <ul className="list-disc ml-6 text-lg">
            <li>What is the purpose of the test?</li>
            <li>What are the objectives of the test?</li>
            <li>
              How will the test specifications reflect both the purpose and the
              objectives?
            </li>
            <li>
              How will the test tasks be selected and the separate items
              arranged?
            </li>
            <li>What kind of scoring, grading, and/or feedback is expected?</li>
          </ul>
        </section>

        {/* Purpose of the Test */}
        <section id="purpose-of-test" className="space-y-4">
          <h2 className="text-2xl font-semibold">Purpose of the Test</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              Why are you creating this test, or why was it created by a
              textbook writer?
            </li>
            <li>
              What is its significance relative to your course (e.g., to
              evaluate overall proficiency or place a student in a course)?
            </li>
            <li>
              How important is the test compared to other student performance?
            </li>
            <li>
              What will its impact be on you and your students before and after
              the assessment?
            </li>
          </ul>
        </section>

        {/* Objectives of the Test */}
        <section id="objectives-of-test" className="space-y-4">
          <h2 className="text-2xl font-semibold">Objectives of the Test</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>What exactly are you trying to find out?</li>
            <li>What language knowledge and/or skills are you assessing?</li>
          </ul>
        </section>

        {/* Test Specifications */}
        <section id="test-specifications" className="space-y-4">
          <h2 className="text-2xl font-semibold">Test Specifications</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              To design or evaluate a test, you must ensure that the test has a
              structure that logically follows from the unit or lesson it is
              testing.
            </li>
            <li>
              The class objectives should be present in the test through
              appropriate task types and weights, a logical sequence, and a
              variety of tasks.
            </li>
          </ul>
        </section>

        {/* Selection & Arrangement of Tasks */}
        <section id="selection-arrangement" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Selection & Arrangement of Tasks
          </h2>
          <ul className="list-disc ml-6 text-lg">
            <li>The test tasks need to be practical.</li>
            <li>
              For the test to be valid, they should also mirror tasks of the
              course, lesson, or segment.
            </li>
            <li>
              They should be authentic (i.e., reflect real-world language use).
            </li>
            <li>
              The tasks must be ones that can be evaluated reliably by the
              teacher.
            </li>
          </ul>
        </section>

        {/* Scoring, Grading, Feedback */}
        <section id="scoring-feedback" className="space-y-4">
          <h2 className="text-2xl font-semibold">Scoring, Grading, Feedback</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              The appropriate form of feedback on tests will vary, depending on
              the purpose.
            </li>
            <li>
              For every test, the way results are reported is an important
              consideration.
            </li>
            <li>
              Under some circumstances, a letter grade or score may be
              appropriate.
            </li>
            <li>
              Other circumstances may require that the teacher provide detailed
              feedback to the students.
            </li>
          </ul>
        </section>

        {/* Test Types */}
        <section id="test-types" className="space-y-4">
          <h2 className="text-2xl font-semibold">Test Types</h2>
          <p className="text-lg">
            This section provides an overview of different types of language
            tests, including aptitude tests, proficiency tests, placement tests,
            diagnostic tests, and achievement tests.
          </p>
        </section>

        {/* Aptitude Tests */}
        <section id="aptitude-tests" className="space-y-4">
          <h2 className="text-2xl font-semibold">Aptitude Tests</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>Not very common.</li>
            <li>
              Used to predict a person’s future success in learning a (any)
              foreign language.
            </li>
            <li>Taken before actual learning.</li>
            <li>
              They come in the form of learning new words from a language,
              learning numbers, spelling, or guessing unfamiliar word
              meanings/types in context.
            </li>
          </ul>
        </section>

        {/* Proficiency Tests */}
        <section id="proficiency-tests" className="space-y-4">
          <h2 className="text-2xl font-semibold">Proficiency Tests</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>Measure general ability in a language.</li>
            <li>
              Regardless of previous training or a specific course or textbook
              since it tests general ability in a language.
            </li>
            <li>
              It comes in the form of a multiple-choice standardized exam on
              vocabulary, grammar, reading, and listening comprehension.
              Sometimes a writing task is also required.
            </li>
            <li>
              They are always summative and norm-referenced (e.g., SAT or
              TOEFL).
            </li>
            <li>
              TOEFL (the Test of English as a Foreign Language) is used by many
              universities around the world to test students’ proficiency level
              in English and predict their ability to take academic courses in
              English at the university level.
            </li>
            <li>
              The test is machine-scored for cost-effectiveness and quickness.
            </li>
            <li>
              No feedback is provided to students except the score of each
              section or the total score.
            </li>
          </ul>
        </section>

        {/* Placement Tests */}
        <section id="placement-tests" className="space-y-4">
          <h2 className="text-2xl font-semibold">Placement Tests</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              Some proficiency tests are used to assign students to
              classes/programs appropriate to their level of proficiency.
            </li>
            <li>Define characteristics of each level of proficiency.</li>
            <li>
              Sections depend on what skills the learners need to master in a
              program or a course so the course materials will not be too easy
              or challenging for them.
            </li>
            <li>
              An example of a placement test is the English as a Second Language
              Placement Test used in San Francisco State University.
            </li>
          </ul>
        </section>

        {/* Diagnostic Tests */}
        <section id="diagnostic-tests" className="space-y-4">
          <h2 className="text-2xl font-semibold">Diagnostic Tests</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              Identify students’ strengths and weaknesses in a particular skill
              (e.g., a diagnostic test in pronunciation will show what
              speech/sound difficulty the learner faces).
            </li>
            <li>
              A writing diagnostic test will show the teacher the specific
              problems the learner faces in writing.
            </li>
            <li>
              To benefit future instruction and give specific feedback on
              students’ weaknesses and strengths to determine what to do next.
            </li>
            <li>
              Sometimes placement tests are used for diagnostic purposes (e.g.,
              the English as a Second Language Placement Test used in San
              Francisco State University is used for both placement and
              diagnostic purposes).
            </li>
            <li>Difficult to construct. Lack of good ones.</li>
          </ul>
        </section>

        {/* Achievement Tests */}
        <section id="achievement-tests" className="space-y-4">
          <h2 className="text-2xl font-semibold">Achievement Tests</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              Are always summative and are directly related to classroom
              instruction and students’ learning.
            </li>
            <li>
              Determine whether the course objectives have been achieved or not.
            </li>
            <li>
              Measure how successful students are in achieving objectives of a
              lesson/course/curriculum.
            </li>
            <li>
              Closely related to the content of a particular
              lesson/course/curriculum.
            </li>
            <li>Syllabus content approach OR course objectives approach?</li>
            <li>
              Final achievement tests / progress achievement tests (formative
              assessment).
            </li>
            <li>Frequency?</li>
          </ul>
        </section>

        {/* Practical Steps to Test Construction */}
        <section id="test-construction" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Practical Steps to Test Construction
          </h2>
          <ol className="list-decimal ml-6 text-lg">
            <li>Assessing Clear, Unambiguous Objectives</li>
            <li>Drawing up Test Specifications</li>
            <li>Devising Test Tasks</li>
            <li>Designing Multiple-Choice Test Items</li>
          </ol>
        </section>

        {/* Disadvantages of Using MCQs */}
        <section id="disadvantages-mcq" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Disadvantages of Using MCQs
          </h2>
          <p className="text-lg">
            Multiple-choice questions (MCQs) have limitations, such as
            encouraging guessing, limiting the assessment of higher-order
            thinking skills, and potentially being biased towards certain types
            of learners.
          </p>
        </section>

        {/* Designing Test Items */}
        <section id="designing-items" className="space-y-4">
          <h2 className="text-2xl font-semibold">Designing Test Items</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>
              Design each item to measure a specific objective using Wh-
              question words.
            </li>
            <li>
              State both stem and options as simply and directly as possible.
            </li>
            <li>Don’t use easy-to-eliminate distractors.</li>
            <li>
              Make certain that the intended answer is clearly the only correct
              one.
            </li>
          </ul>
        </section>

        {/* Checklist for Test Design */}
        <section id="checklist" className="space-y-4">
          <h2 className="text-2xl font-semibold">Checklist for Test Design</h2>
          <p className="text-lg">
            Use a checklist to ensure that the test is designed to measure the
            learning objectives effectively and fairly.
          </p>
        </section>

        {/* Scoring, Grading, and Feedback */}
        <section id="scoring-grading" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Scoring, Grading, and Feedback
          </h2>
          <p className="text-lg">
            This section discusses the importance of providing clear and
            constructive feedback to students, as well as the different methods
            of scoring and grading tests.
          </p>
        </section>
        {/* Questions and answers */}
        <section id="additional-questions" className="space-y-4">
          <h2 className="text-2xl font-semibold">Additional Questions</h2>
          <ol className="list-decimal ml-6 text-lg space-y-2">
            <li>
              <strong>Q:</strong> Why is it important to align classroom
              language tests with teaching objectives?
              <br />
              <strong>A:</strong> Aligning tests with teaching objectives
              ensures that assessments accurately measure what students have
              learned and provide meaningful feedback.
            </li>
            <li>
              <strong>Q:</strong> How can educators minimize bias in
              standardized tests?
              <br />
              <strong>A:</strong> Educators can minimize bias by ensuring test
              content is culturally neutral, using diverse test formats, and
              regularly reviewing test items for fairness.
            </li>
            <li>
              <strong>Q:</strong> What steps can teachers take to make language
              tests more authentic?
              <br />
              <strong>A:</strong> Teachers can use real-world tasks, incorporate
              natural language, and focus on communicative skills rather than
              rote memorization.
            </li>
            <li>
              <strong>Q:</strong> How can the CEFR framework help teachers
              identify students' language levels?
              <br />
              <strong>A:</strong> The CEFR provides standardized descriptors for
              language proficiency, helping teachers assess and place students
              accurately.
            </li>
            <li>
              <strong>Q:</strong> What are the key considerations when designing
              classroom language tests?
              <br />
              <strong>A:</strong> Key considerations include aligning tests with
              learning objectives, ensuring fairness, and creating authentic and
              practical tasks.
            </li>
            <li>
              <strong>Q:</strong> Why is it important to define the purpose of a
              test before designing it?
              <br />
              <strong>A:</strong> Defining the purpose ensures the test meets
              its intended goals, whether for placement, diagnosis, or measuring
              achievement.
            </li>
            <li>
              <strong>Q:</strong> How can teachers ensure test tasks reflect
              real-world language use?
              <br />
              <strong>A:</strong> Teachers can design tasks that mimic real-life
              communication scenarios, such as role-playing or writing emails.
            </li>
            <li>
              <strong>Q:</strong> What are the ethical considerations in
              designing classroom language tests?
              <br />
              <strong>A:</strong> Ethical considerations include avoiding bias,
              ensuring fairness, and providing clear instructions and feedback.
            </li>
            <li>
              <strong>Q:</strong> What are the advantages of using
              multiple-choice questions in language tests?
              <br />
              <strong>A:</strong> Multiple-choice questions are easy to score,
              cost-effective, and can assess a wide range of knowledge quickly.
            </li>
            <li>
              <strong>Q:</strong> What are the limitations of multiple-choice
              questions?
              <br />
              <strong>A:</strong> Limitations include encouraging guessing,
              limited assessment of higher-order thinking, and potential
              cultural bias.
            </li>
            <li>
              <strong>Q:</strong> How can teachers use diagnostic tests to
              improve instruction?
              <br />
              <strong>A:</strong> Diagnostic tests identify students' strengths
              and weaknesses, allowing teachers to tailor instruction to address
              specific needs.
            </li>
            <li>
              <strong>Q:</strong> What is the difference between proficiency
              tests and achievement tests?
              <br />
              <strong>A:</strong> Proficiency tests measure general language
              ability, while achievement tests assess how well students have
              mastered specific course content.
            </li>
            <li>
              <strong>Q:</strong> How can teachers ensure test specifications
              align with course objectives?
              <br />
              <strong>A:</strong> Teachers can map test tasks to course
              objectives, ensuring the test reflects what was taught and
              learned.
            </li>
            <li>
              <strong>Q:</strong> What role does feedback play in language
              assessments?
              <br />
              <strong>A:</strong> Feedback helps students understand their
              performance, identify areas for improvement, and stay motivated.
            </li>
            <li>
              <strong>Q:</strong> How can teachers design effective test items?
              <br />
              <strong>A:</strong> Teachers should design items that measure
              specific objectives, use clear language, and avoid ambiguous
              distractors.
            </li>
            <li>
              <strong>Q:</strong> What are the characteristics of a
              well-designed placement test?
              <br />
              <strong>A:</strong> A well-designed placement test accurately
              assesses students' proficiency levels and assigns them to
              appropriate courses.
            </li>
            <li>
              <strong>Q:</strong> How can teachers balance practicality and
              authenticity in test design?
              <br />
              <strong>A:</strong> Teachers can use tasks that are both realistic
              and feasible to administer, ensuring the test remains practical
              without sacrificing authenticity.
            </li>
            <li>
              <strong>Q:</strong> What are the benefits of using a checklist for
              test design?
              <br />
              <strong>A:</strong> A checklist ensures the test is aligned with
              objectives, fair, and effective in measuring student learning.
            </li>
            <li>
              <strong>Q:</strong> How can teachers use achievement tests to
              evaluate course success?
              <br />
              <strong>A:</strong> Achievement tests measure whether students
              have met course objectives, providing insights into the
              effectiveness of instruction.
            </li>
            <li>
              <strong>Q:</strong> What are the challenges of constructing
              diagnostic tests?
              <br />
              <strong>A:</strong> Diagnostic tests are difficult to construct
              due to the need for detailed, skill-specific items and a lack of
              standardized models.
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
