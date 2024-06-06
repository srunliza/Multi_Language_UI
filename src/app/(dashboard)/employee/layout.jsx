import NavbarComponent from "@/components/NavbarComponent";
import Sidebar from "@/components/Sidebar";

export default function DeveloperDashboardLayout({ children }) {
  return (
    <div class="flex h-screen bg-gray-100">
      {/* sidebar */}
      <Sidebar />

      {/* Main content */}
      <div class="flex flex-col flex-1 overflow-y-auto no-scrollbar">
        <NavbarComponent />
        <div class="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
