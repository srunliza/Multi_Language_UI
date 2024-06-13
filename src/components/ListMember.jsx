import React from "react";

export const ListMember = () => {
  const users = [
    {
      name: "Kosal Sreyka",
      image: "/assets/images/sreyka.png",
      lastSeen: "a long time ago",
      email: "robert@example.com",
      phone: "123456789",
    },
    {
      name: "Tan VibolsopeakNeath",
      image: "/assets/images/neath.png",
      lastSeen: "a long time ago",
      email: "robert@example.com",
      phone: "123456789",
    },
    {
      name: "Long Sreyly",
      image: "/assets/images/sreyly.png",
      lastSeen: "a long time ago",
      email: "robert@example.com",
      phone: "123456789",
    },
    {
      name: "Meng Soklay",
      image: "/assets/images/soklay.png",
      lastSeen: "a long time ago",
      email: "robert@example.com",
      phone: "123456789",
    },
    {
      name: "Tep Thean",
      image: "/assets/images/thean.png",
      lastSeen: "a long time ago",
      email: "robert@example.com",
      phone: "123456789",
    },
    {
      name: "Tan VibolsopeakNeath",
      image: "/assets/images/neath.png",
      lastSeen: "a long time ago",
      email: "robert@example.com",
      phone: "123456789",
    },
    {
      name: "Robert Downey Jr.",
      image: "/assets/images/sreyly.png",
      lastSeen: "a long time ago",
      email: "robert@example.com",
      phone: "123456789",
    },
    {
      name: "Robert Downey Jr.",
      image: "/assets/images/neath.png",
      lastSeen: "a long time ago",
      email: "robert@example.com",
      phone: "123456789",
    },
    {
      name: "Robert Downey Jr.",
      image: "/assets/images/sreyly.png",
      lastSeen: "a long time ago",
      email: "robert@example.com",
      phone: "123456789",
    },
    // Add more users as needed
  ];

  return (
    <div>
      <div className="mt-1 p-3  overflow-y-auto h-64 no-scrollbar ">
        {users.map((user) => (
          <div className="flex items-center space-x-2 py-1 ">
            <label className="inline-flex items-center cursor-pointer mr-2">
              <input type="checkbox" className="hidden peer " />
              <span className="w-4 h-4 inline-block border border-gray-300 rounded-full peer-checked:bg-blue-600 peer-checked:border-transparent peer-checked:before:content-['✓'] peer-checked:before:block peer-checked:before:text-white peer-checked:before:text-center peer-checked:before:leading-[13px]"></span>
            </label>
            <img
              src={user.image}
              alt={user.name}
              className="w-10 h-10 rounded-full "
            />
            <div>
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-gray-500">{user.lastSeen}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
