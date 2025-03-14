
import React from "react";

const posters = [
    {id:1 , image:"/image/pic1.jpg"},
    {id:2 , image:"/image/pic2.jpg"},
    {id:3 , image:"/image/pic3.jpg"},
    {id:4 , image:"/image/pic4.jpg"},
    {id:5 , image:"/image/pic5.jpg"},
    {id:6 , image:"/image/pic6.jpg"},
    {id:7 , image:"/image/pic7.jpg"},
    {id:8 , image:"/image/pic8.jpg"},
    {id:9 , image:"/image/pic9.jpg"},
    {id:10 , image:"/image/pic10.jpg"},
    {id:11 , image:"/image/pic11.jpg"},
    {id:12 , image:"/image/pic12.jpg"},
    {id:13 , image:"/image/pic13.jpg"},
    {id:14 , image:"/image/pic14.jpg"},
    {id:15 , image:"/image/pic15.jpg"},
    {id:16 , image:"/image/pic16.jpg"},
    {id:17 , image:"/image/pic17.jpg"},
    {id:18 , image:"/image/pic18.jpg"},
    {id:19 , image:"/image/pic19.jpg"},
    {id:20 , image:"/image/pic20.jpg"},

]

const MovieModal = ({ movie, onClose }) => {
    if (!movie) return null;
  

    const poster = posters.find((p) => p.id === movie.id);
  
    return (
      <div className="modal">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>X</button>
          <h2>{movie.title}</h2>
          <img
            src={poster?.image || "https://via.placeholder.com/220x310"}
            alt={movie.title || "No title available"}
          />
          <div className="modal-details">
            <p><strong>Plot:</strong> {movie.plot || "No plot available"}</p>
            <p><strong>Director:</strong> {movie.director || "N/A"}</p>
            <p><strong>Actors:</strong> {movie.actors?.join(", ") || "N/A"}</p>
            <p><strong>Year:</strong> {movie.year || "N/A"}</p>
            <p><strong>Genre:</strong> {movie.genre?.join(", ") || "N/A"}</p>
            <p><strong>Runtime:</strong> {movie.runtime || "N/A"} minutes</p>
            <p><strong>Rating:</strong> {movie.rating || "N/A"}</p>
            <p><strong>Awards:</strong> {movie.awards || "N/A"}</p>
            <p><strong>Box Office:</strong> {movie.boxOffice || "N/A"}</p>
            <p><strong>Country:</strong> {movie.country || "N/A"}</p>
            <p><strong>Language:</strong> {movie.language || "N/A"}</p>
            <p><strong>Production:</strong> {movie.production || "N/A"}</p>
            <a href={movie.trailer} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
            <br />
            <a href={movie.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default MovieModal;
