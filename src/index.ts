import express, { Request, Response, json } from "express";
import "express-async-errors";
import ordersRouter from "./routers/order-router";
import { errorHandler } from "./middlewares/order-middleware";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    res.send("OK")
})

app.use(ordersRouter);
app.use(errorHandler);

app.listen(5000, () => console.log(`Server is up and running or port 5000`));