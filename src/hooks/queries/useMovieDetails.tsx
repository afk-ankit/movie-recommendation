import { MOVIE_KEYS } from "@/constants/query.const";
import { tmdbAxios } from "@/lib/axios.config";
import { MovieDetail } from "@/types/api-response";
import { useQuery } from "@tanstack/react-query";

const useMovieDetail = (id: string) => {
  return useQuery<MovieDetail>({
    queryKey: [MOVIE_KEYS["GET_MOVIES_DETAILS"], id],
    queryFn: async () => {
      const res = await tmdbAxios.get(`/movie/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
};

export default useMovieDetail;
