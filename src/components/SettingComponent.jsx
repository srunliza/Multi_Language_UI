const SettingComponent = () => {
    return (
        <main>
          
               <form action="" className="grid grid-cols-span-6" >
               <div className="bg-gray-100 dark:bg-gray-900">
                    <div className="w-full max-w-3xl mx-auto p-8">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Account Seeting</h1>
                            <hr />


                            <div className="mb-6 mt-10">
                               
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label for="first_name" className="block text-gray-700 dark:text-white mb-1">First Name</label>
                                        <input type="text" id="first_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                    <div>
                                        <label for="last_name" className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                                        <input type="text" id="last_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                </div>
                 

                               
                                <div className="mt-4">
                                    <label for="address" className="block text-gray-700 dark:text-white mb-1">Sex</label>
                                    <input type="text" id="address" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                </div>

                                <div className="mt-4">
                                    <label for="city" className="block text-gray-700 dark:text-white mb-1">Date of Birth</label>
                                    <input type="text" id="city" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <label for="state" className="block text-gray-700 dark:text-white mb-1">Email</label>
                                        <input type="text" id="state" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                    <div>
                                        <label for="zip" className="block text-gray-700 dark:text-white mb-1">Password</label>
                                        <input type="text" id="zip" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                </div>
                            </div>
                            <div>
                               
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <label for="exp_date" className="block text-gray-700 dark:text-white mb-1">Contact</label>
                                        <input type="text" id="exp_date" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                    <div>
                                        <label for="cvv" className="block text-gray-700 dark:text-white mb-1">Socail Contact</label>
                                        <input type="text" id="cvv" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Cancel</button>
                              
                            </div>

                            <div className="mt-8 flex justify-end">
                                <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Add</button>
                              
                            </div>
                        </div>
                    </div>
                </div>
               </form>


           
        </main>
    )
}
export default SettingComponent;