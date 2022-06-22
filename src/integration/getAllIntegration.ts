import { getAllControler } from '../controllers/getAllControler';
import { GetAllImplementations } from '../implementations/getAllImplementations';
import { GetAllUseCase } from '../useCases/getAll';

const implementations = new GetAllImplementations();

const useCase = new GetAllUseCase(implementations);

const getControler = new getAllControler(useCase);

export default getControler;
