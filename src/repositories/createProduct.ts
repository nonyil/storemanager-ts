import { IProduct } from '../entities/IProduct';

export interface ICreateProduct {
  createProduct(product: IProduct): Promise<IProduct>;
}
