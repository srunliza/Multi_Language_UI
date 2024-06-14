"use client";
import forgetPassword from "../../../../public/assets/icons/forget-password.svg";
import { EmailOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { forgotPasswordService } from "@/service/auth.service";
import { useState } from "react";

const ForgetPasswordPage = () => {
  // Initialize the router
  const router = useRouter();
  const [error, setError] = useState(null);

  // Function to handle button click
  async function handleForgot(data) {
    const email = data.get("email");

    const res = await forgotPasswordService(email);
    console.log(res.code);

    if (res.code === 200) {
      router.push(`/forget-verify?email=${email}`);
    } else {
      setError("Failed to send forgot password email");
    }
  }

  return (
    <main className="bg-[url('/assets/images/background.png')] bg-cover bg-center w-full h-screen flex justify-center">
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-2xl mt-10 shadow-lg p-8 md:px-12 pb-7 max-w-md w-full sm:ml-px">
          {/* title */}
          <h2 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1A42BC] mb-2">
            Forget Password
          </h2>
          <p className="text-gray-600 sm:text-[10px] md:text-xs lg:text-sm mb-4">
            Enter your registered email below
          </p>

          {/* image */}
          <div className="flex justify-center items-center mb-4">
            <Image
              src={forgetPassword}
              width={200}
              height={200}
              alt="change password image"
            />
          </div>

          {/* form */}
          <form action={handleForgot}>
            {/* input new password */}
            <div className="mb-3 text-gray-700">
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base"
              >
                Email
              </label>
              <div className="relative w-80">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-10 py-2.5 text-sm border bg-gray-50 rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  placeholder="Enter Your Email"
                />

                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <EmailOutlined fontSize="small" />
                </span>
              </div>
            </div>

            {/* button submit */}
            <button
              type="submit"
              className="w-full mt-2 bg-[#1A42BC] text-white text-base py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>

            {/* remember password or not */}
            <div className="text-gray-500 text-sm mt-5 flex justify-center items-center">
              <span>Remember your password?</span>
              <Link href="login" className="text-blue-800 text-sm px-2">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ForgetPasswordPage;
