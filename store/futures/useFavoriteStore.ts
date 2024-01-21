import {create,  SetState } from 'zustand';

interface FavoriteStore {
  isFavoriteOpen: boolean;
  setFavoriteIsOpen: (isOpen: boolean) => void;
}

const useFavoriteStore = create<FavoriteStore>((set: SetState<FavoriteStore>) => ({
  isFavoriteOpen: false,
  setFavoriteIsOpen: (isOpen) => set({ isFavoriteOpen: isOpen }),
}));

export default useFavoriteStore;
