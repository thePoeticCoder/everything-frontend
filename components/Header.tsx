import React from "react";
import Link from "next/link";

const Header = () => (
  <header className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
    <h1 className="text-xl ml-8">Everything</h1>
    <nav className="space-x-4">
      <Link href="/" passHref>
        <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded">
          Home
        </button>
      </Link>
      <Link href="/dashboard" passHref>
        <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded">
          Dashboard
        </button>
      </Link>
      <Link href="/profile" passHref>
        <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded">
          Profile
        </button>
      </Link>
      <Link href="/login" passHref>
        <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded">
          Login
        </button>
      </Link>
      <button className="bg-red-600 hover:bg-red-500 px-3 py-2 rounded">
        Logout
      </button>
    </nav>
  </header>
);

export default Header;
