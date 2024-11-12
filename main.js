//Création de la class Tasks

class Task{
    constructor(name){
        this.name = name;
        this.completed = false;
    }
    toggleCompleted(){
        this.completed = !
        this.completed;
    }
}

//Fonction Ajouter 

document.getElementById('addButton').addEventListener('click',addTask);

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();

    if(taskName){
        const task = new Task(taskName);
        displayTask(task);
        taskInput.value = '';
    }
}

function displayTask(task){
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');

    ptaskItem.textContent = task.name;
    taskList.appendChild(taskItem)
}
//Ajout du bouton de suppression

function displayTask(task){
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');

    taskItem.textContent = task.name;
//Ajout du button Supprimer
    const deleteButton = document.createElement('button');

    deleteButton.textContent ='Supprimer';
    deleteButton.addEventListener('click',()=>{
        taskList.removeChild(taskItem);
    })
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);




















    
}