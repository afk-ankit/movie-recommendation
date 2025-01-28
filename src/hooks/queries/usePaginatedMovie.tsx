import { MOVIE_KEYS } from "@/constants/query.const";
import { tmdbAxios } from "@/lib/axios.config";
import { MovieResponse } from "@/types/api-response";
import { useQuery } from "@tanstack/react-query";

const usePaginatedMovie = (id?: number, category?: string) => {
  return useQuery<MovieResponse>({
    queryKey: [MOVIE_KEYS["GET_ALL_MOVIES"], id, category],
    queryFn: async () => {
      let url = "/discover/movie";
      if (category) url = "movie/" + category + "?page=2";
      if (id) url = url + `?with_genres=${id}&page=2`;
      const res = await tmdbAxios.get(url);
      return res.data;
    },
    enabled: !!id || !!category,
  });
};

export default usePaginatedMovie;
