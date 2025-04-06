import { MidtermExamPlanner } from "@/components/MidtermExamPlanner";
import Subjects from "@/components/Subjects";
import { WeeklyPlanner } from "@/components/WeeklyPlanner";

export default function Home() {
  return (
    <main className="max-w-4xl lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 ">
      <Subjects />
      <WeeklyPlanner />
      {/* <MidtermExamPlanner /> */}
    </main>
  );
}
