import { useData } from "./useData";

export interface genre {
    image_background: string;
    id: number;
    name: string;
}

export const useGenres = () => useData<genre>("/genres");
