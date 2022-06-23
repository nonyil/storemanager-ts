import { Request, Response } from 'express';

import { GetCreateSales } from '../useCases/getCreateSales';

export class ControllerAllSales {
  constructor(private getCreateSales: GetCreateSales) {}
  async handle(request: Request, response: Response) {
    const data = await this.getCreateSales.execute(request.body);
    return response.status(201).json(data);
  }
}
