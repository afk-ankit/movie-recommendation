import useMovieDetail from "@/hooks/queries/useMovieDetails";
import useMovieVideo from "@/hooks/queries/useMovieVideo";
import useWatch from "@/hooks/queries/useWatch";
import {
  ClapperboardIcon,
  DollarSign,
  EyeIcon,
  HandHeartIcon,
  LoaderCircle,
} from "lucide-react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../common/VideoPlayer";
import { Badge } from "../ui/badge";
import { useUserStore } from "@/store/useUserStore";
import { toast } from "sonner";
import { Movie, Provider } from "@/types/api-response";
import { Button } from "../ui/button";
import WatchProvider from "./WatchProvider";
import SimilarMovie from "./SimilarMovie";

const MovieDetails = () => {
  const params = useParams();
  const { data: movieData } = useMovieDetail(params?.id || "");
  const { data: movieVideo } = useMovieVideo(params?.id || "");
  const { data: watchProvider, isLoading: watchProviderLoading } = useWatch(
    params?.id || ""
  );

  console.log(watchProvider);

  const trailerKey = movieVideo?.results?.find(
    (item) => item.type === "Trailer"
  );
  const trailerLink = import.meta.env.VITE_VIDEO_LINK + trailerKey?.key;

  const { watchlist, addWatchList, removeWatchList } = useUserStore();
  const isAdded = watchlist.some((item) => item.id === movieData?.id);

  const handleSave = () => {
    if (movieData) {
      if (isAdded) {
        removeWatchList(movieData as unknown as Movie);
        toast.error("Movie removed from watchlist.");
      } else {
        addWatchList(movieData as unknown as Movie);
        toast.success("Movie added to watchlist.");
      }
    }
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {trailerLink && <VideoPlayer src={trailerLink} />}
      </div>
      <div className="p-8 max-w-xl mx-auto space-y-4 mb-12">
        <div>
          <h1 className="text-5xl leading-tighter">{movieData?.title}</h1>
          <h3 className="text-muted-foreground mb-2">{movieData?.tagline}</h3>
          {movieData?.genres.map((item, key) => (
            <Badge key={key} variant={"secondary"} className="mr-2">
              {item.name}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          <img
            src={import.meta.env.VITE_IMAGE_URL + movieData?.poster_path}
            alt="movie picture"
            className="h-72 object-cover object-top"
          />
          <p className="text-muted-foreground">{movieData?.overview}</p>
        </div>

        <div className="text-sm flex gap-8 text-muted-foreground">
          <div className="flex gap-1 items-center">
            <EyeIcon size={18} />
            <span>{Math.floor(movieData?.popularity || 0)}</span>
          </div>
          <div className="flex gap-1 items-center">
            <HandHeartIcon size={18} />
            <span>{Math.ceil(movieData?.vote_average || 0)}/10</span>
          </div>
          <div className="flex gap-1 items-center">
            <DollarSign size={18} />
            <span>{Math.ceil((movieData?.revenue || 0) / 1000000 || 0)} M</span>
          </div>
          <div className="flex gap-1 items-center">
            <ClapperboardIcon size={18} />
            <span>Released on {movieData?.release_date}</span>
          </div>
        </div>
        <Button
          onClick={handleSave}
          variant={isAdded ? "secondary" : "default"}
          className="w-full"
        >
          {isAdded ? "Remove from" : "Add to"} Watch Later
        </Button>

        <div className="flex flex-col gap-4 border p-4 rounded-sm bg-card">
          {watchProviderLoading && (
            <LoaderCircle size={18} className="animate-spin" />
          )}
          {renderProviderSection(watchProvider?.results.IN?.flatrate, "Stream")}
          {renderProviderSection(watchProvider?.results.IN?.buy, "Buy")}
          {renderProviderSection(watchProvider?.results.IN?.rent, "Rent")}
        </div>
      </div>
      <div className="px-8 pb-12">
        {movieData && <SimilarMovie id={movieData?.id}/> }
      </div>
    </>
  );
};

const renderProviderSection = (
  providers: Provider[] | undefined,
  title: string
) => {
  if (!providers?.length) return null;
  return (
    <div>
      <h3 className="mb-2 text-muted-foreground ml-2">{title}</h3>
      <div className="flex">
        {providers.map((item: Provider, key: number) => (
          <WatchProvider provider={item} key={key} />
        ))}
      </div>
    </div>
  );
};
export default MovieDetails;
