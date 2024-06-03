import FeedbackComponent from "@/components/FeedbackComponent";

const PreviewXmlFilePage = () => {

    const previewXmlData = [
       
        {
            'id': 1,
            'tag' : "<resource>",
            'key' : "<string name='app_name'> Language </string>",
            'value' : "<string name='app_name'> Welcome to cambodia </string>",
            'end_tag' : "</resource>"
        },
        {
            'id': 2,
            'tag' : "<resource>",
            'key' : "<string name='app_name'> Language </string>",
            'value' : "<string name='app_name'> Welcome to cambodia </string>",
            'end_tag' : "</resource>"
        },
        
    ]



    return ( 
        <main className="bg-white p-4 sm:p-8 md:p-12 lg:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 md:gap-12 lg:gap-16">
                <div className="col-span-12 sm:col-span-8 md:col-span-9 lg:col-span-8">
                    <div className="bg-white shadow-md p-4 sm:p-6 md:p-8 lg:p-10 rounded-md min-h-[300px] sm:min-h-[560px] md:min-h-[500px] lg:min-h-[560px]">

                        {/* title */}
                        <h1 className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-5">Preview Page</h1>
                        <hr />
                       
                        <div className="overflow-auto max-h-[200px] sm:max-h-[405px] md:max-h-[450px] lg:max-h-[480px] mb-3 sm:mb-4 md:mb-5 lg:mb-6 no-scrollbar">
                            
                            {/* map data as xml data */}
                            {previewXmlData.map((xmlData, index) => (
                                <div key={index} className="text-black pl-4 sm:pl-8 md:pl-12 lg:pl-16 mt-2 sm:mt-3 md:mt-4 lg:mt-5">
                                    <p>{xmlData.tag}</p>
                                    <p className="pl-10"> {xmlData.key} </p>
                                    <p className="pl-10"> {xmlData.value} </p>
                                    <p>{xmlData.end_tag}</p>
                                </div>
                            ))}
                        </div>
                    </div>
        
                    {/* button download and go back */}
                    <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-3 sm:mt-4 md:mt-5 lg:mt-6 justify-end">
                        <a href="" className="text-white bg-[#7c40ff] rounded-lg text-sm py-1 px-2 sm:py-2 sm:px-3 md:py-3 md:px-4 lg:py-3 lg:px-5">Go Back</a>
                        <a href="" className="text-white bg-[#7c40ff] rounded-lg text-sm py-1 px-2 sm:py-2 sm:px-3 md:py-3 md:px-4 lg:py-3 lg:px-5">Download</a>
                    </div>
                </div>
        
                {/* feedback component */}
                <div className="col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-4 mt-4 sm:mt-0">
                    <FeedbackComponent />
                </div>
            </div>
        </main>
    
    );
}
 
export default PreviewXmlFilePage;