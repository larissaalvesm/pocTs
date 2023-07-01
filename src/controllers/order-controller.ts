import { Request, Response } from "express";
import httpStatus from "http-status";
import { CreateOrder, UpdateOrder } from "../protocols/order-protocol";
import ordersService from "../services/order-service";

async function createOrder(req: Request, res: Response){
    const order = req.body as CreateOrder;
    const orderId = await ordersService.createOrder(order);
    res.status(httpStatus.CREATED).send({"orderId": orderId})
    
}

async function updateOrder(req: Request, res: Response){
    const id = req.params.id as string;
    const {status} = req.body as UpdateOrder;
    const idNumber = parseInt(id);
    await ordersService.updateOrder(idNumber, status);
    res.sendStatus(httpStatus.OK)
}

async function deleteOrder(req: Request, res: Response){
    const id = req.params.id as string;
    const idNumber = parseInt(id);
    await ordersService.deleteOrder(idNumber);
    res.sendStatus(httpStatus.OK)
}

async function getOrdersByClient(req: Request, res: Response){
    const clientId = req.params.clientId as string;
    const idNumber = parseInt(clientId);
    const orders = await ordersService.getOrdersByClient(idNumber);
    res.send(orders);
}

const ordersController = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrdersByClient
}

export default ordersController;