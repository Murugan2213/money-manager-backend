const express = require('express');
const Expense = require('../model/expense.model');
const route = express.Router();

route.get('/expense/list', (req, res) => {
    try {
        Expense.find().then(data => {
            res.status(200).send({
                message : 'Expense retrieved successfully',
                data : data
            })
       }).catch(error => {
          res.status(400).send('Error while retieving');
       })
    } catch(error) {
        res.status(500).send('Internal server error');
    }
});

route.get('/expense/', async (req, res) => {
    try {
        await Expense.find({
            category: req.query.category
          }).then(data => {
            res.status(200).send({
                message : 'Expense retrieved successfully',
                data : data
            })
       }).catch(error => {
          res.status(400).send('Error while retieving');
       })
    } catch(error) {
        res.status(500).send('Internal server error');
    }
});

route.post('/expense', (req, res) => {
    try {
       const newExpense = new Expense(req.body)
       newExpense.save().then(data => {
            res.status(201).send({
                message : 'Expense saved Successfully',
                data : data
            })
       }).catch(error => {
          res.status(400).send('Error while retieving');
       })
    } catch(error) {
        res.status(500).send('Internal server error');
    }
});

route.put('/expense/:expenseId', (req, res) => {
    try {
        Income.findByIdAndUpdate({_id: req.params.expenseId},{ $set: req.body }, {new : true}).then(data => {
            res.status(200).send({
                message : 'Expense Successfully updated',
                data : data
            })
       }).catch(error => {
          res.status(400).send('Error while retieving');
       })
     } catch(error) {
         res.status(500).send('Internal server error');
     }
});

module.exports =  route;