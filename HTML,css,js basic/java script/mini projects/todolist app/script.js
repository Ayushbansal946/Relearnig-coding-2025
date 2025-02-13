document.addEventListener('DOMContentLoaded', ()=> {
const input = document.getElementById("todo-input")
const addtskBtn = document.getElementById("add-task-btn")
const todoList = document.getElementById("todo-list")
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => renderTask(task));
addtskBtn.addEventListener("click", () => {
  if (input.value==="") return;
    const tasktext=input.value.trim();
    const task = {
    id:Date.now(),
    text:tasktext,
    completed:false,
    };
    tasks.push(task);
    savedTasks();
    input.value = "";
    console.log(tasks);
});
function renderTask(task){

}
function savedTasks(){
  localStorage.setItem("tasks",JSON.stringify(tasks));
}
});