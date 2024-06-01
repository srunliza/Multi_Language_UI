const SettingComponent = () => {
    return (
        <main className="p-4 sm:p-8 md:p-16 lg:p-24 xl:p-20">
            <form className="h-10 w-full">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border dark:border-gray-700 w-full max-w-screen-lg mx-auto">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Account Setting</h1>
                    <hr className="border-1 border-blue-500 mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="first_name" className="block text-gray-700 dark:text-white mb-1">First Name</label>
                                    <input type="text" id="first_name" placeholder="Vibolpheakneth" className="border-blue-200 border-2 w-full rounded-lg py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                                    <input type="text" id="last_name" placeholder="Tan" className="border-blue-200 border-2 w-full rounded-lg py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2  pt-4">
                                <div>
                                    <label htmlFor="gender_male" className="block text-gray-700 dark:text-white mb-1">Gender</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <img src="./icon/gender1.svg" alt="gender icon" />
                                        </div>
                                        <input type="text" id="gender_male" className="text-gray-900 text-sm rounded-s-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 border-blue-200 border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Male" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="gender_female" className="block text-gray-700 dark:text-white mb-1">Gender</label>
                                    <input type="text" id="gender_female" placeholder="Female" className="border-blue-200 border-2 w-full rounded-e-lg py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="dob" className="block text-gray-700 dark:text-white mb-1">Date of Birth</label>
                                <input type="date" id="dob" className="text-gray-400 border-blue-200 border-2 w-full rounded-lg py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="email" className="block text-gray-700 dark:text-white mb-1">Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg width="20" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23 2.5C23 1.125 21.965 0 20.7 0H2.3C1.035 0 0 1.125 0 2.5V17.5C0 18.875 1.035 20 2.3 20H20.7C21.965 20 23 18.875 23 17.5V2.5ZM20.7 2.5L11.5 8.75L2.3 2.5H20.7ZM20.7 17.5H2.3V5L11.5 11.25L20.7 5V17.5Z" fill="#949494" />
                                        </svg>
                                    </div>
                                    <input type="text" id="email" className="border-blue-200 border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="contact" className="block text-gray-700 dark:text-white mb-1">Contact</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.5 0C5.14855 0 0 5.14878 0 11.5C0 13.1491 0.367987 14.7915 1.07869 16.3156C0.135687 21.1859 0.0356567 21.6344 0.0356567 21.6344C-0.118443 22.432 0.566937 23.1151 1.36619 22.9641C1.36619 22.9641 1.80204 22.8887 6.72059 21.9579C8.20524 22.6635 9.8509 23 11.5 23C17.8514 23 23 17.8512 23 11.5C23 5.14878 17.8514 0 11.5 0ZM11.5 2.3C16.5807 2.3 20.7 6.41895 20.7 11.5C20.7 16.581 16.5807 20.7 11.5 20.7C10.0544 20.7 8.66639 20.3605 7.40369 19.7296C7.17829 19.6174 6.93106 19.5751 6.68381 19.6219C2.60131 20.3947 2.9256 20.3486 2.5875 20.4125C2.6542 20.0703 2.59669 20.4255 3.37869 16.3875C3.42699 16.1375 3.38444 15.8602 3.27059 15.6329C2.62889 14.3613 2.3 12.9577 2.3 11.5C2.3 6.41895 6.4193 2.3 11.5 2.3ZM8.26619 5.75C7.18749 5.75 5.75 7.1875 5.75 8.26562C5.75 9.65505 7.1875 12.2187 8.625 13.6562C8.78025 13.8109 9.1885 14.2203 9.34375 14.375C10.7812 15.8125 13.3446 17.25 14.7338 17.25C15.8125 17.25 17.25 15.8125 17.25 14.7344C17.25 13.6562 15.8125 12.2187 14.7338 12.2187C14.375 12.2187 13.0743 12.9622 12.9375 12.9375C11.7921 12.7307 10.3017 11.2042 10.0625 10.0625C10.0291 9.90311 10.7812 8.625 10.7812 8.26562C10.7812 7.1875 9.34374 5.75 8.26619 5.75Z" fill="#949494" />
                                        </svg>
                                    </div>
                                    <input type="text" id="contact" className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 border-blue-200 border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="012 345 687" />
                                </div>
                            </div>
                        </div>
                        {/* Right Column */}
                        <div className="flex flex-col items-center">
                            <div className="mt-20 w-[141px] h-[141px] bg-[url('/image/profileneth.svg')] rounded-full bg-cover bg-center bg-no-repeat"></div>
                            <div className="mt-8 w-full">
                                <div className="mt-4">
                                    <label htmlFor="password" className="block text-gray-700 dark:text-white mb-1">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <img src="./icon/iconpassword.svg" alt="password" />
                                        </div>
                                        <input type="password" id="password" className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-blue-200 border-2" placeholder="*******" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="social_contact" className="block text-gray-700 dark:text-white mb-1">Social Contact</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <img className="w-[20px]" src="./icon/socaicontact.svg" alt="social contact" />
                                        </div>
                                        <input type="text" id="social_contact" className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 border-blue-200 border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telegram" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-end gap-3">
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 w-[100px] border-2">Cancel</button>
                        <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 dark:bg-teal-600 dark:text-white dark:hover:bg-white w-[100px]">Save</button>
                    </div>
                </div>
            </form>
        </main>
    );
};

export default SettingComponent;
