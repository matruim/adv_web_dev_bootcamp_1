var db = require("../models");

exports.getTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createTodo = function(req, res){
    //create the record in the DB
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.showTodo = function(req,res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundToDo){
        res.json(foundToDo);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.updateTodo = function(req,res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body,{new:true})
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.deleteTodo = function(req, res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.status(200).json({message: "We Deleted IT!"})
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;