// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { NOTFOUND } from "dns";

// Global Variables
export const collections: { electricalMachines?: mongoDB.Collection } = {};

// Initialize Connection

export async function connectToDataBase() {

    dotenv.config();

    //const resultDotEnv = dotenv.config();
    //if (resultDotEnv.error) { throw resultDotEnv.error }
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const electricalMachinesCollections: mongoDB.Collection = db.collection(process.env.ELECTRICAL_MACHINE_COLLECTION_NAME);

    collections.electricalMachines = electricalMachinesCollections;

    console.log(`Successufully connected to database ${db.databaseName} and collection ${electricalMachinesCollections.collectionName}`);

}