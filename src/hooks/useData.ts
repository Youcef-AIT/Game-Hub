import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface dataShape<T> {
    count: number;
    results: T[];
}

export const useData = <T>(endPoint: string) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<dataShape<T>>(endPoint, { signal: controller.signal })
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
    }, []);

    return { data, error, isLoading };
};
