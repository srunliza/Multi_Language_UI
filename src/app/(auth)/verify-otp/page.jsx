"use client";
import optImage from "../../../../public/assets/icons/verify-otp.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { otpService } from "@/service/auth.service";

const VerifyOtpPage = () => {
  const [value, setValue] = useState('');

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timeRemaining, setTimeRemaining] = useState(2 * 60); // 5 minutes in seconds
  const [otpError, setOtpError] = useState("");
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
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")} Sec`;
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
    setTimeRemaining(2 * 60); // Reset timer
    setIsOtpExpired(false);
    setOtp(new Array(6).fill("")); // Clear OTP inputs
    setOtpError("");
    // TODO: Add logic to re-send OTP to user's email
  };

  // Function to handle button click
  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 6) {
      setOtpError("Please enter a valid 6-digit OTP.");
      return;
    }
    // TODO: Add logic to verify OTP
    router.push("/reset-password"); // Navigate to the reset password page
  };

  const handleVerifyOtpClick = async () => {
    const otp_service = await otpService(value)
    // router.push("/reset-password");

    console.log("response: ", otp_service)
  };


  return (
    <main className="bg-[url('/assets/images/background.png')] bg-cover bg-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
        {/* card */}
        <div className="bg-white pt-10 pb-8 px-8 mt-8 rounded-3xl shadow-xl max-w-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]">
          {/* title */}
          <h2 className="text-3xl font-bold text-[#1A42BC] mb-4 text-center">
            Verification
          </h2>

          {/* subtitle */}
          <div className="text-gray-600 text-sm mb-6 text-center">
            <p>Don't worry! It happens.</p>
            <p>We will send you a one-time password to this email address.</p>
          </div>

          {/* otp image */}
          <div className="flex justify-center mb-6">
            <Image src={optImage} width={310} height={310} alt="OTP Image" />
          </div>

          <h3 className="text-2xl font-semibold text-center text-gray-700 mb-2">
            OTP VERIFICATION
          </h3>
          <p className="text-center text-gray-600 text-sm mb-8">
            Enter the OTP sent to your email address
          </p>

          {/* input otp code */}
          <div className="flex justify-center mb-6">
            <div className="space-y-4">
              <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <div className="text-center text-sm text-gray-700">
                {value === ""
                  ? "Enter your one-time password."
                  : `You entered: ${value}`}
              </div>
            </div>
          </div>

          {/* countdown timer */}
          <div className="text-center text-gray-700 text-sm font-medium mb-3">
            {formatTime(timeRemaining)}
          </div>

          {/* resend code link */}
          <div className="text-center text-gray-600 text-xs mb-6">
            Didn't receive code?{" "}
            <a
              href="#"
              onClick={handleResendOtp}
              className="text-[#1A42BC] font-medium hover:underline"
            >
              Re-send
            </a>
          </div>

          {/* submit button */}
          <div className="text-center">
            <button
              onClick={handleVerifyOtpClick}
              type="button"
              className="bg-[#1A42BC] hover:bg-[#2d1abc] text-white text-md py-3 px-24 rounded-xl transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VerifyOtpPage;
