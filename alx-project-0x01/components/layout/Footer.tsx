import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t py-4 px-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} ALX Project
    </footer>
  );
};

export default Footer;
