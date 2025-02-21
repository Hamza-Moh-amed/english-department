// components/MobileNavigation.tsx
import React from "react";
import { NavLink } from "./DesktopNavigation";

interface MobileNavigationProps {
  links: NavLink[];
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  links,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="absolute top-0 left-0 w-64 h-full bg-white p-4">
        <button className="mb-4 focus:outline-none" onClick={onClose}>
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
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-blue-500 hover:underline"
                onClick={onClose}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
