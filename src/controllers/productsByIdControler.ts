import { CustomError } from './../utils/CustomError';
import { Request, Response } from 'express';
import { GetProductIdCase } from './../useCases/getProductsById';

export class ProductsByIdControler {
  constructor(private getProductIdCase: GetProductIdCase) {

  }
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const data = await this.getProductIdCase.execute(Number(id));
      return response.status(200).json(data);
    } catch(err) {
      return response
      .status((err as CustomError).status)
      .json({ message: (err as CustomError).message });
    }
  }
};