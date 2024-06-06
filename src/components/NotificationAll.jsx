"use client";

import Link from "next/link";
import Image from "next/image"; // Correct import
import IMAGES from "../../public/assets/images";

const NotificationAll = () => {
  const notification = [0, 1, 2, 3, 4, 5];

  return (
    <div className="flex gap-20 px-4">
      <div className="bg-white min-h-screen flex justify-center p-4 rounded-2xl">
        <div className="rounded-lg w-full max-w-3xl">
          <div className="px-6 py-4 flex justify-between flex-col">
            <h2 className="text-xl font-semibold mb-5">Notifications</h2>
            <div className="flex space-x-4 gap-10">
              <button className="border-black text-gray-600">Unread</button>
              <Link href="#" className="font-bold">
                All
              </Link>
            </div>
          </div>
          <div className="container flex flex-col gap-6 gap-x-10">
            {notification.map((index) => (
              <div key={index} className="px-6 py-4 flex items-center">
                <Image
                  width={48} // Adjusted the width
                  height={48} // Adjusted the height
                  src={IMAGES.profile}
                  alt="User"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="grid grid-cols-2">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">Project Name 001</h3>
                    <p className="text-gray-600">
                      <span className="font-bold">MENG SOKLAY</span>, was
                      translated 3 files on and downloaded “JSON...”
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-gray-500 text-sm">5-May-2024</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationAll;
