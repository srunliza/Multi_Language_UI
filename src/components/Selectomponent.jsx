"use client";
import React, { useState, Component } from "react";
import Select from "react-select";

const language = [
  { value: 1, label: "Khmer" },
  { value: 2, label: "English" },
  { value: 3, label: "Korea" },
  { value: 4, label: "Thai" },
  { value: 5, label: "Franch" },
];

function SelectComponent() {
  const [selectedOptions, setSelectedOptions] = useState(null);

  const setHandle = (e) => {
    setSelectedOptions(Array.isArray(e) ? e.map((lan) => lan.label) : []);
  };

  return (
    <div className="w-[321px] py-2">
     
      <div className="mx-auto container text-xs ">
      <label htmlFor="select" className=" mb-2">Translating to (target language)</label>
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          <div className=" w-[321px] text-xs py-1 text-gray-400 ">

          <Select
            styles={{
                    control: (provided, state) => ({
                      ...provided,
                      border: state.isFocused ? '1px solid #ccc' : '1px solid #ddd',
                      borderRadius: '8px',
                      padding: '2px', // Adjust padding as needed
                      backgroundColor:'',
                      height:'37.6px'
                    }),
                  }}
          options={language}
          onChange={setHandle}
          isMulti
          placeholder="Select languages" // Set placeholder text
          />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default SelectComponent;
