import { useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const avatarStyles = [
  "adventurer",
  "adventurer-neutral",
  "avataaars",
  "avataaars-neutral",
  "big-ears",
  "big-ears-neutral",
  "big-smile",
  "bottts",
  "bottts-neutral",
  "croodles",
  "croodles-neutral",
  "fun-emoji",
  "icons",
  "identicon",
  "initials",
  "lorelei",
  "lorelei-neutral",
  "micah",
  "miniavs",
  "notionists",
  "notionists-neutral",
  "open-peeps",
  "personas",
  "pixel-art",
  "pixel-art-neutral",
];

const Profile = () => {
  const navigate = useNavigate();
  const { username, avatarUrl, setUsername, setAvatarUrl } = useUserStore();
  const [tempUsername, setTempUsername] = useState(username);
  const [currentStyle, setCurrentStyle] = useState("avataaars");

  const generateRandomAvatar = () => {
    const randomStyle =
      avatarStyles[Math.floor(Math.random() * avatarStyles.length)];
    setCurrentStyle(randomStyle);
    const seed = Math.random().toString(36).substring(7);
    const url = `https://api.dicebear.com/7.x/${currentStyle}/svg?seed=${seed}`;
    setAvatarUrl(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tempUsername.trim()) {
      toast.error("Please enter a username");
      return;
    }
    if (!avatarUrl) {
      toast.error("Please generate an avatar");
      return;
    }
    setUsername(tempUsername.trim());
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] grid place-items-center p-8">
      <div className="md:w-[350px] w-full mx-auto p-6 bg-card rounded-md shadow-lg -mt-20">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Your Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-4">
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt="User avatar"
                  className="w-32 h-32 rounded-full bg-background p-2"
                />
              )}
              <Button
                type="button"
                onClick={generateRandomAvatar}
                variant="outline"
                className="flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Generate Random Avatar
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Input
              id="username"
              value={tempUsername}
              onChange={(e) => setTempUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={!tempUsername}
            onClick={() => {
              navigate("/genre");
            }}
          >
            Save Profile
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
