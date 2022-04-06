import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";

export const useFetch = (attributes) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchData = async (attr) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}${attr}`);
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(attributes);
  }, [attributes]);

  return { movies, loading };
};
