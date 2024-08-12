import { useQuery } from "@tanstack/react-query";
import { dataShape } from "../services/api-client";
import APIclient from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APIclient<dataShape<Platform>>("/platforms/lists/parents");

const usePlatform = () =>
    useQuery<dataShape<Platform>, Error>({
        queryKey: ["platforms"],
        queryFn: apiClient.getAll,
    });

export default usePlatform;
