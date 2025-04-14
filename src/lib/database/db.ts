import { MongoClient, Db } from "mongodb";

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;
const DB_NAME: string | undefined = process.env.DB_NAME; // Or get DB name from env

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!DB_NAME) {
  throw new Error("Please define the DB_NAME environment variable inside .env.local");
}

let client: MongoClient | null = null;
let db: Db | null = null;

// connect to the database
export async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is not defined. Please check your .env.local file."
    );
  }
  if (client && db) {
    console.log("Already connected to MongoDB");
    return { client, db };
  }

  try {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db(DB_NAME);
    console.log("Connected to MongoDB");
    return { client, db };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw the error after logging
  }
}
// get the database
export function getDb(): Db | null {
  return db;
}

// Optional: Function to close the connection if needed
export async function closeDatabaseConnection() {
  if (client) {
    await client.close();
    client = null;
    db = null;
    console.log("MongoDB connection closed");
  }
}

// Initialize connection immediately (or call connectToDatabase() when needed)
// connectToDatabase().catch(console.error); // You might want to connect on demand instead
// Initialize connection immediately (or call connectToDatabase() when needed)
connectToDatabase().catch(console.error); // You might want to connect on demand instead
