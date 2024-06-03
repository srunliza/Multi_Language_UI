import Link from "next/link";
const SidebarComponent = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* <!-- sidebar --> */}
            <div className="hidden md:flex flex-col max-w-[200px] bg-blue-800 ">
                <div className="flex items-center justify-center h-30 bg-blue-800 ">
                    <img className=" bg-blue-800" src="./assets/images/logo.png" alt="multi logo" />
                </div>
                <div className="flex flex-col flex-1 ">
                    <nav className="flex-1 ">
                        <div>
                            <button type="button" className="ml-1 gap-1 px-6 py-3.5 text-base font-medium text-blue-800 inline-flex items-center bg-white rounded-t-lg rounded-br-lg  text-center  ">
                              <img src="./assets/icons/newproject.svg" alt="" />
                                New Project
                            </button>
                            <Link href="#" className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl  flex items-center px-6 py-4 mt-2 text-gray-100  gap-2  font-light-[16px]">
                            <img src="./assets/icons/dashboard.svg" alt="" />
                                <p> Dashboard</p>
                            </Link>
                            <Link href="#" className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2 font-light-[16px]">
                            <img src="./assets/icons/profile_icon.svg" alt="" />
                                <p> Profile</p>

                            </Link>
                            <Link href="/calender" className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2  font-light-[16px]">
                            <img src="./assets/icons/schedule_icon.svg" alt="" />
                                <p>Calender</p>
                            </Link>
                            <Link href="#" className="hover:bg-gray-400 hover:bg-opacity-25  rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2  font-light-[16px]">
                            <img src="./assets/icons/project.svg" alt="" />
                                <p> Project</p>
                            </Link>
                        </div>

                    </nav>
                    <div className="mb-[50px] px-2">
                        <Link href="/setting" className=" hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2  font-light-[16px]">
                        <img src="./assets/icons/setting.svg" alt="" />
                            <p>Setting</p>
                        </Link>
                        <Link href="#" className="hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl flex items-center px-6 py-4 mt-2 text-gray-100 gap-2  font-light-[16px]">
                        <img src="./assets/icons/logout.svg" alt="" />
                            <p> Logout</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default SidebarComponent;