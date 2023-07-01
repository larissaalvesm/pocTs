import { CreateClient } from "../protocols/client-protocol";
import { connection } from "../database/database-connection";
import { QueryResultRow } from "pg";


async function createClient(client: CreateClient): Promise<number>{

    const result = await connection.query<QueryResultRow>(`INSERT INTO clients (name, address) VALUES ($1, $2) RETURNING id;`,[client.name, client.address]);
    return result.rows[0].id;
}


const clientRepository = {
    createClient,

}

export default clientRepository;