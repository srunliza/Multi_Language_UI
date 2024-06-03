
import DashboardAttactComponent from "@/components/DashboardAttactComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";


function DashboardAttactPageComponent() {
    return (
        <div className=" flex h-screen bg-gray-100">
            <div>
                <SidebarComponent />
            </div>
            <div className="w-full">
                <NavbarComponent />
                <DashboardAttactComponent/>
            </div>

        </div>
    )
}
export default DashboardAttactPageComponent;
