const db = require("../models/db");

// CREATE
exports.createMessage = (req, res) => {
  const { name, email, message } = req.body;

  const sql =
    "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Saved successfully" });
  });
};

// READ
exports.getMessages = (req, res) => {
  const sql = "SELECT * FROM messages ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

// DELETE
exports.deleteMessage = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM messages WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Deleted successfully" });
  });
};