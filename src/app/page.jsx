import React from "react";
import { Carousel } from "flowbite-react";
import teamMembers from "@/obj/teamMembers";

const LandingPageComponent = () => {
  return (
    <div className=" bg-[#e5e5e5] ">
      {/* Navbar */}
      <nav className="sticky z-50 top-0 shadow-lg   py-4 bg-white font-bold text-white ">
        <div className=" w-9/12 mx-auto flex px-8 justify-between items-center">
          <a href="/">
            <img src="../Images/logo3.png" width={200} alt="langnet-logo" />
          </a>
          <div className="flex md:hidden">
            <div className="group">
              <button
                id="hamburger"
                type="button"
                className="justify-center items-center"
              >
                <img
                  className="toggle block md:mr-20"
                  src="https://img.icons8.com/ios-filled/50/menu--v6.png"
                  width="30"
                  height="30"
                  alt="menu"
                />
              </button>
              <div className="absolute w-20 origin-bottom bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                <div>
                  <a
                    href="#home"
                    className="block px-3 py-2 text-red-700 text-sm  hover:bg-gray-100"
                  >
                    Home
                  </a>
                  <a
                    href="#aboutus"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    About Us
                  </a>
                  <a
                    href="#contactus"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-between items-center w-full md:w-auto md:flex gap-4 text-right">
            <a
              href="#home"
              className="block  font-normal  text-blue-700  md:inline-block hover:text-blue-500 px-10"
            >
              Home
            </a>
            <a
              href="#aboutus"
              className="font-normal   text-blue-700 block md:inline-block  hover:text-blue-500 px-3"
            >
              About us
            </a>
            <a
              href="#contactus"
              className="font-normal   text-blue-700 block md:inline-block  hover:text-blue-500 px-3"
            >
              Contact Us
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="../login"
              className=" text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
            >
              Login
            </a>
            <a
              href="../register"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
      {/* secondNav */}
      <div className="relative h-[650px] gradient-background" id="home">
        <div className="absolute inset-2 flex flex-col md:flex-row justify-between md:ml-20">
          <div className="md:w-1/2 items-center mx-auto md:text-left ml-[155px]">
            <h1 className="font-bold md:text-lg lg:text-2xl leading-tight mb-4 mt-32 text-white">
              We bring the solution to make <br />
              your work faster
            </h1>

            <p className="font-regular text-md mb-8 text-white text-justify w-[500px]">
              LangNet is a web-based platform enabling software project leaders
              to efficiently manage multiple languages within the software,
              ultimately saving time for developers and translators by
              streamlining the upload and download process through required
              formats like Excel, JSON, XML, and others.
            </p>
            <a
              href="../register"
              className="px-5 py-3 bg-white text-black rounded-md hover:bg-[#c09858] transition duration-200"
            >
              Get Started
            </a>
          </div>

          <div className=" items-center  ">
            <img
              src="../Images/landing-page.png"
              alt="landing-page"
              className="mx-auto w-8/12 "
            />
          </div>
        </div>

        {/* fly card */}
        <div className="relative">
          <div className="pt-24 md:pt-[30rem] flex flex-col px-[30px] justify-between md:flex-row flex-wrap gap- w-11/12 md:w-9/12 mx-auto">
            <div className="bg-white pt-6 pb-6 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg px-6 w-full md:w-5/12 lg:w-1/4">
              <div className="relative z-10 mx-auto text-center md:text-left">
                <span className="grid h-12 w-12 place-items-center transition-all duration-300 mx-auto md:mx-0">
                  <img src="./Images/feedback.png" alt="feedback" />
                </span>
                <div className="space-y-4 pt-5 font-semibold text-base leading-7 text-[#475568] transition-all duration-300">
                  <h1 className="font-semibold text-xl">Feedback System</h1>
                  <p className="text-sm text-justify">
                    Project leaders and developers can provide, edit, and remove
                    feedback on translations, facilitating continuous
                    improvement and high-quality outcomes.
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      className="text-sky-500 transition-all duration-300 hover:text-white"
                    >
                      Read more &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white pt-6 pb-6 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg px-6 w-full md:w-5/12 lg:w-1/4">
              <div className="relative z-10 mx-auto text-center md:text-left">
                <span className="grid h-12 w-12 place-items-center transition-all duration-300 mx-auto md:mx-0">
                  <img
                    src="./Images/AIChatGenerator.png"
                    alt="AI chat generator"
                    className="w-full h-full"
                  />
                </span>
                <div className="space-y-4 pt-5 font-semibold text-base leading-7 text-[#475568] transition-all duration-300">
                  <h1 className="font-semibold text-xl">AI Chat Generator</h1>
                  <p className="text-sm text-justify">
                    Our AI-powered keyword meaning generation tool assists
                    translators by providing context and enhancing translation
                    accuracy.
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      className="text-sky-500 transition-all duration-300 hover:text-white"
                    >
                      Read more &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white pt-6 pb-6 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg px-6 w-full md:w-5/12 lg:w-1/4">
              <div className="relative z-10 mx-auto text-center md:text-left">
                <span className="grid h-12 w-12 place-items-center transition-all duration-300 mx-auto md:mx-0">
                  <img src="../Images/File.png" alt="File system" />
                </span>
                <div className="space-y-4 pt-5 font-semibold text-base leading-7 text-[#475568] transition-all duration-300">
                  <h1 className="font-semibold text-xl">Project Creation</h1>
                  <p className="text-sm text-justify">
                    Project leaders can create projects, assign roles, set
                    deadlines, and choose translation options. This feature
                    streamlines project setup and management.
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      className="text-sky-500 transition-all duration-300 hover:text-white"
                    >
                      Read more &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reason */}
      <div className="m-4 md:m-20  md:mt-60 justify-between">
        <div className="text-center font-bold text-lg md:text-2xl text-[#454545] mt-10 md:mt-30">
          <p>
            Here are a few reasons why our <br />
            customers choose LangNet
          </p>
        </div>
        <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8 md:p-4 ">
          {/*Reason1 */}
          <div class="max-w-2xl mx-auto mt-5">
            <div className="flex flex-col md:flex-row justify-evenly py-5 gap-5">
              <div className="duration-300 hover:-translate-y-1 hover:shadow-2xl h-[8.8rem] bg-white rounded-xl md:max-w-fit flex my-4 md:my-0">
                <div className="md:flex">
                  <div className="flex-shrink-0 m-4 w-16 h-14 rounded-full text-[#454545] self-center">
                    <img src="./Images/teamwork.png" alt="teamwork" />
                  </div>
                  <div className="p-8">
                    <p className="mt-2 text-[#454545] text-sm">
                      <strong>Team Management</strong> <br />
                      Our system supports three distinct user roles: Project
                      Leader, Translator, ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Reason2 */}
          <div class="max-w-2xl mx-auto mt-5">
            <div className="flex flex-col md:flex-row justify-evenly py-5 gap-5">
              <div className="duration-300 hover:-translate-y-1 hover:shadow-2xl h-[8.8rem] bg-white rounded-xl md:max-w-fit flex my-4 md:my-0">
                <div className="md:flex">
                  <div className="flex-shrink-0 m-4 w-16 h-14 rounded-full text-[#454545] self-center">
                    <img src="../Images/time.png" alt="time saving" />
                  </div>
                  <div className="p-8">
                    <p className="mt-2 text-[#454545] text-sm">
                      <strong>Save Time</strong> <br />
                      Services that offer automation, accessibility, expertise,
                      resource ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Reason3 */}
          <div class="max-w-2xl mx-auto mt-5">
            <div className="flex flex-col md:flex-row justify-evenly py-5 gap-5">
              <div className="duration-300 hover:-translate-y-1 hover:shadow-2xl h-[8.8rem] bg-white rounded-xl md:max-w-fit flex my-4 md:my-0">
                <div className="md:flex">
                  <div className="flex-shrink-0 m-4 w-16 h-14 rounded-full text-[#454545] self-center">
                    <img src="../Images/fileDown.png" alt="file download" />
                  </div>
                  <div className="p-8">
                    <p className="mt-2 text-[#454545] text-sm">
                      <strong>File Download</strong> <br />
                      Developers can preview and download translations in
                      multiple formats,...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* test Carousel */}

      <section
        id="aboutus"
        className="bg-[#e5e5e5] sm:px-[10px] md:flex-row md:px-5"
      >
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold text-[#454545] mb-10 p-2 text-center">
            Meet Our Team
          </h2>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
            <Carousel leftControl="" rightControl="" slideInterval={2000}>
              <div className="pb-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7">
                {/* Members*/}
                {teamMembers.slice(0, 4).map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 my-6 text-center"
                  >
                    <img
                      src={member.image}
                      alt={`Team Member ${index + 1}`}
                      className="mb-4 rounded-full h-32 w-32 mx-auto"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#454545]">{member.role}</p>
                    <div className="mt-4 flex justify-center gap-4">
                      <a
                        className="hover:scale-110"
                        target="_blank"
                        href={member.links.telegram}
                      >
                        <img
                          alt="Tele icon"
                          loading="lazy"
                          width="30"
                          height="30"
                          decoding="async"
                          data-nimg="1"
                          src="../Images/tele.png"
                        />
                      </a>
                      <a
                        className="hover:scale-110"
                        target="_blank"
                        href={member.links.facebook}
                      >
                        <img
                          alt="Facebook icon"
                          loading="lazy"
                          width="30"
                          height="30"
                          decoding="async"
                          data-nimg="1"
                          src="../Images/facebook.png"
                        />
                      </a>
                      <a
                        className="hover:scale-110"
                        target="_blank"
                        href={`mailto:${member.links.google}`}
                      >
                        <img
                          alt="Google icon"
                          loading="lazy"
                          width="30"
                          height="30"
                          decoding="async"
                          data-nimg="1"
                          src="../Images/google.png"
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pb-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7">
                {teamMembers.slice(4, 8).map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 my-6 text-center"
                  >
                    <img
                      src={member.image}
                      alt={`Team Member ${index + 1}`}
                      className="mb-4 rounded-full h-32 w-32 mx-auto"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#454545]">{member.role}</p>
                    <div className="mt-4 flex justify-center gap-4">
                      <a
                        className="hover:scale-110"
                        target="_blank"
                        href={member.links.telegram}
                      >
                        <img
                          alt="Tele icon"
                          loading="lazy"
                          width="30"
                          height="30"
                          decoding="async"
                          data-nimg="1"
                          src="../Images/tele.png"
                        />
                      </a>
                      <a
                        className="hover:scale-110"
                        target="_blank"
                        href={member.links.facebook}
                      >
                        <img
                          alt="Facebook icon"
                          loading="lazy"
                          width="30"
                          height="30"
                          decoding="async"
                          data-nimg="1"
                          src="../Images/facebook.png"
                        />
                      </a>
                      <a
                        className="hover:scale-110"
                        target="_blank"
                        href={`mailto:${member.links.google}`}
                      >
                        <img
                          alt="Google icon"
                          loading="lazy"
                          width="30"
                          height="30"
                          decoding="async"
                          data-nimg="1"
                          src="../Images/google.png"
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pb-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7 justify-center]">
                {teamMembers.slice(8, 11).map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 my-6 text-center"
                  >
                    <img
                      src={member.image}
                      alt={`Team Member ${index + 1}`}
                      className="mb-4 rounded-full h-32 w-32 mx-auto"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#454545]">{member.role}</p>
                    <div className="mt-4 flex justify-center gap-4">
                      <a
                        className="hover:scale-110"
                        target="_blank"
                        href={member.links.telegram}
                      >
                        <img
                          alt="Tele icon"
                          loading="lazy"
                          width="30"
                          height="30"
                          decoding="async"
                          data-nimg="1"
                          src="../Images/tele.png"
                        />
                      </a>
                      <a
                        className="hover:scale-110"
                        target="_blank"
                        href={member.links.facebook}
                      >
                        <img
                          alt="Facebook icon"
                          loading="lazy"
                          width="30"
                          height="30"
                          decoding="async"
                          data-nimg="1"
                          src="../Images/facebook.png"
                        />
                      </a>
                      <a
                        className="hover:scale-110"
                        target="_blank"
                        href={`mailto:${member.links.google}`}
                      >
                        <img
                          alt="Google icon"
                          loading="lazy"
                          width="30"
                          height="30"
                          decoding="async"
                          data-nimg="1"
                          src="../Images/google.png"
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="mt-" id="contactus">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#454545] sm:text-3xl leading-6 text-center py-10">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="overflow-hidden pb-16 px-6 sm:px-8 lg:px-10 lg:pb-24">
            <div className="relative mx-auto max-w-xl">
              <div>
                <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-slate-400">
                  Please use the form below to contact us. Thank you!
                </p>
              </div>
              <div className="mt-5">
                <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div className="sm:col-span-2">
                    <div className="mt-1">
                      <input
                        name="name"
                        type="text"
                        id="name"
                        placeholder="username"
                        required=""
                        className="block w-full rounded-md py-3 px-4 border-zinc-300 focus:ring-sky-500 dark:text-white placeholder-zinc-300"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mt-1">
                      <input
                        name="email"
                        id="email"
                        required=""
                        type="email"
                        placeholder="example@gmail.com"
                        className=" block w-full rounded-md py-3 px-4 border-zinc-300 focus:border-sky-500 focus:ring-sky-500 dark:text-white placeholder-zinc-300"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mt-1">
                      <textarea
                        required=""
                        name="message"
                        id="message"
                        placeholder="message"
                        rows="4"
                        className="block w-full rounded-md py-3 px-4 border-zinc-300 focus:border-sky-500 focus:ring-sky-500 text-black placeholder-zinc-300"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center rounded-md px-4 py-3 font-medium shadow-md focus:outline-none focus-visible:ring focus-visible:ring-sky-500 sm:text-sm transition-colors duration-75 text-white bg-[#003FFF] hover:bg-blue active:bg-blue disabled:bg-blue dark:hover:bg-blue dark:active:bg-white dark:disabled:bg-white disabled:cursor-not-allowed"
                    >
                      <span>Submit</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <div className=" md:mb-0">
              <img
                src="../Images/contact.png"
                alt="contact"
                className="mx-auto md:w-9/12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section>
        <div className="mt-8 gradient-background shadow-lg pt-9">
          <div>
            <div className="flex justify-evenly  sm:px-[18px] md:flex-row md:px-10">
              <div className="md:w-[316px] flex flex-col items-center gap-4">
                <a
                  href="/"
                  className="z-10  rounded-lg overflow-hidden  block active"
                >
                  <img
                    src="../Images/logo3.png"
                    alt="langnet-logo"
                    width={290}
                  />
                </a>
                <div className="mt-[18px] flex gap-6 justify-center">
                  <a
                    className="hover:scale-110"
                    target="_blank"
                    href="@srunlisa"
                  >
                    <img
                      alt="Tele icon"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/tele.png"
                    />
                  </a>
                  <a
                    className="hover:scale-110"
                    target="_blank"
                    href="https://web.facebook.com/srun.liza/"
                  >
                    <img
                      alt="Facebook icon"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/facebook.png"
                    />
                  </a>
                  <a
                    className="hover:scale-110"
                    target="_blank"
                    href="srunliza@gmail.com"
                  >
                    <img
                      alt="google icon"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/google.png"
                    />
                  </a>
                  <a
                    className="hover:scale-110"
                    target="_blank"
                    href="https://github.com/ksga-12th-generation-basic-course/multi-language-ui"
                  >
                    <img
                      alt="github icon"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/github.png"
                    />
                  </a>
                </div>
              </div>
              <div className="mt-12 md:mt-0 text-center ">
                <img
                  src="../Images/phone.png"
                  alt=""
                  className="w-20 mx-auto "
                />
                <p className="mt-6 mb-2 font-bold text-white">BY PHONE</p>
                <p className="mb-2 text-white">Monday to Friday. 9AM to 6 PM</p>
                <p className="text-[12px] font-medium text-white">
                  Tel: +855 698 720 60 <br />
                  Tel: +855 698 720 60
                </p>
              </div>
              <div className="mt-12 md:mt-0 text-center ">
                <img src="./Images/Map.png" alt="" className="w-20  mx-auto" />
                <p className="mt-6 mb-2 font-bold text-white">
                  OUR OFFICE LOCATION
                </p>
                <p className="text-[12px] font-medium text-white">
                  No 12, st.323, Boeung Kak 2, Toul Kork, <br />
                  Phnom Penh, Cambodia
                </p>
              </div>
              <div className="mt-12 md:mt-0 text-center">
                <img src="../Images/mail.png" alt="" className="w-20 mx-auto" />
                <p className="mt-6 mb-2 font-bold text-white">MAIL</p>
                <p className="text-[12px] font-medium text-white">
                  Langnet_help@gmail.com <br />
                  panhach3495@gmail.com <br />
                  sokheng.tey03@gmail.com
                </p>
              </div>
              
            </div>
            <hr className="mt-[30px] text-white" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageComponent;
