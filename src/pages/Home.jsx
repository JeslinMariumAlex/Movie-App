import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

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
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    alert(searchQuery);
    setSearchQuery(""); // Clear the search input after submission
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
