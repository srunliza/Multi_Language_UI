"use client";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import changePasswordImage from "../../../../public/assets/icons/reset-password.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPasswordService } from "@/service/auth.service";
import { useState, Suspense } from "react";
import { z } from "zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const passwordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[a-zA-Z]/, "Password must contain at least one letter")
      .regex(/\d/, "Password must contain at least one number")
      .regex(
        /[@$!%*?&#]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[a-zA-Z]/, "Password must contain at least one letter")
      .regex(/\d/, "Password must contain at least one number")
      .regex(
        /[@$!%*?&#]/,
        "Password must contain at least one special character"
      ),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const ResetPasswordPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  async function handleResetPassword(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const passwords = {
      password: formData.get("newPassword"),
      confirmPassword: formData.get("confirmPassword"),
    };

    const validation = passwordSchema.safeParse({
      newPassword: passwords.password,
      confirmPassword: passwords.confirmPassword,
    });
    if (!validation.success) {
      setError(validation.error.errors[0].message);
      setLoading(false);
      return;
    }

    try {
      const response = await resetPasswordService(email, passwords);

      if (response.code === 200) {
        router.push("/login");
      } else {
        setError("Failed to reset password");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-[url('/assets/images/background.png')] bg-cover bg-center w-full min-h-screen">
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-2xl mt-12 shadow-lg p-8 md:px-14 pb-10 max-w-md w-full sm:ml-px">
          <h2 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1A42BC] mb-2">
            Change New Password
          </h2>
          <p className="text-gray-600 sm:text-[10px] md:text-xs lg:text-sm mb-4">
            Enter your new password below
          </p>

          <div className="flex justify-center items-center mb-4">
            <Image
              src={changePasswordImage}
              width={200}
              height={200}
              alt="change password image"
            />
          </div>

          <form onSubmit={handleResetPassword}>
            <div className="mb-3">
              <label
                htmlFor="newPassword"
                className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base"
              >
                New Password
              </label>
              <div className="relative text-gray-800">
                <input
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  className="w-full px-10 py-2 border rounded-lg focus:outline-none bg-gray-50 focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  placeholder="Enter Your Password"
                  required
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <HttpsOutlinedIcon fontSize="small" />
                </span>
                <span
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <Visibility fontSize="small" />
                  ) : (
                    <VisibilityOff fontSize="small" />
                  )}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base"
              >
                Confirm Password
              </label>
              <div className="relative text-gray-800">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-10 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  placeholder="Confirm Your Password"
                  required
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <HttpsOutlinedIcon fontSize="small" />
                </span>
                <span
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? (
                    <Visibility fontSize="small" />
                  ) : (
                    <VisibilityOff fontSize="small" />
                  )}
                </span>
              </div>
            </div>

            {error && (
              <div className="text-center text-red-500 text-xs mb-4">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-2 bg-[#1A42BC] text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

const ResetPasswordPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ResetPasswordPageContent />
  </Suspense>
);

export default ResetPasswordPage;
