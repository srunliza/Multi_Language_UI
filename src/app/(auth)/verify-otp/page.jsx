'use client'
import optImage from "../../../../public/assets/images/verify-otp.png";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [timeRemaining, setTimeRemaining] = useState(1 * 60); // 5 minutes in seconds
  const [otpError, setOtpError] = useState('');
  const [isOtpExpired, setIsOtpExpired] = useState(false);

  // Initialize the router
  const router = useRouter();

  // Countdown timer
  useEffect(() => {
    if (timeRemaining <= 0) {
      setIsOtpExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  // Format time as mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} Sec`;
  };

  // Handle OTP change
  const handleOtpChange = (element, index) => {
    if (/[^0-9]/.test(element.value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  // Handle resend OTP
  const handleResendOtp = () => {
    setTimeRemaining(1 * 60); // Reset timer
    setIsOtpExpired(false);
    setOtp(new Array(6).fill('')); // Clear OTP inputs
    setOtpError('');
    // TODO: Add logic to re-send OTP to user's email
  };

  // Function to handle button click
  const handleVerifyOtp = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 6) {
      setOtpError('Please enter a valid 6-digit OTP.');
      return;
    }
    // TODO: Add logic to verify OTP
    router.push('/reset-password'); // Navigate to the reset password page
  };

  const handleVerifyOtpClick = () => {
    router.push('/reset-password')
  }


  return (
    // background
    <main className="bg-[url('/assets/images/background.jpg')] bg-cover bg-center w-full min-h-screen">
      <div className="flex items-center justify-center min-h-screen">
        {/* card */}
        <div className="bg-white  pt-7 mt-8 rounded-2xl shadow-lg p-8 max-w-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[28.5%]">

          {/* title */}
          <h2 className="text-2xl font-bold text-[#1A42BC] mb-4 pl-1">
            Verification
          </h2>
          
          {/* subtitle */}
          <p className="text-gray-600 text-xs mb-1 pl-1">
            Don't worry! It happens.
          </p>
          <p className="text-gray-600 text-xs mb-1 pl-1">
            We will send you a one-time password to this email address.
          </p>

          {/* opt image */}
          <div className="flex justify-center">
            <Image src={optImage} width={310} height={310} alt="opt image" />
          </div>

          <h3 className="text-[24px] font-semibold text-center text-gray-700 mb-1">
            OTP VERIFICATION
          </h3>
          <p className="text-center text-gray-600 text-sm mb-6">
            Enter the OTP sent to your email address
          </p>

          
          {/* input opt code */}
          <div className="flex justify-center mb-4 gap-2">
            <input type="text"
                maxLength="1"
                className="otp-input mx-1 text-center w-8 h-8 border rounded-lg text-black border-[#1A42BC]" />
            <input type="text"
                maxLength="1"
                className="otp-input mx-1 text-center w-8 h-8 border rounded-lg text-black border-[#1A42BC]" />
            <input type="text"
                maxLength="1"
                className="otp-input mx-1 text-center w-8 h-8 border rounded-lg text-black border-[#1A42BC]" />
            <input type="text"
                maxLength="1"
                className="otp-input mx-1 text-center w-8 h-8 border rounded-lg text-black border-[#1A42BC]" />
            <input type="text"
                maxLength="1"
                className="otp-input mx-1 text-center w-8 h-8 border rounded-lg text-black border-[#1A42BC]" />
            <input type="text"
                maxLength="1"
                className="otp-input mx-1 text-center w-8 h-8 border rounded-lg text-black border-[#1A42BC]" />
          </div>
          {otpError && <p className='text-red-500 text-sm text-center'>{otpError}</p>}

          {/* countdown timer */}
          <div className="text-center text-gray-700 text-sm font-normal mb-3">
            {formatTime(timeRemaining)}
          </div>

          <div className="text-center text-gray-600 text-xs mb-3">
            Don't receive code?{" "}
            <a href="#" onClick={handleResendOtp} className="text-black font-medium text-sx">
              Re-send
            </a>
          </div>

          {/* button submit */}
          <div className="text-center">
            <button onClick={handleVerifyOtpClick} type="button" className="bg-[#1A42BC] hover:bg-[#2d1abc] text-white text-md py-2 px-16 sm:px-20 md:px-24 lg:px-32 rounded-xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VerifyOtpPage;
