"use client";
import forgetPassword from "../../../../public/assets/icons/forget-password.svg";
import { EmailOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { forgotPasswordService } from "@/service/auth.service";
import { useState } from "react";
import { z } from "zod";

const forgetPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const ForgetPasswordPage = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleForgot(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email"),
    };

    const validation = forgetPasswordSchema.safeParse(data);
    if (!validation.success) {
      setError(validation.error.errors[0].message);
      setLoading(false);
      return;
    }

    try {
      const res = await forgotPasswordService(data.email);
      console.log(res);
      if (res.code === 200) {
        router.push(`/forget-verify?email=${data.email}`);
      } else {
        setError(
          "Cannot find your email account or you logged in with third party"
        );
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-[url('/assets/images/background.png')] bg-cover bg-center w-full h-screen flex justify-center">
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-2xl mt-10 shadow-lg p-8 md:px-12 pb-7 max-w-md w-full sm:ml-px">
          {/* title */}
          <h2 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1A42BC] mb-2">
            Forget Password
          </h2>
          <p className="text-gray-600 sm:text-[10px] md:text-xs lg:text-sm mb-4">
            Enter your registered email below
          </p>

          {/* image */}
          <div className="flex justify-center items-center mb-4">
            <Image
              src={forgetPassword}
              width={200}
              height={200}
              alt="change password image"
            />
          </div>

          {/* form */}
          <form onSubmit={handleForgot}>
            <div className="mb-3 text-gray-700">
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 mb-2 sm:text-sm md:text-base lg:text-base"
              >
                Email
              </label>
              <div className="relative w-80">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-10 py-2.5 text-sm border bg-gray-50 rounded-lg focus:outline-none focus:ring-2 border-[#1A42BC] focus:ring-blue-400 placeholder:text-sm"
                  placeholder="Enter Your Email"
                />
                <span className="absolute inset-y-0 left-3 pr-3 flex items-center text-gray-500">
                  <EmailOutlined fontSize="small" />
                </span>
              </div>
            </div>

            {error && <div className="mb-4 text-red-500 text-xs w-80">{error}</div>}

            <button
              type="submit"
              className="w-full mt-2 bg-[#1A42BC] text-white text-base py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>

            <div className="text-gray-500 text-sm mt-5 flex justify-center items-center">
              <span>Remember your password?</span>
              <Link href="login" className="text-blue-800 text-sm px-2">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ForgetPasswordPage;
