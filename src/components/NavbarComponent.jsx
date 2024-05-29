const NavbarComponent = () => {
    return (
        <div className="sticky top-0 z-10 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                <div className="flex items-center px-4">
                    <div class="lg:hidden">
                        <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 ml-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search Project</span>
                        </div>
                        <input type="text" id="search-navbar" className="mx-4 w-[500px] p-2 pl-10 border-blue-200 border-2 rounded-md px-4 py-2" placeholder="Search Project" />
                    </div>
                </div>
                <div class="flex items-center pr-4">
                    <div className="flex items-center pr-4 gap-5">
                        <button className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Cart">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0001 0.0820312C7.26379 0.0820312 4.00023 3.06162 4.00023 7.38495C4.00023 7.97527 4.00023 9.78275 4.00023 9.81926C4.00023 10.2112 3.78343 10.4777 3.04183 11.0364C2.9577 11.0997 2.60504 11.376 2.50025 11.4551C0.813065 12.7282 -0.0173258 13.9211 0.000273949 15.905C0.0180071 17.9109 1.80919 19.5334 4.00023 19.5565H8.23485C8.23485 19.5565 8.00018 20.3002 8.00018 20.7736C8.00018 22.7905 9.79083 24.4251 12.0001 24.4251C14.2094 24.4251 16.0001 22.7905 16.0001 20.7736C16.0001 20.3002 15.7761 19.5565 15.7761 19.5565H20C22.1867 19.5638 24.0027 17.9194 24 15.905C23.9973 13.9357 23.1653 12.7222 21.5 11.4551C21.3907 11.3711 21.004 11.1021 20.916 11.0364C20.1907 10.4838 20 10.2063 20 9.81926C20 8.29782 20 7.38495 20 7.38495C20 3.06162 16.7361 0.0820312 12.0001 0.0820312ZM12.0001 2.51634C15.2641 2.51634 17.3334 4.40536 17.3334 7.38495C17.3334 7.38495 17.3334 8.29782 17.3334 9.81926C17.3334 11.1119 17.9307 11.9274 19.208 12.8999C19.3094 12.9766 19.7374 13.2833 19.8334 13.3563C20.9507 14.2071 21.332 14.7828 21.3334 15.905C21.3347 16.5672 20.7134 17.1246 20 17.1222C19.748 17.121 15.8668 17.121 12.0001 17.1222C8.13391 17.1234 4.28356 17.1246 4.00023 17.1222C3.25597 17.1137 2.67291 16.5805 2.66691 15.905C2.65704 14.7852 3.03824 14.2083 4.16689 13.3563C4.25903 13.2869 4.65329 12.9729 4.75022 12.8999C6.0478 11.9213 6.66686 11.124 6.66686 9.81926C6.66686 9.78275 6.66686 7.97527 6.66686 7.38495C6.66686 4.40536 8.73657 2.51634 12.0001 2.51634ZM12.0001 19.5565C12.7361 19.5565 13.3335 20.1018 13.3335 20.7736C13.3335 21.4455 12.7361 21.9908 12.0001 21.9908C11.2641 21.9908 10.6668 21.4455 10.6668 20.7736C10.6668 20.1018 11.2641 19.5565 12.0001 19.5565Z" fill="#949494" />
                            </svg>
                            <span className="absolute inset-0 object-right-top -mr-6">
                                <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                                    6
                                </div>
                            </span>
                        </button>
                        <button type="button" className=" w-[45px] h-[45px] flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-[45px] h-[45px] rounded-full" src="./profile.svg" alt="user photo" />
                        </button>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default NavbarComponent;




