const express = require('express');
const path = require('path');
const nomeApp = 'Ninho';
const app = express();

app.use(express.static(`${__dirname}/dist/${nomeApp}`));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
