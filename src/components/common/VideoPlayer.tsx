import { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({src}:{src:string}) => {
  const [isMuted, setIsMuted] = useState(true);
  return <div
          className="relative w-full"
        >
          <div className="overflow-hidden relative pt-[40%] h-[calc(100vh-200px)]">
            <ReactPlayer
              url={src}
              playing={true}
              muted={isMuted}
              loop={true}
              width="100%"
              height="120%"
              className="absolute top-[-10%] left-0"
              config={{
                youtube: {
                  playerVars: {
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                  },
                },
              }}
            />

            <div className="absolute bottom-4 right-4 z-10">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="bg-background/60 hover:bg-muted/60 text-white rounded-full p-2"
              >
                {isMuted ? "🔇" : "🔊"}
              </button>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black"></div>
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black"></div>
            </div>
          </div>
        </div>
;
};

export default VideoPlayer;

