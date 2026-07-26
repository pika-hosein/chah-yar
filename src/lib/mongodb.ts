import { Db, MongoClient, MongoClientOptions, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DB ?? "chah-yar";

let clientPromise: Promise<MongoClient> | undefined;

const clientOptions: MongoClientOptions = {
  retryWrites: true,
  serverSelectionTimeoutMS: 15_000,
  tls: true,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

declare global {
  var mongoClientPromise: Promise<MongoClient> | undefined;
}

export async function getDatabase(): Promise<Db> {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (process.env.NODE_ENV === "development") {
    clientPromise ??=
      global.mongoClientPromise ?? new MongoClient(uri, clientOptions).connect();
    global.mongoClientPromise = clientPromise;
  } else {
    clientPromise ??= new MongoClient(uri, clientOptions).connect();
  }

  const client = await clientPromise;
  return client.db(databaseName);
}
