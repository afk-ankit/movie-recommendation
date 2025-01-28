import { MOVIE_KEYS } from "@/constants/query.const";
import { tmdbAxios } from "@/lib/axios.config";
import { WatchResponse } from "@/types/api-response";
import { useQuery } from "@tanstack/react-query";

const useWatch = (id: string) => {
  return useQuery<WatchResponse>({
    queryKey: [MOVIE_KEYS["GET_WATCH_PROVIDER"], id],
    queryFn: async () => {
      const res = await tmdbAxios.get(`/movie/${id}/watch/providers`);
      return res.data;
    },
    enabled: !!id,
  });
};

export default useWatch;
