"use client"
import React from "react";
import { useRouter } from "next/navigation";
import FeedbackComponent from "@/components/FeedbackComponent";
import ProjectLeaderPreviewTranslateComponent from "../../_components/ProjectLeaderPreviewComponent";

const PreviewPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/project-leader/view-attachment");
  };

  return (
    <div className="w-[93%] mx-auto mt-5">
      <h2 className="font-semibold text-gray-800 text-xl">Web Designing</h2>
      <div className="grid grid-cols-12 gap-x-10 shadow-sm justify-between mt-5">
        <div className="col-span-8">
          <ProjectLeaderPreviewTranslateComponent />
          <div className="flex justify-end mt-4">
            <a
              className="cursor-pointer shadow-lg bg-[#7C40FF] rounded-xl py-2 px-3 text-sm text-white"
              onClick={handleGoBack}
            >
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

export default PreviewPage;
