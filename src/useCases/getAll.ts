import { IProduct } from './../entities/IProduct';
import { IGetAll } from './../repositories/getAll';

export class GetAllUseCase {
  constructor(private repository: IGetAll) {
  
  }
  async execute(): Promise<IProduct[]> {
    const aProducts = await this.repository.getAll();
    return aProducts;
  }
};