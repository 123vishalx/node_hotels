const express = require('express');
const app = express();
const port = 8000;
const db = require('./db'); // Ensure this is correctly configured

const personRoutes = require('./routes/personRoutes'); // Ensure this path is correct
const MenuItems = require('./models/Menuitems'); // Ensure this path is correct

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/user', (req, res) => {
  res.send('Hello World! myself Vishal');
});

// Use personRoutes for handling routes related to Person
app.use('/person', personRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
