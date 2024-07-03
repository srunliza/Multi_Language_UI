"use client";
import React, { useState } from "react";
import UserProfileComponent from "./UserProfile";

const ListMemberForSearch = ({ project, searchQuery }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseUserProfile = () => {
    setSelectedUser(null);
  };

  const filteredMembers = project.members.filter((member) =>
    member.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="p-3 overflow-y-auto h-[320px] no-scrollbar cursor-pointer">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 py-2"
            onClick={() => handleUserClick(member)}
          >
            <img
              src={member.image || "../../../../Images/user-profile.png"}
              alt={member.username}
              className="rounded-full h-8 w-8"
            />
            <div>
              <p className="text-sm font-medium">{member.username}</p>
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
