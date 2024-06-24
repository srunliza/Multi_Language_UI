"use client";
import { useRouter } from "next/navigation";
import FeedbackComponent from "@/components/FeedbackComponent";

const PreviewJsonFileComponent = ({ json, attachmentId, feedback }) => {
  console.log(json);
  const router = useRouter();

  // Convert JSON object to an array of key-value pairs
  const previewJsonData = Object.entries(json).map(([key, value]) => ({
    key,
    value,
  }));

  // Function to handle the download of the JSON data
  const handleDownload = () => {
    // Convert the JSON object to a string
    const jsonString = JSON.stringify(json);

    // Convert the string into an array of characters
    const jsonCharArray = Array.from(jsonString);

    // Create a new JSON object where each character is a key-value pair
    const formattedJson = jsonCharArray.reduce((acc, char, index) => {
      acc[index] = char;
      return acc;
    }, {});

    // Convert the formatted JSON object to a string with new lines
    const formattedJsonString =
      "{\n" +
      Object.entries(formattedJson)
        .map(([key, value]) => `"${key}" : "${value}"`)
        .join(",\n") +
      "\n}";

    const dataStr =
      "data:text/json;charset=utf-8," + encodeURIComponent(formattedJsonString);
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "data.json");
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
              Preview Page
            </h1>
            <hr />
            <div className="overflow-auto max-h-[55vh] my-4 no-scrollbar">
              {/* data map as json data */}
              {previewJsonData.map((jsonData, index) => (
                <div key={index} className="text-black pl-8 mt-4">
                  <p className="ml-4 font-consolas text-gray-800">
                    "{jsonData.key}" : "{jsonData.value}",
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* button go back and download */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() =>
                router.push(
                  `/project-leader/dashboard/view-attachment/${attachmentId}`
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
          <FeedbackComponent attachmentId={attachmentId} feedback={feedback} />
        </div>
      </div>
    </main>
  );
};

export default PreviewJsonFileComponent;
