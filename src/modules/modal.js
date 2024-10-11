import { createElement } from "./createElement";

export function modalInput(){
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    let priority = document.getElementById('priority').value;
    let dueDate = document.getElementById('dueDate').value;
    let notes = document.getElementById('notes').value;
    let newItem = new createElement(title,desc,priority,dueDate,notes);
    
    return newItem;
}


