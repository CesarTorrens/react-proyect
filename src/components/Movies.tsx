import { Movie } from "../interfaces/Movie.interface";

const ListOfMovies = ({ movies }: Movie[]) => {
  return (
    <ul className="movies">
      {movies.map((movie: Movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
};

const NoResults = () => {
  return <p>No se encontraron peliculas para tu busqueda</p>;
};

export const Movies = ({ movies }: Movie[]) => {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : NoResults();
};
