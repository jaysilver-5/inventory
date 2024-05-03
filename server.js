const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const categoryRoutes = require('./routes/categories');
const itemRoutes = require('./routes/items');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/categories', categoryRoutes);
app.use('/items', itemRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
