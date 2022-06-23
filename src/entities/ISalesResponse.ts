export interface IRequestTsSales {
  id: number;
  itemsSold: Array<{
    productId: number;
    quantity: number;
  }>;
}
