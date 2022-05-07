const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

const gettodo = (req, res, next) => {
    res.render('todo');
}
const getdata = (req, res, next) => {
    Todo.find({}, (err , todos) => {
        res.render('data', {
            todosList : todos,
        });
    });
}
const getdone = (req, res, next) => {
    res.render('done');
}
const posttodo = (req,res,next) => {
    var todo = new Todo();
    todo.task = req.body.task;
    todo.save((err, doc) => {
        if (!err){
            res.render('done');
        } else {
            res.render('error');
            console.log('Error during record insertion : ' + err);
        }
    });
     // diri un tableau fih ga3 data li rahi f la base  de donné et diri structré like 
            // ["id" => id, "task" => task] ...

            /*
            res.render(
                todo.forEach(todo => {
                    JSON.stringify(
                        todo,
                        ['id', 'task'],
                    );
                });
            );
    */
}

module.exports = {
    gettodo,
    getdata,
    getdone,
    posttodo,
}