"use client";
import React, { useState } from "react";
import { DesktopNavigation, NavLink } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

interface NavigationProps {
  links: NavLink[];
}

export const Navigation: React.FC<NavigationProps> = ({ links }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
  const closeMobile = () => setIsMobileOpen(false);

  return (
    <>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <DesktopNavigation links={links} />
        <button className="md:hidden focus:outline-none" onClick={toggleMobile}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMobileOpen && <MobileNavigation links={links} onClose={closeMobile} />}
    </>
  );
};
