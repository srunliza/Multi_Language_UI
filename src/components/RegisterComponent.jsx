'use client'
import { useState } from 'react';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


const RegisterComponent = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

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


    return ( 

        <main className="bg-[url('/assets/images/background.jpg')] bg-cover bg-center w-full min-h-screen">
            <div className='flex justify-center items-center'>
                <div className="bg-white rounded-2xl mt-10 shadow-lg p-8 sm:p-10 md:px-14 md:py-8 max-w-md w-full">

                    {/* title */}
                    <h2 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1A42BC] pb-1">Welcome to Sign up!</h2>
                    <p className="text-gray-600 sm:text-xs md:text-sm lg:text-base mb-5">Enter your details to create an account</p>


                    {/* form */}
                    <form>

                        {/* input first name */}
                        <div className="mb-2">
                            <label htmlFor="first-name" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">First Name</label>
                            <div className="relative">
                                <input type="text" id="first-name" className="w-full px-10 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm" placeholder="Enter Your First Name"/>
                                <span className='absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500'>
                                    <GroupOutlinedIcon fontSize='small'/>
                                </span>
                            </div>
                        </div>

                        {/* input last name */}
                        <div className="mb-2">
                            <label htmlFor="last-name" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">Last Name</label>
                            <div className="relative">
                                <input type="text" id="last-name" className="w-full px-10 text-gray-800 py-2 border rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm" placeholder="Enter Your Last Name"/>
                                <span className='absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500'>
                                    <GroupOutlinedIcon fontSize='small'/>
                                </span>
                            </div>
                        </div>

                        {/* select type */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-2">
                            {/* <!-- Gender Input --> */}
                            <div className="flex flex-col">
                                <label htmlFor="gender" className="text-gray-700 font-medium mb-1 sm:text-sm md:text-base lg:text-base">Gender</label>
                                <div className="relative">
                                    <select
                                        id="gender"
                                        className="block appearance-none w-full bg-white border border-blue-600 text-gray-700 py-2 px-4 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        <option>Female</option>
                                        <option>Male</option>
                                        <option>Other</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                        <ExpandMoreOutlinedIcon fontSize='small'/>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Date of Birth Input --> */}
                            <div className="flex flex-col">
                                <label htmlFor="dob" className="text-gray-700 font-medium mb-1 sm:text-sm md:text-base lg:text-base">Date of birth</label>
                                <div className="relative">
                                    {/* <input
                                        type="date"
                                        id="dob"
                                        className="block w-full bg-white border border-blue-600 text-gray-700 py-2 px-4 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm"
                                        placeholder="dd/mm/yyyy"
                                    /> */}

                                    <input
                                    type="date"
                                    id="dob"
                                    className="block w-full bg-white border border-blue-600 text-gray-700 py-2 px-4 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 placeholder:text-sm"
                                    placeholder="dd/mm/yyyy"
                                    style={{ '::placeholder': { color: '#9CA3AF', fontSize: '1px' } }}
                                    />

                                    <div className="pointer-events-none text-gray-500 absolute inset-y-0 right-0 flex items-center px-2">
                                        {/* <DateRangeOutlinedIcon fontSize='small'/> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* input email */}
                        <div className="mb-2">
                            <label htmlFor="email" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">Email</label>
                            <div className="relative">
                                <input type="email" id="email" className={`w-full px-10 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm ${error ? 'border-red-500' : ''}`}
                                value={email}
                                onChange={handleChange}
                                placeholder="Enter Your Email"/>

                                <span className='absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500'>
                                    <EmailOutlinedIcon fontSize='small'/>
                                </span>
                            </div>
                            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                        </div>

                        {/* input password */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">Password</label>
                            <div className="relative">
                                <input type="password" id="password" className="w-full px-10 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm" placeholder="Enter Your Password"/>
                                <span className='absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500'>
                                    <HttpsOutlinedIcon fontSize='small'/>
                                </span>
                            </div>
                        </div>


                        {/* button submit */}
                        <button type="submit" className="w-full mt-2 bg-[#1A42BC] text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Sign up</button>
                    </form>
                </div>
            </div>
        </main>
    
     );
}
 
export default RegisterComponent;