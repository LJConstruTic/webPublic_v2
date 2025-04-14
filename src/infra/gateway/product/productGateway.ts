import { IProduct } from "@/domain/models/Product";

export default interface ProductGateway {
    getAllProducts(): Promise<IProduct[]>;
    getProductById(id: string): Promise<IProduct>;
    createProduct(product: Omit<IProduct, "id" | "idx">): Promise<IProduct>;
    updateProduct(id: string, product: Omit<IProduct, "id" | "idx">): Promise<IProduct>;
    deleteProduct(id: string): Promise<IProduct>;
}
