import { useInfiniteQuery } from "@tanstack/react-query";

import useGameQueryStore from "../components/Games/Store";
import APIClient, { dataShape } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: [{platform: Platform}];
    metacritic: number;
    rating_top: number;
}

const apiClient = new APIClient<dataShape<Games>>("/games");

export const useGames = () => {
    const gamequery = useGameQueryStore((s) => s.gamequery);

    return useInfiniteQuery<dataShape<Games>, Error>({
        queryKey: ["games", gamequery],
        queryFn: ({pageParam = 1}) =>
            apiClient.getAll({
                params: {
                    page: pageParam,
                    genres: gamequery.genreId,
                    parent_platforms: gamequery.platformId,
                    ordering: gamequery.order,
                    search: gamequery.searchInput,
                },
            }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: 24 * 60 * 60 * 1000, // 24H
    });
};
