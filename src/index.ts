import express from 'express';
import routeProducts from './routes/productsRouter.routes'
import routeSales from './routes/salesRouter.routes';

require('dotenv').config();

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(routeProducts);
app.use(routeSales);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
