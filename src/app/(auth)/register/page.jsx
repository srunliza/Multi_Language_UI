"use client";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useRouter } from "next/navigation";
import { DatePicker } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import { registerSchema } from "@/validationSchema";
import { registerService } from "@/service/auth.service";

const RegisterPage = () => {
  const router = useRouter();

  async function handleRegister(userDetail) {
    const newUserDetail = {
      firstName: userDetail.get("first-name"),
      lastName: userDetail.get("last-name"),
      email: userDetail.get("email"),
      gender: userDetail.get("gender"),
      birthDate: userDetail.get("date-register"),
      password: userDetail.get("password"),
    };

    console.log("User Details: ", newUserDetail)

    const register = await registerService(newUserDetail);

    if (register.code === 201) {
      router.push('/verify-otp')
    } else {
      console.log("failed")
    }

   
  }

  return (
    <main className="bg-[url('/assets/images/background.png')] bg-cover bg-center w-full min-h-screen flex justify-center">
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-2xl mt-4 shadow-lg p-8 sm:p-10 md:px-14 md:py-8 max-w-md w-full">
          <h2 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1A42BC] pb-1">
            Welcome to Sign up!
          </h2>
          <p className="text-gray-600 sm:text-xs md:text-sm lg:text-[15px] mb-5">
            Enter your details to create an account
          </p>

          <form action={handleRegister}>
            <div className="mb-3">
              <label
                htmlFor="first-name"
                className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-sm lg:text-[15px]"
              >
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  aria-label="First Name"
                  className="w-full px-10 py-2.5 text-sm border bg-gray-50 rounded-lg text-gray-800 focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  placeholder="Enter Your First Name"
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <GroupOutlinedIcon fontSize="small" />
                </span>
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="last-name"
                className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-sm lg:text-[15px]"
              >
                Last Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  aria-label="Last Name"
                  className="w-full px-10 text-gray-800 py-2.5 text-sm border bg-gray-50 rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  placeholder="Enter Your Last Name"
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <GroupOutlinedIcon fontSize="small" />
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-3">
              <div className="flex flex-col">
                <label
                  htmlFor="gender"
                  className="text-gray-700 font-medium mb-1 sm:text-sm md:text-sm lg:text-[15px]"
                >
                  Gender
                </label>
                <div className="relative">
                  <div className="block appearance-none w-full bg-white border border-blue-600 text-gray-700 text-sm pl-4 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <Select
                      id="gender"
                      name="gender"
                      placeholder="Select Gender"
                      className="min-w-full"
                    >
                      <SelectItem key="male" value="Male">
                        Male
                      </SelectItem>
                      <SelectItem key="female" value="Female">
                        Female
                      </SelectItem>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="dob"
                  className="text-gray-700 font-medium mb-1 sm:text-sm md:text-sm lg:text-[15px]"
                >
                  Date of birth
                </label>
                <div className="relative">
                  <div className="block w-full border bg-white border-blue-600 text-gray-700 text-sm px-4 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm">
                    <DatePicker
                      id="date-register"
                      name="date-register"
                      aria-label="Date of Birth"
                      className="max-w-80px"
                      isRequired
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-sm lg:text-[15px]"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Email"
                  className="w-full px-10 py-2.5 text-sm bg-gray-50 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  placeholder="Enter Your Email"
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <EmailOutlinedIcon fontSize="small" />
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-sm lg:text-[15px]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  aria-label="Password"
                  className="w-full bg-gray-50 px-10 py-2.5 text-sm text-gray-800 border rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  placeholder="Enter Your Password"
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <HttpsOutlinedIcon fontSize="small" />
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#1A42BC] text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              SignUp
            </button>
          </form>

          <div className="mt-3 flex justify-center items-center">
            <span className="text-gray-700 text-xs">
              Do you have an account?
            </span>
            <Link href="login" className="text-blue-800 text-xs pl-1">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
