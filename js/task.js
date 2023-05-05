var taskList = [];

window.onload = function () {
    if (localStorage.taskList != undefined && localStorage.taskList!="") {
        var listStr = localStorage.taskList;
        taskList=JSON.parse(listStr);
        populateList();
    }
}

function add() {
    var task = document.getElementById('task').value;
    taskList.push(task);
    localStorage.taskList=JSON.stringify(taskList);
    populateList()
}
function populateList() {
    var text = ""
    for (var i in taskList) {
        var task = taskList[i];
        text += task + '\n';
        list.value = text;
    }
}
function clearList() {
    var list = document.getElementById('list');
    list.value = '';
    taskList=[];
    localStorage.taskList = undefined;
}