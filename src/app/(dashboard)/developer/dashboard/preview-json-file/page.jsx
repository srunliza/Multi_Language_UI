"use client";

import { useRouter } from "next/navigation";
import { saveAs } from "file-saver";
import FeedbackComponent from "@/components/FeedbackComponent";

const PreviewJsonFilePage = () => {
  const router = useRouter();

  const previewJsonData = [
    { id: 1, curly_brace: "{", key: "Server", value: "ម៉ាស៊ីន" },
    { id: 2, key: "Network", value: "បណ្តាញ" },
    { id: 3, key: "Database", value: "មូលដ្ឋានទិន្នន័យ", end_curly_brace: "}" },
  ];

  const handleDownload = () => {
    const jsonBlob = new Blob([JSON.stringify(previewJsonData, null, 2)], {
      type: "application/json",
    });
    saveAs(jsonBlob, "preview.json");
  };

  return (
    <main className="px-6 py-4">
      <div className="flex flex-col sticky w-full lg:flex-row gap-6">
        <div className="bg-white p-5 rounded-lg shadow-lg flex-1">
          <div className="bg-white rounded-lg min-h-[560px] border">
            {/* title */}
            <h1 className="text-gray-800 py-4 pl-5 text-lg font-semibold">
              JSON Preview Page
            </h1>
            <hr />
            <div className="overflow-auto max-h-[65vh] mt-4 mb-4 no-scrollbar">
              {/* data map as json data */}
              {previewJsonData.map((jsonData, index) => (
                <div key={index} className="text-black pl-8 mt-4">
                  {jsonData.curly_brace && (
                    <p className="text-gray-800 font-consolas">
                      {jsonData.curly_brace}
                    </p>
                  )}
                  <p className="ml-4 font-consolas text-gray-800">
                    "{jsonData.key}" : "{jsonData.value}",
                  </p>
                  {jsonData.end_curly_brace && (
                    <p className="font-consolas text-gray-800">
                      {jsonData.end_curly_brace}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* button go back and download */}
          <div className="flex gap-4 mt-4 justify-end">
            <button
              onClick={() => router.push("/developer/dashboard")}
              className="text-white shadow-sm bg-blue-700 hover:bg-blue-800 rounded-md text-sm py-2 px-3"
            >
              Go Back
            </button>
            <button
              onClick={handleDownload}
              className="text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm rounded-md text-sm py-2 px-3"
            >
              Download
            </button>
          </div>
        </div>

        {/* feedback  */}
        <div className="w-full lg:w-1/3">
          <FeedbackComponent />
        </div>
      </div>
    </main>
  );
};

export default PreviewJsonFilePage;
