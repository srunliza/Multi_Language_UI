"use client";
import React, { useState } from "react";
import Image from "next/image";
import { members } from "@/obj/members";

const ViewMember = () => {
  const [activeTab, setActiveTab] = useState("View Attachment");

  // Filter members based on their role
  const projectLeaders = members.filter(member => member.role === "Project Leader");
  const translators = members.filter(member => member.role === "Translator");
  const developers = members.filter(member => member.role === "Developer");

  return (
    <div className="border w-full h-full rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">40 MEMBERS</h2>
        <div className="relative text-gray-600">
          <input
            type="search"
            placeholder="Search"
            className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887l-14.82-14.82c3.486-4.276,5.588-9.718,5.588-15.611C45.913,9.626,35.287,0,22.956,0   C10.626,0,0,10.626,0,22.956c0,12.331,10.626,22.956,22.956,22.956c5.893,0,11.335-2.102,15.611-5.588l14.82,14.82   c0.686,0.686,1.793,0.686,2.479,0l1.283-1.283C55.831,53.68,55.831,52.573,55.146,51.887z M22.956,41.913   c-10.452,0-18.957-8.504-18.957-18.957S12.504,3.999,22.956,3.999c10.452,0,18.957,8.504,18.957,18.957   S33.408,41.913,22.956,41.913z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-y-auto h-full no-scrollbar">
        {/* Project Leader Section */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-600 px-3">Project Leader</h3>
          <hr className="mt-1 border-t border-gray-300 w-full ml-3" />
          {projectLeaders.map((leader) => (
            <div key={leader.id} className="flex items-center p-2 hover:bg-blue-100 ml-3">
              <Image
                src={`/assets/images/${leader.image}`}
                alt={leader.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4 flex-grow">
                <div className="font-semibold text-gray-800 text-sm">{leader.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Translators Section */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-600 px-3">Translator</h3>
          <hr className="mt-1 border-t border-gray-300 w-full ml-3" />
          {translators.map((translator) => (
            <div key={translator.id} className="flex items-center p-2 hover:bg-blue-100 ml-3">
              <Image
                src={`/assets/images/${translator.image}`}
                alt={translator.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4 flex-grow">
                <div className="font-semibold text-gray-800 text-sm">{translator.name}</div>
              </div>
              <button className="text-gray-500 hover:text-red-600">X</button>
            </div>
          ))}
        </div>

        {/* Developers Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600 px-3">Developer</h3>
          <hr className="mt-1 border-t border-gray-300 w-full ml-3" />
          {developers.map((developer) => (
            <div key={developer.id} className="flex items-center p-2 hover:bg-blue-100 ml-3">
              <Image
                src={`/assets/images/${developer.image}`}
                alt={developer.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4 flex-grow">
                <div className="font-semibold text-gray-800 text-sm">{developer.name}</div>
              </div>
              <button className="text-gray-500 hover:text-red-600">X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewMember;
