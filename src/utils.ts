import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const db_url = process.env.POSTGRES_URL;

export async function getClient() {
  const client = new Client(db_url);
  await client.connect();
  return client;
}
