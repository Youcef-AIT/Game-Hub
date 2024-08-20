import React from "react";
import APIClient from "../services/api-client";
import {Games} from "./useGames";
import {useQuery} from "@tanstack/react-query";

const useGame = (slug: string) => {
    const apiClient = new APIClient<Games>("/games");

    return useQuery<Games, Error>({
        queryKey: ["game", slug],
        queryFn: () => apiClient.getById(slug),
    });
};

export default useGame;
