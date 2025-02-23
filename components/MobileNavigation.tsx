import React, { useEffect } from "react";
import { NavLink } from "./DesktopNavigation";

interface MobileNavigationProps {
  links: NavLink[];
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  links,
  onClose,
}) => {
  // Close menu on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      {/* Navigation Panel */}
      <div className="relative w-64 h-full bg-white p-4 overflow-y-auto transition-transform duration-300 transform translate-x-0">
        <button
          className="mb-4 focus:outline-none"
          onClick={onClose}
          aria-label="Close navigation"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav aria-label="Mobile Navigation">
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-blue-500 hover:underline block"
                  onClick={onClose}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
