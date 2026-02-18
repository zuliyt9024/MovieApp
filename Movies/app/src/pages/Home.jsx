import { useState } from "react";
import movies from "../data/movies.json";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-6">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        🎬 Movie Collection
      </h1>

      {/* Movies Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentMovies.map((movie) => (
          <div
            key={movie.imdbID}
            className="transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-12 flex-wrap gap-3">

        {/* Prev Button */}
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="px-5 py-2 rounded-lg bg-white shadow-md 
          hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ← Prev
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm
              ${
                currentPage === index + 1
                  ? "bg-red-500 text-white shadow-lg scale-105"
                  : "bg-white hover:bg-red-100"
              }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="px-5 py-2 rounded-lg bg-white shadow-md 
          hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next →
        </button>

      </div>
    </div>
  );
};

export default Home;
