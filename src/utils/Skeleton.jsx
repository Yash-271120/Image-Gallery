import React from "react";

const Skeleton = ({ items }) => {
  const skeletonItems = Array(items).fill(0);
  return (
    <>
      {skeletonItems.map((item, index) => {
        return (
          <div className=" animate-pulse">
            <div
              key={index}
              className=" bg-gray-400 rounded-lg h-64 mb-4"
            ></div>
          </div>
        );
      })}
    </>
  );
};

export default Skeleton;
