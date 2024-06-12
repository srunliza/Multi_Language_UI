// components/MemberImages.js

import Image from "next/image";
import React from "react";

const MemberImage = ({ image, onClick }) => (
  <button
    onClick={onClick}
    className="text-gray-600 text-right ml-auto self-end grow"
  >
    <div className="flex -space-x-3">
      <Image
        src={`/assets/images/${image}`}
        alt="Member"
        width={32}
        height={32}
        className="w-8 h-8 rounded-full border-2 border-white"
      />
      <Image
        src={`/assets/images/${image}`}
        alt="Member"
        width={32}
        height={32}
        className="w-8 h-8 rounded-full border-2 border-white"
      />
      <Image
        src={`/assets/images/${image}`}
        alt="Member"
        width={32}
        height={32}
        className="w-8 h-8 rounded-full border-2 border-white"
      />
      <Image
        src={`/assets/images/${image}`}
        alt="Member"
        width={32}
        height={32}
        className="w-8 h-8 rounded-full border-2 border-white"
      />
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-sm border-2 border-white">
        +2
      </div>
    </div>
  </button>
);

export default MemberImage;
