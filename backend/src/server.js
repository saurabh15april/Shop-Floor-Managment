const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../db/connect");

const app = express();
app.use(express.json()); // ✅ VERY IMPORTANT

async function startServer() {
  const { db1, db2, db3 } = await connectDB();

  // ✅ Routes
  const machineReqRoutes = require("./routers/machineREQlist")(db2);
  app.use("/api", machineReqRoutes);

  // ✅ Insert master data
  app.post("/add-master-data", async (req, res) => {
    try {
      const data = req.body;

      if (!data["Component number"]) {
        return res.status(400).json({ message: "Component number required" });
      }

      if (!data["Machine Operation"]) {
        return res.status(400).json({ message: "Machine Operation required" });
      }

      if (!data["Cycle Time"]) {
        return res.status(400).json({ message: "Cycle Time required" });
      }

      if (!data["Machine Name"]) {
        return res.status(400).json({ message: "Machine Name required" });
      }

      const result = await db2   // ✅ FIXED
        .collection("Master data")
        .insertOne(data);

      res.json({
        message: "Master data inserted successfully ✅",
        insertedId: result.insertedId
      });

    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({
          message: "Duplicate entry not allowed",
          error: error.message
        });
      }

      res.status(500).json({ error: error.message });
    }
  });

  // ✅ Merge data
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
        {
          $merge: {
            into: "resultantData",
            whenMatched: "replace",
            whenNotMatched: "insert"
          }
        }
      ]).toArray();

      res.json(data);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.listen(5000, "0.0.0.0", () => {
    console.log("Server running on port 5000");
  });
}

startServer();