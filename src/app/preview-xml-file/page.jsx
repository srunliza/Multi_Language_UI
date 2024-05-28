import NavbarComponent from "@/components/NavbarComponent";
import PreviewJsonFileComponent from "@/components/PreviewJsonFileComponent";
import SidebarComponent from "@/components/SidebarComponent";

const PreviewXmlFilePage = () => {
    return ( 
        <main>
            <div className="grid grid-cols-12 bg-slate-400">
                {/* sidebar */}
                <div className="col-span-2 bg-black-200">
                    <SidebarComponent/>
                </div>

                <div className="col-span-10 bg-gray-50">
                    {/* navbar */}
                    <div className="">
                    <NavbarComponent/>
                    </div>  
                    
                    {/* preview xml file component */}
                    <div>
                         <PreviewJsonFileComponent/>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default PreviewXmlFilePage;