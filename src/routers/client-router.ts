import { validateSchema } from "../middlewares/order-middleware";
import { Router } from "express";
import { clientSchema } from "../schemas/client-schema";
import clientController from "../controllers/client-controller";

const clientRouter = Router();

clientRouter.post("/client", validateSchema(clientSchema),clientController.createClient);

export default clientRouter;