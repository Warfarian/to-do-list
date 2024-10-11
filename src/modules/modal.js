import { createElement } from "./createElement";

export function modalInput() {
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    let priority = document.getElementById('priority').value;
    let dueDate = document.getElementById('dueDate').value;
    let notes = document.getElementById('notes').value;

    // Check if dueDate is valid before creating the element
    const date = new Date(dueDate);
    if (isNaN(date)) {
        alert("Please enter a valid date.");
        return null; // Return null if the date is invalid
    }

    let newItem = new createElement(title, desc, date, priority, notes);
    
    return newItem;
}
