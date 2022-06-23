import express, { Router } from 'express';
import GetAllSalesControler from '../integration/allSalesIntegration';
import SalesController from '../integration/integrationSales';
import salesByIdControler from '../integration/salesIDIntegration';
import updateSalesController from '../integration/updateSalesIntegration';

const routeSales = Router();

routeSales.get('/sales', (request, response) => {
  return GetAllSalesControler.handle(request, response);
});

routeSales.get('/sales/:id', (request, response) => {
  return salesByIdControler.handle(request, response);
});

routeSales.post('/sales/', (request, response) => {
  return SalesController.handle(request, response);
});

routeSales.put('/sales/:id', (request, response) => {
  return updateSalesController.handle(request, response);
});

export default routeSales;
