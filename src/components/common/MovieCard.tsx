import { Movie } from "@/types/api-response";
import MoviePoper from "./MoviePoper";
const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <MoviePoper movie={movie}>
      <div
      className="bg-card p-0 rounded-lg h-full group overflow-hidden max-w-[200px]"
      onClick={() => {
      }}
    >
      {movie.poster_path ? <img
        src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
        alt="movie picture"
        className="hover:scale-105 transition-all ease-out cursor-pointer"
      />: <div className=""></div> }
    </div>
    </MoviePoper>
  );
};

export default MovieCard;
