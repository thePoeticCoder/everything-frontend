import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-20 p-2 bg-gray-800 text-white rounded-md"
      >
        ☰
      </button>

      <aside
        className={`fixed top-0 left-0 h-full bg-gray-700 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-10`}
      >
        <nav className="flex flex-col p-4">
          <a href="#" className="py-2">
            Home
          </a>
          <a href="#" className="py-2">
            About
          </a>
          <a href="#" className="py-2">
            Contact
          </a>
        </nav>
      </aside>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-10"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
