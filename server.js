const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: "Men's Formal Shoe", price: 1899 },
    { id: 2, name: "Trendy Sneaker", price: 1499 },
    { id: 3, name: "Running Shoe", price: 2199 }
  ]);
});

app.listen(PORT, () => {
  console.log(`SoleStyle server running at http://localhost:${PORT}`);
});