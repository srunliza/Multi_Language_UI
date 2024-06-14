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
import { otpVerifyService } from "@/service/auth.service";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timeRemaining, setTimeRemaining] = useState(2 * 60); // 2 minutes in seconds
  const [otpError, setOtpError] = useState("");
  const [isOtpExpired, setIsOtpExpired] = useState(false);
  const router = useRouter();

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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} Sec`;
  };

  const handleOtpChange = (element, index) => {
    if (/[^0-9]/.test(element.value)) {
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleResendOtp = () => {
    setTimeRemaining(2 * 60);
    setIsOtpExpired(false);
    setOtp(new Array(6).fill(""));
    setOtpError("");
    // TODO: Add logic to re-send OTP to user's email
  };

  const handleVerifyOtpClick = async () => {
    const enteredOtp = otp.join("");
    console.log(enteredOtp);
    if (enteredOtp.length < 6) {
      setOtpError("Please enter a valid 6-digit OTP.");
      return;
    }
    try {
      const response = await otpVerifyService(enteredOtp);
      console.log("response: ", response);

      // Check if response contains a success message or JSON object
      if (
        typeof response === "string" &&
        response.includes("successfully verified")
      ) {
        router.push("/login");
      } else if (response.success) {
        // Assuming response is an object with a 'success' property
        router.push("/login");
      } else {
        setOtpError("Failed to verify OTP. Please try again.");
      }
    } catch (error) {
      setOtpError("Failed to verify OTP. Please try again.");
      console.error("Error verifying OTP: ", error);
    }
  };
  return (
    <main className="bg-[url('/assets/images/background.png')] bg-cover bg-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
        <div className="bg-white pt-10 pb-8 px-8 mt-8 rounded-3xl shadow-xl max-w-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]">
          <h2 className="text-3xl font-bold text-[#1A42BC] mb-4 text-center">
            Verification
          </h2>
          <div className="text-gray-600 text-sm mb-6 text-center">
            <p>Don't worry! It happens.</p>
            <p>We will send you a one-time password to this email address.</p>
          </div>
          <div className="flex justify-center mb-6">
            <Image src={optImage} width={310} height={310} alt="OTP Image" />
          </div>
          <h3 className="text-2xl font-semibold text-center text-gray-700 mb-2">
            OTP VERIFICATION
          </h3>
          <p className="text-center text-gray-600 text-sm mb-8">
            Enter the OTP sent to your email address
          </p>
          <div className="flex justify-center mb-6">
            <div className="space-y-1">
              <InputOTP
                maxLength={6}
                value={otp.join("")}
                onChange={(value) => setOtp(value.split(""))}
              >
                <InputOTPGroup className="gap-2">
                  {otp.map((_, index) => (
                    <InputOTPSlot
                      key={index}
                      className="border border-blue-600"
                      index={index}
                      value={otp[index]}
                      onChange={(e) => handleOtpChange(e.target, index)}
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
              <div className="text-center text-sm text-gray-700">
                {otp.join("") === ""
                  ? "Enter your one-time password."
                  : `You entered: ${otp.join("")}`}
              </div>
            </div>
          </div>
          <div className="text-center text-gray-700 text-sm font-medium mb-3">
            {formatTime(timeRemaining)}
          </div>
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
          <div className="text-center">
            <button
              onClick={handleVerifyOtpClick}
              type="button"
              className="bg-[#1A42BC] hover:bg-[#2d1abc] text-white text-md py-3 px-24 rounded-xl transition duration-300"
            >
              Submit
            </button>
          </div>
          {otpError && (
            <div className="text-center text-red-500 text-sm mt-4">
              {otpError}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default VerifyOtpPage;
