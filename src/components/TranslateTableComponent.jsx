'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import FeedbackComponent from './FeedbackComponent';


const TranslateTableComponent = () => {
    const translateData = [
        {
            id: 1,
            baseLang: "Home",
            tagetLang: "집"
        },
        {
            id: 2,
            baseLang: "Home",
            tagetLang: "집"
        },
        {
            id: 3,
            baseLang: "Home",
            tagetLang: "집"
        },
        {
            id: 4,
            baseLang: "Home",
            tagetLang: "집"
        },
        {
            id: 5,
            baseLang: "Home",
            tagetLang: "집"
        },
        {
            id: 6,
            baseLang: "Home",
            tagetLang: "집"
        },
        {
            id: 7,
            baseLang: "Home",
            tagetLang: "집"
        },
        {
            id: 8,
            baseLang: "Home",
            tagetLang: "집"
        },
        {
            id: 9,
            baseLang: "Home",
            tagetLang: "집"
        },
        {
            id: 10,
            baseLang: "Home",
            tagetLang: "집"
        },
        {
            id: 11,
            baseLang: "Home",
            tagetLang: "집"
        },
        {
            id: 12,
            baseLang: "Home",
            tagetLang: "집"
        },
        {
            id: 13,
            baseLang: "Home",
            tagetLang: "집"
        },
        {
            id: 14,
            baseLang: "Home",
            tagetLang: "집"
        }
    ]

    const [translateDatas, setTranslateDatas] = useState(translateData);
    const handleInputChange = (id, newValue) => {
        const updatedData = translateData.map(item =>
            item.id === id ? { ...item, tagetLang: newValue } : item
        );
        setTranslateDatas(updatedData);
    };

    return (
        <main className="bg-white p-8">
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8">
                    <div className="overflow-x-auto">
                        <h1 className="p-5 font-bold text-black">Web Design</h1>
                        <div className='flex border  p-3 rounded-t-lg justify-evenly items-center'>
                            <h3>English</h3>
                            <Image
                                src={"./assets/icons/switch.svg"}
                                width={18}
                                height={18}

                            />
                            <h3>Korean</h3>

                        </div>
                        <div className='overflow-auto h-[450px] border  border-x-0 border-t-0 no-scrollbar'>
                            <table className="min-w-full ">
                                <tbody >
                                    {translateData.map((e) => (
                                        <tr key={e.id} className="grid grid-cols-2">
                                            <td className="w-full p-2 border border-gray-300 rounded ">{e.baseLang}</td>
                                            <td >
                                                <input
                                                    type="text"
                                                    value={e.tagetLang}
                                                    onChange={(event) => handleInputChange(e.id, event.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded"
                                                />
                                            </td>

                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* button go back and download */}
                    <div className="flex gap-4 mt-4 justify-end">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btntext-white bg-blue-700 text-center rounded-lg text-sm py-2 px-3 w-[100px] text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Save</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <p className="py-4 text-xl text-center">Do you want to save this translation?</p>
                                <div className="modal-action ">
                                    <form method="dialog " className="flex m-auto gap-5">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-outline btn-primary w-[100px]">No</button>
                                        <button className="btn btn-active btn-primary w-[100px]">Yes</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        <button className="btntext-white bg-green-600 text-center rounded-lg text-sm py-2 px-3 w-[100px] text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Submit</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <p className="py-4 text-xl text-center">Do you want to submit this translation?</p>
                                <div className="modal-action ">
                                    <form method="dialog " className="flex m-auto gap-5">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-outline btn-primary w-[100px]">No</button>
                                        <button className="btn btn-active btn-primary w-[100px]">Yes</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>


                {/* feedback  */}
                <div className="col-span-4 mt-[52px]">
                    <FeedbackComponent />
                </div>

            </div>

        </main>



    )
}

export default TranslateTableComponent;
