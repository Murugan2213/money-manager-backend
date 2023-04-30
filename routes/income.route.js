const express = require('express');
const Income = require('../model/income.model');
const route = express.Router();

route.get('/income/list', (req, res) => {
    try {
       Income.find().then(data => {
            res.status(200).send({
                message : 'Incomes retrieved successfully',
                data : data
            })
       }).catch(error => {
          res.status(400).send('Error while retieving');
       })
    } catch(error) {
        res.status(500).send('Internal server error');
    }
});

route.get('/income/', async (req, res) => {
    try {
        await Income.find({
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


route.post('/income', (req, res) => {
    try {
       const newIncome = new Income(req.body)
       newIncome.save().then(data => {
            res.status(201).send({
                message : 'Income saved Successfully',
                data : data
            })
       }).catch(error => {
          res.status(400).send('Error while retieving');
       })
    } catch(error) {
        res.status(500).send('Internal server error');
    }
});

route.put('/income/:incomeId', (req, res) => {
    try {
        Income.findByIdAndUpdate({_id: req.params.incomeId},{ $set: req.body }, {new : true}).then(data => {
            res.status(200).send({
                message : 'Income Successfully updated',
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