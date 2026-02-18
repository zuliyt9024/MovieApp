import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies.json";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.imdbID === id);

  if (!movie) {
    return <div className="text-center mt-10">Movie Not Found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        
        <div className="md:flex">
          
          {/* Poster */}
          <div className="md:w-1/3">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-6 md:w-2/3">
            <h1 className="text-3xl font-bold text-gray-800">
              {movie.Title}
            </h1>

            <p className="text-gray-500 mt-1">
              {movie.Year} • {movie.Runtime} • {movie.Genre}
            </p>

            <p className="mt-4 text-gray-700">
              {movie.Plot}
            </p>

            <div className="mt-4 space-y-2">
              <p><span className="font-semibold">Director:</span> {movie.Director}</p>
              <p><span className="font-semibold">Writer:</span> {movie.Writer}</p>
              <p><span className="font-semibold">Actors:</span> {movie.Actors}</p>
              <p><span className="font-semibold">Language:</span> {movie.Language}</p>
              <p><span className="font-semibold">Country:</span> {movie.Country}</p>
              <p><span className="font-semibold">Awards:</span> {movie.Awards}</p>
              <p><span className="font-semibold">Box Office:</span> {movie.BoxOffice}</p>
            </div>

            {/* Ratings */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-yellow-500">
                ⭐ Ratings
              </h3>

              {movie.Ratings.map((rating, index) => (
                <p key={index} className="text-gray-600">
                  {rating.Source}: {rating.Value}
                </p>
              ))}
            </div>

            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            >
              ⬅ Back
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default MovieDetails;
