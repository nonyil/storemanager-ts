import { Request, Response } from 'express';

import { GetSalesById } from '../useCases/getSalesById';
import { CustomError } from '../utils/CustomError';

export class SalesByIdControler {
  constructor(private getSalesById: GetSalesById) {}
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const data = await this.getSalesById.execute(Number(id));
      return response.status(200).json(data);
    } catch (err) {
      return response
        .status((err as CustomError).status)
        .json({ message: (err as CustomError).message });
    }
  }
}
