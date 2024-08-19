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
            
        </>
    );
}

export default App;
