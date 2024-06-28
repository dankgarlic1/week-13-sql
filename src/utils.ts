import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgresql://postgres.ezpajjfpczzeuwsexowr:Harshit@20044002@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
  );
  await client.connect();
  return client;
}
