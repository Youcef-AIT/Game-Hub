import { useContext, useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { useData } from "./useData";
import { genre } from "./useGeneres";

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

export const useGames = (selectedGenre: genre | null, selectedPlatform: Platform | null) =>
    useData<Games>(
        "/games",
        {
            params: {
                genres: selectedGenre?.id,
                parent_platforms: selectedPlatform?.id,
            },
        },
        [selectedGenre?.id, selectedPlatform?.id]
    );
