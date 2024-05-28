import CardFeedbackComponent from "./CardFeedbackComponent";

const PreviewStringComponent = () => {
    return (
        <div className="grid grid-cols-2  flex-wrap">
            {/* preview page */}
            <div className="p-5">
                <form action="" className="shadow-md border rounded-lg h-[655px] bg-white">
                    <div >
                        <h1 className="p-5 font-bold ">Preview Page</h1>
                        <hr className="w-[650px] ml-5" />
                    </div>
                    <div className="flex justify-center mt-10">
                        <p>
                            <p></p>
                            ''Hello World'',<br />
                            ''Hello World'',<br />
                            ''Hello World'' <br />
                        </p>
                    </div>
                </form>
                <div className="flex gap-5 mt-5 float-right">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 dark:bg-teal-600 dark:text-white dark:hover:bg-white  w-[100px] ">Go Back</button>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 dark:bg-teal-600 dark:text-white dark:hover:bg-white  w-[100px] ">Download</button>
                </div>

            </div>
            {/* feedback */}
            <div className="p-5">
                <CardFeedbackComponent/>
            </div>

        </div>

    )
}
export default PreviewStringComponent;