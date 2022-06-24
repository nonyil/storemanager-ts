import { RowDataPacket, ResultSetHeader } from 'mysql2';

import connection from '../helpers/conection';
import { IDeleteSaleRepository } from '../repositories/deleteSalesRepository';
import { CustomError } from '../utils/CustomError';

export class DeleteSalesImplementations implements IDeleteSaleRepository {
  async DeleteRepository(id: string): Promise<void> {
    const query = 'SELECT * FROM StoreManager.sales_products WHERE sale_id = ?';
    const query2 = 'DELETE from StoreManager.sales_products WHERE sale_id =  ?';
    const query3 =
      'UPDATE StoreManager.products SET quantity = quantity + ? WHERE id = ?';
    const [doesExist] = await connection.execute<RowDataPacket[]>(query, [id]);
    if (doesExist.length === 0) {
      throw new CustomError(404, 'Sale not found');
    }
    await connection.execute<ResultSetHeader>(query2, [id]);

    doesExist.map(async sale => {
      await connection.execute<ResultSetHeader>(query3, [sale.quantity, sale.product_id]);
    });
  }
}
