const LandingPageComponent = () => {
    return ( 
        <main>
            {/*Navbar*/}
            <nav className="flex flex-wrap items-center justify-between p-3 bg-blue-800 font-bold text-white">
                <div className="px-6 text-xl">
                <a href="/" className="text-indigo-900 z-10 active">
                <img src="../Images/Logo.png" alt="langnet-logo" className="w-24 py-10 md:py-0 g-image"/>
                </a>
                </div>
                <div className="flex md:hidden">
                <button id="hamburger">
                    <img
                    className="toggle block"
                    src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                    width="40"
                    height="40"
                    />
                    <img
                    className="toggle hidden"
                    src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                    width="40"
                    height="40"
                    />
                </button>
                </div>
                <div className=" toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
                <a
                    href="#home"
                    className="block bg-[#aeaedf] rounded-full md:inline-block hover:text-blue-500 px-6 py-3 md:border-none"
                >
                    Home 
                </a>
                <a 
                    href="#aboutus"
                    className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                >
                    About us
                </a>
                <a
                    href="#contactUs"
                    className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
                >
                    Contact Us
                </a>
                </div>

                <div className="toggle w-full text-end font-bold text-white hidden md:flex md:w-auto px-2 py-2 md:rounded">
                <a href="tel:+123">
                    <div className="flex justify-end">
                    <a
                        href="#Login"
                        className="block md:inline-block hover:text-blue-500 px-6 py-3 md:border-none"
                    >
                        Login
                    </a>

                    <a
                        href="#signup"
                        className="block bg-[#aeaedf] rounded-full
                    md:inline-block hover:text-blue-500 px-6 py-3 md:border-none"
                    >
                        Sign Up
                    </a>
                    </div>
                </a>
                </div>
            </nav>
        </main>
     );
}
 
export default LandingPageComponent;