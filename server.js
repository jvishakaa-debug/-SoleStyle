const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: "Men's Formal Shoe", price: 1899 },
    { id: 2, name: "Trendy Sneaker", price: 1499 },
    { id: 3, name: "Running Shoe", price: 2199 }
  ]);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;
