export interface IDeleteProduct {
  DeleteProduct(id: number): Promise<void>;
}
