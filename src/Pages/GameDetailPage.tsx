import { Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
    const {slug} = useParams();

    const {data} = useGame(slug as string);

    return (
        <>
            <Heading>{data?.name}</Heading>
            <Text>{data?.description_raw}</Text>
        </>
    );
};

export default GameDetailPage;
