import express = require('express');
import path = require('path');

const app: express.Application = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('/test', (req, res) => {
  res.send('Node Express server running.');
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  console.log('Current dir: ', __dirname);
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
