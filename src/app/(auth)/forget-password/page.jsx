'use client'
import forgetPassword from "../../../../public/assets/images/forget-password.png"
import { EmailOutlined } from '@mui/icons-material';
import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';


const ForgetPasswordPage = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Validate form
  const validateForm = () => {
    if (!email) {
      setError('Email is required.');
      return false;

    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid.');
      return false;
    }
    setError('');
    return true;
  };

   // Submit // Validate email format
  const validateEmail = (email) => {
    if (!email) {
      setError('Email is required.');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format.');
      return false;
    }
    setError('');
    return true;
  };


  // Handle email input change
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail); // Validate email on input change
  };

  // Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };


    // Initialize the router
  const router = useRouter();

  // Function to handle button click
  const handleForgetPasswordClick = () => {
    router.push('/verify-otp'); // Navigate to the login page
  };
    


  return ( 
        <main className="bg-[url('/assets/images/background.jpg')] bg-cover bg-center w-full h-screen flex justify-center">
          <div className='flex justify-center items-center'>
              <div className="bg-white rounded-2xl mt-10 shadow-lg p-8 md:px-12 pb-7 max-w-md w-full sm:ml-px">

                  {/* title */}
                  <h2 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1A42BC] mb-2">Forget Password</h2>
                  <p className="text-gray-600 sm:text-[10px] md:text-xs lg:text-sm mb-4">Enter your registered email below</p>

                  {/* image */}
                  <div className='flex justify-center items-center mb-4'>
                      <Image src={forgetPassword} width={200} height={200} alt='change password image'/>
                  </div>

                  {/* form */}
                  <form action={validateForm}>

                      {/* input new password */}
                      <div className="mb-3 text-gray-700">
                          <label htmlFor="email" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">Email</label>
                          <div className="relative w-80">
                            <input type="email" id="email" className={`w-full px-10 py-2.5 text-sm border bg-gray-50 rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm ${error ?'border-red-500' : ''}`}
                            onChange={handleEmailChange}
                            value={email}
                            placeholder="Enter Your Email"/>

                            <span className='absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500'>
                            <EmailOutlined fontSize="small" />
                            </span>
                          </div>

                          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                      </div>

                      
                      {/* button submit */}
                      <button type="submit" onClick={handleForgetPasswordClick} className="w-full mt-2 bg-[#1A42BC] text-white text-base py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Submit</button>

                      {/* remember password or not */}
                      <div className="text-gray-500 text-sm mt-5 flex justify-center items-center">
                        <span>Remember your password?</span>
                        <Link href="login" className="text-blue-800 text-sm px-2">Sign In </Link>
                      </div>
                    
                  </form>
              </div>
          </div>
      </main>
   );
}
 
export default ForgetPasswordPage;