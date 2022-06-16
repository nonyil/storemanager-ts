import { ISales } from './../entities/ISales';
export interface ISalesById2 {
  date: Date,
  productId: number,
  quantity: number,
}


export interface ISalesById {
  GetAllSalesId(id: number): Promise<ISalesById2[]>
};
