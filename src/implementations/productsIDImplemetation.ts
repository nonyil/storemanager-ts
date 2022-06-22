import { RowDataPacket } from 'mysql2';

import { IProduct } from '../entities/IProduct';
import connection from '../helpers/conection';
import { IProductsByID } from '../repositories/getProductsByID';

interface IDataSQL extends RowDataPacket, IProduct {}
export class ProductByIDImplementation implements IProductsByID {
  async ProductsID(id: number): Promise<IProduct> {
    const query = await 'select * from products where id = ?';
    const [products] = await connection.execute<IDataSQL[]>(query, [id]);
    return products[0];
  }
}
