// "use client";
// import React, { useState } from "react";

// const PopUpCreateProjectComponent = () => {
//   const [isModalVisible, setModalVisible] = useState(true);
//   const [projectName, setProjectName] = useState('');

//   const handleEdit = () => {
//     // Add edit functionality here
//     console.log('Edit clicked, project name:', projectName);
//     setModalVisible(false);
//   };

//   const handleClose = () => {
//     // Add close functionality here
//     console.log('Close clicked');
//     setModalVisible(false);
//   };

//   return (
//     isModalVisible && (
//       <div className="fixed z-10 inset-0 overflow-y-auto">
//         <div className="flex items-center justify-center min-h-screen px-4 pt-8 pb-20 text-center sm:block sm:p-0">
//           <div className="fixed inset-0 transition-opacity">
//             <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//           </div>
//           <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
//           <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
//             <div className="flex justify-end -mt-3 -mr-3">
//               <button
//                 type="button"
//                 className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
//                 onClick={handleClose}
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//             <form className="w-full -mt-5">
//               <h2 className="text-lg leading-6 font-medium text-color-text-black">
//                 Create Project
//               </h2>
//               <input
//                 name="projectName"
//                 type="text"
//                 required
//                 className="block w-full rounded-lg mt-5 border text-color-text-black-900 sm:text-sm focus:ring-blue-600 border-blue-500 p-2.5 dark:placeholder-color-text-grey dark:text-white dark:focus:text-primary-color mb-2"
//                 placeholder="Project name"
//                 value={projectName}
//                 onChange={(e) => setProjectName(e.target.value)}
//               />
          
//             <div className="sm:mt-4 sm:flex sm:flex-row-reverse">
//               <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
//                 <button
//                   type="button"
//                   className="inline-flex justify-center w-full sm:w-auto rounded-md border border-transparent px-4 py-2 bg-color-blue-btn text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
//                   onClick={handleEdit}
//                 >
//                   Edit
//                 </button>
//               </span>
//               <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
//                 <button
//                   type="button"
//                   className="inline-flex justify-center w-full sm:w-auto rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
//                   onClick={handleClose}
//                 >
//                   No
//                 </button>
//               </span>
//             </div> 
//              </form>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default PopUpCreateProjectComponent;
