import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformsList from "./components/PlatformsList";
import { useState } from "react";
import { genre } from "./hooks/useGeneres";
import { Platform } from "./hooks/useGames";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
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
                        <GenresList onselect={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
                    </GridItem>
                </Show>
                <GridItem area={"main"}>
                    <PlatformsList onSelectPlatform={(platform) => setSelectedPlatform(platform)} selectedPlatform={selectedPlatform} />
                    <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
