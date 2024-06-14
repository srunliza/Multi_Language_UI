"use client";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import changePasswordImage from "../../../../public/assets/icons/reset-password.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPasswordService } from "@/service/auth.service";
import { useState } from "react";

const ResetPasswordPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  
  const [error, setError] = useState(null);
  async function handleResetPassword(data) {
    const passwords = {
      password: data.get("newPassword"),
      confirmPassword: data.get("confirmPassword"),
    };

    if (passwords.password !== passwords.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const response = await resetPasswordService(email, passwords);
    if (response.code === 200) {
      router.push("/login");
    } else {
      setError("Failed to reset password"); // Set error message
    }
  }

  return (
    // background
    <main className="bg-[url('/assets/images/background.png')] bg-cover bg-center w-full min-h-screen">
      <div className="flex justify-center items-center">
        {/* card */}
        <div className="bg-white rounded-2xl mt-12 shadow-lg p-8 md:px-14 pb-10 max-w-md w-full sm:ml-px">
          {/* title and subtitle */}
          <h2 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1A42BC] mb-2">
            Change New Password
          </h2>
          <p className="text-gray-600 sm:text-[10px] md:text-xs lg:text-sm mb-4">
            Enter your new password below
          </p>

          {/* image */}
          <div className="flex justify-center items-center mb-4">
            <Image
              src={changePasswordImage}
              width={200}
              height={200}
              alt="change password image"
            />
          </div>

          {/* form */}
          <form action={handleResetPassword}>
            {/* input new password */}
            <div className="mb-3">
              <label
                htmlFor="new-password"
                className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base"
              >
                New Password
              </label>
              <div className="relative text-gray-800">
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  className="w-full px-10 py-2 border rounded-lg focus:outline-none bg-gray-50 focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  placeholder="Enter Your Password"
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <HttpsOutlinedIcon fontSize="small" />
                </span>
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"></span>
              </div>
            </div>

            {/* input confirm password */}
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base"
              >
                Confirm Password
              </label>
              <div className="relative text-gray-800">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-10 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  placeholder="Confirm Your Password"
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <HttpsOutlinedIcon fontSize="small" />
                </span>
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"></span>
              </div>
            </div>

            {/* button submit */}
            <button
              type="submit"
              className="w-full mt-2 bg-[#1A42BC] text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ResetPasswordPage;
