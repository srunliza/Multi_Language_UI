import Link from "next/link";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { redirect } from "next/navigation";

const Sidebar = () => {
  return (
    <div className="hidden md:flex h-full md:items-center gap-4 flex-col bg-blue-800 ">
      <div className="flex items-center justify-center h-30">
        <img
          className="w-[150px] mb-6"
          src="../assets/images/logo1.png"
          alt="multi logo"
        />
      </div>
      <div className="flex flex-col flex-1 ">
        <nav className="flex-1">
          <div>
            <button
              type="button"
              className="ml-1 mt-1 gap-1 px-5 py-3 text-base font-medium text-blue-800 inline-flex items-center bg-white rounded-t-lg rounded-br-lg text-center  "
              onClick={redirect('/create-project')}
            >
              <AddToPhotosOutlinedIcon />
              New Project
            </button>
            <Link
              href="/project-leader/upload-file"
              className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl  flex items-center px-6 py-4 mt-2 text-gray-100  gap-2  font-light-[16px]"
            >
              <DashboardCustomizeOutlinedIcon />
              <p>Dashboard</p>
            </Link>
            <Link
              href="/project-leader/profile"
              className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2 font-light-[16px]"
            >
              <AccountBoxOutlinedIcon />
              <p>Profile</p>
            </Link>
            <Link
              href="/project-leader/calendar"
              className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2  font-light-[16px]"
            >
              <CalendarMonthOutlinedIcon />
              <p>Calender</p>
            </Link>
            <Link
              href="/project-leader/project"
              className="hover:bg-gray-400 hover:bg-opacity-25  rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2  font-light-[16px]"
            >
              <PieChartOutlinedIcon />
              <p>Project</p>
            </Link>
          </div>
        </nav>
        <div className="mb-[10px] px-2">
          <Link
            href="/project-leader/setting"
            className=" hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2  font-light-[16px]"
          >
            <SettingsOutlinedIcon />
            <p>Setting</p>
          </Link>
          <Link
            href="#"
            className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2  font-light-[16px]"
          >
            <ExitToAppOutlinedIcon />
            <p> Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
