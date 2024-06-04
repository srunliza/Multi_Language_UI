import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

export default function DeveloperDashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* <!-- Sidebar --> */}
      {/* <div className="w-64 h-full bg-red-400 hidden md:block"> */}
        <SidebarComponent />
        {/* <!-- Sidebar content here --> */}
      {/* </div> */}
      <div className="flex flex-col flex-grow ">
        {/* <h1>Navbar</h1> */}
        <NavbarComponent />
        <div className="flex-grow p-6 bg-white">{children}</div>
      </div>
    </div>
  );
}

