import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "Asian American History and Literature",
  description:
    "A page exploring the history of Asian American immigration, discrimination, and the contributions of Asian American writers like Wakako Yamauchi.",
};

export default function AsianAmericanHistory() {
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
            title="Asian American History and Literature"
            author="Various Authors"
          />

          {/* Overview Section */}
          <section id="overview" className="section-content">
            <h2 className="section-title">Overview</h2>
            <article className="article-block">
              <p className="article-paragraph">
                Throughout the 19th and 20th centuries, successive groups of
                Asian immigrants from China, Japan, Korea, the Philippines,
                Laos, Cambodia, and Vietnam arrived in the United States seeking
                to escape war, tyranny, hunger, and repression in their
                homelands. They came in search of "a better life in a prosperous
                new land" (Berson ix). Among these groups, Japanese Americans
                played a significant role in shaping the history of Asian
                immigration to the U.S.
              </p>
              <p className="article-paragraph">
                The first wave of Japanese immigrants arrived in the U.S. in
                1868, following the Meiji Restoration in Japan. This period
                marked a significant shift in Japan's policy toward Western
                countries, including the U.S. The new Japanese government
                encouraged its youth to seek job opportunities in America and
                adopt Western ways of living. However, Japanese immigrants faced
                numerous obstacles, including discriminatory laws and social
                exclusion, which made it difficult for them to achieve the
                American Dream.
              </p>
              <p className="article-paragraph">
                Discrimination against Japanese Americans intensified in the
                early 20th century. Laws such as the Alien Land Law of 1913 and
                the Immigration Act of 1924 severely restricted their rights and
                opportunities. The situation worsened during World War II when
                Japanese Americans were forcibly relocated to internment camps
                following the attack on Pearl Harbor in 1941.
              </p>
              <p className="article-paragraph">
                Despite these challenges, Asian American literature has emerged
                as a powerful medium for exploring themes such as the hardship
                of immigrant life, the struggle with dominant White culture, and
                the acceptance or rejection of Asian roots. Writers like Wakako
                Yamauchi have made significant contributions to this literary
                tradition, shedding light on the experiences of Japanese
                Americans and their history of immigration and internment.
              </p>
            </article>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              {/* Analysis Point 1: The Meiji Restoration and Japanese Immigration */}
              <p className="section-subtitle">
                1. The Meiji Restoration and Japanese Immigration
              </p>
              <p className="section-paragraph">
                The Meiji Restoration of 1868 marked a turning point in Japan's
                history, leading to significant political, cultural, and social
                changes. The new Japanese government encouraged its citizens to
                seek opportunities abroad, particularly in the United States.
                This led to the first wave of Japanese immigrants arriving in
                America in 1868, driven by the promise of the American Dream.
                However, they soon encountered a series of discriminatory laws
                and social barriers that made it difficult for them to achieve
                their goals.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "The first wave of immigrants landed on American shores in
                  1868 obsessed with the American dream. However, they have
                  encountered a malignant chain of obstacles that rendered the
                  realization of such a dream quite impossible."
                </em>
              </p>
              <p className="section-paragraph">
                This quote highlights the challenges faced by Japanese
                immigrants, who were initially hopeful but soon confronted the
                harsh realities of discrimination and exclusion.
              </p>

              {/* Analysis Point 2: Discrimination Against Japanese Americans */}
              <p className="section-subtitle">
                2. Discrimination Against Japanese Americans
              </p>
              <p className="section-paragraph">
                Japanese Americans faced significant discrimination in the early
                20th century. Laws such as the Alien Land Law of 1913 and the
                Immigration Act of 1924 were explicitly designed to restrict
                their rights and opportunities. The Alien Land Law prevented
                Japanese immigrants from owning land, while the Immigration Act
                effectively barred further Japanese immigration to the U.S.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "In 1913: The Americans passed the Alien Land Law that
                  prevented Asians from owning land in America."
                </em>
              </p>
              <p className="section-paragraph">
                These laws not only limited the economic opportunities available
                to Japanese Americans but also reinforced their status as
                second-class citizens.
              </p>

              {/* Analysis Point 3: Japanese Internment During World War II */}
              <p className="section-subtitle">
                3. Japanese Internment During World War II
              </p>
              <p className="section-paragraph">
                The attack on Pearl Harbor on December 7, 1941, led to
                widespread fear and suspicion of Japanese Americans. In the
                aftermath, over 120,000 Japanese Americans were forcibly
                relocated to internment camps. This period marked one of the
                darkest chapters in American history, as Japanese Americans were
                stripped of their rights and subjected to harsh living
                conditions.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "From 1942 till 1945, more than 120,000 Japanese Americans
                  were uprooted from their lives on the West Coast and Hawaii
                  and were put in detention camps."
                </em>
              </p>
              <p className="section-paragraph">
                This quote underscores the scale of the injustice faced by
                Japanese Americans during World War II, as they were treated as
                enemies solely because of their ancestry.
              </p>

              {/* Analysis Point 4: Themes in Asian American Literature */}
              <p className="section-subtitle">
                4. Themes in Asian American Literature
              </p>
              <p className="section-paragraph">
                Asian American literature often explores themes such as the
                hardship of immigrant life, the struggle with dominant White
                culture, and the acceptance or rejection of Asian roots. Writers
                like Wakako Yamauchi have used their work to shed light on the
                experiences of Japanese Americans, particularly during the early
                20th century and World War II.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Common themes in Asian American literature: Hardship of the
                  immigrant life, struggle with the dominant White culture,
                  acceptance/rejection of their Asian roots."
                </em>
              </p>
              <p className="section-paragraph">
                These themes reflect the complex and often painful experiences
                of Asian Americans as they navigate their identities in a
                predominantly White society.
              </p>

              {/* Analysis Point 5: Wakako Yamauchi and Her Contributions */}
              <p className="section-subtitle">
                5. Wakako Yamauchi and Her Contributions
              </p>
              <p className="section-paragraph">
                Wakako Yamauchi is one of the most prominent Asian American
                writers of the 20th century. Her work focuses on the experiences
                of Japanese Americans, particularly during the early 20th
                century and World War II. Yamauchi's writings provide a powerful
                insight into the struggles faced by Japanese immigrants and
                their descendants, including discrimination, internment, and the
                search for identity.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Wakako Yamauchi's play *And the Soul Shall Dance* brings to
                  the audience a time when Californian law forbade Japanese
                  immigrants from owning land."
                </em>
              </p>
              <p className="section-paragraph">
                This quote highlights Yamauchi's ability to use literature to
                explore the historical and social challenges faced by Japanese
                Americans, making her work an important part of Asian American
                literary tradition.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              {/* Question 1 */}
              <li className="section-question">
                What was the Meiji Restoration, and how did it influence
                Japanese immigration to the U.S.?
                <p className="section-answer">
                  The Meiji Restoration of 1868 was a period of significant
                  political, cultural, and social change in Japan. The new
                  Japanese government encouraged its citizens to seek
                  opportunities abroad, particularly in the United States. This
                  led to the first wave of Japanese immigrants arriving in
                  America in 1868, driven by the promise of the American Dream.
                </p>
              </li>

              {/* Question 2 */}
              <li className="section-question">
                What were some of the discriminatory laws faced by Japanese
                Americans in the early 20th century?
                <p className="section-answer">
                  Japanese Americans faced several discriminatory laws,
                  including the Alien Land Law of 1913, which prevented them
                  from owning land, and the Immigration Act of 1924, which
                  barred further Japanese immigration to the U.S. These laws
                  severely restricted their rights and opportunities.
                </p>
              </li>

              {/* Question 3 */}
              <li className="section-question">
                What happened to Japanese Americans during World War II?
                <p className="section-answer">
                  Following the attack on Pearl Harbor in 1941, over 120,000
                  Japanese Americans were forcibly relocated to internment
                  camps. This period marked one of the darkest chapters in
                  American history, as Japanese Americans were stripped of their
                  rights and subjected to harsh living conditions.
                </p>
              </li>

              {/* Question 4 */}
              <li className="section-question">
                What are some common themes in Asian American literature?
                <p className="section-answer">
                  Common themes in Asian American literature include the
                  hardship of immigrant life, the struggle with dominant White
                  culture, and the acceptance or rejection of Asian roots. These
                  themes reflect the complex and often painful experiences of
                  Asian Americans as they navigate their identities in a
                  predominantly White society.
                </p>
              </li>

              {/* Question 5 */}
              <li className="section-question">
                Who is Wakako Yamauchi, and what are her contributions to Asian
                American literature?
                <p className="section-answer">
                  Wakako Yamauchi is one of the most prominent Asian American
                  writers of the 20th century. Her work focuses on the
                  experiences of Japanese Americans, particularly during the
                  early 20th century and World War II. Yamauchi's writings
                  provide a powerful insight into the struggles faced by
                  Japanese immigrants and their descendants, including
                  discrimination, internment, and the search for identity.
                </p>
              </li>

              {/* Question 6 */}
              <li className="section-question">
                What was the Alien Land Law, and how did it affect Japanese
                immigrants?
                <p className="section-answer">
                  The Alien Land Law of 1913 prohibited Japanese immigrants from
                  owning agricultural land in California. This law severely
                  limited their economic opportunities and reinforced their
                  status as second-class citizens.
                </p>
              </li>

              {/* Question 7 */}
              <li className="section-question">
                How did the Immigration Act of 1924 impact Japanese immigration
                to the U.S.?
                <p className="section-answer">
                  The Immigration Act of 1924 effectively barred further
                  Japanese immigration to the U.S. This law was part of a
                  broader effort to restrict immigration from Asia and maintain
                  a predominantly White population.
                </p>
              </li>

              {/* Question 8 */}
              <li className="section-question">
                What was the significance of the Japanese attack on Pearl Harbor
                for Japanese Americans?
                <p className="section-answer">
                  The attack on Pearl Harbor led to widespread fear and
                  suspicion of Japanese Americans. In the aftermath, over
                  120,000 Japanese Americans were forcibly relocated to
                  internment camps, where they were stripped of their rights and
                  subjected to harsh living conditions.
                </p>
              </li>

              {/* Question 9 */}
              <li className="section-question">
                How did Japanese Americans respond to the discrimination they
                faced?
                <p className="section-answer">
                  Japanese Americans responded to discrimination by forming
                  tight-knit communities and relying on each other for support.
                  Despite the challenges they faced, many Japanese Americans
                  worked hard to build successful lives and contribute to
                  American society.
                </p>
              </li>

              {/* Question 10 */}
              <li className="section-question">
                What role did literature play in the lives of Japanese Americans
                during the early 20th century?
                <p className="section-answer">
                  Literature played a crucial role in documenting the
                  experiences of Japanese Americans during the early 20th
                  century. Writers like Wakako Yamauchi used their work to shed
                  light on the struggles faced by Japanese immigrants and their
                  descendants, including discrimination, internment, and the
                  search for identity.
                </p>
              </li>

              {/* Question 11 */}
              <li className="section-question">
                How did the internment of Japanese Americans during World War II
                affect their lives?
                <p className="section-answer">
                  The internment of Japanese Americans during World War II had a
                  profound impact on their lives. They were forcibly removed
                  from their homes, stripped of their rights, and subjected to
                  harsh living conditions in internment camps. This experience
                  left lasting scars on the Japanese American community.
                </p>
              </li>

              {/* Question 12 */}
              <li className="section-question">
                What were some of the challenges faced by Japanese immigrants in
                the early 20th century?
                <p className="section-answer">
                  Japanese immigrants in the early 20th century faced numerous
                  challenges, including discriminatory laws, social exclusion,
                  and economic hardship. These obstacles made it difficult for
                  them to achieve the American Dream and integrate into American
                  society.
                </p>
              </li>

              {/* Question 13 */}
              <li className="section-question">
                How did the Meiji Restoration influence Japanese attitudes
                toward the West?
                <p className="section-answer">
                  The Meiji Restoration led to a significant shift in Japanese
                  attitudes toward the West. The new Japanese government
                  encouraged its citizens to adopt Western ways of living and
                  seek opportunities abroad, particularly in the United States.
                </p>
              </li>

              {/* Question 14 */}
              <li className="section-question">
                What is the significance of Wakako Yamauchi's play *And the Soul
                Shall Dance*?
                <p className="section-answer">
                  Wakako Yamauchi's play *And the Soul Shall Dance* is
                  significant because it brings to light the struggles faced by
                  Japanese immigrants in California, particularly under the
                  Alien Land Law. The play provides a powerful insight into the
                  challenges of immigrant life and the search for identity.
                </p>
              </li>

              {/* Question 15 */}
              <li className="section-question">
                How has Asian American literature contributed to the
                understanding of immigrant experiences?
                <p className="section-answer">
                  Asian American literature has contributed significantly to the
                  understanding of immigrant experiences by exploring themes
                  such as the hardship of immigrant life, the struggle with
                  dominant White culture, and the acceptance or rejection of
                  Asian roots. Writers like Wakako Yamauchi have used their work
                  to shed light on the challenges faced by Asian immigrants and
                  their descendants.
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
