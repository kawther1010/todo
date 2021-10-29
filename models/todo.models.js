const mongoose = require('mongoose');

var todoschema = new mongoose.Schema({
    task: {
        type: String,
        required: false,
    },
}, {timestamps: true});


module.exports = mongoose.model( 'Todo' , todoschema);