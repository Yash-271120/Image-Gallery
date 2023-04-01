import { useState, useEffect } from "react";

import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY,
});

const useUnsplashAPI = (query) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async (query) => {
    try {
      setLoading(true);
      const response = await api.search.getPhotos({
        query: query,
      });
      setResponse(response.response.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos(query);
  }, [query]);

  return {
    response,
    error,
    loading,
    fetchPhotos,
  };
};

export default useUnsplashAPI;
