import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { 
    playlist: {
      id: 1
    }, 
    song:  {
      id: 1,
      title: "Moonlit Walk",
      image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
      artists: ["LoFi Dreamer"],
    }, 
    songs: [] 
  },
  volume: 1,
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}))