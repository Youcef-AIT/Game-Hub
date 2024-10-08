import {Heading, SimpleGrid, Text} from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {useGames} from "../../hooks/useGames";
import CardContainer from "./CardContainer";
import GameCard from "./GameCard";
import SkiletonCard from "./SkiletonCard";

const GameGrid = () => {
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    if (error) {
        return <Text>{error.message}</Text>;
    }
    const dataLenght = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

    return (
        <InfiniteScroll
            style={{overflow: "hidden"}}
            loader={<Heading>loading ...</Heading>}
            hasMore={!!hasNextPage}
            dataLength={dataLenght}
            next={fetchNextPage}
        >
            <SimpleGrid padding={4} columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={10}>
                {isLoading &&
                    skeletons.map((_, index) => {
                        return <SkiletonCard key={index} />;
                    })}
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <CardContainer game={game} key={game.id}>
                                <GameCard game={game} />
                            </CardContainer>
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
        </InfiniteScroll>
    );
};

export default GameGrid;
