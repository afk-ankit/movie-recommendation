import { MOVIE_KEYS } from "@/constants/query.const";
import { tmdbAxios } from "@/lib/axios.config";
import { MovieResponse } from "@/types/api-response";
import { useQuery } from "@tanstack/react-query";

const useMovieSearch = (search: string|null) => {
  return useQuery<MovieResponse>({
    queryKey: [MOVIE_KEYS["GET_MOVIE_SEARCH"], search],
    queryFn: async () => {
      const res = await tmdbAxios.get(`/search/movie?query=${search}&include_adult=true`);
      return res.data;
    },
    enabled: !!search,
  });
};

export default useMovieSearch;
