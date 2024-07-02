"use client";
import optImage from "../../../../public/assets/icons/verify-otp.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  otpVerifyService,
  forgotPasswordService,
} from "@/service/auth.service";
import { z } from "zod";

const otpSchema = z.string().length(6, "Please enter a valid 6-digit OTP.");

const VerifyOtpPageContent = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timeRemaining, setTimeRemaining] = useState(2 * 60); // 2 minutes in seconds
  const [otpError, setOtpError] = useState("");
  const [otpSuccess, setOtpSuccess] = useState(""); // State for success message
  const [isOtpExpired, setIsOtpExpired] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

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
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")} Sec`;
  };

  const handleOtpChange = (element, index) => {
    const newOtp = [...otp];
    if (element.value === "") {
      newOtp[index] = "";
      if (element.previousSibling) {
        element.previousSibling.focus();
      }
    } else {
      if (/[^0-9]/.test(element.value)) {
        return;
      }
      newOtp[index] = element.value;
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    }
    setOtp(newOtp);
  };

  const handleResendOtp = async () => {
    setTimeRemaining(2 * 60);
    setIsOtpExpired(false);
    setOtp(new Array(6).fill(""));
    setOtpError("");
    setOtpSuccess(""); // Clear any previous success message

    try {
      const res = await forgotPasswordService(email);
      if (res.code === 200) {
        setOtpSuccess("OTP has been resent successfully.");
      } else {
        setOtpError("Failed to resend OTP. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setOtpError("An unexpected error occurred while resending OTP.");
    }
  };

  const handleVerifyOtpClick = async () => {
    const enteredOtp = otp.join("");
    const validation = otpSchema.safeParse(enteredOtp);
    if (!validation.success) {
      setOtpError(validation.error.errors[0].message);
      return;
    }

    setLoading(true);
    try {
      const res = await otpVerifyService(enteredOtp);
      if (res.code === 200) {
        router.push(`/reset-password?email=${email}`);
      } else if (res.status === 403 && res.detail === "OTP has expired.") {
        setOtpError("The OTP has expired. Please request a new one.");
      } else {
        setOtpError("Failed to verify OTP. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setOtpError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[url('/assets/images/background.png')] bg-cover bg-center w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
        <div className="bg-white pt-10 pb-8 px-8 mt-8 rounded-3xl shadow-xl">
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
          {otpSuccess && (
            <div className="text-center text-green-500 text-sm mb-4">
              {otpSuccess}
            </div>
          )}
          <div className="text-center">
            <button
              onClick={handleVerifyOtpClick}
              type="button"
              className="bg-[#1A42BC] hover:bg-[#2d1abc] text-white text-md py-3 px-24 rounded-xl transition duration-300"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
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

const VerifyOtpPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <VerifyOtpPageContent />
  </Suspense>
);

export default VerifyOtpPage;
