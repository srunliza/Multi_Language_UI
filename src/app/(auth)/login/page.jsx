'use client'
import { useState } from 'react';
import Image from 'next/image';
import { EmailOutlined, HttpsOutlined, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import login from '../../../../public/assets/icons/login.svg';
import google from '../../../../public/assets/icons/google.svg';
import github from '../../../../public/assets/icons/github.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  //handle validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //handle email change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setEmailError('Email is required.');
    } else if (!validateEmail(value)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  //handle password change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!value) {
      setPasswordError('Password is required.');
    } else if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
    } else {
      setPasswordError('');
    }
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!email) {
      setEmailError('Email is required.');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required.');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      console.log('Form submitted successfully!');
    }
  };

  //handle hide and show password
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const router = useRouter();

  //use to redirect to another path
  const handleLoginClick = () => {
    router.push('/employee/dashboard')
  }


  return (
    // background image
    <main className="bg-[url('/assets/images/background.jpg')] bg-cover bg-center w-full min-h-screen flex justify-center">
      <div className='flex justify-center items-center'>
        {/* card */}
        <div className="bg-white rounded-2xl mt-7 shadow-lg p-8 sm:p-5 md:px-12 max-w-md w-full">

          {/* title */}
          <h2 className="sm:text-lg md:text-xl lg:text-2xl mt-2 font-bold text-[#1A42BC] mb-2">Welcome to Sign in!</h2>
          {/* subtitle */}
          <p className="text-gray-600 sm:text-xs md:text-xs lg:text-sm mb-4">Hi, enter your details to login to your account</p>

          {/* image */}
          <div className="flex justify-center items-center mb-3">
            <Image src={login} width={120} height={120} alt="change password image" />
          </div>


          {/* form */}
          <form onSubmit={handleSubmit}>

            {/* email input */}
            <div className="mb-2">
              <label htmlFor="email" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">Email</label>
              <div className="relative text-gray-800 w-80">
                <input
                  type="email"
                  id="email"
                  className={`w-full px-10 py-2.5 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm ${emailError ? 'border-red-500' : ''}`}
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <EmailOutlined fontSize="small" />
                </span>
              </div>

              {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
            </div>


            {/* password input */}
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base">
                Password
              </label>
              <div className="relative text-gray-800 w-80">

                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  className={`w-full px-10 py-2.5 border bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm ${passwordError ? 'border-red-500' : ''}`}
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={handlePasswordChange}
                />

                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <HttpsOutlined fontSize="small" />
                </span>
                <span
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                  onClick={togglePasswordVisibility}
                > 
                  {passwordVisible ? <VisibilityOutlined fontSize="small" /> : <VisibilityOffOutlined fontSize="small" />}
                </span>
              </div>

              {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
            </div>


            {/* button submit */}
            <button onClick={handleLoginClick} type="submit" className="w-full mt-2 bg-[#1A42BC] text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Sign in</button>

            {/* link to forget password */}
            <div className="flex justify-end items-center mt-3">
              <Link href="forget-password" className="text-xs text-[#1A42BC]">
                Forgot Password
              </Link>
            </div>

            {/* or sign in with */}
            <div className="flex justify-center items-center">
              <p className="text-gray-500 sm:text-xs md:text-sm lg:text-sm">Or Sign in With</p>
            </div>


            {/* login with google or github */}
            <div className="flex justify-center items-center mt-3 gap-5">
              <a className="flex items-center justify-center bg-white border border-gray-300 rounded-full py-2 px-2 hover:bg-gray-100">
                <Image src={google} width={20} height={20} alt='google icon' />
              </a>
              <a className="flex items-center justify-center bg-white border border-gray-300 rounded-full py-2 px-2 hover:bg-gray-100">
                <Image src={github} width={20} height={20} alt='github' />
              </a>
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

export default LoginPage;
