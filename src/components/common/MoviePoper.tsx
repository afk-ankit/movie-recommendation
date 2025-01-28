import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Movie } from "@/types/api-response";
import { EyeIcon, HandHeartIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useUserStore } from "@/store/useUserStore";
import { toast } from "sonner";

const MoviePoper = ({
  children,
  movie,
}: {
  children: React.ReactNode;
  movie: Movie;
}) => {
  const navigate = useNavigate();
  const {watchlist,addWatchList,removeWatchList}=useUserStore()
  const isAdded = watchlist.some((item) => item.id === movie.id);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="z-[200]">
        <DialogHeader>
          <DialogTitle>{movie.original_title}</DialogTitle>
          <DialogDescription>{movie.overview}</DialogDescription>
        </DialogHeader>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-t from-background via-background/10 to-transparent z-10" />
          {movie.poster_path &&  <img
            src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
            alt="movie picture"
            className="h-72 w-full object-cover object-top"
          /> }
        </div>
        <div className="text-sm flex gap-8 text-muted-foreground">
          <div className="flex gap-2 items-center">
            <EyeIcon size={18} />
            <span>{Math.floor(movie.popularity)}</span>
          </div>
          <div className="flex gap-2 items-center">
            <HandHeartIcon size={18} />
            <span>{Math.ceil(movie.vote_average)}/10</span>
          </div>
        </div>
        <DialogFooter className="gap-2">
          <Button
            onClick={() => {
              if(isAdded){
                removeWatchList(movie)
                toast.error("Movie removed from watchlist.")
              }else{
                addWatchList(movie)
                toast.success("Movie added to watchlist.")
              }
            }}
          >
            {isAdded ? "Remove from": "Add to" } Watch Later
          </Button>
          <Button
            onClick={() => {
              navigate(`/movie/${movie.id}`);
            }}
          >
            Go to Details
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MoviePoper;
