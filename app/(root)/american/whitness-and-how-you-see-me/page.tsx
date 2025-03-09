import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";
import Link from "next/link";

export const metadata = {
  title: "What is Whitness? & How You See Me",
  description: "A page dedicated to What is Whitness? & How You See Me",
};

export default function WhitnessAndHowYouSeeMe() {
  const navLinks: NavLink[] = [
    { href: "#whitness", label: "What is Whitness?" },
    { href: "#how-you-see", label: "How You See Me" },
  ];

  return (
    <main className="page-container">
      <div className="content-layout">
        <aside className="sidebar">
          <Navigation links={navLinks} />
        </aside>

        <div className="main-content">
          <PageTitle title="What is Whitness? + How You See Me" />

          <section className="section-content">
            <div className="box-preview">
              <h2 className="section-title">
                A Conversation With White People on Race
              </h2>
              <p className="section-paragraph">
                An insightful opinion piece featuring candid conversations that
                explore race, privilege, and identity in America. The article
                challenges preconceptions and invites readers to reflect on the
                complex dynamics of modern society.
              </p>
              <Link
                href="https://www.nytimes.com/2015/07/01/opinion/a-conversation-with-white-people-on-race.html?bgrp=g&smid=url-share"
                target="_blank"
                rel="noopener noreferrer"
                className="box-link"
              >
                View Article
              </Link>
            </div>
          </section>

          {/* YouTube Embed Section */}
          <section id="youtube" className="youtube-section">
            <h2 className="section-title">How You See Me</h2>
            <div className="video-container">
              <div className="video-container-2">
                <iframe
                  src="https://www.youtube.com/embed/FO6DADHDPQw?si=4dVB751yj6EGkDxW"
                  title="How You See Me"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-frame"
                ></iframe>
              </div>
            </div>
          </section>
        </div>

        <aside className="right-sidebar"></aside>
      </div>
    </main>
  );
}
