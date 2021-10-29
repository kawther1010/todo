const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');


const gettodo = (req, res, next) => {
    Todo.find({}, (err , todos) => {
        res.render('todo', {
            todosList : todos,
        });
    });
}


const posttodo = (req,res,next) => {
    var todo = new Todo();
    todo.task = req.body.task;
    todo.save((err, doc) => {
        if (!err){
            res.send('done!');
        } else {
            res.render('error');
            console.log('Error during record insertion : ' + err);
        }
    });
}

module.exports = {
    gettodo,
    posttodo,
}