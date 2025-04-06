import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Docility and Disciplinary Power",
  description:
    "A page exploring Michel Foucault's concept of the docile body and disciplinary power, as discussed in his book *Discipline and Punish* (1977).",
};

export default function DocilityAndDisciplinaryPower() {
  const navLinks: NavLink[] = [
    { href: "#docile", label: "Docile Body" },
    { href: "#qna", label: "Q&A" },
  ];

  return (
    <main className="page-container">
      <div className="content-layout">
        <aside className="sidebar">
          <Navigation links={navLinks} />
        </aside>
        {/* Body Content */}
        <div className="main-content">
          {/* Title */}
          <PageTitle
            title="Docility and Disciplinary Power"
            author="Michel Foucault"
          />

          {/* Docile Body Section */}
          <section id="docile" className="section-content">
            <h2 className="section-title">Docile Body</h2>
            <div className="section-block">
              <p className="section-subtitle">1. Introduction</p>
              <p className="section-paragraph">
                The human body has always been regarded as a shapeless clay that
                can be used, transformed, and improved. In order to make the
                body docile (trained to be obedient, productive, and conforming)
                it must be exposed to forces of discipline and control. The term
                docile body was first introduced by Michel Foucault in his book
                *Discipline and Punish* (1977).
              </p>
              <p className="section-paragraph">
                The term *docile* means submissive or easily managed. Foucault
                argues that power structures (such as schools, military,
                hospitals, and prisons) shape people’s bodies and behaviors to
                become obedient, productive, and easily controlled through
                discipline.
              </p>

              <p className="section-subtitle">2. Disciplinary Power</p>
              <p className="section-paragraph">
                Discipline is different from force or violence because it is a
                way of controlling the operations and positions of the body.
                Unlike traditional power, which is exercised through force or
                violence, it operates through surveillance, normalization, and
                routine. It does not just punish; it trains individuals to
                regulate their own behavior.
              </p>

              <p className="section-subtitle">3. The Body as a Site of Power</p>
              <p className="section-paragraph">
                Foucault emphasizes that disciplinary power operates directly on
                the body, shaping how people move, sit, speak, and function in
                different spaces. This makes them efficient and useful for
                institutional goals (e.g., soldiers in the military, workers in
                factories, students in schools).
              </p>

              <p className="section-subtitle">4. Techniques of Discipline</p>
              <p className="section-subtitle">
                4.1. Surveillance and Hierarchical Observation
              </p>
              <p className="section-paragraph">
                Foucault argues that constant observation is a key method of
                discipline. People modify their behavior when they know they are
                being watched, even if no direct punishment is involved. He
                refers to the *Panopticon*, a prison design where prisoners are
                always visible to guards but never know when they are being
                watched. Over time, this leads to self-discipline, where
                individuals regulate their own actions to avoid punishment.
              </p>

              <p className="section-subtitle">
                4.2. Normalization: Establishing Standards of Behavior
              </p>
              <p className="section-paragraph">
                Institutions set norms for what is considered "correct"
                behavior. For example:
              </p>
              <ul className="section-list !list-disc !mb-6 !lg:mb-8">
                <li className="section-paragraph">
                  Schools teach students how to sit, walk, speak, and respond to
                  authority.
                </li>
                <li className="section-paragraph">
                  The military trains soldiers to move and act in precise,
                  standardized ways.
                </li>
                <li className="section-paragraph">
                  Workplaces enforce dress codes, schedules, and expected
                  conduct.
                </li>
                <li className="section-paragraph">
                  Those who deviate from these norms face correction,
                  punishment, or exclusion.
                </li>
              </ul>

              <p className="section-subtitle">4.3. Examination</p>
              <p className="section-paragraph">
                Examinations serve as tools of discipline by assessing,
                categorizing, and ranking individuals. Examples include:
              </p>
              <ul className="section-list !list-disc !mb-6 !lg:mb-8">
                <li className="section-paragraph">
                  School tests evaluate students based on their grades and
                  performance.
                </li>
                <li className="section-paragraph">
                  Workplace evaluations rank employees by productivity.
                </li>
                <li className="section-paragraph">
                  Medical check-ups that classify bodies as healthy or
                  unhealthy.
                </li>
              </ul>

              <p className="section-subtitle">
                4.4. Partitioning of Time and Space (Disciplinary Mechanisms)
              </p>
              <p className="section-paragraph">
                Discipline is imposed by structuring time and space in a way
                that optimizes control:
              </p>
              <ul className="section-list !list-disc !mb-6 !lg:mb-8">
                <li className="section-paragraph">
                  <strong>Timetables and Schedules:</strong> Institutions impose
                  strict routines, such as school bells, work shifts, and
                  military drills.
                </li>
                <li className="section-paragraph">
                  <strong>Spatial Organization:</strong> Individuals are placed
                  in controlled environments, such as desks in classrooms,
                  workstations in factories, or hospital beds in hospitals.
                </li>
                <li className="section-paragraph">
                  By regulating when and where people move, these structures
                  shape behavior and make individuals more predictable and
                  controllable.
                </li>
              </ul>

              <p className="section-subtitle">
                4.5. Training and Repetition: The Body as a Machine
              </p>
              <p className="section-paragraph">
                Foucault describes how institutions train the body to perform
                specific functions efficiently. This is done through repetitive
                exercises and routines that make actions automatic. For example:
              </p>
              <ul className="section-list !list-disc !mb-6 !lg:mb-8">
                <li className="section-paragraph">
                  A worker in a factory performs repetitive tasks to maximize
                  efficiency.
                </li>
                <li className="section-paragraph">
                  This training makes the body useful while ensuring it remains
                  submissive to authority.
                </li>
              </ul>

              <p className="section-subtitle">
                4.6. Internalization of Discipline: The Ultimate Goal
              </p>
              <p className="section-paragraph">
                The final stage of creating a docile body is
                **internalization**. Over time, individuals no longer need
                external enforcement because they begin to discipline
                themselves. They police their own actions, thoughts, and
                behaviors based on the norms imposed by institutions. For
                example:
              </p>
              <ul className="section-list !list-disc !mb-6 !lg:mb-8">
                <li className="section-paragraph">
                  A citizen follows societal norms (e.g., dressing
                  appropriately, speaking in a certain way) without needing
                  constant enforcement.
                </li>
              </ul>

              <p className="section-paragraph">
                The purpose of disciplinary practices is to optimize the body's
                capacities, skills, and productivity and to foster its
                usefulness and docility.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "What was then being formed was a policy of coercions that act
                  on the body, a calculated manipulation of its elements, its
                  gestures, its behavior. The human body was entering a
                  machinery of power that explores it, breaks it down, and
                  rearranges it . . . . Thus, discipline produces subjected and
                  practiced docile bodies." (138-9)
                </em>
              </p>

              <p className="section-paragraph">
                Foucault also adds that these disciplinary practices not only
                target the human body but the mind as well. In other words, the
                disciplinary power which is directed toward disciplining the
                body takes hold of the mind to induce a psychological state of
                **"conscious and permanent visibility"** (*Foucault 1977:201*).
                This means that people are aware that they are being watched
                continuously, and this creates **self-discipline**.
              </p>

              <p className="section-paragraph">
                Foucault states that these disciplinary practices that were used
                in prisons, military establishments, hospitals, factories, and
                schools, were gradually applied more broadly as techniques of
                social regulation and control.
              </p>

              <p className="section-subtitle">
                5. Positive and Negative Docility
              </p>
              <p className="section-subtitle">5.1. Positive Docility</p>
              <p className="section-paragraph">
                Discipline and training lead to personal growth, skill
                development, and social order. In these cases, docility enables
                individuals to function effectively within institutions and
                contribute productively to society.
              </p>

              <p className="section-subtitle">Examples of Positive Docility</p>
              <ul className="section-list !list-disc !mb-6 !lg:mb-8">
                <li className="section-paragraph">
                  Students follow structured learning routines (e.g., attending
                  classes, completing assignments, respecting teachers), which
                  help them acquire knowledge and develop intellectual
                  discipline.
                </li>
                <li className="section-paragraph">
                  Employees learn workplace ethics, time management, and
                  teamwork through structured rules and expectations.
                </li>
                <li className="section-paragraph">
                  Soldiers and police officers are trained to act with
                  discipline in high-pressure situations, ensuring national
                  security and public order.
                </li>
              </ul>

              <p className="section-subtitle">
                5.2. Negative Docility (Oppressive and Dehumanizing Control)
              </p>
              <p className="section-paragraph">
                Docility can become a tool of **oppression** when individuals
                are excessively controlled, manipulated, or made passive by
                systems of power. In such cases, people lose autonomy and
                critical thinking.
              </p>

              <p className="section-subtitle">Examples of Negative Docility</p>
              <ul className="section-list !list-disc !mb-6 !lg:mb-8">
                <li className="section-paragraph">
                  Employees who are conditioned to accept long working hours,
                  low wages, and unfair treatment without questioning authority.
                </li>
                <li className="section-paragraph">
                  Schools that focus only on obedience and rote learning,
                  discouraging creativity and critical thinking.
                </li>
                <li className="section-paragraph">
                  Citizens in an authoritarian regime avoid speaking freely,
                  fearing punishment.
                </li>
                <li className="section-paragraph">
                  Societal expectations that force individuals (especially women
                  and marginalized groups) to conform to restrictive roles.
                </li>
                <li className="section-paragraph">
                  A woman is expected to dress and behave in a certain way to be
                  socially accepted, limiting her freedom of expression.
                </li>
              </ul>

              <p className="section-paragraph">
                In these cases, docility leads to **oppression**, preventing
                individuals from questioning authority, resisting unfair
                systems, or thinking independently.
              </p>
            </div>
          </section>
          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              {/* Question 1 */}
              <li className="section-question">
                What is the concept of the docile body according to Michel
                Foucault?
                <p className="section-answer">
                  The docile body is a concept introduced by Michel Foucault in
                  *Discipline and Punish* (1977). It refers to a body that has
                  been shaped, trained, and controlled through disciplinary
                  practices to become obedient, productive, and conforming.
                  Foucault argues that power structures, such as schools, the
                  military, hospitals, and prisons, use discipline to mold
                  individuals into docile bodies that are useful for
                  institutional goals.
                </p>
              </li>

              {/* Question 2 */}
              <li className="section-question">
                How does disciplinary power differ from traditional forms of
                power?
                <p className="section-answer">
                  Disciplinary power differs from traditional forms of power,
                  which rely on force or violence, by operating through
                  surveillance, normalization, and routine. It does not merely
                  punish; it trains individuals to regulate their own behavior.
                  Foucault emphasizes that disciplinary power operates directly
                  on the body, shaping how people move, sit, speak, and function
                  in different spaces.
                </p>
              </li>

              {/* Question 3 */}
              <li className="section-question">
                What are the key techniques of discipline identified by
                Foucault?
                <p className="section-answer">
                  Foucault identifies several key techniques of discipline,
                  including surveillance, normalization, examination,
                  partitioning of time and space, training and repetition, and
                  the internalization of discipline. These techniques work
                  together to create docile bodies that are both productive and
                  submissive to authority.
                </p>
              </li>

              {/* Question 4 */}
              <li className="section-question">
                What is the Panopticon, and how does it illustrate Foucault’s
                concept of surveillance?
                <p className="section-answer">
                  The Panopticon is a prison design where prisoners are
                  constantly visible to guards but never know when they are
                  being watched. Foucault uses the Panopticon as an example of
                  how surveillance creates a state of "conscious and permanent
                  visibility," leading individuals to regulate their own
                  behavior out of fear of being observed. This form of
                  surveillance is a key method of discipline, as it encourages
                  self-regulation and conformity.
                </p>
              </li>

              {/* Question 5 */}
              <li className="section-question">
                How does normalization function as a technique of discipline?
                <p className="section-answer">
                  Normalization functions as a technique of discipline by
                  establishing norms for what is considered "correct" behavior.
                  Institutions enforce these norms, and those who deviate face
                  correction, punishment, or exclusion. This process ensures
                  that individuals conform to institutional expectations, making
                  them more predictable and controllable.
                </p>
              </li>

              {/* Question 6 */}
              <li className="section-question">
                What is the role of examination in disciplinary power?
                <p className="section-answer">
                  Examination serves as a tool of discipline by assessing,
                  categorizing, and ranking individuals. Examples include school
                  tests, workplace evaluations, and medical check-ups. These
                  examinations not only measure performance but also reinforce
                  norms and hierarchies, further entrenching disciplinary power.
                </p>
              </li>

              {/* Question 7 */}
              <li className="section-question">
                How does the partitioning of time and space contribute to
                discipline?
                <p className="section-answer">
                  The partitioning of time and space contributes to discipline
                  by structuring individuals’ routines and environments in ways
                  that optimize control. Timetables, schedules, and spatial
                  organization (e.g., desks in classrooms or workstations in
                  factories) regulate when and where people move, shaping their
                  behavior and making them more predictable and controllable.
                </p>
              </li>

              {/* Question 8 */}
              <li className="section-question">
                What is the significance of training and repetition in creating
                docile bodies?
                <p className="section-answer">
                  Training and repetition are essential for creating docile
                  bodies, as they make actions automatic and efficient. Through
                  repetitive exercises and routines, institutions train
                  individuals to perform specific functions without questioning
                  authority. This training ensures that the body remains useful
                  while also being submissive to institutional goals.
                </p>
              </li>

              {/* Question 9 */}
              <li className="section-question">
                What does Foucault mean by the internalization of discipline?
                <p className="section-answer">
                  The internalization of discipline refers to the process by
                  which individuals begin to regulate their own behavior without
                  needing external enforcement. Over time, individuals
                  internalize the norms and expectations imposed by
                  institutions, policing their own actions, thoughts, and
                  behaviors. This self-regulation is the ultimate goal of
                  disciplinary power.
                </p>
              </li>

              {/* Question 10 */}
              <li className="section-question">
                What are the positive and negative aspects of docility?
                <p className="section-answer">
                  The positive aspect of docility is that it can lead to
                  personal growth, skill development, and social order. For
                  example, students who follow structured learning routines
                  acquire knowledge and develop intellectual discipline.
                  However, docility can also become a tool of oppression when
                  individuals are excessively controlled, manipulated, or made
                  passive by systems of power, leading to the loss of autonomy
                  and critical thinking.
                </p>
              </li>

              {/* Question 11 */}
              <li className="section-question">
                How does Foucault’s concept of docility apply to modern
                institutions?
                <p className="section-answer">
                  Foucault’s concept of docility applies to modern institutions
                  such as schools, workplaces, and the military, where
                  individuals are trained to conform to specific norms and
                  expectations. These institutions use techniques of discipline,
                  such as surveillance, normalization, and examination, to
                  create docile bodies that are both productive and submissive
                  to authority.
                </p>
              </li>

              {/* Question 12 */}
              <li className="section-question">
                What is the relationship between discipline and productivity?
                <p className="section-answer">
                  Discipline and productivity are closely linked, as
                  disciplinary practices are designed to optimize the body’s
                  capacities, skills, and efficiency. By training individuals to
                  perform specific functions and conform to institutional norms,
                  discipline ensures that they become productive members of
                  society. However, this productivity often comes at the cost of
                  individual autonomy and critical thinking.
                </p>
              </li>

              {/* Question 13 */}
              <li className="section-question">
                How does Foucault’s analysis of discipline challenge traditional
                notions of power?
                <p className="section-answer">
                  Foucault’s analysis of discipline challenges traditional
                  notions of power by emphasizing the subtle and pervasive ways
                  in which power operates through surveillance, normalization,
                  and routine. Unlike traditional forms of power, which rely on
                  force or violence, disciplinary power trains individuals to
                  regulate their own behavior, making external enforcement
                  unnecessary.
                </p>
              </li>

              {/* Question 14 */}
              <li className="section-question">
                What are the implications of Foucault’s concept of docility for
                individual autonomy?
                <p className="section-answer">
                  Foucault’s concept of docility has significant implications
                  for individual autonomy, as it suggests that individuals are
                  often shaped and controlled by institutional norms and
                  expectations. While discipline can lead to personal growth and
                  productivity, it can also result in the loss of autonomy and
                  critical thinking, particularly when individuals are
                  excessively controlled or manipulated by systems of power.
                </p>
              </li>

              {/* Question 15 */}
              <li className="section-question">
                How does Foucault’s work on discipline contribute to our
                understanding of social control?
                <p className="section-answer">
                  Foucault’s work on discipline contributes to our understanding
                  of social control by revealing the ways in which power
                  operates through subtle and pervasive techniques, such as
                  surveillance, normalization, and examination. His analysis
                  highlights how institutions shape individuals’ behavior and
                  internal sense of self-regulation, creating docile bodies that
                  are both productive and submissive to authority. This
                  perspective challenges traditional notions of power and
                  control, emphasizing the importance of understanding the
                  mechanisms of discipline in modern society.
                </p>
              </li>
            </ol>
          </section>
        </div>
        {/* Balance Div */}
        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
