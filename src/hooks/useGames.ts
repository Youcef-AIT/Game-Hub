import { useContext, useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { useData } from "./useData";
import { genre } from "./useGeneres";
import { GameQuery } from "../App";

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

export const useGames = (gameQuery: GameQuery) =>
    useData<Games>(
        "/games",
        {
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.order,
                search: gameQuery.searchInputValue,
            },
        },
        [gameQuery]
    );
