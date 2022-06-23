import { ICreateTsSales } from '../entities/ISalesRegister';
import { IRequestTsSales } from '../entities/ISalesResponse';

export interface ICreateSales {
  createSales(sales: ICreateTsSales[]): Promise<IRequestTsSales>;
}
