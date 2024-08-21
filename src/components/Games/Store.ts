import {create} from "zustand";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    order?: string;
    searchInput?: string;
    pageSize?: number;
}

interface GameQueryStoreType {
    gamequery: GameQuery;
    setSearchInput: (value: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setOrder: (value: string) => void;
}

const useGameQueryStore = create<GameQueryStoreType>((set) => ({
    gamequery: {},
    setSearchInput: (searchInput) =>
        set((store) => ({gamequery: {...store.gamequery, searchInput}})),
    setGenreId: (genreId) => set((store) => ({gamequery: {...store.gamequery, genreId}})),
    setPlatformId: (platformId) => set(() => ({gamequery: {platformId}})),
    setOrder: (order) => set((store) => ({gamequery: {...store.gamequery, order}})),
}));

export default useGameQueryStore;
