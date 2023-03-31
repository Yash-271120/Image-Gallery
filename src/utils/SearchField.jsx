import React from "react";

const SearchField = () => {
  return (
    <div className="flex">
      <input
        className="indent-2 p-2 border bg-gray-50 border-gray-300 outline-none rounded-tl rounded-bl focus:ring focus:border-orange-400 text-md w-full"
        type="search"
        placeholder="Search for Images..."
      />
      <button className=" bg-orange-400 px-6 py-2 rounded-tr rounded-br text-white focus:ring-orange-300 focus:ring-2">
        Search
      </button>
    </div>
  );
};

export default SearchField;
