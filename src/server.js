const express = require('express'); 
const routes = require('./routes');



const app = express();
app.use(express.json());
const sqlite3 = require('sqlite3').verbose();

app.use(routes);

app.listen(3001);