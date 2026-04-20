const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Use routes
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio API Running");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});