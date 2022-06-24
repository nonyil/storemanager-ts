import { IProduct } from '../entities/IProduct';
import connection from '../helpers/conection';
import { IGetAll } from '../repositories/getAll';

export class GetAllImplementations implements IGetAll {
  async getAll(): Promise<IProduct[]> {
    const query = 'select * from products';
    const [result] = await connection.execute(query);
    return result as IProduct[];
  }
}
