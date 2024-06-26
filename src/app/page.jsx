"use client";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import Link from "next/link";
import Image from "next/image";
import teamMembers from "@/obj/teamMembers";
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const LandingPageComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-slate-50 h-auto scroll-smooth ">
      <nav className="bg-slate-100 sticky top-0 z-10 shadow-sm border-b border-b-gray-200">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 lg:py-3">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="../Images/logo.png"
                  alt="LangNet"
                  className="h-12"
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-12 text-[17px] font-medium">
              <a
                href="/"
                className="text-gray-700 active:text-blue-800 hover:text-purple-900 transition-all underline-animation"
              >
                Home
              </a>
              <a
                href="#about-us"
                className="text-gray-700 active:text-blue-800 hover:text-purple-900 transition-all underline-animation"
              >
                About us
              </a>
              <a
                href="#contact-us"
                className="text-gray-700 active:text-blue-700 hover:text-purple-900 transition-all underline-animation"
              >
                Contact Us
              </a>
            </div>
            <div className="hidden md:flex">
              <Link
                href="/login"
                className="text-blue-800 transition-all hover:text-white border border-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 lg:font-medium rounded-lg text:xs lg:text-base px-4 py-1 lg:px-5 lg:py-1.5 text-center me-4"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="focus:outline-none transition-all text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 lg:font-medium rounded-lg lg:text-base px-4 py-1 lg:px-5 lg:py-1.5"
              >
                Sign Up
              </Link>
            </div>

            {/* Button call mobile screen */}
            <div className="md:hidden flex items-center">
              <button
                className="mobile-menu-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <MenuIcon fontSize="large" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        {isOpen && (
          <div className="mobile-menu md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2"
              >
                Home
              </a>
              <a
                href="#about-us"
                className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2"
              >
                About us
              </a>
              <a
                href="#contact-us"
                className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2"
              >
                Contact Us
              </a>
              <a
                href="/login"
                className="block text-blue-700 border hover:text-white border-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md px-3 py-2"
              >
                Login
              </a>
              <a
                href="/register"
                className="block bg-blue-800 hover:bg-blue-700 text-white rounded-md px-3 py-2"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section*/}
      <section className="gradient-background  text-white">
        <div className="max-w-[1320px] mx-auto px-4 overflow-hidden sm:px-6 lg:px-8 py-12">
          <div className="lg:flex lg:items-center  lg:justify-between">
            <div className="lg:w-1/2 animate__animated animate__fadeInLeft">
              <h1 className="text-4xl font-bold mb-6 leading-normal">
                We bring the solution to make your work faster
              </h1>
              <p className="mb-8">
                LangNet is a web-based platform enabling software project
                leaders to efficiently manage multiple languages within the
                software, ultimately saving time for developers and translators
                by streamlining the upload and download process through required
                formats like Excel, JSON, XML, and others.
              </p>
              <Link
                href="/register"
                className="block md:inline bg-white text-blue-800 hover:text-white shadow-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium transition-all rounded-lg text-lg px-8 py-2.5 text-center me-4 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
              >
                Get Start
                <NavigateNextOutlinedIcon />
              </Link>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 animate__animated animate__fadeInRight">
              <img
                className="w-full"
                src="./Images/landing-page.png"
                alt="LangNet"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section*/}

      {/*  Features  Section*/}
      <section className="max-w-[1320px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center justify-center">
                <img
                  src="/assets/icons/review.gif"
                  width={128}
                  height={128}
                  alt="review-icon"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center">
                Feedback System
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Project leaders and developers can provide, edit, and remove
                feedback on translations, facilitating continuous improvement
                and high-quality outcomes.
              </p>
              <div className="mt-4 text-center">
                <a href="#" className="text-blue-800 hover:underline">
                  Read more →
                </a>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center justify-center">
                <img
                  src="/assets/icons/artificial-intelligence.gif"
                  width={128}
                  height={0}
                  alt="ai-icon"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center">
                AI Chat Generator
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Our AI-powered keyword meaning generation tool assists
                translators by providing context and enhancing translation
                accuracy.
              </p>
              <div className="mt-4 text-center">
                <a href="#" className="text-blue-600 hover:underline">
                  Read more →
                </a>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center justify-center">
                <img
                  src="/assets/icons/feedback.gif"
                  width={128}
                  height={0}
                  alt="ai-icon"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center">
                Project Creation
              </h3>
              <p className="mt-2 text-gray-600 text-justify">
                Project leaders can create projects, assign roles, set
                deadlines, and choose translation options. This feature
                streamlines project setup and management.
              </p>
              <div className="mt-4 text-center">
                <a href="#" className="text-blue-800 hover:underline">
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Features Section */}

      {/* Reasons Section */}
      <section className="max-w-[1320px] mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 leading-normal">
          Here are a few reasons <br></br>Why our customers choose LangNet
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className=" p-4 rounded-full text-[#454545]">
                <Image
                  src="/assets/icons/team-management.png"
                  width={200}
                  height={200}
                  alt="teamwork icon"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold">Team Management</h3>
                <p className="text-gray-600">
                  Our system supports three distinct user roles: Project Leader,
                  Translator, and Developer.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className=" p-4 rounded-full text-white">
                <Image
                  src="/assets/icons/saving.png"
                  width={200}
                  height={200}
                  alt="saving icon"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Save Time</h3>
                <p className="text-gray-600">
                  Services that offer automation, accessibility, expertise,
                  resource management, and scalability.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className=" p-4 rounded-full text-white">
                <Image
                  src="/assets/icons/file-download.png"
                  width={200}
                  height={200}
                  alt="saving icon"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">File Download</h3>
                <p className="text-gray-600">
                  Developers can preview and download translations in multiple
                  formats, ensuring smooth integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Reasons Section */}

      {/* Team Section */}
      <section className="py-12" id="about-us">
        <div className="max-w-[1320px] mx-auto px-4 py-4">
          <h2 className="text-3xl  font-bold text-center mb-8">
            Meet Our Team
          </h2>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //     clickable: true,
            // }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white   p-6 rounded-lg shadow-md text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full"
                  />
                  <h3 className="mt-4 text-xl font-semibold line-clamp-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <a
                      className="hover:scale-125 w-6 h-6 transition-all"
                      target="_blank"
                      href={member.links.telegram}
                      rel="noreferrer"
                    >
                      <img
                        alt="Telegram icon"
                        loading="lazy"
                        width="30"
                        height="30"
                        decoding="async"
                        src="./images/telegram.png"
                      />
                    </a>
                    <a
                      className="hover:scale-125 w-6 h-6 transition-all"
                      target="_blank"
                      href={member.links.facebook}
                      rel="noreferrer"
                    >
                      <img
                        alt="Facebook icon"
                        loading="lazy"
                        width="30"
                        height="30"
                        decoding="async"
                        src="./images/facebook.png"
                      />
                    </a>
                    <a
                      className="hover:scale-125 w-6 h-6 transition-all"
                      target="_blank"
                      href={`mailto:${member.links.google}`}
                      rel="noreferrer"
                    >
                      <img
                        alt="Google icon"
                        loading="lazy"
                        width="30"
                        height="30"
                        decoding="async"
                        src="./images/google.png"
                      />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* End Team Section */}

      {/*  Contact Section*/}
      <section className="pt-12 pb-16" id="contact-us">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm w-full max-w-2xl  lg:w-2/3">
              <h2 className="text-3xl font-bold mb-8 text-left">Contact Us</h2>
              <p className="mb-8 text-gray-600 text-left">
                Please use the form below to contact us. Thank you!
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="flex justify-center w-full max-w-sm">
              <img
                src="../Images/contact.png"
                alt="Contact illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section  */}

      {/*  Footer Section*/}
      <footer className="bg-slate-100 shadow-sm border-t-gray-200  border-t pt-11">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start items-center   justify-between space-y-8 md:space-y-0">
            {/* Logo and Social Media */}
            <div className="flex flex-col items-center">
              <img
                src="./Images/logo-v4-blue.png"
                alt="LangNet Logo"
                className="h-12  mb-4"
              />
              <div className="flex space-x-4">
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./Images/telegram.png"
                    alt="Telegram"
                    className="h-6 hover:scale-125 w-6  transition-all"
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./Images/facebook.png"
                    alt="Facebook"
                    className="hover:scale-125 w-6 h-6 transition-all"
                  />
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./Images/google.png"
                    alt="Google"
                    className="hover:scale-125 w-6 h-6 transition-all"
                  />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./Images/github.png"
                    alt="GitHub"
                    className="h-6 hover:scale-125 w-6  transition-all"
                  />
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="md:text-left text-center text-sm">
              <div className="flex md:justify-start items-center gap-3 justify-center mb-2">
                <img
                  src="./assets/icons/phone-call.png"
                  alt="Phone"
                  className="h-7"
                />
                <h4 className="font-semibold">PHONE</h4>
              </div>
              <div className="flex flex-col text-gray-600 gap-2">
                <p>Monday to Friday. 9AM to 6 PM</p>
                <a
                  href="tel:+85516857577"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Tel: +855 168 575 77
                </a>
                <a
                  href="tel:+85569872060"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Tel: +855 698 720 60
                </a>
              </div>
            </div>

            {/* Our Office Location */}
            <div className="md:text-left text-center text-sm">
              <div className="flex items-center gap-3 md:justify-start justify-center mb-2">
                <img
                  src="./assets/icons/map-pin.png"
                  alt="Location"
                  className="h-8 "
                />
                <h4 className="font-semibold">OFFICE LOCATION</h4>
              </div>
              <div className="flex flex-col text-gray-600 gap-2">
                <p className="space-y-5">
                  No 12, st.323, Boeung Kak 2, Toul Kork,
                </p>
                <p className="space-y-5">Phnom Penh, Cambodia</p>
              </div>
            </div>

            {/* Mail */}
            <div className="md:text-left text-center">
              <div className="flex items-center gap-3 md:justify-start justify-center mb-2">
                <img
                  src="./assets/icons/message.png"
                  alt="Mail"
                  className="h-8"
                />
                <h4 className="font-semibold">MAIL</h4>
              </div>
              <div className="flex flex-col text-gray-600 gap-2">
                <a
                  href="mailto:Langnet_help@gmail.com"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  Langnet_help@gmail.com
                </a>
                <a
                  href="mailto:panhach3495@gmail.com"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  panhach3495@gmail.com
                </a>
                <a
                  href="mailto:sokheng.tey03@gmail.com"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  sokheng.tey03@gmail.com
                </a>
              </div>
            </div>
          </div>
          {/* Below Footer */}
          <div className=" text-center border-t  border-t-gray-400 py-6 mt-8">
            <p className="text-sm">
              &copy; 2024 LangNet Corporation. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="#"
                className="text-sm text-gray-700 hover:text-gray-800 underline"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 hover:text-gray-800 underline"
              >
                Privacy Notice
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer Section  */}
    </div>
  );
};

export default LandingPageComponent;
