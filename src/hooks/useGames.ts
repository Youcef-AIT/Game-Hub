import { useContext, useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: [{ platform: Platform }];
    metacritic: number;
}

interface dataShape {
    count: number;
    results: Games[];
}

export const useGames = () => {
    const [isLoading, setLoading] = useState(false);
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<dataShape>("/games", { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results);
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error);
                setLoading(false);
            });
        return () => controller.abort();
    }, []);

    return { games, error, isLoading };
};
