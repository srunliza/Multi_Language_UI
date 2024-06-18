"use client";
import React, { useState } from "react";
import { DatePicker } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { updateUserDetailAction } from "@/action/user-action";
import Toast from "../_components/ToastComponent";

const SettingPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [socialContactUsername, setSocialContactUsername] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [facebook, setFacebook] = useState("");
  const [telegram, setTelegram] = useState("");
  const [profile, setProfile] = useState(null);

  const [toast, setToast] = useState({ message: "", type: "", show: false });

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleSocialContactUsernameChange = (event) => {
    setSocialContactUsername(event.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleFacebookChange = (e) => {
    setFacebook(e.target.value);
  };

  const handleTelegramChange = (e) => {
    setTelegram(e.target.value);
  };

  const handleBirthDateChange = (date) => {
    setBirthDate(date);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleProfileChange = (e) => {
    setProfile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const updatedUserDetail = {
      username: formData.get("username"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      gender: selectedGender,
      birthDate: formData.get("birthDate"),
      facebook: formData.get("facebook"),
      phoneNumber: formData.get("phoneNumber"),
      telegram: formData.get("telegram"),
    };

    try {
      if (profile) {
        formData.append("profile", profile);
        for (const key in updatedUserDetail) {
          formData.append(key, updatedUserDetail[key]);
        }
        const result = await updateUserDetailAction(formData);
        if (result.success) {
          setToast({
            message: "Profile updated successfully!",
            type: "success",
            show: true,
          });
        } else {
          setToast({
            message: "Failed to update profile.",
            type: "error",
            show: true,
          });
        }
      } else {
        const result = await updateUserDetailAction(updatedUserDetail);
        if (result.success) {
          setToast({
            message: "Profile updated successfully!",
            type: "success",
            show: true,
          });
        } else {
          setToast({
            message: "Failed to update profile.",
            type: "error",
            show: true,
          });
        }
      }
    } catch (error) {
      setToast({ message: "An error occurred.", type: "error", show: true });
    }
  };

  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.pathname);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    router.push(href);
  };

  return (
    <div>
      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
      <form className="w-full p-4 sm:p-10" onSubmit={handleSubmit}>
        <div className="bg-white p-8 h-auto rounded-lg shadow-md border dark:border-gray-700 max-w-screen-lg mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Account Setting
          </h1>
          <div className="flex gap-5">
            <a
              href="#"
              className={
                activeLink === "/employee/setting"
                  ? "text-blue-600"
                  : "text-blue-500"
              }
              onClick={() => handleLinkClick("/employee/setting")}
            >
              User Info
            </a>
            <a
              href="#"
              className={
                activeLink === "/employee/change-password"
                  ? "text-blue-600"
                  : "text-gray-500"
              }
              onClick={() => handleLinkClick("/employee/change-password")}
            >
              Change Password
            </a>
          </div>

          <hr className="border-gray-300 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    className="text-gray-700 focus:ring-gray-500 focus:border-gray-500 md:pr-[10px] sm:text-sm sm:leading-6 rounded-md border py-1.5 pr-20 pl-3 focus:outline-none input-bordered w-full max-w-xs"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    className="text-gray-700 focus:ring-gray-500 focus:border-gray-500 sm:text-sm sm:leading-6 rounded-md border py-1.5 pr-4 pl-3 focus:outline-none input-bordered w-full"
                  />
                </div>
              </div>
              {/* gender */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter Username"
                    value={socialContactUsername}
                    onChange={handleSocialContactUsernameChange}
                    className="text-gray-700 focus:ring-gray-500 focus:border-gray-500 sm:text-sm sm:leading-6 rounded-md border py-1.5 pr-4 pl-3 focus:outline-none input-bordered w-full"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="gender"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Gender
                  </label>
                  <div className="relative">
                    <select
                      className="text-gray-700  focus:outline-none input-bordered focus:border-gray-500 sm:text-sm sm:leading-6 rounded-md border py-2 pl-10 w-full"
                      value={selectedGender}
                      onChange={(e) => handleGenderSelect(e.target.value)}
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <img
                        className="w-[20px]"
                        src={
                          selectedGender === "Male"
                            ? "../assets/icons/gender1.svg"
                            : "../assets/icons/gender2.svg"
                        }
                        alt="gender icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* Date of Birth */}
                <div className="">
                  <label
                    htmlFor="date-register"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Date of Birth
                  </label>
                  <DatePicker
                    id="date-register"
                    aria-label="Date of Birth"
                    name="birthDate"
                    className="text-gray-700 focus:ring-gray-500 focus:border-gray-500 sm:text-sm sm:leading-6 rounded-md border pl-4 focus:outline-none input-bordered w-full"
                    isRequired
                    value={birthDate}
                    onChange={handleBirthDateChange}
                  />
                </div>

                {/* Facebook */}
                <div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      Facebook
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="facebook"
                      name="facebook"
                      className="text-gray-700  focus:outline-none input-bordered focus:border-gray-500 sm:text-sm sm:leading-6 rounded-md border py-2 pl-10 w-full"
                      placeholder="facebook username"
                      value={facebook}
                      onChange={handleFacebookChange}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <img
                        src="../Images/facebook.png"
                        alt="facebook"
                        className="w-5 h-5 text-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* Contact */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5 0C5.14855 0 0 5.14878 0 11.5C0 13.1491 0.367987 14.7915 1.07869 16.3156C0.135687 21.1859 0.0356567 21.6344 0.0356567 21.6344C-0.118443 22.432 0.566937 23.1151 1.36619 22.9641C1.36619 22.9641 1.80204 22.8887 6.72059 21.9579C8.20524 22.6635 9.8509 23 11.5 23C17.8514 23 23 17.8512 23 11.5C23 5.14878 17.8514 0 11.5 0ZM11.5 2.3C16.5807 2.3 20.7 6.41895 20.7 11.5C20.7 16.581 16.5807 20.7 11.5 20.7C10.0544 20.7 8.66639 20.3605 7.40369 19.7296C7.17829 19.6174 6.93106 19.5751 6.68381 19.6219C2.60131 20.3947 2.9256 20.3486 2.5875 20.4125C2.6542 20.0703 2.59669 20.4255 3.37869 16.3875C3.42699 16.1375 3.38444 15.8602 3.27059 15.6329C2.62889 14.3613 2.3 12.9577 2.3 11.5C2.3 6.41895 6.4193 2.3 11.5 2.3ZM8.26619 5.75C7.18749 5.75 5.75 7.1875 5.75 8.26562C5.75 9.65505 7.1875 12.2187 8.625 13.6562C8.78025 13.8109 9.1885 14.2203 9.34375 14.375C10.7812 15.8125 13.3446 17.25 14.7338 17.25C15.8125 17.25 17.25 15.8125 17.25 14.7344C17.25 13.6562 15.8125 12.2187 14.7338 12.2187C14.375 12.2187 13.0743 12.9622 12.9375 12.9375C11.7921 12.7307 10.3017 11.2042 10.0625 10.0625C10.0291 9.90311 10.7812 8.625 10.7812 8.26562C10.7812 7.1875 9.34374 5.75 8.26619 5.75Z"
                          fill="#949494"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="text-gray-700  focus:outline-none input-bordered focus:border-gray-500 sm:text-sm sm:leading-6 rounded-md border py-2 pl-10 w-full"
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                </div>

                {/* Telegram */}
                <div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      Telegram
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="telegram"
                      name="telegram"
                      className="text-gray-700 focus:ring-gray-500 focus:border-gray-500 sm:text-sm sm:leading-6 rounded-md border py-2 pl-10 focus:outline-none input-bordered w-full"
                      placeholder="telegram username"
                      value={telegram}
                      onChange={handleTelegramChange}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <img
                        src="../Images/telegram.png"
                        alt="telegram"
                        className="w-5 h-5 text-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* profile and password */}
            <div className="flex flex-col justify-between">
              <div className="m-auto w-[200px] h-[200px] mt-5 flex bg-[url('/assets/images/profileneth.svg')] rounded-full bg-cover bg-center bg-no-repeat">
                <div className="bg-white rounded-full w-10 h-10 text-center ml-28 mt-[180px] lg-ml-[35px]">
                  <input
                    type="file"
                    name="profile"
                    id="upload_profile"
                    hidden
                    onChange={handleProfileChange}
                  />
                  <label
                    htmlFor="upload_profile"
                    className="inline-flex items-center"
                  >
                    <svg
                      data-slot="icon"
                      className="w-9 h-9 text-blue-700"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>

              <div className="mt-4 flex justify-center gap-3 w-auto ">
                <button
                  type="button"
                  className="btn text-black bg-white px-4 py-2  w-[100px]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg   w-[100px]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingPage;
