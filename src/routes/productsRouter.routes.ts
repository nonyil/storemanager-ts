import { Router } from 'express';

import delProductController from '../integration/deleteProductIntegration';
import getControler from '../integration/getAllIntegration';
import getProductControler from '../integration/integrationCreateProduct';
import pIDController from '../integration/integrationProductID';
import productsIDControler from '../integration/productIDIntegration';

const routeProducts = Router();

routeProducts.get('/products', async (request, response) => {
  return getControler.handle(request, response);
});

routeProducts.get('/products/:id', async (request, response) => {
  return productsIDControler.handle(request, response);
});

routeProducts.post('/products', async (request, response) => {
  return getProductControler.handle(request, response);
});

routeProducts.put('/products/:id', async (request, response) => {
  return pIDController.handle(request, response);
});

routeProducts.delete('/products/:id', async (request, response) => {
  return delProductController.handle(request, response);
});

export default routeProducts;
