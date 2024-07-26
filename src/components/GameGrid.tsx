import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Games {
    id: number;
    name: string;
}

interface dataShape {
    count: number;
    results: Games[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<dataShape>("/games")
            .then((res) => setGames(res.data.results))
            .catch((error) => setError(error.message));
    },[]);

    return (
        <>
            {error && { error }}
            <ul>
                {games.map((game) => {
                    return <li key={game.id}>{game.name}</li>;
                })}
            </ul>
        </>
    );
};

export default GameGrid;
