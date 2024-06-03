import NavbarComponent from "@/components/NavbarComponent";
import Sidebar from "./_components/Sidebar";
import AddMemberModal from "@/components/AddMemberModal";

export default function DeveloperDashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-[280px] fixed top-0 left-0 h-full">
        <Sidebar />
      </aside>
      <div className="flex-1 ml-[280px] flex flex-col h-full">
        <div className="flex-none">
          <NavbarComponent />
        </div>
        <main className="flex-1 p-4 overflow-y-hidden flex flex-col">
          <div className="flex justify-between items-center py-2 ml-5 mr-8  z-10 sticky top-0">
            <h2 className="text-lg text-color-text-black">Project Name</h2>
            <AddMemberModal />
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar mt-2">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
