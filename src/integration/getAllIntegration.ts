import { GetAllImplementations } from "../implementations/getAllImplementations";
import { GetAllUseCase } from "../useCases/getAll";
import { getAllControler } from "../controllers/getAllControler";

const implementations = new GetAllImplementations();

const useCase = new GetAllUseCase(implementations);

const getControler = new getAllControler(useCase);

export default getControler;