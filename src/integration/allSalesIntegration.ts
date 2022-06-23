import { getAllSalesControler } from '../controllers/getAllSalesControler';
import { AllSalesImplementation } from '../implementations/AllSalesImplementation';
import { GetAllSales } from '../useCases/getAllSales';

const implementations = new AllSalesImplementation();

const useCase = new GetAllSales(implementations);

const GetAllSalesControler = new getAllSalesControler(useCase);

export default GetAllSalesControler;
