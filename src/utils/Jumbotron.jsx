import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div className=" bg-cyan-500 py-10">
      <div className=" max-w-md mx-auto">
        <h1 className=" text-white font-bold text-3xl text-center mb-5">
          Image Gallery
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Jumbotron;
