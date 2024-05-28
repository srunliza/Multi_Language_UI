
import FeedbackComponent from './FeedbackComponent';


const PreviewJsonFileComponent = () => {
    return ( 
        <main className="bg-white p-8">
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8">
                    <div className="bg-white shadow-md p-6 rounded-md min-h-[100px]">
                        <h1 className="text-gray-800 text-xl font-semibold mb-3">Preview Page</h1>
                        <hr />
                        <div className='overflow-auto  max-h-[430px] mb-4 no-scrollbar'>
                           
                            <div className="text-black p-14">
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                                <p>"Hello": "Hello",</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-4 justify-end">
                        <a href="" className="text-white bg-[#7c40ff]  rounded-lg py-2 px-3">Go Back</a>
                        <a href="" className="text-white bg-[#7c40ff] rounded-lg py-2 px-3">Download</a>
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
 
export default PreviewJsonFileComponent;