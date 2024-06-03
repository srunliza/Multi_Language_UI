import CalendarComponent from "@/components/CalendarComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

const CalendarPage = () => {
    return ( 
        <main>
           <div className=" flex h-screen bg-gray-100">
                <div>
                    <SidebarComponent />
                </div>
                <div className="w-full">
                    <NavbarComponent />
                   <div className="mt-20">
                   <CalendarComponent/>
                   </div>
                </div>
            </div>
        </main>
    );
}
 
export default CalendarPage;