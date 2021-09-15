window.onload = inicio();

function inicio(){
    getTasks();
    addButtom();
}
///charge of tasks
function getTasks(){
    fetch('api/tasks').then(response => response.json()).then(jsonTasks);
}
///Buttons
function deleteTask(){
    let deleteButtom = document.getElementById("deleteBtn");
    deleteButtom.addEventListener("click", clickBtnDelete);
}

function doneTask(){
    let doneButtom = document.getElementById("doneBtn");
    doneButtom.addEventListener("click", clickBtnDone);
}

function addButtom(){
    let addButtom = document.getElementById("addBtn");
    addButtom.addEventListener("click", clickAddBtn);
}

function editTask(){
    let addButtom = document.getElementById("editBtn");
    addButtom.addEventListener("click", clickEditBtn);
}

///Buttoms functions
async function clickDeleteBtn(id){
    if (confirm("Desea eliminar esta tarea?")) {
        const request = await fetch('api/tasks/delete/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
    };
    location.reload();
}
async function clickDoneBtn(id){
    const request = await fetch('api/tasks/done/' + id, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    location.reload();
}

async function clickAddBtn(){
    let taskBody = document.getElementById("txtArea");
    let taskPost = {};
    alert(taskBody.value);
    taskPost.task = taskBody.value;
    taskPost.done = 0;

    const request = await fetch('api/tasks/insert', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskPost)
    });

    location.reload();
}

async function clickEditBtn(id){
    let taskBody;
    if(taskBody= prompt("ingrese nuevo cuerpo de la tarea")){
        const request = await fetch('api/tasks/edit/' + id + '/' + taskBody, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    };
    
    location.reload();
}

///Add to HTML

function jsonTasks(json){

    let taskListActive = document.getElementById("active");
    let taskListInactive = document.getElementById("inactive");
    let htmlTasksActive = "";
    let htmlTasksInactive = "";
    let dialog = "DESHACER";

   for(let task of json){
       if(task.done == 0){
           dialog = "HACER";
       }else{
           dialog ="DESHACER";
       }
        let done = '<a id ="doneBtn" href ="#" onclick="clickDoneBtn('+task.id+')">'+dialog+'</a>';
        let dlt = '<a id ="deleteBtn" href ="#" onclick="clickDeleteBtn('+task.id+')">Borrar</a>';
        let edit = '<a id ="editBtn" href ="#" onclick="clickEditBtn('+task.id+')">Editar</a>';
       if(task.done == 0){
            htmlTasksActive += '<tr><td>' + task.task + '</td><td>'+ done +'</td><td> '+ dlt+'</td><td>'+edit+'</td> </tr>';
       }else{
            htmlTasksInactive +='<tr><td>' + task.task + '</td><td>'+ done +'</td><td> '+ dlt+'</td> </tr>';
       }
        
    }

    taskListActive.innerHTML = htmlTasksActive;
    taskListInactive.innerHTML = htmlTasksInactive;
}
