const LanguageSelector = () => {
  return (
    <div className="flex justify-center min-h-screen flex-col bg-black items-center">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-xl">
        <label htmlFor="language" className="block mb-2 text-lg font-medium">
          Choose Language
        </label>
        <select
          id="language"
          name="language"
          className="block w-full px-3 py-2 mb-4 border border-black rounded-md focus:border-black text-gray-500"
        >
          <option value="">Choose language</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
        <div className="flex gap-3 justify-end">
          <button className="px-4 py-2 font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none">
            Cancel
          </button>
          <button className="px-4 py-2 font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
