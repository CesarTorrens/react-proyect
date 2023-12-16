import { searchMovies } from "../services/movies";
import { useRef, useState } from "react";

export const useMovies = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const previousSearch = useRef(search);

  const getMovies = async (): Promise<void | never[]> => {
    if (previousSearch.current === search) return;
    previousSearch.current = search;
    const newMovies = await searchMovies({ search });
    setMovies(newMovies);
  };

  return { movies, getMovies };
};
