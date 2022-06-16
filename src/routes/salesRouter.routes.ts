import express, { Router } from 'express';
import GetAllSalesControler from '../integration/allSalesIntegration';
import salesByIdControler from '../integration/salesIDIntegration';

const routeSales = Router();

routeSales.get('/sales', (request, response) => {
  return GetAllSalesControler.handle(request, response);
});

routeSales.get('/sales/:id', (request, response) => {
  return salesByIdControler.handle(request, response);
});

export default routeSales;
