const SettingComponent = () => {
    return (
        <main>
            <form >
                <div className="bg-white dark:bg-gray-900">
                    <div className=" col-span-6 sm:p-16 md:p-20 lg:p-24 xl:p-20 flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative w-[90%] mx-auto p-8 m-auto grid grid-cols-span-6 ">
                        <div className=" bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 ">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Account Seeting</h1>
                            <hr />
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
                                                    <img className="w-[15px]" src="./mail.svg" alt="mail" />
                                                </div>
                                                <input type="text" id="email-address-icon" className="border-blue-200 border-2  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label for="zip" className="block text-gray-700 dark:text-white mb-1">Contact</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                <img className="w-[15px]" src="./contact.svg" alt="contact" />
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
                                                <img className="w-[15px]" src="./iconpassword.svg" alt="password" />
                                            </div>
                                            <input type="password" id="email-address-icon" className="  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-blue-200 border-2" placeholder="*******" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label for="cvv" className="block text-gray-700 dark:text-white mb-1">Socail Contact</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                <img className="w-[15px]" src="./socaicontact.svg" alt="contact" />
                                            </div>
                                            <input type="text" id="email-address-icon" className="  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 border-blue-200 border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telegram" />
                                        </div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end gap-3 mr-[50px]">
                            <button className="bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg--700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 w-[100px]  border-blue-200 border-2">Cancel</button>
                            <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 dark:bg-teal-600 dark:text-white dark:hover:bg-white  w-[100px] ">Save</button>
                        </div>
                    </div>

                </div>
            </form>
        </main>
    )
}
export default SettingComponent;