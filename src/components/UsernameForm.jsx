"use client";
import React, { useState } from "react";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Input username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleChange}
            className="shadow appearance-none border rounded-md w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-500"
            placeholder="NeathZzz"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsernameForm;
