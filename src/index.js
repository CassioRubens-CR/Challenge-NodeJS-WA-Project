const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo porta ${PORT}`);
});
