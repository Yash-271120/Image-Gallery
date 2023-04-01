import React from "react";

const Image = ({ data }) => {
  return (
    <div className=" border-2 shadow-sm border-orange-400 rounded-lg p-4">
      <h1>Image</h1>
      <img
        className=" h-64 w-full object-cover rounded-lg shadow-md"
        src={data.urls.small}
        alt={data.alt_description}
      />
      <div className=" text-center mt-5">
        <p className="mb-5 text-2xl">{data.alt_description}</p>
        <a href={data.links.html} target="_blank">
          Link to Unsplash page
        </a>
      </div>
    </div>
  );
};

export default Image;
