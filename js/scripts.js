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
ToDoList.prototype.deleteToDo = function(id)  {
  for (let i=0; i<this.list.length; i++)  {
    if (this.list[i].id == id)  {
      this.list.splice(i, 1);
      return true;
    }
  }
  return false;
}



// User Interface

let toDoList = new ToDoList();

function displayToDoList(checklistToDisplay) {
  let displayList = $("div#output");
  let htmlForListInfo = '';
  checklistToDisplay.list.forEach(function(toDo)  {
    htmlForListInfo += "<div><input type=\"checkbox\" id=" + toDo.id + ">" + toDo.activity + "</div>";
  });
  displayList.html(htmlForListInfo);
};

function attachListeners() {
  $("div#output").on("change", "input", function(){
    toDoList.deleteToDo(this.id);
    $(this).parent().addClass("checked");
    $(this).prop("disabled", true);
  });
}

$(document).ready(function()  {
  attachListeners();
  $("form").submit(function(event)  {
    event.preventDefault();
    const inputtedActivity = $("input").val();
    $("input").val("");
    let newActivity = new ToDo(inputtedActivity);
    toDoList.addToDo(newActivity);
    displayToDoList(toDoList);
  })
})