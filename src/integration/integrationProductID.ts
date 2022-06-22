import { ControlerProductID } from '../controllers/productIDControler';
import { ImplementationProductID } from '../implementations/implementationProductID';
import { CaseProductID } from '../useCases/caseProductID';

const pIDImplementation = new ImplementationProductID();

const pIDUseCase = new CaseProductID(pIDImplementation);

const pIDController = new ControlerProductID(pIDUseCase);

export default pIDController;
