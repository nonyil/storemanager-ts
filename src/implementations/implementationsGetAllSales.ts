import { ResultSetHeader } from 'mysql2';

import { ICreateTsSales } from '../entities/ISalesRegister';
import { IRequestTsSales } from '../entities/ISalesResponse';
import connection from '../helpers/conection';
import { ICreateSales } from '../repositories/createSales';

export class ImplementationGetAllSales implements ICreateSales {
  async insertSingleSale(sales: ICreateTsSales, id: number): Promise<void> {
    const query_update =
      'UPDATE StoreManager.products SET quantity = quantity - ? WHERE id = ?';
    const query_insert =
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)';
    await connection.execute<ResultSetHeader>(query_update, [
      sales.quantity,
      sales.productId,
    ]);

    await connection.execute<ResultSetHeader>(query_insert, [
      id,
      sales.productId,
      sales.quantity,
    ]);
    // const functions = [insertUpdateSale, insertNewSale];
    // await Promise.all(functions);
  }

  async createSales(sales: ICreateTsSales[]): Promise<IRequestTsSales> {
    const insertionSalesQuery =
      'INSERT INTO StoreManager.sales (date) VALUES (CURRENT_TIMESTAMP())';
    const [{ insertId }] = await connection.execute<ResultSetHeader>(insertionSalesQuery);
    await Promise.all(sales.map(async cafe => this.insertSingleSale(cafe, insertId)));
    const ACABO = {
      id: Number(insertId),
      itemsSold: [...sales],
    };
    return ACABO as IRequestTsSales;
  }
}
