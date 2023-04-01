import React, { useState, useContext } from "react";

import { ImageContext } from "../App";

const SearchField = () => {
  const [searchData, setSearchData] = useState("");
  const { fetchPhotos } = useContext(ImageContext);

  const handleSearchChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleButtonClick = () => {
    fetchPhotos(searchData);
    setSearchData("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchPhotos(searchData);
      setSearchData("");
    }
  };
  return (
    <div className="flex">
      <input
        className="indent-2 p-2 border bg-gray-50 border-gray-300 outline-none rounded-tl rounded-bl focus:ring focus:border-orange-400 text-md w-full"
        type="search"
        value={searchData}
        placeholder="Search for Images..."
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
      />
      <button
        onClick={handleButtonClick}
        className=" bg-orange-400 px-6 py-2 rounded-tr rounded-br text-white focus:ring-orange-300 focus:ring-2 disabled:bg-gray-400"
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
