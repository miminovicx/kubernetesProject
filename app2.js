const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
