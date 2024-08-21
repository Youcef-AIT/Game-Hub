import {Image, SimpleGrid} from "@chakra-ui/react";
import useGameScreenShot from "../hooks/useGameScreenShot";
import {getCropedUrl} from "../services/image-url-mod";

interface Props {
    gameId: number;
}

const GameScreenshot = ({gameId}: Props) => {
    const {data, error, isLoading} = useGameScreenShot(gameId);

    if (isLoading) return null;

    if (error) throw error;

    return (
        <SimpleGrid spacing={5} mt={5} columns={{base: 1, md: 2}}>
            {data?.results.map((picture) => (
                <Image
                    key={picture.id}
                    rounded={"lg"}
                    objectFit="cover"
                    src={picture.image}
                    alt="gameScreenShot"
                />
            ))}
        </SimpleGrid>
    );
};

export default GameScreenshot;
