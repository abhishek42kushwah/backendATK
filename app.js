const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Load env
dotenv.config();

// Connect DB
connectDB();


const app = express();
app.use(express.json());


app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5000", "http://localhost:3000","https://atulyakarigari-pp8w.onrender.com"],
    credentials: true,
  })
);

// ✅ Then add routes
app.use("/api", require("./routes/authRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
