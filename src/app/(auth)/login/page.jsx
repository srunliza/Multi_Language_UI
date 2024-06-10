"use client";
import { useState } from "react";
import Image from "next/image";
import {
  EmailOutlined,
  HttpsOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { loginSchema } from "@/validationSchema";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const router = useRouter();

  const validateField = (name, value) => {
    try {
      loginSchema.pick({ [name]: true }).parse({ [name]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    } catch (e) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: e.errors[0].message,
      }));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationResult = loginSchema.safeParse({
      email,
      password,
    });

    if (validationResult.success) {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res.ok) {
        router.push("/employee/dashboard");
      } else {
        console.log("Login failed");
      }
    } else {
      const fieldErrors = validationResult.error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
      setErrors(fieldErrors);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
          <form onSubmit={handleSubmit}>
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
                  className={`w-full px-10 py-2.5 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={(e) => validateField("email", e.target.value)}
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <EmailOutlined fontSize="small" />
                </span>
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
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
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  className={`w-full px-10 py-2.5 border bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={(e) => validateField("password", e.target.value)}
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <HttpsOutlined fontSize="small" />
                </span>
                <span
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <VisibilityOutlined fontSize="small" />
                  ) : (
                    <VisibilityOffOutlined fontSize="small" />
                  )}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
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
