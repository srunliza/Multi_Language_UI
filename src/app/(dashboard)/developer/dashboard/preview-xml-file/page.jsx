"use client";

import { useRouter } from "next/navigation";
import { saveAs } from "file-saver";
import FeedbackComponent from "@/components/FeedbackComponent";

const PreviewXmlFilePage = () => {
  const router = useRouter();

  const previewXmlData = [
    {
      id: 1,
      tag: "<resource>",
      elements: [
        { key: `<string name="app_name">`, value: `Language </string>` },
        { key: `<string name="welcome_message">`, value: `Welcome </string>` },
        { key: `<string name="goodbye_message">`, value: `Goodbye </string>` },
        { key: `<string name="app_version">`, value: `1.0.0 </string>` },
        { key: `<string name="developer_name">`, value: `John Doe </string>` },
      ],
      end_tag: "</resource>",
    },
  ];

  const handleDownload = () => {
    const xmlContent = previewXmlData
      .map((data) => {
        const elementsContent = data.elements
          .map((element) => `  ${element.key}${element.value}`)
          .join("\n");

        return `${data.tag}\n${elementsContent}\n${data.end_tag}`;
      })
      .join("\n\n");

    const xmlBlob = new Blob([xmlContent], { type: "application/xml" });
    saveAs(xmlBlob, "preview.xml");
  };

  return (
    <main className="px-6 py-4">
      <div className="flex flex-col sticky w-full lg:flex-row gap-6">
        <div className="bg-white p-5 rounded-lg shadow-lg flex-1">
          <div className="bg-white rounded-lg min-h-[560px] border">
            {/* title */}
            <h1 className="text-gray-800 py-4 pl-5 text-lg font-semibold">
              Preview Page
            </h1>
            <hr />

            <div className="overflow-auto max-h-[65vh] mt-4 mb-4 no-scrollbar">
              {/* map data as xml data */}
              {previewXmlData.map((xmlData, index) => (
                <div key={index} className="text-black pl-8 mt-4">
                  <p className="font-consolas">{xmlData.tag}</p>
                  {xmlData.elements.map((element, subIndex) => (
                    <p
                      key={subIndex}
                      className="pl-10 font-consolas text-gray-800"
                    >
                      {element.key}
                      {element.value}
                    </p>
                  ))}
                  <p className="font-consolas">{xmlData.end_tag}</p>
                </div>
              ))}
            </div>
          </div>

          {/* button download and go back */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() => router.push("/developer/dashboard")}
              className="text-white hover:bg-blue-800 bg-blue-700 shadow-sm rounded-md text-sm py-2 px-4"
            >
              Go Back
            </button>
            <button
              onClick={handleDownload}
              className="text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm rounded-md text-sm py-2 px-4"
            >
              Download
            </button>
          </div>
        </div>

        {/* feedback component */}
        <div className="w-full lg:w-1/3">
          <FeedbackComponent />
        </div>
      </div>
    </main>
  );
};

export default PreviewXmlFilePage;
