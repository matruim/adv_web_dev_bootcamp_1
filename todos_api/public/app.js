/* global $ */ //just for cloud 9 to not be annoying
$(document).ready(function(){
    $.getJSON('/api/todos')
    .then(addTodos)
    .catch(logErrors);
    
    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    });
    
    $('.list').on('click','li',function(){
        updateTodo($(this));
    });
    $('.list').on('click','span',function(e){
        e.stopPropagation();
        removeTodo($(this).parent());
    });
    
});


function addTodos(todos) {
    // add todos to page here...
    todos.forEach(addTodo);
}
function addTodo(todo){
        var li = $('<li>' + todo.name + '<span>x</span></li>');
        li.addClass("task");
        li.data('id',todo._id);
        li.data('completed',todo.completed);
        if(todo.completed){
            li.addClass("done");
        }
        $('.list').append(li)
    }
function createTodo(){
    var userInput = $('#todoInput').val()
    $.post("/api/todos",{name: userInput})
    .then(function(newTodo){
        $('#todoInput').val('');
        addTodo(newTodo)
        
    })
    .catch(logErrors)
}
function removeTodo(todo){
    
    var clickedId = todo.data('id');
    var deleteURL = '/api/todos/'+clickedId;
    
    $.ajax({
        method: 'DELETE',
        url: deleteURL
    })
    .then(function(data){
        todo.remove();
    })
}
function updateTodo(todo){
    
    var updateURL = '/api/todos/'+todo.data('id');
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone}
    
    $.ajax({
        method: 'PUT',
        url: updateURL,
        data: updateData
    })
    .then(function(updatedTodo){
        todo.toggleClass('done');
        todo.data('completed', isDone);
    })
}

function logErrors(err){
    console.log(err);
}