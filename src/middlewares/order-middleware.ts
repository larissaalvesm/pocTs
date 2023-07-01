import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../protocols/order-protocol';
import { ObjectSchema } from 'joi';
import httpStatus from 'http-status';

export function validateSchema(schema: ObjectSchema) {
    
return (req: Request, res: Response, next: NextFunction) => {
const validation = schema.validate(req.body, { abortEarly: false });
if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);
    return res.status(httpStatus.BAD_REQUEST).send(errors);
  }
  
  next();
};
}

export function errorHandler(error: CustomError, req: Request, res: Response, next: NextFunction) {
	if (error.type === "NotFound") {
    console.log(error.message);
    return res.sendStatus(404);
  }

	return res.sendStatus(500);
}