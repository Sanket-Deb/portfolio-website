// /src/lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://imsanketdeb20:sanket20@cluster0.dimz1pc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB connection string
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so we can reuse the connection
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
