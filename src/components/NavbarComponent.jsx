const NavbarComponent = () => {
    return (
        <div className="shadow-md flex flex-col ">
            <div className="flex items-center justify-between p-3 bg-white border-b border-gray-200 overflow-auto  no-scrollbar">
                <div className="flex items-center px-4">
                    <div className="lg:hidden">
                        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className="relative hidden md:block  md:mx-20 mx-20 ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                            <svg className="w-4 h-4 ml-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search Project</span>
                        </div>
                        <input type="text" id="search-navbar" className="mx-4 w-[500px] p-2 pl-10 border-blue-300 border-2 rounded-md px-4 py-2" placeholder="Search Project" />
                    </div>
                </div>
                <div className="flex items-center pr-4">
                    <div className="flex items-center pr-4 gap-7">
                        <button className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Cart">
                           <img src="./icon/notification.svg" alt="notification" />
                            <span className="absolute inset-0 object-right-top -mr-6">
                                <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                                    6
                                </div>
                            </span>
                        </button>
                        <button type="button" className=" w-[45px] h-[45px] flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-[45px] h-[45px] rounded-full" src="./image/profile.svg" alt="user photo" />
                        </button>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default NavbarComponent;




