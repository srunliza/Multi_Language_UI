const SettingComponent = () => {
    return (
        <main>
            <form action="" className="grid grid-cols-span-6" >
                <div className="bg-gray-100 dark:bg-gray-900">
                    <div className="w-[90%] mx-auto p-8 block m-auto ">
                        <div className= " bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 ">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Account Seeting</h1>
                            <hr />
                            <div className="mb-6 mt-10">
                                <div className=" flex ml-[50px] ">
                                <div className=" max-w-3xl">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label for="first_name" className="block text-gray-700 dark:text-white mb-1">First Name</label>
                                            <input type="text" id="first_name" className="border-blue-200 border-2 w-full rounded-lg  py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                        </div>
                                        <div>
                                            <label for="last_name" className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                                            <input type="text" id="last_name" className="border-blue-200 border-2 w-full rounded-lg  py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label for="address" className="block text-gray-700 dark:text-white mb-1">Sex</label>
                                        <input type="text" id="address" className="border-blue-200 border-2 w-full rounded-lg  py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                    <div className="mt-4">
                                        <label for="city" className="block text-gray-700 dark:text-white mb-1">Date of Birth</label>
                                        <input type="text" id="city" className="border-blue-200 border-2 w-full rounded-lg py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                </div>
                                <div className="block m-auto">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                                        class="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                                    />
                                </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4  ml-[50px] mr-[50px]">
                                    <div>
                                        <label for="state" className="block text-gray-700 dark:text-white mb-1  ">Email</label>
                                        <input type="text" id="state" className="border-blue-200 border-2 w-full rounded-lg  py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                    <div>
                                        <label for="zip" className="block text-gray-700 dark:text-white mb-1">Password</label>
                                        <input type="text" id="zip" className="border-blue-200 border-2 w-full rounded-lg  py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                </div>
                            </div>
                            <div>

                                <div className="grid grid-cols-2 gap-4 mt-4  ml-[50px] mr-[50px]">
                                    <div>
                                        <label for="exp_date" className="block text-gray-700 dark:text-white mb-1">Contact</label>
                                        <input type="text" id="exp_date" className="border-blue-200 border-2 w-full rounded-lg py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                    <div>
                                        <label for="cvv" className="block text-gray-700 dark:text-white mb-1">Socail Contact</label>
                                        <input type="text" id="cvv" className="border-blue-200 border-2 w-full rounded-lg  py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end gap-3 mr-[50px]">
                                <button className="bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg--700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 w-[100px]  border-blue-200 border-2">Cancel</button>
                                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 dark:bg-teal-600 dark:text-white dark:hover:bg-white  w-[100px] ">Save</button>


                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </main>
    )
}
export default SettingComponent;