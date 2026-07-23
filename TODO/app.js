function addTask() {

    let input = document.getElementById("todoInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function editTask(button) {

    let span = button.parentElement.querySelector("span");

    let newTask = prompt("Edit Task", span.innerText);

    if (newTask !== null && newTask.trim() !== "") {
        span.innerText = newTask;
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}