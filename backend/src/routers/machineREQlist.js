const express = require("express");

module.exports = (db2) => {
  const router = express.Router(); // ✅ inside function

  router.get("/", async (req, res) => {
    const users = await db2.collection("Master data").find().toArray();
    res.json(users);
  });

  router.post("/add-machine-req-list", async (req, res) => {
    try {
      const data = req.body;

      if (!Array.isArray(data)) {
        return res.status(400).json({ message: "Send data as array" });
      }

      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        if (!item["Component number"]) {
          return res.status(400).json({
            message: `Component number missing at index ${i}`
          });
        }

        if (!item["Qty (BUn)"]) {
          return res.status(400).json({
            message: `Qty missing at index ${i}`
          });
        }
      }

      const result = await db2
        .collection("Machine REQ list")
        .insertMany(data);

      res.json({
        message: "Data inserted successfully ✅",
        insertedCount: result.insertedCount
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return router;
};