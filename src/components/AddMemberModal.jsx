"use client"
import React, { useState } from 'react';

const AddMemberModal = () => {
  const [isOpen, setIsOpen] = useState(false); // State for modal visibility

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className="flex justify-center ">
      <button
        id="openContactForm"
        className="flex  bg-blue-500 text-md hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        onClick={handleOpenModal}
      >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 4C13.9391 4 12.9217 4.42143 12.1716 5.17157C11.4214 5.92172 11 6.93913 11 8C11 9.06087 11.4214 10.0783 12.1716 10.8284C12.9217 11.5786 13.9391 12 15 12C16.0609 12 17.0783 11.5786 17.8284 10.8284C18.5786 10.0783 19 9.06087 19 8C19 6.93913 18.5786 5.92172 17.8284 5.17157C17.0783 4.42143 16.0609 4 15 4ZM15 5.9C15.2758 5.9 15.5489 5.95432 15.8036 6.05985C16.0584 6.16539 16.2899 6.32007 16.4849 6.51508C16.6799 6.71008 16.8346 6.94158 16.9401 7.19636C17.0457 7.45115 17.1 7.72422 17.1 8C17.1 8.27578 17.0457 8.54885 16.9401 8.80364C16.8346 9.05842 16.6799 9.28992 16.4849 9.48492C16.2899 9.67993 16.0584 9.83461 15.8036 9.94015C15.5489 10.0457 15.2758 10.1 15 10.1C14.7242 10.1 14.4511 10.0457 14.1964 9.94015C13.9416 9.83461 13.7101 9.67993 13.5151 9.48492C13.3201 9.28992 13.1654 9.05842 13.0599 8.80364C12.9543 8.54885 12.9 8.27578 12.9 8C12.9 7.44305 13.1212 6.9089 13.5151 6.51508C13.9089 6.12125 14.443 5.9 15 5.9ZM4 7V10H1V12H4V15H6V12H9V10H6V7H4ZM15 13C12.33 13 7 14.33 7 17V20H23V17C23 14.33 17.67 13 15 13ZM15 14.9C17.97 14.9 21.1 16.36 21.1 17V18.1H8.9V17C8.9 16.36 12 14.9 15 14.9Z" fill="#F9FAFB"/>
</svg>
      <span className='ml-2 '>  Add Member</span> 
      </button>

      {isOpen && (
        <div id="contactFormModal" className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white w-1/2 p-6 rounded shadow-md">
              <div className="flex justify-end">
                <button
                  id="closeContactForm"
                  className="text-gray-700 hover:text-red-500"
                  onClick={handleCloseModal}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-4">Add Member</h2>

              <form action="https://fabform.io/f/{form-id}" method="post">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                {/* ... other form fields */}
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                  Add Member
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMemberModal;
