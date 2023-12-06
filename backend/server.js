const express = require('express');
const app = express();
const port = 3001;

const message = 'Hello from the Node.js backend!';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/api/message', (req, res) => {
  res.json({ message });
});

app.listen(port, () => {
  console.log(`Node.js server is running on port ${port}`);
});