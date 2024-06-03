import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";


const DashboardLayout = ({children}) => {
    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <div className="min-h-screen sticky top-0">
                        <SidebarComponent/>
                    </div>
                </div>
                <div className="col-span-10">
                    <div className="sticky top-0">
                        <NavbarComponent/>
                    </div>


                    <main>{children}</main>
                </div>
            </div>
        </>
       
     );
}
 
export default DashboardLayout;