import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Games {
    id: number;
    name: string;
    background_image: string;
}

interface dataShape {
    count: number;
    results: Games[];
}

export const useGames = () => {
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<dataShape>("/games", { signal: controller.signal })
            .then((res) => setGames(res.data.results))
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error);
            });
        return () => controller.abort();
    }, []);

    return { games, error };
};
