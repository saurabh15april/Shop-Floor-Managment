const { MongoClient } = require("mongodb");

require("dotenv").config();
const uri = process.env.MONGO_URI;


const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB Connected Successfully");
    return client.db("hope");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;