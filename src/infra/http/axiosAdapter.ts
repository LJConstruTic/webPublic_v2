import HttpClient from "./httpClient";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export type HttpRequestConfig = AxiosRequestConfig;

export default class AxiosAdapter implements HttpClient {
    private baseURL: string;
    private axiosInstance: AxiosInstance;

    constructor() {
        this.baseURL = process.env.NEXT_API_URL || "https://api-v2.ljconstrutic.com/v1";
        this.axiosInstance = axios.create({
            baseURL: this.baseURL,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    async get<TResponse>(url: string, config?: HttpRequestConfig): Promise<TResponse> {
        const response = await this.axiosInstance.get<TResponse>(url, config);
        return response.data;
    }

    async post<TResponse, TBody>(url: string, data: TBody, config?: HttpRequestConfig): Promise<TResponse> {
        const response = await this.axiosInstance.post<TResponse>(url, data, config);
        return response.data;
    }

    async put<TResponse, TBody>(url: string, data: TBody, config?: HttpRequestConfig): Promise<TResponse> {
        const response = await this.axiosInstance.put<TResponse>(url, data, config);
        return response.data;
    }

    async delete<TResponse>(url: string, config?: HttpRequestConfig): Promise<TResponse> {
        const response = await this.axiosInstance.delete<TResponse>(url, config);
        return response.data;
    }
}
