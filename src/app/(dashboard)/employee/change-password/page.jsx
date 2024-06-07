"use client";
import { useState } from "react";
const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  // Validate confirm password
  const validateConfirmPassword = (confirmPassword) => {
    const passwordRegex = /[a-zA-Z]+/;
    return passwordRegex.test(confirmPassword);
  };

  // Validate new password
  const validateNewPassword = (newPassword) => {
    const passwordRegex = /[a-zA-Z]+/;
    return passwordRegex.test(newPassword);
  };

  // Handle password visibility toggle current password
  const handleCurrentPasswordVisibilityToggle = () => {
    setCurrentPasswordVisible(!currentPasswordVisible);
  };
  // Handle password visibility toggle confirm password
  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle password visibility toggle new password
  const handleNewPasswordVisibilityToggle = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };
  // Handle confirm password change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!value) {
      setPasswordError("Confirm password is required.");
    } else if (value.length < 6) {
      setPasswordError(
        "Confirm password does not match. Enter new password again here."
      );
    } else {
      setPasswordError("");
    }
  };
  // Handle new password change
  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);

    if (!value) {
      setNewPasswordError("Password is required.");
    } else if (value.length < 6) {
      setNewPasswordError(
        "Choose a more secure password you don't use anywhere else.It should be at lest 6 characters and difficult for other to guess."
      );
    } else {
      setNewPasswordError("");
    }
  };

  // Handle  Password
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Validate new password
    if (!validateNewPassword(newPassword)) {
      setNewPasswordError("Invalid new password.");
      valid = false;
    } else {
      setNewPasswordError("");
    }
    if (valid) {
      console.log("Form submitted successfully!");
    }

    // Validate confirm password
    if (!validateConfirmPassword(password)) {
      setPasswordError("Invalid confirm password.");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (valid) {
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div>
      <form className="w-full p-10" onSubmit={handleSubmit}>
        <div className="bg-white  p-8 h-auto rounded-lg shadow-md border dark:border-gray-700 max-w-screen-lg mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Account Setting
          </h1>
          {/* field choose change password */}
          <div className="flex gap-5 ">
            <a href="/employee/setting">User Info</a>
            <a href="/employee/change-password" className="text-blue-500">
              Change Password
            </a>
          </div>
          <hr className=" border-gray-300 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-1">
            {/* Form Change password */}
            <div className="ml-8">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Change Password
              </h1>
              <small className="mt-2 text-gray-600">
                Your password must be at least 6 characters.
              </small>
            </div>
            <div className=" sm:p-7 container ">
              {/* Current Password */}
              <div className="grid gap-y-4 mt-5">
                <div>
                  <label
                    htmlFor="password"
                    className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base  lg:text-base"
                  >
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={currentPasswordVisible ? "text" : "password"}
                      className={`text-gray-700 pl-5 focus:ring-gray-500 focus:border-gray-500 sm:text-sm sm:leading-6 rounded-md border py-2 pr-20 focus:outline-none input input-bordered w-full `}
                      placeholder="Enter current password"
                    />
                    <button
                      className="absolute inset-y-0 right-0 px-3 py-2"
                      onClick={handleCurrentPasswordVisibilityToggle}
                    >
                      {currentPasswordVisible ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                {/* New Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base  lg:text-base"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={newPasswordVisible ? "text" : "password"}
                      className={`text-gray-700 pl-5 focus:ring-gray-500 focus:border-gray-500 sm:text-sm sm:leading-6 rounded-md border py-2 pr-20 focus:outline-none input input-bordered w-full ${
                        newPasswordError ? "border-red-500" : ""
                      }`}
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={handleNewPasswordChange}
                    />

                    <button
                      className="absolute inset-y-0 right-0 px-3 py-2"
                      onClick={handleNewPasswordVisibilityToggle}
                    >
                      {newPasswordVisible ? "Hide" : "Show"}
                    </button>
                  </div>
                  {newPasswordError && (
                    <p className="text-red-500">{newPasswordError}</p>
                  )}
                </div>
                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base  lg:text-base"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={passwordVisible ? "text" : "password"}
                      className={`text-gray-700 pl-5 focus:ring-gray-500 focus:border-gray-500 sm:text-sm sm:leading-6 rounded-md border py-2 pr-20 focus:outline-none input input-bordered w-full ${
                        passwordError ? "border-red-500" : ""
                      }`}
                      placeholder="Enter confirm password"
                      value={password}
                      onChange={handlePasswordChange}
                    />

                    <button
                      className="absolute inset-y-0 right-0 px-3 py-2"
                      onClick={handlePasswordVisibilityToggle}
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </button>
                  </div>
                  {passwordError && (
                    <p className="text-red-500">{passwordError}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 "
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

export default ChangePassword;
