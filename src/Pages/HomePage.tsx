import {Grid, GridItem, Show, VStack, HStack} from "@chakra-ui/react";
import GameGrid from "../components/Games/GameGrid";
import HeadingTitle from "../components/Games/HeadingTitle";
import OrderSelector from "../components/Games/OrderSelector";
import GenresList from "../components/Genres/GenresList";
import Navbar from "../components/NavBar/Navbar";
import PlatformsList from "../components/Platforms/PlatformsList";

const HomePage = () => {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <Show above="lg">
                <GridItem area={"aside"}>
                    <GenresList />
                </GridItem>
            </Show>
            <GridItem area={"main"}>
                <VStack marginBottom="10px" spacing={4}>
                    <HeadingTitle />
                    <HStack>
                        <PlatformsList />
                        <OrderSelector />
                    </HStack>
                </VStack>
                <GameGrid />
            </GridItem>
        </Grid>
    );
};

export default HomePage;
