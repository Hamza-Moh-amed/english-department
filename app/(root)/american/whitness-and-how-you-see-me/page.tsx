import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { NavLink } from "@/components/DesktopNavigation";
import { PageTitle } from "@/components/PageTitle";
import Link from "next/link";

export const metadata = {
  title: "What is Whitness? & How You See Me",
  description: "A page dedicated to What is Whitness? & How You See Me",
};

export default function MicCheck() {
  const navLinks: NavLink[] = [
    { href: "#whitness", label: "What is Whitness?" },
    { href: "#youtube", label: "How You See Me" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* For medium screens and up: show Navigation on the left and PageTitle centered */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left: Navigation */}
          <div className="flex-none">
            <Navigation links={navLinks} />
          </div>
          {/* Center: PageTitle */}
          <div className="flex-grow text-center">
            <PageTitle title="What is Whitness? + How You See Me" />
          </div>
          {/* Right: Empty div to balance the left column */}
          <div className="flex-none w-24" />
        </div>
        {/* For mobile: stack Navigation and PageTitle */}
        <div className="md:hidden space-y-4">
          <Navigation links={navLinks} />
          <PageTitle title="What is Whitness? + How You See Me" />
        </div>
      </div>
      {/* Body Content */}
      <div
        id="whitness"
        className="container mx-auto px-4 py-8 space-y-4 md:space-y-12 max-w-full sm:max-w-[600px] md:max-w-[800px]"
      >
        <div className="nyt-preview p-6 border border-gray-200 rounded-lg shadow-md space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">
            A Conversation With White People on Race
          </h2>
          <p className="text-gray-600">
            An insightful opinion piece featuring candid conversations that
            explore race, privilege, and identity in America. The article
            challenges preconceptions and invites readers to reflect on the
            complex dynamics of modern society.
          </p>
          <Link
            href="https://www.nytimes.com/2015/07/01/opinion/a-conversation-with-white-people-on-race.html?bgrp=g&smid=url-share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 hover:underline font-medium"
          >
            View Article
          </Link>
        </div>

        {/* YouTube Embed Section */}
        <section id="youtube" className="space-y-8">
          <h2 className="text-2xl font-semibold text-left">How You See Me</h2>
          <div className="flex justify-center">
            <div className="max-w-4xl w-[600px] h-[360px] lg:w-[800px] lg:h-[400px]">
              <iframe
                src="https://www.youtube.com/embed/FO6DADHDPQw?si=4dVB751yj6EGkDxW"
                title="Mic Check by Suheir Hammad"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
