import {Grid, GridItem, HStack, Show, VStack} from "@chakra-ui/react";
import {useState} from "react";
import "./App.css";
import GameGrid from "./components/Games/GameGrid";
import HeadingTitle from "./components/Games/HeadingTitle";
import OrderSelector from "./components/Games/OrderSelector";
import GenresList from "./components/Genres/GenresList";
import Navbar from "./components/NavBar/Navbar";
import PlatformsList from "./components/Platforms/PlatformsList";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    order: string;
    searchInputValue: string;
    pageSize: number;
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
                    <Navbar
                        onselecet={(searchInputValue) =>
                            setGameQuery({...gameQuery, searchInputValue})
                        }
                    />
                </GridItem>
                <Show above="lg">
                    <GridItem area={"aside"}>
                        <GenresList
                            onselect={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}
                            selectedGenreId={gameQuery.genreId}
                        />
                    </GridItem>
                </Show>
                <GridItem area={"main"}>
                    <VStack marginBottom="10px" spacing={4}>
                        <HeadingTitle HeadingSelection={gameQuery} />
                        <HStack>
                            <PlatformsList
                                onSelectPlatform={(platform) =>
                                    setGameQuery({...gameQuery, platformId: platform.id})
                                }
                                selectedPlatformId={gameQuery.platformId}
                            />

                            <OrderSelector
                                selectedOrder={gameQuery.order}
                                onSelectOrder={(order) => setGameQuery({...gameQuery, order})}
                            />
                        </HStack>
                    </VStack>
                    <GameGrid gameQuery={gameQuery} />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
