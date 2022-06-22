import { ControllerCreateProduct } from '../controllers/controllerCreateProduct';
import { ImplementationCreateProduct } from '../implementations/implementationCreateProduct';
import { CaseCreateProduct } from '../useCases/caseCreateProduct';

const implementation = new ImplementationCreateProduct();

const useCase = new CaseCreateProduct(implementation);

const getProductControler = new ControllerCreateProduct(useCase);

export default getProductControler;
