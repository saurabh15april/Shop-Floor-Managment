const { MongoClient } = require("mongodb");

require("dotenv").config();
const uri = process.env.MONGO_URI;


const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB Connected Successfully");
    return{
    // database names there are 3 data base in one cluster shop floor managment.
     
    db1 : client.db("hope"),
    db2 : client.db("data-loading"),
   // db3 : client.db("resultantData")
  }
} catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;