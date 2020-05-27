import express = require('express');

const app: express.Application = express();
app.get('/', (req, res) => {
  res.send('Node Express server running.');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
