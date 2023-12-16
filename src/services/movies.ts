import { MovieApi } from "../interfaces/Movie.interface";
const API_KEY = "b0f56740";

export const searchMovies = async ({ search }) => {
  if (search === "") return [];
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const json = await res.json();
    const movies = json.Search;
    return movies?.map((movie: MovieApi) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (error) {
    throw new Error("Error searching movies");
  }
};
