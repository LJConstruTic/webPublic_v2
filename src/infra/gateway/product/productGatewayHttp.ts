import { IProduct } from "@/domain/models/Product";
import ProductGateway from "./productGateway";
import HttpClient from "@/infra/http/httpClient";

export default class ProductGatewayHttp implements ProductGateway {
    constructor(readonly httpClient: HttpClient) {}
    async getAllProducts(): Promise<IProduct[]> {
        const response = (await this.httpClient.get("/Product")) as { size: number; items: IProduct[] };
        return response?.items;
    }
    async getProductById(id: string): Promise<any> {
        const response = await this.httpClient.get(`/Product/${Number(id)}`);
        return response;
    }
    async createProduct(product: Omit<IProduct, "id" | "idx">): Promise<IProduct> {
        const response = await this.httpClient.post("/Product", product);
        return response as IProduct;
    }
    updateProduct(id: string, product: Omit<IProduct, "id" | "idx">): Promise<IProduct> {
        throw new Error("Method not implemented.");
    }
    async deleteProduct(id: string): Promise<IProduct> {
        const response = await this.httpClient.delete(`/Product/${id}`);
        return response as IProduct;
    }
}
