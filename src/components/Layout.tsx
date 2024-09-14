import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // Import the Sidebar component

const Layout: React.FC = () => {
  return (
    <div className="grid md:grid-cols-12">
      {/* Sidebar  */}
      <Sidebar className="md:col-span-2 md:h-[100vh] md:fixed md:max-w-[300px]" />

      {/* Content */}
      <div className="md:col-span-10 md:ml-[300px] md:w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
