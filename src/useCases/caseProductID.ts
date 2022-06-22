import { IProduct } from '../entities/IProduct';
import { IProductID } from '../repositories/updateProductID';

export class CaseProductID {
  constructor(private repository: IProductID) {}
  async execute(id: number, product: IProduct): Promise<IProduct> {
    const productID = await this.repository.ProductID(id, product);
    return productID;
  }
}
