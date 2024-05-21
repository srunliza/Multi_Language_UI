import React from "react";
import { CiMail } from "react-icons/ci";

export const ForgetPasswordComponent = () => {
  return (
    <div>
      <section class="flex flex-col items-center pt-6">
        <div class="w-['647px'] h-['829px']  bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bgtext-color-text-black-800 dark:bordertext-color-text-black-700">
          <div class="p-10 py-6">
            <p class="text-5xl font-bold leading-tight tracking-tight  md:text-2xl text-primary-color">
              Forget Password
            </p>
            <p className="text-xs mb-5 text-color-text-black">
              Enter your registered email below{" "}
            </p>
            <img
              src="./question.png"
              alt=""
              className="w-['391.3px'] h-['100px']"
            />
            <form class="space-y-4 md:space-y-6" method="POST">
              <div className="w-['466.9px'] space-y-5 pl-3">
                <label
                  for="name"
                  class=" block  text-sm font-medium text-color-text-black dark:text-white"
                >
                  Gmail
                </label>

                <div class="relative">
                  <input
                    type="email"
                    class="px-4 ps-11  bgtext-color-text-black-50 border  texttext-color-text-black-900 sm:text-sm rounded-lg focus:ring-blue-600 border-blue-500 block w-full p-2.5 dark:bgtext-color-text-black-700  dark:placeholdertext-color-text-black-400 dark:text-white dark:focus:ring-blue-500"
                    placeholder="example@gmail.com"
                  />
                  <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <CiMail />
                  </div>
                </div>

                <button
                  type="submit"
                  class="w-full text-color-text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md p-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
              <p class="text-sm font-light text-center texttext-color-text-black-500 dark:texttext-color-text-black-400">
                Remembered your password?{" "}
                <a
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  href="/signin"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
