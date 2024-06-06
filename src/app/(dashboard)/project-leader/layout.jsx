"use client";
import { useState } from "react";
import NavbarComponent from "@/components/NavbarComponent";
import Sidebar from "./_components/Sidebar";

export default function EmployeeDashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-white">
      <aside className={`fixed top-0 left-0 h-full transition-transform duration-300 ${isSidebarOpen ? "transform-none" : "-translate-x-full"} md:transform-none md:translate-x-0 z-50 w-[280px]`}>
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </aside>
      <div className="flex-1 w-full md:ml-[240px]">
        <NavbarComponent toggleSidebar={toggleSidebar} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
