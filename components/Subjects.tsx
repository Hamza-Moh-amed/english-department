import { subjects } from "@/constants";
import Link from "next/link";
import React from "react";

const Subjects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {subjects.map((subject) => (
        <div key={subject.name} className="border p-4 rounded shadow-sm">
          <div className="text-2xl font-semibold text-black">
            {subject.name}
          </div>
          <ul className="mt-4 space-y-2">
            {subject.lessons.map((lesson) => (
              <li key={lesson.title}>
                <Link
                  href={lesson.link}
                  className="text-lg text-black hover:underline"
                >
                  {lesson.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Subjects;
