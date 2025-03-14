
import React, { useState, useMemo } from "react";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { useTheme } from "../context/ThemeContext";

const Dashboard = () => {
  const { movies, error, loading } = useMovies();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, toggleTheme } = useTheme();

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [movies, searchQuery]);

  if (error)
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  if (loading) return <div>Loading...</div>;

  return (
    <div className={`dashboard ${theme}`}>
       
     <div className="container">
     <h1>Movie - DashBoard</h1>
     <button onClick={toggleTheme}>Toggle Theme</button>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
     </div>
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard
          key={movie.id}
          movie={movie}
          theme={theme} 
          onClick={() => setSelectedMovie(movie)}
        />
        
        ))}
      </div>
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default Dashboard;
