"use client";
import { useState } from "react";
import { Button, Modal, Checkbox } from "flowbite-react";
import KeywordSelect from "./KeywordSelect";

export default function InputKeywordComponent({ staticKeyData, onInsert }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedKeywordStates, setSelectedKeywordStates] = useState([]);

  const handleSelectChange = (keywords) => {
    setSelectedKeywords(keywords);
    setSelectedKeywordStates(Array(keywords.length).fill(false));
    setOpenModal(true);
  };

  const toggleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedKeywordStates(Array(selectedKeywords.length).fill(newSelectAll));
  };

  const toggleKeywordSelection = (index) => {
    const newSelectedKeywordStates = [...selectedKeywordStates];
    newSelectedKeywordStates[index] = !newSelectedKeywordStates[index];
    setSelectedKeywordStates(newSelectedKeywordStates);
    setSelectAll(newSelectedKeywordStates.every(Boolean));
  };

  const handleInsert = () => {
    const selected = selectedKeywords.filter(
      (_, index) => selectedKeywordStates[index]
    );
    onInsert(selected);
    setOpenModal(false);
  };

  return (
    <div>
      <div className="w-full lg:w-[321px] rounded-lg pb-2 mb-2 mt-0">
        <label htmlFor="select" className="text-xs">
          Or Add keywords as a section
        </label>
        <KeywordSelect
          staticKeyData={staticKeyData}
          onSelect={handleSelectChange}
        />
      </div>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="md"
        position="center"
        popup
        className="flex items-center pt-[6rem] justify-center bg-gray-700 bg-opacity-25"
      >
        <div className="flex flex-col bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <span className="text-lg font-medium">List of Keywords</span>
            <div className="flex items-center">
              <Checkbox
                id="select-all"
                checked={selectAll}
                onChange={toggleSelectAll}
                className="mr-2 border-none"
              />
              <label
                htmlFor="select-all"
                className="text-sm font-medium text-gray-900"
              >
                Select All
              </label>
            </div>
          </div>
          <div className="max-h-96 overflow-y-auto no-scrollbar p-4">
            {selectedKeywords.map((keyword, index) => (
              <div
                key={index}
                className="flex items-center p-2 border-b border-gray-200"
              >
                <Checkbox
                  id={`keyword-${index}`}
                  checked={selectedKeywordStates[index]}
                  onChange={() => toggleKeywordSelection(index)}
                  className="mr-2"
                />
                <label
                  htmlFor={`keyword-${index}`}
                  className="text-sm font-medium text-gray-900"
                >
                  {keyword}
                </label>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4 p-4 border-t border-gray-200">
            <Button
              color="gray"
              onClick={() => setOpenModal(false)}
              className="mr-2 border-blue-800 text-blue-800 hover:border-blue-400"
            >
              Close
            </Button>
            <Button onClick={handleInsert} className="bg-blue-800 hover:bg-blue-700">
              Insert
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
