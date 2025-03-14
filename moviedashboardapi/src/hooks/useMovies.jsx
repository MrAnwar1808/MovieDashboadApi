
import { useState, useEffect, useCallback } from "react";
import { fetchMovies } from "../utils/api";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovieData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchMovies();
      setMovies(data); // Set the movies data
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return { movies, error, loading };
};
