function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerText = taskText;

    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    li.oncontextmenu = function () {
        li.remove();
        return false;
    };

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
