import ordersRepository from "../repositories/order-repository";
import { CreateOrder } from "../protocols/order-protocol";

async function createOrder(order: CreateOrder){
    const client = await ordersRepository.getClientById(order.clientId);

    if(!client) {
        throw{
            type:"NotFound",
            message: "Cliente não cadastrado."
        }
    }

    return await ordersRepository.createOrder(order);
}

async function updateOrder(id: number, status: string){
    const order = await ordersRepository.getOrderById(id);

    if(!order) {
        throw{
            type:"NotFound",
            message: "Pedido não existe."
        }
    }

    return await ordersRepository.updateOrder(id, status);
 }

 async function deleteOrder(id: number){
    const order = await ordersRepository.getOrderById(id);

    if(!order) {
        throw{
            type:"NotFound",
            message: "Pedido não existe."
        }
    }

    return await ordersRepository.deleteOrder(id);
 }

 async function getOrdersByClient(clientId: number){
    const client = await ordersRepository.getClientById(clientId);

    if(!client) {
        throw{
            type:"NotFound",
            message: "Cliente não cadastrado."
        }
    }

    const orders =  await ordersRepository.getOrdersByClient(clientId);

    if(orders.length === 0){
         throw{
            type:"NotFound",
            message: "Não há pedidos para este cliente."
        }
    }

    return orders;
 }

const ordersService = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrdersByClient
}

export default ordersService;