"use client";
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

const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  answer,
  options = [],
  index,
}) => {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger className="text-lg font-semibold">
        {index !== undefined ? `${index + 1}. ` : ""} {question}
      </AccordionTrigger>

      {/* Options are always visible */}
      {options.length > 0 && (
        <ul className="ml-4 list-disc space-y-2 text-gray-700 font-normal text-lg">
          {options.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ul>
      )}

      {/* Answer is inside AccordionContent, only visible on toggle */}
      <AccordionContent className="text-base leading-relaxed">
        <p className="text-green-600 mt-2 font-medium text-lg">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

interface AssessmentQuestionsProps {
  questions: Omit<QuestionItemProps, "index">[];
}

const AssessmentQuestions: React.FC<AssessmentQuestionsProps> = ({
  questions,
}) => {
  return (
    <section className="space-y-8 p-6 border border-gray-100 shadow-md rounded-lg w-full mx-auto text-lg">
      <Accordion type="single" collapsible>
        {questions.map((item, index) => (
          <QuestionItem key={index} {...item} index={index} />
        ))}
      </Accordion>
    </section>
  );
};

export default AssessmentQuestions;
