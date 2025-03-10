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
    { href: "#overview", label: "Overview" },
    { href: "#analysis", label: "Analysis" },
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

          {/* Overview Section */}
          <section id="overview" className="section-content">
            <h2 className="section-title">Overview</h2>
            <article className="article-block">
              <p className="article-paragraph">
                The concept of the docile body was introduced by Michel Foucault
                in his seminal work, *Discipline and Punish* (1977). Foucault
                argues that the human body has historically been treated as
                malleable clay, capable of being shaped, transformed, and
                improved through disciplinary practices. The term "docile"
                refers to a body that is submissive, obedient, and easily
                managed. Foucault contends that power structures—such as
                schools, the military, hospitals, and prisons—use discipline to
                mold individuals into productive, conforming, and easily
                controlled subjects.
              </p>
              <p className="article-paragraph">
                Unlike traditional forms of power, which rely on force or
                violence, disciplinary power operates through surveillance,
                normalization, and routine. It does not merely punish; it trains
                individuals to regulate their own behavior. Foucault emphasizes
                that disciplinary power operates directly on the body, shaping
                how people move, sit, speak, and function in different spaces.
                This makes individuals efficient and useful for institutional
                goals, such as soldiers in the military, workers in factories,
                or students in schools.
              </p>
              <p className="article-paragraph">
                Foucault identifies several techniques of discipline, including
                surveillance, normalization, examination, partitioning of time
                and space, training and repetition, and the internalization of
                discipline. These techniques work together to create docile
                bodies that are both productive and submissive to authority.
              </p>
            </article>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              {/* Analysis Point 1: The Concept of the Docile Body */}
              <p className="section-subtitle">
                1. The Concept of the Docile Body
              </p>
              <p className="section-paragraph">
                Foucault’s concept of the docile body is central to his analysis
                of disciplinary power. He argues that the human body is not a
                fixed entity but rather a malleable object that can be shaped
                and controlled through disciplinary practices. These practices
                are designed to make the body obedient, productive, and
                conforming to institutional norms. Foucault’s analysis
                challenges traditional notions of power, which focus on overt
                coercion or violence, by emphasizing the subtle and pervasive
                ways in which power operates through discipline.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "What was then being formed was a policy of coercions that act
                  on the body, a calculated manipulation of its elements, its
                  gestures, its behavior. The human body was entering a
                  machinery of power that explores it, breaks it down and
                  rearranges it."
                </em>
              </p>
              <p className="section-paragraph">
                This quote highlights Foucault’s view that disciplinary power is
                not merely about controlling the body but also about
                transforming it into a useful and efficient tool for
                institutional goals. The docile body is both a product and a
                target of disciplinary power.
              </p>

              {/* Analysis Point 2: Techniques of Discipline */}
              <p className="section-subtitle">2. Techniques of Discipline</p>
              <p className="section-paragraph">
                Foucault identifies several key techniques of discipline,
                including surveillance, normalization, examination, partitioning
                of time and space, training and repetition, and the
                internalization of discipline. These techniques work together to
                create docile bodies that are both productive and submissive to
                authority.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Discipline produces subjected and practiced bodies, 'docile'
                  bodies."
                </em>
              </p>
              <p className="section-paragraph">
                This quote underscores Foucault’s argument that disciplinary
                power is not just about external control but also about shaping
                individuals’ internal sense of self-regulation. Over time,
                individuals begin to police their own behavior, making external
                enforcement unnecessary.
              </p>

              {/* Analysis Point 3: Surveillance and the Panopticon */}
              <p className="section-subtitle">
                3. Surveillance and the Panopticon
              </p>
              <p className="section-paragraph">
                One of Foucault’s most famous examples of disciplinary power is
                the Panopticon, a prison design where prisoners are constantly
                visible to guards but never know when they are being watched.
                This creates a state of "conscious and permanent visibility,"
                leading individuals to regulate their own behavior out of fear
                of being observed. Foucault argues that this form of
                surveillance is a key method of discipline, as it encourages
                self-regulation and conformity.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "He who is subjected to a field of visibility, and who knows
                  it, assumes responsibility for the constraints of power; he
                  makes them play spontaneously upon himself; he inscribes in
                  himself the power relation in which he simultaneously plays
                  both roles; he becomes the principle of his own subjection."
                </em>
              </p>
              <p className="section-paragraph">
                This quote illustrates how surveillance creates a psychological
                state of self-discipline, where individuals internalize the gaze
                of authority and regulate their own behavior.
              </p>

              {/* Analysis Point 4: Normalization and Standards of Behavior */}
              <p className="section-subtitle">
                4. Normalization and Standards of Behavior
              </p>
              <p className="section-paragraph">
                Foucault argues that institutions establish norms for what is
                considered "correct" behavior, and those who deviate from these
                norms face correction, punishment, or exclusion. This process of
                normalization ensures that individuals conform to institutional
                expectations, making them more predictable and controllable.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "The norm establishes a homogeneity of behavior, but it also
                  individualizes by making it possible to measure gaps, to
                  determine levels, to fix specialties, and to render
                  differences useful."
                </em>
              </p>
              <p className="section-paragraph">
                This quote highlights how normalization not only enforces
                conformity but also creates hierarchies and distinctions among
                individuals, further reinforcing disciplinary power.
              </p>

              {/* Analysis Point 5: Examination as a Tool of Discipline */}
              <p className="section-subtitle">
                5. Examination as a Tool of Discipline
              </p>
              <p className="section-paragraph">
                Examinations serve as tools of discipline by assessing,
                categorizing, and ranking individuals. Examples include school
                tests, workplace evaluations, and medical check-ups. These
                examinations not only measure performance but also reinforce
                norms and hierarchies, further entrenching disciplinary power.
              </p>
              <p className="section-quote">
                Example:
                <em className="section-quote-em">
                  "School tests evaluate students based on their grades and
                  performance, workplace evaluations rank employees by
                  productivity, and medical check-ups classify bodies as healthy
                  or unhealthy."
                </em>
              </p>
              <p className="section-paragraph">
                This process of examination ensures that individuals are
                constantly measured against institutional standards, reinforcing
                the need for conformity and self-regulation.
              </p>

              {/* Analysis Point 6: Partitioning of Time and Space */}
              <p className="section-subtitle">
                6. Partitioning of Time and Space
              </p>
              <p className="section-paragraph">
                Discipline is imposed by structuring time and space in a way
                that optimizes control. Timetables, schedules, and spatial
                organization (e.g., desks in classrooms or workstations in
                factories) regulate when and where people move, shaping their
                behavior and making them more predictable and controllable.
              </p>
              <p className="section-quote">
                Example:
                <em className="section-quote-em">
                  "Institutions impose strict routines, such as school bells,
                  work shifts, and military drills, to regulate behavior."
                </em>
              </p>
              <p className="section-paragraph">
                This structuring of time and space ensures that individuals are
                constantly under the influence of institutional control, even in
                the absence of direct supervision.
              </p>

              {/* Analysis Point 7: Training and Repetition */}
              <p className="section-subtitle">7. Training and Repetition</p>
              <p className="section-paragraph">
                Foucault describes how institutions train the body to perform
                specific functions efficiently through repetitive exercises and
                routines. This training makes actions automatic and ensures that
                the body remains useful while being submissive to authority.
              </p>
              <p className="section-quote">
                Example:
                <em className="section-quote-em">
                  "A worker in a factory performs repetitive tasks to maximize
                  efficiency, while a soldier is trained to act with precision
                  in high-pressure situations."
                </em>
              </p>
              <p className="section-paragraph">
                This process of training and repetition ensures that individuals
                become efficient tools for institutional goals, while also
                internalizing the norms of discipline.
              </p>

              {/* Analysis Point 8: Internalization of Discipline */}
              <p className="section-subtitle">
                8. Internalization of Discipline
              </p>
              <p className="section-paragraph">
                The ultimate goal of disciplinary power is the internalization
                of discipline, where individuals begin to regulate their own
                behavior without needing external enforcement. Over time,
                individuals internalize the norms and expectations imposed by
                institutions, policing their own actions, thoughts, and
                behaviors.
              </p>
              <p className="section-quote">
                Example:
                <em className="section-quote-em">
                  "A citizen follows societal norms, such as dressing
                  appropriately or speaking in a certain way, without needing
                  constant enforcement."
                </em>
              </p>
              <p className="section-paragraph">
                This internalization ensures that individuals remain docile and
                conforming, even in the absence of direct supervision.
              </p>

              {/* Analysis Point 9: Positive and Negative Docility */}
              <p className="section-subtitle">
                9. Positive and Negative Docility
              </p>
              <p className="section-paragraph">
                Foucault’s concept of docility can have both positive and
                negative implications. On the one hand, discipline and training
                can lead to personal growth, skill development, and social
                order. On the other hand, docility can become a tool of
                oppression when individuals are excessively controlled,
                manipulated, or made passive by systems of power.
              </p>
              <p className="section-quote">
                Example of Positive Docility:
                <em className="section-quote-em">
                  "Students follow structured learning routines, which help them
                  acquire knowledge and develop intellectual discipline."
                </em>
              </p>
              <p className="section-quote">
                Example of Negative Docility:
                <em className="section-quote-em">
                  "Employees who are conditioned to accept long working hours
                  and low wages without questioning authority."
                </em>
              </p>
              <p className="section-paragraph">
                This duality highlights the potential benefits and dangers of
                disciplinary power, depending on how it is applied.
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
