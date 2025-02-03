import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Welcome, Admin</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;