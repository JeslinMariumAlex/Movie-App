import React from "react";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css"; // Importing CSS for styling

function Home() {
  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]); // State to manage the list of movies
  const [error, setError] = useState(null); // State to manage errors
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Function to load popular movies
    const loadPopularMovies = async () => {
      try{
        const popularMovies = await getPopularMovies(); // Fetch popular movies from the API
        setMovies(popularMovies); // Update the state with the fetched movies
      } catch (error) {}
      finally {}
    }; 
  }, []);

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
