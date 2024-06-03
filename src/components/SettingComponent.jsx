const SettingComponent = () => {
    return (
      
            <form className="w-full p-10">
                <div className="bg-white p-8 max-h-screen rounded-lg shadow-md border dark:border-gray-700 w-full max-w-screen-lg mx-auto">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Account Setting</h1>
                    <hr className="border-1 border-blue-500 mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Name and Last Name */}
                        <div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="first_name" className="block text-gray-700 dark:text-white mb-1">First Name</label>
                                    <input type="text" placeholder="Enter firest name" className="input input-bordered input-primary w-full max-w-xs" />
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                                    <input type="text" placeholder="Enter last name" className="input input-bordered input-primary w-full max-w-xs" />
                                </div>
                            </div>
                            {/* Gender */}
                            <div className="grid grid-cols-2  pt-4">
                                <div>
                                    <label htmlFor="gender_male" className="block text-gray-700 dark:text-white mb-1">Gender</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <img src="./icon/gender1.svg" alt="gender icon" />
                                        </div>
                                        <input type="text" placeholder="Enter firest name" className="input rounded-e-none pl-10 input-bordered input-primary w-full max-w-xs" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="gender_male" className="block text-white dark:text-white mb-1">Gender</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <img className="w-3" src="./icon/gender2.svg" alt="gender icon" />
                                        </div>
                                        <input type="text" placeholder="Enter firest name" className="input rounded-s-none pl-10 input-bordered input-primary w-full max-w-xs" />
                                    </div>
                                </div>
                            </div>
                            {/* Date of Birth */}

                            <div className="mt-4">
                                <label htmlFor="dob" className="block text-gray-700 dark:text-white mb-1">Date of Birth</label>
                                <input type="date" className="text-gray-400 input  input-primary w-full " />
                            </div>
                            {/* Email */}
                            <div className="mt-4">
                                <label htmlFor="email" className="block text-gray-700 dark:text-white mb-1">Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <img className="w-[20px]" src="./icon/mail.svg" alt="" />
                                    </div>
                                    <input type="mail" className="text-gray-400 input  pl-10 input-primary w-full" placeholder="example@gmail.com" />
                                </div>  
                            </div>
                            {/* Contact */}
                            <div className="mt-4">
                                <label htmlFor="contact" className="block text-gray-700 dark:text-white mb-1">Contact</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.5 0C5.14855 0 0 5.14878 0 11.5C0 13.1491 0.367987 14.7915 1.07869 16.3156C0.135687 21.1859 0.0356567 21.6344 0.0356567 21.6344C-0.118443 22.432 0.566937 23.1151 1.36619 22.9641C1.36619 22.9641 1.80204 22.8887 6.72059 21.9579C8.20524 22.6635 9.8509 23 11.5 23C17.8514 23 23 17.8512 23 11.5C23 5.14878 17.8514 0 11.5 0ZM11.5 2.3C16.5807 2.3 20.7 6.41895 20.7 11.5C20.7 16.581 16.5807 20.7 11.5 20.7C10.0544 20.7 8.66639 20.3605 7.40369 19.7296C7.17829 19.6174 6.93106 19.5751 6.68381 19.6219C2.60131 20.3947 2.9256 20.3486 2.5875 20.4125C2.6542 20.0703 2.59669 20.4255 3.37869 16.3875C3.42699 16.1375 3.38444 15.8602 3.27059 15.6329C2.62889 14.3613 2.3 12.9577 2.3 11.5C2.3 6.41895 6.4193 2.3 11.5 2.3ZM8.26619 5.75C7.18749 5.75 5.75 7.1875 5.75 8.26562C5.75 9.65505 7.1875 12.2187 8.625 13.6562C8.78025 13.8109 9.1885 14.2203 9.34375 14.375C10.7812 15.8125 13.3446 17.25 14.7338 17.25C15.8125 17.25 17.25 15.8125 17.25 14.7344C17.25 13.6562 15.8125 12.2187 14.7338 12.2187C14.375 12.2187 13.0743 12.9622 12.9375 12.9375C11.7921 12.7307 10.3017 11.2042 10.0625 10.0625C10.0291 9.90311 10.7812 8.625 10.7812 8.26562C10.7812 7.1875 9.34374 5.75 8.26619 5.75Z" fill="#949494" />
                                        </svg>
                                    </div>
                                    <input type="text" className="text-gray-400 input  pl-10 input-primary w-full" placeholder="Phone numbers" />
                                </div>
                            </div>
                        </div>

                        {/* Profile */}
                        <div className="flex flex-col items-center">
                            <div className="mt-20 w-[141px] h-[141px] bg-[url('/image/profileneth.svg')] rounded-full bg-cover bg-center bg-no-repeat">
                                {/* icon edite profile  */}
                                <div className="bg-white rounded-full w-6 h-6 text-center ml-28 mt-28">
                                    <input type="file" name="profile" id="upload_profile" hidden required />
                                    <label for="upload_profile" className="inline-flex items-center">
                                        <svg data-slot="icon" className="w-5 h-5 text-blue-700" fill="none" stroke-width="1.5"
                                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                            </path>
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                            </path>
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            {/* Password*/}
                            <div className="mt-8 w-full">
                                <div className="mt-[1.5rem]">
                                    <label htmlFor="social_contact" className="block text-gray-700 dark:text-white mb-1">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <img className="w-[20px]" src="./icon/iconpassword.svg" alt="social contact" />
                                        </div>
                                        <input type="mail" className="text-gray-400 input  pl-10 input-primary w-full" placeholder="xxxxxxxxx" />
                                    </div>
                                </div>
                                {/* Social Contact */}

                                <div className="mt-4">
                                    <label htmlFor="social_contact" className="block text-gray-700 dark:text-white mb-1">Social Contact</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <img className="w-[20px]" src="./icon/socaicontact.svg" alt="social contact" />
                                        </div>
                                        <input type="mail" className="text-gray-400 input  pl-10 input-primary w-full" placeholder="Enter social contact" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Button Cancel and Save */}
                    <div className="mt-8 flex justify-end gap-3">
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 w-[100px] ">Cancel</button>
                        <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 dark:bg-teal-600 dark:text-white dark:hover:bg-white w-[100px]">Save</button>
                    </div>
                </div>
            </form>
   
    );
};

export default SettingComponent;
