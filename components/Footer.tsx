// components/Footer.tsx
import React from "react";

interface FooterProps {
  copyright?: string;
}

export const Footer: React.FC<FooterProps> = ({ copyright }) => {
  return (
    <footer className="bg-white shadow mt-12">
      <div className="container mx-auto px-4 py-4 text-center text-gray-600">
        {copyright ? (
          <span>{copyright}</span>
        ) : (
          <span>
            © {new Date().getFullYear()} Everyday Forms of Resistance.
          </span>
        )}
      </div>
    </footer>
  );
};
