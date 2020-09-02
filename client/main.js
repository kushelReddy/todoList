import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../lib/collections/collections.js';
import './main.html';


// todoList helpers
Template.todoList.helpers({
  todos : function(){
    var todos = Todos.find({},{sort : {createdAt : -1}});
      return todos;
  }
});

// todoList events
Template.todoList.events({
  "submit #todoForm" : function(){
    event.preventDefault();
    var todo =
      {
        lable: $(event.target).find("[name=lable]").val(),
        createdAt : new Date()
      }
    Todos.insert(todo);
    $(".lable").val("");
  }
});

// todo Events
Template.todo.events({
  "click .delete" : function(){
    return Todos.remove({_id : this._id});
  }
});
