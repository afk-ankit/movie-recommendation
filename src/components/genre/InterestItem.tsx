import { cn } from "@/lib/utils";
import { Genre } from "@/types/api-response";

const GenreItem = ({
  genre,
  handleClick,
  selectedGenre,
}: {
  genre: Genre;
  handleClick: (value: Genre) => void;
  selectedGenre: Genre[];
}) => {
  return (
    <div
      className={cn(
        "border group relative h-20 grid place-items-center text-center rounded-md z-20 hover:ring hover:ring-primary  transition-all cursor-pointer bg-accent border",
        selectedGenre.find((item) => item.name === genre.name) &&
          "bg-primary"
      )}
      onClick={() => {
        handleClick(genre);
      }}
    >
      <span className="tracking-wide text-foreground text-center text-ellipsis">
        {genre.name}
      </span>
    </div>
  );
};

export default GenreItem;
