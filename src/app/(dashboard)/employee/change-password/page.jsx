"use client";
import { resetPasswordAction } from "@/action/user-action";
import { useState } from "react";
import Toast from "../../../../components/ToastComponent";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const ChangePassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "", show: false });

  const handleCurrentPasswordVisibilityToggle = () => {
    setCurrentPasswordVisible(!currentPasswordVisible);
  };

  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleNewPasswordVisibilityToggle = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedPassword = {
      oldPassword: formData.get("oldPassword"),
      newPassword: formData.get("newPassword"),
      confirmPassword: formData.get("confirmPassword"),
    };

    try {
      const result = await resetPasswordAction(updatedPassword);

      if (result.code === 200) {
        setToast({
          message: result.message || "Password reset successfully!",
          type: "success",
          show: true,
        });
      } else if (result.status === 401) {
        setToast({
          message: result.detail || "Your old password is incorrect",
          type: "error",
          show: true,
        });
      } else {
        setToast({
          message: "Failed to reset password.",
          type: "error",
          show: true,
        });
      }
    } catch (error) {
      setToast({
        message: "Failed to reset password.",
        type: "error",
        show: true,
      });
    } finally {
      setTimeout(() => setToast({ ...toast, show: false }), 3000); // Hide toast after 3 seconds
    }
  };

  return (
    <div>
      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
      <form className="w-full p-10" onSubmit={handleSubmit}>
        <div className="bg-white p-8 h-auto rounded-lg shadow-md border dark:border-gray-700 max-w-screen-lg mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Account Setting
          </h1>
          <div className="flex gap-5 ">
            <a href="/employee/setting">User Info</a>
            <a href="/employee/change-password" className="text-blue-500">
              Change Password
            </a>
          </div>
          <hr className="border-gray-300 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-1">
            <div className="ml-8">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Change Password
              </h1>
              <small className="mt-2 text-gray-600">
                Your password must be at least 8 characters.
              </small>
            </div>
            <div className="sm:p-7 container">
              <div className="grid gap-y-4 mt-5">
                <div>
                  <label
                    htmlFor="oldPassword"
                    className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base"
                  >
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      name="oldPassword"
                      type={currentPasswordVisible ? "text" : "password"}
                      className="text-gray-700 pl-5 focus:ring-gray-500 focus:border-gray-500 sm:text-sm sm:leading-6 rounded-md border py-2 pr-20 focus:outline-none input input-bordered w-full"
                      placeholder="Enter current password"
                    />
                    <button
                      className="absolute inset-y-0 right-0 px-3 py-2"
                      type="button"
                      onClick={handleCurrentPasswordVisibilityToggle}
                    >
                      {currentPasswordVisible ? (
                        <VisibilityOffOutlinedIcon />
                      ) : (
                        <RemoveRedEyeOutlinedIcon />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="newPassword"
                    className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      name="newPassword"
                      type={newPasswordVisible ? "text" : "password"}
                      className="text-gray-700 pl-5 focus:ring-gray-500 focus:border-gray-500 sm:text-sm sm:leading-6 rounded-md border py-2 pr-20 focus:outline-none input input-bordered w-full"
                      placeholder="Enter new password"
                    />
                    <button
                      className="absolute inset-y-0 right-0 px-3 py-2"
                      type="button"
                      onClick={handleNewPasswordVisibilityToggle}
                    >
                      {newPasswordVisible ? (
                        <VisibilityOffOutlinedIcon />
                      ) : (
                        <RemoveRedEyeOutlinedIcon />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      name="confirmPassword"
                      type={passwordVisible ? "text" : "password"}
                      className="text-gray-700 pl-5 focus:ring-gray-500 focus:border-gray-500 sm:text-sm sm:leading-6 rounded-md border py-2 pr-20 focus:outline-none input input-bordered w-full"
                      placeholder="Enter confirm password"
                    />
                    <button
                      className="absolute inset-y-0 right-0 px-3 py-2"
                      type="button"
                      onClick={handlePasswordVisibilityToggle}
                    >
                      {passwordVisible ? (
                        <VisibilityOffOutlinedIcon />
                      ) : (
                        <RemoveRedEyeOutlinedIcon />
                      )}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
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
