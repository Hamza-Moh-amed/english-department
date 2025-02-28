import { QuestionItemProps } from "@/components/Questions";

export const questions: QuestionItemProps[] = [
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
    answer: "SAT",
  },
  {
    question:
      "Which test is commonly used for university admissions in English-speaking countries?",
    options: ["CASAS", "TOEIC", "TOEFL", "SCANS"],
    answer: "TOEFL",
  },
  {
    question: "What does SCANS assess?",
    options: [
      "Academic writing skills",
      "Business communication skills",
      "Language needed for workplace success",
      "Teaching proficiency",
    ],
    answer: "Language needed for workplace success",
  },
  {
    question: "What is a key disadvantage of standardized testing?",
    options: [
      "It provides quick results",
      "It allows comparison between test-takers",
      "It may not reflect real-world language skills",
      "It is widely recognized internationally",
    ],
    answer: "It may not reflect real-world language skills",
  },

  // True/False questions
  {
    question: "The CEFR is a framework used only in European countries.",
    answer: "False (It is widely used internationally)",
  },
  {
    question:
      "A placement test helps determine whether a student should pass or fail a course.",
    answer:
      "False (Placement tests determine a student's appropriate course level, not pass/fail status)",
  },
  {
    question:
      "High-stakes testing can create pressure that affects student performance.",
    answer: "True",
  },
  {
    question: "Reliability ensures that a test is free from bias.",
    answer: "False (A test can be reliable but still biased)",
  },
  {
    question: "Proficiency tests are linked to a specific curriculum.",
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
      "Advantage: Comparability. Disadvantage: May not reflect real-world skills.",
  },
  {
    question: "Why is washback important in language assessment?",
    answer: "It affects teaching and learning positively or negatively.",
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
];
