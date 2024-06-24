'use client';

import { useRouter } from 'next/navigation';
import { saveAs } from 'file-saver';
import FeedbackComponent from "@/components/FeedbackComponent";

const PreviewStringFilePage = () => {
    const router = useRouter();

    const previewStringData = [
        { 'id': 1, 'key': "Hello", 'value': "Hello" },
        { 'id': 2, 'key': "Hello", 'value': "Hello" },
        { 'id': 3, 'key': "Hello", 'value': "Hello" },
        { 'id': 4, 'key': "Hello", 'value': "Hello" },
        { 'id': 5, 'key': "Hello", 'value': "Hello" },
        { 'id': 6, 'key': "Hello", 'value': "Hello" },
        { 'id': 7, 'key': "Hello", 'value': "Hello" },
        { 'id': 8, 'key': "Hello", 'value': "Hello" },
        { 'id': 9, 'key': "Hello", 'value': "Hello" },
        { 'id': 10, 'key': "Hello", 'value': "Hello" },
        { 'id': 11, 'key': "Hello", 'value': "Hello" },
        { 'id': 12, 'key': "Hello", 'value': "Hello" },
        { 'id': 13, 'key': "Hello", 'value': "Hello" },
        { 'id': 14, 'key': "Hello", 'value': "Hello" },
        { 'id': 15, 'key': "Hello", 'value': "Hello" },
        { 'id': 16, 'key': "Hello", 'value': "Hello" }
    ];

    const handleDownload = () => {
        const stringContent = previewStringData.map(data => {
            return `"${data.key}" : "${data.value}";`;
        }).join('\n');
        
        const stringBlob = new Blob([stringContent], { type: 'text/plain' });
        saveAs(stringBlob, 'preview.txt');
    };

    return (
        <main className="px-6 py-4">
            <div className="flex flex-col sticky w-full lg:flex-row gap-6">
                <div className="bg-white p-5 rounded-lg shadow-lg flex-1">
                    <div className="bg-white rounded-lg min-h-[560px] border">
                        {/* title */}
                        <h1 className="text-gray-800 py-4 pl-5 text-lg font-semibold">STRINGS Preview Page</h1>
                        <hr />

                        <div className='overflow-auto max-h-[65vh] mb-4 no-scrollbar'>
                            {/* data map as string data */}
                            {previewStringData.map((stringData, index) => (
                                <div key={index} className="text-black pl-8 mt-3">
                                    <p className="font-consolas text-gray-800">"{stringData.key}" = "{stringData.value}";</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* button go back and download */}
                    <div className="flex gap-4 mt-4 justify-end">
                        <button onClick={() => router.push('/developer/dashboard')} className="text-white bg-blue-700 hover:bg-blue-800 shadow-sm rounded-md text-sm py-2 px-3">
                            Go Back
                        </button>
                        <button onClick={handleDownload} className="text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm rounded-md text-sm py-2 px-3">
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
}

export default PreviewStringFilePage;
