'use client'
import { useState } from 'react';
import Image from 'next/image';
import { EmailOutlined, HttpsOutlined, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import login from '../../public/assets/images/login.png'
import google from '../../public/assets/icons/google.svg'
import github from '../../public/assets/icons/github.svg'
import Link from 'next/link';



const LoginComponent = () => {

    // handle email formate
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (value && !validateEmail(value)) {
            setError('Invalid email format');
        } else {
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Invalid email format');
        } else {
            setError('');
            // Proceed with form submission
        }
    };


    // handle hide and show password
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleChangeInput = (e) => {
        setPassword(e.target.value);
        if (e.target.value) {
          setError('');
        }
      };

    const handleBlur = () => {
    if (!password) {
        setError('Password is required.');
    }
    };


    return ( 
        <main className="bg-[url('/assets/images/background.jpg')] bg-cover bg-center w-full min-h-screen">
            <div className='flex justify-center items-center'>
                <div className="bg-white rounded-2xl mt-10 shadow-lg p-8 sm:p-5 md:px-14 max-w-md w-full">
                
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

                        {/* email input */}
                        <div className="mb-2">
                            <label htmlFor="email" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">Email</label>
                            <div className="relative text-gray-800">
                                <input
                                type="email"
                                id="email"
                                className={`w-full px-10 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm ${error ? 'border-red-500' : ''}`}
                                placeholder="example@gmail.com"
                                value={email}
                                onChange={handleChange}
                                />
                                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                                <EmailOutlined fontSize="small" />
                                </span>
                            </div>
                            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                        </div>


                        {/* password input */}
                         <div className="mb-4">
                            <label htmlFor="password" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">
                                Password
                            </label>
                            <div className="relative text-gray-800">
                                <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                className="w-full px-10 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                                placeholder="Enter Your Password"
                                />
                                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                                <HttpsOutlined fontSize="small" />
                                </span>
                                <span
                                className="absolute inset-y-0 right-3 pr-3 flex items-center text-gray-500 cursor-pointer"
                                onClick={togglePasswordVisibility}
                                >
                                {passwordVisible ? <VisibilityOutlined fontSize="small" /> : <VisibilityOffOutlined fontSize="small" />}
                                </span>
                            </div>
                        </div>


                        {/* button submit */}
                        <button type="submit" onClick={handleSubmit} className="w-full mt-2 bg-[#1A42BC] text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Sign in</button>
                        <div className="flex justify-end items-center mt-3">
                            <a href="#" className="text-xs text-[#1A42BC]">Forgot Password</a>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-gray-500 sm:text-xs md:text-sm lg:text-sm">Or Sign in With</p>
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


                        {/* register link */}
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