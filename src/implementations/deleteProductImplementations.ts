import { RowDataPacket, ResultSetHeader } from 'mysql2';

import connection from '../helpers/conection';
import { IDeleteProduct } from '../repositories/deleteRespositoryProduct';
import { CustomError } from '../utils/CustomError';

export class DeleteProductImplementation implements IDeleteProduct {
  async DeleteProduct(id: number): Promise<void> {
    const query2 = 'SELECT * from products WHERE id = ?';
    const query = 'DELETE from products WHERE id = ?';
    const [doesExist] = await connection.execute<RowDataPacket[]>(query2, [id]);
    if (doesExist.length === 0) {
      throw new CustomError(404, 'Product not found');
    }
    await connection.execute<ResultSetHeader>(query, [id]);
  }
}
