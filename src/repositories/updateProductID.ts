import { IProduct } from '../entities/IProduct';

export interface IProductID {
  ProductID(id: number, product: IProduct): Promise<IProduct>;
}
