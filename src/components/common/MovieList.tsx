import usePaginatedMovie from "@/hooks/queries/usePaginatedMovie";
import { CarouselItem } from "../ui/carousel";
import MovieCard from "./MovieCard";
import MovieItemSkeleton from "./MovieItemSkeleton";

const MovieList = ({ id, category }: { id?: number; category?: string }) => {
  const { data: moviesData, isLoading } = usePaginatedMovie(id, category);
  return (
    <>
      {moviesData?.results?.map((movie, key) => (
        <CarouselItem className="xl:basis-[12.5%] lg:basis-1/6 basis-1/4" key={key}>
          <MovieCard movie={movie} />
        </CarouselItem>
      ))}
      {isLoading &&
        Array(10)
          .fill(0)
          .map((_, key) => (
            <CarouselItem key={key} className="xl:basis-[12.5%] lg:basis-1/6 basis-1/4">
              <MovieItemSkeleton />
            </CarouselItem>
          ))}
    </>
  );
};

export default MovieList;
