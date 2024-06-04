import FeedbackComponent from "@/components/FeedbackComponent";

const PreviewXmlFilePage = () => {

    const previewXmlData = [
       
        {
            'id': 1,
            'tag' : "<resource>",
            'key' : `<string name="app_name"> Language </string>`,
            'value' : `<string name="app_name"> Welcome to cambodia </string>`,
            'end_tag' : "</resource>"
        },
        {
            'id': 2,
            'tag' : "<resource>",
            'key' : `<string name="app_name"> Language </string>`,
            'value' : `<string name="app_name"> Welcome to cambodia </string>`,
            'end_tag' : "</resource>"
        },
        
    ]



    return ( 
        <main className="bg-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="sm:col-span-12 md:col-span-8 lg:col-span-9">
                    <div className="bg-white shadow-md p-6 rounded-lg min-h-[560px] border">

                        {/* title */}
                        <h1 className="text-gray-800 text-xl font-semibold mb-3">Preview Page</h1>
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
                    <div className="flex gap-4 mt-4 justify-end">
                        <a href="" className="text-white bg-[#7c40ff] rounded-lg text-sm py-2 px-3">Go Back</a>
                        <a href="" className="text-white bg-[#7c40ff] rounded-lg text-sm py-2 px-3">Download</a>
                    </div>
                </div>
        
                {/* feedback component */}
                <div className="sm:col-span-12 md:col-span-4 lg:col-span-3">
                    <FeedbackComponent />
                </div>
            </div>
        </main>
    
    );
}
 
export default PreviewXmlFilePage;