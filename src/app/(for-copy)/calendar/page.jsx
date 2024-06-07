import CalendarComponent from "@/components/CalendarComponent";
import NavbarComponent from "@/components/NavbarComponent";
import Sidebar from "@/components/SidebarComponent";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";

const CalendarPage = () => {
  return (
    <div class="flex h-screen bg-gray-100">
      {/* sidebar */}
      <Sidebar />

      {/* Main content */}
      <div class="flex flex-col flex-1 overflow-y-auto no-scrollbar">
        <NavbarComponent />

        <div class="p-4">
          <h1 class="text-2xl font-bold">Welcome to my dashboard!</h1>
          <p class="mt-2 text-gray-600">
            This is an example dashboard using Tailwind CSS.
          </p>
          <div className="container h-[150vh] bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
