import NavbarComponent from "@/components/NavbarComponent";
import Sidebar from "./_components/Sidebar";

export default function DeveloperDashboardLayout({ children }) {
  return (
    <div className="bg-white grid grid-cols-12 w-full h-screen grid-rows-12">
      <div className="col-span-2 row-span-12 w-[14rem]">
        <Sidebar />
      </div>
      <div className="col-span-10 row-span-1">
        <NavbarComponent />
      </div>
      <div className="col-span-10 overflow-hidden row-span-12 rounded-md w-full h-full  pr-5">
        <div className="shadow-2xl w-full h-full  rounded-md">{children}</div>
      </div>
    </div>
  );
}
