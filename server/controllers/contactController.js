const db = require("../models/db");

// CREATE message
exports.createMessage = (req, res) => {
  const { name, email, message } = req.body;

  const sql =
    "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err) => {
    if (err) {
      console.log("CREATE ERROR:", err);
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: "Saved successfully" });
  });
};

// GET messages
exports.getMessages = (req, res) => {
  const sql = "SELECT * FROM messages ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      console.log("GET ERROR:", err);
      return res.status(500).json({ error: err.message });
    }

    res.json(result);
  });
};

// DELETE message
exports.deleteMessage = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM messages WHERE id=?";

  db.query(sql, [id], (err) => {
    if (err) {
      console.log("DELETE ERROR:", err);
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: "Deleted successfully" });
  });
};