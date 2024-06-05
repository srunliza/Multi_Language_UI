import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";


const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className="flex h-full ">
                <aside className="w-[280px] fixed top-0 left-0 h-full">
                    <SidebarComponent/>
                </aside>
                <div className="flex-1 ml-[280px]">
                    <NavbarComponent />
                    <main className="p-4">{children}</main>
                </div>
            </div>
        </>

    );
}

export default DashboardLayout;