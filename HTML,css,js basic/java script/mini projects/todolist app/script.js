document.addEventListener('DOMContentLoaded', ()=> {
  const input = document.getElementById("todo-input")
  const addtskBtn = document.getElementById("add-task-btn")
  const todoList = document.getElementById("todo-list")


  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //rendering the tasks from the local storage
  tasks.forEach(task => renderTask(task));  
  
  addtskBtn.addEventListener("click", () => {
  const tasktext=input.value.trim();//.trim() removes the white spaces 
  if (input.value==="") return;
    //task creation
    const newtask = {
    id:Date.now(),
    text:tasktext,
    completed:false,
    };
    //pushing the task to the tasks array
    tasks.push(newtask);
    savedTasks();
    renderTask(tasks[tasks.length-1]);
    input.value = "";//clear the input field
    //console.log(tasks);
});

function renderTask(task){
  const li = document.createElement("li");
  if(task.completed)  li.classList.add("completed");
  li.innerHTML =`<span>${task.text}</span><button class="li-btn">Delete</button>`

  li.addEventListener("click",function(e){
    if(e.target.tagName==="BUTTON")return 
    task.completed = !task.completed;
    li.classList.toggle("completed");
    savedTasks();});

  li.querySelector("button").addEventListener("click",function(e){
    e.stopPropagation();//to stop the event from bubbling up
    tasks=tasks.filter(t=>t.id!==task.id);
    li.remove();
    savedTasks();})

  todoList.appendChild(li);}

  function savedTasks(){
  localStorage.setItem("tasks",JSON.stringify(tasks));
  //delete task
  }
  savedTasks();
});
