import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { dataShape } from "../services/api-client";
import { Platform } from "./usePlatforms";
import { first } from "lodash";

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
    useInfiniteQuery<dataShape<Games>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.getAll({
                params: {
                    page: pageParam,
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.order,
                    search: gameQuery.searchInputValue,
                },
            }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: 24 * 60 * 60 * 1000, // 24H
    });
