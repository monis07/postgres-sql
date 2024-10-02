import dotenv from 'dotenv';  
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

import { Client } from 'pg';

export async function getClient() {

    console.log(process.env.POSTGRES_STRING);

    const client = new Client(process.env.POSTGRES_STRING);
    await client.connect();
    return client;
}