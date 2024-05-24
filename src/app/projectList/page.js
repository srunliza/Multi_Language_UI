
import ProjectListComponent from "@/components/ProjectListComponent";
import Link from "next/link";

function ProjectPage() {
    return(
        <main>
           <div class="flex h-screen bg-gray-100">
            {/* <!-- sidebar --> */}
            <div class="hidden md:flex flex-col w-64 bg-blue-800 ">
                <div class="flex items-center justify-center h-30 bg-blue-800 ">
                <img className="w-[300px] bg-blue-800" src="./logo.png" alt="multi logo" />
                </div>
                <div className="flex flex-col flex-1 ">
                        <nav className="flex-1 px-2 block m-auto">
                            <div>
                            <a href="#">
                            <img src="./sidebar component.svg" alt="sidebar" />
                            </a>
                            <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100  gap-2 pt-10 font-light-[16px]">
                               <img src="./dashboard.svg" alt="dashboard" />
                               <b> Dashboard</b>
                            </a>
                            <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 gap-2 pt-10 font-light-[16px]">
                                <img src="./profile_icon.svg" alt="profile" />
                               <b> Profile</b>

                            </a>
                            <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 gap-2 pt-10 font-light-[16px]">
                                <img src="./schedule_icon.svg" alt="cakender" />
                              <b>Calender</b>
                            </a>
                            <Link href="/projectList" className="flex items-center px-4 py-2 mt-2 text-gray-100 gap-2 pt-10 font-light-[16px]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.2264 13.4962C18.2264 15.0297 17.7716 16.5289 16.9196 17.804C16.0676 19.0791 14.8566 20.0729 13.4398 20.6598C12.023 21.2466 10.464 21.4002 8.95987 21.101C7.45578 20.8018 6.07418 20.0634 4.98979 18.979C3.9054 17.8946 3.16692 16.513 2.86774 15.0089C2.56855 13.5048 2.72211 11.9458 3.30897 10.5289C3.89584 9.11211 4.88967 7.90112 6.16478 7.04912C7.43988 6.19712 8.939 5.74237 10.4726 5.74237L10.4726 13.4962H18.2264Z" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                    <path d="M13.5273 2.75018C15.5837 2.75018 17.5559 3.5671 19.01 5.02122C20.4641 6.47535 21.2811 8.44756 21.2811 10.504L13.5273 10.504L13.5273 2.75018Z" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                                </svg>
                               <b> Project</b>
                            </Link>
                            </div>
                           
                        </nav>
                        <div className="mb-[50px] ml-5">
                            <Link href="/setting" className="flex items-center px-4 py-2 mt-2 text-gray-100 gap-2 pt-10 font-light-[16px]">
                                <img src="./setting.svg" alt="setting" />
                               <b>Setting</b>
                            </Link>
                            <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 gap-2 pt-10 font-light-[16px]">
                                <img src="./logout.svg" alt="logout" />
                               <b> Logout</b>
                            </a>
                            </div>
                    </div>
            </div>

            {/* <!-- Main content --> */}
            <div class="flex flex-col flex-1 overflow-y-auto">
                <div class="flex items-center justify-between p-3 bg-white border-b border-gray-200">
                    <div class="flex items-center px-4">
                        <button class="text-gray-500 focus:outline-none focus:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <input class="mx-4 w-full  border-blue-200 border-2 rounded-md px-4 py-2" type="text" placeholder="Search" />
                    </div>
                    <div class="flex items-center pr-4">                     
                    <div className="flex items-center pr-4 gap-5">
                            <button className="btn btn-ghost btn-circle">
                                <img src="./notification.svg" alt="notification" />
                            </button>
                            <button type="button" className=" w-[45px] h-[45px] flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-[45px] h-[45px] rounded-full" src="./profile.svg" alt="user photo" />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <ProjectListComponent/>
                </div>
            </div>

        </div>
        </main>
    )
}
export default ProjectPage;