import NavbarComponent from "@/components/NavbarComponent";
import Sidebar from "./_components/Sidebar";


export default function DeveloperDashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12 w-full h-screen grid-rows-12">
      <div className="bg-red-500 col-span-2 row-span-12">
        <Sidebar />
      </div>
      <div className="bg-slate-500 col-span-10 row-span-1">
        <NavbarComponent />
      </div>
      <div className="col-span-10 row-span-12 rounded-md w-full h-full p-4">
        <div className="bg-yellow-300 shadow-2xl w-full h-full rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
}
