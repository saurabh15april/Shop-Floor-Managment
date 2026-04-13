const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../db/connect");

const app = express();



async function startServer() {
  const {db1 , db2 , db3} = await connectDB();


  // db1 login database:         Owner -> Admin -> Machine login -> Viewer. 
 // db2 dataloading database:   Master data -> Machine REQ list -> Resultant data.
 // db3 empaty 

  app.get("/", async (req, res) => {
    const users = await db1.collection("Viewer").find().toArray();
    res.json(users);
  });

  app.get("/merged-data", async (req, res) => {
  try {
    

    const data = await db2.collection("Machine REQ list").aggregate([
      {
        $lookup: {
          from: "Master data",
          localField: "Component number",
          foreignField: "Component number",
          as: "masterDetails"
        }
        
      },
  { $unwind: "$masterDetails" }
    ]).toArray();

    res.json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
}

startServer();