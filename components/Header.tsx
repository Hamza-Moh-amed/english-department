import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center ">
        <Link href="/" className="text-3xl font-bold">
          English Department
        </Link>
        <div></div>
      </div>
    </header>
  );
};
