import { createContext, useState } from "react";

import Jumbotron from "./utils/Jumbotron";
import SearchField from "./utils/SearchField";
import ImageList from "./components/ImageList";

import useUnsplashAPI from "./hooks/useUnsplashAPI";

export const ImageContext = createContext();

function App() {
  const [imageSearch, setImageSearch] = useState("BasketBall");

  const { response, error, loading, fetchPhotos } =
    useUnsplashAPI("BasketBall");

  console.log("test api key", import.meta.env.VITE_ACCESS_KEY);
  const data = {
    response,
    error,
    loading,
    fetchPhotos,
    setImageSearch,
  };
  return (
    <ImageContext.Provider value={data}>
      <Jumbotron>
        <SearchField />
      </Jumbotron>
      <ImageList imageSearch={imageSearch} />
    </ImageContext.Provider>
  );
}

export default App;
