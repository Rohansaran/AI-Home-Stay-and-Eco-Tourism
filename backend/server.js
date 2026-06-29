const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const homestayRoutes = require("./routes/homestayRoutes");

app.use("/api/homestays", homestayRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "EcoStay AI Backend Running Successfully 🚀",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});