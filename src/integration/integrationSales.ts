import { ControllerAllSales } from '../controllers/controllerAllSales';
import { ImplementationGetAllSales } from '../implementations/implementationsGetAllSales';
import { GetCreateSales } from '../useCases/getCreateSales';

const SalesImplementations = new ImplementationGetAllSales();

const SalesUseCase = new GetCreateSales(SalesImplementations);

const SalesController = new ControllerAllSales(SalesUseCase);

export default SalesController;
