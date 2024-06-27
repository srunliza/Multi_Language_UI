"use client";
import { useRouter } from "next/navigation";
import { saveAs } from "file-saver";
import { useEffect, useState } from "react";
import FeedbackComponent from "./FeedbackComponent";

const PreviewXmlFileComponent = ({ xml, attachmentId, feedback, userId }) => {
  const router = useRouter();
  const [previewXmlData, setPreviewXmlData] = useState([]);
  console.log("xml:    ", xml);

  useEffect(() => {
    const formatXmlData = (xmlObject) => {
      const formattedData = xmlObject.data.map((item, index) => ({
        id: index + 1,
        key: `<string name="${item.key}">${item.value}</string>`,
        value: item.value,
      }));
      setPreviewXmlData(formattedData);
    };

    formatXmlData(xml);
  }, [xml]);

  const handleDownload = () => {
    const xmlContent = `
<resources>
  ${previewXmlData
    .map((data) => `  <string name="${data.key}">${data.value}</string>`)
    .join("\n  ")}
</resources>`;

    const xmlBlob = new Blob([xmlContent], { type: "application/xml" });
    saveAs(xmlBlob, "data.xml");
  };

  return (
    <main className="px-6 py-4">
      <div className="flex flex-col sticky w-full lg:flex-row gap-6">
        <div className="bg-white p-5 rounded-lg shadow-lg flex-1">
          <div className="bg-white rounded-lg min-h-[550px] border">
            {/* title */}
            <h1 className="text-gray-800 py-4 pl-5 text-lg font-semibold">
              XML Preview Page
            </h1>
            <hr />

            <div className="overflow-auto max-h-[49vh] my-4 no-scrollbar">
              {/* map data as xml data */}
              <div className="text-black pl-8 mt-4">
                <p className="font-consolas">&lt;resources&gt;</p>
                {previewXmlData.map((xmlData) => (
                  <p
                    key={xmlData.id}
                    className="pl-10 font-consolas text-gray-800"
                  >
                    {xmlData.key}
                  </p>
                ))}
                <p className="font-consolas">&lt;/resources&gt;</p>
              </div>
            </div>
          </div>

          {/* button download and go back */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() =>
                router.push(
                  `/developer/dashboard/${xml.projectId}`
                )
              }
              className="text-white hover:bg-blue-700 bg-blue-800 shadow-sm rounded-md text-sm py-2 px-4"
            >
              Go Back
            </button>
            <button
              onClick={handleDownload}
              className="text-white bg-emerald-700 hover:bg-emerald-600 shadow-sm rounded-md text-sm py-2 px-4"
            >
              Download
            </button>
          </div>
        </div>

        {/* feedback component */}
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

export default PreviewXmlFileComponent;