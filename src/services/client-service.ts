import { CreateClient } from "../protocols/client-protocol";
import clientRepository from "../repositories/client-repository";


async function createClient(client: CreateClient){
    const clientId =  await clientRepository.createClient(client);
    return clientId;
}


const clientService = {
    createClient
}

export default clientService;