import { ResultSetHeader, RowDataPacket } from 'mysql2';

import { IProduct } from '../entities/IProduct';
import connection from '../helpers/conection';
import { ICreateProduct } from '../repositories/createProduct';
import { CustomError } from '../utils/CustomError';

const error = 'SELECT * from StoreManager.products WHERE name = ?';
// interface IDataSQL extends RowDataPacket, IProduct {}
export class ImplementationCreateProduct implements ICreateProduct {
  async createProduct(product: IProduct): Promise<IProduct> {
    const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';
    const [doesExist] = await connection.execute<RowDataPacket[]>(error, [product.name]);
    if (doesExist.length) {
      throw new CustomError(409, 'Product already exists');
    }
    const [products] = await connection.execute<ResultSetHeader>(query, [
      product.name,
      product.quantity,
    ]);
    const finalProduct = { id: products.insertId, ...product };
    return finalProduct;
  }
}
