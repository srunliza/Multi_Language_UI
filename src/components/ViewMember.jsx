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
    <div className="border">
      <main className="flex flex-1 h-full">
        <div className="bg-white overflow-hidden rounded-xl sm:rounded-xl">
          {/* Header Section */}
          <div className="px-3 py-2">
            <div className="flex items-center text-gray-700 justify-between">
              <span className="font-semibold m-3 text-sm">Project Leader</span>
            </div>
            <hr className="mt-1 border-t border-gray-300 w-[500px] ml-3" />
          </div>

          {/* Project Leaders Section */}
          {projectLeaders.map((leader) => (
            <div key={leader.id} className="flex items-center p-2 hover:bg-blue-100 ml-8">
              <Image
                src={`/assets/images/${leader.image}`} 
                alt={leader.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-10">
                <div className="font-semibold text-gray-500 text-sm">
                  {leader.name}
                </div>
              </div>
            </div>
          ))}

          {/* Translators Section */}
          <div className="px-3 py-1 -mt-2">
            <div className="flex items-center text-gray-700">
              <span className="font-semibold m-3 text-sm">Translator</span>
            </div>
            <hr className="mt-1 border-t border-gray-300 w-[500px] ml-3" />
          </div>
          <div className="overflow-y-auto h-[170px] no-scrollbar">
            {translators.map((translator) => (
              <div key={translator.id} className="flex items-center p-2 hover:bg-blue-100 ml-8">
                <Image
                  src={`/assets/images/${translator.image}`} // Dynamic image path based on ID
                  alt={translator.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-10">
                  <div className="font-semibold text-gray-500 text-sm">
                    {translator.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Developers Section */}
          <div className="px-3 py-2 -mt-3">
            <div className="flex items-center text-gray-700 ">
              <span className="font-semibold m-3 text-sm">Developer</span>
            </div>
            <hr className="mt-1 border-t border-gray-300 w-[500px] ml-3" />
          </div>
          <div className="overflow-y-auto h-[200px] no-scrollbar pb-[4rem]">
            {developers.map((developer) => (
              <div key={developer.id} className="flex items-center p-2 hover:bg-blue-100 ml-8">
                <Image
                  src={`/assets/images/${developer.image}`} // Dynamic image path based on ID
                  alt={developer.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-10">
                  <div className="font-semibold text-gray-500 text-sm">
                    {developer.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewMember;
