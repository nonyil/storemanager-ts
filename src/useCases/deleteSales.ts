import { IDeleteSaleRepository } from '../repositories/deleteSalesRepository';

export class DeleteSales {
  constructor(private repository: IDeleteSaleRepository) {}
  async execute(id: string): Promise<void> {
    await this.repository.DeleteRepository(id);
  }
}
