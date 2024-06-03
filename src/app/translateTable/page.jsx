import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TranslateTableComponent from "@/components/TranslateTableComponent";

const TranslateTablePageComponent = () => {
    return (
        <>
            <div className=" flex h-screen bg-white">
                <div>
                    <SidebarComponent />
                </div>
                <div className="w-full">
                    <NavbarComponent />
                    <TranslateTableComponent/>
                </div>

            </div>
        </>

    )
}
export default TranslateTablePageComponent;