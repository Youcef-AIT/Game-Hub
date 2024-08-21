import {AspectRatio, Box, Grid, GridItem, Heading, Image} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import ExpandbleText from "../components/ExpandbleText";
import GameDetailGrid from "../components/GameDetailGrid";
import useGame from "../hooks/useGame";
import {useQuery} from "@tanstack/react-query";
import APIClient, {dataShape} from "../services/api-client";
import {Games} from "../hooks/useGames";
import {useState} from "react";
import GameTrailer from "../components/GameTrailer";
import useGameTrailer from "../hooks/useGameTrailer";
import GameScreenshot from "../components/GameScreenShot";

const GameDetailPage = () => {
    const {slug} = useParams();
    const {data: game} = useGame(slug as string);

    const {data: gameTrailer} = useGameTrailer(slug!);

    return (
        <Grid
            templateAreas={{md: '"main aside"', base: '"main" "aside"'}}
            gridTemplateColumns={{md: "1fr 1fr"}}
            gap={4}
        >
            <GridItem area={"main"}>
                <Heading>{game?.name}</Heading>
                <ExpandbleText>{game?.description_raw as string}</ExpandbleText>
                <GameDetailGrid data={game!} />
            </GridItem>
            <GridItem area={"aside"}>
                {gameTrailer?.count === 0 ? (
                    <Heading>There Is no Trailer Available</Heading>
                ) : (
                    <GameTrailer gameTrailer={gameTrailer!} />
                )}
                <GameScreenshot gameId={game?.id!} />
            </GridItem>
        </Grid>
    );
};

export default GameDetailPage;
