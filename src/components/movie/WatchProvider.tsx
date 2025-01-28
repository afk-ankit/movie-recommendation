import { Provider } from "@/types/api-response";

const WatchProvider = ({ provider }: { provider: Provider }) => {
  return (
    <div className="flex flex-col gap-2 items-center w-14">
      <div className="size-10 overflow-hidden rounded-lg border cursor-pointer">
        <img
          src={import.meta.env.VITE_IMAGE_URL + provider.logo_path}
          alt="movie picture"
        />
      </div>
    </div>
  );
};

export default WatchProvider;
