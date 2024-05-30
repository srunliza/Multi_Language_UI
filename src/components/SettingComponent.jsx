const SettingComponent = () => {
    return (
        <main>
            <form  className="h-10 ">
                <div className="bg-white dark:bg-gray-900">
                    <div className=" col-span-6 sm:p-16 md:p-20 lg:p-24 xl:p-20 flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative w-[90%] mx-auto p-8 m-auto grid grid-cols-span-6 ">
                        <div className=" bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 ">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Account Setting</h1>
                            <hr className="border-1 border-blue-500"/>
                            <div className="grid grid-cols-2 gap-10 pt-5">
                                <div className=" max-w-3xl ">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label for="first_name" className="block text-gray-700 dark:text-white mb-1">First Name</label>
                                            <input type="text" id="first_name" placeholder="Vibolpheakneth" className="border-blue-200 border-2 w-full rounded-lg  py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                        </div>
                                        <div>
                                            <label for="last_name" className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                                            <input type="text" id="last_name" placeholder="Tan" className="border-blue-200 border-2 w-full rounded-lg  py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label for="countries" className="block text-gray-700 dark:text-white mb-1">Gender</label>
                                        <select id="countries" className=" border-blue-200 border-2 bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Female</option>
                                            <option value="US"  >Male</option>

                                        </select>
                                    </div>
                                    <div className="mt-4">
                                        <label for="city" className="block text-gray-700 dark:text-white mb-1">Date of Birth</label>
                                        <input type="date" id="city" className="text-gray-400 border-blue-200 border-2 w-full rounded-lg py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                    <div className="mt-4">
                                        <div>
                                            <label for="state" className="block text-gray-700 dark:text-white mb-1  ">Email</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                    <svg width="20" height="20"viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M23 2.5C23 1.125 21.965 0 20.7 0H2.3C1.035 0 0 1.125 0 2.5V17.5C0 18.875 1.035 20 2.3 20H20.7C21.965 20 23 18.875 23 17.5V2.5ZM20.7 2.5L11.5 8.75L2.3 2.5H20.7ZM20.7 17.5H2.3V5L11.5 11.25L20.7 5V17.5Z" fill="#949494" />
                                                    </svg>
                                                </div>
                                                <input type="text" id="email-address-icon" className="border-blue-200 border-2  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label for="zip" className="block text-gray-700 dark:text-white mb-1">Contact</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.5 0C5.14855 0 0 5.14878 0 11.5C0 13.1491 0.367987 14.7915 1.07869 16.3156C0.135687 21.1859 0.0356567 21.6344 0.0356567 21.6344C-0.118443 22.432 0.566937 23.1151 1.36619 22.9641C1.36619 22.9641 1.80204 22.8887 6.72059 21.9579C8.20524 22.6635 9.8509 23 11.5 23C17.8514 23 23 17.8512 23 11.5C23 5.14878 17.8514 0 11.5 0ZM11.5 2.3C16.5807 2.3 20.7 6.41895 20.7 11.5C20.7 16.581 16.5807 20.7 11.5 20.7C10.0544 20.7 8.66639 20.3605 7.40369 19.7296C7.17829 19.6174 6.93106 19.5751 6.68381 19.6219C2.60131 20.3947 2.9256 20.3486 2.5875 20.4125C2.6542 20.0703 2.59669 20.4255 3.37869 16.3875C3.42699 16.1375 3.38444 15.8602 3.27059 15.6329C2.62889 14.3613 2.3 12.9577 2.3 11.5C2.3 6.41895 6.4193 2.3 11.5 2.3ZM8.26619 5.75C7.18749 5.75 5.75 7.1875 5.75 8.26562C5.75 9.65505 7.1875 12.2187 8.625 13.6562C8.78025 13.8109 9.1885 14.2203 9.34375 14.375C10.7812 15.8125 13.3446 17.25 14.7338 17.25C15.8125 17.25 17.25 15.8125 17.25 14.7344C17.25 13.6562 15.8125 12.2187 14.7338 12.2187C14.375 12.2187 13.0743 12.9622 12.9375 12.9375C11.7921 12.7307 10.3017 11.2042 10.0625 10.0625C10.0291 9.90311 10.7812 8.625 10.7812 8.26562C10.7812 7.1875 9.34374 5.75 8.26619 5.75Z" fill="#949494" />
                                                </svg>
                                            </div>
                                            <input type="text" id="email-address-icon" className="  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 border-blue-200 border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="012 345 687" />
                                        </div>
                                    </div>
                                </div>
                                {/* profile */}
                                <div className="max-w-3xl flex-wrap">
                                    <div className="mt-[50px] mx-auto flex justify-center w-[141px] h-[141px] bg-[url('/profileneth.svg')] rounded-full bg-cover bg-center bg-no-repeat"></div>
                                    <div className="mt-[74px] ">
                                        <div className="mt-4">
                                            <label for="zip" className="block text-gray-700 dark:text-white mb-1">Password</label>
                                            <div className="relative ">
                                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                    <svg width="20" height="20" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5003 13.167C11.1581 13.1685 10.8257 13.2921 10.5544 13.5188C10.283 13.7456 10.0877 14.0629 9.99841 14.4221C9.90913 14.7812 9.93085 15.1623 10.0602 15.5067C10.1896 15.8512 10.4195 16.1399 10.7145 16.3285V18.7504H12.3053V16.3285C12.5388 16.1784 12.7325 15.9652 12.8677 15.7097C13.0028 15.4541 13.0749 15.1649 13.0768 14.8701C13.0768 14.6456 13.036 14.4233 12.9566 14.216C12.8773 14.0087 12.761 13.8204 12.6145 13.6622C12.468 13.5039 12.2941 13.3786 12.1029 13.2937C11.9117 13.2087 11.7069 13.1657 11.5003 13.167Z" stroke="#949494" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M17.3888 9.25488H5.60613C4.4629 9.25488 3.53613 10.2622 3.53613 11.5049V20.4059C3.53613 21.6486 4.4629 22.6559 5.60613 22.6559H17.3888C18.5321 22.6559 19.4588 21.6486 19.4588 20.4059V11.5049C19.4588 10.2622 18.5321 9.25488 17.3888 9.25488Z" stroke="#949494" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M6.39648 9.25521V7.89583C6.39648 6.42333 6.93464 5.01113 7.89256 3.96992C8.85048 2.9287 10.1497 2.34375 11.5044 2.34375C12.8591 2.34375 14.1583 2.9287 15.1162 3.96992C16.0742 5.01113 16.6123 6.42333 16.6123 7.89583V9.25521" stroke="#949494" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <input type="password" id="email-address-icon" className="  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-blue-200 border-2" placeholder="*******" />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label for="cvv" className="block text-gray-700 dark:text-white mb-1">Socail Contact</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                    <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.5789 6.2373L20.8031 7.56888C20.384 7.88319 19.8743 8.05309 19.3505 8.05309H15.2855C14.8916 8.05325 14.5074 8.17518 14.1854 8.4022C13.8635 8.62921 13.6196 8.9502 13.4872 9.3212C13.3548 9.6922 13.3403 10.0951 13.4458 10.4746C13.5512 10.8542 13.7714 11.1918 14.0762 11.4414L16.4973 13.4218C17.435 14.189 18.1659 15.1785 18.6234 16.3004C19.0809 17.4222 19.2506 18.6407 19.1168 19.8448L19.0926 20.0627C18.9963 20.9295 18.7833 21.7793 18.4595 22.5891L17.7368 24.3952M2 11.6847L5.91968 11.031C6.2999 10.9675 6.68977 10.9958 7.05687 11.1133C7.42396 11.2309 7.75768 11.4345 8.03025 11.7071C8.30282 11.9796 8.50636 12.3133 8.62396 12.6804C8.74155 13.0475 8.76978 13.4374 8.70632 13.8176L8.5429 14.7945C8.40103 15.6467 8.5361 16.5219 8.92828 17.2916C9.32045 18.0614 9.94907 18.6851 10.7218 19.0713C11.3383 19.3798 11.8311 19.8893 12.119 20.5156C12.4069 21.142 12.4726 21.8477 12.3052 22.5165L11.6842 25.0005" stroke="#979797" stroke-width="2.5" />
                                                        <path d="M13.5 25C19.8513 25 25 19.8513 25 13.5C25 7.14873 19.8513 2 13.5 2C7.14873 2 2 7.14873 2 13.5C2 19.8513 7.14873 25 13.5 25Z" stroke="#979797" stroke-width="2.5" />
                                                    </svg>
                                                </div>
                                                <input type="text" id="email-address-icon" className="  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 border-blue-200 border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telegram" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end gap-3 mr-[50px]">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 w-[100px] border-2">Cancel</button>
                            <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 dark:bg-teal-600 dark:text-white dark:hover:bg-white  w-[100px] ">Save</button>
                        </div>
                    </div>

                </div>
            </form>
        </main>
    )
}
export default SettingComponent;