const express = require('express');
const path = require('path');

const port = 3030;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
