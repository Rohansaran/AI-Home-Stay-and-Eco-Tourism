require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const homestayRoutes = require("./routes/homestayRoutes");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

// Connect MongoDB
connectDB();

const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/homestays", homestayRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "EcoStay AI Backend Running Successfully 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});