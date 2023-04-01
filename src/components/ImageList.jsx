import React, { useContext } from "react";

import Image from "./Image";

import { ImageContext } from "../App";

const ImageList = () => {
  const { response, loading } = useContext(ImageContext);
  console.log(response);
  return (
    <>
      <h1 className=" text-center mt-6 text-2xl underline">
        Showing Results for Puppies
      </h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </div>
    </>
  );
};

export default ImageList;
