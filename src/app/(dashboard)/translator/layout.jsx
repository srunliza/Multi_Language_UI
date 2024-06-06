import NavbarComponent from "@/components/NavbarComponent";
import Sidebar from "./_components/Sidebar";

export default function DeveloperDashboardLayout({ children }) {
  return (
    <div className="flex h-full bg-white">
      <aside className="w-[250px] fixed top-0 left-0 h-full">
        <Sidebar />
      </aside>
      <div className="flex-1 ml-[280px]">
      </aside>
      <div className="flex-1 ml-[280px]">
        <NavbarComponent />
        <main className="p-4">{children}</main>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
