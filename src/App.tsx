import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformsList from "./components/PlatformsList";
import { useState } from "react";
import { genre } from "./hooks/useGeneres";

function App() {
    

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
                        <GenresList />
                    </GridItem>
                </Show>
                <GridItem area={"main"}>
                    <PlatformsList/>
                    <GameGrid />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
