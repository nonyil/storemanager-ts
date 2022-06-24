import { Request, Response } from 'express';

import { DeleteSales } from '../useCases/deleteSales';
import { CustomError } from '../utils/CustomError';

export class DeleteSalesController {
  constructor(private deleteSales: DeleteSales) {}
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      await this.deleteSales.execute(id);
      return response.status(204).end();
    } catch (error) {
      return response
        .status((error as CustomError).status)
        .json({ message: (error as CustomError).message });
    }
  }
}
