import { ISales } from './../entities/ISales';

export interface IGetAllSales {
  getAllSales(): Promise<ISales[]>;
};