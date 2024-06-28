import LoginForm from "@/components/auth/LoginForm";
import SocialLogin from "@/components/auth/SocialLogin";
import Image from "next/image";
import Link from "next/link";


const LoginPage = () => {
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

          <LoginForm />
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
            {/* scl login button here */}
            <SocialLogin />
          </div>
          <div className="flex justify-center items-center mt-3">
            <p className="text-gray-500 sm:text-xs md:text-sm lg:text-xs">
              If you don't have an account?
              <Link href="register" className="text-[#1A42BC] pl-1">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;