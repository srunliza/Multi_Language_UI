import NavbarComponent from "@/components/NavbarComponent";
import SettingComponent from "@/components/SettingComponent";
import SidebarComponent from "@/components/SidebarComponent";


const SettingPageComponent = () => {
    return (
        <main className="">
            <div className="grid grid-cols-12 w-full h-screen grid-rows-12">
                <div className=" col-span-2 row-span-12">
                    <SidebarComponent />
                </div>
                <div className="bg-slate-100 col-span-10 row-span-1">
                    <NavbarComponent />
                </div>
                <div className="col-span-10 row-span-12 rounded-md w-full h-full p-4">
                    <SettingComponent />
                </div>
            </div>
        </main>

    )
}
export default SettingPageComponent;