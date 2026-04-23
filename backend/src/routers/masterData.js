



// insert data in master data One by One
app.post("/add-master-data", async (req, res) => {
  try {
    const db = await connectDB();

    const data = req.body;

    // ✅ Validation
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

    // ✅ Insert one record
    const result = await db.collection("Master data").insertOne(data);

    res.json({
      message: "Master data inserted successfully ✅",
      insertedId: result.insertedId
    });

  } catch (error) {

    // 🔴 Duplicate error handling
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Duplicate entry not allowed",
        error: error.message
      });
    }

    res.status(500).json({ error: error.message });
  }
});
