const express = require('express');
const path = require('path');
const api = require('./api/index.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// App using port 3001
app.listen(3001, () =>
  console.log(`App listening at http://localhost:${3001}`)
);
