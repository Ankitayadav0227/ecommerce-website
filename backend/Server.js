const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("API Running");
});

// Routes
const UserRoutes = require("./Routes/userRoutes");
const ProductRoutes = require("./Routes/ProductRoutes");

app.use("/api/Users", UserRoutes);
app.use("/api/Products", ProductRoutes);

// Server Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});