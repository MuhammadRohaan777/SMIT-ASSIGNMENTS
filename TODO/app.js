function addTask() {

    let input = document.getElementById("todoInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox" onchange="toggleTask(this)">
        <span>${task}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";

    updateCounts();
}

function editTask(button) {

    let span = button.parentElement.querySelector("span");

    let newTask = prompt("Edit Task", span.innerText);

    if (newTask !== null && newTask.trim() !== "") {
        span.innerText = newTask.trim();
    }
}

function deleteTask(button) {

    button.parentElement.remove();

    updateCounts();
}

function toggleTask(checkbox) {

    let span = checkbox.parentElement.querySelector("span");

    if (checkbox.checked) {
        span.style.textDecoration = "line-through";
        span.style.color = "lightgreen";
    } else {
        span.style.textDecoration = "none";
        span.style.color = "yellow";
    }

    updateCounts();
}

function updateCounts() {

    let tasks = document.querySelectorAll("#taskList li");

    let total = tasks.length;

    let completed = document.querySelectorAll(
        "#taskList input[type='checkbox']:checked"
    ).length;

    let pending = total - completed;

    document.getElementById("total").innerText = total;
    document.getElementById("completed").innerText = completed;
    document.getElementById("pending").innerText = pending;
}