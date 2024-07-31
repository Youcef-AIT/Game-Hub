import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface dataShape<T> {
    count: number;
    results: T[];
}

export const useData = <T>(endPoint: string, requestConfigue?: AxiosRequestConfig, deps?: any[]) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");

    useEffect(
        () => {
            const controller = new AbortController();
            setLoading(true);
            apiClient
                .get<dataShape<T>>(endPoint, { signal: controller.signal, ...requestConfigue })
                .then((res) => {
                    setData(res.data.results);
                    setLoading(false);
                })
                .catch((error) => {
                    if (error instanceof CanceledError) return;
                    setError(error);
                    setLoading(false);
                });
            return () => controller.abort();
        },
        deps ? [...deps] : []
    );

    return { data, error, isLoading };
};
