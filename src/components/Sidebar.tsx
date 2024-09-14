import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <header
      className={`flex md:flex-col w-full justify-between md:justify-center items-center gap-10 text-center p-4 bg-blue-600 text-white ${className}`}
    >
      <div className="text-xl md:text-3xl text-bold">Taiyo</div>
      <nav>
        <ul className="flex md:flex-col gap-4 justify-between text-base md:text-xl">
          <li>
            <Link to="/dashboard">Charts and Maps</Link>
          </li>
          <li>
            <Link to="/">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
