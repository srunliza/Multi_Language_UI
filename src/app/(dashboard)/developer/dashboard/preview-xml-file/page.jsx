'use client';

import { useRouter } from 'next/navigation';
import { saveAs } from 'file-saver';
import FeedbackComponent from "@/components/FeedbackComponent";

const PreviewXmlFilePage = () => {
    const router = useRouter();

    const previewXmlData = [
        {
            'id': 1,
            'tag': "<resource>",
            'key': `<string name="app_name"> Language </string>`,
            'value': `<string name="app_name"> Welcome to cambodia </string>`,
            'end_tag': "</resource>"
        },
        {
            'id': 2,
            'tag': "<resource>",
            'key': `<string name="app_name"> Language </string>`,
            'value': `<string name="app_name"> Welcome to cambodia </string>`,
            'end_tag': "</resource>"
        },
    ];

    const handleDownload = () => {
        const xmlContent = previewXmlData.map(data => {
            return `${data.tag}\n  ${data.key}\n  ${data.value}\n${data.end_tag}`;
        }).join('\n\n');
        
        const xmlBlob = new Blob([xmlContent], { type: 'application/xml' });
        saveAs(xmlBlob, 'preview.xml');
    };

    return (
        <main className=" px-6 py-4">
            <div className="flex flex-col sticky w-full lg:flex-row gap-6">
                <div className="bg-white p-5 rounded-lg shadow-lg flex-1">
                    <div className="bg-white rounded-lg min-h-[560px] border">
                        {/* title */}
                        <h1 className="text-gray-800 py-4 pl-5 text-lg font-semibold">Preview Page</h1>
                        <hr />
                       
                        <div className="overflow-auto max-h-[440px] mt-4 mb-4 no-scrollbar">
                            {/* map data as xml data */}
                            {previewXmlData.map((xmlData, index) => (
                                <div key={index} className="text-black pl-8 mt-4">
                                    <p className="font-consolas">{xmlData.tag}</p>
                                    <p className="pl-10 font-consolas text-gray-800"> {xmlData.key} </p>
                                    <p className="pl-10 font-consolas text-gray-800"> {xmlData.value} </p>
                                    <p className="font-consolas">{xmlData.end_tag}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* button download and go back */}
                    <div className="flex justify-end gap-2 mt-4">
                        <button onClick={() => router.push('/developer/dashboard')} className="text-white hover:bg-blue-800 bg-blue-700 shadow-sm rounded-md text-sm py-2 px-4">
                            Go Back
                        </button>
                        <button onClick={handleDownload} className="text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm rounded-md text-sm py-2 px-4">
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
}

export default PreviewXmlFilePage;
