import { createContext } from "react";

import Jumbotron from "./utils/Jumbotron";
import SearchField from "./utils/SearchField";
import ImageList from "./components/ImageList";

import useUnsplashApi from "./hooks/useUnsplashApi";

export const ImageContext = createContext();

function App() {
  const { response, error, loading, fetchPhotos } = useUnsplashApi("puppies");

  const data = {
    response,
    error,
    loading,
    fetchPhotos,
  };
  return (
    <ImageContext.Provider value={data}>
      <h1 className=" text-cyan-300 text-4xl">React App</h1>
      <Jumbotron>
        <SearchField />
      </Jumbotron>
      <ImageList />
    </ImageContext.Provider>
  );
}

export default App;
