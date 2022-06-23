import { ISalesNew } from '../entities/ISalesNew';
import { ICreateTsSales } from '../entities/ISalesRegister';

export interface IUpdateSalesId {
  updateSalesId(id: number, sales: ICreateTsSales[]): Promise<ISalesNew>;
}
