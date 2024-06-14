"use client";
import Image from "next/image";
import { EmailOutlined, HttpsOutlined } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const router = new useRouter();

  async function handleLogin(userInfo) {
    const newUserInfo = {
      email: userInfo.get("email"),
      password: userInfo.get("password"),
    };

    const res = signIn("credentials", {
      redirect: false,
      ...newUserInfo,
    });

    if ((await res).ok) {
      router.push("/employee/dashboard");
    } else {
      console.log("login failed!");
    }
  }
 

  return (
    <main className="bg-[url('/assets/images/background.png')] bg-cover bg-center w-full min-h-screen flex justify-center">
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-2xl mt-7 shadow-lg p-8 sm:p-5 md:px-12 max-w-md w-full">
          <h2 className="sm:text-lg md:text-xl lg:text-2xl mt-2 font-bold text-[#1A42BC] mb-2">
            Welcome to Sign in!
          </h2>
          <p className="text-gray-600 sm:text-xs md:text-xs lg:text-sm mb-4">
            Hi, enter your details to login to your account
          </p>
          <div className="flex justify-center items-center mb-3">
            <Image
              src="/assets/icons/login.svg"
              width={120}
              height={120}
              alt="change password image"
            />
          </div>
          <form action={handleLogin}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base"
              >
                Email
              </label>
              <div className="relative text-gray-800 w-80">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-10 py-2.5 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  placeholder="example@gmail.com"
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <EmailOutlined fontSize="small" />
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base"
              >
                Password
              </label>
              <div className="relative text-gray-800 w-80">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-10 py-2.5 border bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  placeholder="Enter Your Password"
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <HttpsOutlined fontSize="small" />
                </span>
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"></span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-2 bg-[#1A42BC] text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign in
            </button>
            <div className="flex justify-end items-center mt-3">
              <Link href="forget-password" className="text-xs text-[#1A42BC]">
                Forgot Password
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-gray-500 sm:text-xs md:text-sm lg:text-sm">
                Or Sign in With
              </p>
            </div>
            <div className="flex justify-center items-center mt-3 gap-5">
              <a className="flex items-center justify-center bg-white border border-gray-300 rounded-full py-2 px-2 hover:bg-gray-100">
                <Image
                  src="/assets/icons/google.svg"
                  width={20}
                  height={20}
                  alt="google icon"
                />
              </a>
              <a className="flex items-center justify-center bg-white border border-gray-300 rounded-full py-2 px-2 hover:bg-gray-100">
                <Image
                  src="/assets/icons/github.svg"
                  width={20}
                  height={20}
                  alt="github"
                />
              </a>
            </div>
            <div className="flex justify-center items-center mt-3">
              <p className="text-gray-500 sm:text-xs md:text-sm lg:text-xs">
                If you don't have an account?
                <Link href="register" className="text-[#1A42BC] pl-1">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
