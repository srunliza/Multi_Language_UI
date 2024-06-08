'use client';

import { useRouter } from 'next/navigation';
import { saveAs } from 'file-saver';
import FeedbackComponent from "@/components/FeedbackComponent";

const PreviewJsonFilePage = () => {
    const router = useRouter();

    const previewJsonData = [
        { 'id': 1, 'curly_brace': '{', 'key': "Hello", 'value': "សួស្តី" },
        { 'id': 2, 'key': "Hello", 'value': "សួស្តី" },
        { 'id': 3, 'key': "Hello", 'value': "សួស្តី" },
        { 'id': 4, 'key': "Hello", 'value': "សួស្តី" },
        { 'id': 5, 'key': "Hello", 'value': "សួស្តី" },
        { 'id': 6, 'key': "Hello", 'value': "សួស្តី" },
        { 'id': 7, 'key': "Hello", 'value': "សួស្តី" },
        { 'id': 8, 'key': "Hello", 'value': "សួស្តី" },
        { 'id': 9, 'key': "Hello", 'value': "សួស្តី" },
        { 'id': 10, 'key': "Hello", 'value': "សួស្តី" },
        { 'id': 11, 'key': "Hello", 'value': "សួស្តី" },
        { 'id': 12, 'key': "Hello", 'value': "សួស្តី" },
        { 'id': 13, 'key': "Hello", 'value': "សួស្តី", 'end_curly_brace': '}' },
    ];

    const handleDownload = () => {
        const jsonBlob = new Blob([JSON.stringify(previewJsonData, null, 2)], { type: 'application/json' });
        saveAs(jsonBlob, 'preview.json');
    };

    return (
        <main className="bg-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="sm:col-span-12 md:col-span-8 lg:col-span-9">
                    <div className="bg-white shadow-md p-6 rounded-lg min-h-[560px] border">
                        {/* title */}
                        <h1 className="text-gray-800 text-xl font-semibold mb-3">Preview Page</h1>
                        <hr />
                        <div className='overflow-auto max-h-[440px] mt-4 mb-4 no-scrollbar'>
                            {/* data map as json data */}
                            {previewJsonData.map((jsonData, index) => (
                                <div key={index} className="text-black pl-8 mt-4">
                                    {jsonData.curly_brace && <p className='text-gray-800 font-consolas'>{jsonData.curly_brace}</p>}
                                    <p className='ml-4 font-consolas text-gray-800'>"{jsonData.key}" : "{jsonData.value}",</p>
                                    {jsonData.end_curly_brace && <p className='font-consolas text-gray-800'>{jsonData.end_curly_brace}</p>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* button go back and download */}
                    <div className="flex gap-4 mt-4 justify-end">
                        <button onClick={() => router.push('/project-leader/view-attachment')} className="text-white bg-[#7c40ff] rounded-lg text-sm py-2 px-3">
                            Go Back
                        </button>
                        <button onClick={handleDownload} className="text-white bg-[#7c40ff] rounded-lg text-sm py-2 px-3">
                            Download
                        </button>
                    </div>
                </div>

                {/* feedback  */}
                <div className="sm:col-span-12 md:col-span-4 lg:col-span-3">
                    <FeedbackComponent />
                </div>
            </div>
        </main>
    );
}

export default PreviewJsonFilePage;
