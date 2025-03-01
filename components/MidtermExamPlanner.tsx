import React from "react";

const midtermExams = [
  {
    day: "Saturday, March 15",
    events: ["American Studies 11-12 am - room 78"],
  },
  {
    day: "Sunday, March 16",
    events: ["Translation 10-11 am - room 78"],
  },
  {
    day: "Monday, March 17",
    events: ["Comparative Studies 11-12 am - room 78"],
  },
  {
    day: "Tuesday, March 18",
    events: ["Selected Topics in Drama 11-12 am - room 74"],
  },
  {
    day: "Wednesday, March 19",
    events: ["Linguistics 9:30-10:30 am - room 74"],
  },
  {
    day: "Thursday, March 20",
    events: ["Selected Topics in Poetry 9-10 am - room 74"],
  },
];

export const MidtermExamPlanner: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-black mb-4">Midterm Exams</h2>
      <div className="border p-4 rounded shadow-sm">
        {midtermExams.map((day, index) => (
          <div
            key={day.day}
            className={index !== 0 ? "mt-4 border-t pt-4" : ""}
          >
            <h3 className="text-xl font-semibold text-black">{day.day}</h3>
            <ul className="mt-2 space-y-1">
              {day.events.map((event, idx) => (
                <li key={idx} className="text-gray-700">
                  {event}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
