import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Genre, Movie } from '@/types/api-response'

interface CombinedState {
  username: string
  avatarUrl: string
  setUsername: (username: string) => void
  setAvatarUrl: (url: string) => void
  genres: Genre[]
  addGenre: (genre: Genre) => void
  removeGenre: (genre: Genre) => void
  setGenres: (genres: Genre[]) => void
  clearGenres: () => void
  watchlist:Movie[]
  addWatchList:(movie:Movie)=>void;
  removeWatchList:(movie:Movie)=>void;
}

export const useUserStore = create<CombinedState>()(
  persist(
    (set) => ({
      username: '',
      avatarUrl: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=10',
      setUsername: (username) => set({ username }),
      setAvatarUrl: (avatarUrl) => set({ avatarUrl }),
      genres: [],
      addGenre: (genre) => set((state) => ({
        genres: [...state.genres, genre],
      })),
      removeGenre: (genre) => set((state) => ({
        genres: state.genres.filter((g) => g.id !== genre.id),
      })),
      setGenres: (genres) => set({ genres }),
      clearGenres: () => set({ genres: [] }),
      watchlist:[],
      addWatchList:(movie)=>set((state)=>({watchlist:[...state.watchlist,movie]})),
      removeWatchList:(movie)=>set((state)=>({
        watchlist: state.watchlist.filter((g) => g.id !== movie.id),
      }))
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
