import {useQuery} from "@tanstack/react-query";
import React from "react";
import APIClient, {dataShape} from "../services/api-client";

interface GameScreenshot {
    id: number;
    image: string;
}

const useGameScreenShot = (gameId: number) => {
    const apiclient = new APIClient<dataShape<GameScreenshot>>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ["screenshots", gameId],
        queryFn: apiclient.getAll,
    });
};

export default useGameScreenShot;
