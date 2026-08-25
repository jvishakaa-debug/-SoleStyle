const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/order', (req, res) => {
  console.log(req.body);
  res.json({ success: true, message: "Order placed!" });
});

module.exports = app;
