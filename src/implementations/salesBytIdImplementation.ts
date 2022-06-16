import { ISales } from './../entities/ISales';
import { ISalesById, ISalesById2 } from './../repositories/getSalesById';
import { RowDataPacket } from 'mysql2';
import connection from '../helpers/conection';

interface IDataSQL extends RowDataPacket, ISalesById2 {}
export class SalesByIdImplementation implements ISalesById {
  async GetAllSalesId(id: number): Promise<ISalesById2[]> {
    const query = await 'SELECT sale_id, date, product_id, quantity FROM sales AS SALES INNER JOIN sales_products AS SALES_PRODUCTS ON SALES_PRODUCTS.sale_id = SALES.id where id = ? ORDER BY sale_id ASC, product_id ASC'
    const [products] = await connection.execute<IDataSQL[]>(query, [id]);
    return this.format(products);
  };
  format(result: IDataSQL[]): ISalesById2[] {
    return result.map(row => ({
      date: row.date,
      productId: row.product_id,
      quantity: row.quantity,
    }));
  };
};
