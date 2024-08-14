import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { useGenres } from "../hooks/useGeneres";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
    HeadingSelection: GameQuery;
}

const HeadingTitle = ({ HeadingSelection }: Props) => {
    const selectedGenreName = useGenre(HeadingSelection.genreId);

    const selectedPlatformName = usePlatform(HeadingSelection.platformId);

    return (
        <Heading as={"h1"} size={"2xl"}>
            {selectedPlatformName} {selectedGenreName} Games
        </Heading>
    );
};

export default HeadingTitle;
