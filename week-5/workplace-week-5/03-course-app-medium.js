const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let ADMINS = [];
let USERS = [];
let COURSES = [];

// Read data from file, or initialize to empty array if file does not exist
try {
  ADMINS = JSON.parse(fs.readFileSync('admins.json', 'utf8'));
  USERS = JSON.parse(fs.readFileSync('users.json', 'utf8'));
  COURSES = JSON.parse(fs.readFileSync('courses.json', 'utf8'));
} catch {
  ADMINS = [];
  USERS = [];
  COURSES = [];
}
// console.log(ADMINS);

const SECRET = 'my-secret-key';

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// User routes
app.post('/users/signup', (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username);
  if (user) {
    res.status(403).json({ message: 'User already exists' });
  } else {
    const newUser = { username, password };
    USERS.push(newUser);
    fs.writeFileSync('users.json', JSON.stringify(USERS));
    const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'User created successfully', token });
  }
});

app.post('/users/signin', (req, res) => {
  const { username, password } = req.headers;
  // const { username, password } = req.body;

  const user = USERS.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token });
  } else {
    res.status(403).json({ message: 'Invalid username or password' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
