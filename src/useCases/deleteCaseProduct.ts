import { IDeleteProduct } from '../repositories/deleteRespositoryProduct';

export class DeleteCaseProduct {
  constructor(private repository: IDeleteProduct) {}
  async execute(id: number): Promise<void> {
    await this.repository.DeleteProduct(Number(id));
  }
}
