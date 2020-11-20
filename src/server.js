const express = require('express'); 
const routes = require('./routes');

const app = express();//instalar nosso servidor
const sqlite3 = require('sqlite3').verbose();

app.use(routes);

app.listen(3001);