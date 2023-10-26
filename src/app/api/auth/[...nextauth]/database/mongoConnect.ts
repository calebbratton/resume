import { MongoClient, ServerApiVersion } from "mongodb";
// Replace the placeholder with your Atlas connection string
const uri = `mongodb+srv://visitor:${process.env.DATABASE_PW}@cluster0.9mqkfg2.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const mongoConnect = async () => {
  try {
    const mongoClient = new MongoClient(uri);
    console.log("Connecting to MongoDB Atlas cluster...");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");

    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
};

export default mongoConnect;
