import { NextFunction, Request, Response } from 'express';
import { ArraySchema } from 'joi';

import { QTY_REQUIRED, PRODUCT_ID_REQUIRED, salesSchema } from '../Joi/saleSchema';

class SalesValidation {
  constructor(private schema: ArraySchema) {}

  validate(request: Request, response: Response, next: NextFunction) {
    const { body: saleInformations } = request;

    const { error } = salesSchema.validate(saleInformations);

    if (!error) return next();

    const { message } = error;

    if (message === PRODUCT_ID_REQUIRED || message === QTY_REQUIRED)
      return response.status(400).json({ message });

    return response.status(422).json({ message });
  }
}

export const salesValidation = new SalesValidation(salesSchema);
