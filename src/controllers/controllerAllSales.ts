import { Request, Response } from 'express';

import { GetCreateSales } from '../useCases/getCreateSales';
import { CustomError } from '../utils/CustomError';

export class ControllerAllSales {
  constructor(private getCreateSales: GetCreateSales) {}
  async handle(request: Request, response: Response) {
    try {
      const data = await this.getCreateSales.execute(request.body);
      return response.status(201).json(data);
    } catch (err) {
      return response
        .status((err as CustomError).status)
        .json({ message: (err as CustomError).message });
    }
  }
}
