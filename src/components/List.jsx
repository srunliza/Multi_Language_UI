import { getAllUserService } from "@/service/user.service";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

export const ListMember = ({ onSelectUsers }) => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getAllUserService();
      const data = response.payload;
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        setUsers([]);
      }
    };
    fetchUsers();
  }, []);

  const handleUserSelect = (userId) => {
    setSelectedUsers((prevSelected) => {
      const newSelected = prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId];
      onSelectUsers(newSelected);
      return newSelected;
    });
  };

  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="relative mb-4">
        <input
          className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-blue-800 focus:border-blue-800 focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute inset-y-0 flex items-center">
          <SearchIcon className="absolute left-3 text-gray-500" />
        </div>
      </div>
      <div className="mt-1 p-3 overflow-y-auto h-64 no-scrollbar">
        {filteredUsers.map((user) => (
          <div key={user.userId} className="flex items-center space-x-2 py-1">
            <label className="inline-flex items-center cursor-pointer mr-2">
              <input
                type="checkbox"
                className="hidden peer"
                onChange={() => handleUserSelect(user.userId)}
                checked={selectedUsers.includes(user.userId)}
              />
              <span className="w-4 h-4 inline-block border border-gray-300 rounded-full peer-checked:bg-blue-600 peer-checked:border-transparent peer-checked:before:content-['✓'] peer-checked:before:block peer-checked:before:text-white peer-checked:before:text-center peer-checked:before:leading-[13px]"></span>
            </label>
            <img
              src={user.image || "../../../../Images/user-profile.png"}
              alt={user.fullName}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{user.username}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMember;
