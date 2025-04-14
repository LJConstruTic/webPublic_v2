interface HttpRequestConfig {
    headers?: Record<string, string>;
    params?: Record<string, any>;
    timeout?: number;
}

export default interface HttpClient {
    get<TResponse>(url: string, config?: HttpRequestConfig): Promise<TResponse>;
    post<TResponse, TBody>(url: string, data: TBody, config?: HttpRequestConfig): Promise<TResponse>;
    put<TResponse, TBody>(url: string, data: TBody, config?: HttpRequestConfig): Promise<TResponse>;
    delete<TResponse>(url: string, config?: HttpRequestConfig): Promise<TResponse>;
}
