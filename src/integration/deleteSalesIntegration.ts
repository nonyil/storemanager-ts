import { DeleteSalesController } from '../controllers/deleteSalesController';
import { DeleteSalesImplementations } from '../implementations/deleteSalesImplementations';
import { DeleteSales } from '../useCases/deleteSales';

const delSaleImplementations = new DeleteSalesImplementations();

const delSalesUseCase = new DeleteSales(delSaleImplementations);

const delSalesController = new DeleteSalesController(delSalesUseCase);

export default delSalesController;
