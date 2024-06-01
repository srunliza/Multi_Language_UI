import FeedbackComponent from "./FeedbackComponent";

const PreviewStringFilePage = () => {

    const previewStringData = [
       
        {
            'id': 1,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 2,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 3,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 4,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 5,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 6,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 7,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 8,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 9,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 10,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 11,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 12,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 13,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 14,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 15,
            'key' : "Hello",
            'value' : "Hello"
        },
        {
            'id': 16,
            'key' : "Hello",
            'value' : "Hello"
        }
    ]


    return ( 
        <main className="bg-white p-8">
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8">
                    <div className="bg-white shadow-md p-6 rounded-md min-h-[560px]">

                        {/* title */}
                        <h1 className="text-gray-800 text-xl font-semibold mb-3">Preview Page</h1>
                        <hr />

                       
                        <div className='overflow-auto  max-h-[455px] mb-4 no-scrollbar'>
                        {/* data map as string data */}
                           {previewStringData.map((stringData, index) => (
                             <div key={index} className="text-black pl-8 mt-3">
                                <p>"{stringData.key}" : "{stringData.value}",</p>
                             </div>
                           ))}
                           
                        </div>
                    </div>

                    {/* button go back and download */}
                    <div className="flex gap-4 mt-4 justify-end">
                        <a href="" className="text-white bg-[#7c40ff] rounded-lg text-sm py-2 px-3">Go Back</a>
                        <a href="" className="text-white bg-[#7c40ff] rounded-lg text-sm py-2 px-3">Download</a>
                    </div>
                </div>


                {/* feedback  */}
                <div className="col-span-4">
                    <FeedbackComponent/>
                </div>

            </div>          
      
        </main>
     );
}
 
export default PreviewStringFilePage;