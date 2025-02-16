document.addEventListener('DOMContentLoaded', ()=> {
  const input = document.getElementById("todo-input")
  const addtskBtn = document.getElementById("add-task-btn")
  const todoList = document.getElementById("todo-list")


  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //rendering the tasks from the local storage
  tasks.forEach(task => renderTask(task));  
  
  addtskBtn.addEventListener("click", () => {
  if (input.value==="") return;
    const tasktext=input.value.trim();//.trim() removes the white spaces 
    //task creation
    const task = {
    id:Date.now(),
    text:tasktext,
    completed:false,
    };
    //pushing the task to the tasks array
    tasks.push(task);
    savedTasks();
    input.value = "";//clear the input field
    //console.log(tasks);
})
  function savedTasks(){
  localStorage.setItem("tasks",JSON.stringify(tasks));
  renderTask(tasks[tasks.length-1]);
}

  function renderTask(task){
  const li = document.createElement("li");
  li.innerHTML =`<span>${task.text}</span>
  <button class="li-btn">Delete</button>`
  todoList.appendChild(li);
  }

});
