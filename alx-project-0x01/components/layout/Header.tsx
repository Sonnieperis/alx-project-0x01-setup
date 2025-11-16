import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full border-b py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-semibold">ALX Project</div>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/users">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
