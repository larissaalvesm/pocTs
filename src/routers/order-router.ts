import { validateSchema } from "../middlewares/order-middleware";
import ordersController from "../controllers/order-controller";
import { Router } from "express";
import { orderSchema, updateOrderSchema } from "../schemas/order-schema";

const ordersRouter = Router();

ordersRouter.post("/order", validateSchema(orderSchema),ordersController.createOrder);
ordersRouter.put("/order/:id", validateSchema(updateOrderSchema), ordersController.updateOrder);
ordersRouter.delete("/order/:id", ordersController.deleteOrder);
ordersRouter.get("/orders/:clientId", ordersController.getOrdersByClient);

export default ordersRouter;