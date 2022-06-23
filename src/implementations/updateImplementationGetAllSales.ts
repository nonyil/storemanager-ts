import { ResultSetHeader } from 'mysql2';

import { ISalesNew } from '../entities/ISalesNew';
import { ICreateTsSales } from '../entities/ISalesRegister';
import connection from '../helpers/conection';
import { IUpdateSalesId } from '../repositories/updateSalesId';

export class UpdateImplementationGetAllSales implements IUpdateSalesId {
  async updateSalesId(id: number, sales: ICreateTsSales[]): Promise<ISalesNew> {
    const query =
      'UPDATE StoreManager.sales_products SET quantity = ? WHERE sale_id = ? AND product_id = ?';
    const query2 =
      'UPDATE StoreManager.products SET quantity = quantity - ? WHERE id = ?';
    await Promise.all(
      sales.map(async sale => {
        await connection.execute<ResultSetHeader>(query, [
          sale.quantity,
          id,
          sale.productId,
        ]);
      }),
    );

    await Promise.all(
      sales.map(async sale => {
        await connection.execute<ResultSetHeader>(query2, [
          sale.quantity,
          sale.productId,
        ]);
      }),
    );

    return {
      saleId: Number(id),
      itemUpdated: sales,
    };
  }
}
