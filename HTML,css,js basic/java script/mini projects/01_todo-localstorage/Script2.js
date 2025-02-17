document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => renderTask(task));

  addTaskBtn.addEventListener("click", addTask);

  function addTask() {
      const taskText = input.value.trim();
      if (taskText === "") return;

      const newTask = {
          id: Date.now(),
          text: taskText,
          completed: false
      };

      tasks.push(newTask);
      saveTasks();
      renderTask(newTask);
      input.value = "";
  }

  function renderTask(task) {
      const li = document.createElement("li");
      if (task.completed) li.classList.add("completed");
      li.innerHTML = `<span>${task.text}</span><button class="li-btn">Delete</button>`;

      li.addEventListener("click", function(e) {
          if (e.target.tagName === "BUTTON") return;
          task.completed = !task.completed;
          li.classList.toggle("completed");
          saveTasks();
      });

      li.querySelector("button").addEventListener("click", function(e) {
          e.stopPropagation();
          tasks = tasks.filter(t => t.id !== task.id);
          li.remove();
          saveTasks();
      });

      todoList.appendChild(li);
  }

  function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});