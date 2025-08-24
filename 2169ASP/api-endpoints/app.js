const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000;

let users =[
    {
    id: 1,
    name: 'Carmela',
    email: 'mela@gmail.com',
    age: 25,
    salary: 25000
},
{
    id: 2,
    name: 'Joseph',
    email: 'joe@yahoo.com',
    age: 30,
    salary: 45000
},
{
    id: 3,
    name: 'James',
    email: 'james@msn.com',
    age: 35,
    salary: 30000
},
{
    id: 4,
    name: 'John',
    email: 'john@gmail.com',
    age: 40,
    salary: 25000
},
{
    id: 5,
    name: 'Frank',
    email: 'frank@yahoo.com',
    age: 45,
    salary: 45000
},
{
    id: 6,
    name: 'Alex',
    email: 'alex@msn.com',
    age: 21,
    salary: 33000
},
];

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h2>Available Routes:</h2>
    <ul>
      <li>GET /api/users - Get all users</li>
      <li>GET /api/users/:id - Get user by ID</li>
      <li>GET /api/users/:id/:name - Display parameters</li>
      <li>POST /api/users - Add a new user</li>
      <li>DELETE /api/delete/:id - Delete user by ID</li>
    </ul>
  `);
});

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const user = users.find(h => h.id === parseInt(req.params.id));
    if(!user) return res.status(404).json('User with the given id not found');
    res.json(user);
});

app.get('/api/users/:id/:name', (req, res) => {
    const { id, name } = req.params;
    res.json({userId: id, username: name});
});

app.post('/api/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        salary: req.body.salary
    }
    users.push(user);
    res.json(users);
});

app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.send(`User with ID ${id} has been deleted.`);
});



app.listen(PORT, () => {console.log(`Server listening on http://localhost:${PORT}`)});