import FilterHeader from "@/components/common/FilterHeader";
import HorizontalContainer from "@/components/common/HorizontalContainer";
import MovieCard from "@/components/common/MovieCard";
import { CarouselItem } from "@/components/ui/carousel";
import { useUserStore } from "@/store/useUserStore";

const WatchList = () => {
  const { watchlist } = useUserStore();
  return (
    <main className="min-h-[calc(100vh-80px)] p-8 space-y-8">
      <FilterHeader title="Watchlist" prefix={false} />
      {watchlist.length > 0 ? (
        <HorizontalContainer>
          {watchlist.map((item, key) => (
            <CarouselItem className="xl:basis-[12.5%] basis-1/6" key={key}>
              <MovieCard key={key} movie={item} />
            </CarouselItem>
          ))}
        </HorizontalContainer>
      ) : (
        <p className="ml-8 text-muted-foreground">
          No movies in the watchlist...
        </p>
      )}
    </main>
  );
};

export default WatchList;
