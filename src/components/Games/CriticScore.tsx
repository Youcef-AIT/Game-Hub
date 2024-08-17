import { Badge } from "@chakra-ui/react";

interface Props {
    metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
    let color = metacritic >= 80 ? "green" : metacritic >= 40 && metacritic < 80 ? "yellow" : "red";

    return (
        <Badge paddingX={3} colorScheme={color}>
            {metacritic}
        </Badge>   
    );
};

export default CriticScore;
