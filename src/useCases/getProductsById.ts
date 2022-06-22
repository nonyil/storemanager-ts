import { IProduct } from '../entities/IProduct';
import { IProductsByID } from '../repositories/getProductsByID';
import { CustomError } from '../utils/CustomError';

export class GetProductIdCase {
  constructor(private repository: IProductsByID) {}
  async execute(id: number): Promise<IProduct> {
    const productsById = await this.repository.ProductsID(id);

    if (!productsById) {
      throw new CustomError(404, 'Product not found');
    }
    return productsById;
  }
}
