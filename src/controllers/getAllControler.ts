import { Request, Response } from 'express';
import { GetAllUseCase } from './../useCases/getAll';

export class getAllControler {
  constructor(private getAllUseCase:GetAllUseCase) {
   
  }
  async handle(_request: Request, response: Response) {
    const data = await this.getAllUseCase.execute()
    return response.status(200).json(data)
  };
};