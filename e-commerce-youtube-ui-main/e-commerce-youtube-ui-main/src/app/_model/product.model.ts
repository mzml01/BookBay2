import { FileHandle } from "./file-handle.model";


export interface Product {
    productId: number
    productName: string,
    author: string,
    productDescription: string,
    productDiscountedPrice: number,
    productActualPrice: number,
    productImages: FileHandle[]
}