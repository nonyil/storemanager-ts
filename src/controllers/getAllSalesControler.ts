import { Request, Response } from 'express';

import { GetAllSales } from '../useCases/getAllSales';

export class getAllSalesControler {
  constructor(private getAllSales: GetAllSales) {}
  async handle(_request: Request, response: Response) {
    const data = await this.getAllSales.execute();
    return response.status(200).json(data);
  }
}
