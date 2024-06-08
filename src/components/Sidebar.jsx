"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import CreateProject from "@/components/CreateProject";
import PopUpLogoutComponent from "@/components/PopUpLogoutComponent";
import langnet from "../../public/Images/langnet3.jpg"
import Image from "next/image";

const Sidebar = ({ isSidebarOpen }) => {
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const [isLogoutPopupVisible, setIsLogoutPopupVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNewProjectClick = () => {
    setIsCreateProjectOpen(!isCreateProjectOpen);
  };

  const handleLogoutClick = () => {
    setIsLogoutPopupVisible(true);
  };

  const handleLogoutConfirm = () => {
    // Perform logout functionality here
    console.log("User confirmed logout");
    setIsLogoutPopupVisible(false);
    router.push("/login");
  };

  const handleLogoutCancel = () => {
    console.log("User canceled logout");
    setIsLogoutPopupVisible(false);
  };

  return (
    <>
      <div
        className={`h-full md:items-center -z-40 flex-col lg:bg-blue-800 md:bg-white sm:bg-white w-[15rem] absolute ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex sm:w-full md:w-full h-full lg:w-full flex-col bg-blue-800">
          <div className="flex items-center justify-center h-30 bg-blue-800 sm:hidden md:block lg:block mx-auto ">
            <Image  
            src={langnet}
            />
                            
          </div>

          <div className="flex flex-col sm:mt-[9.7rem] md:mt-3 lg:mt-3">
            <nav className="flex flex-col items-center sm:space-y-[5rem] xl:space-y-[10rem] lg:space-y-[5rem] md:space-y-[5rem]">
              <div className="flex flex-col space-y-1">
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
                  className={`hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl mt-1 flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                    pathname === "/employee/dashboard"
                      ? "text-gray-100 bg-gradient-to-r from-blue-500 to-green-500"
                      : "text-gray-100"
                  }`}
                >
                  <DashboardCustomizeOutlinedIcon />
                  <p>Dashboard</p>
                </Link>
                <Link
                  href="/employee/profile"
                  className={`hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                    pathname === "/employee/profile"
                      ? "text-gray-100 bg-gradient-to-r from-blue-500 to-green-500"
                      : "text-gray-100"
                  }`}
                >
                  <AccountBoxOutlinedIcon />
                  <p>Profile</p>
                </Link>
                <Link
                  href="/employee/calendar"
                  className={`hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                    pathname === "/employee/calendar"
                      ? "text-gray-100 bg-gradient-to-r from-blue-500 to-green-500"
                      : "text-gray-100"
                  }`}
                >
                  <CalendarMonthOutlinedIcon />
                  <p>Calendar</p>
                </Link>
                <Link
                  href="/employee/project-card"
                  className={`hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                    pathname === "/employee/project-card"
                      ? "text-gray-100 bg-gradient-to-r from-blue-500 to-green-500"
                      : "text-gray-100"
                  }`}
                >
                  <PieChartOutlinedIcon />
                  <p>Project</p>
                </Link>
              </div>

              <div className="-ml-1 w-[10rem] flex flex-col items-center space-y-1">
                <Link
                  href="/employee/setting"
                  className={`hover:bg-gray-400 w-[10.5rem] hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                    pathname === "/employee/setting"
                      ? "text-gray-100 bg-gradient-to-r from-blue-500 to-green-500"
                      : "text-gray-100"
                  }`}
                >
                  <SettingsOutlinedIcon />
                  <p>Setting</p>
                </Link>

                <button
                  type="button"
                  className={`hover:bg-gray-400 w-[10.5rem] hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 text-gray-100`}
                  onClick={handleLogoutClick}
                >
                  <ExitToAppOutlinedIcon />
                  <p>Logout</p>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {isCreateProjectOpen && <CreateProject onClose={handleNewProjectClick} />}
      {isLogoutPopupVisible && (
        <PopUpLogoutComponent
          onConfirm={handleLogoutConfirm}
          onCancel={handleLogoutCancel}
        />
      )}
    </>
  );
};

export default Sidebar;
