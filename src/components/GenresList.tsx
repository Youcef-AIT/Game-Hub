import { Button, HStack, Image, Link, List, ListItem } from "@chakra-ui/react";
import { genre, useGenres } from "../hooks/useGeneres";
import { useState } from "react";
import { getCropedUrl } from "../services/image-url-mod";

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
                    <ListItem key={genre.id} padding={1}>
                        <HStack spacing={4}>
                            <Image src={getCropedUrl(genre.image_background)} boxSize={10} objectFit={"cover"} borderRadius={10} />
                            <Button
                                textAlign={"left"}
                                whiteSpace={"wrap"}
                                colorScheme={genre.id === selectedGenre?.id ? "green" : "white"}
                                variant="link"
                                key={genre.id}
                                onClick={() => onselect(genre)}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default GenresList;
