const express = require("express");
const connectDB = require("../db/connect");

const app = express();

async function startServer() {
  const db = await connectDB();

  app.get("/", async (req, res) => {
    const users = await db.collection("User").find().toArray();
    res.json(users);
  });

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
}

startServer();