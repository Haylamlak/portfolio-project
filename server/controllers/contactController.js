const db = require("../models/db");

// GET messages
exports.getMessages = (req, res) => {
  const sql = "SELECT * FROM messages ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      console.log("DB ERROR:", err);
      return res.status(500).json({ error: err.message });
    }

    res.json(result);
  });
};