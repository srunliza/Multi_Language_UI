
import Link from "next/link";
const ChangePassword = () => {

    return (
        <div>
            <form className="w-full p-10">
                <div className="bg-white p-8 h-auto rounded-lg shadow-md border dark:border-gray-700 max-w-screen-lg mx-auto">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Account Setting</h1>
                    {/* field choose change password */}
                    <div className='flex gap-5 p-3'>
                        <Link href="/translator/setting">
                            <button className='rounded-lg border-1 border-red-50 p-2'>User Info</button>
                        </Link>
                        <button className='rounded-lg border-1 border-red-50 p-2'>Change Password</button>
                    </div>
                    <hr className=" border-blue-500 mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-1">

                        {/* Form Change password */}
                        <div id="content" role="main" className="w-full  max-w-md mx-auto p-6">
                            <div className=" bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
                                <div className="p-4 sm:p-7">
                                    <div className="text-center">
                                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Change Password</h1>
                                        <small className="mt-2 text-gray-600">
                                            Your password must be at least 6 characters.
                                        </small>

                                    </div>
                                    <div className="mt-5">
                                        <form>
                                            {/* Current Password */}
                                            <div className="grid gap-y-4">
                                                <div>
                                                    <label htmlFor="email" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base  lg:text-base">Current Password</label>
                                                    <div className="relative">
                                                        <input type="email" id="email" name="email"
                                                            className="text-gray-700focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 rounded-md border py-1.5 pr-20 pl-10 input-primary w-full" required aria-describedby="email-error"
                                                            placeholder="Enter current password"
                                                        />

                                                    </div>

                                                </div>
                                                {/* New Password */}
                                                <div>
                                                    <label htmlFor="email" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base  lg:text-base">New Password</label>
                                                    <div className="relative">
                                                        <input type="email" id="email" name="email"
                                                            className="text-gray-700focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 rounded-md border py-1.5 pr-20 pl-10 input-primary w-full" required aria-describedby="email-error"
                                                            placeholder="Enter new password"
                                                        />
                                                    </div>

                                                </div>
                                                {/* Confirm Password */}
                                                <div>
                                                    <label htmlFor="email" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base  lg:text-base">Confirm Password</label>
                                                    <div className="relative">
                                                        <input type="email" id="email" name="email"
                                                            className="text-gray-700focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 rounded-md border py-1.5 pr-20 pl-10 input-primary w-full" required aria-describedby="email-error"
                                                            placeholder="Confirm your password"
                                                        />
                                                    </div>

                                                </div>
                                                <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Save</button>
                                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                                    Do you want to forget password?
                                                    <Link className="text-blue-600 decoration-2 hover:underline font-medium" href="/forget-password">
                                                        forget here
                                                    </Link>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>



    )
}
export default ChangePassword;