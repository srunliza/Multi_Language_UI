import { translateData } from "@/obj/translateData";
import Image from "next/image";
import React from "react";

const ProjectLeaderPreviewTranslateComponent = () => {
  return (
    <div className="container mx-auto shadow-sm">
      <div className="overflow-x-auto">
        <div className="flex border bg-gray-50  p-3 rounded-t-xl justify-evenly items-center ">
          <h3>English</h3>
          <Image src={"/assets/icons/switch.svg"} width={18} height={18} />
          <h3>Korean</h3>
        </div>
        <div className="overflow-auto h-[450px] border  border-x-0 border-t-0 no-scrollbar">
          <table className="min-w-full ">
            <tbody>
              {translateData.map((e) => (
                <tr key={e.id}>
                  <td className="py-2 px-6 text-[15px] bg-white  border ">
                    {e.baseLang}
                  </td>
                  <td className="py-2 pr-14 px-6 border bg-white">
                    {e.tagetLang}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectLeaderPreviewTranslateComponent;
