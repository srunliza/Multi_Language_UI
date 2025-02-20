"use client";
import { useRouter } from "next/navigation";
import FeedbackComponent from "@/components/FeedbackComponent";

const JsonViewer = ({ data, level = 0 }) => {
  const entries = Object.entries(data);
  return (
    <div style={{ paddingLeft: level * 20 }}>
      {entries.map(([key, value], index) => (
        <div key={index} className="text-black pl-8 mt-4">
          {typeof value === "object" && value !== null ? (
            <>
              <p className="ml-4 font-consolas text-gray-800">
                "{key}": {"{"}
              </p>
              <JsonViewer data={value} level={level + 1} />
              <p className="ml-4 font-consolas text-gray-800">
                {"}"}
                {index < entries.length - 1 ? "," : ""}
              </p>
            </>
          ) : (
            <p className="ml-4 font-consolas text-gray-800">
              "{key}": "{value}"{index < entries.length - 1 ? "," : ""}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

const PreviewJsonFileComponent = ({ json, attachmentId, feedback, userId }) => {
  console.log("json: ", json);
  const router = useRouter();

  // Extract data into a plain object with key-value pairs
  const previewJsonData = json.data.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  // Function to handle the download of the JSON data
  const handleDownload = () => {
    // Convert the JSON object to a string
    const jsonString = JSON.stringify(previewJsonData, null, 2);

    const dataStr =
      "data:text/json;charset=utf-8," + encodeURIComponent(jsonString);
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${json.attachmentName}.json`);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <main className="px-6 py-4">
      <div className="flex flex-col sticky w-full lg:flex-row gap-6">
        <div className="bg-white p-5 rounded-lg shadow-lg flex-1">
          <div className="bg-white rounded-lg min-h-[550px] border">
            {/* title */}
            <h1 className="text-gray-800 py-4 pl-5 text-lg font-semibold">
              JSON Preview Page
            </h1>
            <hr />
            <div className="overflow-auto max-h-[49vh] my-4 no-scrollbar">
              {/* data map as json data */}
              <div className="text-black pl-8 mt-4">
                <p className="ml-4 font-consolas text-gray-800">{"{"}</p>
                <JsonViewer data={previewJsonData} />
                <p className="ml-4 font-consolas text-gray-800">{"}"}</p>
              </div>
            </div>
          </div>

          {/* button go back and download */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() =>
                router.push(
                  `/project-leader/dashboard/view-attachment/${json.projectId}`
                )
              }
              className="text-white hover:bg-blue-700 bg-blue-800 shadow-sm rounded-md text-sm py-2 px-4"
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
          <FeedbackComponent
            attachmentId={attachmentId}
            feedback={feedback}
            userId={userId}
          />
        </div>
      </div>
    </main>
  );
};

export default PreviewJsonFileComponent;
