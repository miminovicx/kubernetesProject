const express = require('express');
const { Course } = require('./db/models');
const app = express();
const port = 3000;

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root_password',
    database: 'mydatabase'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connecté à MySQL');
});


app.use(express.json());

// Route pour obtenir la liste des courses
app.get('/courses', async (req, res) => {
  const courses = await Course.findAll();
  res.json(courses);
});

// Route pour ajouter une course
app.post('/courses', async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
});

// Route pour mettre à jour une course
app.put('/courses/:id', async (req, res) => {
  const course = await Course.findByPk(req.params.id);
  if (course) {
    await course.update(req.body);
    res.json(course);
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

// Route pour supprimer une course
app.delete('/courses/:id', async (req, res) => {
  const course = await Course.findByPk(req.params.id);
  if (course) {
    await course.destroy();
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
