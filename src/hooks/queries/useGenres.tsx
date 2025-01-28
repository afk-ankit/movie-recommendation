import { MOVIE_KEYS } from "@/constants/query.const";
import { tmdbAxios } from "@/lib/axios.config";
import { MovieResponse } from "@/types/api-response";
import { useQuery } from "@tanstack/react-query";

const useGenre = () => {
  return useQuery<MovieResponse>({
    queryKey: [MOVIE_KEYS["GET_ALL_GENRES"]],
    queryFn: async () => {
      const res = await tmdbAxios.get("/genre/movie/list");
      return res.data;
    },
  });
};

export default useGenre;
