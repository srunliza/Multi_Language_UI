import EmployeeDashboard from "@/components/EmployeeDashboard";
import { ForgetPasswordComponent } from "@/components/ForgetPasswordComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";


export default function Home() {
  return (
    <main>
      {/* <div className="grid grid-cols-12 bg-slate-400">
          {/* sidebar */}
          <div className="col-span-2 bg-black-200">
            <SidebarComponent/>
          </div>

          <div className="col-span-10 bg-gray-50">
            {/* navbar */}
            <div className="">
              <NavbarComponent/>
            </div>
            <div>
              <EmployeeDashboard/>
            </div>
          </div>
        {/* </div> */} 
   
    </main>
  );
}
