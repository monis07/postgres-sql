import { getClient } from "./utils";

async function deleteTodo() {
    const client = await getClient();
    
    const deleteTodoText = 'DROP TABLE IF EXISTS todos';
    await client.query(deleteTodoText);
    
    console.log(`Todos table deleted successfully!`);
}

deleteTodo();
