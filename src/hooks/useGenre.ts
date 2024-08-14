import { useGenres } from "./useGeneres";

const useGenre = (genreId?: number) => {
    const { data: genres } = useGenres();

    const selectedGenre = genres?.results.find((genre) => genre.id === genreId);
    return  selectedGenre ? selectedGenre.name : "";
};

export default useGenre;
