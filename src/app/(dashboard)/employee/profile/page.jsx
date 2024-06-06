import React from "react";

const ProfilePage = () => {
    return (
        <main className="mx-16 ">
            <div className="bg-white  w-full pl-32  rounded-xl shadow-md py-10">
                <h1 className="text-xl text-gray-700 font-semibold">Personal Details</h1>
                <div className="flex gap-x-8  items-center mt-10">
                    <div className="h-24 w-24 rounded-full overflow-hidden">
                        <img className="" src={"/assets/images/profile.jpg"} alt="" />
                    </div>
                    <div>
                        <h2 className="text-lg ">Srun Lisa</h2>
                        <p className="text-sm text-gray-500">Translator</p>
                    </div>
                </div>
                <div className="w-[70%] grid grid-cols-2 mt-10 gap-y-2">
                    <h2 className="uppercase text-sm">first name</h2>
                    <h2 className="uppercase text-sm">first name</h2>
                    <p className="text-gray-600">Srun</p>
                    <p className="text-gray-600">Lisa</p>
                </div>
                <div className="w-[70%] grid grid-cols-2 mt-10 gap-2">
                    <h2 className="uppercase text-sm">Day Of Birth</h2>
                    <h2 className="uppercase text-sm">Gender</h2>
                    <p className="text-gray-600">Feb-14-1996</p>
                    <p className="text-gray-600">Male</p>
                </div>
            </div>
            <div className="bg-white w-full pl-32  mt-4 rounded-xl shadow-md py-10">
                <h1 className="text-xl text-gray-700 font-semibold">Contacts</h1>
                <div className="w-[70%] grid grid-cols-2 mt-10 gap-y-2">
                    <h2 className="text-sm ">Phone</h2>
                    <h2 className="text-sm">Email</h2>
                    <p className="text-gray-600">+855 70 567 890</p>
                    <p className="text-gray-600">srunlisa@gmail.com</p>
                </div>
                <div className="w-[70%] grid grid-cols-2 mt-10 gap-2">
                    <h2 className=" text-sm">Telegram</h2>
                    <h2 className=" text-sm">Facebook</h2>
                    <p className="text-gray-600">@Srunlisa</p>
                    <p className="text-gray-600">Srun Lisa</p>
                </div>
            </div>
        </main>
    );
};

export default ProfilePage;