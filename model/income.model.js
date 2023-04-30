const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({

    category : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    amount : {
        type : Number,
        required : true,
        trim : true
    },
    date : {
        type : Date,
        required : true,
        trim : true
    }
    ,
    division : {
        type : String,
        required : true,
        trim : true
    }
})

module.exports = mongoose.model('Income', incomeSchema);