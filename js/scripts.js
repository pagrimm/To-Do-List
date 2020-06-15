// Business Logic
function ToDo(activity) {
  this.activity = activity
}
function ToDoList() {
  this.list = [];
  this.currentId = 0
}
ToDoList.prototype.addToDo = function(inputToDo)  {
  inputToDo.id = this.assignId();
  this.list.push(inputToDo);
}
ToDoList.prototype.assignId = function()  {
  this.currentId += 1;
  return this.currentId;
}
// ToDoList.prototype.findToDo = function(id)  {
//   for (let i=0; i< this.list.length; i++) {
//     if (this.list[i].id ==id) {
//       return this.list[i];
//     }
//   }
//   return false;
// };


// User Interface
$(document).ready(function()  {
  $("form").submit(function(event)  {
    event.preventDefault();
    
  } )
})