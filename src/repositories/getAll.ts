import { IProduct } from './../entities/IProduct';

export interface IGetAll {
  getAll(): Promise<IProduct[]>;
};