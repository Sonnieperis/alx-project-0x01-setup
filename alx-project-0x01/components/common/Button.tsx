import React from "react";

type ButtonProps = {
  title: string;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
