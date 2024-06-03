import FeedbackComponent from '../../../components/FeedbackComponent';


const PreviewJsonFilePage = () => {

    const previewJsonData = [
       
        {
            'id': 1,
            'curly_brace': '{',

            'key' : "Hello",
            'value' : "សួស្តី"
        },
        {
            'id': 2,
            'key' : "Hello",
            'value' : "សួស្តី"
        },
        {
            'id': 3,
            'key' : "Hello",
            'value' : "សួស្តី"
        },
        {
            'id': 4,
            'key' : "Hello",
            'value' : "សួស្តី"
        },
        {
            'id': 5,
            'key' : "Hello",
            'value' : "សួស្តី"
        },
        {
            'id': 6,
            'key' : "Hello",
            'value' : "សួស្តី"
        },
        {
            'id': 7,
            'key' : "Hello",
            'value' : "សួស្តី"
        },
        {
            'id': 8,
            'key' : "Hello",
            'value' : "សួស្តី"
        },
        {
            'id': 9,
            'key' : "Hello",
            'value' : "សួស្តី"
        },
        {
            'id': 10,
            'key' : "Hello",
            'value' : "សួស្តី"
        },
        {
            'id': 11,
            'key' : "Hello",
            'value' : "សួស្តី"
        },
        {
            'id': 12,
            'key' : "Hello",
            'value' : "សួស្តី"
        },
        {
            'id': 13,
            'key' : "Hello",
            'value' : "សួស្តី",
            
            'end_curly_brace': '}',
        },
    
       
    ]


    return ( 
        <main className="bg-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8">
                    <div className="bg-white shadow-md p-6 rounded-md min-h-[560px]">

                        {/* title */}
                        <h1 className="text-gray-800 text-xl font-semibold mb-3">Preview Page</h1>
                        <hr />
                        <div className='overflow-auto max-h-[440px] mt-4 mb-4 no-scrollbar'>

                            {/* data map as json data */}
                            {previewJsonData.map((jsonData, index) => (
                                <div key={index} className="text-black pl-8 mt-4">
                                    <p className='text-gray-800 font-consolas'>{jsonData.curly_brace}</p>
                                    <p className='ml-4 font-consolas text-gray-800'>"{jsonData.key}" : "{jsonData.value}",</p>
                                    <p className='font-consolas text-gray-800'>{jsonData.end_curly_brace}</p>
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
                <div className="md:col-span-4">
                    {/* <FeedbackComponent/> */}
                    <FeedbackComponent/>
                </div> 
            </div>
      
        </main>
    );
}
 
export default PreviewJsonFilePage;