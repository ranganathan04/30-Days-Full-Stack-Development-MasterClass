let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getFilterValue() {
  const filter = document.getElementById("filter");
  return filter ? filter.value : "all";
}

function renderTasks() {
  const taskList = document.getElementById("task-list");
  const filterValue = getFilterValue();
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    if (filterValue === "completed" && !task.completed) return;
    if (filterValue === "incomplete" && task.completed) return;

    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onchange = function () {
      tasks[index].completed = checkbox.checked;
      saveTasks();
      renderTasks();
    };

    const span = document.createElement("span");
    span.textContent = task.text;

    const delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.onclick = function () {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delButton);
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  tasks.push({ text: taskText, completed: false });
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

// Event listener to trigger re-rendering when filter changes
document.addEventListener("DOMContentLoaded", () => {
  const filterSelect = document.getElementById("filter");
  if (filterSelect) {
    filterSelect.addEventListener("change", renderTasks);
  }
  renderTasks();
});
