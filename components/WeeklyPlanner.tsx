import React from "react";

const planner = [
  {
    day: "Sunday",
    events: ["American 1-3 pm - online"],
  },
  {
    day: "Monday",
    events: [
      "Linguistics 10:40-12 pm - room 65",
      "Comparative 12-1:20 pm - room 65",
      "Docility 1:20-2:40 pm - room 13",
    ],
  },
  {
    day: "Tuesday",
    events: ["Docility 10 am - online"],
  },
  {
    day: "Wednesday",
    events: [
      "Translation 10:40-12 pm - room 65",
      "American 12-1:20 pm - room 62",
      "Trauma 1:20-2:40 pm - room 62",
    ],
  },
  {
    day: "Thursday",
    events: ["Trauma 10 am - online", "Comparative 1-3 pm - online"],
  },
];

export const WeeklyPlanner: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-black mb-4">Section B</h2>
      <div className="border p-4 rounded shadow-sm">
        {planner.map((day, index) => (
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
