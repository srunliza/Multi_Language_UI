import Link from "next/link";


const SidebarComponenet = () => {
    return (
        <main className="flex ">  
            <div className="flex  bg-blue-800 ">
                <div className="hidden md:flex flex-col w-64 ">
                    <div className="flex items-center justify-center ">
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
            </div>
        
        </main>
    )
}
export default SidebarComponenet;