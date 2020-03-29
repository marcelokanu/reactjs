const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const {errors} = require('celebrate');

const app = express();

app.use(cors());
// Informa o express que está utilizando o JSON para transformar em javascript
app.use(express.json());
app.use(routes);

app.use(errors());


module.exports = app;