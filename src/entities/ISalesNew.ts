export interface ISalesNew {
  saleId: number;
  itemUpdated: Array<{
    productId: number;
    quantity: number;
  }>;
}
