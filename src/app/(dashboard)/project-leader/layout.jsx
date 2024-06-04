import NavbarComponent from "@/components/NavbarComponent";
import Sidebar from "./_components/Sidebar";


export default function DeveloperDashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12 w-full h-screen grid-rows-12">
      <aside className="bg-red-500 col-span-2 row-span-12">
        <Sidebar />
      </aside>
      <div className="flex-1 ml-[280px] flex flex-col h-full">
        <div className="flex-none">
          <NavbarComponent />
        </div>
        <main className="flex-1 p-4 overflow-y-hidden flex flex-col">
          {/* <div className="flex justify-between items-center py-2 ml-5 mr-8  z-10 sticky top-0">
            <h2 className="text-lg text-color-text-black">Project Name</h2>
            <AddMemberModal />
          </div> */}
          <div className="flex-1 overflow-y-auto no-scrollbar mt-2">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
