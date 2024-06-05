"use client";
import { useState } from "react";
import Link from "next/link";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="md:flex h-screen md:items-center gap-4 flex-col lg:bg-blue-800 md:bg-white sm:bg-white z-50 absolute lg:w-[13.8rem]">
      <div
        className={`md:hidden px-4 py-2 ${
          isSidebarOpen ? "bg-blue-800 w-[13.8rem]" : "bg-white w-[5rem]"
        } `}
      >
        <button
          onClick={toggleSidebar}
          className={`text-black mt-2 rounded-md h-10 ${
            isSidebarOpen ? "text-white" : "text-black"
          } `}
        >
          <MenuIcon className="w-[4rem]" />
        </button>
      </div>

      <div
        className={`flex sm:w-full md:w-full h-full lg:w-full flex-col bg-blue-800 ${
          isSidebarOpen ? "block z-50" : "hidden"
        } md:block`}
      >
        <div className="flex items-center justify-center h-30 bg-blue-800 ">
          <img
            className={`w-[150px] mb-6`}
            src="/assets/images/logo1.png"
            alt="multi logo"
          />
        </div>
        <div className="flex flex-col flex-1 ml-6 ">
          <nav className="flex-1">
            <div>
              <button
                type="button"
                className="ml-1 mt-1 gap-1 px-5 py-3 text-base font-medium text-blue-800 inline-flex items-center bg-white rounded-t-lg rounded-br-lg text-center"
              >
                <AddToPhotosOutlinedIcon />
                New Project
              </button>
              <Link
                href="/employee"
                className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-4 text-gray-100 gap-2 font-light-[16px]"
              >
                <DashboardCustomizeOutlinedIcon />
                <p>Dashboard</p>
              </Link>
              <Link
                href="/employee/profile"
                className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 text-gray-100 gap-2 font-light-[16px]"
              >
                <AccountBoxOutlinedIcon />
                <p>Profile</p>
              </Link>
              <Link
                href="/employee/calendar"
                className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 text-gray-100 gap-2 font-light-[16px]"
              >
                <CalendarMonthOutlinedIcon />
                <p>Calendar</p>
              </Link>
              <Link
                href="/employee/project-card"
                className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 text-gray-100 gap-2 font-light-[16px]"
              >
                <PieChartOutlinedIcon />
                <p>Project</p>
              </Link>
            </div>
          </nav>
          <div className="mb-[10px] px-2">
            <Link
              href="/employee/setting"
              className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-[6rem] -ml-2 text-gray-100 gap-2 font-light-[16px]"
            >
              <SettingsOutlinedIcon />
              <p>Setting</p>
            </Link>
            <Link
              href="#"
              className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 -ml-2 text-gray-100 gap-2 font-light-[16px]"
            >
              <ExitToAppOutlinedIcon />
              <p>Logout</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
