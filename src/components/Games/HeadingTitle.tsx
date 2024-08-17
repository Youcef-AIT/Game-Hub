import {Heading} from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";
import usePlatform from "../../hooks/usePlatform";
import useGameQueryStore from "./Store";

const HeadingTitle = () => {
    const genreId = useGameQueryStore((s) => s.gamequery.genreId);
    const platformId = useGameQueryStore((s) => s.gamequery.platformId);

    const selectedGenreName = useGenre(genreId);

    const selectedPlatformName = usePlatform(platformId);

    return (
        <Heading as={"h1"} size={"2xl"}>
            {selectedPlatformName} {selectedGenreName} Games
        </Heading>
    );
};

export default HeadingTitle;
