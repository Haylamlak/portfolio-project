const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();

// ✅ FIX CORS (IMPORTANT)
app.use(cors({
  origin: "https://this-is-my-last-portfolio-2026.netlify.app",
  methods: ["GET", "POST", "DELETE"],
  credentials: true
}));

app.use(express.json());

// ✅ Use routes
app.use("/api", contactRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Portfolio API Running");
});

// ✅ Start server
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});