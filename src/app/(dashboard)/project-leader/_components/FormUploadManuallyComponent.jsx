"use client";
import CloseIcon from "@mui/icons-material/Close";
import InputKeywordComponent from "./InputKeywordComponent";
import { useForm } from "react-hook-form";
import SelectLanguageMultiComponent from "./SelectLanguageMultiComponent";
import { uploadAttachmentManuallyAction } from "@/action/attachment-action";
import { useRouter } from "next/navigation";
import Toast from "@/components/ToastComponent";
import { DatePicker } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const FormUploadManuallyComponent = ({
  languageData,
  proId,
  staticKeyData,
}) => {
  const router = useRouter();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const [keyword, setKeyword] = useState("");
  const [hint, setHint] = useState("");
  const [tableData, setTableData] = useState([]);

  const filteredLanguages = languageData.filter((language) =>
    language.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("start", startDate);
  }, [startDate, setValue]);

  useEffect(() => {
    setValue("end", endDate);
  }, [endDate, setValue]);

  useEffect(() => {
    setValue("baseLanguage", selectedLanguage);
  }, [selectedLanguage, setValue]);

  useEffect(() => {
    setValue("targetLanguageId", selectedLanguages);
  }, [selectedLanguages, setValue]);

  const handleSelect = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    setDropdownOpen(false);
    console.log("select language: ", language);
  };

  const handleClose = () => {
    setDropdownOpen(false);
    setSearchTerm("");
  };

  const handleLanguageChange = (selectedOptions) => {
    setSelectedLanguages(selectedOptions);
  };

  const handleDelete = (keyToDelete) => {
    const updatedData = tableData.filter((row) => row.key !== keyToDelete);
    setTableData(updatedData);
  };

  const handleAddKey = () => {
    setTableData([...tableData, { key: keyword, hint: hint }]);
    setHint("");
    setKeyword("");
  };

  const handleReset = () => {
    setTableData([]);
    setHint("");
    setKeyword("");
    setStartDate(null);
    setEndDate(null);
  };

  const handleSubmitUploadFile = async (data) => {
    const languages = data.targetLanguageId;
    console.log("Language IDs: ", languages);
    console.log("Submission Data: ", data);
    console.log("Key and Hint Data: ", tableData);

    if (new Date(data.start) >= new Date(data.end)) {
      setToastMessage("Start date must be before end date");
      setToastType("error");
      setShowToast(true);
      return;
    }

    if (tableData.length === 0) {
      setToastMessage("Table data must have at least one keyword and hint");
      setToastType("error");
      setShowToast(true);
      return;
    }

    const res = await uploadAttachmentManuallyAction({
      baseLanguage: data.baseLanguage,
      targetLanguageId: data.targetLanguageId,
      projectId: proId,
      keyAndHint: tableData,
      startDate: `${data.start}T00:00:00Z`,
      expireDate: `${data.end}T00:00:00Z`,
    });

    if (res?.status === "ACCEPTED" || res?.status === 202) {
      setToastMessage("Created attachment success");
      setToastType("success");
      setShowToast(true);
      router.push(`/project-leader/dashboard/view-attachment/${proId}`);
    } else {
      setToastMessage("Failed to create attachment");
      setToastType("error");
      setShowToast(true);
    }
  };

  const handleSelectKeywords = (keywords) => {
    setTableData((prevData) => [
      ...prevData,
      ...keywords.map((key) => ({ key, hint: "" })),
    ]);
  };

  return (
    <div>
      <Toast
        message={toastMessage}
        type={toastType}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
      <form onSubmit={handleSubmit(handleSubmitUploadFile)}>
        <input
          type="hidden"
          {...register("baseLanguage")}
          value={selectedLanguage}
        />
        <input
          type="hidden"
          {...register("targetLanguageId")}
          value={selectedLanguages}
        />
        <input type="hidden" {...register("start")} value={startDate} />
        <input type="hidden" {...register("end")} value={endDate} />

        {/* Section Select Base Language */}
        <div className="w-full lg:w-[321px] py-4 text-xs">
          <label htmlFor="select" className="text-xs">
            Translating from (base, source language)
          </label>
          <div className="relative inline-block w-64 mt-2">
            <div
              className="relative flex w-[321px] h-[37.6px] items-center justify-between border border-gray-300 rounded-lg px-3 py-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              role="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="listbox"
            >
              <span>{selectedLanguage || "Select a language"}</span>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            {dropdownOpen && (
              <div className="absolute z-10 w-[321px] mt-1 bg-white border overflow-hidden border-gray-300 rounded-lg shadow-lg">
                <div className="flex justify-between items-center px-1 border-b border-gray-200">
                  <input
                    type="text"
                    className="text-xs focus:outline-none focus:border-none h-8 px-2 focus:ring-0 border-none"
                    placeholder="type here to search ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button onClick={handleClose} className="ml-2 text-gray-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="gray"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <select
                  className="w-full max-h-40 overflow-auto no-scrollbar cursor-pointer"
                  id="language"
                  size={filteredLanguages.length}
                  onChange={handleSelect}
                  onBlur={handleClose}
                  required
                >
                  {filteredLanguages.map((el) => (
                    <option
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      key={el.languageId}
                      value={el.language}
                    >
                      {el.language}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
        {/* ./ End Section Select Base Language */}

        {/* Section Select Target Language */}
        <SelectLanguageMultiComponent
          languageData={languageData}
          onLanguageChange={handleLanguageChange}
        />
        {/* ./ End Section Select Target Language */}

        {/* Section Select Start Date and End Date */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-xs py-3">
          <div className="flex flex-col w-full lg:w-auto">
            <label htmlFor="start" className="text-xs mb-1">
              Start Date
            </label>
            <div className="border border-gray-300 text-gray-900 h-[37.6px] overflow-hidden rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[13.5rem] bg-white">
              <DatePicker
                id="start-date"
                className="max-w-[284px]"
                isRequired
                value={startDate}
                onChange={setStartDate}
              />
            </div>
            {errors.start && (
              <span className="text-red-600 text-xs">
                {errors.start.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
            <label htmlFor="end" className="text-xs mb-1">
              End Date
            </label>
            <div className="border border-gray-300 text-gray-900 h-[37.6px] overflow-hidden rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[13.5rem] bg-white">
              <DatePicker
                id="end-date"
                className="max-w-[284px]"
                isRequired
                value={endDate}
                onChange={setEndDate}
              />
            </div>
            {errors.end && (
              <span className="text-red-600 text-xs">{errors.end.message}</span>
            )}
          </div>
        </div>
        {/* ./ End Section Select Start Date and End Date */}

        {/* Section Add Keys and Hints */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-xs py-3">
          <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
            <label htmlFor="key" className="text-xs mb-1">
              Keyword
            </label>
            <input
              type="text"
              id="key"
              placeholder="Input your keyword"
              name="key"
              className="w-full lg:w-[220px] h-[37.6px] px-3 text-xs py-2 border border-gray-300 rounded-lg"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
            <label htmlFor="hint" className="text-xs mb-1">
              Add Hint
            </label>
            <input
              type="text"
              id="hint"
              placeholder="Hints for some keywords"
              name="hint"
              className="w-full lg:w-[220px] h-[37.6px] px-3 text-xs py-2 border border-gray-300 rounded-lg"
              value={hint}
              onChange={(e) => setHint(e.target.value)}
            />
          </div>
          <div className="flex lg:mt-5 mt-4 h-[35px] w-full lg:w-auto">
            <input
              className={`px-3 py-2 text-center border border-blue-600 rounded-lg focus:outline-none focus:ring cursor-pointer ${
                keyword.trim() === ""
                  ? "bg-gray-100 text-gray-500 border-gray-300"
                  : "bg-blue-800 text-white hover:bg-blue-700"
              }`}
              type="button"
              value={"Add key"}
              disabled={keyword.trim() === ""}
              onClick={handleAddKey}
            />
          </div>
        </div>
        {/* ./ End Section Add Keys and Hints */}

        {/* Section Static Keys and Hints */}
        <section>
          <InputKeywordComponent
            staticKeyData={staticKeyData}
            onInsert={handleSelectKeywords}
          />
        </section>
        {/* ./ End Section Static Keys and Hints */}

        {/* Section Show Table Keys and Hints */}
        <div className="border w-full lg:w-[600px] px-3 py-3 rounded-lg border-gray-300">
          <div className="rounded-md w-full lg:w-[570px] overflow-hidden overflow-y-auto max-h-56 h-52 no-scrollbar">
            <table className="w-full table-fixed text-md border-gray-200 rounded-r-lg">
              <thead>
                <tr className="text-center text-sm bg-[#daeaff] sticky top-0">
                  <th className="w-1/2 p-2 text-left text-gray-900 font-medium">
                    Keyword
                  </th>
                  <th className="w-1/2 py-2 px-1 text-gray-900 font-medium">
                    Hint
                  </th>
                </tr>
              </thead>
              <tbody className="bg-none text-xs">
                {tableData.map((row) => (
                  <tr
                    key={row.key}
                    className="border-b border-gray-200 text-gray-700 truncate"
                  >
                    <td className="pl-2 py-1.5">{row.key}</td>
                    <td className="flex py-1.5 h-full justify-between items-center">
                      {row.hint}
                      <CloseIcon
                        className="float-end w-4 text-gray-700 cursor-pointer"
                        onClick={() => handleDelete(row.key)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* ./ End Section Show Table Keys and Hints */}

        {/* Section Handle Button Reset and Submit */}
        <div className="flex pt-6">
          <input
            className="px-4 py-2 border border-blue-800 text-gray-800 rounded-lg hover:border-blue-400 transition duration-150 ease-in-out mr-2 cursor-pointer"
            type="reset"
            value={"Reset"}
            onClick={handleReset}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out cursor-pointer"
          >
            Submit
          </button>
        </div>
        {/* ./ End Section Handle Button Reset and Submit */}
      </form>
    </div>
  );
};

export default FormUploadManuallyComponent;
