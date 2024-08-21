import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Games } from "./useGames";

const useGame = (slug: string) => {
    const apiClient = new APIClient<Games>("/games");

    return useQuery<Games, Error>({
        queryKey: ["game", slug],
        queryFn: () => apiClient.getById(slug),
    });
};

export default useGame;
