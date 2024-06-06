import NavbarComponent from "@/components/NavbarComponent";
import Sidebar from "./_components/Sidebar";

export default function DeveloperDashboardLayout({ children }) {
  return (
    <div className="flex h-full bg-gray-100 overflow-scroll">
      <aside className="w-[280px] fixed top-0 left-0 h-full bg-blue-600">
        <Sidebar />
      </aside>
      <div className="flex-1 ml-[280px]">
        <NavbarComponent />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
