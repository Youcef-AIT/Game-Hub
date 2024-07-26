import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/gameGrid";

function App() {
    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
            >
                <GridItem area={"nav"}>
                    <Navbar />
                </GridItem>
                <Show above="lg">
                    <GridItem area={"aside"} bg={"blue"}>
                        aside
                    </GridItem>
                </Show>
                <GridItem area={"main"} bg={"green"}>
                    <GameGrid />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
