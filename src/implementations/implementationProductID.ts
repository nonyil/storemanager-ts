import { ResultSetHeader, RowDataPacket } from 'mysql2';

import { IProduct } from '../entities/IProduct';
import connection from '../helpers/conection';
import { IProductID } from '../repositories/updateProductID';
import { CustomError } from '../utils/CustomError';

const error = 'SELECT * from StoreManager.products WHERE id = ?';

// interface ResultSetHeader extends RowDataPacket, IProduct {}
export class ImplementationProductID implements IProductID {
  async ProductID(id: number, product: IProduct): Promise<IProduct> {
    const query = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?';
    const [doesExist] = await connection.execute<RowDataPacket[]>(error, [id]);
    if (!doesExist.length) {
      throw new CustomError(404, 'Product not found');
    }
    await connection.execute<ResultSetHeader>(query, [
      id,
      product.name,
      product.quantity,
    ]);
    return { id: Number(id), ...product };
  }
}
