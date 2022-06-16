import express, { response, Router } from 'express';
import getControler from '../integration/getAllIntegration';
import productsIDControler from '../integration/productIDIntegration';

const routeProducts = Router();

routeProducts.get('/products', async (request, response) => {
  return getControler.handle(request, response);
});

routeProducts.get('/products/:id', async (request, response) => {
  return productsIDControler.handle(request, response);
});

export default routeProducts;
