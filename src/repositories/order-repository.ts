import { connection } from "../database/database-connection";
import { Client, CreateOrder, Order } from "../protocols/order-protocol";

async function createOrder(order: CreateOrder){

    return await connection.query(`INSERT INTO orders (client_id, product, status) VALUES ($1, $2, $3);`,[order.clientId, order.product, "Pedido recebido"]);
}

async function updateOrder(id: number, status: string){
   await connection.query(`UPDATE orders SET status=$1 WHERE id=$2;`,[status, id]);
}

async function deleteOrder(id: number){
    await connection.query(`DELETE FROM orders WHERE id=$1;`,[id]);
}

async function getOrdersByClient(id: number){
    const result =  await connection.query(`SELECT orders.*, clients.name  
    FROM orders
    JOIN clients ON orders.client_id = clients.id
    WHERE client_id=$1;`,[id]);
    return result.rows;
}

async function getOrderById(id: number){
    const result =  await connection.query<Order>(`SELECT * FROM orders WHERE id=$1;`, [id]);

    return result.rows[0];
}

async function getClientById(id: number){
    const result =  await connection.query<Client>(`SELECT * FROM clients WHERE id=$1;`, [id]);

    return result.rows[0];
}

const ordersRepository = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrdersByClient,
    getOrderById,
    getClientById
}

export default ordersRepository;