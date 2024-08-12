import { useQuery } from "@tanstack/react-query";
import { dataShape } from "../services/api-client";
import APIclient from "../services/api-client";

export interface genre {
    image_background: string;
    id: number;
    name: string;
}

const apiClient = new APIclient<dataShape<genre>>("/genres");

export const useGenres = () =>
    useQuery<dataShape<genre>, Error>({
        queryKey: ["genre"],
        queryFn: () => apiClient.getAll(),
    });
