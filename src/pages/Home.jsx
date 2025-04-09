import React from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  // Sample data for movies
  const movies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
    },
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
    },
  ];

  // Function to handle search form submission
  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
