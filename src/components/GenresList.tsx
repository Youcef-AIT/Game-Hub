import { useGenres } from "../hooks/useGeneres";

const GenresList = () => {
    const { data } = useGenres();

    return (
        <ul>
            {data.map((genre) => {
                return <li key={genre.id}>{genre.name}</li>;
            })}
        </ul>
    );
};

export default GenresList;
