"use client";
import { useRouter } from "next/navigation";
import { saveAs } from "file-saver";
import { useEffect, useState } from "react";
import FeedbackComponent from "./FeedbackComponent";

const PreviewXmlFileComponent = ({ xml, attachmentId, feedback }) => {
  const router = useRouter();
  const [previewXmlData, setPreviewXmlData] = useState([]);
  console.log("xml:    ", xml);

  useEffect(() => {
    const parseXml = (xmlString) => {
      try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        const strings = xmlDoc.getElementsByTagName("string");

        const formattedData = Array.from(strings).map((str, index) => ({
          id: index + 1,
          tag: "<resource>",
          key: `<string name="${str.getAttribute("name")}">${
            str.textContent
          }</string>`,
          value: str.textContent,
          end_tag: "</resource>",
        }));

        setPreviewXmlData(formattedData);
      } catch (err) {
        console.error("Failed to parse XML:", err);
      }
    };

    parseXml(xml);
  }, [xml]);

  const handleDownload = () => {
    const xmlContent = `
      <resources>
        ${previewXmlData
          .map((data) => `  <string name="${data.key}">${data.value}</string>`)
          .join("\n")}
      </resources>
    `;

    const xmlBlob = new Blob([xmlContent], { type: "application/xml" });
    saveAs(xmlBlob, "preview.xml");
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

            <div className="overflow-auto max-h-[67vh] my-4 no-scrollbar">
              {/* map data as xml data */}
              {previewXmlData.map((xmlData) => (
                <div key={xmlData.id} className="text-black pl-8 mt-4">
                  <p className="font-consolas">{xmlData.tag}</p>
                  <p className="pl-10 font-consolas text-gray-800">
                    {xmlData.key}
                  </p>
                  <p className="pl-10 font-consolas text-gray-800">
                    {xmlData.value}
                  </p>
                  <p className="font-consolas">{xmlData.end_tag}</p>
                </div>
              ))}
            </div>
          </div>

          {/* button download and go back */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() =>
                router.push`/project-leader/dashboard/view-attachment/${projectId}`()
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
          <FeedbackComponent attachmentId={attachmentId} feedback={feedback} />
        </div>
      </div>
    </main>
  );
};

export default PreviewXmlFileComponent;
