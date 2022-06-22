import { IProduct } from '../entities/IProduct';
import { ICreateProduct } from '../repositories/createProduct';

export class CaseCreateProduct {
  constructor(private repository: ICreateProduct) {}
  async execute(product: IProduct): Promise<IProduct> {
    const aProducts = await this.repository.createProduct(product);
    return aProducts;
  }
}
