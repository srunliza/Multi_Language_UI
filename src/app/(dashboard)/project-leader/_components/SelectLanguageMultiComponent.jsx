"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const SelectLanguageMultiComponent = ({ languageData, onLanguageChange }) => {
  // For receive data from parent map to language data array object
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    const languageArray = languageData.map((el) => ({
      value: el.languageId,
      label: el.language,
    }));
    setLanguages(languageArray);
  }, [languageData]);
  console.log("language in select component: ", languages);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const setHandle = (e) => {
    const selectedLanguages = Array.isArray(e) ? e.map((lan) => lan.value) : [];
    setSelectedOptions(selectedLanguages);
    onLanguageChange(selectedLanguages); // Pass the selected languages to the parent
  };

  console.log("select language array: ", setSelectedOptions);

  return (
    <div className="w-full lg:w-[321px] py-2">
      <div className=" text-xs">
        <label htmlFor="select" className=" block">
          Translating to (target language)
        </label>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[321px] text-xs py-2 ">
            <Select
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  border: state.isFocused ? "1px solid #ccc" : "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "",
                }),
              }}
              options={languages}
              onChange={setHandle}
              name="language"
              required
              isMulti
              placeholder="Select languages" // Set placeholder text
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectLanguageMultiComponent;
