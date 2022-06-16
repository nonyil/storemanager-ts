import { RowDataPacket } from 'mysql2';
import { IGetAllSales } from './../repositories/getAllSales';
import { ISales } from '../entities/ISales';
import connection from '../helpers/conection';

interface IDataSQL extends RowDataPacket, ISales {}

export class AllSalesImplementation implements IGetAllSales {
  async getAllSales(): Promise<ISales[]> {
    const query = 'SELECT sale_id, date, product_id, quantity FROM sales AS SALES INNER JOIN sales_products AS SALES_PRODUCTS ON SALES_PRODUCTS.sale_id = SALES.id ORDER BY sale_id ASC, product_id ASC';
    const [result] = await connection.execute<IDataSQL[]>(query);
    console.log(result);
    
    return this.format(result);

  };
  
  format(result: IDataSQL[]): ISales[] {
    return result.map(row => ({
      saleId: row.sale_id,
      date: row.date,
      productId: row.product_id,
      quantity: row.quantity,
    }));
  };
};