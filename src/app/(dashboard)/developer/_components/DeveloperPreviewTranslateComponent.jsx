import Image from 'next/image'
import React from 'react'


const DeveloperPreviewTranslateComponent = () => {
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

    return (
        <div className="container mx-auto shadow-sm">
            <div className="overflow-x-auto">
                <div className='flex border  p-3 rounded-t-lg justify-evenly items-center '>
                    <h3>English</h3>
                    <Image
                        src={"../assets/icons/switch.svg"}
                        width={18}
                        height={18}
                    />
                    <h3>Korean</h3>

                </div>
                <div className='overflow-auto h-[450px] border  border-x-0 border-t-0 no-scrollbar'>
                    <table className="min-w-full ">
                        <tbody >
                            {translateData.map((e) => (
                                <tr key={e.id}>
                                    <td className="py-2 px-6 text-[15px]  border ">{e.baseLang}</td>
                                    <td className="py-2 pr-14 px-6 border">{e.tagetLang}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DeveloperPreviewTranslateComponent.jsx