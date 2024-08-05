import GenresData from "../Data/ganre";

export interface genre {
    image_background: string;
    id: number;
    name: string;
}

export const useGenres = () => ({ data: GenresData, isLoading: false, error: null });
