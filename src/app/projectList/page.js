
import NavbarComponent from "@/components/NavbarComponent";
import ProjectListComponent from "@/components/ProjectListComponent";
import SidebarComponent from "@/components/SidebarComponent";


function ProjectPage() {
    return (
        <>
            <div className=" flex h-screen bg-gray-100">
                <div>
                    <SidebarComponent />
                </div>
                <div className="w-full">
                    <NavbarComponent />
                    <ProjectListComponent />
                </div>

            </div>
        </>
    )
}
export default ProjectPage;