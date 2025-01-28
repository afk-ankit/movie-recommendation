import FilterHeader from "@/components/common/FilterHeader";
import MovieCard from "@/components/common/MovieCard";
import useMovieSearch from "@/hooks/queries/useMovieSearch";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const { data } = useMovieSearch(searchQuery);
  return (
    <div className="p-8 space-y-8">
      <FilterHeader title={`Showing results for ${searchQuery}`} prefix={false}/>
      <div className="px-8 xl:grid-cols-6 lg:grid-cols-5 grid-cols-4 grid gap-4">
        {data?.results.map((item, key) => (
          <MovieCard movie={item} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Search;
