"use client";
import { useState } from "react";

export interface QuestionItemProps {
  question: string;
  answer: string;
  options?: string[];
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  answer,
  options = [],
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <li className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="flex flex-col space-y-2">
        <strong className="text-gray-900">{question}</strong>
        {options.length > 0 && (
          <ul className="ml-4 list-disc space-y-2 text-gray-700">
            {options.map((option, i) => (
              <li key={i}>{option}</li>
            ))}
          </ul>
        )}
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="w-32 px-2 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
        >
          {isVisible ? "Hide Answer" : "Reveal Answer"}
        </button>
        {isVisible && (
          <p className="text-green-700 mt-2 font-medium">{answer}</p>
        )}
      </div>
    </li>
  );
};

interface AssessmentQuestionsProps {
  questions: QuestionItemProps[];
}

const AssessmentQuestions: React.FC<AssessmentQuestionsProps> = ({
  questions,
}) => {
  return (
    <section className="space-y-8 p-6 border border-gray-100 shadow-md rounded-lg w-full mx-auto ">
      <div className="prose max-w-none">
        <ol className="list-decimal ml-6 space-y-8 text-lg">
          {questions.map((item, index) => (
            <QuestionItem key={index} {...item} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default AssessmentQuestions;
