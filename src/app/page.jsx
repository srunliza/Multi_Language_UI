import EmployeeDashboard from "@/components/EmployeeDashboard";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

export default function Home() {
  return (
    <div className="flex h-full ">
      <aside className="w-[280px] fixed top-0 left-0 h-full">
        <Sidebar />
      </aside>
      <div className="flex-1 ml-[280px]">
        <NavbarComponent />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
