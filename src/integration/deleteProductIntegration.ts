import { DeleteProductController } from '../controllers/deleteProductController';
import { DeleteProductImplementation } from '../implementations/deleteProductImplementations';
import { DeleteCaseProduct } from '../useCases/deleteCaseProduct';

const delImplementation = new DeleteProductImplementation();

const delUseCase = new DeleteCaseProduct(delImplementation);

const delProductController = new DeleteProductController(delUseCase);

export default delProductController;
