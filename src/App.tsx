import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformsList from "./components/PlatformsList";
import { useState } from "react";
import { genre } from "./hooks/useGeneres";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
    genre: genre | null;
    platform: Platform | null;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "200px 1fr",
                }}
            >
                <GridItem area={"nav"}>
                    <Navbar />
                </GridItem>
                <Show above="lg">
                    <GridItem area={"aside"}>
                        <GenresList onselect={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
                    </GridItem>
                </Show>
                <GridItem area={"main"}>
                    <PlatformsList onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
                    <GameGrid gameQuery={gameQuery} />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
