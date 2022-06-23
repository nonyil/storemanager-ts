import { Request, Response } from 'express';

import { GetUpdateCreateSales } from '../useCases/getUpdateCreateSales';

export class UpdateControllerAllSales {
  constructor(private getUpdateCreateSales: GetUpdateCreateSales) {}
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const data = await this.getUpdateCreateSales.execute(Number(id), request.body);
    return response.status(200).json(data);
  }
}
