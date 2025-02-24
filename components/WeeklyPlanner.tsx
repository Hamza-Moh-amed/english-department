import React from "react";

const planner = [
  {
    day: "Sunday",
    events: ["American 1-3 pm - online"],
  },
  {
    day: "Monday",
    events: [
      "Linguistics 12-2 pm - room 65 - (03 Mar - Moved Online on Tuesaday)",
      "Comparative 2-4 pm - room 65",
      "Docility 4-6 pm - room 13",
    ],
  },
  {
    day: "Tuesday",
    events: [
      "Docility 10 am - online",
      "Linguistics 12 pm - online (Replacment for monday lecture)",
    ],
  },
  {
    day: "Wednesday",
    events: [
      "Translation 12-2 pm - room 65",
      "American 2-4 pm - room 62",
      "Trauma 4-6 pm - room 62",
    ],
  },
  {
    day: "Thursday",
    events: [
      "Trauma 10 am - online",
      "Comparative 1-3 pm - online (27 Feb 5-7 pm - online )",
    ],
  },
];

export const WeeklyPlanner: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold text-black mb-4">Section B</h2>
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
