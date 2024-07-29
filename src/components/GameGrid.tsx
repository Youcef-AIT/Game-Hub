import { useGames } from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import SkiletonCard from "./SkiletonCard";

const GameGrid = () => {
    const { data, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid padding={4} columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
                {isLoading &&
                    skeletons.map((skeleton) => {
                        return <SkiletonCard />;
                    })}
                {data.map((game) => {
                    return (
                        <>
                            <GameCard key={game.id} game={game} />
                        </>
                    );
                })}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
