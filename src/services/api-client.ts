import axios, {AxiosRequestConfig} from "axios";
import {number} from "prop-types";

export interface dataShape<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

const axiosRequest = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "99c14d2107224e9f8fbf9c9d265b7af7",
    },
});

class APIClient<T> {
    endPoint: string;

    constructor(endPoint: string) {
        this.endPoint = endPoint;
    }

    getAll = (axiosParams?: AxiosRequestConfig) => {
        return axiosRequest.get<T>(this.endPoint, axiosParams).then((res) => res.data);
    };

    getById = (id: string) => {
        return axiosRequest.get(`${this.endPoint}/${id}`).then((res) => res.data);
    };
}

export default APIClient;
