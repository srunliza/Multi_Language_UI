import React from "react";

const ProfilePage = () => {
  return (
    <main className="sm:px-8 md:px-[5rem] lg:px-[8rem] xl:px-[13rem]">
      <div className="bg-white w-full pl-8 md:pl-10 lg:pl-32 rounded-xl shadow-md py-10">
        <h1 className="text-xl text-gray-800 font-semibold">Personal Details</h1>
        <div className="flex gap-x-8 items-center mt-10">
          <div className="h-24 w-24 rounded-full overflow-hidden">
            <img className="" src={"/assets/images/lisa.png"} alt="" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Srun Lisa</h2>
            <p className="text-sm text-gray-500">Translator</p>
          </div>
        </div>
        <div className="w-full md:w-[85%] lg:w-[70%] grid grid-cols-2 mt-10 gap-y-2">
          <h2 className="uppercase text-sm font-semibold text-gray-600">first name</h2>
          <h2 className="uppercase text-sm font-semibold text-gray-600">first name</h2>
          <p className="text-gray-600">Srun</p>
          <p className="text-gray-600">Lisa</p>
        </div>
        <div className="w-full md:w-[85%] lg:w-[70%] grid grid-cols-2 mt-9 gap-2">
          <h2 className="uppercase text-sm font-semibold text-gray-600">Day Of Birth</h2>
          <h2 className="uppercase text-sm font-semibold text-gray-600">Gender</h2>
          <p className="text-gray-600">Feb-14-1996</p>
          <p className="text-gray-600">Male</p>
        </div>
      </div>
      <div className="bg-white w-full pl-8 md:pl-10 lg:pl-32 mt-4 rounded-xl shadow-md py-10">
        <h1 className="text-xl text-gray-800 font-semibold">Contacts</h1>
        <div className="w-full md:w-[85%] lg:w-[70%] grid grid-cols-2 mt-10 gap-y-2">
          <h2 className="text-sm font-semibold text-gray-600">Phone</h2>
          <h2 className="text-sm font-semibold text-gray-600">Email</h2>
          <p className="text-gray-600">+855 70 567 890</p>
          <p className="text-gray-600">srunlisa@gmail.com</p>
        </div>
        <div className="w-full md:w-[85%] lg:w-[70%] grid grid-cols-2 mt-9 gap-2">
          <h2 className="text-sm font-semibold text-gray-600">Telegram</h2>
          <h2 className="text-sm font-semibold text-gray-600">Facebook</h2>
          <p className="text-gray-600">@Srunlisa</p>
          <p className="text-gray-600">Srun Lisa</p>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
