import Image from 'next/image';
import { EmailOutlined, HttpsOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import login from '../../public/images/login.png'
import google from '../../public/images/google.svg'
import github from '../../public/images/github.svg'
import Link from 'next/link';


const LoginComponent = () => {
    return ( 
        <main className="bg-[url('/images/background.jpg')] bg-cover bg-center w-full min-h-screen">
            <div className='flex justify-center items-center'>
                <div className="bg-white rounded-2xl mt-16 shadow-lg p-8 sm:p-5 md:px-14 max-w-md w-full">
                
                    {/* title */}
                    <h2 className="sm:text-lg md:text-xl lg:text-2xl mt-2 font-bold text-[#1A42BC] mb-2">Welcome to Sign in!</h2>
                    {/* subtile */}
                    <p className="text-gray-600 sm:text-xs md:text-xs lg:text-sm mb-4">Hi enter your details to login account</p>

                    {/* image */}
                    <div className="flex justify-center items-center mb-3">
                        <Image src={login} width={120} height={120} alt="change password image" />
                    </div>


                    {/* form */}
                    <form>
                        {/* input email */}
                        <div className="mb-2">
                            <label htmlFor="email" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">Email</label>
                            <div className="relative">
                                <input type="email" id="email" className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm" placeholder="example@gmail.com" />
                                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                                    <EmailOutlined fontSize="small" />
                                </span>
                            </div>
                        </div>


                        {/* input password */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">Password</label>
                            <div className="relative">
                                <input type="password" id="password" className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm" placeholder="Enter Your Password" />
                                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                                    <HttpsOutlined fontSize="small" />
                                </span>
                                <span className="absolute inset-y-0 right-3 pr-3 flex items-center text-gray-500">
                                    <VisibilityOffOutlined fontSize="small" />
                                </span>
                            </div>
                        </div>


                        {/* button submit */}
                        <button type="submit" className="w-full mt-2 bg-[#1A42BC] text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Sign in</button>
                        <div className="flex justify-end items-center mt-3">
                            <a href="#" className="text-xs text-[#1A42BC]">Forgot Password</a>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-gray-500 sm:text-xs md:text-sm lg:text-xs">Or Sign in With</p>
                        </div>


                        {/* login with google or github */}
                        <div className="flex justify-center items-center mt-3 gap-5">
                            <button className="flex items-center justify-center bg-white border border-gray-300 rounded-full py-2 px-2 hover:bg-gray-100">
                                <Image src={google} width={20} height={20} alt='google icon'/>
                            </button>
                            <button className="flex items-center justify-center bg-white border border-gray-300 rounded-full py-2 px-2 hover:bg-gray-100">
                                <Image src={github} width={20} height={20} alt='github'/>
                            </button>
                        </div>


                        <div className="flex justify-center items-center mt-3">
                            <p className="text-gray-500 sm:text-xs md:text-sm lg:text-xs">If you don't have an account? <Link href="register" className="text-[#1A42BC]">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
     );
}
 
export default LoginComponent;