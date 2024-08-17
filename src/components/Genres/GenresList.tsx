import {Button, HStack, Image, Link, List, ListItem} from "@chakra-ui/react";
import {genre, useGenres} from "../../hooks/useGeneres";
import {getCropedUrl} from "../../services/image-url-mod";

interface Props {
    onselect: (genre: genre) => void;
    selectedGenreId?: number;
}

const GenresList = ({selectedGenreId, onselect}: Props) => {
    const {data} = useGenres();
    return (
        <List>
            {data?.results.map((genre) => {
                return (
                    <ListItem key={genre.id} padding={1}>
                        <HStack spacing={4}>
                            <Image
                                src={getCropedUrl(genre.image_background)}
                                boxSize={10}
                                objectFit={"cover"}
                                borderRadius={10}
                            />
                            <Button
                                textAlign={"left"}
                                whiteSpace={"wrap"}
                                colorScheme={genre.id === selectedGenreId ? "green" : "white"}
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
