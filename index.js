const express = require('express');
const cors = require('cors');
const income = require('./routes/income.route');
const expense = require('./routes/expense.route');
const db = require('./db/connect');

const app = express();

app.use(express.json());
app.use(cors());

db();

app.use(income);
app.use(expense);


app.listen(4000, () => {
    console.log('Express is started ...');
})