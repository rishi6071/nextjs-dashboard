import postgres from "postgres";
import { NextResponse } from "next/server";

// Initialize PostgreSQL client with error handling for missing env variable
const POSTGRES_URL = process.env.POSTGRES_URL;
if (!POSTGRES_URL) {
  throw new Error("POSTGRES_URL environment variable is not set");
}

const sql = postgres(POSTGRES_URL, { ssl: "require" });

async function listInvoices() {
  try {
    const data = await sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666;
    `;
    return data;
  } catch (error) {
    console.error("Error fetching invoices:", error);
    throw error;
  }
}

export async function GET() {
  try {
    const invoices = await sql.begin(async (sql) => {
      return await listInvoices();
    });
    return NextResponse.json(invoices);
  } catch (error: any) {
    console.error("Error in GET handler:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
