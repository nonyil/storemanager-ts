import { Request, Response } from 'express';

import { DeleteCaseProduct } from '../useCases/deleteCaseProduct';
import { CustomError } from '../utils/CustomError';

export class DeleteProductController {
  constructor(private deleteCaseProduct: DeleteCaseProduct) {}
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      await this.deleteCaseProduct.execute(Number(id));
      return response.status(204).end();
    } catch (error) {
      return response
        .status((error as CustomError).status)
        .json({ message: (error as CustomError).message });
    }
  }
}
