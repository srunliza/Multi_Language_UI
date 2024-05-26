import optImage from "../../public/images/verify-otp.png";
import Image from "next/image";


const VerifyOtpComponent = () => {

  return (
    <main className="bg-[url('/images/background.jpg')] bg-cover bg-center w-full min-h-screen">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white  pt-7 mt-8 rounded-3xl shadow-lg p-8 max-w-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[28%]">

          {/* title */}
          <h2 className="text-2xl font-bold text-[#1A42BC] mb-4 pl-1">
            Verification
          </h2>
          
          {/* subtitle */}
          <p className="text-gray-600 text-xs mb-1 pl-1">
            Don't worry! It happens.
          </p>
          <p className="text-gray-600 text-xs mb-1 pl-1">
            We will send you a one-time password to this email address.
          </p>


          {/* opt image */}
          <div className="flex justify-center">
            <Image src={optImage} width={310} height={310} alt="opt image" />
          </div>

          <h3 className="text-[24px] font-semibold text-center text-gray-700 mb-1">
            OTP VERIFICATION
          </h3>
          <p className="text-center text-gray-600 text-sm mb-6">
            Enter the OTP to the email address
          </p>


          {/* input opt code */}
          <div className="flex justify-center mb-4 gap-2">
            <input type="text"
                maxLength="1"
                className="otp-input mx-1 text-center w-8 h-8 border rounded-lg text-black border-[#1A42BC]" />
            <input type="text"
                maxLength="1"
                className="otp-input mx-1 text-center w-8 h-8 border rounded-lg text-black border-[#1A42BC]" />
            <input type="text"
                maxLength="1"
                className="otp-input mx-1 text-center w-8 h-8 border rounded-lg text-black border-[#1A42BC]" />
            <input type="text"
                maxLength="1"
                className="otp-input mx-1 text-center w-8 h-8 border rounded-lg text-black border-[#1A42BC]" />
            <input type="text"
                maxLength="1"
                className="otp-input mx-1 text-center w-8 h-8 border rounded-lg text-black border-[#1A42BC]" />
            <input type="text"
                maxLength="1"
                className="otp-input mx-1 text-center w-8 h-8 border rounded-lg text-black border-[#1A42BC]" />
          </div>


          <div className="text-center text-gray-700 text-sm font-normal mb-3">
            00:01 Sec
          </div>
          <div className="text-center text-gray-600 text-xs mb-3">
            Don't receive code?{" "}
            <a href="#" className="text-black font-medium">
              Re-send
            </a>
          </div>


          {/* button submit */}
          <div className="text-center">
            <button className="bg-[#1A42BC] hover:bg-[#2d1abc] text-white text-md py-2 px-16 sm:px-20 md:px-24 lg:px-32 rounded-xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VerifyOtpComponent;
