import NavbarComponent from "@/components/NavbarComponent";
import Sidebar from "./_components/Sidebar";

export default function DeveloperDashboardLayout({ children }) {
  return (
    <div className="flex h-full bg-gray-100">
      <aside className="fixed top-0 left-0 h-full">
        <Sidebar />
      </aside>
      <div className="flex-1 ml-[280px] w-full">
        <NavbarComponent />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
