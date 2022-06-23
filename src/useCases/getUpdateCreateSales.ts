import { ISalesNew } from '../entities/ISalesNew';
import { ICreateTsSales } from '../entities/ISalesRegister';
import { IUpdateSalesId } from '../repositories/updateSalesId';

export class GetUpdateCreateSales {
  constructor(private repository: IUpdateSalesId) {}
  async execute(id: number, sales: ICreateTsSales[]): Promise<ISalesNew> {
    const updateSales = await this.repository.updateSalesId(id, sales);
    return updateSales;
  }
}
