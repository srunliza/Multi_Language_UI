"use client";
import { doCredentialLogin } from "@/action";
import {
  EmailOutlined,
  HttpsOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

const LoginForm = () => {
  const router = new useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const data = {
        email: formData.get("email"),
        password: formData.get("password"),
      };

      const validation = schema.safeParse(data);
      if (!validation.success) {
        setError(validation.error.errors[0].message);
        setLoading(false);
        return;
      }

      const response = await doCredentialLogin(formData);

      if (!!response.error) {
        console.error(response.error);
        setError(response.error.message);
        setLoading(false);
      } else {
        router.push("/employee/dashboard");
      }
    } catch (e) {
      console.error(e);
      setError("Check your Credentials");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit}>
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
            placeholder="panha@gmail.com"
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
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="w-full px-10 py-2.5 border bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
            placeholder="Enter Your Password"
          />
          <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
            <HttpsOutlined fontSize="small" />
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
      {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
      <button
        type="submit"
        className="w-full mt-2 bg-[#1A42BC] text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        disabled={loading}
      >
        {loading ? "Loading..." : "Sign in"}
      </button>
    </form>
  );
};

export default LoginForm;
