"use client";
import { useState } from "react";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useRouter } from "next/navigation";
import { DatePicker } from "@nextui-org/react";
import Link from "next/link";
import { registerService } from "@/service/auth.service";
import { Select } from "flowbite-react";
import { registerSchema } from "@/validationSchema";

const RegisterPage = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const handleValidation = (name, value) => {
    try {
      registerSchema.pick({ [name]: true }).parse({ [name]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    } catch (e) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: e.errors[0].message,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const userDetail = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      gender: data.get("gender"),
      birthDate: data.get("birthDate"),
      password: data.get("password"),
    };

    // Ensure the object is in the desired order
    const orderedUserDetail = {
      firstName: userDetail.firstName,
      lastName: userDetail.lastName,
      email: userDetail.email,
      gender: userDetail.gender,
      birthDate: userDetail.birthDate,
      password: userDetail.password,
    };

    console.log(orderedUserDetail);

    try {
      registerSchema.parse(orderedUserDetail);
      const result = await registerService(orderedUserDetail);
      console.log("Registration successful:", result);
      router.push("/verify-otp");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

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

          <form onSubmit={handleSubmit}>
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
                  aria-label="First Name"
                  name="firstName"
                  className={`w-full px-10 py-2.5 text-sm border ${
                    errors.firstName ? "border-red-500" : "border-[#1A42BC]"
                  } bg-gray-50 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm`}
                  placeholder="Enter Your First Name"
                  onBlur={(e) => handleValidation("firstName", e.target.value)}
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <GroupOutlinedIcon fontSize="small" />
                </span>
              </div>
              {errors.firstName && (
                <p className="text-red-500 text-xs">{errors.firstName}</p>
              )}
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
                  aria-label="Last Name"
                  name="lastName"
                  className={`w-full px-10 py-2.5 text-sm border ${
                    errors.lastName ? "border-red-500" : "border-[#1A42BC]"
                  } bg-gray-50 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm`}
                  placeholder="Enter Your Last Name"
                  onBlur={(e) => handleValidation("lastName", e.target.value)}
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <GroupOutlinedIcon fontSize="small" />
                </span>
              </div>
              {errors.lastName && (
                <p className="text-red-500 text-xs">{errors.lastName}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-3">
              <div className="flex flex-col">
                <label
                  htmlFor="Gender"
                  className="text-gray-700 font-medium mb-1 sm:text-sm md:text-sm lg:text-[15px]"
                >
                  Gender
                </label>
                <div className="relative">
                  <div className="block appearance-none w-full bg-white border border-blue-600 text-gray-700 text-sm rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <Select
                      name="gender"
                      placeholder="Select Gender"
                      className="w-full"
                      onBlur={(e) => handleValidation("gender", e.target.value)}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Select>
                  </div>
                </div>
                {errors.gender && (
                  <p className="text-red-500 text-xs">{errors.gender}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="Birth-Date"
                  className="text-gray-700 font-medium mb-1 sm:text-sm md:text-sm lg:text-[15px]"
                >
                  Date of birth
                </label>
                <div className="relative">
                  <div className="block w-full border bg-white border-blue-600 text-gray-700 text-sm rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm">
                    <DatePicker
                      id="birthDate"
                      aria-label="Date of Birth"
                      name="birthDate"
                      className="w-full"
                      isRequired
                      onBlur={(e) =>
                        handleValidation("birthDate", e.target.value)
                      }
                    />
                  </div>
                </div>
                {errors.birthDate && (
                  <p className="text-red-500 text-xs">{errors.birthDate}</p>
                )}
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="Email"
                className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-sm lg:text-[15px]"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  aria-label="Email"
                  name="email"
                  className={`w-full px-10 py-2.5 text-sm bg-gray-50 text-gray-800 border ${
                    errors.email ? "border-red-500" : "border-[#1A42BC]"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm`}
                  placeholder="Enter Your Email"
                  onBlur={(e) => handleValidation("email", e.target.value)}
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <EmailOutlinedIcon fontSize="small" />
                </span>
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="Password"
                className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-sm lg:text-[15px]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  aria-label="Password"
                  name="password"
                  className={`w-full bg-gray-50 px-10 py-2.5 text-sm text-gray-800 border ${
                    errors.password ? "border-red-500" : "border-[#1A42BC]"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm`}
                  placeholder="Enter Your Password"
                  onBlur={(e) => handleValidation("password", e.target.value)}
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <HttpsOutlinedIcon fontSize="small" />
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
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
              Do you have an account?{" "}
            </span>
            <Link href="login" className="text-blue-800 text-xs pl-1">
              {" "}
              Sign In{" "}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
