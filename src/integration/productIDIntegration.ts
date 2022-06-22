import { ProductsByIdControler } from '../controllers/productsByIdControler';
import { ProductByIDImplementation } from '../implementations/productsIDImplemetation';
import { GetProductIdCase } from '../useCases/getProductsById';

const implementation = new ProductByIDImplementation();

const useCase = new GetProductIdCase(implementation);

const productsIDControler = new ProductsByIdControler(useCase);

export default productsIDControler;
