import { IProduct } from './../entities/IProduct';

export interface IProductsByID {
  ProductsID(id: number): Promise<IProduct>
};