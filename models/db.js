const mongoose = require('mongoose');

const uri = "mongodb://127.0.0.1:27017/tododb";

mongoose.connect( uri , { useNewUrlParser: true }, (err) => {
    if (!err){
        console.log('MongoDB Connection Succeeded.');
    } else {
        console.log('Error in DB connection : ' + err);
    }
});

require('./todo.models');