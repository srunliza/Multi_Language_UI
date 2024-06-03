import React from "react";

const FileList = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 my-8">
      <ul className="space-y-4">
        <li className="text-purple-500 text-lg">XML File</li>
        <li className="text-red-500 text-lg">Json File</li>
        <li className="text-yellow-500 text-lg">Strings File</li>
        <li className="text-purple-500 text-lg">Excel File</li>
      </ul>
    </div>
  );
};

export default FileList;
