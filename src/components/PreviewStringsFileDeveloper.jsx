"use client";
import { useRouter } from "next/navigation";
import FeedbackComponent from "@/components/FeedbackComponent";

const PreviewStringsFileComponent = ({ string, attachmentId, feedback, userId }) => {
  console.log("string: ", string);
  const router = useRouter();

  // Convert the string content to an array of key-value pairs
  const previewStringData = string.split("\n").map((line, index) => ({
    key: index + 1,
    value: line,
  }));

  // Function to handle the download of the string data
  const handleDownload = () => {
    const formattedStringContent =
      "{\n" +
      previewStringData
        .map(({ key, value }) => `"${key}" : "${value}"`)
        .join(",\n") +
      "\n}";

    const dataStr =
      "data:text/plain;charset=utf-8," +
      encodeURIComponent(formattedStringContent);
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "preview.txt");
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
              STRINGS Preview Page
            </h1>
            <hr />
            <div className="overflow-auto max-h-[55vh] my-4 no-scrollbar">
              {/* data map as string data */}
              {previewStringData.map(({ key, value }, index) => (
                <div key={index} className="text-black pl-8 mt-3">
                  <p className="font-consolas text-gray-800">
                    "{key}" : "{value}",
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* button go back and download */}
          <div className="flex gap-2 mt-4 justify-end">
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
          <FeedbackComponent attachmentId={attachmentId} feedback={feedback} userId={userId}/>
        </div>
      </div>
    </main>
  );
};

export default PreviewStringsFileComponent;
