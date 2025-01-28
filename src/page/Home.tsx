import FilterContainer from "@/components/common/FilterContainer";
import FilterHeader from "@/components/common/FilterHeader";
import HorizontalContainer from "@/components/common/HorizontalContainer";
import MovieList from "@/components/common/MovieList";
import { useUserStore } from "@/store/useUserStore";

const Home = () => {
  const { genres } = useUserStore();
  return (
    <main className="p-8 space-y-10">
      {genres.map((item, key) => (
        <FilterContainer index={key} key={key}>
          <FilterHeader title={item.name} />
          <HorizontalContainer>
            <MovieList id={item.id} />
          </HorizontalContainer>
        </FilterContainer>
      ))}
    </main>
  );
};

export default Home;
