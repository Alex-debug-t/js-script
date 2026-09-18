require('dotenv') .config();
const express = require('express');
const app = express ();
const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static HTML page at /
app.use(express.static('public'));
app.use((req, res, next) => {
 // Logs every request
 console.log(`${req.method} ${req.url} - ${new Date()}`);
 next(); // pass to next handler (required!)
});

// POST /user
app.post('/user', (req,res) => {
const { name, email } = req.body;
if (!name || !email) {
    return res.status (400).send("Name and email are required");
}
res.send(`Hello, ${name}!`);
});

// GET /user/:id
app.get('/', (req, res) => {
 res.send("My Week 2 API!");
});

app.get('/user/:id', (req, res) => {
const { id } = req.params;
console.log (id);
res.send(`user ${id} profile`);
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});