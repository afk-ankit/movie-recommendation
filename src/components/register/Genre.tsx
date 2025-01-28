import { GENRES } from "@/constants/genres";
import { Genre } from "@/types/api-response";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import GenreItem from "./InterestItem";
import { useUserStore } from "@/store/useUserStore";

const GenreForm = () => {
  const { genres, addGenre, removeGenre } = useUserStore();
  const navigate = useNavigate();
  const handleGenreClick = (newGenre: Genre) => {
    const isSelected = genres.some((item) => item.name === newGenre.name);
    if (isSelected) {
      removeGenre(newGenre);
    } else {
      addGenre(newGenre);
    }
  };


  return (
    <div className="p-8 mx-auto w-fit">
      <div className="bg-card border rounded-md py-6 px-8 space-y-6 md:w-[400px] w-full">
        <h1 className="text-2xl text-center">Choose your favourite</h1>
        <ScrollArea>
          <div className="grid grid-cols-2 gap-4 h-[300px] px-4 py-1">
            {GENRES.map((item, key) => (
              <GenreItem
                key={key}
                genre={item}
                handleClick={handleGenreClick}
                selectedGenre={genres}
              />
            ))}
          </div>
        </ScrollArea>
        <div>
          <Button
            className="w-full mt-2"
            size={"lg"}
            disabled={!genres.length}
            onClick={() => {
              navigate("/");
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GenreForm;
