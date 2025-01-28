import FilterContainer from "@/components/common/FilterContainer";
import FilterHeader from "@/components/common/FilterHeader";
import HorizontalContainer from "@/components/common/HorizontalContainer";
import MovieList from "@/components/common/MovieList";

const Explore = () => {
  return (
    <main className="p-8 mx-auto space-y-10">
      <FilterContainer index={1}>
        <FilterHeader title={"Top Rated"} prefix={false} />
        <HorizontalContainer>
          <MovieList category="top_rated" />
        </HorizontalContainer>
      </FilterContainer>
      <FilterContainer index={1}>
        <FilterHeader title={"Recent Releases"} prefix={false} />
        <HorizontalContainer>
          <MovieList category="now_playing" />
        </HorizontalContainer>
      </FilterContainer>
      <FilterContainer index={2}>
        <FilterHeader title={"Popular"} prefix={false} />
        <HorizontalContainer>
          <MovieList category="popular" />
        </HorizontalContainer>
      </FilterContainer>
    </main>
  );
};

export default Explore;
