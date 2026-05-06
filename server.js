const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Cerealswale Backend Running ✅");
});

app.get("/products", (req, res) => {
  res.json([
    { name: "Wheat Seeds", price: 500 },
    { name: "Fertilizer", price: 300 }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
