import { Header } from "@/components/Header";
import { subjects } from "@/constants/index";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {subjects.map((subject) => (
            <div key={subject.name} className="border p-4 rounded shadow-sm">
              <Link
                href={subject.subjectLink}
                className="text-2xl font-semibold text-black hover:underline"
              >
                {subject.name}
              </Link>
              <ul className="mt-4 space-y-2 ">
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
      </main>
    </>
  );
}
