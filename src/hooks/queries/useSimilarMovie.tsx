import { MOVIE_KEYS } from "@/constants/query.const";
import { tmdbAxios } from "@/lib/axios.config";
import { MovieResponse } from "@/types/api-response";
import { useQuery } from "@tanstack/react-query";

const useSimilarMovie = (id: number) => {
  return useQuery<MovieResponse>({
    queryKey: [MOVIE_KEYS["GET_SIMILAR_MOVIE"], id],
    queryFn: async () => {
      const res = await tmdbAxios.get(`/movie/${id}/recommendations`);
      return res.data;
    },
  });
};

export default useSimilarMovie;
