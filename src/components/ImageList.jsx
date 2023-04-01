import React, { useContext } from "react";

import Image from "./Image";
import Skeleton from "../utils/Skeleton";

import { ImageContext } from "../App";

const ImageList = ({ imageSearch }) => {
  const { response, loading } = useContext(ImageContext);
  return (
    <>
      <h1 className=" text-center mt-6 text-2xl underline">
        Showing Results for {imageSearch}
      </h1>
      {!loading && response && response.length === 0 && (
        <div className="text-center text-2xl font-bold mt-5">
          No images found
        </div>
      )}
      <div className=" max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
        {loading ? (
          <Skeleton items={10} />
        ) : (
          response &&
          response.map((image, index) => {
            return <Image key={index} data={image} />;
          })
        )}
      </div>
    </>
  );
};

export default ImageList;
