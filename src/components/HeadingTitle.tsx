import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    HeadingSelection: GameQuery;
}

const HeadingTitle = ({ HeadingSelection }: Props) => {
    const Platform = HeadingSelection.platform?.name;
    const genre = HeadingSelection.genre?.name;

    return (
        <Heading as={"h1"} size={"2xl"}>
            {Platform} {genre} Games
        </Heading>
    );
};

export default HeadingTitle;
