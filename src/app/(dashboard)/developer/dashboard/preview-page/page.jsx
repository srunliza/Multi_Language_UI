import React from "react";
import FeedbackComponent from "@/components/FeedbackComponent";
import DeveloperPreviewTranslateComponent from "../../_components/DeveloperPreviewTranslateComponent";
import NotificationAll from "@/components/NotificationAll";

const DeveloperPage = () => {
  return (
    <div className="w-[93%] mx-auto mt-5">
      <h2 className="font-semibold text-gray-800 text-xl">Web Designing</h2>
      <div className="grid grid-cols-12 gap-x-10 shadow-sm  justify-between mt-5 ">
        <div className="col-span-8">
          <DeveloperPreviewTranslateComponent />
          <div className="flex justify-end mt-4">
            <a className="cursor-pointer  shadow-lg bg-[#7C40FF] rounded-xl py-2 px-3 text-sm text-white">
              Go Back
            </a>
          </div>
        </div>
        <div className="col-span-4">
          <FeedbackComponent />
        </div>
      </div>
    </div>
  );
};

export default DeveloperPage;
