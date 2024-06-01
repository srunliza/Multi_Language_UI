import NavbarComponent from "@/components/NavbarComponent";
import SettingComponent from "@/components/SettingComponent";
import SidebarComponent from "@/components/SidebarComponent";


const SettingPage = () => {
    return (
        <>
            <div className=" flex h-screen bg-gray-100">
                <div>
                    <SidebarComponent />
                </div>
                <div className="w-full">
                    <NavbarComponent />
                    <SettingComponent/>
                </div>

            </div>
        </>

    )
}
export default SettingPage;