"use client"
import { translateData } from "@/obj/translateData";
import React from "react";
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import { useRouter } from "next/navigation";

const DeveloperPreviewTranslateComponent = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.push('/developer/dashboard');
    };
    return (
        <section class="bg-white p-5 rounded-lg shadow-lg flex-1 ">
            <h1 class="text-lg font-semibold mb-4">Web Designing</h1>
            <div className="flex rounded-t-md border-x border-t sticky py-2 px-4 font-semibold  bg-[#daeaff] justify-evenly items-center">
                <h1>English</h1>
                <KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
                <h1>Korean</h1>
            </div>
            {/* Table Translate */}
            <div className="max-h-[65vh] border-b rounded-b-md overflow-y-scroll no-scrollbar">
                <table class="w-full  border-collapse">
                    <tbody>
                        {translateData.map((e) => (
                            <tr key={e.id} class="border">
                                <td class="w-1/2   py-2 px-4">{e.baseLang}</td>
                                <td class=" py-2 border-l px-4">{e.tagetLang}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Handle Button */}
            <div class="flex justify-end gap-2 mt-4">
                <button
                    className="px-4 py-2 bg-blue-700 text-sm text-white rounded-md hover:bg-blue-800 transition duration-150 ease-in-out"
                    onClick={handleGoBack}
                >
                    Go Back
                </button>
            </div>
        </section>
    );
};

export default DeveloperPreviewTranslateComponent;
