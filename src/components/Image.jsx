import React from "react";

const Image = ({ data }) => {
  return (
    <div className=" border-2 shadow-sm border-orange-400 rounded-lg p-4 relative">
      <img
        className=" h-72 w-full object-cover rounded-lg shadow-md"
        src={data.urls.small}
        alt={data.alt_description}
      />
      <div className=" text-center mt-1">
        <p className="mb-5 text-2xl">{data.alt_description}</p>
        <div className=" h-10 w-full"></div>
      </div>
      <a
        className="bg-orange-400 p-3 rounded-lg text-white absolute bottom-0 right-0 mb-1 mr-1"
        href={data.links.html}
        target="_blank"
      >
        Visit page ↗
      </a>
    </div>
  );
};

export default Image;
