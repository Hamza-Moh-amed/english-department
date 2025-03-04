import { QuestionItemProps } from "@/components/Questions";

export const linguisticsQuestions: QuestionItemProps[] = [
  // New first five questions
  {
    question:
      "______________________tests measure general ability in a language regardless of previous training or a specific course or textbook.",
    answer: "Proficiency",
  },
  {
    question:
      "____________________ tests determine students’ strengths and weaknesses to provide remedial instruction.",
    answer: "Diagnostic",
  },
  {
    question:
      "_________________tests are large-scale proficiency tests that measure language learners’ skills.",
    answer: "Standardized",
  },
  {
    question:
      "______________ organizes language learners’ proficiency levels into six levels which can be grouped into three broad levels.",
    answer: "CEFR (Common European Framework of Reference)",
  },
  {
    question:
      "In _________________tests, students’ results are statistically compared to other test-takers.",
    answer: "Norm-referenced",
  },

  // Additional 25 questions
  {
    question:
      "___________ tests are used to place students into appropriate course levels based on their current proficiency.",
    answer: "Placement",
  },
  {
    question:
      "A test has ___________ when it accurately measures what it is intended to measure.",
    answer: "Validity",
  },
  {
    question:
      "___________ is the extent to which a test yields consistent results over repeated administrations.",
    answer: "Reliability",
  },
  {
    question:
      "The ___________ test evaluates an individual’s potential for learning a new language.",
    answer: "Aptitude",
  },
  {
    question:
      "A test is considered ___________ when its tasks resemble real-world language use.",
    answer: "Authentic",
  },
  {
    question:
      "___________ is the phenomenon where testing influences teaching and learning, either positively or negatively.",
    answer: "Washback",
  },
  {
    question:
      "___________ assessments are informal, ongoing evaluations that occur during the learning process.",
    answer: "Formative",
  },
  {
    question:
      "___________ assessments evaluate student learning at the end of an instructional period.",
    answer: "Summative",
  },
  {
    question:
      "___________ bias occurs when a test favors certain groups over others due to cultural or linguistic differences.",
    answer: "Test",
  },
  {
    question:
      "___________ testing refers to the practice of evaluating students using computer-based or adaptive methods.",
    answer: "Computerized",
  },

  // True/False questions
  {
    question:
      "True or False: The CEFR is a framework used only in European countries.",
    answer: "False (It is widely used internationally)",
  },
  {
    question:
      "True or False: A placement test helps determine whether a student should pass or fail a course.",
    answer:
      "False (Placement tests determine a student's appropriate course level, not pass/fail status)",
  },
  {
    question:
      "True or False: High-stakes testing can create pressure that affects student performance.",
    answer: "True",
  },
  {
    question:
      "True or False: Reliability ensures that a test is free from bias.",
    answer: "False (A test can be reliable but still biased)",
  },
  {
    question:
      "True or False: Proficiency tests are linked to a specific curriculum.",
    answer:
      "False (They assess general language ability, not specific course content)",
  },

  // Short-answer questions
  {
    question: "What are the five key principles of effective assessment?",
    answer: "Validity, Washback, Reliability, Authenticity, Practicality",
  },
  {
    question: "Name one advantage and one disadvantage of standardized tests.",
    answer:
      "Advantage: Comparability: Enables comparisons of individual performance across different groups and time periods. --- Disadvantage: Artificiality: Test tasks may not accurately reflect real-world language use.",
  },
  {
    question: "Why is washback important in language assessment?",
    answer:
      "It affects teaching and learning positively or negatively. Positive Washback: Tests that encourage beneficial teaching practices and enhance student learning. --- Negative Washback: Occurs when tests narrow the curriculum and increase student anxiety, detracting from a holistic learning experience.",
  },
  {
    question:
      "What is an alternative assessment method besides standardized testing?",
    answer:
      "Portfolio assessment, self-assessment, or performance-based assessment.",
  },
  {
    question: "What is a practical concern when designing classroom tests?",
    answer: "Time, resources, and ease of administration.",
  },
  // Multiple-choice questions
  {
    question: "What is the primary goal of formative assessment?",
    options: [
      "To assign final grades",
      "To provide ongoing feedback to improve learning",
      "To compare students' performance nationally",
      "To measure workplace communication skills",
    ],
    answer: "To provide ongoing feedback to improve learning",
  },
  {
    question: "Which of the following tests is most likely norm-referenced?",
    options: [
      "Classroom quiz",
      "Final exam",
      "SAT",
      "Teacher-designed reading test",
    ],
    answer: "SAT (Scholastic Assessment Test)",
  },
  {
    question:
      "Which test is commonly used for university admissions in English-speaking countries?",
    options: ["CASAS", "TOEIC", "TOEFL", "SCANS"],
    answer: "TOEFL (Test of English as a Foreign Language)",
  },
  {
    question: "What does SCANS assess?",
    options: [
      "Academic writing skills",
      "Business communication skills",
      "Language needed for workplace success",
      "Teaching proficiency",
    ],
    answer:
      "Language needed for workplace success (SCANS: Secretary's Commission on Achieving Necessary Skills)",
  },
  {
    question: "What is a key disadvantage of standardized testing?",
    options: [
      "It provides quick results",
      "It allows comparison between test-takers",
      "It may not reflect real-world language skills",
      "It is widely recognized internationally",
    ],
    answer: "Artificiality: It may not reflect real-world language skills",
  },
];

export const linguisticsQuizz: QuestionItemProps[] = [
  {
    question:
      "Which type of test evaluates a learner’s ability to use language effectively in real-life situations rather than focusing on isolated skills?",
    options: [
      "Performance-based test",
      "Discrete-point test",
      "Objective test",
      "Norm-referenced test",
    ],
    answer: "Performance-based test",
  },
  {
    question:
      "What is the key characteristic of a norm-referenced test in language assessment?",
    options: [
      "Comparing individual scores against a predetermined standard",
      "Assessing students based on real-world task performance",
      "Ranking students in relation to a larger population",
      "Measuring knowledge gained from a specific curriculum",
    ],
    answer: "Ranking students in relation to a larger population",
  },
  {
    question:
      "Which type of validity ensures that a test measures the theoretical concept it intends to assess?",
    options: [
      "Content validity",
      "Construct validity",
      "Criterion-related validity",
      "Face validity",
    ],
    answer: "Construct validity",
  },
  {
    question:
      "What is the primary purpose of formative assessment in language learning?",
    options: [
      "To provide ongoing feedback for learning improvement",
      "To certify students’ overall proficiency",
      "To rank students within a specific group",
      "To determine readiness for a particular program",
    ],
    answer: "To provide ongoing feedback for learning improvement",
  },
  {
    question:
      "Which principle of assessment ensures that a test measures what it is designed to measure?",
    options: ["Reliability", "Validity", "Washback", "Authenticity"],
    answer: "Validity",
  },
  {
    question:
      'What does "washback" refer to in the context of language testing?',
    options: [
      "The influence of testing on teaching and learning",
      "The relationship between test scores and curriculum design",
      "The accuracy of test results in measuring student performance",
      "The fairness of test questions for all examinees",
    ],
    answer: "The influence of testing on teaching and learning",
  },
  {
    question:
      "Which assessment method involves the use of real-life tasks to evaluate language ability?",
    options: [
      "Authentic assessment",
      "Criterion-referenced assessment",
      "Standardized assessment",
      "Objective assessment",
    ],
    answer: "Authentic assessment",
  },
  {
    question:
      "Which type of test is typically used to determine a learner’s readiness for a particular instructional program?",
    options: [
      "Placement test",
      "Proficiency test",
      "Aptitude test",
      "Achievement test",
    ],
    answer: "Placement test",
  },
  {
    question:
      "What distinguishes an aptitude test from other types of assessments?",
    options: [
      "It predicts a learner’s potential for acquiring a language",
      "It evaluates progress within a particular course",
      "It determines language proficiency levels",
      "It compares student performance against national standards",
    ],
    answer: "It predicts a learner’s potential for acquiring a language",
  },
  {
    question:
      "Which term describes the degree to which a test produces stable and consistent results over time?",
    options: ["Reliability", "Validity", "Authenticity", "Practicality"],
    answer: "Reliability",
  },
  {
    question:
      "Which test type measures general language ability without focusing on a specific course or textbook?",
    options: [
      "Achievement test",
      "Proficiency test",
      "Diagnostic test",
      "Formative assessment",
    ],
    answer: "Proficiency test",
  },
  {
    question: "What is a key feature of summative assessment?",
    options: [
      "It is conducted during the learning process",
      "It provides a final evaluation of learning outcomes",
      "It offers continuous feedback to learners",
      "It diagnoses specific language weaknesses",
    ],
    answer: "It provides a final evaluation of learning outcomes",
  },
  {
    question: "Which characteristic makes a test practical?",
    options: [
      "It is easy to administer and grade",
      "It accurately measures language skills",
      "It produces positive washback",
      "It includes authentic language tasks",
    ],
    answer: "It is easy to administer and grade",
  },
  {
    question:
      "What is a major drawback of standardized testing in language assessment?",
    options: [
      "It lacks objectivity",
      "It may not reflect real-world language use",
      "It is limited to small-scale assessments",
      "It does not allow for score comparison",
    ],
    answer: "It may not reflect real-world language use",
  },
  {
    question:
      "Which factor is most important for ensuring test fairness across diverse student populations?",
    options: [
      "Removing cultural or linguistic biases",
      "Using more complex questions",
      "Focusing only on native speakers",
      "Eliminating time constraints",
    ],
    answer: "Removing cultural or linguistic biases",
  },
  {
    question:
      "Which type of test determines whether students meet predefined learning goals?",
    options: [
      "Criterion-referenced test",
      "Norm-referenced test",
      "Formative assessment",
      "Standardized test",
    ],
    answer: "Criterion-referenced test",
  },
  {
    question:
      "What is the primary focus of construct validity in language testing?",
    options: [
      "Ensuring the test measures the intended theoretical concept",
      "Confirming that test scores remain consistent over time",
      "Determining if a test produces useful feedback for teachers",
      "Checking if a test is easy to administer and score",
    ],
    answer: "Ensuring the test measures the intended theoretical concept",
  },
  {
    question:
      "Which aspect of language testing examines whether test results can be used to make accurate educational decisions?",
    options: ["Practicality", "Authenticity", "Fairness", "Validity"],
    answer: "Validity",
  },
  {
    question: "Which factor negatively impacts test reliability?",
    options: [
      "Inconsistencies in scoring procedures",
      "Using real-life language tasks",
      "Allowing multiple test attempts",
      "Increasing the number of test questions",
    ],
    answer: "Inconsistencies in scoring procedures",
  },
  {
    question:
      "Which framework categorizes language proficiency into six levels from A1 to C2?",
    options: ["TOEFL", "ACTFL", "CEFR", "IELTS"],
    answer: "CEFR",
  },
  {
    question:
      "What type of assessment is designed to be informal and continuous during learning?",
    options: [
      "Summative assessment",
      "Diagnostic assessment",
      "Formative assessment",
      "Standardized assessment",
    ],
    answer: "Formative assessment",
  },
  {
    question:
      "Which type of test statistically compares student results to a large group?",
    options: [
      "Criterion-referenced test",
      "Norm-referenced test",
      "Placement test",
      "Achievement test",
    ],
    answer: "Norm-referenced test",
  },
  {
    question:
      "Which type of validity is concerned with how well a test score correlates with an external criterion, such as future performance?",
    options: [
      "Construct validity",
      "Face validity",
      "Criterion-related validity",
      "Predictive validity",
    ],
    answer: "Criterion-related validity",
  },
  {
    question:
      "What is the primary difference between a high-stakes and a low-stakes language assessment?",
    options: [
      "High-stakes tests are used for classroom assessment, while low-stakes tests determine official certifications.",
      "High-stakes tests have significant consequences for the test-taker, while low-stakes tests have minimal impact.",
      "High-stakes tests focus on real-life skills, while low-stakes tests measure theoretical knowledge.",
      "Low-stakes tests are only used for norm-referenced evaluations, while high-stakes tests are criterion-referenced.",
    ],
    answer:
      "High-stakes tests have significant consequences for the test-taker, while low-stakes tests have minimal impact.",
  },
  {
    question:
      "Which linguistic factor can introduce bias into a language proficiency test?",
    options: [
      "Lack of washback",
      "Content familiarity among different cultures",
      "Reliability exceeding validity",
      "Increased practicality in grading",
    ],
    answer: "Content familiarity among different cultures",
  },
  {
    question:
      "Which test format is MOST likely to provide a direct measure of communicative competence?",
    options: [
      "Multiple-choice test",
      "Cloze test",
      "Dictation test",
      "Interactive speaking assessment",
    ],
    answer: "Interactive speaking assessment",
  },
  {
    question:
      "Which of the following is a key criticism of norm-referenced tests in language assessment?",
    options: [
      "They provide too much diagnostic feedback to learners.",
      "They do not allow for direct comparisons between test-takers.",
      "They emphasize ranking rather than individual progress.",
      "They fail to account for cultural background differences.",
    ],
    answer: "They emphasize ranking rather than individual progress.",
  },
  {
    question:
      "Which of the following is NOT a primary characteristic of an effective language test?",
    options: ["Validity", "Reliability", "Complexity", "Authenticity"],
    answer: "Complexity",
  },
  {
    question:
      "Which assessment method relies on students compiling their work over time for evaluation?",
    options: [
      "Portfolio assessment",
      "Standardized testing",
      "Objective assessment",
      "Criterion-referenced testing",
    ],
    answer: "Portfolio assessment",
  },
  {
    question: "Which is an advantage of computerized adaptive testing?",
    options: [
      "Questions adjust to student ability in real-time",
      "It always has the same set of test items",
      "It is graded by human examiners",
      "It follows a strict paper-based format",
    ],
    answer: "Questions adjust to student ability in real-time",
  },
];
