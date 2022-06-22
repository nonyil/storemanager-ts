import { Request, Response } from 'express';

import { CaseCreateProduct } from '../useCases/caseCreateProduct';
import { CustomError } from '../utils/CustomError';

export class ControllerCreateProduct {
  constructor(private caseCreateProduct: CaseCreateProduct) {}
  async handle(request: Request, response: Response) {
    // console.log(request);
    try {
      const { name, quantity } = request.body;
      // const { body: product } = request;
      const data = await this.caseCreateProduct.execute({ name, quantity });
      return response.status(201).json(data);
    } catch (error) {
      return response
        .status((error as CustomError).status)
        .json({ message: (error as CustomError).message });
    }
  }
}
