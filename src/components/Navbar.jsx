import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800">
      <h1 className="text-2xl font-bold text-yellow-400">Battery Pass</h1>
      <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500">
        Register Battery
      </button>
    </nav>
  );
};

export default Navbar;
