import { Button, List, ListItem } from "@chakra-ui/react";
import { genre, useGenres } from "../hooks/useGeneres";
import { useState } from "react";

interface Props {
    onselect: (genre: genre) => void;
    selectedGenre: genre | null;
}

const GenresList = ({ selectedGenre, onselect }: Props) => {
    const { data } = useGenres();
    return (
        <List>
            {data.map((genre) => {
                return (
                    <ListItem key={genre.id}>
                        <Button colorScheme={genre.id === selectedGenre?.id ? "green" : "white"} variant="link" key={genre.id} onClick={() => onselect(genre)}>
                            {genre.name}
                        </Button>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default GenresList;
