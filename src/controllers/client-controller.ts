import { Request, Response } from "express";
import httpStatus from "http-status";
import { CreateClient } from "../protocols/client-protocol";
import clientService from "../services/client-service";

async function createClient(req: Request, res: Response){
    const client = req.body as CreateClient;
    const clientId = await clientService.createClient(client);
    res.status(httpStatus.CREATED).send({"clientId": clientId});
}


const clientController = {
    createClient 
}

export default clientController;