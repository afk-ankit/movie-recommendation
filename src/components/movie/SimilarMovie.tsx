import useSimilarMovie from "@/hooks/queries/useSimilarMovie"
import FilterContainer from "../common/FilterContainer"
import FilterHeader from "../common/FilterHeader"
import MovieCard from "../common/MovieCard"
import { CarouselItem } from "../ui/carousel"
import HorizontalContainer from "../common/HorizontalContainer"
import MovieItemSkeleton from "../common/MovieItemSkeleton"

const SimilarMovie = ({id}:{id:number}) => {
  const {data, isLoading}=useSimilarMovie(id)
  return (
      <FilterContainer index={1}>
        <FilterHeader title={"You may also like"} prefix={false}/>
        <HorizontalContainer>
        {data?.results?.map((movie, key) => (
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
      </HorizontalContainer>
    </FilterContainer>
  )
}

export default SimilarMovie
