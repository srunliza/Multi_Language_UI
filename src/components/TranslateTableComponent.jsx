'use client';
import Image from 'next/image'
import React, { useState } from 'react'


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
        <div className="container mx-auto shadow-sm pt-10">
            <div className="overflow-x-auto">
                <h1 className="p-5 font-bold text-black">Web Design</h1>
                <div className='flex border  p-3 rounded-t-lg justify-evenly items-center'>
                    <h3>English</h3>
                    <Image
                        src={"./icon/switch.svg"}
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
        </div>
    )
}

export default TranslateTableComponent;
