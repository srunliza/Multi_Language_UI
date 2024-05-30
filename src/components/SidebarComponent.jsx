import Link from "next/link";
import NavbarComponent from "./NavbarComponent";
const SidebarComponent = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* <!-- sidebar --> */}
            <div className="hidden md:flex flex-col max-w-[200px] bg-blue-800 ">
                <div className="flex items-center justify-center h-30 bg-blue-800 ">
                    <img className=" bg-blue-800" src="./image/logo.png" alt="multi logo" />
                </div>
                <div className="flex flex-col flex-1 ">
                    <nav className="flex-1 px-2 block m-auto">
                        <div>
                            <button type="button" className=" gap-2 px-6 py-3.5 text-base font-medium text-blue-800 inline-flex items-center bg-white rounded-t-lg rounded-br-lg  text-center  ">
                              <img src="./icon/newproject.svg" alt="" />
                                New Project
                            </button>
                            <Link href="#" className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl  flex items-center px-6 py-4 mt-2 text-gray-100  gap-2  font-light-[16px]">
                            <img src="./icon/dashboard.svg" alt="" />
                                <p> Dashboard</p>
                            </Link>
                            <Link href="#" className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2 font-light-[16px]">
                            <img src="./icon/profile_icon.svg" alt="" />
                                <p> Profile</p>

                            </Link>
                            <Link href="#" className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2  font-light-[16px]">
                            <img src="./icon/schedule_icon.svg" alt="" />
                                <p>Calender</p>
                            </Link>
                            <Link href="#" className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2  font-light-[16px]">
                            <img src="./icon/project.svg" alt="" />
                                <p> Project</p>
                            </Link>
                        </div>

                    </nav>
                    <div className="mb-[50px] px-2">
                        <Link href="/setting" className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2  font-light-[16px]">
                        <img src="./icon/setting.svg" alt="" />
                            <p>Setting</p>
                        </Link>
                        <Link href="#" className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2  font-light-[16px]">
                        <img src="./icon/logout.svg" alt="" />
                            <p> Logout</p>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <!-- Main content --> */}
            <div className=" flex flex-col flex-1 ">
                <NavbarComponent />
                <div className="p-4">

                </div>
            </div>
        </div>

    )
}
export default SidebarComponent;