import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserStore } from "@/store/useUserStore";
import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Input } from "../ui/input";
import { useDebounceValue } from "usehooks-ts";

const Header = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState("");
  const searchQuery = searchParams.get("q");
  const { avatarUrl, watchlist } = useUserStore();
  const hideSearchAndProfile = ["/genre", "/profile"].includes(
    location.pathname
  );
  const navigate = useNavigate();
  const [debouncedValue, setDebouncedValue] = useDebounceValue(value, 500);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setDebouncedValue(e.target.value);
  };
  useEffect(() => {
    if (location.pathname.includes("search") && debouncedValue === "") {
      navigate("/");
    } else if (location.pathname.includes("search") && debouncedValue) {
      navigate(`/search?q=${encodeURIComponent(debouncedValue.trim())}`);
    }
  }, [debouncedValue, navigate, location.pathname]);

  useEffect(() => {
    if (searchQuery) setValue(searchQuery);
  }, [searchQuery]);

  return (
    <nav className="px-8 flex justify-between items-center gap-8 h-20 sticky top-0 z-[100] bg-background">
      <Link to={"/"}>
        <div className="grid place-items-center bg-black dark:bg-white text-white size-10 rounded-full cursor-pointer pl-1">
          <span className="font-bold mix-blend-difference tracking-wider">
            WATCHNOW
          </span>
        </div>
      </Link>
      {!hideSearchAndProfile && (
        <div className="flex gap-8 mr-auto ml-20 items-center">
          <Link to={"/explore"} className="">
            <span className="text-sm hover:underline">Explore</span>
          </Link>
          <Link to={"/watchlist"} className="relative">
            <span className="text-sm hover:underline">Watchlist</span>
            {watchlist.length > 0 && (
              <span className=""> ({watchlist.length})</span>
            )}
          </Link>
        </div>
      )}
      {!hideSearchAndProfile && (
        <div className="flex gap-8 items-center">
          <Input
            className="w-[300px] ml-auto"
            placeholder="search for your favourite movie genre..."
            value={value}
            onChange={handleSearchChange}
          />
          <Avatar>
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      )}
    </nav>
  );
};

export default Header;
