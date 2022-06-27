import { Router } from 'express';

import GetAllSalesControler from '../integration/allSalesIntegration';
import delSalesController from '../integration/deleteSalesIntegration';
import SalesController from '../integration/integrationSales';
import salesByIdControler from '../integration/salesIDIntegration';
import updateSalesController from '../integration/updateSalesIntegration';
import { salesValidation } from '../middlewares/salesValidation';

const routeSales = Router();

routeSales.get('/sales', (request, response) => {
  return GetAllSalesControler.handle(request, response);
});

routeSales.get('/sales/:id', (request, response) => {
  return salesByIdControler.handle(request, response);
});

routeSales.post('/sales/', salesValidation.validate, (request, response) => {
  return SalesController.handle(request, response);
});

routeSales.put('/sales/:id', salesValidation.validate, (request, response) => {
  return updateSalesController.handle(request, response);
});

routeSales.delete('/sales/:id', (request, response) => {
  return delSalesController.handle(request, response);
});

export default routeSales;
