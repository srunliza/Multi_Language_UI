"use client";
import { useState } from "react";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useRouter } from "next/navigation";
import { DatePicker } from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import Link from "next/link";



const RegisterPage = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);



  // Validate form
  const validateForm = () => {
    let errors = {};

    if (!firstName) {
      errors.firstName = "First name is required.";
    }

    if (!lastName) {
      errors.lastName = "Last name is required.";
    }

    if (!date) {
      errors.date = "DOB is required.";
    }

    if (!gender) {
      errors.gender = "Gender is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };


  // Handle input first name
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    validateForm();
  };


  //handle input last name
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    validateForm();
  };


  //handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  };


  //handle date change
  const handleDateChange = (e) => {
    setDate(e.target.value);
    validateForm();
  };


  //handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateForm();
  };


  //handle gender change
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    validateForm();
  };


  // Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();

    if (isFormValid) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };


  const router = useRouter();

  // Function to handle button click
  const handleSignupClick = () => {
    router.push("/login"); // Navigate to the login page
  };


  return (
    // background image
    <main className="bg-[url('/assets/images/background.png')] bg-cover bg-center w-full min-h-screen flex justify-center">
      <div className="flex justify-center items-center">

        {/* card */}
        <div className="bg-white rounded-2xl mt-4 shadow-lg p-8 sm:p-10 md:px-14 md:py-8 max-w-md w-full">

          {/* title */}
          <h2 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1A42BC] pb-1">
            Welcome to Sign up!
          </h2>

          <p className="text-gray-600 sm:text-xs md:text-sm lg:text-[15px] mb-5">
            Enter your details to create an account
          </p>


          {/* form */}
          <form onSubmit={handleSubmit}>
            {/* input first name */}
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
                  className="w-full px-10 py-2.5 text-sm border bg-gray-50 rounded-lg text-gray-800 focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  placeholder="Enter Your First Name"
                />

                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <GroupOutlinedIcon fontSize="small" />
                </span>
              </div>
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            {/* input last name */}
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
                  className="w-full px-10 text-gray-800 py-2.5 text-sm border bg-gray-50 rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  value={lastName}
                  onChange={handleLastNameChange}
                  placeholder="Enter Your Last Name"
                />

                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <GroupOutlinedIcon fontSize="small" />
                </span>
              </div>
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            {/* select type */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-3">
              {/* Gender Input */}
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
                      placeholder="Select Gender "
                      className="min-w-full"
                    >
          
                      <SelectItem key="male" value="male">Male</SelectItem>
                      <SelectItem key="female" value="female">Female</SelectItem>
                    
                    </Select>
                   </div>

                </div>
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                )}
              </div>


              {/* Date of Birth Input */}
              <div className="flex flex-col">
                <label
                  htmlFor="dob"
                  className="text-gray-700 font-medium mb-1 sm:text-sm md:text-sm lg:text-[15px]"
                >
                  Date of birth
                </label>
                <div className="relative">
                  {/* <input
                    type="date"
                    id="dob"
                    className="block w-full border bg-gray-50 border-blue-600 text-gray-700 py-2.5 text-sm px-4 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm"
                    value={date}
                    onChange={handleDateChange}
                    placeholder="dd/mm/yyyy"
                  /> */}

                  <div className="block w-full border bg-white border-blue-600 text-gray-700 text-sm px-4 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-sm">
                    <DatePicker
                      id="date-register"
                      className="max-w-80px]"
                      isRequired
                  
                    />
                  </div>

                </div>
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                )}
              </div>
            </div>

            {/* input email */}
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
                  className={`w-full px-10 py-2.5 text-sm bg-gray-50 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm `}
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter Your Email"
                />

                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <EmailOutlinedIcon fontSize="small" />
                </span>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* input password */}
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
                  className="w-full bg-gray-50 px-10 py-2.5 text-sm text-gray-800 border rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter Your Password"
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <HttpsOutlinedIcon fontSize="small" />
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* button submit */}
            <button
              type="button"
              class="w-full mt-2 bg-[#1A42BC] text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={handleSignupClick}
            >
              SignUp
            </button>
          </form>

          <div className="mt-3 flex justify-center items-center">
            <span className="text-gray-700 text-sm">Do you have an account? </span> 
            <Link href="login" className="text-blue-800 text-sm pl-1"> Sign In </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;