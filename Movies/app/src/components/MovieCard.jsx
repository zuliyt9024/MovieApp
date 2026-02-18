import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="rounded-lg h-72 w-full object-cover"
        />
        <h2 className="text-xl font-bold mt-2">{movie.Title}</h2>
        <p className="text-gray-500">{movie.Year}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
