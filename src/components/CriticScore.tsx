import { Badge } from "@chakra-ui/react";

interface Props {
    metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
    return (
        <Badge paddingX={3} color={"green"} bg={metacritic >= 80 ? "green.600" : metacritic >= 40 && metacritic < 80 ? "yellow" : "red"}>
            {metacritic}
        </Badge>
    );
};

export default CriticScore;
