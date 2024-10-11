import { List } from "./createElement";

export function displayOnload(){
    let welcome = document.createElement('h1');
    let wrapper = document.querySelector('.wrapper');
    welcome.textContent = "WELCOME";
    welcome.className = "welcome";
    
    let addNewTask = document.createElement('button');
    addNewTask.className = "newTaskBtn";
    addNewTask.textContent = "Add Task";
    
    // Append elements in the correct order
    wrapper.appendChild(welcome);
    wrapper.appendChild(addNewTask);
}

