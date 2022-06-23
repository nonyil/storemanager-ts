import { UpdateControllerAllSales } from '../controllers/updateControllerAllSales';
import { UpdateImplementationGetAllSales } from '../implementations/updateImplementationGetAllSales';
import { GetUpdateCreateSales } from '../useCases/getUpdateCreateSales';

const updateSales = new UpdateImplementationGetAllSales();
const updateUseCase = new GetUpdateCreateSales(updateSales);
const updateSalesController = new UpdateControllerAllSales(updateUseCase);

export default updateSalesController;
