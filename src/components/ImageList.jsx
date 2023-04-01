import React, { useContext } from "react";

import Image from "./Image";
import Skeleton from "../utils/Skeleton";

import { ImageContext } from "../App";

const ImageList = ({ imageSearch }) => {
  const { response, loading } = useContext(ImageContext);
  console.log(response);
  return (
    <>
      <h1 className=" text-center mt-6 text-2xl underline">
        Showing Results for {imageSearch}
      </h1>
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
