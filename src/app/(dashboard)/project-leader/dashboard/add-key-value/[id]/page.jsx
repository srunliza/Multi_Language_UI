// "use client";
// import AddMemberModal from "@/components/AddMemberModal";
// import React, { useState } from "react";
// import NavbarProjectLeaderComponent from "../../../_components/NavbarProjectLeaderComponent";
// import LanguageSelect from "@/components/LanguageSelect";
// import SelectComponent from "@/components/SelectComponent";
// import InputKeywordComponent from "../../../_components/InputKeywordComponent";
// import CloseIcon from "@mui/icons-material/Close";
// import MemberProjectLeader from "@/components/MemberProjectLeader";
// import { useForm } from "react-hook-form";
// import { uploadAttachmentManuallyAction } from "@/action/attachment-action";
// import toast from "react-hot-toast";

// const languages = [
//   "English",
//   "Khmer",
//   "French",
//   "Spanish",
//   "German",
//   "Chinese",
//   "Japanese",
//   "Korean",
//   "Russian",
//   "Italian",
// ];

// const AddKeyValuePage = ({ params: { id } }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const {
//     register: registerKeyHint,
//     handleSubmit: handleSubmitKeyHint,
//     formState: { errors: errorsKeyHint },
//   } = useForm();

//   const [tableData, setTableData] = useState([
//     // { key: "Home", hint: "relating to the start of page" },
//     // { key: "About", hint: "information about something or someone" },
//     // { key: "Contact", hint: "a way of getting in touch with someone" },
//     // { key: "More", hint: "a way of getting in touch with someone" },
//     // { key: "Detail", hint: "information about something or someone" },
//     // { key: "Contact", hint: "a way of getting in touch with someone" },
//     // { key: "More", hint: "a way of getting in touch with someone" },
//     // { key: "About", hint: "information about something or someone" },
//     // { key: "Contact", hint: "a way of getting in touch with someone" },
//     // { key: "More", hint: "a way of getting in touch with someone" },
//   ]);

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedLanguage, setSelectedLanguage] = useState("Khmer");
//   const filteredLanguages = languages.filter((language) =>
//     language.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const [keyword, setKeyword] = useState("");
//   const [hint, setHint] = useState("");

//   const handleDelete = (keyToDelete) => {
//     const updatedData = tableData.filter((row) => row.key !== keyToDelete);
//     setTableData(updatedData);
//   };

//   const handleSubmitUploadFile = async (data) => {
//     console.log("data: ", data);
//     console.log("keyand hint: ", tableData);
//     const res = await uploadAttachmentManuallyAction({
//       baseLanguage: "Statistic",
//       targetLanguageId: ["522ac755-fe82-4a24-a80f-56e645e051bb"],
//       projectId: id,
//       keyAndHint: tableData,
//       startDate: `${data?.start}T09:28:36.228Z`,
//       expireDate: `${data?.end}T09:28:36.228Z`,
//     });

//     if (res?.status === 202) {
//       toast.success("Created attachment success");

//       //router.push('/view-attachment')
//       window.location.href = "../view-attachment";
//     } else {
//       toast.error("Failed to create attachment");
//     }

//     console.log("res: ", res);
//   };

//   const handleSelect = (language) => {
//     setSelectedLanguage(language);
//     setDropdownOpen(false);
//   };

//   const handleReset = () => {
//     setTableData([]);
//     setHint("");
//     setKeyword("");
//   };

//   const handleAddKey = () => {
//     setTableData([...tableData, { key: keyword, hint: hint }]);
//     setHint("");
//     setKeyword("");
//   };

//   return (
//     <div className="w-full px-6 py-4 h-screen  flex flex-col">
//       <div className="flex justify-between items-center mb-3">
//         <h2 className="text-lg font-semibold">Project Name</h2>
//         <AddMemberModal />
//       </div>
//       <div className="flex flex-wrap justify-between gap-4">
//         <div className="flex flex-col bg-white shadow-md w-[70%] rounded-xl">
//           <NavbarProjectLeaderComponent />
//           {/* Container */}
//           <div className="flex-grow overflow-y-auto no-scrollbar px-8 py-4">
//             <form onSubmit={handleSubmit(handleSubmitUploadFile)}>
//               <div className="w-full lg:w-[321px] py-2 text-xs">
//                 <label htmlFor="select" className="text-xs">
//                   Translating from (base, source language)
//                 </label>
//                 <LanguageSelect
//                   setDropdownOpen={setDropdownOpen}
//                   dropdownOpen={dropdownOpen}
//                   searchTerm={searchTerm}
//                   setSearchTerm={setSearchTerm}
//                   selectedLanguage={selectedLanguage}
//                   setSelectedLanguage={setSelectedLanguage}
//                   filteredLanguages={filteredLanguages}
//                   handleSelect={handleSelect}
//                 />
//               </div>
//               <SelectComponent />
//               <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-xs py-3">
//                 <div className="flex flex-col w-full lg:w-auto">
//                   <label htmlFor="start" className="text-xs mb-1">
//                     Start Date
//                   </label>
//                   <input
//                     {...register("start")}
//                     type="date"
//                     id="start"
//                     name="start"
//                     className="w-full lg:w-[220px] h-[37.6px] px-3 py-2 border text-gray-600 text-xs border-gray-300 rounded-lg"
//                   />
//                 </div>
//                 <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
//                   <label htmlFor="end" className="text-xs mb-1">
//                     End Date
//                   </label>
//                   <input
//                     {...register("end")}
//                     type="date"
//                     id="end"
//                     name="end"
//                     className="w-full lg:w-[220px] h-[37.6px] px-3 py-2 border text-gray-600 border-gray-300 text-xs rounded-lg"
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-xs py-3">
//                 <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
//                   <label htmlFor="key" className="text-xs mb-1">
//                     Keyword
//                   </label>
//                   <input
//                     type="text"
//                     id="key"
//                     placeholder="Input your keyword"
//                     name="keyName"
//                     className="w-full lg:w-[220px] h-[37.6px] px-3 text-xs py-2 border border-gray-300 rounded-lg"
//                     value={keyword}
//                     onChange={(e) => setKeyword(e.target.value)}
//                   />
//                 </div>

//                 <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
//                   <label htmlFor="hint" className="text-xs mb-1">
//                     Add Hint
//                   </label>
//                   <input
//                     type="text"
//                     id="hint"
//                     placeholder="Hints for some keywords"
//                     name="hint"
//                     className="w-full lg:w-[220px] h-[37.6px] px-3 text-xs py-2 border border-gray-300 rounded-lg"
//                     value={hint}
//                     onChange={(e) => setHint(e.target.value)}
//                   />
//                 </div>
//                 <div className="flex lg:mt-5 mt-4 h-[35px] w-full lg:w-auto">
//                   <input
//                     className={`px-3 py-2 text-center  border border-blue-600 rounded-lg focus:outline-none focus:ring cursor-pointer ${
//                       keyword.trim() === ""
//                         ? "bg-gray-100 text-gray-500 border-gray-300"
//                         : "bg-blue-600 text-white hover:bg-blue-700"
//                     }`}
//                     type="submit"
//                     value={"Add key"}
//                     disabled={keyword.trim() === ""}
//                     onClick={handleAddKey}
//                   />
//                 </div>
//               </div>

//               <InputKeywordComponent />
//               {/* table */}
//               <div className="border w-full lg:w-[600px] px-3 py-3 rounded-lg border-gray-300">
//                 <div className="rounded-lg w-full lg:w-[570px] overflow-hidden overflow-y-auto h-32 no-scrollbar">
//                   <table className="w-full table-fixed text-md border-gray-200 rounded-r-lg">
//                     <thead>
//                       <tr className="text-center text-md bg-gray-100 rounded-r-lg sticky top-0">
//                         <th className="w-1/2 py-2 px-1 text-left text-gray-600 font-medium">
//                           Keyword
//                         </th>
//                         <th className="w-1/2 py-2 px-1 text-gray-600 font-medium">
//                           Hint
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-none text-xs">
//                       {tableData.map((row) => (
//                         <tr
//                           key={row.key}
//                           className="py-5 px-6 border-b border-gray-200 text-gray-700 truncate"
//                         >
//                           <td className="py-1">{row.key}</td>
//                           <td>
//                             {row.hint}
//                             <CloseIcon
//                               className="float-end w-3 text-gray-500 h-3 cursor-pointer"
//                               onClick={() => handleDelete(row.key)}
//                             />
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <div className="flex pt-6">
//                 <input
//                   className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-150 ease-in-out mr-2 cursor-pointer"
//                   type="reset"
//                   value={"Reset"}
//                   onClick={handleReset}
//                 />
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-700 text-white rounded-lg  hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out cursor-pointer"
//                 >
//                   {" "}
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="w-full xl:w-[24%]">
//           <MemberProjectLeader />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddKeyValuePage;
