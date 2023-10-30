import { MongoClient } from "mongodb";
const uri = `mongodb+srv://visitor:${process.env.DATABASE_PW}@cluster0.9mqkfg2.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  minPoolSize: 1,
  maxPoolSize: 10,
});

export default client;
