import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "The Main and the Margin: Testimonies from Lebanese Women Researchers",
  description:
    "A page based on the testimonies of Lebanese women researchers exploring marginalization and exclusion in academic, intellectual, and cultural fields.",
};

export default function TheMainAndTheMargin() {
  const navLinks: NavLink[] = [
    { href: "#pdf", label: "Article PDF" },
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
            title="The Main and the Margin: Testimonies from Lebanese Women Researchers"
            author="Fadia Hoteit and Azza Charara Baydoun"
          />

          {/* Article PDF */}
          <section id="passing" className="section-content">
            <h2 className="section-title">Article</h2>
            <div className="pdf-container">
              <iframe
                src="https://drive.google.com/file/d/130aFeY54-7fS0ZuQ8HmyPfz6JN16-zT1/preview"
                frameBorder="0"
                allow="autoplay"
                className="pdf-frame"
              ></iframe>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="section-content">
            <h2 className="section-title">Overview</h2>
            <div className="section-block">
              <p className="section-paragraph">
                The text titled "The Main and the Margin: Testimonies from
                Lebanese Women Researchers" by Fadia Hoteit and Azza Charara
                Baydoun explores the experiences of marginalization and
                exclusion faced by women, particularly those working in
                academic, intellectual, and cultural fields in Lebanon. The
                authors delve into how these women navigate their identities,
                professional roles, and societal expectations in a predominantly
                patriarchal society.
              </p>

              <p className="section-subtitle">
                Marginalization in Patriarchal Societies
              </p>
              <p className="section-paragraph">
                The text begins by highlighting the pervasive nature of
                marginalization in patriarchal societies, where women,
                especially those in intellectual and academic fields, face
                various forms of exclusion. The authors argue that this
                marginalization is not always overt but often hidden and
                requires a shift in perspective to be fully understood.
              </p>

              <p className="section-subtitle">Sources of Marginalization</p>
              <p className="section-paragraph">
                The text identifies multiple sources of marginalization,
                including psychological and collective unconscious, gender
                expression, political and social reality, and sociological
                status. These sources contribute to the exclusion of women from
                mainstream societal and professional spaces.
              </p>

              <p className="section-subtitle">
                Academic and Intellectual Marginalization
              </p>
              <p className="section-paragraph">
                Women in academia face marginalization through the reinforcement
                of male-dominated research mechanisms that place women's
                intellectual contributions on the periphery. The lack of
                recognition for feminist research and topics related to women's
                personal lives further exacerbates this marginalization.
              </p>

              <p className="section-subtitle">
                Strategies for Confronting Marginalization
              </p>
              <p className="section-paragraph">
                The text explores how some women choose marginalization as a
                form of resistance against mainstream societal norms. Others
                adopt strategies such as excelling in their fields, redefining
                their identities, and seeking recognition through alternative
                means.
              </p>

              <p className="section-subtitle">Personal Testimonies</p>
              <p className="section-paragraph">
                The text includes personal testimonies from the participants,
                who share their experiences of marginalization in various
                aspects of their lives, including family, academia, and society.
                These testimonies provide a nuanced understanding of how
                marginalization manifests differently for each individual.
              </p>
            </div>
          </section>

          {/* Analysis Section */}
          <section id="analysis" className="section-content">
            <h2 className="section-title">Analysis</h2>
            <div className="section-block">
              <p className="section-subtitle">
                1. Marginalization in Patriarchal Societies
              </p>
              <p className="section-paragraph">
                The text begins by highlighting the pervasive nature of
                marginalization in patriarchal societies, where women,
                especially those in intellectual and academic fields, face
                various forms of exclusion. The authors argue that this
                marginalization is not always overt but often hidden and
                requires a shift in perspective to be fully understood. They
                emphasize the need for a more equitable approach that considers
                women's specific interests and long-term goals in organizing
                their lives and human interactions.
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "The hidden and elusive form of marginalization requires a
                  change in perspective, one that is more just and takes into
                  account their specific interests and long-term goals in
                  organizing their lives and human interactions."
                </em>
              </p>

              <p className="section-subtitle">2. Sources of Marginalization</p>
              <p className="section-paragraph">
                The text identifies multiple sources of marginalization,
                including:
              </p>
              <ul className="section-list !list-disc !mb-6 !lg:mb-8">
                <li className="section-paragraph">
                  Psychological and Collective Unconscious: The internalization
                  of societal norms that perpetuate the marginalization of
                  women. For example, the text discusses how women often
                  internalize societal expectations that limit their roles to
                  familial duties, such as being a wife, mother, or sister,
                  rather than as independent professionals.
                </li>
                <li className="section-paragraph">
                  Gender Expression: The lack of recognition and equality in
                  professional settings, where women are often not seen as
                  equals by their male colleagues. One participant shared,
                </li>
                <p className="section-quote">
                  Quote:
                  <em className="section-quote-em">
                    "I felt marginalized in the college because there was
                    discrimination in the department between male and female
                    professors."
                  </em>
                </p>
                <li className="section-paragraph">
                  Political and Social Reality: The influence of nepotism,
                  sectarianism, and favoritism in Lebanese society, which
                  marginalizes those who do not conform to these systems. For
                  instance, a participant noted,
                </li>
                <p className="section-quote">
                  Quote:
                  <em className="section-quote-em">
                    "The Lebanese society, based on favoritism and sectarianism,
                    does not provide a fair academic field. Here, I feel
                    marginalized like many other academics."
                  </em>
                </p>
                <li className="section-paragraph">
                  Sociological Status: Marginalization based on social,
                  regional, or familial backgrounds, such as being from a
                  marginalized region or family. One researcher shared,
                </li>
                <p className="section-quote">
                  Quote:
                  <em className="section-quote-em">
                    "I come from the South, a marginalized region, and I always
                    had to work harder to assert my individuality."
                  </em>
                </p>
              </ul>

              <p className="section-subtitle">
                3. Academic and Intellectual Marginalization
              </p>
              <p className="section-paragraph">
                The text discusses how women in academia face marginalization
                through the reinforcement of male-dominated research mechanisms
                that place women's intellectual contributions on the periphery.
                The authors highlight the lack of recognition for feminist
                research and topics related to women's personal lives, such as
                studies on the body, dance, and drama. One participant expressed
                frustration, stating,
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Feminist research and topics related to women's personal
                  lives are not recognized as legitimate fields of study. My
                  research on women's issues remains outside the mainstream
                  discourse."
                </em>
              </p>

              <p className="section-paragraph">
                Additionally, the text points out that women researchers often
                face challenges in gaining recognition for their work,
                especially when it deviates from traditional, male-dominated
                fields. For example, one researcher noted,
              </p>

              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "When I chose to work in social medicine instead of clinical
                  practice, I faced rejection and skepticism from my peers."
                </em>
              </p>

              <p className="section-subtitle">
                4. Strategies for Confronting Marginalization
              </p>
              <p className="section-paragraph">
                The text explores how some women choose marginalization as a
                form of resistance against mainstream societal norms. Others
                adopt strategies such as excelling in their fields, redefining
                their identities, and seeking recognition through alternative
                means. For example, one participant shared,
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "I chose to be marginalized because I refused to conform to
                  the mainstream. I am proud of my marginal position."
                </em>
              </p>
              <p className="section-paragraph">
                Another strategy discussed is the use of collective action, such
                as the **"Lebanese Women Researchers' Collective"**, which
                provides a platform for women to share their experiences and
                support each other. One participant noted,
              </p>

              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Through the collective, I discovered new ideas and
                  perspectives that were crucial for my academic and
                  professional growth."
                </em>
              </p>

              <p className="section-subtitle">5. Personal Testimonies</p>
              <p className="section-paragraph">
                The text includes personal testimonies from the participants,
                who share their experiences of marginalization in various
                aspects of their lives, including family, academia, and society.
                These testimonies provide a nuanced understanding of how
                marginalization manifests differently for each individual. For
                example, one researcher shared,
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "I felt marginalized in my family because I was a girl and not
                  a boy. This discrimination was something I noticed early on."
                </em>
              </p>

              <p className="section-paragraph">
                Another participant discussed the challenges of balancing
                familial expectations with professional aspirations, stating,
              </p>

              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Being a researcher is not considered part of my identity by
                  people around me, whether in my family, social circle, or even
                  professional environment."
                </em>
              </p>

              <p className="section-subtitle">
                6. The Role of Language and Identity
              </p>
              <p className="section-paragraph">
                Language plays a significant role in the marginalization of
                women, particularly in a multilingual society like Lebanon. The
                text discusses how women who are more proficient in French or
                English may feel marginalized in Arabic-speaking academic
                environments, and vice versa. One participant shared,
              </p>

              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "The linguistic marginalization I experienced was due to my
                  upbringing in a Francophone environment, while the academic
                  world around me was predominantly Arabic-speaking."
                </em>
              </p>

              <p className="section-paragraph">
                This linguistic divide often leads to feelings of exclusion and
                challenges in asserting one's identity in academic and
                professional settings.
              </p>

              <p className="section-subtitle">
                7. The Intersection of Gender and Profession
              </p>
              <p className="section-paragraph">
                The text highlights how women's professional identities are
                often overshadowed by their gender. For example, women
                researchers are frequently seen through the lens of their
                familial roles (e.g., wife, mother) rather than as independent
                professionals. One participant noted,
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Being a researcher is not considered part of my identity by
                  people around me, whether in my family, social circle, or even
                  professional environment."
                </em>
              </p>
              <p className="section-paragraph">
                This intersection of gender and profession creates additional
                barriers for women in academia, as they must constantly navigate
                societal expectations while striving to establish themselves as
                professionals.
              </p>

              <p className="section-subtitle">
                8. The Collective as a Space for Empowerment
              </p>
              <p className="section-paragraph">
                The **"Lebanese Women Researchers' Collective"** is portrayed as
                a crucial space for women to share their experiences, challenge
                societal norms, and support each other in their professional and
                personal journeys. The collective provides a platform for women
                to redefine their identities and assert their presence in
                academic and intellectual fields. One participant shared,
              </p>
              <p className="section-quote">
                Quote:
                <em className="section-quote-em">
                  "Through the collective, I discovered new ideas and
                  perspectives that were crucial for my academic and
                  professional growth."
                </em>
              </p>
              <p className="section-paragraph">
                The collective also serves as a space for women to address the
                challenges of marginalization collectively, rather than
                individually, fostering a sense of solidarity and empowerment.
              </p>

              <p className="section-subtitle">Conclusion</p>
              <p className="section-paragraph">
                The text provides a comprehensive exploration of the various
                forms of marginalization faced by Lebanese women researchers. It
                highlights the intersection of gender, language, and
                professional identity in shaping these experiences. The personal
                testimonies and collective discussions offer valuable insights
                into the strategies women employ to confront and overcome
                marginalization, emphasizing the importance of solidarity and
                collective action.
              </p>
            </div>
          </section>

          {/* Q&A Section */}
          <section id="qna" className="section-content">
            <h2 className="section-title">Questions & Answers</h2>
            <ol className="section-list">
              <li className="section-question">
                What is the main focus of the text?
                <p className="section-answer">
                  The text focuses on the experiences of marginalization and
                  exclusion faced by Lebanese women researchers, particularly in
                  academic, intellectual, and cultural fields. It explores how
                  these women navigate their identities, professional roles, and
                  societal expectations in a predominantly patriarchal society.
                  The authors argue that marginalization is not always overt but
                  often hidden, requiring a shift in perspective to fully
                  understand its impact.
                </p>
              </li>

              <li className="section-question">
                What are the sources of marginalization discussed in the text?
                <p className="section-answer">
                  The text identifies multiple sources of marginalization,
                  including:
                </p>
                <ul className="section-list !list-disc">
                  <li className="section-answer">
                    Psychological and Collective Unconscious: The
                    internalization of societal norms that perpetuate the
                    marginalization of women. For example, women often
                    internalize societal expectations that limit their roles to
                    familial duties, such as being a wife, mother, or sister,
                    rather than as independent professionals.
                  </li>
                  <li className="section-answer">
                    Gender Expression: The lack of recognition and equality in
                    professional settings, where women are often not seen as
                    equals by their male colleagues. One participant shared,
                    <em>
                      "I felt marginalized in the college because there was
                      discrimination in the department between male and female
                      professors."
                    </em>
                  </li>
                  <li className="section-answer">
                    Political and Social Reality: The influence of nepotism,
                    sectarianism, and favoritism in Lebanese society, which
                    marginalizes those who do not conform to these systems. A
                    participant noted,
                    <em>
                      "The Lebanese society, based on favoritism and
                      sectarianism, does not provide a fair academic field.
                      Here, I feel marginalized like many other academics."
                    </em>
                  </li>
                  <li className="section-answer">
                    Sociological Status: Marginalization based on social,
                    regional, or familial backgrounds, such as being from a
                    marginalized region or family. One researcher shared,
                    <em>
                      "I come from the South, a marginalized region, and I
                      always had to work harder to assert my individuality."
                    </em>
                  </li>
                </ul>
              </li>

              <li className="section-question">
                How does the text describe the role of the "Lebanese Women
                Researchers' Collective"?
                <p className="section-answer">
                  The **"Lebanese Women Researchers' Collective"** is described
                  as a crucial space for women to share their experiences,
                  challenge societal norms, and support each other in overcoming
                  marginalization. The collective provides a platform for women
                  to redefine their identities and assert their presence in
                  academic and intellectual fields. One participant noted,
                  <em>
                    "Through the collective, I discovered new ideas and
                    perspectives that were crucial for my academic and
                    professional growth."
                  </em>
                  The collective also serves as a space for women to address the
                  challenges of marginalization collectively, fostering a sense
                  of solidarity and empowerment.
                </p>
              </li>

              <li className="section-question">
                What is the significance of language in the marginalization of
                women, according to the text?
                <p className="section-answer">
                  Language plays a significant role in the marginalization of
                  women, particularly in a multilingual society like Lebanon.
                  The text discusses how women who are more proficient in French
                  or English may feel marginalized in Arabic-speaking academic
                  environments, and vice versa. One participant shared,
                  <em>
                    "The linguistic marginalization I experienced was due to my
                    upbringing in a Francophone environment, while the academic
                    world around me was predominantly Arabic-speaking."
                  </em>
                  This linguistic divide often leads to feelings of exclusion
                  and challenges in asserting one's identity in academic and
                  professional settings.
                </p>
              </li>

              <li className="section-question">
                How do some women choose to confront marginalization, according
                to the text?
                <p className="section-answer">
                  Some women choose marginalization as a form of resistance
                  against mainstream societal norms. Others adopt strategies
                  such as excelling in their fields, redefining their
                  identities, and seeking recognition through alternative means.
                  For example, one participant shared,
                  <em>
                    "I chose to be marginalized because I refused to conform to
                    the mainstream. I am proud of my marginal position."
                  </em>
                  Another strategy discussed is the use of collective action,
                  such as the **"Lebanese Women Researchers' Collective"**,
                  which provides a platform for women to share their experiences
                  and support each other.
                </p>
              </li>

              <li className="section-question">
                What is the role of gender in the professional identities of
                women researchers, as discussed in the text?
                <p className="section-answer">
                  The text highlights how women's professional identities are
                  often overshadowed by their gender. Women researchers are
                  frequently seen through the lens of their familial roles
                  (e.g., wife, mother) rather than as independent professionals.
                  One participant noted,
                  <em>
                    "Being a researcher is not considered part of my identity by
                    people around me, whether in my family, social circle, or
                    even professional environment."
                  </em>
                  This intersection of gender and profession creates additional
                  barriers for women in academia, as they must constantly
                  navigate societal expectations while striving to establish
                  themselves as professionals.
                </p>
              </li>

              <li className="section-question">
                What does the text say about the intersection of gender and
                profession?
                <p className="section-answer">
                  The text emphasizes that women's professional identities are
                  often overshadowed by their gender. Women researchers are
                  frequently seen through the lens of their familial roles
                  (e.g., wife, mother) rather than as independent professionals.
                  This creates additional barriers for women in academia, as
                  they must constantly navigate societal expectations while
                  striving to establish themselves as professionals. One
                  participant shared,"Being a researcher is not considered part
                  of my identity by people around me, whether in my family,
                  social circle, or even professional environment."
                </p>
              </li>
              <li className="section-question">
                How does the text describe the impact of political and social
                realities on marginalization?
                <p className="section-answer">
                  The text discusses how nepotism, sectarianism, and favoritism
                  in Lebanese society marginalize those who do not conform to
                  these systems, particularly women in academic and intellectual
                  fields. One participant noted,"The Lebanese society, based on
                  favoritism and sectarianism, does not provide a fair academic
                  field. Here, I feel marginalized like many other
                  academics."These political and social realities create an
                  environment where women must work harder to gain recognition
                  and overcome systemic barriers.
                </p>
              </li>
              <li className="section-question">
                What are some examples of marginalization based on sociological
                status, as mentioned in the text?
                <p className="section-answer">
                  Marginalization based on sociological status includes being
                  from a marginalized region or family, such as the South of
                  Lebanon or a family with limited electoral influence. One
                  researcher shared,"I come from the South, a marginalized
                  region, and I always had to work harder to assert my
                  individuality."This sociological marginalization often
                  intersects with other forms of exclusion, such as gender and
                  professional identity, creating additional challenges for
                  women researchers.
                </p>
              </li>
              <li className="section-question">
                How does the text describe the marginalization of feminist
                research?
                <p className="section-answer">
                  The text describes how feminist research and topics related to
                  women's personal lives, such as studies on the body, dance,
                  and drama, are often marginalized and not recognized as
                  legitimate fields of study. One participant expressed
                  frustration, stating,"Feminist research and topics related to
                  women's personal lives are not recognized as legitimate fields
                  of study. My research on women's issues remains outside the
                  mainstream discourse."This marginalization of feminist
                  research reflects broader societal attitudes that devalue
                  women's contributions to academia and intellectual discourse.
                </p>
              </li>
              <li className="section-question">
                What is the significance of personal testimonies in the text?
                <p className="section-answer">
                  The personal testimonies provide a nuanced understanding of
                  how marginalization manifests differently for each individual,
                  offering valuable insights into the diverse experiences of
                  Lebanese women researchers. These testimonies highlight the
                  intersection of gender, language, and professional identity in
                  shaping women's experiences of exclusion. For example, one
                  researcher shared,"I felt marginalized in my family because I
                  was a girl and not a boy. This discrimination was something I
                  noticed early on."
                </p>
              </li>
              <li className="section-question">
                How does the text describe the role of the collective in
                empowering women researchers?
                <p className="section-answer">
                  The **"Lebanese Women Researchers' Collective"** is portrayed
                  as a crucial space for women to share their experiences,
                  challenge societal norms, and support each other in their
                  professional and personal journeys. The collective provides a
                  platform for women to redefine their identities and assert
                  their presence in academic and intellectual fields. One
                  participant noted,"Through the collective, I discovered new
                  ideas and perspectives that were crucial for my academic and
                  professional growth."The collective also serves as a space for
                  women to address the challenges of marginalization
                  collectively, fostering a sense of solidarity and empowerment.
                </p>
              </li>
              <li className="section-question">
                What does the text say about the intersection of language and
                identity in marginalization?
                <p className="section-answer">
                  The text discusses how language proficiency can lead to
                  marginalization, particularly in a multilingual society like
                  Lebanon, where women may feel excluded based on their
                  linguistic abilities. One participant shared,"The linguistic
                  marginalization I experienced was due to my upbringing in a
                  Francophone environment, while the academic world around me
                  was predominantly Arabic-speaking."This linguistic divide
                  often leads to feelings of exclusion and challenges in
                  asserting one's identity in academic and professional
                  settings.
                </p>
              </li>
              <li className="section-question">
                How does the text describe the impact of societal expectations
                on women researchers?
                <p className="section-answer">
                  The text highlights how societal expectations, particularly
                  those related to familial roles, can overshadow women's
                  professional identities and contribute to their
                  marginalization. One participant noted,"Being a researcher is
                  not considered part of my identity by people around me,
                  whether in my family, social circle, or even professional
                  environment."These societal expectations create additional
                  barriers for women in academia, as they must constantly
                  navigate conflicting roles and responsibilities.
                </p>
              </li>
              <li className="section-question">
                What is the overall message of the text regarding
                marginalization and women researchers?
                <p className="section-answer">
                  The overall message is that marginalization is a pervasive
                  issue for Lebanese women researchers, but through collective
                  action and redefining their identities, they can confront and
                  overcome these challenges. The text emphasizes the importance
                  of solidarity and collective action in addressing the systemic
                  barriers faced by women in academia and intellectual fields.
                  One participant shared,"Through the collective, I discovered
                  new ideas and perspectives that were crucial for my academic
                  and professional growth."The text ultimately calls for a more
                  equitable approach that considers women's specific interests
                  and long-term goals in organizing their lives and human
                  interactions.
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
