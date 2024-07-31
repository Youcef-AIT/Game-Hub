import { useData } from "./useData";

export interface genre {
    image_background: any;
    id: number;
    name: string;
}

export const useGenres = () => useData<genre>("/genres");
