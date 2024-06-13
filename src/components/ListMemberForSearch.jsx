'use client'
import React, { useState } from "react";
import UserProfileComponent from "./UserProfileComponent"; // Ensure the path is correct
import Image from "next/image";

const ListMemberForSearch = () => {
  const [selectedUser, setSelectedUser] = useState(null);

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

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseUserProfile = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <div className=" p-3 overflow-y-auto h-[320px] no-scrollbar cursor-pointer">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 py-2"
            onClick={() => handleUserClick(user)}
          >
            <Image
              src={user.image}
              alt={user.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-gray-500">{user.lastSeen}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedUser && (
        <UserProfileComponent
          user={selectedUser}
          onClose={handleCloseUserProfile}
        />
      )}
    </div>
  );
};

export default ListMemberForSearch;
