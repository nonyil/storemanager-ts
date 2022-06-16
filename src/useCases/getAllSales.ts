import { ISales } from './../entities/ISales';
import { IGetAllSales } from './../repositories/getAllSales';

export class GetAllSales {
  constructor(private repository: IGetAllSales) {
  
  }
  async execute(): Promise<ISales[]> {
    const aProducts = await this.repository.getAllSales();
    return aProducts;
  }
};