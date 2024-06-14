"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import CreateProject from "@/components/CreateProject";
import langnet from "../../public/Images/logo-v4-white.png";
import Image from "next/image";
import LogoutComponent from "./LogoutComponent";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const [isLogoutPopupVisible, setIsLogoutPopupVisible] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef(null);
  const createProjectRef = useRef(null);

  const handleNewProjectClick = () => {
    setIsCreateProjectOpen(!isCreateProjectOpen);
  };

  const handleLogoutClick = () => {
    setIsLogoutPopupVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        createProjectRef.current &&
        !createProjectRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsSidebarOpen]);

  return (
    <>
      <div
        ref={sidebarRef}
        className={`h-full md:items-center flex-col md:bg-white sm:bg-white w-[15rem] absolute ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex sm:w-full md:w-full h-full lg:w-full flex-col bg-blue-800">
          <div className="sm:hidden md:block lg:block mx-auto px-4 py-4">
            <Image src={langnet} className="h-[3.5rem]" alt="Langnet Logo" />
          </div>

          <div className="flex flex-col items-center justify-between h-screen pb-5">
            <div className="flex flex-col space-y-3 xl:mt-4 lg:mt-4 md:mt-4 sm:mt-[7rem]">
              <button
                type="button"
                className="gap-1 px-5 py-3 text-base font-medium text-blue-800 inline-flex items-center bg-white rounded-t-lg rounded-br-lg text-center"
                onClick={handleNewProjectClick}
              >
                <AddToPhotosOutlinedIcon />
                New Project
              </button>
              <Link
                href="/employee/dashboard"
                className={`hover:bg-gray-400 hover:bg-opacity-25 rounded-xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                  pathname === "/employee/dashboard"
                    ? "text-gray-100 bg-gray-400 bg-opacity-25"
                    : "text-gray-100"
                }`}
              >
                <DashboardCustomizeOutlinedIcon />
                <p>Dashboard</p>
              </Link>
              <Link
                href="/employee/profile"
                className={`hover:bg-gray-400 hover:bg-opacity-25 rounded-xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                  pathname === "/employee/profile"
                    ? "text-gray-100 bg-gray-400 bg-opacity-25"
                    : "text-gray-100"
                }`}
              >
                <AccountBoxOutlinedIcon />
                <p>Profile</p>
              </Link>
              <Link
                href="/employee/calendar"
                className={`hover:bg-gray-400 hover:bg-opacity-25 rounded-xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                  pathname === "/employee/calendar"
                    ? "text-gray-100 bg-gray-400 bg-opacity-25"
                    : "text-gray-100"
                }`}
              >
                <CalendarMonthOutlinedIcon />
                <p>Calendar</p>
              </Link>
              <Link
                href="/employee/project-card"
                className={`hover:bg-gray-400 hover:bg-opacity-25 rounded-xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                  pathname === "/employee/project-card" ||
                  pathname.startsWith("/project-leader/") ||
                  pathname.startsWith("/developer/") ||
                  pathname.startsWith("/translator/")
                    ? "text-gray-100 bg-gray-400 bg-opacity-25"
                    : "text-gray-100"
                }`}
              >
                <PieChartOutlinedIcon />
                <p>Project</p>
              </Link>
            </div>

            <div className="-ml-1 w-[10rem] flex flex-col space-y-3">
              <Link
                href="/employee/setting"
                className={`hover:bg-gray-400 w-[10.5rem] hover:bg-opacity-25 rounded-xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                  pathname === "/employee/setting"
                    ? "text-gray-100 bg-gray-400 bg-opacity-25"
                    : "text-gray-100"
                }`}
              >
                <SettingsOutlinedIcon />
                <p>Setting</p>
              </Link>

              <button
                type="button"
                className={`hover:bg-gray-400 w-[10.5rem] hover:bg-opacity-25 rounded-xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 text-gray-100`}
                onClick={handleLogoutClick}
              >
                <ExitToAppOutlinedIcon />
                <LogoutComponent />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isCreateProjectOpen && (
        <div ref={createProjectRef}>
          <CreateProject onClose={handleNewProjectClick} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
