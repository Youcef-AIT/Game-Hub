import { useData } from "./useData";

export interface genre {
    id: number;
    name: string;
}

export const useGenres = () => useData<genre>("/genres");
