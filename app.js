const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('welcome mr brown, mr rodney, mr bj and baba akin'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
