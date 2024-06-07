// pages/index.js
'use client'
import { useState } from 'react';
import { Button, Modal, Checkbox } from '@nextui-org/react';

export default function InputKeywordComponent() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedKeywords, setSelectedKeywords] = useState(Array(12).fill(false)); // Adjust the length based on your keywords array

  const keywords = [
    'Home',
    'About Us',
    'Contact Us',
    'Services',
    'Blog',
    'Careers',
    'Privacy Policy',
    'Terms of Service',
    'FAQ',
    'Support',
    'Testimonials',
    'Portfolio'
  ];

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value !== 'language') {
      setSelectedKeyword(value);
      setOpenModal(true);
    }
  };

  const toggleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedKeywords(Array(keywords.length).fill(newSelectAll));
  };

  const toggleKeywordSelection = (index) => {
    const newSelectedKeywords = [...selectedKeywords];
    newSelectedKeywords[index] = !newSelectedKeywords[index];
    setSelectedKeywords(newSelectedKeywords);
    setSelectAll(newSelectedKeywords.every(Boolean));
  };

  return (
    <>
      <div className="w-full lg:w-[321px] pb-2 mb-2 mt-0">
        <label htmlFor="select" className="text-xs">
          Or choose keyword as a page
        </label>
        <select
          id="select"
          className="block w-full lg:w-[321px] h-[37.6px] text-xs text-gray-500 transition duration-75 border py-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 mt-1 bg-none"
          onChange={handleSelectChange}
        >
          <option value="language">Choose type of keyword</option>
          <option value="dashboard">Dashboard</option>
          <option value="english">Home</option>
          <option value="korea">Authenticate</option>
          <option value="spain">Page</option>
        </select>
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        width="600px"
        css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Modal.Header>
          <span className="text-lg font-medium">List of Keywords</span>
          <div className="flex items-center">
            <Checkbox
              id="select-all"
              checked={selectAll}
              onChange={toggleSelectAll}
              className="mr-2"
            />
            <label htmlFor="select-all" className="text-sm font-medium text-gray-900">
              Select All
            </label>
          </div>
        </Modal.Header>
        <Modal.Body css={{ maxHeight: '96px', overflowY: 'auto' }}>
          {keywords.map((keyword, index) => (
            <div key={index} className="flex items-center p-2 border-b border-gray-200">
              <Checkbox
                id={`keyword-${index}`}
                checked={selectedKeywords[index]}
                onChange={() => toggleKeywordSelection(index)}
                className="mr-2"
              />
              <label htmlFor={`keyword-${index}`} className="text-sm font-medium text-gray-900">
                {keyword}
              </label>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setOpenModal(false)} className="mr-2">
            Close
          </Button>
          <Button auto onClick={() => setOpenModal(false)} className="bg-blue-500">
            Insert
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
