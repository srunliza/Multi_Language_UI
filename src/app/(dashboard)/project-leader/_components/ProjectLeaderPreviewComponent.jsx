"use client";
import React from "react";
import { useRouter } from "next/navigation";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const ProjectLeaderPreviewTranslateComponent = ({ previewData }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push(`../view-attachment/${previewData.projectId}`);
  };

  return (
    <section className="bg-white p-5 rounded-lg shadow-lg flex-1">
      <h1 className="text-lg font-semibold mb-4">Web Designing</h1>
      <div className="flex rounded-t-md border-x border-t sticky py-2 px-4 font-semibold bg-[#daeaff] justify-evenly items-center">
        <h1>{previewData.baseLanguage}</h1>
        <KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
        <h1>{previewData.language.language}</h1>
      </div>
      {/* Table Section */}
      <div className="max-h-[55vh] border-b rounded-b-md overflow-y-scroll no-scrollbar">
        <table className="w-full border-collapse">
          <tbody>
            {previewData.data.map((e) => (
              <tr key={e.id} className="border">
                <td className="w-1/2 py-2 px-4">{e.key}</td>
                <td className="py-2 border-l px-4">{e.value || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* End Table Section */}

      {/* Handle Button */}
      <div className="flex justify-end gap-2 mt-4">
        {/* Button Go Back */}
        <button
          className="px-4 py-2 border border-blue-800 text-blue-800 hover:border-blue-400 rounded-md text-sm transition duration-150 ease-in-out"
          onClick={handleGoBack}
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default ProjectLeaderPreviewTranslateComponent;
