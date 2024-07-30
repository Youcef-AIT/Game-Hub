import { Button, List, ListItem } from "@chakra-ui/react";
import { genre, useGenres } from "../hooks/useGeneres";
import { useState } from "react";

const GenresList = () => {
    const [selectedGenre, setSelectedGenre] = useState<genre | null>(null);
    const { data } = useGenres();
    return (
        <List>
            {data.map((genre) => {
                return (
                    <ListItem key={genre.id}>
                        <Button colorScheme={genre.id === selectedGenre?.id ? "green" : "white"} onClick={() => setSelectedGenre(genre)} variant="link" key={genre.id}>
                            {genre.name}
                        </Button>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default GenresList;
