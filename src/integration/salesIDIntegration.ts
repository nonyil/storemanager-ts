import { SalesByIdControler } from './../controllers/salesByIdControlers';
import { GetSalesById } from './../useCases/getSalesById';
import { SalesByIdImplementation } from "../implementations/salesBytIdImplementation";

const implementation = new SalesByIdImplementation();

const useCase = new GetSalesById(implementation);

const salesByIdControler = new SalesByIdControler(useCase);

export default salesByIdControler;