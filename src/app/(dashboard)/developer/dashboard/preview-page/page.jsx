"use client";
import React from "react";
import FeedbackComponent from "@/components/FeedbackComponent";
import { useRouter } from 'next/navigation';
import { translateData } from "@/obj/translateData";
import Image from "next/image";

const DeveloperPage = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.push('/developer/dashboard');
    };

    return (
        <div class="px-6 py-4">
            <div class="flex flex-col sticky w-full lg:flex-row gap-6">

                {/* Translation Table Section*/}
                <section class="bg-white p-5 rounded-lg shadow-lg flex-1 ">
                    <h2 class="text-lg font-semibold mb-4">Web Designing</h2>
                    <div className="flex rounded-t-md border-x border-t sticky py-2 px-4 font-semibold  bg-[#daeaff] justify-evenly items-center">
                        <h1>English</h1>
                        <Image src="/assets/icons/switch.svg" width={12} height={12} alt="Switch Icon" />
                        <h1>Korean</h1>
                    </div>
                    <div className="max-h-[65vh] border-b rounded-b-md overflow-y-scroll no-scrollbar">
                        <table class="w-full  border-collapse">
                            <tbody>
                                {translateData.map((e) => (
                                    <tr key={e.id} class="border-t">
                                        <td class="w-1/2 border-l   py-2 px-4">{e.baseLang}</td>
                                        <td class=" py-2 border-l border-r-1  px-4">{e.tagetLang}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div class="flex justify-end gap-2 mt-4">
                        <button
                            className="px-4 py-2 bg-blue-700 text-sm text-white rounded-md hover:bg-blue-800 transition duration-150 ease-in-out"
                            onClick={handleGoBack}
                        >
                            Go Back
                        </button>
                    </div>
                </section>
                {/*End Translation Table Section*/}

                {/* Feedback Section */}
                <section class=" w-full lg:w-1/3">
                    <FeedbackComponent />
                </section>
                {/*End Feedback Section */}
            </div>
        </div>
    );
};

export default DeveloperPage;
