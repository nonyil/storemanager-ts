import { ICreateTsSales } from '../entities/ISalesRegister';
import { IRequestTsSales } from '../entities/ISalesResponse';
import { ICreateSales } from '../repositories/createSales';

export class GetCreateSales {
  constructor(private repository: ICreateSales) {}
  async execute(sales: ICreateTsSales[]): Promise<IRequestTsSales> {
    const aSales = await this.repository.createSales(sales);
    return aSales;
  }
}
