import { IProduct } from "@/domain/models/Product";
import api from "./apiClient";

export async function postProduct(product: Omit<IProduct, "id">): Promise<IProduct> {
    const response = await api.post("/Product", product);
    return response.data;
}

export async function getProducts(): Promise<IProduct[]> {
    const response = (await api.get("/Product")).data as IProduct[];
    return response;
}

export async function getProductById(id: string): Promise<IProduct> {
    const response = (await api.get(`/Product/${id}`)).data;
    return response;
}

export async function updateProduct(id: string, product: Omit<IProduct, "id">): Promise<IProduct> {
    const response = await api.put(`/Product/${id}`, product);
    return response.data;
}

export async function deleteProduct(id: string): Promise<IProduct> {
    const response = await api.delete(`/Product/${id}`);
    return response.data;
}
