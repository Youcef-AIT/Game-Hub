import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { dataShape } from "../services/api-client";

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
    rating_top: number;
}

const apiClient = new APIClient<dataShape<Games>>("/games");

export const useGames = (gameQuery: GameQuery) =>
    useQuery<dataShape<Games>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: () =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.order,
                    search: gameQuery.searchInputValue,
                },
            }),
    });
