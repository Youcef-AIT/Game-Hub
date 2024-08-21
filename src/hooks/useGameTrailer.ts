import React from "react";
import APIClient, {dataShape} from "../services/api-client";
import {useQuery} from "@tanstack/react-query";
import {GameTrailerType} from "../interfaces/GameTrailerType";

const useGameTrailer = (slug: string) => {
    const apiclient = new APIClient<dataShape<GameTrailerType>>(`/games/${slug}/movies`);

    return useQuery<dataShape<GameTrailerType>, Error>({
        queryKey: ["trailers", slug],
        queryFn: () => apiclient.getAll(),
    });
};

export default useGameTrailer;
