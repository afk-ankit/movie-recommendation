import { MOVIE_KEYS } from "@/constants/query.const";
import { tmdbAxios } from "@/lib/axios.config";
import { VideoResponse } from "@/types/api-response";
import { useQuery } from "@tanstack/react-query";

const useMovieVideo = (id: string) => {
  return useQuery<VideoResponse>({
    queryKey: [MOVIE_KEYS["GET_MOVIE_VIDEO"], id],
    queryFn: async () => {
      const res = await tmdbAxios.get(`/movie/${id}/videos?language=en-US`);
      return res.data;
    },
    enabled: !!id,
  });
};

export default useMovieVideo;
