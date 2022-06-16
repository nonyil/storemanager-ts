import { AllSalesImplementation } from "../implementations/AllSalesImplementation";
import { GetAllSales } from "../useCases/getAllSales";
import { getAllSalesControler } from "../controllers/getAllSalesControler";

const implementations = new AllSalesImplementation();

const useCase = new GetAllSales(implementations);

const GetAllSalesControler = new getAllSalesControler(useCase);

export default GetAllSalesControler;