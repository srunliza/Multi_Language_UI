"use client";
import Link from "next/link";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = new useRouter();

  return (
    <div className="hidden md:flex h-full md:items-center w-64 gap-4 flex-col bg-blue-900">
      <div className="flex items-center justify-center h-30">
        <Image
          className="w-[150px] mb-6"
          width={150}
          height={150}
          src="/assets/images/logo1.png"
          alt="multi logo"
        />
      </div>
      <div className="flex flex-col flex-1">
        <nav className="flex-1">
          <div>
            <button
              type="button"
              className="ml-1 mt-1 gap-1 px-5 py-3 text-base font-medium text-blue-800 inline-flex items-center bg-white rounded-t-lg rounded-br-lg text-center  "
              onClick={() => router.push("/employee/create-project")}
            >
              <AddToPhotosOutlinedIcon />
              New Project
            </button>
            <Link
              href="/employee"
              className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl  flex items-center px-6 py-4 mt-2 text-gray-100  gap-2  font-light-[16px]"
            >
              <DashboardCustomizeOutlinedIcon color="black" />
              <p className="text-gray-300">Dashboard</p>
            </Link>
            <Link
              href="/employee/profile"
              className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2 font-light-[16px]"
            >
              <AccountBoxOutlinedIcon />
              <p className="text-gray-300">Profile</p>
            </Link>
            <Link
              href="/employee/calendar"
              className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2  font-light-[16px]"
            >
              <CalendarMonthOutlinedIcon />
              <p className="text-gray-300">Calender</p>
            </Link>
            <Link
              href="/employee/project"
              className="hover:bg-gray-400 hover:bg-opacity-25  rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2  font-light-[16px]"
            >
              <PieChartOutlinedIcon />
              <p className="text-gray-300">Project</p>
            </Link>
          </div>
        </nav>
        <div className="mb-[10px] px-2">
          <Link
            href="/employee/setting"
            className=" hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 text-gray-100 gap-2  font-light-[16px]"
          >
            <SettingsOutlinedIcon />
            <p className="text-gray-300">Setting</p>
          </Link>
          <Link
            href="#"
            className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-3 text-gray-100 gap-2  font-light-[16px]"
          >
            <ExitToAppOutlinedIcon />
            <p className="text-gray-300">Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
