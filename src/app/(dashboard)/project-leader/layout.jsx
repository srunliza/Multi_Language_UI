import NavbarComponent from "@/components/NavbarComponent";
import Sidebar from "./_components/Sidebar";
import AddMemberModal from "@/components/AddMemberModal";

export default function DeveloperDashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12 w-full h-screen grid-rows-12">
      <div className="bg-red-500 col-span-2 row-span-12">
        <Sidebar />
      </div>
      <div className="bg-slate-500 col-span-10 row-span-1">
        <NavbarComponent />
      </div>
      <div className="col-span-10 row-span-11 rounded-md w-full h-full p-4">
        <div className="bg-white shadow-2xl w-full h-full rounded-md flex flex-col">
          <div className="flex justify-between items-center py-2 ml-5 mr-5">
            <h2 className="text-lg text-color-text-black">Project Name</h2>
            <AddMemberModal />
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
