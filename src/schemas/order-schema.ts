import Joi from "joi";
import { CreateOrder } from "../protocols/order-protocol";

export const orderSchema = Joi.object<CreateOrder>({
    clientId: Joi.number().required(),
    product: Joi.string().required()
})

export const updateOrderSchema = Joi.object({
    status: Joi.string().valid('Preparando pedido', 'Pedido enviado').required()
})


