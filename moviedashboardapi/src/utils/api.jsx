

const BASE_URL = "https://api.allorigins.win/get?url=https://freetestapi.com/api/v1/movies";


export const fetchMovies = async () => {
    try {
        const response = await fetch(BASE_URL);
       
        
      if (!response.ok) {
        throw new Error("Failed to fetch movies from API.");
      }
      const data = await response.json();
      return JSON.parse(data.contents); 
      return data;
    } catch (error) {
      console.error("Error fetching movies:", error.message);
      throw new Error(error.message || "An error occurred while fetching movies.");
    }
  };
  
