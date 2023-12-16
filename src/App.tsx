import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies } = useMovies({ search });

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
    // esta forma es mucho mas util que el "useRef" cuando tenemos muchos inputs
    // const { query } = Object.fromEntries(new window.FormData(e.target))
    // console.log(query)
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            value={search}
            name="query"
            placeholder="Avengers, Star Wars, The Matrix..."
            type="text"
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{<Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
