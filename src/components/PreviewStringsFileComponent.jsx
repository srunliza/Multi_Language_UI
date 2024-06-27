"use client";
import { useRouter } from "next/navigation";
import FeedbackComponent from "@/components/FeedbackComponent";
import { v4 as uuidv4 } from "uuid";

const PreviewStringsFileComponent = ({
  string,
  attachmentId,
  feedback,
  userId,
}) => {
  const router = useRouter();
  console.log(feedback)

  const { data: previewStringData } = string; // Extracting the data array from the string object

  const mappedData = previewStringData
    .map(({ key, value }) => `"${key}" = "${value}";`)
    .join("\n");

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([mappedData], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "data.strings";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
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
              {previewStringData.map(({ id, key, value }, index) => (
                <div key={id} className="text-black pl-8 mt-3">
                  <p className="font-consolas text-gray-800">
                    "{key}" = "{value}";
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
                  `/project-leader/dashboard/view-attachment/${string.projectId}`
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

export default PreviewStringsFileComponent;
