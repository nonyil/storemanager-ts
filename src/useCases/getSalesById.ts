import { ISalesById, ISalesById2 } from './../repositories/getSalesById';
import { CustomError } from './../utils/CustomError';
import { ISales } from '../entities/ISales';

export class GetSalesById {
  constructor(private repository: ISalesById) {

  }
  async execute(id: number): Promise<ISalesById2[]> {
    const salesById = await this.repository.GetAllSalesId(id);
    if(!salesById.length) {
      throw new CustomError(404, "Sale not found"); 
    }
    return salesById;
  }
};
