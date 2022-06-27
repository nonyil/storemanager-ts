import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';

import { IProduct } from '../entities/IProduct';
import { NAME_REQUIRED, productSchema, QTY_REQUIRED } from '../Joi/productSchema';

class ProductValidation {
  constructor(private schema: ObjectSchema<IProduct>) {}

  validate(request: Request, response: Response, next: NextFunction) {
    const { body: Pinformations } = request;

    const { error } = productSchema.validate(Pinformations);

    if (!error) return next();

    const { message } = error;

    if (message === NAME_REQUIRED || message === QTY_REQUIRED)
      return response.status(400).json({ message });

    return response.status(422).json({ message });
  }
}

export const productValidation = new ProductValidation(productSchema);
