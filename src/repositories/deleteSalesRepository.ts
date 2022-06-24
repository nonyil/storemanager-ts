export interface IDeleteSaleRepository {
  DeleteRepository(id: string): Promise<void>;
}
