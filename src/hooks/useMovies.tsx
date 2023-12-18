import { searchMovies } from "../services/movies";
import { useMemo, useRef, useState, useCallback } from "react";

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([]);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }): Promise<void | never[]> => {
    if (previousSearch.current === search) return;
    previousSearch.current = search;
    const newMovies = await searchMovies({ search });
    setMovies(newMovies);
  }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [movies, sort]);

  return { movies: sortedMovies, getMovies };
};
