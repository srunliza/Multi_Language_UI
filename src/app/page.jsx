import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="bg-[#F5F5F5]">
      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between p-3 bg-[#2357F9] font-bold text-white">
        <div className="px-6 text-xl">
          <Link href="/" className="text-indigo-900 z-10 active">
            <img
              src="./Images/Logo.png"
              alt="langnet-logo"
              className="w-22 py-2 md:py-0 g-image ml-5 md:ml-20"
            />
          </Link>
        </div>
        <div className="flex md:hidden">
          <button id="hamburger">
            <img
              className="toggle block"
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
              alt="menu"
            />
            <img
              className="toggle hidden"
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
              alt="close"
            />
          </button>
        </div>
        <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none gap-8">
          <Link
            href="#home"
            className="block bg-[#73D4D4] text-white rounded-full md:inline-block hover:text-blue-500 px-10 md:border-none"
          >
            Home
          </Link>
          <Link
            href="#aboutus"
            className="block md:inline-block hover:text- text-white blue-500 px-3 md:border-none"
          >
            About us
          </Link>
          <Link
            href="#contactUs"
            className="block md:inline-block  text-white  hover:text-blue-500 px-3 md:border-none"
          >
            Contact Us
          </Link>
        </div>

        <div className="toggle w-full text-end font-bold text-white hidden md:flex md:w-auto px-4 md:rounded mr-20">
          <div className="flex justify-end">
            <Link
              href="/login"
              className="block md:inline-block hover:text-blue-500 px-6 md:border-none"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="block bg-[#73D4D4] rounded-full md:inline-block hover:text-blue-500 px-6  md:border-none"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* secondNav */}
      <div className="relative w-full h-[850px] bg-[#2357F9]" id="home">
        <div className="absolute inset-9 flex flex-col md:flex-row justify-center md:ml-20">
          <div className="md:w-1/2 mt-24 text-center md:text-left">
            <h1 className=" font-bold md:text-5xl leading-tight mb-2 mt-20 text-white">
              We bring the solution to make <br />
              your work faster
            </h1>
            <p className="font-regular text-lg mb-8 text-white">
              LangNet is Link web-based platform enabling software project
              leaders to efficiently manage multiple languages within the
              software, ultimately saving time for developers and translators by
              streamlining the upload and download process through required
              formats like Excel, JSON, XML, and others.
            </p>
            <Link
              href="#contactUs"
              className="px-6 py-3 bg-white text-black rounded-md hover:bg-[#c09858] transition duration-200"
            >
              Get Started
            </Link>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="../Images/landing-page.png"
              alt="landing-page"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* fly card */}
        <div className="relative position-sticky">
          <div className="pt-24 md:pt-[45rem] flex flex-col justify-evenly md:flex-row flex-wrap gap-10 w-11/12 md:w-9/12 mx-auto">
            <div className="bg-white pt-6 pb-6 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg px-6 w-full md:w-5/12 lg:w-1/4">
              <div className="relative z-10 mx-auto text-center md:text-left">
                <span className="grid h-12 w-12 place-items-center transition-all duration-300 mx-auto md:mx-0">
                  <img src="../Images/Group.png" alt="feedback" />
                </span>
                <div className="space-y-4 pt-5 font-semibold text-base leading-7 text-[#475568] transition-all duration-300">
                  <h1 className="font-semibold text-xl">Feedback System</h1>
                  <p className="text-sm">
                    Project leaders and developers can provide, edit, and remove
                    feedback on translations, facilitating continuous
                    improvement and high-quality outcomes.
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <Link
                      href="#"
                      className="text-sky-500 transition-all duration-300 hover:text-white"
                    >
                      Read more &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white pt-6 pb-6 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg px-6 w-full md:w-5/12 lg:w-1/4">
              <div className="relative z-10 mx-auto text-center md:text-left">
                <span className="grid h-12 w-12 place-items-center transition-all duration-300 mx-auto md:mx-0">
                  <img
                    src="../Images/ChatAi.png"
                    alt="AI chat generator"
                    className="w-full h-full"
                  />
                </span>
                <div className="space-y-4 pt-5 font-semibold text-base leading-7 text-[#475568] transition-all duration-300">
                  <h1 className="font-semibold text-xl">AI Chat Generator</h1>
                  <p className="text-sm">
                    Our AI-powered keyword meaning generation tool assists
                    translators by providing context and enhancing translation
                    accuracy.
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <Link
                      href="#"
                      className="text-sky-500 transition-all duration-300 hover:text-white"
                    >
                      Read more &rarr;
                    </Link>
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
                  <p className="text-sm">
                    Project leaders can create projects, assign roles, set
                    deadlines, and choose translation options. This feature
                    streamlines project setup and management.
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <Link
                      href="#"
                      className="text-sky-500 transition-all duration-300 hover:text-white"
                    >
                      Read more &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reason */}
      <div className="m-8 md:m-20 mt-30 md:mt-60 justify-between">
        <div className="text-center font-bold text-2xl md:text-4xl text-[#454545] mt-10 md:mt-50">
          <p>
            Here are Link few reasons why our <br />
            customers choose LangNet
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-10 p-6 md:p-8 ">
          {/*Reason1 */}
          <div className="max-w-2xl mx-auto mt-10">
            <div className="flex flex-col md:flex-row justify-evenly py-5 gap-5">
              <div className="bg-white rounded-xl md:max-w-fit flex my-4 md:my-0">
                <div className="md:flex">
                  <div className="flex-shrink-0 m-4 w-16 h-14 rounded-full text-[#454545] self-center">
                    <img src="../Images/teamwork.png" alt="teamwork" />
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
          <div className="max-w-2xl mx-auto mt-10">
            <div className="flex flex-col md:flex-row justify-evenly py-5 gap-5">
              <div className="bg-white rounded-xl md:max-w-fit flex my-4 md:my-0">
                <div className="md:flex">
                  <div className="flex-shrink-0 m-4 w-16 h-14 rounded-full text-[#454545] self-center">
                    <img src="../Images/time.png" alt="time saving" />
                  </div>
                  <div className="p-8">
                    <p className="mt-2 text-[#454545] text-sm">
                      <strong>Save Time</strong> <br />
                      Services that offer automation, accessibility, expertise,
                      resource management, ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Reason3 */}
          <div className="max-w-2xl mx-auto mt-10">
            <div className="flex flex-col md:flex-row justify-evenly py-5 gap-5">
              <div className="bg-white rounded-xl md:max-w-fit flex my-4 md:my-0">
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

      {/*Teammember */}
      <div>
        <h2 className="text-3xl font-bold text-[#454545] mb-6 ml-[43px] text-left">
          Meet Our Team
        </h2>
        <div
          id="default-carousel"
          className="rounded-lg overflow-hidden"
          data-carousel="static"
        >
          <div className=" h-80 md:h-96 mx-auto" data-carousel-inner>
            <div className="grid justify-items-center mx-4 justify-center grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {/*Teammember1 */}
              <div className="bg-white w-[360px] h-[350px] p-2 pt-9 rounded-lg shadow-md text-center">
                <img
                  src="../Images/Panha.png"
                  alt="Team Member 1"
                  className="mb-4 rounded-full h-32 w-32 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Chhel Chhempanha</h3>
                <p className="text-[#454545]">
                  User interface design and <br />
                  front-end developer
                </p>
                <div className="mt-4 flex justify-center gap-4">
                  <Link className="hover:scale-110" target="_blank" href="#">
                    <img
                      alt="Tele icon"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/tele.png"
                    />
                  </Link>
                  <Link className="hover:scale-110" target="_blank" href="/">
                    <img
                      alt="Facebook icon"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/facebook.png"
                    />
                  </Link>
                  <Link className="hover:scale-110" target="_blank" href="/">
                    <img
                      alt="google icon"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/google.png"
                    />
                  </Link>
                </div>
              </div>
              {/*Teammember2 */}
              <div className="bg-white w-[360px] h-[350px] p-2 pt-9 rounded-lg shadow-md text-center">
                <img
                  src="../Images/Piseth.png"
                  alt="Team Member 2"
                  className="mb-4 rounded-full h-32 w-32 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Mao Piseth</h3>
                <p className="text-[#454545]">
                  User interface design and <br />
                  front-end developer
                </p>
                <div className="mt-4 flex justify-center gap-4">
                  <Link className="hover:scale-110" target="_blank" href="#">
                    <img
                      alt="Tele icon"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/tele.png"
                    />
                  </Link>
                  <Link className="hover:scale-110" target="_blank" href="/">
                    <img
                      alt="Facebook icon"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/facebook.png"
                    />
                  </Link>
                  <Link className="hover:scale-110" target="_blank" href="/">
                    <img
                      alt="google icon"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/google.png"
                    />
                  </Link>
                </div>
              </div>
              {/*Teammember3 */}
              <div className="bg-white w-[360px] h-[350px] p-2 pt-9 rounded-lg shadow-md text-center">
                <img
                  src="../Images/Thean.png"
                  alt="Team Member 3"
                  className="mb-4 rounded-full h-32 w-32 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Tep Thean</h3>
                <p className="text-[#454545]">
                  User interface design and <br />
                  front-end developer
                </p>
                <div className="mt-4 flex justify-center gap-4">
                  <Link className="hover:scale-110" target="_blank" href="#">
                    <img
                      alt="Tele icon"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/tele.png"
                    />
                  </Link>
                  <Link className="hover:scale-110" target="_blank" href="/">
                    <img
                      alt="Facebook icon"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/facebook.png"
                    />
                  </Link>
                  <Link className="hover:scale-110" target="_blank" href="/">
                    <img
                      alt="google icon"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/google.png"
                    />
                  </Link>
                </div>
              </div>
              {/*Teammember4 */}
              <div className="bg-white w-[360px] h-[350px] p-2 pt-9 rounded-lg shadow-md text-center">
                <img
                  src="../Images/Soklay.png"
                  alt="Team Member 4"
                  className="mb-4 rounded-full h-32 w-32 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Meng Soklay</h3>
                <p className="text-[#454545]">
                  User interface design and <br />
                  front-end developer
                </p>
                <div className="mt-4 flex justify-center gap-4">
                  <Link className="hover:scale-110" target="_blank" href="#">
                    <img
                      alt="Tele icon"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/tele.png"
                    />
                  </Link>
                  <Link className="hover:scale-110" target="_blank" href="/">
                    <img
                      alt="Facebook icon"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/facebook.png"
                    />
                  </Link>
                  <Link className="hover:scale-110" target="_blank" href="/">
                    <img
                      alt="google icon"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/google.png"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                className="object-cover w-full h-full"
                alt="Slide 2"
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                className="object-cover w-full h-full"
                alt="Slide 3"
              />
            </div>
          </div>
          <img
            src="../Images/Point.png"
            alt=""
            className="mx-auto w-12 py-2 "
          />
        </div>
      </div>

      {/* Contact Us */}
      <section className="mt-" id="contactus">
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="overflow-hidden py-16 px-6 sm:px-8 lg:px-10 lg:py-24">
            <div className="relative mx-auto max-w-xl">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-[#454545] sm:text-3xl leading-6">
                  Contact Us
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-slate-400">
                  Please use the form below to contact us. Thank you!
                </p>
              </div>
              <div className="mt-12">
                <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div className="sm:col-span-2">
                    <div className="mt-1">
                      <input
                        name="name"
                        type="text"
                        id="name"
                        placeholder="username"
                        required=""
                        className="block w-full rounded-md py-3 px-4 shadow-md focus:ring-sky-500 dark:text-white"
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
                        className="block w-full rounded-md py-3 px-4 shadow-md focus:border-sky-500 focus:ring-sky-500 dark:text-white"
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
                        className="block w-full rounded-md py-3 px-4 shadow-md focus:border-sky-500 focus:ring-sky-500 dark:text-white"
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
                className="w-1/2 md:w-9/12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section>
        <div className="mt-8 bg-[#2357F9] pt-9">
          <div>
            <div className="flex flex-col justify-evenly sm:px-[18px] md:flex-row md:px-10">
              <div className="md:w-[316px]">
                <Link href="/" className="text-indigo-900 z-10 active">
                  <img
                    src="../Images/Logo.png"
                    alt="langnet-logo"
                    className="w-22 mx-auto "
                  />
                </Link>
                <div className="mt-[18px] flex gap-6 justify-center">
                  <Link className="hover:scale-110" target="_blank" href="#">
                    <img
                      alt="Tele icon"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/tele.png"
                    />
                  </Link>
                  <Link className="hover:scale-110" target="_blank" href="/">
                    <img
                      alt="Facebook icon"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/facebook.png"
                    />
                  </Link>
                  <Link className="hover:scale-110" target="_blank" href="/">
                    <img
                      alt="google icon"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/google.png"
                    />
                  </Link>
                  <Link className="hover:scale-110" target="_blank" href="">
                    <img
                      alt="github icon"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      src="../Images/github.png"
                    />
                  </Link>
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
                <img
                  src="../Images/Map.png.png"
                  alt=""
                  className="w-20 mx-auto"
                />
                <p className="mt-6 mb-2 font-bold text-white">
                  OUR OFFICE LOCATION
                </p>
                <p className="text-[12px] font-medium text-white">
                  No 12, st.323, Boeung Kak 2, Toul Kork, Phnom Penh, Cambodia
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

export default LandingPage;
