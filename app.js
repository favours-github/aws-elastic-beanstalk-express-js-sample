const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I am an instructor for cloudelite.us it's my pleasure to meet you all'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
