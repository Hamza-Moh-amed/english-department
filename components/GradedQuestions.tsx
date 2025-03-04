"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface QuestionItemProps {
  question: string;
  answer: string;
  options?: string[];
  index?: number;
}

const QuestionItem: React.FC<
  QuestionItemProps & {
    onSelect: (index: number, answer: string) => void;
    selected: string | null;
    showCorrect: boolean;
  }
> = ({
  question,
  answer,
  options = [], // Ensure options are always an array
  index,
  onSelect,
  selected,
  showCorrect,
}) => {
  return (
    <AccordionItem
      value={question}
      className="border border-gray-200 p-4 rounded-lg"
    >
      <AccordionTrigger className="text-lg font-semibold [&>svg]:hidden cursor-default">
        {index !== undefined ? `${index + 1}. ` : ""} {question}
      </AccordionTrigger>

      {/* Options */}
      <ul className="ml-4 space-y-2 text-gray-700 font-normal text-lg">
        {options.map((option, i) => {
          const isCorrect = option === answer;
          const isSelectedWrong = selected === option && !isCorrect;

          return (
            <li key={i}>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={selected === option}
                  onChange={() => onSelect(index!, option)}
                  className="h-5 w-5 text-blue-600 border-gray-300 focus:ring focus:ring-blue-300"
                />
                <span
                  className={`px-3 py-1 rounded-md ${
                    showCorrect && isSelectedWrong
                      ? "bg-red-400 text-white font-bold"
                      : ""
                  } ${
                    showCorrect && isCorrect
                      ? "bg-green-500 text-white font-bold"
                      : ""
                  }`}
                >
                  {option}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      {/* Show Correct Answer for Wrong Responses */}
      {showCorrect && selected !== answer && (
        <AccordionContent className="text-base leading-relaxed mt-3">
          <p className="bg-green-500 text-white px-3 py-2 rounded-md font-semibold">
            Correct Answer: {answer}
          </p>
        </AccordionContent>
      )}
    </AccordionItem>
  );
};

interface AssessmentQuestionsProps {
  questions: Omit<QuestionItemProps, "index">[];
}

const GradedQuestions: React.FC<AssessmentQuestionsProps> = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string | undefined;
  }>({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSelect = (index: number, answer: string) => {
    setSelectedAnswers((prev) => {
      const updatedAnswers = { ...prev, [index]: answer };

      // Clear the error message when all questions are answered
      if (Object.keys(updatedAnswers).length === questions.length) {
        setErrorMessage("");
      }

      return updatedAnswers;
    });
  };

  const finishQuiz = () => {
    // Check if all questions are answered
    const allAnswered = questions.every(
      (_, i) => selectedAnswers[i] !== undefined
    );

    if (!allAnswered) {
      setErrorMessage(
        "Please make sure you answer all questions before finishing the quiz."
      );
      return;
    }

    let correctCount = 0;
    questions.forEach((q, i) => {
      if (selectedAnswers[i] === q.answer) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setQuizFinished(true);
    setErrorMessage(""); // Clear error message if quiz is finished
  };

  return (
    <section className="space-y-8 p-6 border border-gray-100 shadow-md rounded-lg w-full mx-auto text-lg">
      {/* Graded Quiz Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-center text-blue-700">
          Graded Quiz
        </h2>
        <p className="text-center text-gray-600">
          30 Multiple-Choice Questions
        </p>
      </div>

      <Accordion type="multiple">
        {questions.map((item, index) => (
          <QuestionItem
            key={index}
            {...item}
            options={item.options ?? []} // Ensure options always exist
            index={index}
            selected={selectedAnswers[index] || null}
            onSelect={handleSelect}
            showCorrect={quizFinished}
          />
        ))}
      </Accordion>

      {quizFinished ? (
        <p className="text-center text-xl font-bold text-green-600">
          Your Score: {score} / {questions.length}
        </p>
      ) : (
        <>
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          <button
            onClick={finishQuiz}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            Finish Quiz
          </button>
        </>
      )}
    </section>
  );
};

export default GradedQuestions;
