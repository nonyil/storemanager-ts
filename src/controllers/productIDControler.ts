import { Request, Response } from 'express';

import { CaseProductID } from '../useCases/caseProductID';
import { CustomError } from '../utils/CustomError';

export class ControlerProductID {
  constructor(private caseProductID: CaseProductID) {}
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { body: product } = request;
      const data = await this.caseProductID.execute(Number(id), product);
      return response.status(200).json(data);
    } catch (err) {
      return response
        .status((err as CustomError).status)
        .json({ message: (err as CustomError).message });
    }
  }
}
