const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
// Informa o express que está utilizando o JSON para transformar em javascript
app.use(express.json());
app.use(routes);



app.listen(3333);