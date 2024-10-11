import { modalInput } from "./modal"; 
import { createElement } from "./createElement";

const display = document.querySelector('.listArea');

// Initialize the task list globally
let theList = [];

// Populate the initial list of tasks
function initializeList() {
    theList = [
        new createElement("touch grass", "touch some of that weird green stuff", "2024-12-26", "high", "hehe"),
        new createElement("Watch talk tuah podcast", "hawk tuah", "2024-11-16", "high", ""),
        new createElement("Gyatt to study", "skibidi", "2024-12-26", "high", "hehe im michael jackson"),
    ];
}

// Display all items in the list
export function displayList() { // Exported function
    display.innerHTML = ''; // Clear previous items
    for (let i = 0; i < theList.length; i++) {
        appendListToDOM(theList[i]);
    }
}

// Append a new item to the DOM
function appendListToDOM(item) {
    const cards = document.createElement('div');
    cards.classList.add('list-item');

    const deleteIcon = document.createElement('p');
    deleteIcon.textContent = 'X' ;
    deleteIcon.className = "delete";
    deleteIcon.style.cursor = 'pointer'; // Change cursor to pointer for better UX

    // Set card content
    cards.innerHTML = `
        <div>Task: ${item.title}</div>
        <div>Description: ${item.description}</div>
        <div>Date: ${item.dueDate.toLocaleDateString()}</div> <!-- Format date -->
        <div>Priority: ${item.priority}</div>
        <div>Notes: ${item.notes}</div>
    `;

    cards.appendChild(deleteIcon); // Append delete icon to card

    // Add delete functionality
    deleteIcon.onclick = function() {
        deleteItem(item);
    };

    display.appendChild(cards); // Append the card to the display area
}

// Function to delete an item
function deleteItem(item) {
    // Remove the item from the list
    theList = theList.filter(listItem => listItem !== item);
    
    // Re-display the list to reflect changes
    displayList();
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();

    // Use modalInput to get new task data
    let newItem = modalInput();

    // Add the new item to the list
    theList.push(newItem);

    // Display the updated list
    displayList();

    // Clear form fields after submission
    clearFormFields();
}

// Function to clear form fields
function clearFormFields() {
    document.getElementById('title').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('notes').value = '';
}

// Initialize the list and display it
initializeList();
displayList();

// Ensure the script runs after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', handleFormSubmission);
});
