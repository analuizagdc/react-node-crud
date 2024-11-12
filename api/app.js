// app.js
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.use('/api/collections', require('./routers/collectionRoutes'));
app.use('/api/materials', require('./routers/materialsRoutes'));
app.use('/api/users', require('./routers/usersRoutes'));

module.exports = app;

