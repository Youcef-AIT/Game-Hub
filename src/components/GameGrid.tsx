import { useGames } from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import SkiletonCard from "./SkiletonCard";
import CardContainer from "./CardContainer";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid padding={4} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
                {isLoading &&
                    skeletons.map((_, index) => {
                        return <SkiletonCard key={index} />;
                    })}
                {data.map((game) => {
                    return (
                        <CardContainer key={game.id}>
                            <GameCard game={game} />
                        </CardContainer>
                    );
                })}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
