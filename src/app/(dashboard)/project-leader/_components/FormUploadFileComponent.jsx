"use client";
import { useState } from "react";
import SelectLanguageMultiComponent from "./SelectLanguageMultiComponent";
import { handlerFileUploadAction } from "@/action/attachment-action";
import CloseIcon from "@mui/icons-material/Close";
import Toast from "@/components/ToastComponent";
import { useRouter } from "next/navigation";

const FormUploadFileComponent = ({ languageData, proId }) => {
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [hint, setHint] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  // Toast state management
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
    console.log("file upload: ", event);
  };

  const filteredLanguages = languageData.filter((language) =>
    language.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const handleDelete = (keyToDelete) => {
    const updatedData = tableData.filter((row) => row.key !== keyToDelete);
    setTableData(updatedData);
  };

  const handleAddKeyword = (event) => {
    event.preventDefault();
    if (keyword.trim() !== "") {
      setTableData([...tableData, { key: keyword, hint: hint }]);
      setKeyword("");
      setHint("");
    }
  };

  const handleReset = () => {
    setTableData([]);
    setKeyword("");
    setHint("");
  };

  // For get language from child component
  const handleLanguageChange = (selectedOptions) => {
    setSelectedLanguages(selectedOptions);
  };

  const showSuccessToast = (message) => {
    setToastMessage(message);
    setToastType("success");
    setShowToast(true);
  };

  const showErrorToast = (message) => {
    setToastMessage(message);
    setToastType("error");
    setShowToast(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const response = await handlerFileUploadAction(formData);
      if (response.status === "ACCEPTED") {
        showSuccessToast(response.message);
        router.push(`/project-leader/dashboard/view-attachment/${proId}`);
      } else {
        showErrorToast("Failed to create attachment");
      }
    } catch (error) {
      showErrorToast("An error occurred during file upload");
    }
  };

  return (
    <div>
      <Toast
        message={toastMessage}
        type={toastType}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
      <form onSubmit={handleSubmit} method="post">
        <input type="hidden" name="proId" value={proId} />
        <input type="hidden" name="baseLanguage" value={selectedLanguage} />
        <input
          type="hidden"
          name="keyAndHint"
          value={JSON.stringify(tableData)}
        />

        {/* Section File Upload */}
        <p className="text-color-text-black mb-3">Upload Your Files</p>
        <div className="flex items-center mb-5">
          <div className="border border-dashed border-gray-300 bg-gray-50 p-2 rounded-xl shadow-md w-[100px] h-24 flex-shrink-0">
            <label
              htmlFor="upload"
              className="flex flex-col items-center gap-2 cursor-pointer pt-1"
            >
              <svg
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 17V8.85L10.4 11.45L9 10L14 5L19 10L17.6 11.45L15 8.85V17H13ZM8 21C7.45 21 6.97933 20.8043 6.588 20.413C6.19667 20.0217 6.00067 19.5507 6 19V16H8V19H20V16H22V19C22 19.55 21.8043 20.021 21.413 20.413C21.0217 20.805 20.5507 21.0007 20 21H8Z"
                  fill="black"
                />
              </svg>
              <span className="text-gray-600 text-xs text-center">
                Upload your files here
              </span>
            </label>
            <input
              id="upload"
              type="file"
              className="hidden"
              accept=".xlsx"
              name="file"
              onChange={handleFileChange}
              required
            />
          </div>
          {file && (
            <div className="ml-4 text-left">
              <p className="text-sm text-gray-700">File Name: {file.name}</p>
              <p className="text-sm text-gray-700">
                File Size: {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
          )}
        </div>
        <div className="w-full border-b border-gray-300 mb-4"></div>
        {/* End Section File Upload */}

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
                  name="baseLanguage"
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
        <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-gray-500 text-xs py-2">
          <div className="flex flex-col w-full lg:w-auto">
            <label htmlFor="start" className="text-xs text-gray-600 mb-2">
              Start Date
            </label>
            <input
              type="date"
              id="start"
              name="startDate"
              className="w-full lg:w-[220px] h-[37.6px] px-3 py-2 border text-xs border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
            <label htmlFor="end" className="text-xs text-gray-600 mb-2">
              End Date
            </label>
            <input
              type="date"
              id="end"
              name="expireDate"
              className="w-full lg:w-[220px] h-[37.6px] px-3 py-2 border border-gray-300 text-xs rounded-lg"
              required
            />
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
            <button
              className={`px-3 py-2 text-center border border-blue-600 rounded-lg focus:outline-none focus:ring cursor-pointer ${
                keyword.trim() === ""
                  ? "bg-gray-100 text-gray-500 border-gray-300"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              type="button"
              onClick={handleAddKeyword}
              disabled={keyword.trim() === ""}
            >
              Add key
            </button>
          </div>
        </div>
        {/* ./ End Section Add Keys and Hints */}

        {/* Section Show  Table Keys and Hints */}
        <div className="border w-full lg:w-[600px] px-3 py-3 rounded-lg border-gray-300">
          <div className="rounded-md w-full lg:w-[570px] overflow-hidden overflow-y-auto max-h-56 h-52 no-scrollbar">
            <table className="w-full table-fixed text-md border-gray-200 rounded-r-lg">
              <thead>
                <tr className="text-center text-sm  bg-[#daeaff]  sticky top-0">
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
                    className=" border-b  border-gray-200 text-gray-700 truncate"
                  >
                    <td className=" pl-2 py-1.5">{row.key}</td>
                    <td className="flex py-1.5 h-full justify-between items-center">
                      {row.hint}
                      <CloseIcon
                        className="float-end w-4 text-gray-700    cursor-pointer"
                        onClick={() => handleDelete(row.key)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* ./ End Section Show  Table Keys and Hints */}

        {/* Section Handle Button Reset and Submit */}
        <div className="flex pt-6">
          <button
            className="px-3 py-1 text-center mr-2 text-blue-800 border border-blue-800 rounded-lg hover:border-blue-400 active:bg-indigo-500 cursor-pointer"
            type="reset"
            onClick={handleReset}
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-4 py-[7px] text-center text-white bg-blue-800 border border-blue-800 rounded-lg active:text-white hover:bg-blue-700 hover:text-white cursor-pointer"
          >
            Submit
          </button>
        </div>
        {/* ./ End Section Handle Button Reset and Submit */}
      </form>
    </div>
  );
};

export default FormUploadFileComponent;
